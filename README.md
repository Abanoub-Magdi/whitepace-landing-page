# Whitepace Landing Page

A modern Angular application for the Whitepace landing page, featuring a sleek 2026 design built with Tailwind CSS.

## Features

- Modern, responsive 2026 design
- Multiple feature sections with visual content
- Pricing section with cards
- Testimonials section
- Integration showcase
- Dashboard preview images
- Footer with links and social media

## Tech Stack

- Angular 18
- Tailwind CSS
- TypeScript
- Inter font family

## Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm start
```

3. Open your browser and navigate to `http://localhost:4200`

### Build

To build the project for production:

```bash
npm run build
```

To build for GitHub Pages:

```bash
npm run build:github
```

## Deployment

This project is configured for automatic deployment to GitHub Pages using GitHub Actions.

### Automatic Deployment

The project includes a GitHub Actions workflow (`.github/workflows/deploy.yml`) that automatically:
- Builds the application with the correct base href for GitHub Pages
- Handles 404 errors for client-side routing
- Deploys to GitHub Pages on every push to the `main` branch

### Manual Setup

1. Go to your repository Settings → Pages
2. Under "Source", select "GitHub Actions"
3. The workflow will automatically deploy on the next push to `main`

### 404 Error Handling

The project includes a `404.html` file that handles client-side routing errors on GitHub Pages. This ensures that all routes work correctly when users navigate directly to URLs or refresh the page.

Your site will be available at: `https://abanoub-magdi.github.io/whitepace-landing-page/`

## Project Structure

```
src/
├── app/
│   ├── components/
│   │   ├── navbar/
│   │   ├── hero-section/
│   │   ├── feature-section/
│   │   ├── pricing-section/
│   │   ├── callout-section/
│   │   ├── data-security/
│   │   ├── sponsors/
│   │   ├── integrations/
│   │   ├── testimonials/
│   │   ├── bottom-cta/
│   │   └── footer/
│   └── app.component.ts
├── assets/
└── styles.css
```

## Colors

- Primary Dark: `#043873`
- Primary Blue: `#4F9CF9`
- Secondary Yellow: `#FFE492`
- Text Dark: `#212529`
- Text Light: `#FFFFFF`
- Accent Teal: `#A7CEFC`

## Assets

The project requires images for visual sections:
- `src/assets/dashboard-preview.png` - Dashboard preview image for hero section (recommended size: 1200x800px)
- `src/assets/feature-illustration.png` - Feature illustration images (recommended size: 800x600px)

If images are not available, the application will fall back to placeholder images automatically.

## Design

This project features a modern 2026 design with:
- Clean, minimalist interface
- Smooth animations and transitions
- Responsive layout for all devices
- Modern color palette with gradient accents

## License

This project is created for demonstration purposes.

© 2026 Whitepace LLC.

