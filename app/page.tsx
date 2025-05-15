import { Search, Filter, MapPin, Ticket, Coffee } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      {/* Hero Section with Amsterdam skyline */}
      <header className="relative h-[400px] w-full overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/70">
          <Image
            src="/placeholder.svg?height=800&width=1600"
            alt="Amsterdam Canal View"
            fill
            className="object-cover"
            priority
          />
        </div>
        <div className="container relative z-10 flex h-full flex-col items-center justify-center px-4 text-center text-white">
          <h1 className="mb-2 text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
            Amsterdam Deals & Discounts
          </h1>
          <p className="mb-6 max-w-2xl text-lg text-white/90">
            Discover the best coupons and offers for your Amsterdam adventure
          </p>
          <div className="relative w-full max-w-md">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <Input
              placeholder="Search for deals..."
              className="pl-10 bg-white/10 backdrop-blur-sm border-white/20 text-white placeholder:text-white/60"
            />
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container flex-1 px-4 py-8">
        {/* Featured Deals */}
        <section className="mb-12">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold tracking-tight">Featured Deals</h2>
            <Button variant="outline" size="sm" className="gap-2">
              <Filter className="h-4 w-4" />
              Filter
            </Button>
          </div>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {/* Rijksmuseum */}
            <Card className="overflow-hidden transition-all hover:shadow-lg">
              <div className="relative h-48 w-full">
                <Image src="/placeholder.svg?height=400&width=600" alt="Rijksmuseum" fill className="object-cover" />
                <Badge className="absolute right-2 top-2 bg-red-600 hover:bg-red-700">20% OFF</Badge>
              </div>
              <CardHeader>
                <CardTitle>Rijksmuseum Skip-the-Line</CardTitle>
                <CardDescription className="flex items-center gap-1">
                  <MapPin className="h-3.5 w-3.5" /> Museumstraat 1
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm">
                  Skip the line and save 20% on tickets to the world-famous Rijksmuseum, home to Dutch masterpieces.
                </p>
              </CardContent>
              <CardFooter className="flex justify-between">
                <div>
                  <p className="text-sm text-muted-foreground line-through">€22.50</p>
                  <p className="text-lg font-bold">€18.00</p>
                </div>
                <Button>Get Coupon</Button>
              </CardFooter>
            </Card>

            {/* Canal Cruise */}
            <Card className="overflow-hidden transition-all hover:shadow-lg">
              <div className="relative h-48 w-full">
                <Image
                  src="/placeholder.svg?height=400&width=600"
                  alt="Amsterdam Canal Cruise"
                  fill
                  className="object-cover"
                />
                <Badge className="absolute right-2 top-2 bg-red-600 hover:bg-red-700">15% OFF</Badge>
              </div>
              <CardHeader>
                <CardTitle>Amsterdam Canal Cruise</CardTitle>
                <CardDescription className="flex items-center gap-1">
                  <MapPin className="h-3.5 w-3.5" /> Damrak Pier 5
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm">
                  Enjoy a scenic 1-hour canal cruise through Amsterdam's historic waterways with audio guide.
                </p>
              </CardContent>
              <CardFooter className="flex justify-between">
                <div>
                  <p className="text-sm text-muted-foreground line-through">€18.00</p>
                  <p className="text-lg font-bold">€15.30</p>
                </div>
                <Button>Get Coupon</Button>
              </CardFooter>
            </Card>

            {/* Restaurant Deal */}
            <Card className="overflow-hidden transition-all hover:shadow-lg">
              <div className="relative h-48 w-full">
                <Image
                  src="/placeholder.svg?height=400&width=600"
                  alt="Restaurant De Silveren Spiegel"
                  fill
                  className="object-cover"
                />
                <Badge className="absolute right-2 top-2 bg-red-600 hover:bg-red-700">2-for-1</Badge>
              </div>
              <CardHeader>
                <CardTitle>De Silveren Spiegel</CardTitle>
                <CardDescription className="flex items-center gap-1">
                  <MapPin className="h-3.5 w-3.5" /> Kattengat 4-6
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm">
                  Traditional Dutch cuisine in a historic 17th-century building. Buy one main course, get one free!
                </p>
              </CardContent>
              <CardFooter className="flex justify-between">
                <div>
                  <p className="text-lg font-bold">2-for-1 Special</p>
                  <p className="text-xs text-muted-foreground">Valid Sun-Thu</p>
                </div>
                <Button>Get Coupon</Button>
              </CardFooter>
            </Card>
          </div>
        </section>

        {/* Categories */}
        <section className="mb-12">
          <h2 className="mb-6 text-2xl font-bold tracking-tight">Browse by Category</h2>
          <Tabs defaultValue="all">
            <TabsList className="mb-6">
              <TabsTrigger value="all">All</TabsTrigger>
              <TabsTrigger value="attractions">Attractions</TabsTrigger>
              <TabsTrigger value="restaurants">Restaurants</TabsTrigger>
              <TabsTrigger value="shopping">Shopping</TabsTrigger>
              <TabsTrigger value="activities">Activities</TabsTrigger>
            </TabsList>
            <TabsContent value="all" className="space-y-6">
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
                {/* Van Gogh Museum */}
                <Card className="overflow-hidden transition-all hover:shadow-lg">
                  <div className="relative h-40 w-full">
                    <Image
                      src="/placeholder.svg?height=400&width=600"
                      alt="Van Gogh Museum"
                      fill
                      className="object-cover"
                    />
                    <div className="absolute left-2 top-2 rounded bg-yellow-500 px-2 py-1 text-xs font-bold text-black">
                      POPULAR
                    </div>
                  </div>
                  <CardContent className="p-4">
                    <div className="mb-2 flex items-center justify-between">
                      <h3 className="font-semibold">Van Gogh Museum</h3>
                      <Badge variant="outline" className="bg-blue-50">
                        Attraction
                      </Badge>
                    </div>
                    <p className="mb-2 text-sm text-muted-foreground">10% discount on tickets</p>
                    <Button size="sm" className="w-full">
                      Get Coupon
                    </Button>
                  </CardContent>
                </Card>

                {/* Pancake Restaurant */}
                <Card className="overflow-hidden transition-all hover:shadow-lg">
                  <div className="relative h-40 w-full">
                    <Image
                      src="/placeholder.svg?height=400&width=600"
                      alt="Pancake Restaurant"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <CardContent className="p-4">
                    <div className="mb-2 flex items-center justify-between">
                      <h3 className="font-semibold">Pancake Bakery</h3>
                      <Badge variant="outline" className="bg-orange-50">
                        Restaurant
                      </Badge>
                    </div>
                    <p className="mb-2 text-sm text-muted-foreground">Free drink with any pancake</p>
                    <Button size="sm" className="w-full">
                      Get Coupon
                    </Button>
                  </CardContent>
                </Card>

                {/* Cheese Shop */}
                <Card className="overflow-hidden transition-all hover:shadow-lg">
                  <div className="relative h-40 w-full">
                    <Image
                      src="/placeholder.svg?height=400&width=600"
                      alt="Cheese Shop"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <CardContent className="p-4">
                    <div className="mb-2 flex items-center justify-between">
                      <h3 className="font-semibold">Henri Willig Cheese</h3>
                      <Badge variant="outline" className="bg-green-50">
                        Shopping
                      </Badge>
                    </div>
                    <p className="mb-2 text-sm text-muted-foreground">15% off all purchases</p>
                    <Button size="sm" className="w-full">
                      Get Coupon
                    </Button>
                  </CardContent>
                </Card>

                {/* Bike Rental */}
                <Card className="overflow-hidden transition-all hover:shadow-lg">
                  <div className="relative h-40 w-full">
                    <Image
                      src="/placeholder.svg?height=400&width=600"
                      alt="Bike Rental"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <CardContent className="p-4">
                    <div className="mb-2 flex items-center justify-between">
                      <h3 className="font-semibold">MacBike Rental</h3>
                      <Badge variant="outline" className="bg-purple-50">
                        Activity
                      </Badge>
                    </div>
                    <p className="mb-2 text-sm text-muted-foreground">2nd hour free with rental</p>
                    <Button size="sm" className="w-full">
                      Get Coupon
                    </Button>
                  </CardContent>
                </Card>
              </div>

              <div className="text-center">
                <Button variant="outline">Load More Deals</Button>
              </div>
            </TabsContent>

            {/* Other tabs would have similar content structure */}
            <TabsContent value="attractions">
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
                {/* More attraction cards would go here */}
                <Card className="overflow-hidden transition-all hover:shadow-lg">
                  <div className="relative h-40 w-full">
                    <Image
                      src="/placeholder.svg?height=400&width=600"
                      alt="NEMO Science Museum"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <CardContent className="p-4">
                    <div className="mb-2 flex items-center justify-between">
                      <h3 className="font-semibold">NEMO Science Museum</h3>
                      <Badge variant="outline" className="bg-blue-50">
                        Attraction
                      </Badge>
                    </div>
                    <p className="mb-2 text-sm text-muted-foreground">25% off family tickets</p>
                    <Button size="sm" className="w-full">
                      Get Coupon
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="restaurants">
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
                {/* Restaurant cards would go here */}
              </div>
            </TabsContent>

            <TabsContent value="shopping">
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
                {/* Shopping cards would go here */}
              </div>
            </TabsContent>

            <TabsContent value="activities">
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
                {/* Activity cards would go here */}
              </div>
            </TabsContent>
          </Tabs>
        </section>

        {/* Popular Areas */}
        <section className="mb-12">
          <h2 className="mb-6 text-2xl font-bold tracking-tight">Popular Areas</h2>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <Link href="#" className="group relative h-60 overflow-hidden rounded-lg">
              <Image
                src="/placeholder.svg?height=600&width=800"
                alt="Jordaan"
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
              <div className="absolute bottom-0 left-0 p-6 text-white">
                <h3 className="text-xl font-bold">Jordaan</h3>
                <p className="text-sm text-white/80">42 deals available</p>
              </div>
            </Link>

            <Link href="#" className="group relative h-60 overflow-hidden rounded-lg">
              <Image
                src="/placeholder.svg?height=600&width=800"
                alt="Museum Quarter"
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
              <div className="absolute bottom-0 left-0 p-6 text-white">
                <h3 className="text-xl font-bold">Museum Quarter</h3>
                <p className="text-sm text-white/80">38 deals available</p>
              </div>
            </Link>

            <Link href="#" className="group relative h-60 overflow-hidden rounded-lg">
              <Image
                src="/placeholder.svg?height=600&width=800"
                alt="De Pijp"
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
              <div className="absolute bottom-0 left-0 p-6 text-white">
                <h3 className="text-xl font-bold">De Pijp</h3>
                <p className="text-sm text-white/80">29 deals available</p>
              </div>
            </Link>
          </div>
        </section>

        {/* How It Works */}
        <section className="mb-12 rounded-xl bg-slate-50 p-8">
          <h2 className="mb-8 text-center text-2xl font-bold tracking-tight">How It Works</h2>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            <div className="flex flex-col items-center text-center">
              <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-red-600 text-white">
                <Search className="h-8 w-8" />
              </div>
              <h3 className="mb-2 text-lg font-semibold">Browse Deals</h3>
              <p className="text-muted-foreground">
                Explore hundreds of exclusive discounts and offers across Amsterdam.
              </p>
            </div>

            <div className="flex flex-col items-center text-center">
              <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-red-600 text-white">
                <Ticket className="h-8 w-8" />
              </div>
              <h3 className="mb-2 text-lg font-semibold">Get Your Coupon</h3>
              <p className="text-muted-foreground">
                Claim your digital coupon with a single click - no printing needed.
              </p>
            </div>

            <div className="flex flex-col items-center text-center">
              <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-red-600 text-white">
                <Coffee className="h-8 w-8" />
              </div>
              <h3 className="mb-2 text-lg font-semibold">Enjoy & Save</h3>
              <p className="text-muted-foreground">
                Show your coupon at the venue and enjoy your discounted experience.
              </p>
            </div>
          </div>
        </section>

        {/* Newsletter */}
        <section className="rounded-xl bg-red-600 p-8 text-white">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="mb-4 text-2xl font-bold tracking-tight">Get the Latest Deals</h2>
            <p className="mb-6">Subscribe to our newsletter and receive new Amsterdam deals directly to your inbox.</p>
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-center">
              <Input
                placeholder="Your email address"
                className="bg-white/20 border-white/30 text-white placeholder:text-white/60"
              />
              <Button variant="secondary" className="bg-white text-red-600 hover:bg-white/90">
                Subscribe
              </Button>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-slate-900 py-12 text-white">
        <div className="container px-4">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-4">
            <div>
              <h3 className="mb-4 text-lg font-semibold">Amsterdam Deals</h3>
              <p className="text-sm text-slate-400">
                Your one-stop destination for the best discounts and offers in Amsterdam.
              </p>
            </div>

            <div>
              <h3 className="mb-4 text-lg font-semibold">Categories</h3>
              <ul className="space-y-2 text-sm text-slate-400">
                <li>
                  <Link href="#" className="hover:text-white">
                    Museums & Attractions
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white">
                    Food & Drinks
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white">
                    Shopping
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white">
                    Tours & Activities
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="mb-4 text-lg font-semibold">Popular Areas</h3>
              <ul className="space-y-2 text-sm text-slate-400">
                <li>
                  <Link href="#" className="hover:text-white">
                    City Center
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white">
                    Jordaan
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white">
                    De Pijp
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white">
                    Museum Quarter
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="mb-4 text-lg font-semibold">Contact</h3>
              <ul className="space-y-2 text-sm text-slate-400">
                <li>info@amsterdamdeals.com</li>
                <li>+31 20 123 4567</li>
                <li>Damrak 1, 1012 LG Amsterdam</li>
              </ul>
            </div>
          </div>

          <Separator className="my-8 bg-slate-700" />

          <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
            <p className="text-sm text-slate-400">© 2025 Amsterdam Deals. All rights reserved.</p>
            <div className="flex gap-4">
              <Button variant="ghost" size="icon" className="text-slate-400 hover:text-white">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-5 w-5"
                >
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                </svg>
                <span className="sr-only">Facebook</span>
              </Button>
              <Button variant="ghost" size="icon" className="text-slate-400 hover:text-white">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-5 w-5"
                >
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
                <span className="sr-only">Instagram</span>
              </Button>
              <Button variant="ghost" size="icon" className="text-slate-400 hover:text-white">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-5 w-5"
                >
                  <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                </svg>
                <span className="sr-only">Twitter</span>
              </Button>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
