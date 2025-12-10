import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Link } from "react-router-dom"
import { Navigation } from "@/components/Navigation"

export function NotFoundPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <div className="flex items-center justify-center p-4 sm:p-6 min-h-[calc(100vh-80px)]">
        <Card className="border-4 border-border bg-secondary-background shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] max-w-md w-full">
          <CardHeader className="text-center p-4 sm:p-6">
            <CardTitle className="text-4xl sm:text-5xl md:text-6xl font-bold text-foreground mb-4">404</CardTitle>
            <CardDescription className="text-lg sm:text-xl text-foreground">
              Page Not Found
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4 text-center p-4 sm:p-6">
            <p className="text-sm sm:text-base text-foreground">
              The page you're looking for doesn't exist or has been moved.
            </p>
            <Link to="/">
              <Button className="border-2 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[2px] hover:translate-y-[2px] transition-all w-full">
                Back to Home
              </Button>
            </Link>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

