import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Link } from "react-router-dom"
import { Navigation } from "@/components/Navigation"

export function AboutPage() {
  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Main Content */}
      <main className="max-w-6xl mx-auto p-4 sm:p-6">
        {/* Hero Section */}
        <Card className="mb-8 sm:mb-12 border-4 border-border bg-accent-yellow shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
          <CardHeader className="text-center p-4 sm:p-6">
            <CardTitle className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
              ABOUT THIS SITE
            </CardTitle>
            <CardDescription className="text-base sm:text-lg md:text-xl text-foreground">
              A modern web application built with cutting-edge technologies and a bold design philosophy.
            </CardDescription>
          </CardHeader>
        </Card>

        {/* About Content */}
        <section className="mb-8 sm:mb-12">
          <Card className="border-4 border-border bg-accent-darkblue shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
            <CardHeader className="p-4 sm:p-6">
              <CardTitle className="text-2xl sm:text-3xl font-bold text-foreground mb-4">
                THE PROJECT
              </CardTitle>
            </CardHeader>
            <CardContent className="p-4 sm:p-6">
              <div className="space-y-4 text-base text-foreground">
                <p>
                  The site features a blog with markdown-based content, dynamic routing, and a responsive design 
                  that works seamlessly across all devices. Every component has been carefully crafted to balance 
                  functionality with the bold, unapologetic design language of Neo-Brutalism.
                </p>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Tech Stack */}
        <section className="mb-8 sm:mb-12">
          <h3 className="text-2xl sm:text-3xl font-bold text-foreground mb-6 sm:mb-8 border-b-4 border-border pb-3 sm:pb-4">
            TECH STACK
          </h3>
          <div className="grid gap-6 md:grid-cols-3">
            <Card className="border-4 border-border bg-accent-orange">
              <CardHeader>
                <CardTitle className="text-xl font-bold text-foreground">FRONTEND FRAMEWORK</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base text-foreground">
                  Built with <strong>React 19</strong> and <strong>TypeScript</strong> for type-safe, 
                  component-based development. Uses <strong>Vite</strong> for lightning-fast development 
                  and optimized production builds.
                </CardDescription>
              </CardContent>
            </Card>
            
            <Card className="border-4 border-border bg-accent-purple">
              <CardHeader>
                <CardTitle className="text-xl font-bold text-main-foreground">UI COMPONENTS</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base text-main-foreground">
                  Powered by <strong>Radix UI</strong> primitives for accessible, unstyled components, 
                  combined with <strong>shadcn/ui</strong> patterns for a consistent design system.
                </CardDescription>
              </CardContent>
            </Card>
            
            <Card className="border-4 border-border bg-accent-pink">
              <CardHeader>
                <CardTitle className="text-xl font-bold text-main-foreground">STYLING & ROUTING</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base text-main-foreground">
                  Styled with <strong>Tailwind CSS 4</strong> for utility-first styling, and 
                  <strong> React Router</strong> for client-side navigation. Content rendered with 
                  <strong> react-markdown</strong>.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Design Philosophy */}
        <section className="mb-8 sm:mb-12">
          <h3 className="text-2xl sm:text-3xl font-bold text-foreground mb-6 sm:mb-8 border-b-4 border-border pb-3 sm:pb-4">
            DESIGN PHILOSOPHY
          </h3>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            <Card className="border-4 border-border bg-accent-darkblue text-center">
              <CardHeader>
                <CardTitle className="text-xl font-bold text-foreground">NEO-BRUTALISM</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base text-foreground">
                  Bold, unapologetic design with thick borders, high contrast, and hard shadows. 
                  No gradients, no subtlety—just pure, raw visual impact.
                </CardDescription>
              </CardContent>
            </Card>
            
            <Card className="border-4 border-border bg-accent-orange text-center">
              <CardHeader>
                <CardTitle className="text-xl font-bold text-foreground">BRIGHT ACCENTS</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base text-foreground">
                  Vibrant color palette with yellow, orange, purple, pink, and cyan accents against 
                  a neutral background for maximum visual hierarchy.
                </CardDescription>
              </CardContent>
            </Card>
            
            <Card className="border-4 border-border bg-accent-purple text-center">
              <CardHeader>
                <CardTitle className="text-xl font-bold text-main-foreground">HARD SHADOWS</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base text-main-foreground">
                  Distinctive box shadows that create depth without blur—4px, 6px, and 8px offsets 
                  that give elements a lifted, dimensional appearance.
                </CardDescription>
              </CardContent>
            </Card>
            
            <Card className="border-4 border-border bg-accent-pink text-center">
              <CardHeader>
                <CardTitle className="text-xl font-bold text-main-foreground">GRID PATTERN</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base text-main-foreground">
                  Subtle grid background pattern adds texture and structure while maintaining 
                  readability and visual interest.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Architecture */}
        <section className="mb-8 sm:mb-12">
          <Card className="border-4 border-border bg-accent-yellow shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
            <CardHeader className="p-4 sm:p-6">
              <CardTitle className="text-2xl sm:text-3xl font-bold text-foreground mb-4">
                ARCHITECTURE & FEATURES
              </CardTitle>
            </CardHeader>
            <CardContent className="p-4 sm:p-6">
              <div className="space-y-4 text-base text-foreground">
                <p>
                  <strong>Component-Based Architecture:</strong> The site is built with reusable React components 
                  organized into a clear structure—pages, UI components, and shared utilities. Each component 
                  follows consistent patterns for maintainability and scalability.
                </p>
                <p>
                  <strong>Type Safety:</strong> Full TypeScript implementation ensures type safety across the 
                  entire application, catching errors at compile time and improving developer experience.
                </p>
                <p>
                  <strong>Responsive Design:</strong> Mobile-first approach with breakpoints for sm, md, lg, 
                  and xl screens. Touch-friendly targets (minimum 44px) and optimized shadows for mobile performance.
                </p>
                <p>
                  <strong>Theme System:</strong> Custom CSS variables and Tailwind theme configuration allow 
                  for easy theming and consistent design tokens throughout the application.
                </p>
                <p>
                  <strong>Accessibility:</strong> Built on Radix UI primitives which provide keyboard navigation, 
                  ARIA attributes, and focus management out of the box. Semantic HTML and proper contrast ratios 
                  ensure the site is usable by everyone.
                </p>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Call to Action */}
        <section className="mb-8 sm:mb-12">
          <Card className="border-4 border-border bg-accent-yellow shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] text-center">
            <CardHeader className="p-4 sm:p-6">
              <CardTitle className="text-xl sm:text-2xl font-bold text-foreground mb-4">
                EXPLORE THE SITE
              </CardTitle>
            </CardHeader>
            <CardContent className="p-4 sm:p-6">
              <p className="text-sm sm:text-base text-foreground mb-6">
                Check out the blog posts to see the design system in action, or explore the codebase 
                to see how it all comes together!
              </p>
              <div className="flex gap-4 justify-center">
                <Link to="/">
                  <Button className="bg-accent-orange text-main-foreground border-2 border-border shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[2px] hover:translate-y-[2px] transition-all">
                    VIEW BLOG
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        </section>
      </main>

      {/* Footer */}
      <footer className="mt-12 sm:mt-16 border-t-4 border-border bg-background p-4 sm:p-6">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-sm sm:text-base text-foreground font-bold">
            Built with React, TypeScript, Vite, and Tailwind CSS | Neo-Brutal Design System
          </p>
        </div>
      </footer>
    </div>
  )
}



