import { User } from "./User";

export interface Article {
    id: number;
    headline: string;
    content: string;
    image: string;
    creator: User;
    likes: number;  
    createdAt: string;
}