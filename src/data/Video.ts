import { Video } from "../types/Video";
import { articleData } from "./Article";
import { commentsData } from "./Comments";
import { creatorData } from "./Users";

export const videoData: Video[] = [
    {
        id: 1,
        headline: "AI is Changing Everything! 🤖",
        content: "Explore how artificial intelligence is revolutionizing industries worldwide, from healthcare to entertainment.",
        image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=800&q=80",
        url: "/assets/vid1.mp4",
        creator: creatorData[0],
        comments: [commentsData[0], commentsData[1]],
        likes: 120,
        shares: 30,
        createdAt: "2025-06-01",
        article: articleData[0]
    },
    {
        id: 2,
        headline: "Meditation for a Healthier Mind 🧘‍♀️",
        content: "Discover the science behind meditation and how it can improve your daily life.",
        image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80",
        url: "/assets/vid2.mp4",
        creator: creatorData[1],
        comments: [commentsData[2], commentsData[3]],
        likes: 95,
        shares: 22,
        createdAt: "2025-06-02",
        article: articleData[1]
    },
    {
        id: 3,
        headline: "Climate Summit 2025: What You Missed 🌍",
        content: "A recap of the most important moments and agreements from this year's global climate summit.",
        image: "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=800&q=80",
        url: "/assets/vid3.mp4",
        creator: creatorData[2],
        comments: [commentsData[4]],
        likes: 80,
        shares: 15,
        createdAt: "2025-06-03",
        article: articleData[2]
    },
    {
        id: 4,
        headline: "Startup Trends to Watch in 2025 💡",
        content: "Which startups are making waves this year? We break down the hottest trends and companies.",
        image: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=800&q=80",
        url: "/assets/vid4.mp4",
        creator: creatorData[3],
        comments: [],
        likes: 60,
        shares: 10,
        createdAt: "2025-06-04",
        article: articleData[3]
    },
    {
        id: 5,
        headline: "Championship Recap: The Underdogs Win! 🏆",
        content: "Relive the excitement of the championship game and see how the underdogs pulled off a stunning victory.",
        image: "https://images.unsplash.com/photo-1517649763962-0c623066013b?auto=format&fit=crop&w=800&q=80",
        url: "/assets/vid5.mp4",
        creator: creatorData[4],
        comments: [],
        likes: 150,
        shares: 40,
        createdAt: "2025-06-05",
        article: articleData[4]
    }
];