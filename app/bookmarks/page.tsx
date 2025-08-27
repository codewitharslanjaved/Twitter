import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Bookmarks / Twitter",
  description: "Twitter Explore Page",
}

export default function BookmarksPage() {
  return (
    <div className="border-b twitter-border min-h-screen w-[600px]">
      <div className="sticky top-0 bg-background/80 backdrop-blur-md border-b twitter-border p-4">
        <h1 className="text-xl font-bold">Bookmarks</h1>
      </div>

      <div className="p-4 pb-92">
        <div className="text-center py-8">
          <div className="w-16 h-16 bg-muted rounded-full mx-auto mb-4 flex items-center justify-center">
            <svg viewBox="0 0 24 24" className="w-8 h-8 fill-muted-foreground">
              <path d="M19.9 23.5c-.157 0-.312-.05-.442-.144L12 17.928l-7.458 5.43c-.228.164-.53.19-.782.067-.252-.123-.41-.385-.41-.672V5.6c0-1.24 1.01-2.25 2.25-2.25h12.798c1.24 0 2.25 1.01 2.25 2.25v17.15c0 .287-.158.55-.41.673-.094.046-.196.077-.302.077z" />
            </svg>
          </div>
          <h2 className="text-2xl font-bold mb-2">Save Tweets for later</h2>
          <p className="text-muted-foreground">
            Don't let the good ones fly away! Bookmark Tweets to easily find them again in the future.
          </p>
        </div>
      </div>
    </div>
  )
}
