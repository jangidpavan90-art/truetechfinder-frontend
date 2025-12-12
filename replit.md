# TrueTechFinder

## Overview

TrueTechFinder is a SaaS web application that analyzes websites to detect their technology stacks. Users can scan any website to discover frameworks, CMS platforms, hosting providers, CDNs, analytics tools, and more. The app features AI-enhanced detection, side-by-side website comparisons, and export-ready insights.

**Core Features:**
- Single website technology scanning
- Side-by-side website comparison with similarity scoring
- AI-powered insights and analysis
- Technology categorization (Frontend, Backend, CMS, Hosting, CDN, Analytics, Marketing, Security, Payments)
- Site previews with favicons and screenshots
- JSON export functionality

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework:** Next.js 16 with App Router (app directory structure)
- **Language:** TypeScript
- **Styling:** Tailwind CSS v4 with custom CSS variables for theming
- **UI Pattern:** Component-based architecture with reusable UI components in `/components`

**Key Design Decisions:**
- Uses client-side rendering ("use client" directives) for interactive components
- Custom color palette using CSS variables (orange primary `#FF8A3D`, blue-gray backgrounds)
- Responsive design with mobile-first approach
- Loading states and skeleton components for better UX

### Backend Architecture
- **API Backend:** FastAPI (external service, not in this repo)
- **Authentication:** Supabase client-side authentication
- The Next.js frontend makes API calls to an external FastAPI backend for scanning functionality
- No server-side API routes in the Next.js app - purely client-side data fetching

### Data Flow
1. User enters URL(s) in the frontend
2. Frontend calls external FastAPI backend API for scanning
3. Results are processed and categorized using `/lib/categorize.ts`
4. UI renders categorized technologies with icons and insights

### Key Directories
- `/app` - Next.js App Router pages
- `/components` - Reusable React components
- `/components/icons` - SVG icon components for technologies and categories
- `/lib` - Utility functions (categorization, comparison insights)
- `/utils` - Client utilities (Supabase client)
- `/public` - Static assets (logos, favicons)
- `/out` - Static export output

## External Dependencies

### Authentication & Database
- **Supabase:** Client-side authentication (magic link + email/password)
  - Environment variables: `NEXT_PUBLIC_SUPABASE_URL`, `NEXT_PUBLIC_SUPABASE_ANON_KEY`
  - Used for user login/signup functionality

### External APIs
- **FastAPI Backend:** Technology scanning engine (hosted externally)
- **Google S2 Favicon Service:** `https://www.google.com/s2/favicons?domain=<domain>&sz=128`
- **Thum.io Screenshot API:** `https://image.thum.io/get/width/1200/https://<domain>`

### Analytics
- **Google Analytics 4:** Tracking ID `G-XJFN67W6X5`

### Key NPM Packages
- `@supabase/supabase-js` - Supabase client SDK
- `next` - React framework
- `tailwindcss` - Utility-first CSS framework
- `typescript` - Type safety

### Deployment
- Runs on port 5000 (`next dev -p 5000 -H 0.0.0.0`)
- Can be deployed as standalone Node.js app or static export
- Custom `server.js` for production deployment