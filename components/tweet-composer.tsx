"use client"

import type React from "react"

import { useState, useRef } from "react"
import { ImageIcon, Smile, Calendar, BarChart3, MapPin } from "lucide-react" // MapPin for location
// You can add more icons as needed, e.g. for GIFs

const MAX_TWEET_LENGTH = 280;

interface TweetComposerProps {
  onTweet: (content: string) => void
}

export function TweetComposer({ onTweet }: TweetComposerProps) {
  const [content, setContent] = useState("");
  const [image, setImage] = useState<string | null>(null);
  const [imageFile, setImageFile] = useState<File | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const [replyOption, setReplyOption] = useState("Everyone can reply");
  const [showReplyDropdown, setShowReplyDropdown] = useState(false);
  const [replyOptionEverShown, setReplyOptionEverShown] = useState(false);

  const replyOptions = [
    {
      label: "Everyone can reply",
      value: "Everyone can reply",
      icon: (
        <svg viewBox="0 0 24 24" aria-hidden="true" className="w-4 h-4 mr-2 fill-blue-500" ><g><path d="M12 1.75C6.34 1.75 1.75 6.34 1.75 12S6.34 22.25 12 22.25 22.25 17.66 22.25 12 17.66 1.75 12 1.75zm-.25 10.48L10.5 17.5l-2-1.5v-3.5L7.5 9 5.03 7.59c1.42-2.24 3.89-3.75 6.72-3.84L11 6l-2 .5L8.5 9l5 1.5-1.75 1.73zM17 14v-3l-1.5-3 2.88-1.23c1.17 1.42 1.87 3.24 1.87 5.23 0 1.3-.3 2.52-.83 3.61L17 14z"></path></g></svg>
      ),
    },
    {
      label: "People you follow",
      value: "People you follow",
      icon: (
        <svg className="w-4 h-4 mr-2 text-blue-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" />
          <path d="M8 12a4 4 0 018 0" stroke="currentColor" strokeWidth="2" />
        </svg>
      ),
    },
    {
      label: "Only people you mention",
      value: "Only people you mention",
      icon: (
        <svg className="w-4 h-4 mr-2 text-blue-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" />
          <path d="M12 8v4l3 3" stroke="currentColor" strokeWidth="2" />
        </svg>
      ),
    },
  ];

  const handleSubmit = () => {
    if (content.trim() && content.length <= MAX_TWEET_LENGTH) {
      // Optionally, send imageFile as well
      onTweet(content.trim());
      setContent("");
      setImage(null);
      setImageFile(null);
      setReplyOptionEverShown(false);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && (e.metaKey || e.ctrlKey)) {
      handleSubmit();
    }
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setImageFile(file);
      const reader = new FileReader();
      reader.onload = (ev) => setImage(ev.target?.result as string);
      reader.readAsDataURL(file);
    }
  };

  const handleImageIconClick = () => {
    fileInputRef.current?.click();
  };

  const charsLeft = MAX_TWEET_LENGTH - content.length;
  const isOverLimit = content.length > MAX_TWEET_LENGTH;
  const isTweetDisabled = !content.trim() || isOverLimit;

  return (
    <div className="border-b twitter-border py-2 px-4">
      <div className="flex gap-3">
        <img src="/User.jpeg" alt="Your avatar" className="w-12 h-12 rounded-full flex-shrink-0" />
        <div className="flex-1">
          <div className="pt-2">
            <textarea
              ref={textarea => {
                if (textarea) {
                  textarea.style.height = 'auto';
                  textarea.style.height = textarea.scrollHeight + 'px';
                }
              }}
              placeholder="What's happening?"
              className="w-full resize-none border-none outline-none text-xl placeholder:text-muted-foreground bg-transparent font-normal overflow-hidden"
              style={{ minHeight: 35, maxHeight: 200 }}
              rows={1}
              value={content}
              onChange={e => {
                setContent(e.target.value);
                const textarea = e.target as HTMLTextAreaElement;
                textarea.style.height = 'auto';
                textarea.style.height = textarea.scrollHeight + 'px';
              }}
              onKeyDown={handleKeyDown}
              maxLength={MAX_TWEET_LENGTH + 20} // allow a little overflow for warning
              onFocus={() => { setReplyOptionEverShown(true); setShowReplyDropdown(false); }}
            />

            <div className="flex items-center mb-1 justify-between">
              {/* Spacer for layout consistency, will show circle below */}
              <div />
              {image && (
                <div className="relative w-full h-full">
                  <img src={image} alt="Preview" className="rounded-lg border" />
                  <button onClick={() => { setImage(null); setImageFile(null); }} className="absolute top-1 right-1 bg-destructive/20 bg-opacity-80 rounded-full p-1 cursor-pointer transition-all hover:bg-destructive/40">
                    <svg className="w-5 h-5 text-red-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" /></svg>
                  </button>
                </div>
              )}
            </div>
            {/* Reply Option Dropdown (X/Twitter style) */}
            {(replyOptionEverShown || content.length > 0) && (
              <>
                <div className="relative z-10 inline-block">
                  <button
                    type="button"
                    className="flex items-center -ml-2 px-3 py-1.5 text-xs font-bold rounded-full cursor-pointer text-primary hover:bg-primary/20 transition-all focus:outline-none"
                    onClick={() => setShowReplyDropdown((v) => !v)}
                    tabIndex={-1}
                  >
                    {replyOptions.find(o => o.value === replyOption)?.icon}
                    {replyOption}
                  </button>
                  {showReplyDropdown && (
                    <div className="absolute left-0 mt-2 w-56 rounded-xl shadow-lg bg-white dark:bg-neutral-900 border border-border overflow-hidden">
                      {replyOptions.map((option) => (
                        <button
                          key={option.value}
                          className={`w-full flex items-center px-4 py-2 text-sm hover:bg-primary/20 dark:hover:bg-neutral-800 transition-colors ${replyOption === option.value ? 'bg-blue-50 dark:bg-neutral-800 font-bold' : ''}`}
                          onClick={() => { setReplyOption(option.value); setShowReplyDropdown(false); }}
                        >
                          {option.icon}
                          {option.label}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
                <div className="h-[1px] bg-border my-1" />
              </>
            )}
          </div>
          <div className="flex justify-between mt-[5px] -ml-[5px] items-center">
            <div className="flex gap-1">
              {/* Image Upload */}
              <div className="w-8 h-8 rounded-full hover:bg-primary/20 flex items-center justify-center cursor-pointer transition-colors group" onClick={handleImageIconClick}>
                <svg viewBox="0 0 24 24" aria-hidden="true" className="w-5 h-5 fill-blue-400 group-hover:fill-blue-600"><g><path d="M3 5.5C3 4.119 4.119 3 5.5 3h13C19.881 3 21 4.119 21 5.5v13c0 1.381-1.119 2.5-2.5 2.5h-13C4.119 21 3 19.881 3 18.5v-13zM5.5 5c-.276 0-.5.224-.5.5v9.086l3-3 3 3 5-5 3 3V5.5c0-.276-.224-.5-.5-.5h-13zM19 15.414l-3-3-5 5-3-3-3 3V18.5c0 .276.224.5.5.5h13c.276 0 .5-.224.5-.5v-3.086zM9.75 7C8.784 7 8 7.784 8 8.75s.784 1.75 1.75 1.75 1.75-.784 1.75-1.75S10.716 7 9.75 7z"></path></g></svg>
                <input ref={fileInputRef} type="file" accept="image/*" className="hidden" onChange={handleImageChange} />
              </div>
              {/* GIF Icon (static, for future feature) */}
              <div className="w-8 h-8 rounded-full hover:bg-primary/20 flex items-center justify-center cursor-pointer transition-colors group">
              <svg viewBox="0 0 24 24" aria-hidden="true" className="w-5 h-5 fill-blue-400 group-hover:fill-blue-600"><g><path d="M3 5.5C3 4.119 4.119 3 5.5 3h13C19.881 3 21 4.119 21 5.5v13c0 1.381-1.119 2.5-2.5 2.5h-13C4.119 21 3 19.881 3 18.5v-13zM5.5 5c-.276 0-.5.224-.5.5v13c0 .276.22.5.5.5h13c.28 0 .5-.224.5-.5v-13c0-.276-.22-.5-.5-.5h-13zM18 10.711V9.25h-3.74v5.5h1.44v-1.719h1.7V11.57h-1.7v-.859H18zM11.79 9.25h1.44v5.5h-1.44v-5.5zm-3.07 1.375c.34 0 .77.172 1.02.43l1.03-.86c-.51-.601-1.28-.945-2.05-.945C7.19 9.25 6 10.453 6 12s1.19 2.75 2.72 2.75c.85 0 1.54-.344 2.05-.945v-2.149H8.38v1.032H9.4v.515c-.17.086-.42.172-.68.172-.76 0-1.36-.602-1.36-1.375 0-.688.6-1.375 1.36-1.375z"></path></g></svg>
              </div>
              {/* Poll Icon */}
              <div className="w-8 h-8 rounded-full hover:bg-primary/20 flex items-center justify-center cursor-pointer transition-colors group">
                <svg viewBox="0 0 24 24" aria-hidden="true" className="w-5 h-5 fill-blue-400 group-hover:text-blue-600"><g><path d="M6 5c-1.1 0-2 .895-2 2s.9 2 2 2 2-.895 2-2-.9-2-2-2zM2 7c0-2.209 1.79-4 4-4s4 1.791 4 4-1.79 4-4 4-4-1.791-4-4zm20 1H12V6h10v2zM6 15c-1.1 0-2 .895-2 2s.9 2 2 2 2-.895 2-2-.9-2-2-2zm-4 2c0-2.209 1.79-4 4-4s4 1.791 4 4-1.79 4-4 4-4-1.791-4-4zm20 1H12v-2h10v2zM7 7c0 .552-.45 1-1 1s-1-.448-1-1 .45-1 1-1 1 .448 1 1z"></path></g></svg>
              </div>
              {/* Emoji Icon */}
              <div className="w-8 h-8 rounded-full hover:bg-primary/20 flex items-center justify-center cursor-pointer transition-colors group">
                <svg viewBox="0 0 24 24" aria-hidden="true" className="w-5 h-5 fill-blue-400 group-hover:text-blue-600"><g><path d="M8 9.5C8 8.119 8.672 7 9.5 7S11 8.119 11 9.5 10.328 12 9.5 12 8 10.881 8 9.5zm6.5 2.5c.828 0 1.5-1.119 1.5-2.5S15.328 7 14.5 7 13 8.119 13 9.5s.672 2.5 1.5 2.5zM12 16c-2.224 0-3.021-2.227-3.051-2.316l-1.897.633c.05.15 1.271 3.684 4.949 3.684s4.898-3.533 4.949-3.684l-1.896-.638c-.033.095-.83 2.322-3.053 2.322zm10.25-4.001c0 5.652-4.598 10.25-10.25 10.25S1.75 17.652 1.75 12 6.348 1.75 12 1.75 22.25 6.348 22.25 12zm-2 0c0-4.549-3.701-8.25-8.25-8.25S3.75 7.451 3.75 12s3.701 8.25 8.25 8.25 8.25-3.701 8.25-8.25z"></path></g></svg>
              </div>
              {/* Calendar/Schedule Icon */}
              <div className="w-8 h-8 rounded-full hover:bg-primary/20 flex items-center justify-center cursor-pointer transition-colors group">
                <svg viewBox="0 0 24 24" aria-hidden="true" className="w-5 h-5 fill-blue-400 group-hover:text-blue-600"><g><path d="M6 3V2h2v1h6V2h2v1h1.5C18.88 3 20 4.119 20 5.5v2h-2v-2c0-.276-.22-.5-.5-.5H16v1h-2V5H8v1H6V5H4.5c-.28 0-.5.224-.5.5v12c0 .276.22.5.5.5h3v2h-3C3.12 20 2 18.881 2 17.5v-12C2 4.119 3.12 3 4.5 3H6zm9.5 8c-2.49 0-4.5 2.015-4.5 4.5s2.01 4.5 4.5 4.5 4.5-2.015 4.5-4.5-2.01-4.5-4.5-4.5zM9 15.5C9 11.91 11.91 9 15.5 9s6.5 2.91 6.5 6.5-2.91 6.5-6.5 6.5S9 19.09 9 15.5zm5.5-2.5h2v2.086l1.71 1.707-1.42 1.414-2.29-2.293V13z"></path></g></svg>
              </div>
              {/* Location Icon (static, for future feature) */}
              <div className="w-8 h-8 rounded-full opacity-50 flex items-center justify-center cursor-pointer transition-colors group">
                <MapPin className="w-[18px] h-[18px] text-blue-400" />
              </div>
            </div>
            {/* Circular character limiter, X/Twitter style */}
            <div className="flex items-center gap-3">
              {content.length > 0 && (
                <div
                  className={`relative flex items-center justify-center transition-transform duration-200 ${charsLeft <= 20 ? 'scale-100' : 'scale-75'
                    }`}
                  style={{ width: 35, height: 35 }}
                >
                  <svg width={charsLeft <= 20 ? 40 : 32} height={charsLeft <= 20 ? 40 : 32} viewBox="0 0 32 32">
                    <circle
                      cx="16" cy="16" r="14"
                      className="stroke-muted"
                      fill="none"
                      strokeWidth="3"
                    />
                    <circle
                      cx="16" cy="16" r="14"
                      fill="none"
                      stroke={
                        isOverLimit
                          ? '#ef4444'
                          : charsLeft <= 20
                            ? '#facc15'
                            : '#1da1f2'
                      }
                      strokeWidth="3"
                      strokeDasharray={2 * Math.PI * 14}
                      strokeDashoffset={
                        2 * Math.PI * 14 * (1 - Math.min(content.length, MAX_TWEET_LENGTH) / MAX_TWEET_LENGTH)
                      }
                      style={{ transition: 'stroke 0.2s, stroke-dashoffset 0.2s' }}
                    />
                  </svg>
                  {/* Only show number when 20 or fewer left, or over limit */}
                  {(charsLeft <= 20 || isOverLimit) && (
                    <span
                      className={`absolute text-[11px] font-bold left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 ${isOverLimit ? 'text-red-500' : charsLeft <= 20 ? 'text-yellow-500' : 'text-gray-700 dark:text-gray-200'
                        }`}
                    >
                      {charsLeft}
                    </span>
                  )}
                </div>
              )}
              <button
                onClick={handleSubmit}
                disabled={isTweetDisabled}
                className="bg-[#1da1f2] hover:bg-[#1a91da] text-white font-bold px-8 py-2 rounded-full text-[15px] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Tweet
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
