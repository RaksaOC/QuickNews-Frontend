'use client';

import { Comment } from "@/types/Comment";
import { formatStats } from "@/utils/formatStats";
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


export function VideoInteractions({ likes, comments, shares, onCommentClick, onShareClick, isLiked, onIsLiked, onSaveClick, isSaved }: VideoInteractionsProps) {
    const currentLikes = isLiked ? likes + 1 : likes;

    return (

        
        <div className="flex flex-col gap-2 z-50  justify-center items-center">
            {/* to make the interactions be more up, use bottom-1/3*/}
            <div className="flex flex-col items-center gap-2 mt-52" onClick={() => { onIsLiked(!isLiked) }}>
                <button
                    className={`lg:w-12 lg:h-12 w-10 h-10 rounded-full bg-black/30 backdrop-blur-sm border border-white/20 flex items-center justify-center transition-all duration-300 ${isLiked ? 'text-red-500 fill-red-500 ' : 'text-white'}`}
                >
                    <Heart
                        className={`lg:size-6 size-4 transition-all duration-300 ${isLiked
                            ? 'text-sky-500 fill-sky-500 animate-like-pop'
                            : 'text-white'
                            }`}
                    />
                </button>
                <span className="text-white lg:text-sm text-xs font-medium drop-shadow-lg">
                    {formatStats(currentLikes)}
                </span>
            </div>

            {/* Comment Button */}
            <div className="flex flex-col items-center gap-2" onClick={onCommentClick}>
                <button
                    className="lg:w-12 lg:h-12 w-10 h-10 rounded-full bg-black/30 backdrop-blur-sm border border-white/20 flex items-center justify-center transition-all duration-300 "

                >
                    <MessageCircle className="lg:size-6 size-4 text-white" />
                </button>
                <span className="text-white lg:text-sm text-xs font-medium drop-shadow-lg">
                    {formatStats(comments.length)}
                </span>
            </div>

            {/* Share Button */}
            <div className="flex flex-col items-center gap-2" onClick={onShareClick}>
                <button
                    className="lg:w-12 lg:h-12 w-10 h-10 rounded-full bg-black/30 backdrop-blur-sm border border-white/20 flex items-center justify-center transition-all duration-300 "

                >
                    <Share className="lg:size-6 size-4 text-white" />
                </button>
                <span className="text-white lg:text-sm text-xs font-medium drop-shadow-lg">
                    {shares === 0 ? 'Share' : formatStats(shares)}
                </span>
            </div>

            <div className="flex flex-col items-center gap-2" onClick={onSaveClick}>
                <button
                    className="lg:w-12 lg:h-12 w-10 h-10 rounded-full bg-black/30 backdrop-blur-sm border border-white/20 flex items-center justify-center transition-all duration-300 "
                >
                    <Bookmark className={`lg:size-6 size-4 ${isSaved ? 'fill-sky-500 text-sky-500 animate-like-pop' : 'text-white'}`} />
                </button>
                <span className="text-white lg:text-sm text-xs font-medium drop-shadow-lg">
                    Save
                </span>
            </div>
        </div>
    );
}