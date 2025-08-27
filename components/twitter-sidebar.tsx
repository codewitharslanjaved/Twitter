"use client"

import Image from "next/image"
import {
  HomeIcon,
  ExploreIcon,
  NotificationsIcon,
  MessagesIcon,
  BookmarksIcon,
  ListsIcon,
  ProfileIcon
} from "./TwitterIcons"
import { MoreHorizontal, Settings, HelpCircle, Keyboard, Activity, User } from "lucide-react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { useState, useRef, useEffect } from "react"

export function TwitterSidebar() {
  const pathname = usePathname()
  const [showMoreDropdown, setShowMoreDropdown] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setShowMoreDropdown(false)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [])

  const mainNavItems = [
    { icon: HomeIcon, label: "Home", href: "/", active: pathname === "/" },
    { icon: ExploreIcon, label: "Explore", href: "/explore", active: pathname === "/explore" },
    { icon: NotificationsIcon, label: "Notifications", href: "/notifications", active: pathname === "/notifications" },
    { icon: MessagesIcon, label: "Messages", href: "/messages", active: pathname === "/messages" },
    { icon: BookmarksIcon, label: "Bookmarks", href: "/bookmarks", active: pathname === "/bookmarks" },
    { icon: ListsIcon, label: "Lists", href: "/lists", active: pathname === "/lists" },
    { icon: ProfileIcon, label: "Profile", href: "/profile", active: pathname === "/profile" },
  ]


  const moreDropdownItems = [
    { icon: Settings, label: "Settings and privacy", href: "/settings" },
    { icon: HelpCircle, label: "Help Center", href: "/help" },
    { icon: Keyboard, label: "Keyboard shortcuts", href: "/shortcuts" },
    { icon: Activity, label: "Analytics", href: "/analytics" },
  ]

  return (
    <>
      {/* Desktop Sidebar - Full width with labels */}
      <div className="flex sticky top-0 h-screen flex-col pr-4 w-[275px]">
        <div className="mb-3">
          <Link href="/">
            <svg viewBox="0 0 24 24" className="w-8 h-8 text-primary fill-current mt-2 cursor-pointer">
              <path d="M23.643 4.937c-.835.37-1.732.62-2.675.733.962-.576 1.7-1.49 2.048-2.578-.9.534-1.897.922-2.958 1.13-.85-.904-2.06-1.47-3.4-1.47-2.572 0-4.658 2.086-4.658 4.66 0 .364.042.718.12 1.06-3.873-.195-7.304-2.05-9.602-4.868-.4.69-.63 1.49-.63 2.342 0 1.616.823 3.043 2.072 3.878-.764-.025-1.482-.234-2.11-.583v.06c0 2.257 1.605 4.14 3.737 4.568-.392.106-.803.162-1.227.162-.3 0-.593-.028-.877-.082.593 1.85 2.313 3.198 4.352 3.234-1.595 1.25-3.604 1.995-5.786 1.995-.376 0-.747-.022-1.112-.065 2.062 1.323 4.51 2.093 7.14 2.093 8.57 0 13.255-7.098 13.255-13.254 0-.2-.005-.402-.014-.602.91-.658 1.7-1.477 2.323-2.41z" />
            </svg>
          </Link>
        </div>

        <div className="flex-1 flex flex-col min-h-0">
          <nav className="flex-1 -ml-3">
            {[...mainNavItems].map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className={`flex w-fit pr-7 items-center gap-4 px-4 py-3 rounded-full cursor-pointer transition-colors ${item.active
                  ? "hover:bg-muted/80 dark:hover:bg-muted font-semibold"
                  : "hover:bg-muted/50 text-foreground"
                  }`}
              >
                <item.icon active={item.active} className="w-6 h-6" />
                <span className="text-xl">{item.label}</span>
              </Link>
            ))}
            <div className="relative" ref={dropdownRef}>
              <button
                onClick={() => setShowMoreDropdown(!showMoreDropdown)}
                className="flex w-fit pr-7 items-center gap-4 px-4 py-3 rounded-full cursor-pointer transition-colors hover:bg-muted/80 "
              >
                <svg viewBox="0 0 24 24" aria-hidden="true" className="w-6 h-6 fill-foreground"><g><path d="M3.75 12c0-4.56 3.69-8.25 8.25-8.25s8.25 3.69 8.25 8.25-3.69 8.25-8.25 8.25S3.75 16.56 3.75 12zM12 1.75C6.34 1.75 1.75 6.34 1.75 12S6.34 22.25 12 22.25 22.25 17.66 22.25 12 17.66 1.75 12 1.75zm-4.75 11.5c.69 0 1.25-.56 1.25-1.25s-.56-1.25-1.25-1.25S6 11.31 6 12s.56 1.25 1.25 1.25zm9.5 0c.69 0 1.25-.56 1.25-1.25s-.56-1.25-1.25-1.25-1.25.56-1.25 1.25.56 1.25 1.25 1.25zM13.25 12c0 .69-.56 1.25-1.25 1.25s-1.25-.56-1.25-1.25.56-1.25 1.25-1.25 1.25.56 1.25 1.25z"></path></g></svg>
                <span className="text-xl">More</span>
              </button>
              {showMoreDropdown && (
                <div className="absolute bottom-full left-0 mb-2 bg-popover rounded-2xl shadow-2xl shadow-secondary/50 border border-border/50 min-w-[300px] z-50 backdrop-blur-sm overflow-hidden">
                  {moreDropdownItems.map((item) => (
                    <Link
                      key={item.label}
                      href={item.href}
                      className="flex items-center px-5 gap-2 py-3.5 hover:bg-muted/60 transition-all duration-200 text-popover-foreground group"
                      onClick={() => setShowMoreDropdown(false)}
                    >
                      <div className="w-8 h-8 flex items-center justify-center">
                        <item.icon className="w-5 h-5 transition-colors" />
                      </div>
                      <span className="text-base font-medium transition-colors">
                        {item.label}
                      </span>
                    </Link>
                  ))}
                </div>
              )}
              <div className="mt-2 mr-8">
                <button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-bold py-[13px] cursor-pointer rounded-full transition-colors text-lg">
                  Tweet
                </button>
              </div>
            </div>
          </nav>


          <div className="-ml-4 mb-2">
            <div className="flex items-center gap-3 p-[10px] rounded-full hover:bg-muted/50 cursor-pointer transition-all duration-200 group">
              <div className="w-12 h-12 bg-gradient-to-br from-primary/20 to-primary/40 rounded-full flex items-center justify-center">
                <Image src="/User.jpeg" className="rounded-full w-full h-full" alt="Profile" width={40} height={40} />
              </div>
              <div className="flex-1 min-w-0">
                <div className="font-bold text-foreground group-hover:text-primary transition-colors">Arslan Javed</div>
                <div className="text-muted-foreground text-sm truncate">@arslanjaved</div>
              </div>
              <MoreHorizontal className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Bottom Navigation */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 bg-background border-t border-border z-50">
        <nav className="flex items-center justify-around py-3 px-2">
          {mainNavItems.slice(0, 4).map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className={`flex flex-col items-center justify-center p-2 rounded-xl transition-all duration-200 min-w-0 ${item.active
                ? "text-primary bg-primary/10 font-semibold scale-105"
                : "text-muted-foreground hover:text-foreground hover:bg-muted/30"
                }`}
            >
              {item.icon && (
                <item.icon active={item.active} className="w-6 h-6" />
              )}
              <span className="text-xs mt-1 truncate">{item.label}</span>
            </Link>
          ))}
          <Link
            href="/profile"
            className={`flex flex-col items-center justify-center p-2 rounded-xl transition-all duration-200 min-w-0 ${pathname === "/profile"
              ? "text-primary bg-primary/10 font-semibold scale-105"
              : "text-muted-foreground hover:text-foreground hover:bg-muted/30"
              }`}
          >
            <ProfileIcon active={pathname === "/profile"} className="w-6 h-6" />
            <span className="text-xs mt-1">Profile</span>
          </Link>
        </nav>
      </div>
    </>
  )
}
