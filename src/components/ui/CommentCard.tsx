import { Heart, MessageCircle } from "lucide-react";
import { useState } from "react";
import { User } from "lucide-react";
import { Comment } from "@/types/Comment";
import Replies from "./Replies";

// Comment Card Component
function CommentCard({ comment }: { comment: Comment }) {
    const [isLiked, setIsLiked] = useState(false);
    const [showReplies, setShowReplies] = useState(false);

    const handleShowReplies = () => {
        setShowReplies(!showReplies);
    }

    return (
        <div className="w-full h-full flex flex-col items-center justify-center">
            <div className="flex w-full gap-3 p-4  transition-colors">
                {/* Comment Content */}
                <div className="flex-1">
                    <div className="flex items-center gap-2">
                        <div className="flex-shrink-0">
                            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-gray-600 to-gray-700 flex items-center justify-center">
                                <img src={comment.user.avatar} alt={comment.user.name} className="w-full h-full rounded-full" />
                            </div>
                        </div>
                        <div className="flex gap-4">
                            <span className="font-medium text-sm text-white">{comment.user.name}</span>
                            <span className="text-gray-500 text-xs">{comment.createdAt}</span>
                        </div>
                    </div>
                    <p className="text-sm mt-2 text-gray-200 line-clamp-6">{comment.content}</p>

                    {/* Interaction Buttons */}
                    <div className="flex items-center gap-4 mt-3 justify-between">
                        <div className="flex items-center gap-4 ">
                            <span className="text-xs font-medium text-gray-400">{comment.likes + (isLiked ? 1 : 0)} likes</span>
                            <button onClick={handleShowReplies} className="flex items-center gap-1 text-gray-400  transition-colors duration-200">
                                <MessageCircle size={16} />
                                <span className="text-xs font-medium">{comment.replies.length} replies</span>
                            </button>
                        </div>
                        <button
                            onClick={() => setIsLiked(!isLiked)}
                            className={`flex items-center gap-1 transition-all duration-200 ${isLiked ? 'text-sky-500' : 'text-gray-400'}`}
                        >
                            <Heart
                                size={16}
                                className={`transition-all duration-200 ${isLiked ? 'fill-sky-500 text-sky-500 animate-like-pop' : ''
                                    }`}
                            />
                        </button>
                    </div>
                </div>
            </div>
            {showReplies && <Replies replies={comment.replies} />}
        </div>
    );
}

export default CommentCard;