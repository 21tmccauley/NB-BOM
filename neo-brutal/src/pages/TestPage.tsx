import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Link } from "react-router-dom"
import { useState } from "react"

export function TestPage() {
  const [dialogOpen, setDialogOpen] = useState(false)

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b-4 border-border bg-background p-6">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <Link to="/" className="text-3xl font-bold text-foreground hover:underline">
            UI TEST PAGE
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
      <main className="max-w-7xl mx-auto p-6">
        <h1 className="text-4xl font-bold text-foreground mb-8 border-b-4 border-border pb-4">
          UI COMPONENT TEST PAGE
        </h1>

        {/* Buttons Section */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-foreground mb-4">Buttons</h2>
          <Card className="border-4 border-border mb-6">
            <CardHeader>
              <CardTitle>Button Variants</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-4">
                <Button variant="default">Default</Button>
                <Button variant="secondary">Secondary</Button>
                <Button variant="destructive">Destructive</Button>
                <Button variant="outline">Outline</Button>
                <Button variant="ghost">Ghost</Button>
                <Button variant="link">Link</Button>
              </div>
            </CardContent>
          </Card>

          <Card className="border-4 border-border mb-6">
            <CardHeader>
              <CardTitle>Button Sizes</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap items-center gap-4">
                <Button size="sm">Small</Button>
                <Button size="default">Default</Button>
                <Button size="lg">Large</Button>
                <Button size="icon">🚀</Button>
              </div>
            </CardContent>
          </Card>

          <Card className="border-4 border-border mb-6">
            <CardHeader>
              <CardTitle>Button States</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-4">
                <Button>Normal</Button>
                <Button disabled>Disabled</Button>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Badges Section */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-foreground mb-4">Badges</h2>
          <Card className="border-4 border-border">
            <CardHeader>
              <CardTitle>Badge Variants</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-4">
                <Badge variant="default">Default</Badge>
                <Badge variant="secondary">Secondary</Badge>
                <Badge variant="destructive">Destructive</Badge>
                <Badge variant="outline">Outline</Badge>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Cards with Accent Colors */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-foreground mb-4">Cards with Accent Colors</h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {['bg-accent-yellow', 'bg-accent-green', 'bg-accent-orange', 'bg-accent-purple', 'bg-accent-pink'].map((color, index) => {
              const isDark = color === 'bg-accent-purple' || color === 'bg-accent-pink'
              const textColor = isDark ? 'text-main-foreground' : 'text-foreground'
              return (
                <Card key={index} className={`border-4 border-border ${color} flex flex-col`}>
                  <CardHeader>
                    <CardTitle className={textColor}>{color.replace('bg-', '')}</CardTitle>
                  </CardHeader>
                  <CardContent className="flex-1">
                    <CardDescription className={textColor}>
                      This card demonstrates the {color.replace('bg-accent-', '')} accent color.
                    </CardDescription>
                  </CardContent>
                  <CardFooter>
                    <Button variant="outline" className="w-full border-2" size="sm">Action</Button>
                  </CardFooter>
                </Card>
              )
            })}
          </div>
        </section>

        {/* Shadow Variations */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-foreground mb-4">Shadow Variations</h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            <Card className="border-4 border-border bg-secondary-background">
              <CardHeader>
                <CardTitle className="text-sm">shadow-sm</CardTitle>
              </CardHeader>
              <CardContent className="p-4">
                <div className="h-20 bg-accent-yellow shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] border-2 border-border"></div>
              </CardContent>
            </Card>
            <Card className="border-4 border-border bg-secondary-background">
              <CardHeader>
                <CardTitle className="text-sm">shadow (default)</CardTitle>
              </CardHeader>
              <CardContent className="p-4">
                <div className="h-20 bg-accent-green shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] border-2 border-border"></div>
              </CardContent>
            </Card>
            <Card className="border-4 border-border bg-secondary-background">
              <CardHeader>
                <CardTitle className="text-sm">shadow-lg</CardTitle>
              </CardHeader>
              <CardContent className="p-4">
                <div className="h-20 bg-accent-orange shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] border-2 border-border"></div>
              </CardContent>
            </Card>
            <Card className="border-4 border-border bg-secondary-background">
              <CardHeader>
                <CardTitle className="text-sm">shadow-xl</CardTitle>
              </CardHeader>
              <CardContent className="p-4">
                <div className="h-20 bg-accent-pink shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] border-2 border-border"></div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Border Variations */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-foreground mb-4">Border Variations</h2>
          <div className="grid gap-6 md:grid-cols-3">
            <Card className="border-2 border-border bg-secondary-background">
              <CardHeader>
                <CardTitle className="text-sm">border-2</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm">2px border</p>
              </CardContent>
            </Card>
            <Card className="border-4 border-border bg-secondary-background">
              <CardHeader>
                <CardTitle className="text-sm">border-4</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm">4px border (standard)</p>
              </CardContent>
            </Card>
            <Card className="border-8 border-border bg-secondary-background">
              <CardHeader>
                <CardTitle className="text-sm">border-8</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm">8px border (thick)</p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Form Elements */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-foreground mb-4">Form Elements</h2>
          <Card className="border-4 border-border">
            <CardHeader>
              <CardTitle>Input Fields</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <label className="text-sm font-medium mb-2 block">Text Input</label>
                <Input placeholder="Enter text here..." className="border-2" />
              </div>
              <div>
                <label className="text-sm font-medium mb-2 block">Email Input</label>
                <Input type="email" placeholder="email@example.com" className="border-2" />
              </div>
              <div>
                <label className="text-sm font-medium mb-2 block">Disabled Input</label>
                <Input placeholder="Disabled input" disabled className="border-2" />
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Tabs */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-foreground mb-4">Tabs</h2>
          <Card className="border-4 border-border">
            <CardHeader>
              <CardTitle>Tabs Component</CardTitle>
            </CardHeader>
            <CardContent>
              <Tabs defaultValue="tab1" className="w-full">
                <TabsList className="border-2 border-border">
                  <TabsTrigger value="tab1">Tab 1</TabsTrigger>
                  <TabsTrigger value="tab2">Tab 2</TabsTrigger>
                  <TabsTrigger value="tab3">Tab 3</TabsTrigger>
                </TabsList>
                <TabsContent value="tab1" className="mt-4 p-4 border-2 border-border bg-secondary-background">
                  <p>Content for Tab 1</p>
                </TabsContent>
                <TabsContent value="tab2" className="mt-4 p-4 border-2 border-border bg-secondary-background">
                  <p>Content for Tab 2</p>
                </TabsContent>
                <TabsContent value="tab3" className="mt-4 p-4 border-2 border-border bg-secondary-background">
                  <p>Content for Tab 3</p>
                </TabsContent>
              </Tabs>
            </CardContent>
          </Card>
        </section>

        {/* Dialog */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-foreground mb-4">Dialogs</h2>
          <Card className="border-4 border-border">
            <CardHeader>
              <CardTitle>Dialog Component</CardTitle>
            </CardHeader>
            <CardContent>
              <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
                <DialogTrigger asChild>
                  <Button>Open Dialog</Button>
                </DialogTrigger>
                <DialogContent className="border-4 border-border">
                  <DialogHeader>
                    <DialogTitle>Test Dialog</DialogTitle>
                    <DialogDescription>
                      This is a test dialog to see how dialogs look in the neo-brutal style.
                    </DialogDescription>
                  </DialogHeader>
                  <div className="py-4">
                    <p>Dialog content goes here.</p>
                  </div>
                </DialogContent>
              </Dialog>
            </CardContent>
          </Card>
        </section>

        {/* Color Swatches */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-foreground mb-4">Color Swatches</h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {[
              { name: 'Yellow', class: 'bg-accent-yellow', text: 'text-foreground' },
              { name: 'Green', class: 'bg-accent-green', text: 'text-foreground' },
              { name: 'Orange', class: 'bg-accent-orange', text: 'text-foreground' },
              { name: 'Purple', class: 'bg-accent-purple', text: 'text-main-foreground' },
              { name: 'Pink', class: 'bg-accent-pink', text: 'text-main-foreground' },
              { name: 'Primary', class: 'bg-primary', text: 'text-primary-foreground' },
              { name: 'Secondary', class: 'bg-secondary', text: 'text-secondary-foreground' },
              { name: 'Background', class: 'bg-background border-2 border-border', text: 'text-foreground' },
            ].map((color, index) => (
              <Card key={index} className={`border-4 border-border ${color.class} ${color.text}`}>
                <CardHeader>
                  <CardTitle>{color.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm opacity-80">{color.class}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Mixed Components */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-foreground mb-4">Mixed Components Example</h2>
          <Card className="border-4 border-border bg-accent-yellow">
            <CardHeader>
              <div className="flex justify-between items-start">
                <div>
                  <CardTitle className="text-foreground">Example Card</CardTitle>
                  <CardDescription className="text-foreground">A complete card with various components</CardDescription>
                </div>
                <Badge variant="default">New</Badge>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <Input placeholder="Search..." className="border-2" />
              <div className="flex gap-2 flex-wrap">
                <Badge variant="secondary">Tag 1</Badge>
                <Badge variant="secondary">Tag 2</Badge>
                <Badge variant="secondary">Tag 3</Badge>
              </div>
            </CardContent>
            <CardFooter className="flex gap-2">
              <Button variant="outline" size="sm" className="flex-1">Cancel</Button>
              <Button size="sm" className="flex-1">Submit</Button>
            </CardFooter>
          </Card>
        </section>
      </main>

      {/* Footer */}
      <footer className="mt-16 border-t-4 border-border bg-background p-6">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-foreground font-bold">
            UI Test Page | Neo-Brutal Design System
          </p>
        </div>
      </footer>
    </div>
  )
}
