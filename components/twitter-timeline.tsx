"use client"

import { useState, useEffect } from "react"
import { MessageCircle, Repeat2, Heart, Share, MoreHorizontal, Bookmark } from "lucide-react"
import { type Tweet, loadTweetsFromStorage, saveTweetsToStorage, formatTimestamp } from "@/lib/tweets"
import { TweetComposer } from "./tweet-composer"

export function TwitterTimeline() {
  const [tweets, setTweets] = useState<Tweet[]>([])
  const [likedTweets, setLikedTweets] = useState<Set<number>>(new Set())
  const [retweetedTweets, setRetweetedTweets] = useState<Set<number>>(new Set())
  const [bookmarkedTweets, setBookmarkedTweets] = useState<Set<number>>(new Set())
  const [dropdownOpen, setDropdownOpen] = useState<number | null>(null)

  useEffect(() => {
    const loadedTweets = loadTweetsFromStorage()
    setTweets(loadedTweets)

    const liked = JSON.parse(localStorage.getItem("likedTweets") || "[]")
    const retweeted = JSON.parse(localStorage.getItem("retweetedTweets") || "[]")
    const bookmarked = JSON.parse(localStorage.getItem("bookmarkedTweets") || "[]")

    setLikedTweets(new Set(liked))
    setRetweetedTweets(new Set(retweeted))
    setBookmarkedTweets(new Set(bookmarked))
  }, [])

  const saveInteractionState = (type: string, tweetId: number, isActive: boolean) => {
    const storageKey = `${type}Tweets`
    const current = JSON.parse(localStorage.getItem(storageKey) || "[]")
    const updated = isActive ? [...current, tweetId] : current.filter((id: number) => id !== tweetId)
    localStorage.setItem(storageKey, JSON.stringify(updated))
  }

  const handleNewTweet = (content: string) => {
    const newTweet: Tweet = {
      id: Date.now(),
      user: {
        name: "Arslan Javed",
        username: "arslanjaved",
        avatar: "/User.jpeg",
        verified: true,
      },
      content,
      timestamp: "now",
      likes: "0",
      retweets: "0",
      replies: "0",
      createdAt: Date.now(),
    }

    const updatedTweets = [newTweet, ...tweets]
    setTweets(updatedTweets)
    saveTweetsToStorage(updatedTweets)
  }

  const handleLike = (tweetId: number) => {
    const isLiked = likedTweets.has(tweetId)
    const newLikedTweets = new Set(likedTweets)

    if (isLiked) {
      newLikedTweets.delete(tweetId)
    } else {
      newLikedTweets.add(tweetId)
    }

    setLikedTweets(newLikedTweets)
    saveInteractionState("liked", tweetId, !isLiked)

    // Update tweet likes count
    const updatedTweets = tweets.map((tweet) => {
      if (tweet.id === tweetId) {
        const currentLikes = Number.parseInt(tweet.likes) || 0
        return {
          ...tweet,
          likes: (isLiked ? currentLikes - 1 : currentLikes + 1).toString(),
        }
      }
      return tweet
    })
    setTweets(updatedTweets)
    saveTweetsToStorage(updatedTweets)
  }

  const handleRetweet = (tweetId: number) => {
    const isRetweeted = retweetedTweets.has(tweetId)
    const newRetweetedTweets = new Set(retweetedTweets)

    if (isRetweeted) {
      newRetweetedTweets.delete(tweetId)
    } else {
      newRetweetedTweets.add(tweetId)
    }

    setRetweetedTweets(newRetweetedTweets)
    saveInteractionState("retweeted", tweetId, !isRetweeted)

    // Update tweet retweets count
    const updatedTweets = tweets.map((tweet) => {
      if (tweet.id === tweetId) {
        const currentRetweets = Number.parseInt(tweet.retweets) || 0
        return {
          ...tweet,
          retweets: (isRetweeted ? currentRetweets - 1 : currentRetweets + 1).toString(),
        }
      }
      return tweet
    })
    setTweets(updatedTweets)
    saveTweetsToStorage(updatedTweets)
  }

  const handleBookmark = (tweetId: number) => {
    const isBookmarked = bookmarkedTweets.has(tweetId)
    const newBookmarkedTweets = new Set(bookmarkedTweets)

    if (isBookmarked) {
      newBookmarkedTweets.delete(tweetId)
    } else {
      newBookmarkedTweets.add(tweetId)
    }

    setBookmarkedTweets(newBookmarkedTweets)
    saveInteractionState("bookmarked", tweetId, !isBookmarked)
  }

  const handleShare = (tweet: Tweet) => {
    if (navigator.share) {
      navigator.share({
        title: `Tweet by ${tweet.user.name}`,
        text: tweet.content,
        url: window.location.href,
      })
    } else {
      // Fallback: copy to clipboard
      navigator.clipboard.writeText(`${tweet.content} - @${tweet.user.username}`)
      alert("Tweet copied to clipboard!")
    }
  }

  const handleDropdownToggle = (tweetId: number) => {
    setDropdownOpen(dropdownOpen === tweetId ? null : tweetId)
  }

  const handleDeleteTweet = (tweetId: number) => {
    const updatedTweets = tweets.filter((tweet) => tweet.id !== tweetId)
    setTweets(updatedTweets)
    saveTweetsToStorage(updatedTweets)
    setDropdownOpen(null)
  }

  return (
    <div className="min-h-screen w-[600px]">
      <div className="sticky top-0 bg-background/80 backdrop-blur z-50 border-b border-border px-4 py-3 flex items-center justify-between">
        <h1 className="text-xl font-bold text-foreground">Home</h1>
        <svg viewBox="0 0 24 24" className="w-5 h-5 text-primary fill-current">
          <path d="M22.772 10.506l-5.618-2.192-2.16-6.5c-.102-.307-.39-.514-.712-.514s-.61.207-.712.513l-2.16 6.5-5.62 2.192c-.287.112-.477.39-.477.7s.19.585.478.698l5.62 2.192 2.16 6.5c.102.306.39.513.712.513s.61-.207.712-.513l2.16-6.5 5.62-2.194c.287-.112.477-.39-.477-.7s-.19-.585-.478-.697z" />
        </svg>
      </div>

      <TweetComposer onTweet={handleNewTweet} />

      <div>
        {tweets.map((tweet) => (
          <div
            key={tweet.id}
            className="border-b border-border px-4 py-3 hover:bg-muted/30 cursor-pointer transition-colors"
          >
            <div className="flex gap-3">
              <img
                src={tweet.user.avatar || "/placeholder.svg"}
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
                    {tweet.timestamp === "now" ? formatTimestamp(tweet.createdAt) : tweet.timestamp}
                  </span>
                  <div className="ml-auto relative">
                    <div
                      className="w-8 h-8 rounded-full hover:bg-muted flex items-center justify-center cursor-pointer transition-colors"
                      onClick={(e) => {
                        e.stopPropagation()
                        handleDropdownToggle(tweet.id)
                      }}
                    >
                      <MoreHorizontal className="w-4 h-4 text-muted-foreground" />
                    </div>
                    {dropdownOpen === tweet.id && (
                      <div className="absolute right-0 top-8 bg-popover border border-border rounded-2xl shadow-lg py-2 min-w-[220px] z-50">
                        <button
                          onClick={(e) => {
                            e.stopPropagation()
                            handleBookmark(tweet.id)
                            setDropdownOpen(null)
                          }}
                          className="w-full px-4 py-2 text-left hover:bg-muted transition-colors flex items-center gap-3"
                        >
                          <Bookmark
                            className={`w-4 h-4 ${bookmarkedTweets.has(tweet.id) ? "fill-current text-primary" : "text-muted-foreground"}`}
                          />
                          {bookmarkedTweets.has(tweet.id) ? "Remove from Bookmarks" : "Bookmark"}
                        </button>
                        <button
                          onClick={(e) => {
                            e.stopPropagation()
                            navigator.clipboard.writeText(
                              `https://twitter.com/${tweet.user.username}/status/${tweet.id}`,
                            )
                            alert("Link copied to clipboard!")
                            setDropdownOpen(null)
                          }}
                          className="w-full px-4 py-2 text-left hover:bg-muted transition-colors"
                        >
                          Copy link to Tweet
                        </button>
                        <button
                          onClick={(e) => {
                            e.stopPropagation()
                            alert('Report functionality coming soon!')
                            setDropdownOpen(null)
                          }}
                          className="w-full px-4 py-2 text-left hover:bg-muted transition-colors flex items-center gap-3"
                        >
                          <svg className="w-4 h-4 text-yellow-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01M21 12c0 4.97-4.03 9-9 9s-9-4.03-9-9 4.03-9 9-9 9 4.03 9 9zm-9 4h.01M12 9v2" /></svg>
                          Report Tweet
                        </button>
                        <button
                          onClick={(e) => {
                            e.stopPropagation()
                            alert('Mute functionality coming soon!')
                            setDropdownOpen(null)
                          }}
                          className="w-full px-4 py-2 text-left hover:bg-muted transition-colors flex items-center gap-3"
                        >
                          <svg className="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M18 12.998v-1a6 6 0 00-6-6h-1a6 6 0 00-6 6v1a6 6 0 006 6h1a6 6 0 006-6z" /></svg>
                          Mute User
                        </button>
                        {tweet.user.username === "arslanjaved" && (
                          <button
                            onClick={(e) => {
                              e.stopPropagation()
                              handleDeleteTweet(tweet.id)
                            }}
                            className="w-full px-4 py-2 text-left hover:bg-muted transition-colors text-red-500"
                          >
                            Delete Tweet
                          </button>
                        )}
                      </div>
                    )}
                  </div>
                </div>
                <p className="text-[15px] leading-[20px]  mb-3 text-foreground whitespace-pre-wrap">{tweet.content}</p>
                {tweet.image && (
                  <div className="mb-3 rounded-2xl overflow-hidden border border-border max-w-[504px]">
                    <img src={tweet.image || "/placeholder.svg"} alt="" className="w-full h-auto object-cover" />
                  </div>
                )}
                <div className="flex justify-between -ml-2 mt-3">
                  <div className="flex items-center gap-2 group cursor-pointer" onClick={(e) => e.stopPropagation()}>
                    <div className="w-[34.75px] h-[34.75px] rounded-full group-hover:bg-primary/10 flex items-center justify-center transition-colors">
                      <MessageCircle className="w-[18px] h-[18px] text-muted-foreground group-hover:text-primary transition-colors" />
                    </div>
                    <span className="text-[13px] text-muted-foreground group-hover:text-primary transition-colors min-w-[20px]">
                      {tweet.replies}
                    </span>
                  </div>
                  <div
                    className="flex items-center gap-2 group cursor-pointer"
                    onClick={(e) => {
                      e.stopPropagation()
                      handleRetweet(tweet.id)
                    }}
                  >
                    <div className="w-[34.75px] h-[34.75px] rounded-full group-hover:bg-green-500/10 flex items-center justify-center transition-colors">
                      <Repeat2
                        className={`w-[18px] h-[18px] transition-colors ${retweetedTweets.has(tweet.id)
                            ? "text-green-600"
                            : "text-muted-foreground group-hover:text-green-600"
                          }`}
                      />
                    </div>
                    <span
                      className={`text-[13px] transition-colors min-w-[20px] ${retweetedTweets.has(tweet.id)
                          ? "text-green-600"
                          : "text-muted-foreground group-hover:text-green-600"
                        }`}
                    >
                      {tweet.retweets}
                    </span>
                  </div>
                  <div
                    className="flex items-center gap-2 group cursor-pointer"
                    onClick={(e) => {
                      e.stopPropagation()
                      handleLike(tweet.id)
                    }}
                  >
                    <div className="w-[34.75px] h-[34.75px] rounded-full group-hover:bg-red-500/10 flex items-center justify-center transition-colors">
                      <Heart
                        className={`w-[18px] h-[18px] transition-colors ${likedTweets.has(tweet.id)
                            ? "text-red-500 fill-current"
                            : "text-muted-foreground group-hover:text-red-500"
                          }`}
                      />
                    </div>
                    <span
                      className={`text-[13px] transition-colors min-w-[20px] ${likedTweets.has(tweet.id) ? "text-red-500" : "text-muted-foreground group-hover:text-red-500"
                        }`}
                    >
                      {tweet.likes}
                    </span>
                  </div>
                  <div className="flex items-center gap-2">

                    <div
                      className="w-[34.75px] h-[34.75px] rounded-full hover:bg-primary/10 flex items-center justify-center cursor-pointer transition-colors group"
                      onClick={(e) => {
                        e.stopPropagation()
                        handleShare(tweet)
                      }}
                    >
                      <Share className="w-[18px] h-[18px] text-muted-foreground group-hover:text-primary transition-colors" />
                    </div>
                    <div
                      className="w-[34.75px] h-[34.75px] rounded-full hover:bg-primary/10 flex items-center justify-center cursor-pointer transition-colors group"
                      onClick={(e) => {
                        e.stopPropagation()
                        handleBookmark(tweet.id)
                      }}
                    >
                      <Bookmark className={`w-[18px] h-[18px] transition-colors ${bookmarkedTweets.has(tweet.id) ? "text-primary fill-current" : "text-muted-foreground group-hover:text-primary"}`} />
                    </div>
                  </div>
                </div>
                {tweet.id === 1 && (
                  <div className="mt-2">
                    <span className="text-[13px] text-primary cursor-pointer hover:underline">Show this thread</span>
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
