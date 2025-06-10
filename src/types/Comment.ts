import { Reply } from "./Replies";
import { User } from "./User";

export interface Comment {
    id: number;
    videoId: number;
    user: User;
    content: string;
    likes: number;
    replies: Reply[];
    createdAt: string;
}