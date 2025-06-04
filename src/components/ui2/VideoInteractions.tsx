'use client';

import { Heart, MessageCircle, Share } from "lucide-react";
import { useState } from "react";

interface VideoInteractionsProps {
    likes: number;
    comments: number;
    shares: number;
    onCommentClick: () => void;
    onShareClick: () => void;
}

function formatCount(count: number): string {
    if (count >= 1000) {
        return (count / 1000).toFixed(count % 1000 === 0 ? 0 : 1) + 'k';
    }
    return count.toString();
}

export function VideoInteractions({ likes, comments, shares, onCommentClick, onShareClick }: VideoInteractionsProps) {
    const [isLiked, setIsLiked] = useState(false);
    
    const handleLike = () => {
        setIsLiked(!isLiked);
    }

    const currentLikes = isLiked ? likes + 1 : likes;

    return (
        <div className="absolute bottom-44 right-4 flex flex-col gap-6 z-40">
            {/* Like Button */}
            <div className="flex flex-col items-center gap-2">
                <button 
                    className="w-12 h-12 rounded-full bg-black/30 backdrop-blur-sm border border-white/20 flex items-center justify-center transition-all duration-300 " 
                    onClick={handleLike}
                >
                    <Heart 
                        size={22} 
                        className={`transition-all duration-300 ${
                            isLiked 
                                ? 'text-red-500 fill-red-500 animate-like-pop' 
                                : 'text-white'
                        }`} 
                    />
                </button>
                <span className="text-white text-sm font-medium drop-shadow-lg">
                    {formatCount(currentLikes)}
                </span>
            </div>

            {/* Comment Button */}
            <div className="flex flex-col items-center gap-2">
                <button 
                    className="w-12 h-12 rounded-full bg-black/30 backdrop-blur-sm border border-white/20 flex items-center justify-center transition-all duration-300 " 
                    onClick={onCommentClick}
                >
                    <MessageCircle size={22} className="text-white" />
                </button>
                <span className="text-white text-sm font-medium drop-shadow-lg">
                    {formatCount(comments)}
                </span>
            </div>

            {/* Share Button */}
            <div className="flex flex-col items-center gap-2">
                <button 
                    className="w-12 h-12 rounded-full bg-black/30 backdrop-blur-sm border border-white/20 flex items-center justify-center transition-all duration-300 " 
                    onClick={onShareClick}
                >
                    <Share size={22} className="text-white" />
                </button>
                <span className="text-white text-sm font-medium drop-shadow-lg">
                    {shares === 0 ? 'share' : formatCount(shares)}
                </span>
            </div>
        </div>
    );
}