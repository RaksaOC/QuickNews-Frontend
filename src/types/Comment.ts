import { Reply } from "./Replies";
import { User } from "./User";

export interface Comment {
    id: number;
    videoId: number;
    user: User;
    text: string;
    likes: number;
    replies: Reply[];
    timestamp: Date;
}