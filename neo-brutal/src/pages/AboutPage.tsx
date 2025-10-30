import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Link } from "react-router-dom"

export function AboutPage() {
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
              ABOUT THIS BLOG
            </CardTitle>
            <CardDescription className="text-xl text-foreground">
              A personal journey through Book of Mormon study and religious insights.
            </CardDescription>
          </CardHeader>
        </Card>

        {/* About Content */}
        <section className="mb-12">
          <Card className="border-4 border-border bg-accent-green shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
            <CardHeader>
              <CardTitle className="text-3xl font-bold text-foreground mb-4">
                MY STORY
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4 text-base text-foreground">
                <p>
                  This blog began as a personal project during my Book of Mormon religion class at BYU. 
                  What started as simple class assignments quickly evolved into a deeper exploration of 
                  scripture study and personal spiritual growth.
                </p>
                <p>
                  Each post represents a moment of learning, reflection, and discovery as I work through 
                  the Book of Mormon with fresh eyes and an open heart. The neo-brutal design aesthetic 
                  reflects my approach to scripture study - bold, direct, and unapologetically authentic.
                </p>
                <p>
                  Whether you're a fellow student, a curious reader, or someone on their own spiritual 
                  journey, I hope these insights and reflections can provide value and perhaps spark 
                  your own deeper study of the scriptures.
                </p>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Mission Statement */}
        <section className="mb-12">
          <h3 className="text-3xl font-bold text-foreground mb-8 border-b-4 border-border pb-4">
            MISSION & VALUES
          </h3>
          <div className="grid gap-6 md:grid-cols-2">
            <Card className="border-4 border-border bg-accent-orange">
              <CardHeader>
                <CardTitle className="text-xl font-bold text-foreground">AUTHENTIC LEARNING</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base text-foreground">
                  Every post reflects genuine study, honest questions, and real insights gained through 
                  dedicated scripture study and prayer.
                </CardDescription>
              </CardContent>
            </Card>
            
            <Card className="border-4 border-border bg-accent-purple">
              <CardHeader>
                <CardTitle className="text-xl font-bold text-main-foreground">ACADEMIC RIGOR</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base text-main-foreground">
                  Combining scholarly analysis with spiritual understanding to create meaningful 
                  connections between ancient texts and modern life.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* What You'll Find */}
        <section className="mb-12">
          <h3 className="text-3xl font-bold text-foreground mb-8 border-b-4 border-border pb-4">
            WHAT YOU'LL FIND HERE
          </h3>
          <div className="grid gap-6 md:grid-cols-3">
            <Card className="border-4 border-border bg-accent-green text-center">
              <CardHeader>
                <CardTitle className="text-xl font-bold text-foreground">CHAPTER STUDIES</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base text-foreground">
                  Detailed analysis of specific Book of Mormon chapters with historical context and personal applications.
                </CardDescription>
              </CardContent>
            </Card>
            
            <Card className="border-4 border-border bg-accent-orange text-center">
              <CardHeader>
                <CardTitle className="text-xl font-bold text-foreground">THEMATIC EXPLORATIONS</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base text-foreground">
                  Deep dives into recurring themes like faith, repentance, and the Atonement across different books.
                </CardDescription>
              </CardContent>
            </Card>
            
            <Card className="border-4 border-border bg-accent-purple text-center">
              <CardHeader>
                <CardTitle className="text-xl font-bold text-main-foreground">CLASS ASSIGNMENTS</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base text-main-foreground">
                  Academic responses to assigned readings and thought-provoking questions from my religion class.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Call to Action */}
        <section className="mb-12">
          <Card className="border-4 border-border bg-accent-yellow shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] text-center">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-foreground mb-4">
                JOIN THE CONVERSATION
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-base text-foreground mb-6">
                Have thoughts on a post? Questions about scripture study? I'd love to hear from you!
              </p>
              <div className="flex gap-4 justify-center">
                <Link to="/">
                  <Button className="bg-accent-orange text-main-foreground border-2 border-border shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[2px] hover:translate-y-[2px] transition-all">
                    READ THE BLOG
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        </section>
      </main>

      {/* Footer */}
      <footer className="mt-16 border-t-4 border-border bg-background p-6">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-foreground font-bold">
            Book of Mormon Blog | BYU Religion Class | Fall 2024
          </p>
        </div>
      </footer>
    </div>
  )
}


