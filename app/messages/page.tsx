import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Messages / Twitter",
  description: "Twitter Explore Page",
}

export default function MessagesPage() {
  return (
    <div className="border-b border-r min-h-screen pb-92 twitter-border w-[950px]">
      <div className="bg-background/80 backdrop-blur-md p-4">
        <h1 className="text-xl font-bold">Messages</h1>
      </div>

      <div className="p-4">
        <div className="text-center py-8">
          <div className="w-16 h-16 bg-muted rounded-full mx-auto mb-4 flex items-center justify-center">
            <svg viewBox="0 0 24 24" className="w-8 h-8 fill-muted-foreground">
              <path d="M19.25 3.018H4.75C3.233 3.018 2 4.252 2 5.77v12.495c0 1.518 1.233 2.753 2.75 2.753h14.5c1.517 0 2.75-1.235 2.75-2.753V5.77c0-1.518-1.233-2.752-2.75-2.752z" />
            </svg>
          </div>
          <h2 className="text-2xl font-bold mb-2">Welcome to your inbox!</h2>
          <p className="text-muted-foreground">
            Drop a line, share Tweets and more with private conversations between you and others on Twitter.
          </p>
        </div>
      </div>
    </div>
  )
}
