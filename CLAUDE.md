# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## IMPORTANT:
- Confirm ALL changes using Chrome.
- Alawys check if the development server is already running on port 3000 or 3001 before trying to start up another dev server.
- When implementing designs from Figma, always export any mising images into the project.

## Development Commands

- `npm run dev` - Start development server with Turbopack (runs on http://localhost:3000)
- `npm run build` - Build the application for production
- `npm start` - Start the production server
- `npm run lint` - Run ESLint to check code quality

## Architecture Overview

This is Amanda's UX portfolio website built with Next.js (Pages Router), React 19, TypeScript, and Tailwind CSS. The architecture follows a project-based showcase pattern:

### Core Structure
- **Pages Router**: Uses Next.js pages directory structure (`src/pages/`)
- **Component Architecture**: Modular components for reusable UI elements
- **Type-Safe Data**: TypeScript interfaces for project data with generic typing
- **Static Assets**: Project images and data stored in `public/` directory

### Project System
The portfolio uses a flexible project system with:
- Generic `Project<T>` interface in `src/lib/types/Project.ts`
- Project-specific type definitions (e.g., `DrinkStudioProject`, `SunSketcherProject`, `SimpleProject`)
- Project data stored as TypeScript files in `public/data/`
- Dynamic routes for individual project pages (`src/pages/projects/[slug].tsx`)
- Project-specific page components for complex case studies (`src/components/ProjectPages/`)

### Key Patterns
- **Dynamic Routing**: Projects use slug-based routing via `getStaticPaths`/`getStaticProps`
- **Project Union Types**: `[slug].tsx` uses a `ProjectUnion` type to handle different project types
- **Image Organization**: Project images stored in structured folders under `public/projectImages/`
- **Type Safety**: Strong typing with generic interfaces for project data
- **Component Composition**: Projects use section-based components for detailed case studies

### Data Flow
1. Project data defined in `public/data/` TypeScript files with unique `slug` property
2. Home page renders `ProjectComponent` instances linking to `/projects/[slug]`
3. Dynamic route maps slugs to project data via `projectsMap`
4. Project pages render dedicated page components or section components based on project type

### Styling
- Tailwind CSS with custom font families (PT Sans, Quicksand, Abhaya)
- Responsive design with mobile-first approach
- Custom utility classes and responsive breakpoints

## File Organization
- `src/pages/projects/[slug].tsx` - Dynamic route for individual project pages
- `src/components/Project/` - Main project card component for home page
- `src/components/ProjectPages/` - Dedicated page components for complex projects
- `src/components/ProjectSections/` - Section components organized by project (DrinkStudio/, SunSketcher/)
- `src/lib/types/` - TypeScript type definitions (Project.ts, SimpleProject.ts, etc.)
- `public/data/` - Project data exports (each project needs a unique `slug` property)
- `public/projectImages/` - Organized project assets by project name

## Adding a New Project
1. Create type definition in `src/lib/types/` extending `Project<T>`
2. Create project data file in `public/data/` with unique `slug`
3. Add project images to `public/projectImages/[ProjectName]/`
4. Add project to `projectsMap` in `src/pages/projects/[slug].tsx`
5. Create section components in `src/components/ProjectSections/[ProjectName]/` if needed
6. For complex projects, create a dedicated page component in `src/components/ProjectPages/`