import { Creator } from "./User";

export interface Article {
    id: number;
    headline: string;
    content: string;
    image: string;
    link: string;
    creator: Creator;
}