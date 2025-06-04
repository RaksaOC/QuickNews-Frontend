import { Heart, MessageCircle } from "lucide-react";
import { useState } from "react";
import { User } from "lucide-react";
import { Comment } from "@/types/Comment";

// Comment Card Component
function CommentCard({ comment }: { comment: Comment }) {
    const [isLiked, setIsLiked] = useState(false);

    return (
        <div className="flex gap-3 p-4  transition-colors">
            {/* Profile Picture */}


            {/* Comment Content */}
            <div className="flex-1">
                <div className="flex items-center gap-2">
                    <div className="flex-shrink-0">
                        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-gray-600 to-gray-700 flex items-center justify-center">
                            <User className="w-6 h-6 text-gray-300" />
                        </div>
                    </div>
                    <div className="flex gap-4">
                        <span className="font-medium text-sm text-white">{comment.user}</span>
                        <span className="text-gray-500 text-xs">{comment.timestamp}</span>
                    </div>
                </div>
                <p className="text-sm mt-2 text-gray-200 line-clamp-6">{comment.text}</p>

                {/* Interaction Buttons */}
                <div className="flex items-center gap-4 mt-3 justify-between">
                    <div className="flex items-center gap-4 ">
                        <span className="text-xs font-medium text-gray-400">{comment.likes + (isLiked ? 1 : 0)} likes</span>
                        
                        <button className="flex items-center gap-1 text-gray-400 hover:text-blue-400 transition-colors duration-200">
                            <MessageCircle size={16} />
                            <span className="text-xs font-medium">{comment.replies} replies</span>
                        </button>
                    </div>
                    <button
                        onClick={() => setIsLiked(!isLiked)}
                        className={`flex items-center gap-1 transition-all duration-200 hover:scale-105 ${isLiked ? 'text-red-500' : 'text-gray-400 hover:text-red-400'
                            }`}
                    >
                        <Heart
                            size={16}
                            className={`transition-all duration-200 ${isLiked ? 'fill-red-500 text-red-500 animate-like-pop' : ''
                                }`}
                        />
                    </button>
                </div>
            </div>
        </div>
    );
}

export default CommentCard;