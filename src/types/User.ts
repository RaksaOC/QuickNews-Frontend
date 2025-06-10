import { Article } from "./Article";
import { Video } from "./Video";

export interface User {
    id: number;
    email: string;
    password: string;
    name: string;
    handle: string;
    avatar: string;
    bio?: string;
    location?: string;
    verified?: boolean;
    joinedAt: string;
    stats: {
        followers: number;
        following: number;
        posts: number;
    };
    posts: number[]; // Video IDs
    bookmarks: number[]; // Video IDs
    following: number; // User IDs
    followers: number; // User IDs
}