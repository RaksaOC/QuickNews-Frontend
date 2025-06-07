import { User } from "./User";

export interface Reply {
    id: number;
    commentId: number;
    content: string;
    createdAt: Date;
    user: User;
    likes: number;
}