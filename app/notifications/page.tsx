import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Notifications / Twitter",
  description: "Twitter Explore Page",
}

export default function NotificationsPage() {
  return (
    <div className="border-b twitter-border min-h-screen w-[600px]">
      <div className="sticky top-0 bg-background/80 backdrop-blur-md border-b twitter-border p-4">
        <h1 className="text-xl font-bold">Notifications</h1>
      </div>

      <div className="p-4 pb-96">
        <div className="text-center py-8">
          <div className="w-16 h-16 bg-muted rounded-full mx-auto mb-4 flex items-center justify-center">
            <svg viewBox="0 0 24 24" className="w-8 h-8 fill-muted-foreground">
              <path d="M21.697 16.468c-.02-.016-2.14-1.64-2.103-6.03.02-2.532-.812-4.782-2.347-6.335C15.872 2.71 14.01 1.94 12.005 1.93h-.013c-2.004.01-3.866.78-5.242 2.174-1.534 1.553-2.368 3.802-2.346 6.334.037 4.33-2.02 5.967-2.102 6.03-.26.193-.366.53-.265.838.102.308.39.515.712.515h4.92c.102 2.31 1.997 4.16 4.33 4.16s4.226-1.85 4.327-4.16h4.922c.322 0 .61-.206.71-.514.103-.307-.003-.645-.263-.838z" />
            </svg>
          </div>
          <h2 className="text-2xl font-bold mb-2">Nothing to see here — yet</h2>
          <p className="text-muted-foreground">When someone mentions you, you'll find it here.</p>
        </div>
      </div>
    </div>
  )
}
