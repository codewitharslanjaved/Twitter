export interface Tweet {
  id: number
  user: {
    name: string
    username: string
    avatar: string
    verified: boolean
  }
  content: string
  timestamp: string
  likes: string
  retweets: string
  replies: string
  image?: string
  createdAt: number
}

export const defaultTweets: Tweet[] = [
  {
    id: 98084,
    user: {
      name: 'WARFRAME',
      username: 'PlayWarframe',
      avatar: 'https://pbs.twimg.com/profile_images/1950646374858715136/0IFqI6n1_400x400.jpg',
      verified: true,
    },
    content: 'Pulverize your enemies from two angles or unleash day and night’s divine power with Prime Resurgence.\n\nBoth can be yours through the power of Regal Aya: http://wrfr.me/4meyyvO',
    timestamp: 'Aug 7',
    likes: "405",
    retweets: "34",
    replies: "9",
    image: 'https://pbs.twimg.com/media/Gxw7ZYQXIAA3azI?format=jpg&name=large',
    createdAt: Date.now(),
  },
  {
    id: 98054,
    user: {
      name: 'Perplexity',
      username: 'perplexity_ai',
      avatar: 'https://pbs.twimg.com/profile_images/1886515713537413120/kj5NsIXW_400x400.jpg',
      verified: true,

    },
    content: 'Claude Opus 4.1 Thinking is now available for Max subscribers. Enjoy.',
    timestamp: '6 Aug',
    likes: "568",
    retweets: "48",
    replies: "210",
    createdAt: Date.now(),
    image: 'https://pbs.twimg.com/media/Gxna1b0a4AAaMx1?format=jpg&name=large'
  },
  {
    id: 5082,
    user: {
      name: 'X',
      username: 'X',
      avatar: 'https://pbs.twimg.com/profile_images/1683899100922511378/5lY42eHs_400x400.jpg',
      verified: true,

    },
    content: 'Whats Happening? #X',
    timestamp: '4h',
    likes: "89894",
    retweets: "91056",
    replies: "4425",
    createdAt: Date.now(),
    image: '/xpost.png'
  },
  {
    id: 41234,
    user: {
      name: '4THRIVES',
      username: '4thrives',
      avatar: 'https://pbs.twimg.com/profile_images/1938724951424372736/YPwHJouO_400x400.jpg',
      verified: true,
    },
    content: 'STILL STANDING STRONG.\n\nTop 8 in the world, a journey full of growth, grit, and memories we’ll carry forever.\n\nWe may not have reached the very top, but we’ve proven we belong on that stage. To every supporter, player, and soul who believed in us — thank you. This is not the end, just the beginning.\n\nThe grind doesn’t stop.\n\n#ThriveToWin #EWC2025',
    timestamp: '4h',
    likes: "568",
    retweets: "48",
    replies: "21",
    createdAt: Date.now(),
    image: 'https://pbs.twimg.com/media/GxhLX1KWwAAVxX_?format=jpg&name=large'
  },
  {
    id: 562,
    user: {
      name: 'Marvel Intertainment',
      username: 'Marvel',
      avatar: 'https://pbs.twimg.com/profile_images/1834328195904282624/_CAUqMol_400x400.jpg',
      verified: true,

    },
    content: 'Stunning view of Earth from the International Space Station. Our planet never ceases to amaze us! 🌍✨ #EarthFromSpace',
    timestamp: '4h',
    likes: "8934",
    retweets: "2156",
    replies: "445",
    createdAt: Date.now(),
    image: 'https://pbs.twimg.com/media/GxTr3wLbAAAIuMV?format=jpg&name=4096x4096'
  },
  {
    id: 272,
    user: {
      name: 'PlayStation',
      username: 'PlayStation',
      avatar: 'https://pbs.twimg.com/profile_images/1833447364138299392/AXIZsQe4_400x400.jpg',
      verified: true,

    },
    content: 'Switch weapons on the fly to build stylish combos in Lost Soul Aside, out August 29 on PS5 & PC.\n\n Full trailer: http://play.st/3UgdZn2',
    timestamp: '9m',
    likes: "8934",
    retweets: "2156",
    replies: "445",
    createdAt: Date.now(),
    image: 'Screencast from 2025-08-06 17-12-21.webm'
  },
  {
    id: 4093,
    user: {
      name: 'Asif Javed',
      username: 'AsifJaved',
      avatar: '/AsifJaved.jpg',
      verified: true,

    },
    content: 'Addvizer Tech Solutions offers smart, scalable tech services — from web & mobile development to AI, cloud, and IT consulting. We help businesses grow through innovation.\n\n🌐 Explore our services and get started today:\n👉 https://addvizer.com',
    timestamp: '19m',
    likes: "4520053",
    retweets: "14634356",
    replies: "32893",
    createdAt: Date.now(),
    image: '/PostAddvizer.png'
  },
  {
    id: 893,
    user: {
      name: 'OpenAI',
      username: 'OpenAI',
      avatar: 'https://pbs.twimg.com/profile_images/1885410181409820672/ztsaR0JW_400x400.jpg',
      verified: true,

    },
    content: 'LIVE STREAM THURSDAY 10AM PT',
    timestamp: '19m',
    likes: "4520053",
    retweets: "14634356",
    replies: "32893",
    createdAt: Date.now(),
    image: undefined
  },
  {
    id: 390,
    user: {
      name: 'Fortnite Competitive',
      username: 'FNCompetitive',
      avatar: 'https://pbs.twimg.com/profile_images/1953097400488251392/u9hnM76__400x400.jpg',
      verified: true,

    },
    content: 'You’ve been asking…\nThe Axe of Champions 1.0 hits the Shop on September 4!',
    timestamp: 'Aug 5',
    likes: "4520053",
    retweets: "14634356",
    replies: "32893",
    createdAt: Date.now(),
    image: 'https://pbs.twimg.com/media/GxmaV0nbgAArM2N?format=jpg&name=large'
  },
  {
    id: 3562,
    user: {
      name: 'Rockstar Games',
      username: 'RockstarGames',
      avatar: 'https://pbs.twimg.com/profile_images/1417471791845478403/MzAWCfK7_400x400.jpg',
      verified: true,

    },
    content: 'Jump into Red Dead Online’s Featured Series this week to earn 3X RDO$ and XP on the Overrun Series.',
    timestamp: 'Jun 24',
    likes: "45205",
    retweets: "12456",
    replies: "3289",
    createdAt: Date.now(),
    image: 'https://pbs.twimg.com/media/GuNsA8zXIAABnmD?format=jpg&name=large'
  },

  {
    id: 2,
    user: {
      name: 'NASA',
      username: 'NASA',
      avatar: 'https://pbs.twimg.com/profile_images/1321163587679784960/0ZxKlEKB_400x400.jpg',
      verified: true,

    },
    content: 'As part of the Summer Reading Challenge, @SLOTUS Usha Vance will host an event for children in grades K-8 at @NASA_Johnson on Monday, Aug. 4. Learn more about media accreditation for the event and how to watch live: https://go.nasa.gov/45bK18P',
    timestamp: '4h',
    likes: "8934",
    retweets: "2156",
    replies: "445",
    createdAt: Date.now(),
    image: 'https://pbs.twimg.com/media/GxClLikXsAESSDu?format=jpg&name=large'
  },
  {
    id: 1,
    user: {
      name: 'Elon Musk',
      username: 'elonmusk',
      avatar: 'https://pbs.twimg.com/profile_images/1816027288649011200/BcbVi8Ol_400x400.jpg',
      verified: true,

    },
    content: 'BREAKING: xAI just dropped Grok v1.1.36 on the AppStore. Packed with bug fixes and major Imagine upgrades.\n\nxAI is shipping every single day. 🔥\n\nUpdate now!',
    timestamp: '7 Jun',
    likes: "15420",
    retweets: "3240",
    replies: "892",
    createdAt: Date.now(),
    image: 'https://pbs.twimg.com/media/GxodYwvX0AADvFe?format=jpg&name=medium'
  },
  {
    id: 334,
    user: {
      name: 'Haris Ali Khan',
      username: 'codewithharry',
      avatar: 'https://pbs.twimg.com/profile_images/1522060025854066688/IZs_lylH_400x400.png',
      verified: false
    },
    content: 'Hands Down! Best course on YT regarding WebDev.',
    timestamp: 'Jun 24',
    likes: "45205",
    retweets: "12456",
    replies: "3289",
    createdAt: Date.now(),
    image: 'https://pbs.twimg.com/media/Gs2cTB3bAAA4TgG?format=jpg&name=large'
  },
  {
    id: 22,
    user: {
      name: 'Sam Altman',
      username: 'sama',
      avatar: 'https://pbs.twimg.com/profile_images/1904933748015255552/k43GMz63_400x400.jpg',
      verified: true
    },
    content: 'Watching the model solve these IMO problems and achieve gold-level performance was magical. A few thoughts 🧵',
    timestamp: 'Jul 19',
    likes: "8934",
    retweets: "2156",
    replies: "445",
    createdAt: Date.now(),
    image: 'https://pbs.twimg.com/media/GwLl5lhXIAAXl5p?format=jpg&name=large'
  },
  {
    id: 634,
    user: {
      name: 'The Game Awards',
      username: 'thegameawards',
      avatar: 'https://pbs.twimg.com/profile_images/1825599703376965633/AFie-kds_400x400.jpg',
      verified: true,

    },
    content: 'The worldwide reveal of Call of Duty: Black Ops 7 will take place at @gamescom Opening Night Live on Tuesday, August 19.\n\n Streaming live everywhere',
    timestamp: 'Aug 5',
    likes: "45205",
    retweets: "12456",
    replies: "3289",
    createdAt: Date.now(),
    image: 'https://pbs.twimg.com/media/Gxl55TBbEAAeKjM?format=jpg&name=medium'
  },
  {
    id: 394,
    user: {
      name: 'NotebookLM',
      username: 'NotebookLM',
      avatar: 'https://pbs.twimg.com/profile_images/1861084152054849547/uKBhfKBo_400x400.jpg',
      verified: false,

    },
    content: 'GREAT news for college students in the US, Brazil, Korea, Japan & Indonesia: you can get FREE access to Google AI Pro for 1 year! That means access to @GeminiApp 2.5 Pro, Deep Research, 2 TB of storage, and (our fave) @NotebookLM Pro!\n\nSign up by Oct 6. Terms apply. http://goo.gle/freepro',
    timestamp: 'Jun 24',
    likes: "45205",
    retweets: "12456",
    replies: "3289",
    createdAt: Date.now(),
    image: undefined
  },
  {
    id: 46957,
    user: {
      name: 'Fortnite',
      username: 'Fortnite',
      avatar: 'https://pbs.twimg.com/profile_images/1953158405864218624/ym2TlVSu_400x400.jpg',
      verified: true,

    },
    content: 'Kiss your momma goodbye & get your boots on the ground! We’re going in!! \n\nIt’s a(nother) fight for the island – August 7.',
    timestamp: 'Aug 4',
    likes: "5678",
    retweets: "1234",
    replies: "567",
    createdAt: Date.now(),
    image: 'https://pbs.twimg.com/media/GxhSRUMbAAAfEfK?format=jpg&name=4096x4096'
  },
  {
    id: 34,
    user: {
      name: 'ollama',
      username: 'ollama',
      avatar: 'https://pbs.twimg.com/profile_images/1951758193228664832/2gjDD324_400x400.jpg',
      verified: true,

    },
    content: 'Welcome OpenAI\'s gpt-oss!',
    timestamp: '17h',
    likes: "2164",
    retweets: "134",
    replies: "247",
    createdAt: Date.now(),
    image: 'https://pbs.twimg.com/media/GxmoxYFawAUfx-S?format=png&name=4096x4096'
  },
  {
    id: 309,
    user: {
      name: 'Pokemon',
      username: 'Pokemon',
      avatar: 'https://pbs.twimg.com/profile_images/1948063834260029440/16kEYE3t_400x400.jpg',
      verified: true,
    },
    content: 'A new adventure awaits within Lumiose City, where an urban redevelopment plan is underway to shape the city into a place that belongs to both people and Pokémon!\n\n #PokemonLegendsZA',
    timestamp: 'Aug 6',
    likes: "11008",
    retweets: "1109",
    replies: "135",
    createdAt: Date.now(),
    image: 'https://pbs.twimg.com/media/Gxh5_o3XcAA8hyq?format=jpg&name=large'
  },
  {
    id: 394321,
    user: {
      name: 'Cyberpunk 2077',
      username: 'CyberpunkGame',
      avatar: 'https://pbs.twimg.com/profile_images/1736703870800162816/GmgJrMmd_400x400.png',
      verified: false,

    },
    content: 'We’re heading to @gamescom 2025!\n\nJoin us in Cologne from August 20–24, where Cyberpunk 2077: Ultimate Edition will be playable on the Nintendo Switch 2.\n\nCatch us at the Nintendo booth and dive into Night City, handheld style 🎮',
    timestamp: '21h',
    likes: "45205",
    retweets: "12456",
    replies: "3289",
    createdAt: Date.now(),
    image: 'https://pbs.twimg.com/media/GxvukgpXgAAIhuN?format=jpg&name=large'
  },
  {
    id: 436891,
    user: {
      name: 'Palworld',
      username: 'Palworld',
      avatar: 'https://pbs.twimg.com/profile_images/1677202719336177665/mcCYhcqf_400x400.jpg',
      verified: true,
    },
    content: '🔥Available Now🔥\n\n#Palworld is a brand new multiplayer open-world survival crafting monster-collecting game!',
    timestamp: '25 Jun',
    likes: "23456",
    retweets: "8967",
    replies: "1234",
    createdAt: Date.now(),
    image: '/Screencast from 2025-08-07 19-20-06.webm'
  },
  {
    id: 134790,
    user: {
      name: 'Elon Musk',
      username: 'elonmusk',
      avatar: 'https://pbs.twimg.com/profile_images/1816027288649011200/BcbVi8Ol_400x400.jpg',
      verified: true,
    },
    content: '“The reason I believe in truth and honesty is because I\'m trying to understand the universe. I\'m trying to understand reality and what\'s the meaning of life.”\n\n- Elon Musk',
    timestamp: '7 Jun',
    likes: "15420",
    retweets: "3240",
    replies: "892",
    createdAt: Date.now(),
    image: '/Screencast from 2025-08-08 15-54-44.webm'
  },
  {
    id: 4,
    user: {
      name: 'Apple',
      username: 'Apple',
      avatar: 'https://pbs.twimg.com/profile_images/1283958620359516160/p7zz5dxZ_400x400.jpg',
      verified: true,
    },
    content: 'Breaking News: Apple’s iPhone 17 will feature a thinner design, under-display Face ID, and an upgraded A19 chip.\n\nThe camera system? Insane — with AI enhancements and periscope lens.\n\nThis isn’t a phone — it’s a pocket supercompute',
    timestamp: '8h',
    likes: "23456",
    retweets: "8967",
    replies: "1234",
    createdAt: Date.now(),
    image: 'https://pbs.twimg.com/media/Gxayvv4aQAALR9B?format=jpg&name=small'
  },
  {
    id: 469,
    user: {
      name: 'Anthropic',
      username: 'AnthropicAI',
      avatar: 'https://pbs.twimg.com/profile_images/1798110641414443008/XP8gyBaY_400x400.jpg',
      verified: true,
    },
    content: 'New ways to engage with artifacts on mobile: \nCreate interactive tools, browse the gallery, and share your work directly from your phone',
    timestamp: '8h',
    likes: "23456",
    retweets: "8967",
    replies: "1234",
    createdAt: Date.now(),
    image: 'https://pbs.twimg.com/media/GweWh-bXcAEzLMb?format=jpg&name=large'
  },
  {
    id: 4697,
    user: {
      name: 'R Λ Z Ξ R',
      username: 'Razer',
      avatar: 'https://pbs.twimg.com/profile_images/1877841564808126464/7yak28iD_400x400.jpg',
      verified: true,
    },
    content: 'Jump into the biggest @Battlefield Open Beta! We’re dropping 50,000 Early Access codes for the Razer Community to join the action on August 7-8. \n\nClaim yours now: http://rzr.to/Battlefield6-EarlyAccess',
    timestamp: '8h',
    likes: "23456",
    retweets: "8967",
    replies: "1234",
    createdAt: Date.now(),
    image: 'https://pbs.twimg.com/media/GxrWWAYXsAAdtGf?format=jpg&name=4096x4096'
  },
  {
    id: 8697,
    user: {
      name: 'Midjourney',
      username: 'Midjourney',
      avatar: 'https://pbs.twimg.com/profile_images/1826028197256822784/pfgqU218_400x400.jpg',
      verified: true,
    },
    content: 'Here you go "Indiana Jones fights a dragon in Berlin"',
    timestamp: '4 Feb',
    likes: "23456",
    retweets: "8967",
    replies: "1234",
    createdAt: Date.now(),
    image: 'https://pbs.twimg.com/media/FOcX_DYVUAIx2BJ?format=jpg&name=medium'
  },

]

export function saveTweetsToStorage(tweets: Tweet[]) {
  if (typeof window !== "undefined") {
    localStorage.setItem("twitter-tweets", JSON.stringify(tweets))
  }
}

export function loadTweetsFromStorage(): Tweet[] {
  if (typeof window !== "undefined") {
    const stored = localStorage.getItem("twitter-tweets")
    if (stored) {
      return JSON.parse(stored)
    }
  }
  return defaultTweets
}

export function formatTimestamp(createdAt: number): string {
  const now = Date.now()
  const diff = now - createdAt

  const seconds = Math.floor(diff / 1000)
  const minutes = Math.floor(seconds / 60)
  const hours = Math.floor(minutes / 60)
  const days = Math.floor(hours / 24)

  if (seconds < 60) return `${seconds}s`
  if (minutes < 60) return `${minutes}m`
  if (hours < 24) return `${hours}h`
  return `${days}d`
}
