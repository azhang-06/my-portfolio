# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

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
- Project-specific type definitions (e.g., `DrinkStudioProject`, `SunSketcherProject`)
- Project data stored as TypeScript files in `public/data/`
- Project-specific modal components and section components
- Reusable `ProjectComponent` that accepts different modal implementations

### Key Patterns
- **Modal Management**: Each project has its own modal component that renders project-specific sections
- **Image Organization**: Project images stored in structured folders under `public/projectImages/`
- **Type Safety**: Strong typing with generic interfaces for project data
- **Component Composition**: Projects use section-based components for detailed case studies

### Data Flow
1. Project data defined in `public/data/` TypeScript files
2. Home page renders `ProjectComponent` instances with project-specific modals
3. Modal components use project sections to display detailed case studies
4. All components are type-safe using the generic `Project<T>` interface

### Styling
- Tailwind CSS with custom font families (PT Sans, Quicksand, Abhaya)
- Responsive design with mobile-first approach
- Custom utility classes and responsive breakpoints

## File Organization
- `src/components/Project/` - Main project display component
- `src/components/ProjectModal/` - Project-specific modal implementations
- `src/components/ProjectSections/` - Project-specific section components organized by project
- `src/lib/types/` - TypeScript type definitions
- `public/data/` - Project data as TypeScript exports
- `public/projectImages/` - Organized project assets by project name