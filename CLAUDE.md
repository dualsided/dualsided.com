# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Dualsided.com - Portfolio site for a Shopify consulting agency based in San Diego. Built with Vite, React, React Router, and Tailwind CSS.

## Commands

```bash
npm run dev      # Start development server (http://localhost:5173)
npm run build    # Build for production
npm run preview  # Preview production build
```

## Project Structure

- `src/App.jsx` - Main app with React Router routes
- `src/components/Layout.jsx` - Shared layout with header/footer navigation
- `src/pages/` - Page components (Work, ShopifyApps, Contact)
- `src/components/` - Reusable UI components
- `public/` - Static assets (images, favicon)

## Architecture

- Uses React Router v7 with nested routes under a shared Layout
- Tailwind CSS for styling with Inter font
- Portfolio data is currently static in `src/pages/Work.jsx`
