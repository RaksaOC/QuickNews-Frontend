'use client';

import { Comment } from "@/types/Comment";
import { Bookmark, Heart, MessageCircle, Share } from "lucide-react";
import { useState } from "react";

interface VideoInteractionsProps {
    likes: number;
    comments: Comment[];
    shares: number;
    isLiked: boolean;
    onCommentClick: () => void;
    onShareClick: () => void;
    onIsLiked: (isLiked: boolean) => void;
    onSaveClick: () => void;
    isSaved: boolean;
}

function formatCount(count: number): string {
    if (count >= 1000) {
        return (count / 1000).toFixed(count % 1000 === 0 ? 0 : 1) + 'k';
    }
    return count.toString();
}

export function VideoInteractions({ likes, comments, shares, onCommentClick, onShareClick, isLiked, onIsLiked, onSaveClick, isSaved }: VideoInteractionsProps) {
    const currentLikes = isLiked ? likes + 1 : likes;

    return (

        
        <div className="absolute bottom-48 right-3 flex flex-col gap-2 z-40">
            {/* to make the interactions be more up, use bottom-1/3*/}
            <div className="flex flex-col items-center gap-2" onClick={() => { onIsLiked(!isLiked) }}>
                <button
                    className={`w-12 h-12 rounded-full bg-black/30 backdrop-blur-sm border border-white/20 flex items-center justify-center transition-all duration-300 ${isLiked ? 'text-red-500 fill-red-500 ' : 'text-white'}`}
                >
                    <Heart
                        size={22}
                        className={`transition-all duration-300 ${isLiked
                            ? 'text-sky-500 fill-sky-500 animate-like-pop'
                            : 'text-white'
                            }`}
                    />
                </button>
                <span className="text-white text-sm font-medium drop-shadow-lg">
                    {formatCount(currentLikes)}
                </span>
            </div>

            {/* Comment Button */}
            <div className="flex flex-col items-center gap-2" onClick={onCommentClick}>
                <button
                    className="w-12 h-12 rounded-full bg-black/30 backdrop-blur-sm border border-white/20 flex items-center justify-center transition-all duration-300 "

                >
                    <MessageCircle size={22} className="text-white" />
                </button>
                <span className="text-white text-sm font-medium drop-shadow-lg">
                    {formatCount(comments.length)}
                </span>
            </div>

            {/* Share Button */}
            <div className="flex flex-col items-center gap-2" onClick={onShareClick}>
                <button
                    className="w-12 h-12 rounded-full bg-black/30 backdrop-blur-sm border border-white/20 flex items-center justify-center transition-all duration-300 "

                >
                    <Share size={22} className="text-white" />
                </button>
                <span className="text-white text-sm font-medium drop-shadow-lg">
                    {shares === 0 ? 'Share' : formatCount(shares)}
                </span>
            </div>

            <div className="flex flex-col items-center gap-2" onClick={onSaveClick}>
                <button
                    className="w-12 h-12 rounded-full bg-black/30 backdrop-blur-sm border border-white/20 flex items-center justify-center transition-all duration-300 "
                >
                    <Bookmark size={22} className={` ${isSaved ? 'fill-sky-500 text-sky-500 animate-like-pop' : 'text-white'}`} />
                </button>
                <span className="text-white text-sm font-medium drop-shadow-lg">
                    Save
                </span>
            </div>
        </div>
    );
}