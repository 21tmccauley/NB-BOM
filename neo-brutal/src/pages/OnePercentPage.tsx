import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { useState } from "react"
import { Navigation } from "@/components/Navigation"

interface Donation {
  id: string
  date: string
  organization: string
  amount: number
  impact: string
  impactSource: string
}

export function OnePercentPage() {
  const [donations] = useState<Donation[]>([
    {
      id: "1",
      date: "2025-01-15",
      organization: "GiveWell (Helen Keller Intl)",
      amount: 8,
      impact: "Vitamin A supplements for 4 children for 1 year (approximately $2 per child per year)",
      impactSource: "GiveWell cost-effectiveness estimate"
    },
    {
      id: "2",
      date: "2025-01-15",
      organization: "GiveWell (Malaria Consortium)",
      amount: 12,
      impact: "Seasonal malaria chemoprevention to protect children from malaria (approximately $7 per child)",
      impactSource: "GiveWell cost-effectiveness estimate"
    }
  ])

  const totalDonated = donations.reduce((sum, d) => sum + d.amount, 0)

  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Main Content */}
      <main className="max-w-6xl mx-auto p-4 sm:p-6">
        {/* Hero Section */}
        <Card className="mb-8 sm:mb-12 border-4 border-border bg-accent-yellow shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
          <CardHeader className="text-center p-4 sm:p-6">
            <CardTitle className="text-4xl sm:text-5xl font-bold text-foreground mb-4">
              1%
            </CardTitle>
            <CardDescription className="text-base sm:text-lg md:text-xl text-foreground">
              A commitment to giving 1% of income to causes that help the poor, inspired by Mosiah chapter 4
            </CardDescription>
          </CardHeader>
        </Card>

        {/* The Story */}
        <section className="mb-8 sm:mb-12">
          <Card className="border-4 border-border bg-accent-darkblue shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
            <CardHeader className="p-4 sm:p-6">
              <CardTitle className="text-2xl sm:text-3xl font-bold text-foreground mb-4">
                THE STORY
              </CardTitle>
            </CardHeader>
            <CardContent className="p-4 sm:p-6">
              <div className="space-y-4 text-base text-foreground">
                <p>
                  During my study of <strong>Mosiah chapter 4</strong>, I was struck by King Benjamin's teachings 
                  about our responsibility to care for the poor. The scripture makes it clear: we are called to 
                  give to those in need, to share what we have, and to not turn our backs on those who are suffering.
                </p>
                <p>
                  But I found myself paralyzed by perfectionism. I kept thinking: "If I can't give everything, 
                  what's the point? If I'm not doing everything perfectly, why even try?"
                </p>
                <p className="font-bold text-lg">
                  That's when I realized: <span className="underline">perfect is the enemy of good</span>.
                </p>
                <p>
                  Waiting to do everything perfectly meant doing nothing at all. So instead of waiting for the 
                  perfect moment or the perfect amount, I decided to start small. I committed to giving 
                  <strong> 1% of my income</strong> to causes that help the poor and track the actual impact 
                  of that money.
                </p>
                <p>
                  This page is my accountability tool. Here, I track every donation and the impact claims made 
                  by the organizations I support. It's not about perfection—it's about starting, doing something, 
                  and making a difference, however small.
                </p>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Statistics */}
        <section className="mb-8 sm:mb-12">
          <h3 className="text-2xl sm:text-3xl font-bold text-foreground mb-6 sm:mb-8 border-b-4 border-border pb-3 sm:pb-4">
            IMPACT TRACKER
          </h3>
          <div className="grid gap-6 md:grid-cols-3">
            <Card className="border-4 border-border bg-accent-orange">
              <CardHeader className="p-4 sm:p-6">
                <CardTitle className="text-xl sm:text-2xl font-bold text-foreground">TOTAL DONATED</CardTitle>
              </CardHeader>
              <CardContent className="p-4 sm:p-6">
                <p className="text-3xl sm:text-4xl font-bold text-foreground">${totalDonated.toLocaleString()}</p>
                <CardDescription className="text-base text-foreground mt-2">
                  1% of income given to causes
                </CardDescription>
              </CardContent>
            </Card>
            
            <Card className="border-4 border-border bg-accent-purple">
              <CardHeader className="p-4 sm:p-6">
                <CardTitle className="text-xl sm:text-2xl font-bold text-main-foreground">DONATIONS MADE</CardTitle>
              </CardHeader>
              <CardContent className="p-4 sm:p-6">
                <p className="text-3xl sm:text-4xl font-bold text-main-foreground">{donations.length}</p>
                <CardDescription className="text-base text-main-foreground mt-2">
                  Organizations supported
                </CardDescription>
              </CardContent>
            </Card>
            
            <Card className="border-4 border-border bg-accent-pink">
              <CardHeader className="p-4 sm:p-6">
                <CardTitle className="text-xl sm:text-2xl font-bold text-main-foreground">THE GOAL</CardTitle>
              </CardHeader>
              <CardContent className="p-4 sm:p-6">
                <p className="text-3xl sm:text-4xl font-bold text-main-foreground">1%</p>
                <CardDescription className="text-base text-main-foreground mt-2">
                  Of annual income donated
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Donations List */}
        <section className="mb-8 sm:mb-12">
          <h3 className="text-2xl sm:text-3xl font-bold text-foreground mb-6 sm:mb-8 border-b-4 border-border pb-3 sm:pb-4">
            DONATIONS & IMPACT
          </h3>
          
          {donations.length === 0 ? (
            <Card className="border-4 border-border bg-accent-yellow shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              <CardContent className="p-8 text-center">
                <p className="text-lg text-foreground mb-4">
                  No donations tracked yet. Start your journey by making your first donation!
                </p>
                <p className="text-base text-foreground">
                  When you make a donation, add it here along with the impact claim from the organization.
                </p>
              </CardContent>
            </Card>
          ) : (
            <div className="space-y-6">
              {donations.map((donation, index) => {
                const accentColors = ['bg-accent-darkblue', 'bg-accent-orange', 'bg-accent-purple', 'bg-accent-pink']
                const accentColor = accentColors[index % accentColors.length]
                const isDarkBackground = accentColor === 'bg-accent-purple' || accentColor === 'bg-accent-pink'
                const textColor = isDarkBackground ? 'text-main-foreground' : 'text-foreground'
                
                return (
                  <Card key={donation.id} className={`border-4 border-border ${accentColor} shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]`}>
                    <CardHeader className="p-4 sm:p-6">
                      <div className="flex flex-col sm:flex-row justify-between items-start gap-3 sm:gap-0 mb-2">
                        <Badge variant="default" className="border-2 border-border font-bold bg-accent-yellow text-foreground text-xs sm:text-sm">
                          {donation.date}
                        </Badge>
                        <div className="text-left sm:text-right">
                          <p className={`text-xl sm:text-2xl font-bold ${textColor}`}>${donation.amount.toLocaleString()}</p>
                        </div>
                      </div>
                      <CardTitle className={`text-xl sm:text-2xl font-bold ${textColor} mb-2`}>
                        {donation.organization}
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="p-4 sm:p-6">
                      <div className="space-y-3">
                        <div>
                          <p className={`text-sm font-bold ${textColor} mb-1`}>CLAIMED IMPACT:</p>
                          <p className={`text-base ${textColor}`}>{donation.impact}</p>
                        </div>
                        <div>
                          <p className={`text-sm font-bold ${textColor} mb-1`}>SOURCE:</p>
                          <p className={`text-sm ${textColor} opacity-90`}>{donation.impactSource}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                )
              })}
            </div>
          )}
        </section>

        {/* Mosiah 4 Reference */}
        <section className="mb-8 sm:mb-12">
          <Card className="border-4 border-border bg-accent-darkblue shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
            <CardHeader className="p-4 sm:p-6">
              <CardTitle className="text-xl sm:text-2xl font-bold text-foreground mb-4">
                MOSIAH 4:16-27
              </CardTitle>
            </CardHeader>
            <CardContent className="p-4 sm:p-6">
              <div className="space-y-4 text-base text-foreground italic">
                <p>
                  "And also, ye yourselves will succor those that stand in need of your succor; ye will administer 
                  of your substance unto him that standeth in need..."
                </p>
                <p>
                  "And now, if ye say this in your hearts ye remain guiltless, otherwise ye are condemned..."
                </p>
                <p>
                  "I would that ye should impart of your substance to the poor, every man according to that which 
                  he hath..."
                </p>
                <p className="mt-4 not-italic font-bold">
                  This commitment to 1% is my way of heeding this call, imperfectly but consistently.
                </p>
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

