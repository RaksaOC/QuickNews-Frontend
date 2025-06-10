import { Reply } from "@/types/Replies";
import { OTHER_USERS } from "./DemoUsers";

export const DEMO_REPLIES: Reply[] = [
    {
        id: 1,
        commentId: 1,
        content: "Absolutely agree! This is a game changer.",
        createdAt: "2023-06-01",
        user: OTHER_USERS[1],
        likes: 2
    },
    {
        id: 2,
        commentId: 1,
        content: "I think there are still some issues to fix, but it's promising.",
        createdAt: "2023-06-01",
        user: OTHER_USERS[2],
        likes: 1
    },
    {
        id: 3,
        commentId: 1,
        content: "Can someone explain how the AI curation works?",
        createdAt: "2023-06-01",
        user: OTHER_USERS[3],
        likes: 0
    },
    {
        id: 4,
        commentId: 2,
        content: "Great point! I love the minimal interface.",
        createdAt: "2023-06-02",
        user: OTHER_USERS[3],
        likes: 3
    },
    {
        id: 5,
        commentId: 2,
        content: "Wish more apps focused on privacy like this.",
        createdAt: "2023-06-02",
        user: OTHER_USERS[0],
        likes: 1
    },
    {
        id: 6,
        commentId: 3,
        content: "Looking forward to more features!",
        createdAt: "2023-06-03",
        user: OTHER_USERS[1],
        likes: 0
    }
];