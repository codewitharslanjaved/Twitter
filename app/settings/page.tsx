"use client"

import { useState } from "react"
import { useTheme } from "next-themes"
import { ChevronRight, Search } from "lucide-react"
import Link from "next/link"

export default function SettingsPage() {
  const { theme, setTheme } = useTheme()
  const [activeSection, setActiveSection] = useState("account")

  const [settings, setSettings] = useState<{ [key: string]: any }>({
    protectedPosts: false,
    photoTagging: true,
    discoverability: true,
    twoFactor: false,
    readReceipts: true,
    qualityFilter: true,
    notifications: {
      mentions: true,
      replies: true,
      likes: false,
      retweets: true,
      follows: true,
      directMessages: true,
      emailNotifications: false,
      pushNotifications: true,
    },
    accessibility: {
      fontSize: 16,
      reduceMotion: false,
      highContrast: false,
      autoplayVideos: true,
    },
    privacy: {
      allowDirectMessages: "everyone",
      whoCanTag: "everyone",
      whoCanFindByEmail: "everyone",
      whoCanFindByPhone: "contacts",
    },
    monetization: {
      ads: false,
    },
    premium: {
      subscription: false,
    },
    creator: {
      subscription: false,
    },
  })

  const updateSetting = (path: string, value: any) => {
    setSettings((prev) => {
      const keys = path.split(".")
      const newSettings = { ...prev }
      let current = newSettings

      for (let i = 0; i < keys.length - 1; i++) {
        current[keys[i]] = { ...current[keys[i]] }
        current = current[keys[i]]
      }

      current[keys[keys.length - 1]] = value
      return newSettings
    })
  }

  const sections = [
    { id: "account", label: "Your account" },
    { id: "monetization", label: "Monetization" },
    { id: "premium", label: "Premium" },
    { id: "creator", label: "Creator Subscriptions" },
    { id: "security", label: "Security and account access" },
    { id: "privacy", label: "Privacy and safety" },
    { id: "notifications", label: "Notifications" },
    { id: "accessibility", label: "Accessibility, display, and languages" },
    { id: "additional", label: "Additional resources" },
    { id: "help", label: "Help Center", external: true, href: "https://help.twitter.com/" },
  ]

  const renderContent = () => {
    switch (activeSection) {
      case "account":
        return (
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-bold mb-4">Account information</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center py-3 border-b border-border">
                  <div>
                    <p className="font-medium">Username</p>
                    <p className="text-muted-foreground text-sm">@johndoe</p>
                  </div>
                  <button className="text-blue-500 hover:underline">Edit</button>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-border">
                  <div>
                    <p className="font-medium">Email</p>
                    <p className="text-muted-foreground text-sm">john@example.com</p>
                  </div>
                  <button className="text-blue-500 hover:underline">Edit</button>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-border">
                  <div>
                    <p className="font-medium">Phone</p>
                    <p className="text-muted-foreground text-sm">+1 (555) 123-4567</p>
                  </div>
                  <button className="text-blue-500 hover:underline">Edit</button>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-border">
                  <div>
                    <p className="font-medium">Birth date</p>
                    <p className="text-muted-foreground text-sm">January 1, 1990</p>
                  </div>
                  <button className="text-blue-500 hover:underline">Edit</button>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-border">
                  <div>
                    <p className="font-medium">Country</p>
                    <p className="text-muted-foreground text-sm">United States</p>
                  </div>
                  <button className="text-blue-500 hover:underline">Edit</button>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-4">Data and permissions</h3>
              <div className="space-y-3">
                <button className="w-full text-left p-3 hover:bg-muted rounded-lg transition-colors">
                  <p className="font-medium">Download an archive of your data</p>
                  <p className="text-muted-foreground text-sm">
                    Get insights into the type of information stored for your account
                  </p>
                </button>
                <button className="w-full text-left p-3 hover:bg-muted rounded-lg transition-colors">
                  <p className="font-medium">Deactivate your account</p>
                  <p className="text-muted-foreground text-sm">Find out how you can deactivate your account</p>
                </button>
              </div>
            </div>
          </div>
        )

      case "monetization":
        return (
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-bold mb-4">Monetization</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center py-3">
                  <div>
                    <p className="font-medium">Monetization</p>
                    <p className="text-muted-foreground text-sm">Allow ads on your account</p>
                  </div>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input
                      type="checkbox"
                      className="sr-only peer"
                      checked={settings.monetization.ads}
                      onChange={(e) => updateSetting("monetization.ads", e.target.checked)}
                    />
                    <div className="w-11 h-6 bg-muted peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                  </label>
                </div>
              </div>
            </div>
          </div>
        )

      case "premium":
        return (
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-bold mb-4">Premium</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center py-3">
                  <div>
                    <p className="font-medium">Premium subscription</p>
                    <p className="text-muted-foreground text-sm">Get premium features</p>
                  </div>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input
                      type="checkbox"
                      className="sr-only peer"
                      checked={settings.premium.subscription}
                      onChange={(e) => updateSetting("premium.subscription", e.target.checked)}
                    />
                    <div className="w-11 h-6 bg-muted peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                  </label>
                </div>
              </div>
            </div>
          </div>
        )

      case "creator":
        return (
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-bold mb-4">Creator Subscriptions</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center py-3">
                  <div>
                    <p className="font-medium">Creator subscription</p>
                    <p className="text-muted-foreground text-sm">Get creator features</p>
                  </div>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input
                      type="checkbox"
                      className="sr-only peer"
                      checked={settings.creator.subscription}
                      onChange={(e) => updateSetting("creator.subscription", e.target.checked)}
                    />
                    <div className="w-11 h-6 bg-muted peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                  </label>
                </div>
              </div>
            </div>
          </div>
        )

      case "security":
        return (
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-bold mb-4">Two-factor authentication</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center py-3">
                  <div>
                    <p className="font-medium">Two-factor authentication</p>
                    <p className="text-muted-foreground text-sm">Add an extra layer of security to your account</p>
                  </div>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input
                      type="checkbox"
                      className="sr-only peer"
                      checked={settings.twoFactor}
                      onChange={(e) => updateSetting("twoFactor", e.target.checked)}
                    />
                    <div className="w-11 h-6 bg-muted peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                  </label>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-4">Login and apps</h3>
              <div className="space-y-3">
                <button className="w-full text-left p-3 hover:bg-muted rounded-lg transition-colors">
                  <p className="font-medium">Change your password</p>
                  <p className="text-muted-foreground text-sm">Change your password at any time</p>
                </button>
                <button className="w-full text-left p-3 hover:bg-muted rounded-lg transition-colors">
                  <p className="font-medium">Apps and sessions</p>
                  <p className="text-muted-foreground text-sm">
                    See information about when you logged into your account
                  </p>
                </button>
                <button className="w-full text-left p-3 hover:bg-muted rounded-lg transition-colors">
                  <p className="font-medium">Connected apps</p>
                  <p className="text-muted-foreground text-sm">Manage apps that have access to your account</p>
                </button>
              </div>
            </div>
          </div>
        )

      case "privacy":
        return (
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-bold mb-4">Your posts</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center py-3">
                  <div>
                    <p className="font-medium">Protect your posts</p>
                    <p className="text-muted-foreground text-sm">Only approved followers can see your posts</p>
                  </div>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input
                      type="checkbox"
                      className="sr-only peer"
                      checked={settings.protectedPosts}
                      onChange={(e) => updateSetting("protectedPosts", e.target.checked)}
                    />
                    <div className="w-11 h-6 bg-muted peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                  </label>
                </div>
                <div className="flex justify-between items-center py-3">
                  <div>
                    <p className="font-medium">Photo tagging</p>
                    <p className="text-muted-foreground text-sm">Allow people to tag you in photos</p>
                  </div>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input
                      type="checkbox"
                      className="sr-only peer"
                      checked={settings.photoTagging}
                      onChange={(e) => updateSetting("photoTagging", e.target.checked)}
                    />
                    <div className="w-11 h-6 bg-muted peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                  </label>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-4">Discoverability and contacts</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center py-3">
                  <div>
                    <p className="font-medium">Discoverability</p>
                    <p className="text-muted-foreground text-sm">Let people find you by email or phone</p>
                  </div>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input
                      type="checkbox"
                      className="sr-only peer"
                      checked={settings.discoverability}
                      onChange={(e) => updateSetting("discoverability", e.target.checked)}
                    />
                    <div className="w-11 h-6 bg-muted peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                  </label>
                </div>

                <div className="py-3">
                  <p className="font-medium mb-2">Who can find you by your email address</p>
                  <select
                    className="w-full p-2 border border-border rounded-lg bg-background"
                    value={settings.privacy.whoCanFindByEmail}
                    onChange={(e) => updateSetting("privacy.whoCanFindByEmail", e.target.value)}
                  >
                    <option value="everyone">Everyone</option>
                    <option value="contacts">Your contacts</option>
                    <option value="none">No one</option>
                  </select>
                </div>

                <div className="py-3">
                  <p className="font-medium mb-2">Who can find you by your phone number</p>
                  <select
                    className="w-full p-2 border border-border rounded-lg bg-background"
                    value={settings.privacy.whoCanFindByPhone}
                    onChange={(e) => updateSetting("privacy.whoCanFindByPhone", e.target.value)}
                  >
                    <option value="everyone">Everyone</option>
                    <option value="contacts">Your contacts</option>
                    <option value="none">No one</option>
                  </select>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-4">Direct Messages</h3>
              <div className="space-y-4">
                <div className="py-3">
                  <p className="font-medium mb-2">Allow message requests from</p>
                  <select
                    className="w-full p-2 border border-border rounded-lg bg-background"
                    value={settings.privacy.allowDirectMessages}
                    onChange={(e) => updateSetting("privacy.allowDirectMessages", e.target.value)}
                  >
                    <option value="everyone">Everyone</option>
                    <option value="following">People you follow</option>
                    <option value="verified">Verified accounts</option>
                    <option value="none">No one</option>
                  </select>
                </div>

                <div className="flex justify-between items-center py-3">
                  <div>
                    <p className="font-medium">Show read receipts</p>
                    <p className="text-muted-foreground text-sm">Let people know when you've seen their messages</p>
                  </div>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input
                      type="checkbox"
                      className="sr-only peer"
                      checked={settings.readReceipts}
                      onChange={(e) => updateSetting("readReceipts", e.target.checked)}
                    />
                    <div className="w-11 h-6 bg-muted peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                  </label>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-4">Safety</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center py-3">
                  <div>
                    <p className="font-medium">Quality filter</p>
                    <p className="text-muted-foreground text-sm">
                      Filter lower-quality content from your notifications
                    </p>
                  </div>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input
                      type="checkbox"
                      className="sr-only peer"
                      checked={settings.qualityFilter}
                      onChange={(e) => updateSetting("qualityFilter", e.target.checked)}
                    />
                    <div className="w-11 h-6 bg-muted peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                  </label>
                </div>

                <button className="w-full text-left p-3 hover:bg-muted rounded-lg transition-colors">
                  <p className="font-medium">Blocked accounts</p>
                  <p className="text-muted-foreground text-sm">Manage accounts you've blocked</p>
                </button>

                <button className="w-full text-left p-3 hover:bg-muted rounded-lg transition-colors">
                  <p className="font-medium">Muted accounts</p>
                  <p className="text-muted-foreground text-sm">Manage accounts you've muted</p>
                </button>
              </div>
            </div>
          </div>
        )

      case "notifications":
        return (
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-bold mb-4">Push notifications</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center py-3">
                  <div>
                    <p className="font-medium">Push notifications</p>
                    <p className="text-muted-foreground text-sm">
                      Turn on push notifications to get alerts when you're not on Twitter
                    </p>
                  </div>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input
                      type="checkbox"
                      className="sr-only peer"
                      checked={settings.notifications.pushNotifications}
                      onChange={(e) => updateSetting("notifications.pushNotifications", e.target.checked)}
                    />
                    <div className="w-11 h-6 bg-muted peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                  </label>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-4">What you get notifications for</h3>
              <div className="space-y-4">
                {[
                  { key: "mentions", label: "Mentions", desc: "When someone mentions you" },
                  { key: "replies", label: "Replies", desc: "When someone replies to your posts" },
                  { key: "likes", label: "Likes", desc: "When someone likes your posts" },
                  { key: "retweets", label: "Retweets", desc: "When someone retweets your posts" },
                  { key: "follows", label: "New followers", desc: "When someone follows you" },
                  { key: "directMessages", label: "Direct Messages", desc: "When you receive a direct message" },
                ].map((item) => (
                  <div key={item.key} className="flex justify-between items-center py-3">
                    <div>
                      <p className="font-medium">{item.label}</p>
                      <p className="text-muted-foreground text-sm">{item.desc}</p>
                    </div>
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input
                        type="checkbox"
                        className="sr-only peer"
                        checked={settings.notifications[item.key]}
                        onChange={(e) => updateSetting(`notifications.${item.key}`, e.target.checked)}
                      />
                      <div className="w-11 h-6 bg-muted peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                    </label>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-4">Email notifications</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center py-3">
                  <div>
                    <p className="font-medium">Email notifications</p>
                    <p className="text-muted-foreground text-sm">Get emails about your Twitter activity</p>
                  </div>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input
                      type="checkbox"
                      className="sr-only peer"
                      checked={settings.notifications.emailNotifications}
                      onChange={(e) => updateSetting("notifications.emailNotifications", e.target.checked)}
                    />
                    <div className="w-11 h-6 bg-muted peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                  </label>
                </div>
              </div>
            </div>
          </div>
        )

      case "accessibility":
        return (
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-bold mb-4">Display</h3>
              <div className="space-y-4">
                <div>
                  <p className="font-medium mb-3">Theme</p>
                  <div className="flex w-full gap-4">
                    {/* Light Mode Button */}
                    <button
                      aria-label="Light mode"
                      onClick={() => setTheme("light")}
                      className={`flex flex-1 flex-col items-center justify-center px-6 py-3 rounded-2xl border transition-all duration-150 focus:outline-none focus:ring-2 focus:ring-blue-500 group ${theme === "light" ? "border-blue-500 bg-blue-50 shadow-lg" : "border-border hover:bg-muted"}`}
                    >
                      <svg className="w-7 h-7 mb-1" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                        <circle cx="12" cy="12" r="5" stroke="currentColor" fill="currentColor" className="text-yellow-400 group-hover:text-yellow-500" />
                        <g stroke="currentColor">
                          <line x1="12" y1="1" x2="12" y2="3" />
                          <line x1="12" y1="21" x2="12" y2="23" />
                          <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
                          <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
                          <line x1="1" y1="12" x2="3" y2="12" />
                          <line x1="21" y1="12" x2="23" y2="12" />
                          <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
                          <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
                        </g>
                      </svg>
                      <span className="text-sm font-medium">Light</span>
                    </button>
                    {/* Dim Mode Button */}
                    <button
                      aria-label="Dim mode"
                      onClick={() => setTheme("dim")}
                      className={`flex flex-1 flex-col items-center justify-center px-6 py-3 rounded-2xl border transition-all duration-150 focus:outline-none focus:ring-2 focus:ring-blue-500 group ${theme === "dim" ? "border-blue-500 bg-blue-50 shadow-lg" : "border-border hover:bg-muted"}`}
                    >
                      <svg className="w-7 h-7 mb-1" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                        <circle cx="12" cy="12" r="5" stroke="currentColor" fill="#8899a6" className="group-hover:fill-gray-400" />
                        <g stroke="currentColor" opacity="0.5">
                          <line x1="12" y1="1" x2="12" y2="3" />
                          <line x1="12" y1="21" x2="12" y2="23" />
                          <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
                          <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
                          <line x1="1" y1="12" x2="3" y2="12" />
                          <line x1="21" y1="12" x2="23" y2="12" />
                          <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
                          <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
                        </g>
                      </svg>
                      <span className="text-sm font-medium">Dim</span>
                    </button>
                    {/* Dark Mode Button */}
                    <button
                      aria-label="Dark mode"
                      onClick={() => setTheme("dark")}
                      className={`flex flex-1 flex-col items-center justify-center px-6 py-3 rounded-2xl border transition-all duration-150 focus:outline-none focus:ring-2 focus:ring-blue-500 group ${theme === "dark" ? "border-blue-500 bg-blue-900/50 shadow-lg" : "border-border hover:bg-muted"}`}
                    >
                      <svg className="w-7 h-7 mb-1" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                        <path d="M21 12.79A9 9 0 1111.21 3a7 7 0 109.79 9.79z" fill="#1a202c" className="group-hover:fill-gray-700" />
                      </svg>
                      <span className="text-sm font-medium">Dark</span>
                    </button>
                  </div>
                </div>
                <div className="pt-4">
                  <p className="font-medium mb-3">Font size</p>
                  <div className="flex items-center space-x-4">
                    <span className="text-sm">Aa</span>
                    <input
                      type="range"
                      min="12"
                      max="20"
                      value={settings.accessibility.fontSize}
                      onChange={(e) => updateSetting("accessibility.fontSize", Number.parseInt(e.target.value))}
                      className="flex-1"
                    />
                    <span className="text-xl">Aa</span>
                  </div>
                  <p className="text-muted-foreground text-sm mt-2">
                    Current size: {settings.accessibility.fontSize}px
                  </p>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-4">Accessibility</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center py-3">
                  <div>
                    <p className="font-medium">Reduce motion</p>
                    <p className="text-muted-foreground text-sm">Limit the amount of in-app animations</p>
                  </div>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input
                      type="checkbox"
                      className="sr-only peer"
                      checked={settings.accessibility.reduceMotion}
                      onChange={(e) => updateSetting("accessibility.reduceMotion", e.target.checked)}
                    />
                    <div className="w-11 h-6 bg-muted peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                  </label>
                </div>

                <div className="flex justify-between items-center py-3">
                  <div>
                    <p className="font-medium">Increase color contrast</p>
                    <p className="text-muted-foreground text-sm">
                      Improves legibility by increasing the contrast between text and background colors
                    </p>
                  </div>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input
                      type="checkbox"
                      className="sr-only peer"
                      checked={settings.accessibility.highContrast}
                      onChange={(e) => updateSetting("accessibility.highContrast", e.target.checked)}
                    />
                    <div className="w-11 h-6 bg-muted peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                  </label>
                </div>

                <div className="flex justify-between items-center py-3">
                  <div>
                    <p className="font-medium">Autoplay videos</p>
                    <p className="text-muted-foreground text-sm">Videos will autoplay in your timeline</p>
                  </div>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input
                      type="checkbox"
                      className="sr-only peer"
                      checked={settings.accessibility.autoplayVideos}
                      onChange={(e) => updateSetting("accessibility.autoplayVideos", e.target.checked)}
                    />
                    <div className="w-11 h-6 bg-muted peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                  </label>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-4">Languages</h3>
              <div className="space-y-3">
                <button className="w-full text-left p-3 hover:bg-muted rounded-lg transition-colors">
                  <p className="font-medium">Display language</p>
                  <p className="text-muted-foreground text-sm">English</p>
                </button>
                <button className="w-full text-left p-3 hover:bg-muted rounded-lg transition-colors">
                  <p className="font-medium">Additional languages</p>
                  <p className="text-muted-foreground text-sm">Manage languages for your Twitter experience</p>
                </button>
              </div>
            </div>
          </div>
        )

      case "additional":
        return (
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-bold mb-4">Additional resources</h3>
              <div className="space-y-3">
                <button className="w-full text-left p-3 hover:bg-muted rounded-lg transition-colors">
                  <p className="font-medium">Help Center</p>
                  <p className="text-muted-foreground text-sm">Get help using Twitter</p>
                </button>
                <button className="w-full text-left p-3 hover:bg-muted rounded-lg transition-colors">
                  <p className="font-medium">Terms of Service</p>
                  <p className="text-muted-foreground text-sm">Review Twitter's Terms of Service</p>
                </button>
                <button className="w-full text-left p-3 hover:bg-muted rounded-lg transition-colors">
                  <p className="font-medium">Privacy Policy</p>
                  <p className="text-muted-foreground text-sm">Review Twitter's Privacy Policy</p>
                </button>
                <button className="w-full text-left p-3 hover:bg-muted rounded-lg transition-colors">
                  <p className="font-medium">Cookie Policy</p>
                  <p className="text-muted-foreground text-sm">Learn about Twitter's use of cookies</p>
                </button>
                <button className="w-full text-left p-3 hover:bg-muted rounded-lg transition-colors">
                  <p className="font-medium">Ads info</p>
                  <p className="text-muted-foreground text-sm">Learn about Twitter ads</p>
                </button>
              </div>
            </div>
          </div>
        )

      default:
        return (
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-bold mb-4">{sections.find((s) => s.id === activeSection)?.label}</h3>
              <div className="space-y-3">
                <button className="w-full text-left p-3 hover:bg-muted rounded-lg transition-colors">
                  <p className="font-medium">Help Center</p>
                  <p className="text-muted-foreground text-sm">Get help using Twitter</p>
                </button>
                <button className="w-full text-left p-3 hover:bg-muted rounded-lg transition-colors">
                  <p className="font-medium">Terms of Service</p>
                  <p className="text-muted-foreground text-sm">Review Twitter's Terms of Service</p>
                </button>
                <button className="w-full text-left p-3 hover:bg-muted rounded-lg transition-colors">
                  <p className="font-medium">Privacy Policy</p>
                  <p className="text-muted-foreground text-sm">Review Twitter's Privacy Policy</p>
                </button>
                <button className="w-full text-left p-3 hover:bg-muted rounded-lg transition-colors">
                  <p className="font-medium">Cookie Policy</p>
                  <p className="text-muted-foreground text-sm">Learn about Twitter's use of cookies</p>
                </button>
                <button className="w-full text-left p-3 hover:bg-muted rounded-lg transition-colors">
                  <p className="font-medium">Ads info</p>
                  <p className="text-muted-foreground text-sm">Learn about Twitter ads</p>
                </button>
              </div>
            </div>
          </div>
        )
    }
  }

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Header */}
      <div className="sticky top-0 bg-background/80 backdrop-blur-md px-4 border-b border-r py-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Link href="/" className="p-2 hover:bg-muted/80 rounded-full transition-colors">
              <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current">
                <path d="M20 11H7.414l4.293-4.293c.39-.39.39-1.023 0-1.414s-1.023-.39-1.414 0l-6 6c-.39.39-.39 1.023 0 1.414l6 6c.195.195.45.293.707.293s.512-.098.707-.293c.39-.39.39-1.023 0-1.414L7.414 13H20c.553 0 1-.447 1-1s-.447-1-1-1z" />
              </svg>
            </Link>
            <h1 className="text-xl font-bold">Settings</h1>
          </div>

          <div className="relative bg-background">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-4 h-4 text-foreground/80" />
            <input
              type="text"
              placeholder="Search Settings"
              className="w-full pl-10 pr-4 py-2 border rounded-full outline-none placeholder-foreground/80 focus:bg-background focus:ring-2 focus:ring-blue-500 transition-all"
            />
          </div>
        </div>
      </div>

      <div className="flex">
        {/* Sidebar */}
        <div className="w-[400px] border-r border-border min-h-screen">
          <div className="">
            <nav className="">
              {sections.map((section) => (
                section.external ? (
                  <a
                    key={section.id}
                    href={section.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full text-left px-4 py-3 transition-colors flex items-center hover:bg-muted font-medium text-[15px]"
                  >
                    {section.label}
                    <svg className="ml-2 w-4 h-4 inline-block text-muted-foreground" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M18 13v6a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
                  </a>
                ) : (
                  <button
                    key={section.id}
                    onClick={() => setActiveSection(section.id)}
                    className={`w-full text-left px-4 py-3 transition-colors flex items-center justify-between ${activeSection === section.id
                        ? "bg-blue-50 border-r-2 border-blue-500 dark:bg-muted"
                        : "hover:bg-muted"
                      }`}
                  >
                    <span className="font-medium text-[15px]">{section.label}</span>
                    <ChevronRight className="ml-2 w-4 h-4 inline-block text-muted-foreground" />
                  </button>
                )
              ))}
            </nav>
          </div>
        </div>

        {/* Content */}
        <div className="flex-1 border-r p-6 w-[550px]">{renderContent()}</div>
      </div>
    </div>
  )
}
