import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Lists / Twitter",
  description: "Twitter Explore Page",
}

export default function ListsPage() {
  return (
    <div className="border-b w-[600px] min-h-screen twitter-border">
      <div className="sticky top-0 bg-background/80 backdrop-blur-md border-b twitter-border p-4">
        <h1 className="text-xl font-bold">Lists</h1>
      </div>

      <div className="p-4 pb-92">
        <div className="text-center py-8">
          <div className="w-16 h-16 bg-muted rounded-full mx-auto mb-4 flex items-center justify-center">
            <svg viewBox="0 0 24 24" className="w-8 h-8 fill-muted-foreground">
              <path d="M19.75 22H4.25C3.01 22 2 20.99 2 19.75V4.25C2 3.01 3.01 2 4.25 2h15.5C20.99 2 22 3.01 22 4.25v15.5c0 1.24-1.01 2.25-2.25 2.25z" />
            </svg>
          </div>
          <h2 className="text-2xl font-bold mb-2">You haven't created any Lists yet</h2>
          <p className="text-muted-foreground">
            When you do, it'll show up here and be saved for later so you can easily get back to your favorites.
          </p>
        </div>
      </div>
    </div>
  )
}
