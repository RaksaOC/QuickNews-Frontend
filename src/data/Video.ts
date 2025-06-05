import { Video } from "../types/Video";
import { articleData } from "./Article";
import { creatorData } from "./Creator";

export const videoData: Video[] = [
    {
        id: 1,
        headline: "QuickNews has launched! 🚀",
        content: "In a surprising move this morning, a group of independent developers announced the launch of QuickNews — a modern, AI-powered news aggregator aimed at revolutionizing how people consume short-form content.",
        image: "https://via.placeholder.com/150",
        url: "/assets/vid1.mp4",
        creator: creatorData[0],
        comments: [
            {
                id: 1,
                user: "John Doe",
                text: "This is a comment",
                likes: 0,
                replies: 0,
                timestamp: "2021-01-01"
            }
        ],
        likes: 0,
        shares: 0,
        createdAt: "2021-01-01",
        article: articleData[0]
    },
    {
        id: 2,
        headline: "QuickNews has launched! 🚀",
        content: "In a surprising move this morning, a group of independent developers announced the launch of QuickNews — a modern, AI-powered news aggregator aimed at revolutionizing how people consume short-form content.",
        image: "https://via.placeholder.com/150",
        url: "/assets/vid2.mp4",
        creator: creatorData[0],
        comments: [
            {
                id: 1,
                user: "John Doe",
                text: "This is a comment",
                likes: 0,
                replies: 0,
                timestamp: "2021-01-01"
            }
        ],
        likes: 0,
        shares: 0,
        createdAt: "2021-01-01",
        article: articleData[1]
    },
    {
        id: 3,
        headline: "QuickNews has launched! 🚀",
        content: "In a surprising move this morning, a group of independent developers announced the launch of QuickNews — a modern, AI-powered news aggregator aimed at revolutionizing how people consume short-form content.",
        image: "https://via.placeholder.com/150",
        url: "/assets/vid3.mp4",
        creator: creatorData[0],
        comments: [
            {
                id: 1,
                user: "John Doe",
                text: "This is a comment",
                likes: 0,
                replies: 0,
                timestamp: "2021-01-01"
            }
        ],
        likes: 0,
        shares: 0,
        createdAt: "2021-01-01",
        article: articleData[2]
    }
]