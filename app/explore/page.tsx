import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Explore / Twitter",
  description: "Twitter Explore Page",
}

export default function ExplorePage() {
  return (
    <div className="border-b w-[600px] min-h-screen twitter-border">
      <div className="sticky top-0 bg-background/80 backdrop-blur-md border-b twitter-border p-4">
        <h1 className="text-xl font-bold">Explore</h1>
      </div>

      <div className="p-4">
        <div className="bg-muted rounded-2xl p-4 mb-4">
          <h2 className="text-lg font-bold mb-2">Trending for you</h2>
          <div className="space-y-3">
            <div className="hover:bg-background p-2 rounded cursor-pointer">
              <p className="text-sm text-muted-foreground">Trending in Technology</p>
              <p className="font-bold">#NextJS</p>
              <p className="text-sm text-muted-foreground">42.1K Tweets</p>
            </div>
            <div className="hover:bg-background p-2 rounded cursor-pointer">
              <p className="text-sm text-muted-foreground">Trending in Sports</p>
              <p className="font-bold">#WorldCup</p>
              <p className="text-sm text-muted-foreground">128K Tweets</p>
            </div>
            <div className="hover:bg-background p-2 rounded cursor-pointer">
              <p className="text-sm text-muted-foreground">Trending</p>
              <p className="font-bold">#AI</p>
              <p className="text-sm text-muted-foreground">89.3K Tweets</p>
            </div>
          </div>
        </div>

        <div className="bg-muted rounded-2xl p-4">
          <h2 className="text-lg font-bold mb-2">What's happening</h2>
          <div className="space-y-3">
            <div className="hover:bg-background p-2 rounded cursor-pointer">
              <p className="text-sm text-muted-foreground">Technology · Trending</p>
              <p className="font-bold">New AI breakthrough announced</p>
            </div>
            <div className="hover:bg-background p-2 rounded cursor-pointer">
              <p className="text-sm text-muted-foreground">Technology · Trending</p>
              <p className="font-bold">New AI breakthrough announced</p>
            </div>
            <div className="hover:bg-background p-2 rounded cursor-pointer">
              <p className="text-sm text-muted-foreground">Technology · Trending</p>
              <p className="font-bold">New AI breakthrough announced</p>
            </div>
            <div className="hover:bg-background p-2 rounded cursor-pointer">
              <p className="text-sm text-muted-foreground">Sports · Live</p>
              <p className="font-bold">Championship finals underway</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
