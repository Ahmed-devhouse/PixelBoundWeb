# Pixel Bound Games - Landing Page

## Overview
A professional landing page for Pixel Bound Games, a game development company. The website showcases the company's portfolio, capabilities, and provides a contact form for potential clients.

## Architecture
- **Frontend**: React SPA with TypeScript, Tailwind CSS, and Shadcn UI components
- **Backend**: Express.js server with in-memory storage
- **Routing**: Wouter for client-side routing
- **State Management**: TanStack Query for server state

## Features
- Hero section with cinematic background image
- Featured games showcase with 4 sample games
- Studio capabilities overview (6 core services)
- Development process timeline
- About section with company stats
- Technology stack display
- Call-to-action section
- Contact form with backend integration
- Responsive design for all screen sizes
- Dark/light theme toggle
- Smooth scroll navigation

## Tech Stack
- React + TypeScript
- Tailwind CSS + Shadcn UI
- Express.js
- Drizzle ORM (schema only, using in-memory storage)
- TanStack Query
- Lucide React icons
- React Icons (for brand logos)

## Project Structure
```
client/
  src/
    components/       # Reusable UI components
    pages/           # Page components
    lib/             # Utilities and configurations
server/
  routes.ts          # API endpoints
  storage.ts         # In-memory storage implementation
shared/
  schema.ts          # Shared data models
```

## API Endpoints
- `POST /api/contact` - Submit contact form
- `GET /api/contact` - Retrieve all contact messages (for admin use)

## Design System
- **Primary Color**: Purple (#8B5CF6 area) - used for branding and CTAs
- **Font Display**: Orbitron - used for headlines and gaming aesthetic
- **Font Body**: Inter - used for all body text
- **Theme**: Supports both light and dark modes
- **Spacing**: Consistent use of Tailwind spacing units
- **Components**: All using Shadcn UI for consistent styling

## Recent Changes
- Created complete landing page design
- Implemented contact form with backend API
- Added in-memory storage for contact messages
- Set up responsive navigation with mobile menu
- Configured theme toggle functionality
