import { Comment } from "@/types/Comment";
import { repliesData } from "./Replies";
import { creatorData } from "./Users";

export const commentsData: Comment[] = [
    {
        videoId: 1,
        id: 1,
        user: creatorData[1],
        text: "This app is so smooth and fast! Love the new design.",
        likes: 5,
        replies: [repliesData[0], repliesData[1], repliesData[2]],
        timestamp: new Date("2023-06-01T10:00:00")
    },
    {
        videoId: 1,
        id: 2,
        user: creatorData[2],
        text: "AI-powered news is the future. Great job, team!",
        likes: 3,
        replies: [repliesData[3], repliesData[4]],
        timestamp: new Date("2023-06-01T11:00:00")
    },
    {
        videoId: 2,
        id: 3,
        user: creatorData[3],
        text: "I appreciate the focus on privacy and no ads.",
        likes: 2,
        replies: [repliesData[5]],
        timestamp: new Date("2023-06-02T09:30:00")
    },
    {
        videoId: 2,
        id: 4,
        user: creatorData[4],
        text: "The summaries are super helpful for busy mornings.",
        likes: 4,
        replies: [],
        timestamp: new Date("2023-06-02T10:15:00")
    },
    {
        videoId: 3,
        id: 5,
        user: creatorData[0],
        text: "Can we get more tech news?",
        likes: 1,
        replies: [],
        timestamp: new Date("2023-06-03T08:45:00")
    }
];
