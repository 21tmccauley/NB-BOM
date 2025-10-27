# Neo-Brutal Web

A modern web application built with React, TypeScript, and Vite, featuring a neo-brutalist design aesthetic.

## Features

- **Neo-Brutalist Design**: Bold colors, thick borders, and distinctive shadows
- **Responsive Layout**: Mobile-first design that works across all devices
- **Blog System**: Dynamic blog posts with category filtering
- **Modern Stack**: React 18, TypeScript, Vite, and Tailwind CSS
- **Component Library**: Custom UI components built with shadcn/ui

## Tech Stack

- **Frontend**: React 18 with TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS with custom CSS variables
- **UI Components**: shadcn/ui
- **Routing**: React Router
- **Package Manager**: npm

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
│   └── ThemeToggle.tsx # Theme switching component
├── contexts/           # React contexts
├── data/               # Static data and content
├── lib/                # Utility functions
├── pages/              # Page components
└── main.tsx           # Application entry point
```

## License

This project is open source and available under the MIT License.