import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { getBlogPost } from "@/data/blogPosts"
import { Link, useParams } from "react-router-dom"
import ReactMarkdown from "react-markdown"
import { Navigation } from "@/components/Navigation"

export function BlogPostPage() {
  const { id } = useParams<{ id: string }>()
  const post = id ? getBlogPost(id) : null

  if (!post) {
    return (
      <div 
        className="min-h-screen bg-background flex items-center justify-center"
        style={{
          backgroundImage: `
            linear-gradient(rgba(51, 51, 51, 0.15) 1px, transparent 1px),
            linear-gradient(90deg, rgba(51, 51, 51, 0.15) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px',
          backgroundPosition: '0 0'
        }}
      >
        <Card 
          className="border-4 border-border bg-secondary-background p-8 text-center"
          style={{ backgroundColor: '#FFFFFF' }}
        >
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
    <div 
      className="min-h-screen bg-background"
      style={{
        backgroundImage: `
          linear-gradient(rgba(51, 51, 51, 0.15) 1px, transparent 1px),
          linear-gradient(90deg, rgba(51, 51, 51, 0.15) 1px, transparent 1px)
        `,
        backgroundSize: '50px 50px',
        backgroundPosition: '0 0'
      }}
    >
      <Navigation />

      {/* Main Content */}
      <main className="max-w-4xl mx-auto p-4 sm:p-6">
        {/* Back Button */}
        <div className="mb-4 sm:mb-6">
          <Link to="/">
            <Button variant="outline" className="border-2 text-sm sm:text-base">
              ← Back to Posts
            </Button>
          </Link>
        </div>

        {/* Blog Post */}
        <Card 
          className="border-4 border-border bg-secondary-background shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]"
          style={{ backgroundColor: '#FFFFFF' }}
        >
          <CardHeader className="p-4 sm:p-6">
            <div className="flex flex-col sm:flex-row justify-between items-start gap-3 sm:gap-0 mb-4">
              <Badge variant="default" className="border-2 border-border font-bold bg-accent-yellow text-foreground text-xs sm:text-sm">
                {post.category}
              </Badge>
              <div className="text-left sm:text-right">
                <time className="text-xs sm:text-sm text-foreground font-medium block">{post.date}</time>
                <p className="text-xs text-foreground">{post.readTime}</p>
              </div>
            </div>
            <CardTitle className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-4">
              {post.title}
            </CardTitle>
            <CardDescription className="text-base sm:text-lg md:text-xl text-foreground mb-4">
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
          <CardContent className="prose prose-sm sm:prose-base md:prose-lg max-w-none p-4 sm:p-6">
            <ReactMarkdown
              components={{
                h1: ({node, ...props}) => <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 mt-6 sm:mt-8 text-foreground" {...props} />,
                h2: ({node, ...props}) => <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mt-6 sm:mt-8 mb-4 text-foreground" {...props} />,
                h3: ({node, ...props}) => <h3 className="text-lg sm:text-xl md:text-2xl font-bold mt-4 sm:mt-6 mb-3 text-foreground" {...props} />,
                p: ({node, ...props}) => <p className="mb-4 text-foreground" {...props} />,
                ul: ({node, ...props}) => <ul className="list-disc pl-6 mb-4 text-foreground" {...props} />,
                ol: ({node, ...props}) => <ol className="list-decimal pl-6 mb-4 text-foreground" {...props} />,
                li: ({node, ...props}) => <li className="mb-2 text-foreground" {...props} />,
                strong: ({node, ...props}) => <strong className="font-bold" {...props} />,
                em: ({node, ...props}) => <em className="italic" {...props} />,
                blockquote: ({node, children, ...props}) => (
                  <blockquote 
                    className="my-6 border-l-4 border-accent-darkblue pl-6 py-4 bg-accent-yellow/20 border-2 border-border shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] not-italic"
                    {...props}
                  >
                    <div className="space-y-2 text-foreground italic text-lg leading-relaxed">
                      {children}
                    </div>
                  </blockquote>
                ),
                a: ({node, ...props}) => (
                  <a 
                    className="text-accent-darkblue font-bold hover:underline" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    {...props} 
                  />
                ),
              }}
            >
              {post.content}
            </ReactMarkdown>
          </CardContent>
        </Card>

        {/* Related Posts */}
        <section className="mt-8 sm:mt-12">
          <h3 className="text-xl sm:text-2xl font-bold text-foreground mb-4 sm:mb-6 border-b-4 border-border pb-2">
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
                      <Button variant="outline" className="border-2 w-full text-black">
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
      <footer 
        className="mt-12 sm:mt-16 border-t-4 border-border bg-secondary-background p-4 sm:p-6"
        style={{ backgroundColor: '#FFFFFF' }}
      >
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-sm sm:text-base text-foreground font-bold">
            Book of Mormon Blog | BYU Religion Class | Fall 2025
          </p>
        </div>
      </footer>
    </div>
  )
}
