import { User } from "./User";

export interface Reply {
    id: number;
    commentId: number;
    content: string;
    createdAt: string;
    user: User;
    likes: number;
}