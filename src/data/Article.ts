import { Article } from "@/types/Article";
import { DEMO_USERS } from "./DemoUsers";

export const DEMO_ARTICLES: Article[] = [
  // Tech Category
  {
    id: 1,
    headline:
      "Apple's iOS 26 'Liquid Glass' Design: Revolutionary or Just Hype?",
    content:
      'Apple has unveiled its most dramatic iOS redesign since iOS 7 with the introduction of iOS 26, featuring the new "Liquid Glass" aesthetic that makes app interfaces appear transparent and fluid. The update, announced at WWDC 2025, introduces a completely new visual language across Apple\'s ecosystem, affecting iPhone, iPad, Mac, and Apple Watch interfaces.\n\nThe "Liquid Glass" design creates semi-transparent app interfaces that blend with background elements, giving users a more immersive visual experience. However, the announcement has sparked mixed reactions from the tech community, with some users expressing concerns about storage requirements, battery life impact, and the practicality of transparent interfaces.\n\nCritics argue that Apple is following features already available on Android devices, questioning the innovation behind the "Liquid Glass" branding. Others worry about the visual clarity and usability of transparent apps, particularly for users who prefer traditional, solid interface designs.\n\nDespite the controversy, some industry observers believe iOS 26 could be game-changing for Apple\'s competitive position, potentially convincing users considering switches to Samsung or other Android manufacturers to stay within the Apple ecosystem.\n\nThe update represents Apple\'s continued push toward more sophisticated visual design, though whether users will embrace the dramatic change remains to be seen when iOS 26 launches.',
    image: "/assets/articleThumbnail/1.jpg",
    creator: DEMO_USERS[0],
    createdAt: "2025-06-11",
  },
  {
    id: 2,
    headline:
      "Chinese Startup DeepSeek Stuns Tech World With $6M AI Model Rivaling GPT-4",
    content:
      "Hangzhou-based DeepSeek has disrupted global AI markets with its R1 model, achieving GPT-4-level performance at 1/20th the cost. Despite U.S. chip restrictions, the company trained R1 using innovative techniques on export-approved processors, spending just $6 million compared to OpenAI's $100 million GPT-4 budget. The open-weight model's release caused Nvidia's stock to plummet $600 billion as analysts reconsidered hardware demands. DeepSeek's CEO Liang Wenfeng, dubbed \"China's Sam Altman,\" credits their success to recruiting non-traditional experts and mixture-of-experts architecture. The breakthrough has intensified US-China tech tensions, with lawmakers calling for stricter AI controls.",
    image: "/assets/articleThumbnail/7.png",
    creator: DEMO_USERS[1],
    createdAt: "2025-06-11",
  },
  {
    id: 3,
    headline:
      "AI Chatbots Grok and ChatGPT Falsely Claim LA National Guard Photos Are From Afghanistan, Fueling Protest Misinformation",
    content:
      "Artificial intelligence chatbots are spreading dangerous misinformation about authentic photographs showing National Guard troops sleeping on bare floors in Los Angeles, with both Grok and ChatGPT incorrectly telling users the images originated from Afghanistan in 2021 rather than from the current LA protests. The false claims have amplified conspiracy theories and undermined trust in legitimate journalism during a volatile period of civil unrest.",
    image: "/assets/articleThumbnail/BBC-tech-Th.jpg",
    creator: DEMO_USERS[2],
    createdAt: "2025-06-11",
  },
  {
    id: 4,
    headline:
      "Chinese AI Startup DeepSeek Shakes Global Tech Markets With $6M Model Rivaling ChatGPT",
    content:
      "Chinese AI startup DeepSeek has sent shockwaves through the global technology industry with the launch of its R1 reasoning model, which reportedly matches OpenAI's ChatGPT performance while costing a fraction to develop. The breakthrough has prompted industry experts to reconsider assumptions about AI development costs and the competitive advantage of major tech companies.",
    image: "/assets/articleThumbnail/MB-TECH-TH.jpeg",
    creator: DEMO_USERS[3],
    createdAt: "2025-06-11",
  },
  {
    id: 5,
    headline:
      "Is TikTok getting banned tomorrow? Trump extends decision for another 75 days.",
    content:
      "The Trump administration has extended the deadline for TikTok's potential ban by 75 days, giving ByteDance additional time to negotiate a deal that would satisfy national security concerns. The extension comes amid ongoing negotiations between TikTok's parent company and potential US buyers.",
    image: "/assets/articleThumbnail/YH-TECH-TH.png",
    creator: DEMO_USERS[5],
    createdAt: "2025-06-01",
  },

  // Health Category
  {
    id: 6,
    headline:
      "Former President Biden Diagnosed with Aggressive Prostate Cancer",
    content:
      "Former President Joe Biden has been diagnosed with an aggressive form of prostate cancer that has spread to his bones, according to a statement released by his personal office. The 82-year-old former president and his family are currently reviewing treatment options with his medical team.",
    image: "/assets/articleThumbnail/5.png",
    creator: DEMO_USERS[0],
    createdAt: "2025-05-28",
  },
  {
    id: 7,
    headline:
      "Tech Millionaire's $2M/year 'Blueprint' to Cheat Death Gains Cult Following",
    content:
      'Bryan Johnson, 48-year-old founder of Braintree, has sparked global fascination with his $2 million/year anti-aging regimen called Blueprint. The protocol includes 111 daily supplements, electromagnetic pelvic floor therapy to prevent nighttime urination, and a 1,977-calorie "nutrient paste" diet.',
    image: "/assets/articleThumbnail/10.png",
    creator: DEMO_USERS[1],
    createdAt: "2025-05-28",
  },
  {
    id: 8,
    headline:
      "NHS England Faces 'Unthinkable' Cuts as £7 Billion Budget Shortfall Forces Service Reductions",
    content:
      'The NHS in England is implementing what health bosses describe as "previously unthinkable" cuts to essential services as the system struggles with a nearly £7 billion budget deficit, representing a 5% overspend above government allocations.',
    image: "/assets/articleThumbnail/BBC-Health-Th.jpeg",
    creator: DEMO_USERS[2],
    createdAt: "2025-05-28",
  },
  {
    id: 9,
    headline:
      "Tech Millionaire's $2M/year 'Blueprint' to Cheat Death Gains Cult Following",
    content:
      "Bryan Johnson's Blueprint protocol has gained a massive following among tech entrepreneurs and biohackers. The program combines cutting-edge medical technology with traditional wellness practices, creating a comprehensive approach to longevity.",
    image: "/assets/articleThumbnail/MF-HEAL.png",
    creator: DEMO_USERS[4],
    createdAt: "2025-05-28",
  },
  {
    id: 10,
    headline:
      "French Beauty Secret Revealed: Should You Be Using A313 Retinoid After 40?",
    content:
      "The French pharmacy staple A313 retinoid has gained international attention for its anti-aging properties. Dermatologists weigh in on whether this affordable alternative to prescription retinoids is worth the hype.",
    image: "/assets/articleThumbnail/YH-HEALTH-TH.jpg",
    creator: DEMO_USERS[5],
    createdAt: "2025-05-28",
  },

  // Business Category
  {
    id: 11,
    headline:
      "Creator Tests Instagram Reels as TikTok Alternative Amid Platform Uncertainty",
    content:
      "Content creators are increasingly exploring alternative platforms as concerns about TikTok's future continue to mount, with Instagram Reels emerging as a primary alternative for short-form video content.",
    image: "/assets/articleThumbnail/4.png",
    creator: DEMO_USERS[0],
    createdAt: "2025-05-16",
  },
  {
    id: 12,
    headline:
      "Storm Season Forces UK Fishing Fleet to Harbor as Weather Disrupts Coastal Business",
    content:
      "British fishing businesses are grappling with significant operational challenges as severe weather patterns increasingly disrupt traditional fishing schedules across UK coastal waters.",
    image: "/assets/articleThumbnail/BBC-Bus-Th.jpg",
    creator: DEMO_USERS[2],
    createdAt: "2025-05-16",
  },
  {
    id: 13,
    headline: "Disney vs. AI Companies Lawsuit",
    content:
      "Entertainment giants Disney and Universal have filed a comprehensive 110-page lawsuit against AI image generation company Midjourney, marking the first major Hollywood legal challenge against artificial intelligence firms over copyright infringement.",
    image: "/assets/articleThumbnail/MB-BUS-TH.jpg",
    creator: DEMO_USERS[3],
    createdAt: "2025-05-16",
  },
  {
    id: 14,
    headline:
      "McDonald's Didn't Invent Fast Food: Uncovering the Real Pioneers of America's Quick-Service Industry",
    content:
      "The history of fast food in America predates McDonald's by decades, with several innovative entrepreneurs laying the groundwork for what would become a global industry.",
    image: "/assets/articleThumbnail/YH-BUS-TH.jpg",
    creator: DEMO_USERS[5],
    createdAt: "2025-05-16",
  },

  // Entertainment Category
  {
    id: 15,
    headline:
      "World's Most-Followed TikToker Khaby Lame Detained and Deported by ICE",
    content:
      "Khaby Lame, the world's most-followed TikTok star with over 162 million followers, was detained by U.S. Immigration and Customs Enforcement (ICE) at Las Vegas's Harry Reid International Airport on June 6, 2025.",
    image: "/assets/articleThumbnail/3.png",
    creator: DEMO_USERS[1],
    createdAt: "2025-06-04",
  },
  {
    id: 16,
    headline:
      "Japanese Prime Minister Eats Fukushima Seafood to Reassure Public After Treated Water Release",
    content:
      "Japanese Prime Minister Fumio Kishida and government officials publicly consumed seafood from Fukushima during a high-profile lunch to demonstrate safety following the release of treated radioactive wastewater from the Fukushima Daiichi nuclear plant.",
    image: "/assets/articleThumbnail/9.png",
    creator: DEMO_USERS[1],
    createdAt: "2025-06-04",
  },
  {
    id: 17,
    headline:
      "Human-Sized Labubu Doll Breaks World Record, Sells for $150,000 at Beijing Auction",
    content:
      "A mint green, human-sized Labubu figure has shattered records by selling for 1.08 million yuan ($150,275) at Beijing's Yongle International Auction, officially becoming the most expensive toy of its kind globally.",
    image: "/assets/articleThumbnail/BBC-Enter-Th.jpg",
    creator: DEMO_USERS[2],
    createdAt: "2025-06-04",
  },
  {
    id: 18,
    headline:
      "Andrew Tate and Brother Leave Romania for Florida Following Legal Proceedings",
    content:
      "Self-proclaimed influencer Andrew Tate and his brother have departed Romania for Florida via private jet, according to their legal representative who confirmed the information to CNN.",
    image: "/assets/articleThumbnail/MF-ENT-TH.jpg",
    creator: DEMO_USERS[3],
    createdAt: "2025-06-04",
  },
  {
    id: 19,
    headline: "Kim Kardashian Faces Major Lawsuit Over Instagram Mistake",
    content:
      "Reality TV star Kim Kardashian is facing a major lawsuit after an Instagram post led to significant financial losses for several investors.",
    image: "/assets/articleThumbnail/YH-ENTER-TH.png",
    creator: DEMO_USERS[5],
    createdAt: "2025-06-04",
  },

  // Sports Category
  {
    id: 20,
    headline:
      "Enhanced Games Offer $1 Million Prizes for Performance-Enhanced Athletes",
    content:
      "The controversial Enhanced Games have announced their first official competition scheduled for Las Vegas in May 2026, featuring athletes who are permitted and encouraged to use performance-enhancing substances.",
    image: "/assets/articleThumbnail/2.png",
    creator: DEMO_USERS[0],
    createdAt: "2025-05-27",
  },
  {
    id: 21,
    headline:
      "Viral Moment: French President Macron's Cringe-Worthy Attempt to Console Mbappé After World Cup Loss",
    content:
      "French President Emmanuel Macron faced widespread mockery after footage showed him awkwardly patting footballer Kylian Mbappé's head following France's 2022 World Cup final defeat.",
    image: "/assets/articleThumbnail/11.png",
    creator: DEMO_USERS[1],
    createdAt: "2025-05-27",
  },
  {
    id: 22,
    headline:
      "Cristiano Ronaldo Confirms Al-Nassr Stay After Rejecting Club World Cup Offers",
    content:
      "Cristiano Ronaldo has confirmed his intention to remain with Saudi Arabian club Al-Nassr after rejecting multiple offers to participate in this summer's Club World Cup, ending weeks of speculation about his immediate future.",
    image: "/assets/articleThumbnail/BBC-sports-Th.jpeg",
    creator: DEMO_USERS[2],
    createdAt: "2025-05-27",
  },

  // Science Category
  {
    id: 23,
    headline: "Swiss Village of Blatten Buried as Alpine Glacier Collapses",
    content:
      "The Swiss village of Blatten was devastated when a massive section of the Birch Glacier collapsed, burying approximately 90% of the mountain community under tons of ice, mud, and debris.",
    image: "/assets/articleThumbnail/6.jpeg",
    creator: DEMO_USERS[0],
    createdAt: "2025-06-07",
  },
  {
    id: 24,
    headline:
      "Nature's Tragedy: 85% of Hermit Crabs Now Use Plastic Waste as Shells, Study Reveals",
    content:
      "A groundbreaking study shows hermit crabs worldwide are increasingly using plastic debris instead of natural shells, with researchers documenting over 150,000 crustaceans inhabiting bottle caps, syringe parts, and lightbulb fragments.",
    image: "/assets/articleThumbnail/11.jpeg",
    creator: DEMO_USERS[1],
    createdAt: "2025-06-07",
  },
  {
    id: 25,
    headline:
      "UK Issues First Heat-Health Alerts of 2025 as Thunderstorms Threaten Flash Flooding",
    content:
      "The UK has issued its first heat-health alerts of 2025 as severe thunderstorms threaten to cause flash flooding across several regions.",
    image: "/assets/articleThumbnail/BBC-scien-th.jpg",
    creator: DEMO_USERS[2],
    createdAt: "2025-06-07",
  },
  {
    id: 26,
    headline:
      "Extinct for 10,000 Years: Scientists Achieve Breakthrough in Dire Wolf De-Extinction",
    content:
      "Scientists have made a significant breakthrough in their efforts to bring back the dire wolf, a species that has been extinct for approximately 10,000 years.",
    image: "/assets/articleThumbnail/YH-SCI-TH.jpeg",
    creator: DEMO_USERS[5],
    createdAt: "2025-06-07",
  },
];

// Add more articles from other creators...
// Note: I've included the first 6 articles as an example. The remaining articles would follow the same pattern,
// using the appropriate creator data and content from the CSV file.
