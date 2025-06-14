import { Article } from "@/types/Article";
import { DEMO_USERS } from "./DemoUsers";

export const DEMO_ARTICLES: Article[] = [
  // tech
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
      "Hangzhou-based DeepSeek has disrupted global AI markets with its R1 model, achieving GPT-4-level performance at 1/20th the cost. Despite U.S. chip restrictions, the company trained R1 using innovative techniques on export-approved processors, spending just $6 million compared to OpenAI’s $100 million GPT-4 budget. The open-weight model’s release caused Nvidia’s stock to plummet $600 billion as analysts reconsidered hardware demands. DeepSeek’s CEO Liang Wenfeng, dubbed “China’s Sam Altman,” credits their success to recruiting non-traditional experts and mixture-of-experts architecture. The breakthrough has intensified US-China tech tensions, with lawmakers calling for stricter AI controls.The implications of DeepSeek’s achievement extend far beyond cost savings, potentially democratizing access to advanced AI capabilities for smaller companies and developing nations previously priced out of the market. Industry experts suggest the breakthrough could accelerate AI adoption across industries while challenging the assumption that only tech giants with massive resources can develop cutting-edge models. The company’s open-source approach has already inspired researchers worldwide to explore more efficient training methods, potentially triggering a new wave of innovation in AI development. However, national security experts warn that widespread access to powerful AI models could complicate efforts to prevent misuse, while the success of Chinese AI companies despite export restrictions may prompt policymakers to reconsider the effectiveness of current technology sanctions.",
    image: "/assets/articleThumbnail/7.png",
    creator: DEMO_USERS[1],
    createdAt: "2025-06-11",
  },
  {
    id: 3,
    headline:
      "AI Chatbots Grok and ChatGPT Falsely Claim LA National Guard Photos Are From Afghanistan, Fueling Protest Misinformation",
    content:
      "Artificial intelligence chatbots are spreading dangerous misinformation about authentic photographs showing National Guard troops sleeping on bare floors in Los Angeles, with both Grok and ChatGPT incorrectly telling users the images originated from Afghanistan in 2021 rather than from the current LA protests. The false claims have amplified conspiracy theories and undermined trust in legitimate journalism during a volatile period of civil unrest. The controversy began when the San Francisco Chronicle published exclusive photographs on Monday showing California National Guard members cramped together on concrete floors in federal buildings, sleeping shoulder-to-shoulder with their equipment scattered around them. California Governor Gavin Newsom shared these images on social media, criticizing President Trump for deploying troops “without fuel, food, water, or a place to sleep”.Almost immediately, users on social media platforms began questioning the authenticity of the photographs, with some claiming they were AI-generated or taken from entirely different contexts. When users turned to AI chatbots for verification, they received confidently incorrect answers that further fueled the misinformation campaign",
    image: "/assets/articleThumbnail/BBC-tech-Th.png",
    creator: DEMO_USERS[2],
    createdAt: "2025-06-11",
  },
  {
    id: 4,
    headline:
      "Chinese AI Startup DeepSeek Shakes Global Tech Markets With $6M Model Rivaling ChatGPT",
    content:
      "Chinese AI startup DeepSeek has sent shockwaves through the global technology industry with the launch of its R1 reasoning model, which reportedly matches OpenAI’s ChatGPT performance while costing a fraction to develop. The breakthrough has prompted industry experts to reconsider assumptions about AI development costs and the competitive advantage of major tech companies. DeepSeek claims its latest model required less than $6 million in computing power to train, compared to the hundreds of millions typically spent by Silicon Valley giants. Scale AI CEO Alexandr Wang described DeepSeek as “roughly on par with the best American models” during remarks at the World Economic Forum in Davos.  The Chinese company’s Christmas Day launch of its open-source model has attracted millions of users seeking free alternatives to subscription-based AI services.The impact on financial markets was immediate and dramatic, with DeepSeek’s apparent efficiency causing Nvidia shares to plummet 17% as investors questioned future demand for expensive AI chips. The breakthrough has forced a reassessment of the AI industry’s capital requirements and competitive landscape, with US President Donald Trump calling the development a “wake-up call” for American companies. Despite security concerns leading Taiwan and Australia to ban the app on federal devices, DeepSeek’s success demonstrates that cutting-edge AI development may be more accessible than previously believed.",
    image: "/assets/articleThumbnail/MB-TECH-TH.jpeg",
    creator: DEMO_USERS[3],
    createdAt: "2025-06-11",
  },

  // health
  {
    id: 7,
    headline:
      "Former President Biden Diagnosed with Aggressive Prostate Cancer",
    content:
      "Former President Joe Biden has been diagnosed with an aggressive form of prostate cancer that has spread to his bones, according to a statement released by his personal office. The 82-year-old former president and his family are currently reviewing treatment options with his medical team.\n\nMedical experts expressed concern about the advanced stage of the diagnosis, noting that only approximately 7% of prostate cancers are detected at this late stage. Dr. Zeke Emanuel, a former Obama health advisor, suggested the cancer may have been developing undetected for years, possibly up to a decade, raising questions about earlier screening protocols.\n\nDespite the serious nature of the diagnosis, doctors remain cautiously optimistic about treatment prospects. The cancer has been identified as hormone-sensitive, which typically responds well to targeted therapies, and medical professionals believe there is potential for the tumor to shrink with appropriate treatment.\n\nCurrent President Donald Trump issued a statement expressing sadness about his former political rival's diagnosis and sending warm wishes to the Biden family. The bipartisan response reflects the gravity of the health situation and the respect accorded to former presidents regardless of political differences.\n\nBiden's medical team is expected to provide regular updates on his condition and treatment progress as he begins what is likely to be an extended period of medical care",
    image: "/assets/articleThumbnail/5.png",
    creator: DEMO_USERS[0],
    createdAt: "2025-05-28",
  },
  {
    id: 8,
    headline:
      "Tech Millionaire’s $2M/year ‘Blueprint’ to Cheat Death Gains Cult Following”",
    content:
      "Bryan Johnson, 48-year-old founder of Braintree, has sparked global fascination with his $2 million/year anti-aging regimen called Blueprint. The protocol includes 111 daily supplements, electromagnetic pelvic floor therapy to prevent nighttime urination, and a 1,977-calorie “nutrient paste” diet. Johnson claims his biological age reversed by five years through rigorous biomarker tracking and $4 million spent on experimental therapies. While mainstream scientists question his methods, Blueprint’s open-source approach has attracted 250,000 followers adopting modified versions of his system. Critics argue it promotes unhealthy obsession, but Johnson insists: “Death is the enemy, and we’re winning”. Johnson’s influence extends beyond personal health optimization to challenging societal attitudes toward aging and mortality. His public documentation of every aspect of his regimen, including detailed blood work and performance metrics, has created a new form of radical transparency in health and wellness. Medical ethicists debate whether his extreme approach represents pioneering research or dangerous self-experimentation that could mislead vulnerable individuals. The Blueprint community has spawned online forums, local meetups, and even dating apps for “longevity-focused” individuals, suggesting Johnson’s movement may be reshaping how younger generations approach health and lifestyle choices in an era of increasing life expectancy and medical advancement.",
    image: "/assets/articleThumbnail/10.png",
    creator: DEMO_USERS[1],
    createdAt: "2025-05-28",
  },
  {
    id: 9,
    headline:
      "NHS England Faces ‘Unthinkable’ Cuts as £7 Billion Budget Shortfall Forces Service Reductions",
    content:
      "The NHS in England is implementing what health bosses describe as “previously unthinkable” cuts to essential services as the system struggles with a nearly £7 billion budget deficit, representing a 5% overspend above government allocations. Critical services including diabetes care for young people, mental health rehabilitation centers, and psychological therapy programs are facing severe reductions or complete elimination. Healthcare trusts across England are shedding thousands of jobs, with one major hospital trust planning to eliminate 1,500 positions—approximately 5% of its workforce—including doctors and nurses. Mental health services have been particularly hard hit, with some trusts stopping new referrals for adult ADHD treatment while psychological therapy waiting times extend beyond one year. Additional services at risk include smoking cessation programs, palliative care, and some maternity units, though birth rate declines have contributed to reduced demand in obstetric services. The financial crisis has prompted NHS Providers, representing health managers, to warn that staff morale has “never been lower” despite government promises of increased funding. The cuts come after ministers announced a £22 billion investment increase over two years, but healthcare leaders argue this amount falls far short of addressing accumulated infrastructure decay and rising demand. Department of Health officials maintain that NHS organizations should focus on reducing bureaucracy and improving productivity rather than cutting frontline services. The crisis highlights the growing tension between political promises to protect healthcare and the fiscal reality facing one of the world’s largest public health systems.",
    image: "/assets/articleThumbnail/BBC-Health-Th.jpeg",
    creator: DEMO_USERS[2],
    createdAt: "2025-05-28",
  },

  // business

  {
    id: 13,
    headline:
      "Creator Tests Instagram Reels as TikTok Alternative Amid Platform Uncertainty",
    content:
      "Content creators are increasingly exploring alternative platforms as concerns about TikTok's future continue to mount, with Instagram Reels emerging as a primary alternative for short-form video content. The shift represents a broader trend of diversification among social media influencers seeking to protect their audiences and income streams.\n\nInstagram Reels offers similar functionality to TikTok, including short-form vertical videos, music integration, and algorithm-driven discovery features. However, creators report significant differences in audience engagement patterns, with Instagram's user base showing different preferences for content types and interaction styles compared to TikTok users.\n\nThe exploration of alternatives has intensified following ongoing political discussions about potential platform restrictions and data privacy concerns. Many creators are proactively building audiences across multiple platforms to ensure continuity of their content and business relationships regardless of regulatory changes.\n\nEarly adopters testing Instagram Reels report mixed results, with some finding success in cross-posting content while others struggle to replicate the viral potential they experienced on TikTok. The platform's integration with Instagram's existing photo-sharing ecosystem provides advantages for established users but may present challenges for creators accustomed to TikTok's unique culture and algorithm behavior.",
    image: "/assets/articleThumbnail/4.png",
    creator: DEMO_USERS[0],
    createdAt: "2025-05-16",
  },
  {
    id: 14,
    headline: "VN-Business no have",
    content:
      "Content creators are increasingly exploring alternative platforms as concerns about TikTok's future continue to mount, with Instagram Reels emerging as a primary alternative for short-form video content. The shift represents a broader trend of diversification among social media influencers seeking to protect their audiences and income streams.\n\nInstagram Reels offers similar functionality to TikTok, including short-form vertical videos, music integration, and algorithm-driven discovery features. However, creators report significant differences in audience engagement patterns, with Instagram's user base showing different preferences for content types and interaction styles compared to TikTok users.\n\nThe exploration of alternatives has intensified following ongoing political discussions about potential platform restrictions and data privacy concerns. Many creators are proactively building audiences across multiple platforms to ensure continuity of their content and business relationships regardless of regulatory changes.\n\nEarly adopters testing Instagram Reels report mixed results, with some finding success in cross-posting content while others struggle to replicate the viral potential they experienced on TikTok. The platform's integration with Instagram's existing photo-sharing ecosystem provides advantages for established users but may present challenges for creators accustomed to TikTok's unique culture and algorithm behavior.",
    image: "/assets/articleThumbnail/4.png",
    creator: DEMO_USERS[1],
    createdAt: "2025-05-16",
  },
  {
    id: 15,
    headline: "Storm Season Forces UK Fishing Fleet to Harbor as Weather Disrupts Coastal Business",
    content:
      "British fishing businesses are grappling with significant operational challenges as severe weather patterns increasingly disrupt traditional fishing schedules across UK coastal waters. Fishermen in Bournemouth and surrounding areas report that unpredictable storm systems are forcing vessels to remain docked for extended periods, creating substantial economic pressure on an industry already facing post-Brexit complications. The timing of these weather disruptions coincides with the UK government’s announcement of expanded bottom trawling bans, which will affect 48,000 square kilometers of protected waters. Industry representatives warn that combining weather-related losses with new fishing restrictions could push smaller operations toward financial collapse. The Scottish Fishermen’s Federation has expressed particular concern about the cumulative impact of offshore wind development, regulatory changes, and now increasingly volatile weather patterns. Coastal communities that depend on fishing revenue are experiencing ripple effects throughout their local economies, from fish processing facilities to tourism operators who rely on fresh catches for restaurants. The Environment Secretary has acknowledged the challenges facing the sector while emphasizing the need for sustainable fishing practices, but industry leaders argue that current support measures are insufficient to address the mounting pressures from climate-related disruptions. Weather forecasters predict that storm frequency and intensity will continue increasing, potentially forcing a fundamental restructuring of how UK fishing operations plan and execute their seasonal activities.",
    image: "/assets/articleThumbnail/BBC-Bus-Th.jpg",
    creator: DEMO_USERS[2],
    createdAt: "2025-05-16",
  },
  {
    id: 16,
    headline: "Disney vs. AI Companies Lawsuit",
    content:
      "Entertainment giants Disney and Universal have filed a comprehensive 110-page lawsuit against AI image generation company Midjourney, marking the first major Hollywood legal challenge against artificial intelligence firms over copyright infringement. The lawsuit, filed in U.S. District Court in Los Angeles, accuses Midjourney of creating a “bottomless pit of plagiarism” by using countless copyrighted works to train its AI systems without permission. Disney’s chief legal officer Horacio Gutierrez emphasized that “world-class content is built on decades of investment, creativity, and innovation” and stressed that intellectual property protections are essential for creators to profit from their works. The lawsuit specifically targets Midjourney’s alleged unauthorized use of iconic characters including Shrek, Homer Simpson, and Darth Vader, claiming the AI company operates like a “virtual vending machine” producing infinite unauthorized reproductions. The entertainment companies are seeking unspecified monetary damages and demanding that Midjourney implement proper copyright protection measures before launching its planned video service. This legal action represents an escalation in the ongoing battle between Big Entertainment and Big Tech, joining other high-profile copyright cases including The New York Times’ lawsuit against OpenAI and Microsoft, and Sony Music Entertainment’s action against AI music generators Suno and Udio. The case could set important precedents for how AI companies must handle copyrighted material, with Midjourney’s approximately 20 million registered users potentially affected by the outcome. Recent court victories for artists in similar cases have allowed copyright infringement claims against AI art generators to proceed, suggesting that courts are increasingly willing to scrutinize how AI companies use protected intellectual property for training purposes.",
    image: "/assets/articleThumbnail/BBC-Bus-Th.jpg",
    creator: DEMO_USERS[3],
    createdAt: "2025-05-16",
  },

  // entertainment

  {
    id: 19,
    headline:
      "World's Most-Followed TikToker Khaby Lame Detained and Deported by ICE",
    content:
      "Khaby Lame, the world's most-followed TikTok star with over 162 million followers, was detained by U.S. Immigration and Customs Enforcement (ICE) at Las Vegas's Harry Reid International Airport on June 6, 2025. The 25-year-old Italian citizen, whose real name is Seringe Khabane Lame, was arrested for immigration violations after overstaying his temporary visa. ICE officials confirmed that Lame had entered the United States on April 30 for participation in the Met Gala in early May but remained in the country beyond his visa's permitted duration. The detention sparked widespread discussion across social media platforms, with many questioning the enforcement actions under the current administration's intensified deportation policies.Lame was subsequently granted voluntary departure and has since left the United States. The incident has reignited debates about immigration enforcement and the treatment of high-profile international visitors. Despite his massive global following and cultural influence, Lame received no special treatment under immigration law, highlighting the strict enforcement of visa regulations regardless of celebrity status. The TikTok star has not made an official public statement regarding the detention, though recent social media activity suggests he has relocated to other countries following his departure from the U.S.",
    image: "/assets/articleThumbnail/3.png",
    creator: DEMO_USERS[1],
    createdAt: "2025-06-04",
  },
  {
    id: 20,
    headline:
      "Japanese Prime Minister Eats Fukushima Seafood to Reassure Public After Treated Water Release",
    content:
      "Japanese Prime Minister Fumio Kishida and government officials publicly consumed seafood from Fukushima during a high-profile lunch to demonstrate safety following the release of treated radioactive wastewater from the Fukushima Daiichi nuclear plant. The gesture aimed to counter international concerns about ocean contamination, particularly after China banned all Japanese seafood imports in response to the water discharge. While Japanese authorities insist the treated water meets safety standards, the move has sparked debates about transparency and long-term environmental impacts. South Korea and Pacific Island nations have also expressed skepticism, with protests erupting in Seoul over perceived ecological risks. The International Atomic Energy Agency (IAEA) has endorsed Japan’s water treatment process, which removes most radioactive elements except tritium, a hydrogen isotope considered relatively harmless in small quantities. However, environmental groups and fishing communities remain concerned about the cumulative effects of continuous releases over the next 30 years. The controversy has highlighted broader questions about nuclear waste management and international cooperation in addressing cross-border environmental challenges. Local fishermen report significant economic losses despite government compensation programs, as consumer confidence in Fukushima seafood remains fragile both domestically and internationally.",
    image: "/assets/articleThumbnail/9.png",
    creator: DEMO_USERS[1],
    createdAt: "2025-06-04",
  },
  {
    id: 21,
    headline:
      "Human-Sized Labubu Doll Breaks World Record, Sells for $150,000 at Beijing Auction",
    content:
      "A mint green, human-sized Labubu figure has shattered records by selling for 1.08 million yuan ($150,275) at Beijing’s Yongle International Auction, officially becoming the most expensive toy of its kind globally. The 131-centimeter-tall figure, described by auctioneers as the only one of its kind in the world, sparked intense bidding among approximately 200 in-person attendees and over 1,000 online participants. The auction, which marked the world’s first dedicated Labubu sale, featured 48 lots and generated total sales of 3.73 million yuan. These whimsical monster figurines, created by Hong Kong artist Kasing Lung and marketed by Chinese toy giant Pop Mart, have evolved from a cultural craze into serious collectibles. The dolls typically retail for around 50 yuan in “blind box” packaging, where buyers don’t know which design they’ll receive until opening. Celebrity endorsements have fueled Labubu’s meteoric rise, particularly after Blackpink’s Lisa was spotted with the toy and praised it publicly. The phenomenon has since attracted other high-profile fans, including football icon David Beckham, who shared an Instagram photo featuring his Labubu attached to a bag. This viral celebrity adoption has transformed the quirky monster from underground art toy to global sensation, with Pop Mart reporting revenue increases of over 125% year-on-year as demand continues to surge worldwide.",
    image: "/assets/articleThumbnail/BBC-Enter-Th.jpg",
    creator: DEMO_USERS[2],
    createdAt: "2025-06-04",
  },

  // sports

  {
    id: 25,
    headline:
      "Enhanced Games Offer $1 Million Prizes for Performance-Enhanced Athletes",
    content:
      "The controversial Enhanced Games have announced their first official competition scheduled for Las Vegas in May 2026, featuring athletes who are permitted and encouraged to use performance-enhancing substances. The event has generated significant debate in the sports world, with critics arguing it undermines traditional athletic competition while supporters claim it represents the future of human performance.\n\nGreek-Bulgarian swimmer Kristian Gkolomeev recently broke the 50-meter freestyle world record at an Enhanced Games event, completing the distance in 20.89 seconds and earning $1 million for his achievement. The previous record of 20.91 seconds was held by Brazil's Cesar Cielo since 2009, making this a historic moment in competitive swimming.\n\nThe Enhanced Games operate under fundamentally different principles than traditional Olympic competition, explicitly allowing athletes to use performance-enhancing drugs under medical supervision. Organizers argue this approach provides a safer, more transparent alternative to current elite sports where doping often occurs in secret and without proper medical oversight.\n\nHowever, the concept faces fierce opposition from traditional sports organizations and Olympic committees, who maintain that allowing performance enhancement fundamentally changes the nature of athletic competition. Critics worry about long-term health consequences for athletes and the message sent to young competitors about fair play and natural human achievement.",
    image: "/assets/articleThumbnail/2.png",
    creator: DEMO_USERS[0],
    createdAt: "2025-05-27",
  },
  {
    id: 26,
    headline:
      "Viral Moment: French President Macron’s Cringe-Worthy Attempt to Console Mbappé After World Cup Loss",
    content:
      "French President Emmanuel Macron faced widespread mockery after footage showed him awkwardly patting footballer Kylian Mbappé’s head following France’s 2022 World Cup final defeat. The 25-second clip, viewed over 40 million times, depicts Mbappé visibly uncomfortable as Macron delivers platitudes about “national pride.” Social media users criticized the interaction as tone-deaf, with memes comparing it to “a CEO comforting an underperforming intern.” The incident sparked discussions about politicians overstepping into sports, though some defenders noted Macron’s subsequent push for increased youth sports funding. Political analysts suggest the viral moment reflects broader challenges facing Macron’s presidency, including perceptions of being out of touch with public sentiment. The president’s frequent appearances at sporting events have been criticized as opportunistic photo opportunities rather than genuine support for athletes. Sports psychologists noted that high-profile political figures inserting themselves into emotional moments can add unwanted pressure to already devastated athletes. The incident has since become a case study in political communication courses, demonstrating how well-intentioned gestures can backfire in the social media age when timing and context are misjudged.",
    image: "/assets/articleThumbnail/11.png",
    creator: DEMO_USERS[1],
    createdAt: "2025-05-27",
  },
  {
    id: 27,
    headline:
      "Cristiano Ronaldo Confirms Al-Nassr Stay After Rejecting Club World Cup Offers",
    content:
      "Cristiano Ronaldo has confirmed his intention to remain with Saudi Arabian club Al-Nassr after rejecting multiple offers to participate in this summer’s Club World Cup, ending weeks of speculation about his immediate future. The 40-year-old Portugal captain, whose contract expires at the end of June, stated “Nothing change. Nassr Yes” following Portugal’s dramatic Nations League victory over Spain. The announcement comes after FIFA President Gianni Infantino had publicly suggested that Ronaldo could join a participating Club World Cup team following Al-Nassr’s failure to qualify for the tournament. Several clubs, including Brazilian side Botafogo, were reportedly interested in securing Ronaldo’s services for the expanded 32-team competition in the United States. However, sources close to the situation indicate that Al-Nassr officials remain optimistic about renewing Ronaldo’s contract beyond its current expiration date. Ronaldo’s decision to stay in Saudi Arabia validates the significant investment made by the Saudi Pro League in attracting global superstars to elevate the competition’s profile. Since joining Al-Nassr in January 2023 on a deal reportedly worth £177 million per year, Ronaldo has scored 99 goals in 111 appearances across all competitions, including a record-breaking 35 goals in 31 Saudi Pro League matches during the 2023-24 season. The Portuguese legend’s continued presence is expected to further enhance the Saudi league’s international reputation while supporting the kingdom’s broader Vision 2030 sports development initiatives. His recent emotional celebration following Portugal’s penalty shootout victory over Spain, where he scored his 138th international goal, demonstrated his continued passion for competition at the highest leve",
    image: "/assets/articleThumbnail/BBC-sports-Th.jpeg",
    creator: DEMO_USERS[2],
    createdAt: "2025-05-27",
  },

  // science

  {
    id: 31,
    headline: "Swiss Village of Blatten Buried as Alpine Glacier Collapses",
    content:
      'The Swiss village of Blatten was devastated when a massive section of the Birch Glacier collapsed, burying approximately 90% of the mountain community under tons of ice, mud, and debris. The disaster, which occurred after days of alarming ground shifts, forced the evacuation of over 300 residents and dozens of animals from the picturesque Alpine village.\n\nScientists and geologists had been monitoring unstable conditions for days before the collapse, issuing warnings that allowed authorities to execute a comprehensive evacuation plan. The successful evacuation prevented what could have been a catastrophic loss of life, though one person remains missing following the incident.\n\nThe collapse of the Birch Glacier created a new lake formation and raised concerns about additional flooding as water levels continue to rise. The disaster highlights the increasing frequency of extreme weather events and geological instability in Alpine regions, which many experts attribute to climate change and rising global temperatures.\n\nSwiss authorities praised the coordination between scientists, emergency services, and local officials that enabled the life-saving evacuation. The incident has sparked renewed discussions about climate crisis preparedness and the need for early warning systems in mountainous regions experiencing rapid environmental changes.\n\nLocal mayor Matthias Bellwald expressed both grief and determination, stating "We lost our village, but we will rebuild it". The community now faces the challenge of relocating while planning for potential reconstruction in the aftermath of this unprecedented natural disaster.',
    image: "/assets/articleThumbnail/6.jpeg",
    creator: DEMO_USERS[0],
    createdAt: "2025-06-07",
  },
  {
    id: 32,
    headline:
      "Nature’s Tragedy: 85% of Hermit Crabs Now Use Plastic Waste as Shells, Study Reveals",
    content:
      "A groundbreaking study shows hermit crabs worldwide are increasingly using plastic debris instead of natural shells, with researchers documenting over 150,000 crustaceans inhabiting bottle caps, syringe parts, and lightbulb fragments. This alarming adaptation—observed in 85% of studied populations—stems from ocean pollution containing at least 171 trillion plastic particles. Marine biologists warn this behavior disrupts ecosystems, as plastic offers poor protection and introduces toxic chemicals into the food chain. The findings coincide with UN negotiations for a global plastics treaty, adding urgency to environmental reform efforts. The research team discovered that crabs using plastic shells show reduced growth rates and increased mortality compared to those with natural shells. Plastic containers often trap heat and provide inadequate protection against predators, making these adaptations evolutionary dead ends rather than successful innovations. The study also revealed that plastic-dwelling crabs accumulate higher levels of microplastics in their tissue, potentially affecting their reproductive capabilities and introducing contaminants into marine food webs. Conservation efforts are now focusing on beach cleanup initiatives and “shell banks” where volunteers collect and distribute natural shells to affected crab populations, though experts emphasize that addressing plastic pollution at its source remains the only long-term solution.",
    image: "/assets/articleThumbnail/11.jpeg",
    creator: DEMO_USERS[1],
    createdAt: "2025-06-07",
  },
  {
    id: 33,
    headline:
      "UK Issues First Heat-Health Alerts of 2025 as Thunderstorms Threaten Flash Flooding",
    content:
      "British fishing businesses are grappling with significant operational challenges as severe weather patterns increasingly disrupt traditional fishing schedules across UK coastal waters. Fishermen in Bournemouth and surrounding areas report that unpredictable storm systems are forcing vessels to remain docked for extended periods, creating substantial economic pressure on an industry already facing post-Brexit complications. The timing of these weather disruptions coincides with the UK government’s announcement of expanded bottom trawling bans, which will affect 48,000 square kilometers of protected waters. Industry representatives warn that combining weather-related losses with new fishing restrictions could push smaller operations toward financial collapse. The Scottish Fishermen’s Federation has expressed particular concern about the cumulative impact of offshore wind development, regulatory changes, and now increasingly volatile weather patterns. Coastal communities that depend on fishing revenue are experiencing ripple effects throughout their local economies, from fish processing facilities to tourism operators who rely on fresh catches for restaurants. The Environment Secretary has acknowledged the challenges facing the sector while emphasizing the need for sustainable fishing practices, but industry leaders argue that current support measures are insufficient to address the mounting pressures from climate-related disruptions. Weather forecasters predict that storm frequency and intensity will continue increasing, potentially forcing a fundamental restructuring of how UK fishing operations plan and execute their seasonal activities.",
    image: "/assets/articleThumbnail/BBC-scien-th.jpg",
    creator: DEMO_USERS[2],
    createdAt: "2025-06-07",
  },
];

// Add more articles from other creators...
// Note: I've included the first 6 articles as an example. The remaining articles would follow the same pattern,
// using the appropriate creator data and content from the CSV file.
