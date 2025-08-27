"use client"

import type React from "react"
import { usePathname } from "next/navigation"
import { TwitterSidebar } from "@/components/twitter-sidebar"
import { TwitterRightSidebar } from "@/components/twitter-right-sidebar"
import { ThemeProvider } from "@/components/theme-provider"

export default function ClientLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const pathname = usePathname()
  const hideRightSidebar = pathname === "/settings" || pathname === "/messages"

  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      <div className="min-h-screen bg-background text-foreground">
        <div className="w-full flex justify-center mx-auto">
          <TwitterSidebar />

          {/* Full width on mobile, margin for icon sidebar on lg, margin for full sidebar on xl */}
          <div
            className={`flex-1 max-w-fit border-x border-border lg:border-x-0 lg:border-l ${hideRightSidebar ? "" : "lg:max-w-[] lg:border-r"}`}
          >
            {children}
          </div>

          {/* Right Sidebar - Hidden on mobile and tablet, and conditionally hidden on certain pages */}
          {!hideRightSidebar && (
            <div className="hidden lg:block w-[350px]">
              <TwitterRightSidebar />
            </div>
          )}
        </div>
      </div>
    </ThemeProvider>
  )
}
