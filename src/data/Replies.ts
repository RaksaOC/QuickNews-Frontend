import { Reply } from "@/types/Replies";
import { creatorData } from "./Users";

export const repliesData: Reply[] = [
    {
        id: 1,
        commentId: 1,
        content: "Absolutely agree! This is a game changer.",
        createdAt: new Date("2023-06-01"),
        user: creatorData[1],
        likes: 2
    },
    {
        id: 2,
        commentId: 1,
        content: "I think there are still some issues to fix, but it's promising.",
        createdAt: new Date("2023-06-01"),
        user: creatorData[2],
        likes: 1
    },
    {
        id: 3,
        commentId: 1,
        content: "Can someone explain how the AI curation works?",
        createdAt: new Date("2023-06-01"),
        user: creatorData[3],
        likes: 0
    },
    {
        id: 4,
        commentId: 2,
        content: "Great point! I love the minimal interface.",
        createdAt: new Date("2023-06-02"),
        user: creatorData[4],
        likes: 3
    },
    {
        id: 5,
        commentId: 2,
        content: "Wish more apps focused on privacy like this.",
        createdAt: new Date("2023-06-02"),
        user: creatorData[0],
        likes: 1
    },
    {
        id: 6,
        commentId: 3,
        content: "Looking forward to more features!",
        createdAt: new Date("2023-06-03"),
        user: creatorData[1],
        likes: 0
    }
];