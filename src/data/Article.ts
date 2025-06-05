import { Article } from "@/types/Article";
import { creatorData } from "./Creator";

const longContent = `
QuickNews is redefining the landscape of digital journalism with its innovative, AI-powered approach to news delivery. In an era where information is abundant but attention spans are short, QuickNews bridges the gap by offering concise, relevant, and highly personalized news updates directly to your device. 

Founded by a passionate team of independent developers, QuickNews was born out of the frustration with traditional news apps that often bombard users with lengthy articles, intrusive ads, and irrelevant stories. The team envisioned a platform where users could stay informed without feeling overwhelmed, and where the news experience was as enjoyable as it was informative.

At the heart of QuickNews is a sophisticated AI engine that curates stories from thousands of reputable sources worldwide. This engine doesn't just aggregate headlines; it analyzes your reading habits, preferences, and even the time of day to deliver news that matters most to you. Whether you're interested in global politics, technology breakthroughs, sports highlights, or cultural trends, QuickNews ensures your feed is always fresh and tailored to your interests.

But QuickNews is more than just an aggregator. Each story is distilled into a bite-sized summary, allowing you to grasp the essentials in seconds. For those who want to dive deeper, a single tap reveals the full article, complete with multimedia content, expert analysis, and related stories. The app's clean, minimalist interface eliminates distractions, focusing your attention on what truly matters: the news.

User privacy is a core value at QuickNews. The app collects only the data necessary to enhance your experience and never shares your information with third parties. All personalization happens on-device, ensuring your reading habits remain private and secure.

QuickNews also empowers creators and journalists. Through the QuickNews Studio, independent writers and established newsrooms alike can publish directly to the platform, reaching a global audience without the barriers imposed by traditional media outlets. The platform supports a variety of content formats, from text and images to short-form videos and interactive polls, fostering a vibrant and diverse news ecosystem.

Community engagement is another pillar of the QuickNews experience. Users can react to stories, share their thoughts, and participate in discussions, all within a respectful and moderated environment. The app's AI-driven moderation tools help maintain a positive community, filtering out spam and abusive content while promoting meaningful conversations.

Accessibility is built into every aspect of QuickNews. The app supports multiple languages, offers customizable text sizes, and includes features for users with visual or motor impairments. Whether you're catching up on the news during your morning commute or browsing headlines late at night, QuickNews adapts to your needs.

Since its launch, QuickNews has garnered praise from users and industry experts alike. Tech reviewers highlight its speed, accuracy, and user-friendly design, while everyday readers appreciate the app's ability to keep them informed without consuming their entire day. The development team continues to iterate rapidly, introducing new features based on user feedback and the evolving media landscape.

In a world where news is often overwhelming, QuickNews stands out as a beacon of clarity, efficiency, and trust. It's not just another news app—it's your personalized gateway to the world, powered by AI and driven by a commitment to quality journalism.

Download QuickNews today and experience the future of news, one story at a time.
`;

export const articleData: Article[] = [
    {
        id: 1,
        headline: "AI-Powered Journalism Takes Off with QuickNews 🚀",
        content: longContent,
        image: "https://picsum.photos/seed/article/800/450",
        link: "https://www.google.com",
        creator: creatorData[0]
    },
    {
        id: 2,
        headline: "Revolution in News Delivery: Meet QuickNews 📰",
        content: longContent,
        image: "https://picsum.photos/seed/article/800/450",
        link: "https://www.google.com",
        creator: creatorData[0]
    },
    {
        id: 3,
        headline: "From Indie Dream to Reality: The Rise of QuickNews ✨",
        content: longContent,
        image: "https://picsum.photos/seed/article/800/450",
        link: "https://www.google.com",
        creator: creatorData[0]
    },  
    {
        id: 4,
        headline: "Speed Meets Substance in the New QuickNews App ⏱️",
        content: longContent,
        image: "https://picsum.photos/seed/article/800/450",
        link: "https://www.google.com",
        creator: creatorData[0]
    }
];
