import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { getBlogPost } from "@/data/blogPosts"
import { Link, useParams } from "react-router-dom"
import ReactMarkdown from "react-markdown"

export function BlogPostPage() {
  const { id } = useParams<{ id: string }>()
  const post = id ? getBlogPost(id) : null

  if (!post) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <Card className="border-4 border-border bg-secondary-background p-8 text-center">
          <CardHeader>
            <CardTitle className="text-2xl font-bold text-foreground">Post Not Found</CardTitle>
          </CardHeader>
          <CardContent>
            <CardDescription className="text-base text-foreground mb-4">
              The blog post you're looking for doesn't exist.
            </CardDescription>
            <Link to="/">
              <Button className="border-2">Back to Home</Button>
            </Link>
          </CardContent>
        </Card>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b-4 border-border bg-secondary-background p-6">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <Link to="/" className="text-3xl font-bold text-foreground hover:underline">
            BOOK OF MORMON BLOG
          </Link>
          <div className="flex gap-4 items-center">
            <nav className="flex gap-4">
              <Link to="/">
                <Button variant="outline" className="border-2">Home</Button>
              </Link>
              <Link to="/about">
                <Button variant="outline" className="border-2">About</Button>
              </Link>
              <Link to="/1percent">
                <Button variant="outline" className="border-2">1%</Button>
              </Link>
            </nav>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto p-6">
        {/* Back Button */}
        <div className="mb-6">
          <Link to="/">
            <Button variant="outline" className="border-2">
              ← Back to Posts
            </Button>
          </Link>
        </div>

        {/* Blog Post */}
        <Card className="border-4 border-border bg-secondary-background shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
          <CardHeader>
            <div className="flex justify-between items-start mb-4">
              <Badge variant="default" className="border-2 border-border font-bold bg-accent-yellow text-foreground">
                {post.category}
              </Badge>
              <div className="text-right">
                <time className="text-sm text-foreground font-medium">{post.date}</time>
                <p className="text-xs text-foreground">{post.readTime}</p>
              </div>
            </div>
            <CardTitle className="text-4xl font-bold text-foreground mb-4">
              {post.title}
            </CardTitle>
            <CardDescription className="text-xl text-foreground mb-4">
              {post.excerpt}
            </CardDescription>
            <div className="flex gap-2 mb-4 flex-wrap">
              {post.tags.map((tag, index) => {
                const accentColors = ['bg-accent-yellow', 'bg-accent-darkblue', 'bg-accent-orange', 'bg-accent-purple', 'bg-accent-pink']
                const accentColor = accentColors[index % accentColors.length]
                const isDark = accentColor === 'bg-accent-purple' || accentColor === 'bg-accent-pink'
                const textColor = isDark ? 'text-main-foreground' : 'text-foreground'
                return (
                  <Badge key={tag} variant="outline" className={`border-2 border-border ${accentColor} ${textColor}`}>
                    #{tag}
                  </Badge>
                )
              })}
            </div>
            <div className="text-sm text-foreground">
              By <span className="font-bold">{post.author}</span>
            </div>
          </CardHeader>
          <CardContent className="prose prose-lg max-w-none">
            <ReactMarkdown
              components={{
                h1: ({node, ...props}) => <h1 className="text-4xl font-bold mb-4 mt-8 text-foreground" {...props} />,
                h2: ({node, ...props}) => <h2 className="text-3xl font-bold mt-8 mb-4 text-foreground" {...props} />,
                h3: ({node, ...props}) => <h3 className="text-2xl font-bold mt-6 mb-3 text-foreground" {...props} />,
                p: ({node, ...props}) => <p className="mb-4 text-foreground" {...props} />,
                ul: ({node, ...props}) => <ul className="list-disc pl-6 mb-4 text-foreground" {...props} />,
                ol: ({node, ...props}) => <ol className="list-decimal pl-6 mb-4 text-foreground" {...props} />,
                li: ({node, ...props}) => <li className="mb-2 text-foreground" {...props} />,
                strong: ({node, ...props}) => <strong className="font-bold" {...props} />,
                em: ({node, ...props}) => <em className="italic" {...props} />,
              }}
            >
              {post.content}
            </ReactMarkdown>
          </CardContent>
        </Card>

        {/* Related Posts */}
        <section className="mt-12">
          <h3 className="text-2xl font-bold text-foreground mb-6 border-b-4 border-border pb-2">
            MORE POSTS
          </h3>
          <div className="grid gap-4 md:grid-cols-2">
            {post.tags.slice(0, 2).map((tag, index) => {
              const accentColors = ['bg-accent-darkblue', 'bg-accent-pink']
              const accentColor = accentColors[index % accentColors.length]
              const isDark = accentColor === 'bg-accent-pink'
              const textColor = isDark ? 'text-main-foreground' : 'text-foreground'
              return (
                <Card key={tag} className={`border-4 border-border ${accentColor}`}>
                  <CardHeader>
                    <CardTitle className={`text-lg font-bold ${textColor}`}>
                      Posts tagged #{tag}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <Link to="/">
                      <Button variant="outline" className={`border-2 w-full ${textColor}`}>
                        View All Posts
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="mt-16 border-t-4 border-border bg-secondary-background p-6">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-foreground font-bold">
            Book of Mormon Blog | BYU Religion Class | Fall 2024
          </p>
        </div>
      </footer>
    </div>
  )
}
