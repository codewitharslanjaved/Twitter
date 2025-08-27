import { Search } from "lucide-react"

export function TwitterRightSidebar() {
  const trends = [
    {
      category: "COVID19 · Last night",
      topic: "England's Chief Medical Officer says the UK is at the most dangerous time of the pandemic",
      image: "/medical-officer.png",
    },
    {
      category: "US news · 4h ago",
      topic: "Parler may go offline following suspensions by Amazon, Apple and Google",
      image: "/parler-app-icon.png",
    },
    {
      category: "India · 1h ago",
      topic: "India vs Australia: India hold on to earn a draw on Day 5 in Sydney Test",
      image: "/vibrant-cricket-match.png",
    },
  ]

  const whoToFollow = [
    { name: "Bessie Cooper", username: "alessandrovei", avatar: "/woman-profile.png" },
    { name: "Jenny Wilson", username: "gabrielcantarin", avatar: "/woman-profile-two.png" },
  ]

  return (
    <div className="sticky top-0 overflow-y-auto h-screen space-y-4 pl-4 hide-scrollbar">
        <div className="sticky top-0 py-1 bg-background">
          <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-foreground/80" />
          <input
            type="text"
            placeholder="Search Twitter"
            className="w-full pl-12 pr-4 py-3 border rounded-full outline-none placeholder-foreground/80 focus:bg-background focus:ring-2 focus:ring-blue-500 transition-all"
          />
        </div>

      <div className="border rounded-2xl overflow-hidden">
        <div className="px-4 py-3 border-b border-border">
          <h2 className="text-xl font-bold">What's happening</h2>
        </div>
        <div>
          {trends.map((trend, index) => (
            <div
              key={index}
              className="px-4 py-3 hover:bg-muted/80 cursor-pointer transition-colors border-b border-border last:border-b-0"
            >
              <div className="flex gap-3">
                <div className="flex-1">
                  <div className="text-sm text-muted-foreground mb-1">{trend.category}</div>
                  <div className="font-bold text-[15px] leading-5">{trend.topic}</div>
                  <div className="text-sm text-muted-foreground mt-1">
                    Trending with <span className="text-blue-500">#covid19</span>
                  </div>
                </div>
                <img
                  src={trend.image || "/placeholder.svg"}
                  alt=""
                  className="w-16 h-16 rounded-xl object-cover flex-shrink-0"
                />
              </div>
            </div>
          ))}
        </div>
        <div className="px-4 border-t py-3">
          <span className="text-blue-500 text-[15px] cursor-pointer hover:underline">Show more</span>
        </div>
      </div>

      <div className="border rounded-2xl overflow-hidden">
        <div className="px-4 py-3 border-b border-border">
          <h2 className="text-xl font-bold">Who to follow</h2>
        </div>
        <div>
          {whoToFollow.map((user, index) => (
            <div
              key={index}
              className="px-4 py-3 hover:bg-muted/80 cursor-pointer transition-colors border-b border-border last:border-b-0"
            >
              <div className="flex items-center gap-3">
                <img src={user.avatar || "/placeholder.svg"} alt="" className="w-12 h-12 rounded-full" />
                <div className="flex-1">
                  <div className="font-bold text-[15px]">{user.name}</div>
                  <div className="text-muted-foreground text-[15px]">@{user.username}</div>
                </div>
                <button className="bg-primary text-primary-foreground px-4 py-1.5 rounded-full text-sm font-bold hover:bg-primary/90 transition-colors">
                  Follow
                </button>
              </div>
            </div>
          ))}
        </div>
        <div className="px-4 border-t py-3">
          <span className="text-blue-500 text-[15px] cursor-pointer hover:underline">Show more</span>
        </div>
      </div>

      <div className="px-4 text-xs pb-2 text-muted-foreground leading-4">
        <div className="flex flex-wrap gap-x-3 gap-y-1">
          <a href="#" className="hover:underline">
            Terms of Service
          </a>
          <a href="#" className="hover:underline">
            Privacy Policy
          </a>
          <a href="#" className="hover:underline">
            Cookie Policy
          </a>
          <a href="#" className="hover:underline">
            Ads info
          </a>
          <a href="#" className="hover:underline">
            More
          </a>
        <div className="">© 2023 Twitter, Inc.</div>
        </div>
      </div>
    </div>
  )
}
