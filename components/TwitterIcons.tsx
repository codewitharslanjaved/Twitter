import React from "react";

// Home icon (active and normal)
export const HomeIcon = ({ active = false, ...props }: { active?: boolean } & React.SVGProps<SVGSVGElement>) =>
    active ? (
        // Filled Home (active)
        <svg viewBox="0 0 24 24" className="w-[25px] h-[25px] fill-foreground stroke-foreground " {...props}> <path d="M22.46 7.57L12.357 2.115c-.223-.12-.49-.12-.713 0L1.543 7.57c-.364.197-.5.652-.303 1.017.135.25.394.393.66.393.12 0 .243-.03.356-.09l.815-.44L4.7 19.963c.214 1.215 1.308 2.062 2.658 2.062h9.282c1.352 0 2.445-.848 2.663-2.087l1.626-11.49.818.442c.364.193.82.06 1.017-.304.196-.363.06-.818-.304-1.016zM12 15.435c-1.795 0-3.25-1.455-3.25-3.25s1.455-3.25 3.25-3.25 3.25 1.455 3.25 3.25-1.455 3.25-3.25 3.25z" fill="currentColor" /> </svg>
    ) : (
        // Outline Home (default)
        <svg
            viewBox="0 0 24 24"
            className="w-[25px] h-[25px] stroke-foreground"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            {...props}
        >
            <path d="M22.46 7.57L12.357 2.115c-.223-.12-.49-.12-.713 0L1.543 7.57c-.364.197-.5.652-.303 1.017.135.25.394.393.66.393.12 0 .243-.03.356-.09l.815-.44L4.7 19.963c.214 1.215 1.308 2.062 2.658 2.062h9.282c1.352 0 2.445-.848 2.663-2.087l1.626-11.49.818.442c.364.193.82.06 1.017-.304.196-.363.06-.818-.304-1.016z" />
            <circle cx="12" cy="12.185" r="3.25" />
        </svg>

    );

// Lists icon (active and normal)
export const ListsIcon = ({ active = false, ...props }: { active?: boolean } & React.SVGProps<SVGSVGElement>) =>
    active ? (
        // Filled Lists (active)
<svg viewBox="0 0 24 24" aria-hidden="true" className="w-[25px] h-[25px] fill-foreground"><g><path d="M18.5 2h-13C4.12 2 3 3.12 3 4.5v15C3 20.88 4.12 22 5.5 22h13c1.38 0 2.5-1.12 2.5-2.5v-15C21 3.12 19.88 2 18.5 2zM16 14H8v-2h8v2zm0-4H8V8h8v2z"></path></g></svg>
    ) : (
        // Outline Lists (default)
<svg viewBox="0 0 24 24" aria-hidden="true" className="w-[25px] h-[25px] fill-foreground"><g><path d="M3 4.5C3 3.12 4.12 2 5.5 2h13C19.88 2 21 3.12 21 4.5v15c0 1.38-1.12 2.5-2.5 2.5h-13C4.12 22 3 20.88 3 19.5v-15zM5.5 4c-.28 0-.5.22-.5.5v15c0 .28.22.5.5.5h13c.28 0 .5-.22.5-.5v-15c0-.28-.22-.5-.5-.5h-13zM16 10H8V8h8v2zm-8 2h8v2H8v-2z"></path></g></svg>
    );

// Add more icons below following this pattern (active + normal):
// - Explore
// - Notifications
// - Messages
// - Bookmarks
// - Profile
// - More (if needed)
// - etc.

// Explore icon (active and normal)
export const ExploreIcon = ({ active = false, ...props }: { active?: boolean } & React.SVGProps<SVGSVGElement>) =>
    active ? (
        // Filled Explore (active)
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            className="w-[25px] h-[25px]"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            {...props}
        >
            <line x1="4" y1="9" x2="20" y2="9" />
            <line x1="4" y1="15" x2="20" y2="15" />
            <line x1="10" y1="3" x2="8" y2="21" />
            <line x1="16" y1="3" x2="14" y2="21" />
        </svg>

    ) : (
        // Outline Explore (default)
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            className="w-[25px] h-[25px]"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            {...props}
        >
            <line x1="4" y1="9" x2="20" y2="9" />
            <line x1="4" y1="15" x2="20" y2="15" />
            <line x1="10" y1="3" x2="8" y2="21" />
            <line x1="16" y1="3" x2="14" y2="21" />
        </svg>

    );

// Notifications icon (active and normal)
export const NotificationsIcon = ({ active = false, ...props }: { active?: boolean } & React.SVGProps<SVGSVGElement>) =>
    active ? (
        // Filled Notifications (active)
        <svg viewBox="0 0 24 24" aria-hidden="true" className="w-[25px] h-[25px] fill-foreground"><g><path d="M11.996 2c-4.062 0-7.49 3.021-7.999 7.051L2.866 18H7.1c.463 2.282 2.481 4 4.9 4s4.437-1.718 4.9-4h4.236l-1.143-8.958C19.48 5.017 16.054 2 11.996 2zM9.171 18h5.658c-.412 1.165-1.523 2-2.829 2s-2.417-.835-2.829-2z"></path></g></svg>
    ) : (
        // Outline Notifications (default)
        <svg viewBox="0 0 24 24" aria-hidden="true" className="w-[25px] h-[25px] fill-foreground"><g><path d="M19.993 9.042C19.48 5.017 16.054 2 11.996 2s-7.49 3.021-7.999 7.051L2.866 18H7.1c.463 2.282 2.481 4 4.9 4s4.437-1.718 4.9-4h4.236l-1.143-8.958zM12 20c-1.306 0-2.417-.835-2.829-2h5.658c-.412 1.165-1.523 2-2.829 2zm-6.866-4l.847-6.698C6.364 6.272 8.941 4 11.996 4s5.627 2.268 6.013 5.295L18.864 16H5.134z"></path></g></svg>
    );

// Messages icon (active and normal)
export const MessagesIcon = ({ active = false, ...props }: { active?: boolean } & React.SVGProps<SVGSVGElement>) =>
    active ? (
        // Filled Messages (active)
        <svg viewBox="0 0 24 24" aria-hidden="true" className="w-[25px] h-[25px] fill-foreground"><g><path d="M1.998 4.499c0-.828.671-1.499 1.5-1.499h17c.828 0 1.5.671 1.5 1.499v2.858l-10 4.545-10-4.547V4.499zm0 5.053V19.5c0 .828.671 1.5 1.5 1.5h17c.828 0 1.5-.672 1.5-1.5V9.554l-10 4.545-10-4.547z"></path></g></svg>
    ) : (
        // Outline Messages (default)
        <svg viewBox="0 0 24 24" aria-hidden="true" className="w-[25px] h-[25px] fill-foreground"><g><path d="M1.998 5.5c0-1.381 1.119-2.5 2.5-2.5h15c1.381 0 2.5 1.119 2.5 2.5v13c0 1.381-1.119 2.5-2.5 2.5h-15c-1.381 0-2.5-1.119-2.5-2.5v-13zm2.5-.5c-.276 0-.5.224-.5.5v2.764l8 3.638 8-3.636V5.5c0-.276-.224-.5-.5-.5h-15zm15.5 5.463l-8 3.636-8-3.638V18.5c0 .276.224.5.5.5h15c.276 0 .5-.224.5-.5v-8.037z"></path></g></svg>
    );

// Bookmarks icon (active and normal)
export const BookmarksIcon = ({ active = false, ...props }: { active?: boolean } & React.SVGProps<SVGSVGElement>) =>
    active ? (
        // Filled Bookmarks (active)
<svg viewBox="0 0 24 24" aria-hidden="true" className="w-[25px] h-[25px] fill-foreground"><g><path d="M4 4.5C4 3.12 5.119 2 6.5 2h11C18.881 2 20 3.12 20 4.5v18.44l-8-5.71-8 5.71V4.5z"></path></g></svg>
    ) : (
        // Outline Bookmarks (default)
<svg viewBox="0 0 24 24" aria-hidden="true" className="w-[25px] h-[25px] fill-foreground"><g><path d="M4 4.5C4 3.12 5.119 2 6.5 2h11C18.881 2 20 3.12 20 4.5v18.44l-8-5.71-8 5.71V4.5zM6.5 4c-.276 0-.5.22-.5.5v14.56l6-4.29 6 4.29V4.5c0-.28-.224-.5-.5-.5h-11z"></path></g></svg>
    );

// Profile icon (active and normal)
export const ProfileIcon = ({ active = false, ...props }: { active?: boolean } & React.SVGProps<SVGSVGElement>) =>
    active ? (
        // Filled Profile (active)
<svg viewBox="0 0 24 24" aria-hidden="true" className="w-[25px] h-[25px] fill-foreground"><g><path d="M17.863 13.44c1.477 1.58 2.366 3.8 2.632 6.46l.11 1.1H3.395l.11-1.1c.266-2.66 1.155-4.88 2.632-6.46C7.627 11.85 9.648 11 12 11s4.373.85 5.863 2.44zM12 2C9.791 2 8 3.79 8 6s1.791 4 4 4 4-1.79 4-4-1.791-4-4-4z"></path></g></svg>
    ) : (
        // Outline Profile (default)
<svg viewBox="0 0 24 24" aria-hidden="true" className="w-[25px] h-[25px] fill-foreground"><g><path d="M5.651 19h12.698c-.337-1.8-1.023-3.21-1.945-4.19C15.318 13.65 13.838 13 12 13s-3.317.65-4.404 1.81c-.922.98-1.608 2.39-1.945 4.19zm.486-5.56C7.627 11.85 9.648 11 12 11s4.373.85 5.863 2.44c1.477 1.58 2.366 3.8 2.632 6.46l.11 1.1H3.395l.11-1.1c.266-2.66 1.155-4.88 2.632-6.46zM12 4c-1.105 0-2 .9-2 2s.895 2 2 2 2-.9 2-2-.895-2-2-2zM8 6c0-2.21 1.791-4 4-4s4 1.79 4 4-1.791 4-4 4-4-1.79-4-4z"></path></g></svg>
    );
