import { Reply } from "@/types/Replies";
import { Heart, User } from "lucide-react";
import { useState } from "react";

export default function Replies({ replies }: { replies: Reply[] }) {
    const [likedReplies, setLikedReplies] = useState<{ [id: string]: boolean }>({});

    return (

        <div className="w-full flex flex-col items-start justify-center pl-4 pr-4">
            <div className="w-full flex flex-col items-start justify-center border-l-4 border-dashed border-slate-500  gap-2 pl-4">
                {replies.map((reply) => (
                    <div key={reply.id} className="w-full">
                        <div className="flex gap-2 justify-between w-full">
                            <div className="flex gap-3 py-2">
                                {/* Profile Picture */}
                                <div className="flex-shrink-0">
                                    <div className="w-8 h-8 rounded-full bg-gradient-to-br from-gray-600 to-gray-700 flex items-center justify-center">
                                        <img src={reply.user.avatar} alt={reply.user.name} className="w-full h-full rounded-full" />
                                    </div>
                                </div>
                                {/* Reply Content */}
                                <div className="flex-1">
                                    <div className="flex items-center gap-2">
                                        <span className="font-medium text-xs text-white">{reply.user.name}</span>
                                        <span className="text-gray-500 text-xs">{reply.createdAt.toLocaleString()}</span>
                                    </div>
                                    <p className="text-xs mt-1 text-gray-200 line-clamp-6">{reply.content}</p>
                                </div>
                            </div>
                            <div className="flex gap-2">
                                <button
                                    className="flex items-center gap-1 transition-colors duration-200"
                                    onClick={() =>
                                        setLikedReplies((prev) => ({
                                            ...prev,
                                            [reply.id]: !prev[reply.id],
                                        }))
                                    }
                                >
                                    <Heart
                                        size={16}
                                        className={`${likedReplies[reply.id]
                                            ? 'text-red-500 fill-red-500 animate-like-pop'
                                            : 'text-gray-400'
                                            }`}
                                    />
                                </button>
                            </div>
                        </div>
                        <div className="flex gap-2">
                            <button className="flex items-center gap-1 text-gray-400 hover:text-blue-400 transition-colors duration-200">
                                <span className="text-xs font-medium">{reply.likes} likes</span>
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
