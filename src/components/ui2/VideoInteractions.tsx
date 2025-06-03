'use client';

import { Heart, MessageCircle, Share } from "lucide-react";
import { useState } from "react";

interface VideoInteractionsProps {
    likes: number;
    comments: number;
    shares: number;
}


export function VideoInteractions({ likes, comments, shares }: VideoInteractionsProps) {
    const [isLiked, setIsLiked] = useState(false);
    const handleLike = () => {
        setIsLiked(!isLiked);
    }

    const likeAnimation = () => {
        if (isLiked) {
            return 'animate-bounce';
        }
        return 'animate-none';
    }
    return (
        <div className="flex flex-col absolute top-1/2 right-3">
            <div className="flex flex-col gap-2">
                <button className={`flex flex-col items-center justify-center rounded-full p-2 gap-1 transition-all duration-300 delay-100 `} onClick={handleLike}>
                    <Heart size={36} className={`text-sky-500 text-center ${isLiked ? 'fill-sky-500' : 'fill-none'} ${likeAnimation()}`} />
                    <span className="text-sm text-gray-500">{likes}</span>
                </button>
                <button className="flex flex-col items-center justify-center rounded-full p-2 gap-1">
                    <MessageCircle size={36} className="text-sky-500 text-center" />
                    <span className="text-sm text-gray-500">{comments}</span>
                </button>
                <button className="flex flex-col items-center justify-center rounded-full p-2 gap-1">
                    <Share size={36} className="text-sky-500 text-center" />
                    <span className="text-sm text-gray-500 text-center">{shares}</span>
                </button>
            </div>
        </div>
    )
}