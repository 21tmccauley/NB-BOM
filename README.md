# Book of Mormon Blog

A personal blog documenting religious insights, scripture analysis, and personal reflections from a BYU Book of Mormon religion class. Built with React, TypeScript, and Vite, featuring a neo-brutalist design aesthetic.

## Features

- **Neo-Brutalist Design**: Bold colors, thick borders, and distinctive shadows
- **Responsive Layout**: Mobile-first design that works across all devices
- **Blog System**: Dynamic blog posts with markdown content
- **Modern Stack**: React 19, TypeScript, Vite, and Tailwind CSS
- **Component Library**: Custom UI components built with shadcn/ui
- **Error Handling**: Error boundaries and 404 pages for better user experience

## Tech Stack

- **Frontend**: React 19 with TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS with custom CSS variables
- **UI Components**: shadcn/ui
- **Routing**: React Router (BrowserRouter)
- **Content**: React Markdown for blog posts
- **Deployment**: Cloudflare Pages

## Getting Started

### Prerequisites

- Node.js (version 18 or higher)
- npm

### Installation

1. Clone the repository
```bash
git clone <repository-url>
cd neo-brutal
```

2. Install dependencies
```bash
npm install
```

3. Start the development server
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── ui/             # shadcn/ui components
│   ├── ThemeToggle.tsx # Theme switching component
│   └── ErrorBoundary.tsx # Error boundary component
├── contexts/           # React contexts
├── data/               # Static data and content (blog posts)
├── lib/                # Utility functions
├── pages/              # Page components
│   ├── HomePage.tsx
│   ├── BlogPostPage.tsx
│   ├── AboutPage.tsx
│   ├── OnePercentPage.tsx
│   └── NotFoundPage.tsx
└── main.tsx           # Application entry point
```

## Deployment

This project is deployed on Cloudflare Pages. The `_redirects` file in the `public` directory ensures proper routing for the single-page application.

## License

This project is open source and available under the MIT License.