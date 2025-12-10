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
              ABOUT THIS BLOG
            </CardTitle>
            <CardDescription className="text-base sm:text-lg md:text-xl text-foreground">
              A personal journey through Book of Mormon study and religious insights.
            </CardDescription>
          </CardHeader>
        </Card>

        {/* About Content */}
        <section className="mb-8 sm:mb-12">
          <Card className="border-4 border-border bg-accent-darkblue shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
            <CardHeader className="p-4 sm:p-6">
              <CardTitle className="text-2xl sm:text-3xl font-bold text-foreground mb-4">
                MY STORY
              </CardTitle>
            </CardHeader>
            <CardContent className="p-4 sm:p-6">
              <div className="space-y-4 text-base text-foreground">
                <p>
                  This blog began as a personal project during my Book of Mormon religion class at BYU. 
                  While I initially thought that I would only use this blog for the required assignment, 
                  I found that choosing to try and write out some of my thoughts on the Book of Mormon have 
                  made my study more meaningful.
                </p>
                <p>
                  Each post started from a thought or verse that stood out during my Book of Mormon study.
                  Not all of these posts are the most thought out or well written, but I hope that they can
                  inspire you to read the Book of Mormon for yourself and to share your own thoughts and insights.
                </p>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Mission Statement */}
        <section className="mb-8 sm:mb-12">
          <h3 className="text-2xl sm:text-3xl font-bold text-foreground mb-6 sm:mb-8 border-b-4 border-border pb-3 sm:pb-4">
            MISSION & VALUES
          </h3>
          <div className="grid gap-6 md:grid-cols-3">
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
            
            <Card className="border-4 border-border bg-accent-pink">
              <CardHeader>
                <CardTitle className="text-xl font-bold text-main-foreground">SPIRITUAL GROWTH</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base text-main-foreground">
                  Fostering personal transformation through meaningful engagement with sacred texts and 
                  heartfelt reflection on their application to daily life.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* What You'll Find */}
        <section className="mb-8 sm:mb-12">
          <h3 className="text-2xl sm:text-3xl font-bold text-foreground mb-6 sm:mb-8 border-b-4 border-border pb-3 sm:pb-4">
            WHAT YOU'LL FIND HERE
          </h3>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            <Card className="border-4 border-border bg-accent-darkblue text-center">
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
            
            <Card className="border-4 border-border bg-accent-pink text-center">
              <CardHeader>
                <CardTitle className="text-xl font-bold text-main-foreground">PERSONAL REFLECTIONS</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base text-main-foreground">
                  Heartfelt thoughts on scripture passages and their impact on personal spiritual development.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Call to Action */}
        <section className="mb-8 sm:mb-12">
          <Card className="border-4 border-border bg-accent-yellow shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] text-center">
            <CardHeader className="p-4 sm:p-6">
              <CardTitle className="text-xl sm:text-2xl font-bold text-foreground mb-4">
                JOIN THE CONVERSATION
              </CardTitle>
            </CardHeader>
            <CardContent className="p-4 sm:p-6">
              <p className="text-sm sm:text-base text-foreground mb-6">
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
      <footer className="mt-12 sm:mt-16 border-t-4 border-border bg-background p-4 sm:p-6">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-sm sm:text-base text-foreground font-bold">
            Book of Mormon Blog | BYU Religion Class | Fall 2025
          </p>
        </div>
      </footer>
    </div>
  )
}



