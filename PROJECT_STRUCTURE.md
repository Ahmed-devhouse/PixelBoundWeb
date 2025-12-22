# PixelBound Web - Project Structure Documentation

## 📁 Project Overview

**Project Name:** PixelBound Web  
**Type:** Full-stack web application  
**Tech Stack:** React + TypeScript + Express + PostgreSQL + Vite

---

## 🏗️ Architecture

### Monorepo Structure
```
PixelBoundWeb/
├── client/          # Frontend React application
├── server/          # Backend Express API
├── shared/          # Shared code (schemas, types)
└── attached_assets/ # Static assets (images, fonts)
```

---

## 📂 Directory Structure

### Root Configuration Files
- `package.json` - Dependencies and scripts
- `tsconfig.json` - TypeScript configuration
- `vite.config.ts` - Vite bundler configuration
- `drizzle.config.ts` - Database ORM configuration
- `tailwind.config.ts` - Tailwind CSS configuration
- `postcss.config.js` - PostCSS configuration
- `components.json` - shadcn/ui component configuration

### `/client` - Frontend Application

**Entry Points:**
- `client/index.html` - HTML template
- `client/src/main.tsx` - React entry point
- `client/src/App.tsx` - Main app component with routing

**Key Directories:**
- `client/src/components/` - React components
  - `ui/` - shadcn/ui components (40+ components)
  - `examples/` - Example/reference components
  - Main components: Header, Footer, HeroSection, ContactSection, etc.
  - ViralMatch-specific components (ViralMatch_*)
  
- `client/src/pages/` - Page components
  - `Home.tsx` - Main landing page
  - `viral-match.tsx` - Viral Match game page
  - `privacy-policy-ViralMatch.tsx` - Privacy policy page
  - `not-found.tsx` - 404 page

- `client/src/lib/` - Utility libraries
  - `queryClient.ts` - React Query configuration
  - `utils.ts` - Utility functions

- `client/src/hooks/` - Custom React hooks
  - `use-toast.ts` - Toast notification hook
  - `use-mobile.tsx` - Mobile detection hook

**Static Assets:**
- `client/public/` - Public assets (favicon, etc.)

### `/server` - Backend API

**Core Files:**
- `server/index.ts` - Express server setup and entry point
- `server/routes.ts` - API route handlers
- `server/storage.ts` - Database storage layer (currently using MemStorage)
- `server/vite.ts` - Vite integration for development

**Legacy File:**
- `server/server.js` - Old JavaScript server (appears to be unused/legacy)

**Current API Endpoints:**
- `POST /api/contact` - Submit contact form
- `GET /api/contact` - Get all contact messages

### `/shared` - Shared Code

- `shared/schema.ts` - Database schemas and Zod validation schemas
  - `users` table schema
  - `contactMessages` table schema
  - Validation schemas for inserts

### `/attached_assets` - Static Assets

- `bg/` - Background images
- `games/` - Game screenshots/images
- `generated_images/` - Generated graphics
- `fonts/` - Custom fonts (RetrokiaCaps.ttf)
- `icons/` - App store badges
- `story/` - Story images
- `vivi/` - Character assets

---

## 🔧 Technology Stack

### Frontend
- **React 18.3** - UI library
- **TypeScript 5.6** - Type safety
- **Vite 5.4** - Build tool and dev server
- **Wouter 3.3** - Lightweight routing
- **TanStack Query 5.60** - Data fetching/state management
- **Tailwind CSS 3.4** - Styling
- **shadcn/ui** - Component library (Radix UI primitives)
- **Framer Motion 11.13** - Animations
- **Lucide React** - Icons
- **React Icons** - Additional icons

### Backend
- **Express 4.21** - Web framework
- **TypeScript 5.6** - Type safety
- **Drizzle ORM 0.39** - Database ORM
- **Zod 3.24** - Schema validation
- **@neondatabase/serverless 0.10** - PostgreSQL client (for Neon)
- **tsx 4.20** - TypeScript execution

### Database
- **PostgreSQL** (via Neon, Supabase, or local)
- **Drizzle Kit 0.31** - Database migrations

### Development Tools
- **cross-env** - Cross-platform environment variables
- **esbuild** - Fast bundler
- **PostCSS** - CSS processing

---

## 🚀 Scripts (from package.json)

```bash
# Development
npm run dev          # Starts Vite dev server (currently set to vite only)

# Production
npm run build        # Builds frontend for production
npm start            # Starts production preview (currently set to vite preview)

# Database
npm run db:push      # Push schema changes to database

# Type Checking
npm run check        # TypeScript type checking
```

**⚠️ Important Note:** Current scripts appear to only run Vite, not the Express server. The server setup exists but may need to be run separately.

---

## 🔌 API Structure

### Contact Form API

**POST /api/contact**
- Validates input with Zod schema
- Stores message in database (or memory storage)
- Returns created message object

**GET /api/contact**
- Retrieves all contact messages
- Sorted by creation date (newest first)

### Current Implementation Issues

1. **Storage Layer:** Currently using `MemStorage` (in-memory), not `DatabaseStorage`
   - File: `server/storage.ts` line 56
   - Should check for `DATABASE_URL` env variable

2. **Contact Form URL:** Hardcoded to `http://localhost:5174/api/contact`
   - File: `client/src/components/ContactSection.tsx` line 24
   - Should use relative URL `/api/contact` or environment variable

---

## 🗄️ Database Schema

### Tables Defined in `shared/schema.ts`

**users**
- `id` (varchar, primary key, UUID)
- `username` (text, not null, unique)
- `password` (text, not null)

**contact_messages**
- `id` (varchar, primary key, UUID)
- `name` (text, not null)
- `email` (text, not null)
- `message` (text, not null)
- `created_at` (timestamp, not null, default now)

---

## 🌐 Routing Structure

### Frontend Routes (Wouter)

- `/` - Home page (landing page)
- `/viral-match` - Viral Match game page
- `/privacy-policy-ViralMatch` - Privacy policy page
- `*` (catch-all) - 404 Not Found page

---

## 🎨 UI Components

### shadcn/ui Components Available
40+ components including:
- Button, Input, Textarea, Label, Card
- Dialog, Dropdown, Tabs, Accordion
- Toast, Tooltip, Popover
- Form components, Charts, etc.

### Custom Components
- Header, Footer
- HeroSection, AboutSection, ContactSection
- FeaturedGames, Capabilities, ProcessSection
- TechStack, CTASection
- ViralMatch-specific components

---

## ⚙️ Configuration Details

### TypeScript (`tsconfig.json`)
- Module: ESNext
- Strict mode enabled
- Path aliases:
  - `@/*` → `./client/src/*`
  - `@shared/*` → `./shared/*`

### Vite (`vite.config.ts`)
- Root: `./client`
- Build output: `./dist/public`
- Path aliases configured
- React plugin enabled

### Tailwind (`tailwind.config.ts`)
- Dark mode: class-based
- Custom fonts: RetrokiaCaps, Montserrat
- Custom color scheme with CSS variables
- Extended animations and keyframes

### Drizzle (`drizzle.config.ts`)
- Schema: `./shared/schema.ts`
- Dialect: PostgreSQL
- Migrations: `./migrations`
- Requires `DATABASE_URL` environment variable

---

## 🔐 Environment Variables Needed

Create a `.env` file in root:

```env
# Required for database
DATABASE_URL=postgresql://user:password@host:port/database?sslmode=require

# Optional
PORT=5000
NODE_ENV=development
CORS_ORIGIN=http://localhost:5000,http://localhost:5173
```

---

## 📝 Known Issues & Observations

1. **Server Not Integrated with Dev Script**
   - `npm run dev` runs Vite only, not Express server
   - Express server exists in `server/index.ts` but needs separate execution

2. **Storage Implementation**
   - Currently hardcoded to `MemStorage`
   - Should dynamically choose between `DatabaseStorage` and `MemStorage` based on `DATABASE_URL`

3. **Legacy Server File**
   - `server/server.js` exists but appears unused
   - Contains nodemailer configuration that's not in main server

4. **Contact Form API URL**
   - Hardcoded to port 5174
   - Should be relative or configurable

5. **Database Connection Error**
   - Current issue with Supabase hostname resolution
   - Password encoding issue with special characters

---

## 🎯 Development Workflow

### Current State
1. Frontend: Run with `npm run dev` (Vite only)
2. Backend: Would need separate execution (not currently in npm scripts)
3. Database: Requires `DATABASE_URL` in `.env` and `npm run db:push`

### Recommended Workflow
1. Set up `.env` with `DATABASE_URL`
2. Run `npm run db:push` to create tables
3. Start backend server (needs script update)
4. Start frontend with `npm run dev`
5. Access at configured port (default 5000 for backend, 5173 for Vite)

---

## 📚 Additional Files

### Documentation Files
- `SETUP.md` - Comprehensive setup guide
- `QUICK_START.md` - Quick setup guide
- `README_BACKEND.md` - Backend API documentation
- `BACKEND_SETUP_CHECKLIST.md` - Setup checklist
- `FIX_DATABASE_URL.md` - Database URL troubleshooting
- `design_guidelines.md` - Design system guidelines

---

## 🔍 Key File Locations

| Purpose | File Path |
|---------|-----------|
| Frontend Entry | `client/src/main.tsx` |
| App Router | `client/src/App.tsx` |
| Server Entry | `server/index.ts` |
| API Routes | `server/routes.ts` |
| Database Schema | `shared/schema.ts` |
| Storage Layer | `server/storage.ts` |
| Contact Form | `client/src/components/ContactSection.tsx` |
| Home Page | `client/src/pages/Home.tsx` |
| Package Config | `package.json` |
| TypeScript Config | `tsconfig.json` |
| Vite Config | `vite.config.ts` |
| Database Config | `drizzle.config.ts` |

---

**Last Updated:** Based on current codebase state  
**Status:** Active development project

