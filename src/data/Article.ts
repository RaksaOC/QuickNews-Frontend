import { Article } from "@/types/Article";
import { DEMO_USERS, OTHER_USERS } from "./DemoUsers";

const techContent = `
AI is transforming the tech industry at an unprecedented pace. From intelligent virtual assistants like ChatGPT and Siri to self-driving vehicles and automated supply chains, AI is no longer a futuristic concept — it's an integral part of daily technology infrastructure. In software development, AI tools assist in writing, reviewing, and even deploying code. In cybersecurity, machine learning models help detect and respond to threats faster than any human could. Meanwhile, natural language processing continues to improve search engines, chatbots, and language translation systems.

Big tech companies are investing billions into generative AI, robotics, and synthetic data to gain a competitive edge. Startups, too, are harnessing AI to innovate in areas like personalized education, virtual healthcare assistants, and decentralized AI marketplaces.

Experts predict that in the next decade, AI will further disrupt labor markets, introduce new ethical challenges, and accelerate human-AI collaboration. The tech industry is at a crossroads — balancing innovation with responsibility will define the next era of digital progress.
`;

const healthContent = `
A new study reveals the substantial benefits of daily meditation for both mental and physical health. Researchers from the Global Mental Wellness Institute followed over 10,000 participants across a 12-month period and discovered that those who practiced mindful meditation for at least 10 minutes a day reported significant improvements in mood, focus, and resilience to stress.

Neuroscientific evidence shows that regular meditation can reduce the activity of the amygdala — the brain's stress center — and enhance connections in the prefrontal cortex, which is responsible for decision-making and self-regulation. Additionally, long-term practitioners exhibited lower blood pressure, better sleep patterns, and improved immune system responses.

Doctors now recommend incorporating mindfulness into standard treatment plans for anxiety, depression, and even chronic pain. Mobile apps, online courses, and group sessions have made meditation more accessible than ever. As awareness grows, mindfulness may soon be as common a prescription as exercise and a healthy diet.
`;
const worldContent = `
Global leaders met in Geneva this week for one of the most significant climate change summits of the decade. Representatives from over 180 countries, including heads of state, environmental scientists, and business leaders, gathered to negotiate updated international agreements aimed at combating global warming and promoting sustainable development.

The summit's key outcome was the Geneva Climate Accord 2025, which includes aggressive new carbon reduction targets, expanded investments in renewable energy, and stricter regulations on deforestation and industrial emissions. Nations pledged to invest collectively over $500 billion in clean energy projects over the next five years.

Climate activists welcomed the new commitments but stressed the importance of accountability and implementation. "Pledges are no longer enough — we need measurable action," said Greta Thunberg during a keynote speech. Meanwhile, developing nations emphasized the need for equitable financing and technology transfers to support green transitions without harming economic growth.

The world watches closely as these promises are put into motion.
`;

const businessContent = `
Startups are thriving in 2025, with a record number of unicorns emerging across multiple sectors including green energy, fintech, and artificial intelligence. Venture capital funding has reached an all-time high, with over $300 billion invested globally in the first half of the year alone. What's driving this boom? A combination of technological innovation, investor optimism, and supportive government policies.

Entrepreneurs are focusing on sustainability and efficiency, launching AI-driven logistics platforms, carbon credit marketplaces, and autonomous delivery networks. The surge in remote work has also opened doors for SaaS tools that optimize hybrid collaboration and project management. 

Green tech is especially hot — from direct air capture startups to biodegradable packaging producers, companies that offer scalable solutions to environmental challenges are drawing huge attention. Investors are also showing strong interest in startups that use AI to solve real-world problems in health, agriculture, and education.

While analysts remain cautiously optimistic, many believe this momentum represents not just a trend but a fundamental shift in how business is conducted in the 21st century.
`;
const sportsContent = `
The championship game last night was a nail-biter from start to finish, culminating in a dramatic victory that will go down in sports history. With only seconds remaining on the clock, the underdog team executed a flawless play that resulted in a buzzer-beating goal, snatching victory from the heavily favored opponents.

The stadium erupted in chaos as fans cheered, wept, and embraced. Sports analysts are calling it one of the most unforgettable matches of the decade, citing not just the outcome but the intensity and sportsmanship displayed throughout. Social media exploded with reactions, trending under hashtags like #GreatestFinal and #UnderdogVictory.

Star player Malik Torres was named MVP after scoring three goals and leading the comeback charge in the final quarter. "We believed in ourselves even when no one else did," he said in the post-game interview. Coaches, teammates, and fans alike praised the team's resilience, teamwork, and sheer determination.

The win not only secured the championship title but inspired millions watching at home. Sports, once again, proved to be a source of unity, drama, and joy.
`;

export const DEMO_ARTICLES: Article[] = [
  {
    id: 1,
    headline: "AI is Changing Everything!",
    image: "/assets/cover1.jpg",
    content: techContent,
    creator: OTHER_USERS[1],
    createdAt: "2024-06-01",
    likes: 10,
  },
  {
    id: 2,
    headline: "Meditation for a Healthier Mind",
    image: "/assets/cover2.jpg",
    content: healthContent,
    creator: OTHER_USERS[2],
    createdAt: "2024-06-02",
    likes: 10,
  },
  {
    id: 3,
    headline: "Climate Summit 2025: What You Missed",
    image: "/assets/cover3.jpg",
    content: worldContent,
    creator: OTHER_USERS[3],
    createdAt: "2024-06-03",
    likes: 10,
  },
  {
    id: 4,
    headline: "Startup Trends to Watch in 2025",
    image: "/assets/cover1.jpg",
    content: businessContent,
    creator: OTHER_USERS[4],
    createdAt: "2024-06-04",
    likes: 10,
  },
  {
    id: 5,
    headline: "Championship Recap: The Underdogs Win!",
    image: "/assets/cover2.jpg",
    content: sportsContent,
    creator: OTHER_USERS[1],
    createdAt: "2024-06-05",
    likes: 10,
  },
];
