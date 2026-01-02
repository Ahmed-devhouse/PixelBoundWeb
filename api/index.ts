// Vercel serverless function entry point - API routes only
import "dotenv/config";
import express, { type Request, Response, NextFunction } from "express";
import { ZodError } from "zod";
import { storage } from "../server/storage.js";
import { insertContactMessageSchema } from "../shared/schema.js";

const app = express();

// Middleware
app.use(express.json({
  verify: (req, _res, buf) => {
    req.rawBody = buf;
  }
}));
app.use(express.urlencoded({ extended: false }));

// Request logging middleware
app.use((req, res, next) => {
  const start = Date.now();
  const path = req.path;

  res.on("finish", () => {
    const duration = Date.now() - start;
    if (path.startsWith("/api")) {
      console.log(`${req.method} ${path} ${res.statusCode} in ${duration}ms`);
    }
  });

  next();
});

// Health check endpoint
app.get("/api/health", (req, res) => {
  res.json({
    success: true,
    message: "API is healthy",
    database: process.env.DATABASE_URL ? "configured" : "not configured",
  });
});

// API Routes
app.post("/api/contact", async (req, res) => {
  try {
    const validatedData = insertContactMessageSchema.parse(req.body);
    const message = await storage.createContactMessage(validatedData);
    res.status(201).json({
      success: true,
      message: "Contact message sent successfully",
      data: message,
    });
  } catch (error) {
    if (error instanceof ZodError) {
      console.error("Zod validation error for /api/contact:", error.issues);
      res.status(400).json({
        success: false,
        error: "Invalid request data",
        details: error.issues,
      });
    } else {
      console.error("Error creating contact message:", error);
      // Log the full error for debugging
      if (error instanceof Error) {
        console.error("Error message:", error.message);
        console.error("Error stack:", error.stack);
      }
      res.status(500).json({
        success: false,
        error: "Failed to send message. Please try again later.",
      });
    }
  }
});

app.get("/api/contact", async (req, res) => {
  try {
    const messages = await storage.getAllContactMessages();
    res.json({
      success: true,
      data: messages,
    });
  } catch (error) {
    console.error("Error fetching contact messages:", error);
    if (error instanceof Error) {
      console.error("Error message:", error.message);
      console.error("Error stack:", error.stack);
    }
    res.status(500).json({
      success: false,
      error: "Failed to fetch messages",
    });
  }
});

// Error handler
app.use((err: any, _req: Request, res: Response, _next: NextFunction) => {
  console.error("Unhandled error:", err);
  const status = err.status || err.statusCode || 500;
  const message = err.message || "Internal Server Error";
  res.status(status).json({
    success: false,
    error: message,
  });
});

// Export for Vercel serverless function
export default app;

