"use client"
import { useState } from "react"
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"
import { ArrowLeft, Search, CheckCircle2, MapPin, Link as LinkIcon, Calendar } from "lucide-react"
import { defaultTweets, Tweet } from "@/lib/tweets"

const profile = {
  name: "Arslan Javed",
  username: "arslanjaved",
  avatar: "/User.jpeg",
  bio: "Building amazing things with code. Love technology, design, and coffee.",
  location: "Lahore, Pakistan",
  website: "arslanjaved.com",
  joined: "August 2025",
  following: 23,
  followers: "3.2k",
  verified: true,
}

const tabs = [
  "Posts",
  "Replies",
  "Articles",
  "Media",
  "Likes",
]

const mockTweets = [
  { id: 1, content: "Excited to launch my new project!", date: "2h", media: false, liked: true, reply: false },
  { id: 2, content: "Working on some cool UI components.", date: "1d", media: true, liked: false, reply: false },
  { id: 3, content: "@someone Thanks for the feedback!", date: "3d", media: false, liked: false, reply: true },
  { id: 4, content: "Check out my new blog post!", date: "5d", media: true, liked: true, reply: false },
]

export default function ProfilePage() {
  const [activeTab, setActiveTab] = useState("Posts")

  const renderTabContent = () => {
    const TweetCard = ({ tweet }: { tweet: typeof mockTweets[0] }) => (
      <div className="border-b border-border p-6 hover:bg-muted/50 transition">
        <div className="flex gap-4">
          <Avatar className="w-12 h-12">
            <AvatarImage src={profile.avatar} alt={profile.name} />
            <AvatarFallback>{profile.name[0]}</AvatarFallback>
          </Avatar>
          <div className="flex-1">
            <div className="flex gap-2 items-center">
              <span className="font-semibold text-foreground">{profile.name}</span>
              <span className="text-muted-foreground">@{profile.username} · {tweet.date}</span>
            </div>
            <div className="mt-1 text-foreground text-base">{tweet.content}</div>
            {tweet.media && (
              <div className="mt-3 w-full h-56 bg-muted rounded-xl" />
            )}
            {/* Action bar (icons only, no emoji) */}
            <div className="flex gap-8 mt-3 text-muted-foreground">
              <button className="hover:text-blue-500 transition"><span className="i-lucide-message-circle w-5 h-5" /></button>
              <button className="hover:text-green-500 transition"><span className="i-lucide-repeat-2 w-5 h-5" /></button>
              <button className="hover:text-pink-500 transition"><span className="i-lucide-heart w-5 h-5" /></button>
              <button className="hover:text-yellow-500 transition"><span className="i-lucide-bookmark w-5 h-5" /></button>
              <button className="hover:text-muted-foreground transition"><span className="i-lucide-share w-5 h-5" /></button>
            </div>
          </div>
        </div>
      </div>
    )
    switch (activeTab) {
      case "Posts":
        // Show 5 posts from defaultTweets, but with profile's name, username, avatar
        return defaultTweets.slice(0, 5).map((tweet: Tweet) => (
          <div
            key={tweet.id}
            className="border-b border-border px-4 py-3 hover:bg-muted/30 cursor-pointer transition-colors"
          >
            <div className="flex gap-3">
              <img
                src={profile.avatar}
                alt=""
                className="w-12 h-12 rounded-full flex-shrink-0 object-cover"
              />
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-1">
                  <span className="font-bold text-[15px] text-foreground hover:underline cursor-pointer">
                    {profile.name}
                  </span>
                  {profile.verified && (
                    <svg viewBox="0 0 24 24" className="w-[18px] h-[18px] text-blue-500 fill-current flex-shrink-0" aria-label="Verified account" role="img" data-testid="icon-verified"><g><path d="M20.396 11c-.018-.646-.215-1.275-.57-1.816-.354-.54-.852-.972-1.438-1.246.223-.607.27-1.264.14-1.897-.131-.634-.437-1.218-.882-1.687-.47-.445-1.053-.75-1.687-.882-.633-.13-1.29-.083-1.897.14-.273-.587-.704-1.086-1.245-1.44S11.647 1.62 11 1.604c-.646.017-1.273.213-1.813.568s-.969.854-1.24 1.44c-.608-.223-1.267-.272-1.902-.14-.635.13-1.22.436-1.69.882-.445.47-.749 1.055-.878 1.688-.13.633-.08 1.29.144 1.896-.587.274-1.087.705-1.443 1.245-.356.54-.555 1.17-.574 1.817.02.647.218 1.276.574 1.817.356.54.856.972 1.443 1.245-.224.606-.274 1.263-.144 1.896.13.634.433 1.218.877 1.688.47.443 1.054.747 1.687.878.633.132 1.29.084 1.897-.136.274.586.705 1.084 1.246 1.439.54.354 1.17.551 1.816.569.647-.016 1.276-.213 1.817-.567s.972-.854 1.245-1.44c.604.239 1.266.296 1.903.164.636-.132 1.22-.447 1.68-.907.46-.46.776-1.044.908-1.681s.075-1.299-.165-1.903c.586-.274 1.084-.705 1.439-1.246.354-.54.551-1.17.569-1.816zM9.662 14.85l-3.429-3.428 1.293-1.302 2.072 2.072 4.4-4.794 1.347 1.246z"></path></g></svg>
                  )}
                  <span className="text-muted-foreground text-[15px] hover:underline cursor-pointer">
                    @{profile.username}
                  </span>
                  <span className="text-muted-foreground text-[13px]">·</span>
                  <span className="text-muted-foreground text-[15px] hover:underline cursor-pointer">
                    {tweet.timestamp}
                  </span>
                </div>
                <div className="mt-1 whitespace-pre-line text-foreground text-base">{tweet.content}</div>
                {tweet.image && (
                  <div className="mt-3 w-full rounded-2xl overflow-hidden border border-border">
                    <img
                      src={tweet.image}
                      alt="tweet media"
                      className="w-full max-h-96 object-cover"
                    />
                  </div>
                )}

              </div>
            </div>
          </div>
        ))
      case "Replies":
        // Show some posts as replies from original users
        return defaultTweets.slice(1, 4).map((tweet: Tweet) => (
          <div
            key={tweet.id}
            className="border-b border-border px-4 py-3 hover:bg-muted/30 cursor-pointer transition-colors"
          >
            <div className="flex gap-3">
              <img
                src={tweet.user.avatar}
                alt=""
                className="w-12 h-12 rounded-full flex-shrink-0 object-cover"
              />
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-1">
                  <span className="font-bold text-[15px] text-foreground hover:underline cursor-pointer">
                    {tweet.user.name}
                  </span>
                  {tweet.user.verified && (
                    <svg viewBox="0 0 24 24" className="w-[18px] h-[18px] text-blue-500 fill-current flex-shrink-0" aria-label="Verified account" role="img" data-testid="icon-verified"><g><path d="M20.396 11c-.018-.646-.215-1.275-.57-1.816-.354-.54-.852-.972-1.438-1.246.223-.607.27-1.264.14-1.897-.131-.634-.437-1.218-.882-1.687-.47-.445-1.053-.75-1.687-.882-.633-.13-1.29-.083-1.897.14-.273-.587-.704-1.086-1.245-1.44S11.647 1.62 11 1.604c-.646.017-1.273.213-1.813.568s-.969.854-1.24 1.44c-.608-.223-1.267-.272-1.902-.14-.635.13-1.22.436-1.69.882-.445.47-.749 1.055-.878 1.688-.13.633-.08 1.29.144 1.896-.587.274-1.087.705-1.443 1.245-.356.54-.555 1.17-.574 1.817.02.647.218 1.276.574 1.817.356.54.856.972 1.443 1.245-.224.606-.274 1.263-.144 1.896.13.634.433 1.218.877 1.688.47.443 1.054.747 1.687.878.633.132 1.29.084 1.897-.136.274.586.705 1.084 1.246 1.439.54.354 1.17.551 1.816.569.647-.016 1.276-.213 1.817-.567s.972-.854 1.245-1.44c.604.239 1.266.296 1.903.164.636-.132 1.22-.447 1.68-.907.46-.46.776-1.044.908-1.681s.075-1.299-.165-1.903c.586-.274 1.084-.705 1.439-1.246.354-.54.551-1.17.569-1.816zM9.662 14.85l-3.429-3.428 1.293-1.302 2.072 2.072 4.4-4.794 1.347 1.246z"></path></g></svg>
                  )}
                  <span className="text-muted-foreground text-[15px] hover:underline cursor-pointer">
                    @{tweet.user.username}
                  </span>
                  <span className="text-muted-foreground text-[13px]">·</span>
                  <span className="text-muted-foreground text-[15px] hover:underline cursor-pointer">
                    {tweet.timestamp}
                  </span>
                </div>
                <div className="mt-1 whitespace-pre-line text-foreground text-base">{tweet.content}</div>

                {tweet.image && (
                  <div className="mt-3 w-full rounded-2xl overflow-hidden border border-border">
                    <img
                      src={tweet.image}
                      alt="tweet media"
                      className="w-full max-h-96 object-cover"
                    />
                  </div>
                )}
                <div className="mt-3 flex justify-center gap-2 p-3 bg-muted/20 rounded-xl border border-border">
                  <img
                    src={profile.avatar}
                    alt=""
                    className="w-11 h-11 rounded-full flex-shrink-0 object-cover"
                  />
                  <div>
                  <div className="flex items-center gap-1">

                    <span className="font-bold text-[15px] text-foreground hover:underline cursor-pointer">
                      {profile.name}
                    </span>
                    {profile.verified && (
                      <svg viewBox="0 0 24 24" className="w-[18px] h-[18px] text-blue-500 fill-current flex-shrink-0" aria-label="Verified account" role="img" data-testid="icon-verified"><g><path d="M20.396 11c-.018-.646-.215-1.275-.57-1.816-.354-.54-.852-.972-1.438-1.246.223-.607.27-1.264.14-1.897-.131-.634-.437-1.218-.882-1.687-.47-.445-1.053-.75-1.687-.882-.633-.13-1.29-.083-1.897.14-.273-.587-.704-1.086-1.245-1.44S11.647 1.62 11 1.604c-.646.017-1.273.213-1.813.568s-.969.854-1.24 1.44c-.608-.223-1.267-.272-1.902-.14-.635.13-1.22.436-1.69.882-.445.47-.749 1.055-.878 1.688-.13.633-.08 1.29.144 1.896-.587.274-1.087.705-1.443 1.245-.356.54-.555 1.17-.574 1.817.02.647.218 1.276.574 1.817.356.54.856.972 1.443 1.245-.224.606-.274 1.263-.144 1.896.13.634.433 1.218.877 1.688.47.443 1.054.747 1.687.878.633.132 1.29.084 1.897-.136.274.586.705 1.084 1.246 1.439.54.354 1.17.551 1.816.569.647-.016 1.276-.213 1.817-.567s.972-.854 1.245-1.44c.604.239 1.266.296 1.903.164.636-.132 1.22-.447 1.68-.907.46-.46.776-1.044.908-1.681s.075-1.299-.165-1.903c.586-.274 1.084-.705 1.439-1.246.354-.54.551-1.17.569-1.816zM9.662 14.85l-3.429-3.428 1.293-1.302 2.072 2.072 4.4-4.794 1.347 1.246z"></path></g></svg>
                    )}
                    <span className="text-muted-foreground text-[15px] hover:underline cursor-pointer">
                      @{profile.username}
                    </span>
                    <span className="text-muted-foreground text-[13px]">·</span>
                    <span className="text-muted-foreground text-[15px] hover:underline cursor-pointer">
                      {tweet.timestamp}
                    </span>
                  </div>
                  <div className="text-foreground text-base">
                    This is an amazing post! Thanks for sharing your insights on this topic. Really appreciate the detailed explanation.
                  </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))
      case "Media":
        // Media grid with 5 images
        const mediaImages = [
          "https://pbs.twimg.com/media/Gxw7ZYQXIAA3azI?format=jpg&name=large",
          "https://pbs.twimg.com/media/Gxna1b0a4AAaMx1?format=jpg&name=large", 
          "/xpost.png",
          "https://pbs.twimg.com/media/GxhLX1KWwAAVxX_?format=jpg&name=large",
          "https://pbs.twimg.com/media/GxTr3wLbAAAIuMV?format=jpg&name=4096x4096"
        ]
        return (
          <div className="p-4">
            <div className="grid grid-cols-3 gap-2">
              {mediaImages.map((image, index) => (
                <div 
                  key={index} 
                  className={`relative overflow-hidden rounded-2xl cursor-pointer hover:opacity-90 transition-opacity ${
                    index === 0 ? 'col-span-2 row-span-2' : ''
                  }`}
                >
                  <img
                    src={image}
                    alt={`Media ${index + 1}`}
                    className="w-full h-full object-cover"
                    style={{ aspectRatio: index === 0 ? '16/9' : '1/1' }}
                  />
                </div>
              ))}
            </div>
          </div>
        )
      case "Likes":
        // Show liked posts from original users
        return defaultTweets.slice(2, 5).map((tweet: Tweet) => (
          <div
            key={tweet.id}
            className="border-b border-border px-4 py-3 hover:bg-muted/30 cursor-pointer transition-colors"
          >
            <div className="flex gap-3">
              <img
                src={tweet.user.avatar}
                alt=""
                className="w-12 h-12 rounded-full flex-shrink-0 object-cover"
              />
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-1">
                  <span className="font-bold text-[15px] text-foreground hover:underline cursor-pointer">
                    {tweet.user.name}
                  </span>
                  {tweet.user.verified && (
                    <svg viewBox="0 0 24 24" className="w-[18px] h-[18px] text-blue-500 fill-current flex-shrink-0" aria-label="Verified account" role="img" data-testid="icon-verified"><g><path d="M20.396 11c-.018-.646-.215-1.275-.57-1.816-.354-.54-.852-.972-1.438-1.246.223-.607.27-1.264.14-1.897-.131-.634-.437-1.218-.882-1.687-.47-.445-1.053-.75-1.687-.882-.633-.13-1.29-.083-1.897.14-.273-.587-.704-1.086-1.245-1.44S11.647 1.62 11 1.604c-.646.017-1.273.213-1.813.568s-.969.854-1.24 1.44c-.608-.223-1.267-.272-1.902-.14-.635.13-1.22.436-1.69.882-.445.47-.749 1.055-.878 1.688-.13.633-.08 1.29.144 1.896-.587.274-1.087.705-1.443 1.245-.356.54-.555 1.17-.574 1.817.02.647.218 1.276.574 1.817.356.54.856.972 1.443 1.245-.224.606-.274 1.263-.144 1.896.13.634.433 1.218.877 1.688.47.443 1.054.747 1.687.878.633.132 1.29.084 1.897-.136.274.586.705 1.084 1.246 1.439.54.354 1.17.551 1.816.569.647-.016 1.276-.213 1.817-.567s.972-.854 1.245-1.44c.604.239 1.266.296 1.903.164.636-.132 1.22-.447 1.68-.907.46-.46.776-1.044.908-1.681s.075-1.299-.165-1.903c.586-.274 1.084-.705 1.439-1.246.354-.54.551-1.17.569-1.816zM9.662 14.85l-3.429-3.428 1.293-1.302 2.072 2.072 4.4-4.794 1.347 1.246z"></path></g></svg>
                  )}
                  <span className="text-muted-foreground text-[15px] hover:underline cursor-pointer">
                    @{tweet.user.username}
                  </span>
                  <span className="text-muted-foreground text-[13px]">·</span>
                  <span className="text-muted-foreground text-[15px] hover:underline cursor-pointer">
                    {tweet.timestamp}
                  </span>
                </div>
                <div className="mt-1 whitespace-pre-line text-foreground text-base">{tweet.content}</div>
                {tweet.image && (
                  <div className="mt-3 w-full rounded-2xl overflow-hidden border border-border">
                    <img
                      src={tweet.image}
                      alt="tweet media"
                      className="w-full max-h-96 object-cover"
                    />
                  </div>
                )}
              </div>
            </div>
          </div>
        ))
      default:
        return (
          <div className="flex flex-col items-center justify-center min-h-[200px]">
            <span className="text-lg font-semibold text-muted-foreground">Coming soon</span>
          </div>
        )
    }
  }

  return (
    <div className="w-[600px] mx-auto border-x border-border bg-background">
      {/* Sticky Header */}
      <div className="sticky top-0 z-30 flex items-center justify-between bg-background/80 backdrop-blur border-b border-border px-4 py-2">
        <button className="p-2 rounded-full hover:bg-muted transition"><ArrowLeft className="w-5 h-5 text-foreground" /></button>
        <div className="flex flex-col justify-center pl-2 flex-1">
          <span className="font-bold text-lg text-foreground leading-tight">{profile.name}</span>
          <span className="text-xs text-muted-foreground">5 Posts</span>
        </div>
        <button className="p-2 rounded-full hover:bg-muted transition"><Search className="w-5 h-5 text-foreground" /></button>
      </div>
      {/* Cover + Avatar + Edit */}
      <div className="relative bg-black">
        <img src="/background.jpg" alt="Cover" className="h-48 w-full object-cover" />
        <div className="absolute left-6 -bottom-16 z-10">
          <Avatar className="w-36 h-36 border-4 border-background shadow-lg">
            <AvatarImage src={profile.avatar} alt={profile.name} />
            <AvatarFallback>{profile.name[0]}</AvatarFallback>
          </Avatar>
        </div>
        <div className="absolute right-6 -bottom-14  z-10">
          <button className="rounded-full cursor-pointer border border-border px-6 py-2 text-base font-semibold text-foreground bg-background/80 hover:bg-muted transition">Edit profile</button>
        </div>
      </div>
      {/* Profile Info */}
      <div className="pt-20 px-6 pb-4 border-b border-border bg-background">
        <div className="flex items-center gap-2">
          <span className="text-2xl font-bold text-foreground leading-tight">{profile.name}</span>
          {profile.verified && <span className="ml-1 cursor-pointer p-1 flex items-center justify-center gap-1 px-3 hover:bg-secondary/20 text-sm border border-primary bg-secondary/10 transition-all rounded-full">Get Verified <CheckCircle2 className="w-4 h-4 text-blue-500 inline-block" /></span>}
        </div>
        <div className="text-muted-foreground text-base flex items-center gap-2">
          @{profile.username}
        </div>
        <div className="flex flex-wrap gap-4 text-sm text-muted-foreground mt-2">
          <span className="flex items-center gap-1"><Calendar className="w-4 h-4" />Joined {profile.joined}</span>
        </div>
        <div className="flex gap-6 mt-3 text-base">
          <span><span className="font-bold text-foreground">{profile.following}</span> <span className="text-muted-foreground">Following</span></span>
          <span><span className="font-bold text-foreground">{profile.followers}</span> <span className="text-muted-foreground">Followers</span></span>
        </div>
      </div>
      {/* Tabs */}
      <div className="border-b border-border bg-background z-20">
        <div className="flex overflow-x-auto scrollbar-hide">
          {tabs.map(tab => (
            <button
              key={tab}
              className={`flex-1 py-3 cursor-pointer text-center font-semibold transition-colors whitespace-nowrap ${activeTab === tab ? 'text-blue-500' : 'text-muted-foreground hover:bg-secondary/20'}`}
              onClick={() => setActiveTab(tab)}
            >
              {tab}
              {activeTab === tab && <div className="h-1 w-8 -bottom-2 relative mx-auto bg-blue-500 rounded-full" />}
            </button>
          ))}
        </div>
      </div>
      {/* Tab Content */}
      <div className="">
        {renderTabContent()}
      </div>
    </div>
  )
}

