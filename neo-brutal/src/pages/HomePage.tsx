import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { blogPosts } from "@/data/blogPosts"
import { Link } from "react-router-dom"

export function HomePage() {
  return (
    <div className="min-h-screen">
      {/* Header */}
      <header className="border-b-4 border-border bg-background p-6">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <Link to="/" className="text-3xl font-bold text-foreground hover:underline">
            BOOK OF MORMON BLOG
          </Link>
          <div className="flex gap-4 items-center">
            <nav className="flex gap-4">
              <Link to="/">
                <Button variant="outline" className="border-2 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[2px] hover:translate-y-[2px] transition-all">Home</Button>
              </Link>
              <Link to="/about">
                <Button variant="outline" className="border-2 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[2px] hover:translate-y-[2px] transition-all">About</Button>
              </Link>
              <Link to="/1percent">
                <Button variant="outline" className="border-2 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[2px] hover:translate-y-[2px] transition-all">1%</Button>
              </Link>
            </nav>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-6xl mx-auto p-6">
        {/* Hero Section */}
        <Card className="mb-12 border-4 border-border bg-accent-yellow shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
          <CardHeader className="text-center">
            <CardTitle className="text-5xl font-bold text-foreground mb-4">
              A STUDY OF<br />
              THE BOOK OF MORMON
            </CardTitle>
            <CardDescription className="text-xl text-foreground">
              Religious insights, scripture analysis, and personal reflections from a BYU religion class.
            </CardDescription>
          </CardHeader>
          <CardContent className="text-center">
            <Button className="bg-accent-orange text-main-foreground border-2 border-border shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[2px] hover:translate-y-[2px] transition-all">
              LATEST POSTS
            </Button>
          </CardContent>
        </Card>

        {/* Blog Posts */}
        <section>
          <h3 className="text-3xl font-bold text-foreground mb-8 border-b-4 border-border pb-4">
            RECENT POSTS
          </h3>
          <div className="grid gap-6 md:grid-cols-2">
            {blogPosts.map((post, index) => {
              const accentColors = ['bg-accent-darkblue', 'bg-accent-orange', 'bg-accent-purple', 'bg-accent-pink']
              const accentColor = accentColors[index % accentColors.length]
              const isDarkBackground = accentColor === 'bg-accent-purple' || accentColor === 'bg-accent-pink'
              const textColor = isDarkBackground ? 'text-main-foreground' : 'text-foreground'
              
              return (
                <Card 
                  key={post.id} 
                  className={`border-4 border-border ${accentColor} flex flex-col`}
                >
                  <CardHeader>
                    <div className="flex justify-between items-start mb-2">
                      <Badge variant="default" className="border-2 border-border font-bold bg-accent-yellow text-foreground">
                        {post.category}
                      </Badge>
                      <div className="text-right">
                        <time className={`text-sm ${textColor} font-medium`}>{post.date}</time>
                        <p className={`text-xs ${textColor}`}>{post.readTime}</p>
                      </div>
                    </div>
                    <CardTitle className={`text-2xl font-bold ${textColor}`}>
                      {post.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="flex-1">
                    <CardDescription className={`text-base ${textColor}`}>
                      {post.excerpt}
                    </CardDescription>
                  </CardContent>
                  <CardFooter>
                    <Link to={`/post/${post.id}`} className="w-full">
                      <Button variant="outline" className="border-2 w-full bg-accent-yellow text-foreground shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[2px] hover:translate-y-[2px] transition-all">
                        READ MORE
                      </Button>
                    </Link>
                  </CardFooter>
                </Card>
              )
            })}
          </div>
        </section>

        {/* About Section */}
        <section className="mt-16">
          <h3 className="text-3xl font-bold text-foreground mb-8 border-b-4 border-border pb-4">
            ABOUT THIS BLOG
          </h3>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            <Card className="border-4 border-border bg-accent-darkblue text-center">
              <CardHeader>
                <CardTitle className="text-xl font-bold text-foreground">SCRIPTURE STUDY</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base text-foreground">
                  Deep dives into Book of Mormon chapters, themes, and doctrine.
                </CardDescription>
              </CardContent>
            </Card>
            
            <Card className="border-4 border-border bg-accent-orange text-center">
              <CardHeader>
                <CardTitle className="text-xl font-bold text-foreground">PERSONAL INSIGHTS</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base text-foreground">
                  Personal reflections and applications from my Book of Mormon study.
                </CardDescription>
              </CardContent>
            </Card>
            
            <Card className="border-4 border-border bg-accent-purple text-center">
              <CardHeader>
                <CardTitle className="text-xl font-bold text-main-foreground">CLASS ASSIGNMENTS</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base text-main-foreground">
                  Academic analysis and responses to assigned readings from class.
                </CardDescription>
              </CardContent>
            </Card>
            
            <Card className="border-4 border-border bg-accent-pink text-center">
              <CardHeader>
                <CardTitle className="text-xl font-bold text-main-foreground">REFLECTIONS</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base text-main-foreground">
                  Personal thoughts and spiritual growth insights from my journey.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="mt-16 border-t-4 border-border bg-background p-6">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-foreground font-bold">
            Book of Mormon Blog | BYU Religion Class | Fall 2025
          </p>
        </div>
      </footer>
    </div>
  )
}
