import type { Express } from "express";
import { createServer, type Server } from "http";
import { ZodError } from "zod";
import { storage } from "./storage";
import { insertContactMessageSchema } from "@shared/schema";

export async function registerRoutes(app: Express): Promise<Server> {
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
      res.json(messages);
    } catch (error) {
      res.status(500).json({ error: "Failed to fetch messages" });
    }
  });
  

  const httpServer = createServer(app);

  return httpServer;
}
