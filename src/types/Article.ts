import { Creator } from "./Creator";

export interface Article {
    id: number;
    headline: string;
    content: string;
    image: string;
    link: string;
    creator: Creator;
}