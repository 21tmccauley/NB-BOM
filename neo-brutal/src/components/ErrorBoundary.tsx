import { Component, type ErrorInfo, type ReactNode } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

interface Props {
  children: ReactNode
}

interface State {
  hasError: boolean
  error: Error | null
}

export class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false,
    error: null,
  }

  public static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error }
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error("Uncaught error:", error, errorInfo)
  }

  public render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen bg-background flex items-center justify-center p-6">
          <Card className="border-4 border-border bg-secondary-background shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] max-w-md w-full">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl font-bold text-foreground mb-4">
                Something Went Wrong
              </CardTitle>
              <CardDescription className="text-base text-foreground">
                An unexpected error occurred. Please try refreshing the page.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4 text-center">
              {this.state.error && (
                <p className="text-sm text-foreground opacity-70 font-mono">
                  {this.state.error.message}
                </p>
              )}
              <Button
                onClick={() => window.location.reload()}
                className="border-2 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[2px] hover:translate-y-[2px] transition-all w-full"
              >
                Refresh Page
              </Button>
            </CardContent>
          </Card>
        </div>
      )
    }

    return this.props.children
  }
}

