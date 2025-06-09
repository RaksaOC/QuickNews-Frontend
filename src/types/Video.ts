import { User} from "./User";
import { Comment } from "./Comment";
import { Article } from "./Article";

export interface Video {
    id: number;
    headline: string;
    content: string;
    image: string;
    url: string;
    creator: User;
    comments: Comment[];
    likes: number;
    shares: number;
    createdAt: string;
    article?: Article;
    category: string;
}