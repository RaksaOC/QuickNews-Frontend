import { Article } from "@/types/Article";
import { creatorData } from "./Users";

const techContent = `
AI is transforming the tech industry at an unprecedented pace. From intelligent virtual assistants like ChatGPT and Siri to self-driving vehicles and automated supply chains, AI is no longer a futuristic concept — it’s an integral part of daily technology infrastructure. In software development, AI tools assist in writing, reviewing, and even deploying code. In cybersecurity, machine learning models help detect and respond to threats faster than any human could. Meanwhile, natural language processing continues to improve search engines, chatbots, and language translation systems.

Big tech companies are investing billions into generative AI, robotics, and synthetic data to gain a competitive edge. Startups, too, are harnessing AI to innovate in areas like personalized education, virtual healthcare assistants, and decentralized AI marketplaces.

Experts predict that in the next decade, AI will further disrupt labor markets, introduce new ethical challenges, and accelerate human-AI collaboration. The tech industry is at a crossroads — balancing innovation with responsibility will define the next era of digital progress.
`;

const healthContent = `
A new study reveals the substantial benefits of daily meditation for both mental and physical health. Researchers from the Global Mental Wellness Institute followed over 10,000 participants across a 12-month period and discovered that those who practiced mindful meditation for at least 10 minutes a day reported significant improvements in mood, focus, and resilience to stress.

Neuroscientific evidence shows that regular meditation can reduce the activity of the amygdala — the brain’s stress center — and enhance connections in the prefrontal cortex, which is responsible for decision-making and self-regulation. Additionally, long-term practitioners exhibited lower blood pressure, better sleep patterns, and improved immune system responses.

Doctors now recommend incorporating mindfulness into standard treatment plans for anxiety, depression, and even chronic pain. Mobile apps, online courses, and group sessions have made meditation more accessible than ever. As awareness grows, mindfulness may soon be as common a prescription as exercise and a healthy diet.
`;
const worldContent = `
Global leaders met in Geneva this week for one of the most significant climate change summits of the decade. Representatives from over 180 countries, including heads of state, environmental scientists, and business leaders, gathered to negotiate updated international agreements aimed at combating global warming and promoting sustainable development.

The summit’s key outcome was the Geneva Climate Accord 2025, which includes aggressive new carbon reduction targets, expanded investments in renewable energy, and stricter regulations on deforestation and industrial emissions. Nations pledged to invest collectively over $500 billion in clean energy projects over the next five years.

Climate activists welcomed the new commitments but stressed the importance of accountability and implementation. "Pledges are no longer enough — we need measurable action," said Greta Thunberg during a keynote speech. Meanwhile, developing nations emphasized the need for equitable financing and technology transfers to support green transitions without harming economic growth.

The world watches closely as these promises are put into motion.
`;

const businessContent = `
Startups are thriving in 2025, with a record number of unicorns emerging across multiple sectors including green energy, fintech, and artificial intelligence. Venture capital funding has reached an all-time high, with over $300 billion invested globally in the first half of the year alone. What’s driving this boom? A combination of technological innovation, investor optimism, and supportive government policies.

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
export const articleData: Article[] = [
    {
        id: 1,
        headline: "AI-Powered Journalism Takes Off with QuickNews 🚀",
        content: techContent,
        image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=800&q=80",
        link: "https://www.technews.com/ai-journalism",
        creator: creatorData[0]
    },
    {
        id: 2,
        headline: "Daily Meditation: The Secret to Mental Clarity 🧘‍♂️",
        content: healthContent,
        image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80",
        link: "https://www.healthnews.com/meditation",
        creator: creatorData[1]
    },
    {
        id: 3,
        headline: "World Leaders Unite for Climate Action 🌍",
        content: worldContent,
        image: "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=800&q=80",
        link: "https://www.worldnews.com/climate-action",
        creator: creatorData[2]
    },
    {
        id: 4,
        headline: "Startup Boom: 2025's Hottest Trends 💡",
        content: businessContent,
        image: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=800&q=80",
        link: "https://www.businessnews.com/startup-boom",
        creator: creatorData[3]
    },
    {
        id: 5,
        headline: "Underdogs Triumph in Championship Thriller 🏆",
        content: sportsContent,
        image: "https://images.unsplash.com/photo-1517649763962-0c623066013b?auto=format&fit=crop&w=800&q=80",
        link: "https://www.sportsnews.com/championship",
        creator: creatorData[4]
    }
];
