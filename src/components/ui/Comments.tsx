'use client';

import { useState, useRef, useEffect } from 'react';
import { X, Send, Heart, MessageCircle, User } from 'lucide-react';
import { Comment } from '@/types/Comment';
import CommentCard from './CommentCard';

// Simple animation hook for smooth transitions
function useAnimation(isOpen: boolean) {
    const [shouldRender, setShouldRender] = useState(isOpen);
    const [animationClass, setAnimationClass] = useState('');

    useEffect(() => {
        if (isOpen) {
            setShouldRender(true);
            setTimeout(() => setAnimationClass('animate-in'), 10);
        } else {
            setAnimationClass('animate-out');
            setTimeout(() => setShouldRender(false), 300);
        }
    }, [isOpen]);

    return { shouldRender, animationClass };
}

// Drag hook for handling drag gestures
function useDrag(onClose: () => void) {
    const [isDragging, setIsDragging] = useState(false);
    const [dragOffset, setDragOffset] = useState(0);
    const [startY, setStartY] = useState(0);
    const dragRef = useRef<HTMLDivElement>(null);

    const handleDragStart = (clientY: number) => {
        setIsDragging(true);
        setStartY(clientY);
        setDragOffset(0);
        document.body.style.userSelect = 'none';
    };

    const handleDragMove = (clientY: number) => {
        if (!isDragging) return;

        const deltaY = clientY - startY;
        const newOffset = Math.max(0, deltaY); // Only allow dragging down
        setDragOffset(newOffset);
    };

    const handleDragEnd = () => {
        if (!isDragging) return;

        setIsDragging(false);
        document.body.style.userSelect = 'auto';

        // Close if dragged down more than 150px
        if (dragOffset > 150) {
            onClose();
        } else {
            // Snap back to original position
            setDragOffset(0);
        }
    };

    // Mouse events
    const onMouseDown = (e: React.MouseEvent) => {
        e.preventDefault();
        handleDragStart(e.clientY);
    };

    const onMouseMove = (e: MouseEvent) => {
        handleDragMove(e.clientY);
    };

    const onMouseUp = () => {
        handleDragEnd();
    };

    // Touch events
    const onTouchStart = (e: React.TouchEvent) => {
        handleDragStart(e.touches[0].clientY);
    };

    const onTouchMove = (e: TouchEvent) => {
        e.preventDefault();
        handleDragMove(e.touches[0].clientY);
    };

    const onTouchEnd = () => {
        handleDragEnd();
    };

    // Global event listeners
    useEffect(() => {
        if (isDragging) {
            document.addEventListener('mousemove', onMouseMove);
            document.addEventListener('mouseup', onMouseUp);
            document.addEventListener('touchmove', onTouchMove, { passive: false });
            document.addEventListener('touchend', onTouchEnd);
        }

        return () => {
            document.removeEventListener('mousemove', onMouseMove);
            document.removeEventListener('mouseup', onMouseUp);
            document.removeEventListener('touchmove', onTouchMove);
            document.removeEventListener('touchend', onTouchEnd);
        };
    }, [isDragging, dragOffset, startY]);

    return {
        dragRef,
        isDragging,
        dragOffset,
        dragHandlers: {
            onMouseDown,
            onTouchStart
        }
    };
}

interface CommentsProps {
    comments: Comment[];
    onClose: () => void;
}

export default function Comments({ onClose, comments }: CommentsProps) {
    const [isOpen, setIsOpen] = useState(true);
    const [comment, setComment] = useState('');
    const modalRef = useRef<HTMLDivElement>(null);
    const { shouldRender, animationClass } = useAnimation(isOpen);

    const { dragRef, isDragging, dragOffset, dragHandlers } = useDrag(() => {
        setIsOpen(false);
        onClose();
    });

    const handleClose = () => {
        setIsOpen(false);
        // Wait for animation to complete before calling onClose
        setTimeout(() => {
            onClose();
        }, 300); // Match the animation duration
    };

    // Handle click outside to close
    useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
            if (modalRef.current && !modalRef.current.contains(event.target as Node) && !isDragging) {
                handleClose();
            }
        }

        if (isOpen) {
            document.addEventListener('mousedown', handleClickOutside);
            document.body.style.overflow = 'hidden';
        }

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
            document.body.style.overflow = 'unset';
        };
    }, [isOpen, isDragging]);

    const handleSendComment = () => {
        // if (comment.trim()) {
        //     const newComment: Comment = {
        //         id: comments.length + 1,
        //         videoId: 1,
        //         user: creatorData[0],
        //         text: comment.trim(),
        //         likes: 0,
        //         replies: [],
        //         timestamp: new Date()
        //     };
        //     // setComments([newComment, ...comments]);
        //     setComment('');
        // }
    };

    const handleKeyPress = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
        if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault();
            handleSendComment();
        }
    };

    if (!shouldRender) return null;

    // Calculate opacity based on drag distance
    const backdropOpacity = Math.max(0.6 - (dragOffset / 300), 0);
    const modalOpacity = Math.max(1 - (dragOffset / 400), 0.3);

    return (
        <div
            className={`absolute inset-0 z-50 transition-all duration-300 ease-out overflow-y-hidden`}
            style={{
                backgroundColor: `rgba(0, 0, 0, ${animationClass === 'animate-in' ? backdropOpacity :
                    animationClass === 'animate-out' ? 0 : 0
                    })`,
                backdropFilter: animationClass === 'animate-in' ? 'blur(4px)' : 'none'
            }}
        >
            <div className='h-full flex flex-col justify-end'>
                <div
                    ref={modalRef}
                    className={`flex flex-col bg-gray-900/95 backdrop-blur-xl border-t border-gray-700 rounded-t-3xl shadow-2xl transition-all ease-out ${isDragging ? 'duration-0' : 'duration-300'
                        } h-3/4 max-h-[75vh]`}
                    style={{
                        transform: `translateY(${animationClass === 'animate-in' ? dragOffset :
                            animationClass === 'animate-out' ? '100%' : '100%'
                            }px)`,
                        opacity: animationClass === 'animate-in' ? modalOpacity :
                            animationClass === 'animate-out' ? 0 : 0
                    }}
                >
                    {/* Drag Handle */}
                    <div
                        className="flex justify-center pt-3 pb-1 cursor-grab active:cursor-grabbing flex-shrink-0"
                        {...dragHandlers}
                    >
                        <div className="w-12 h-1.5 bg-gray-600 rounded-full transition-colors duration-200 hover:bg-gray-500"></div>
                    </div>

                    {/* Header */}
                    <div
                        className="flex items-center justify-between px-4 py-2 border-b border-gray-700/50 cursor-grab active:cursor-grabbing flex-shrink-0"
                        {...dragHandlers}
                    >
                        <div className="flex items-center gap-3">
                            <h2 className="text-xl font-bold text-white">Comments</h2>
                            <span className="px-2 py-1 bg-gray-700/50 rounded-full text-xs text-gray-300 font-medium">
                                {comments.length}
                            </span>
                        </div>
                        <button
                            onClick={handleClose}
                            className="p-2 hover:bg-gray-700/50 rounded-full transition-all duration-200 hover:scale-110 text-gray-400 hover:text-white"
                        >
                            <X size={22} />
                        </button>
                    </div>

                    {/* Comments List - This is the key fix */}
                    <div className="flex-1 overflow-y-auto scrollbar-thin scrollbar-thumb-gray-600 scrollbar-track-transparent min-h-0">
                        {comments.length > 0 ? (
                            <div className="px-0">
                                {comments.map((comment, index) => (
                                    <div
                                        key={comment.id}
                                        className={`transition-all duration-300 ease-out ${animationClass === 'animate-in'
                                            ? 'translate-y-0 opacity-100'
                                            : 'translate-y-4 opacity-0'
                                            }`}
                                        style={{
                                            transitionDelay: animationClass === 'animate-in' ? `${index * 50}ms` : '0ms'
                                        }}
                                    >
                                        <CommentCard comment={comment} />
                                    </div>
                                ))}
                            </div>
                        ) : (
                            <div className="flex flex-col items-center justify-center h-full text-gray-400">
                                <MessageCircle size={48} className="mb-3 opacity-50" />
                                <p className="text-sm">No comments yet. Be the first to comment!</p>
                            </div>
                        )}
                    </div>

                    {/* Comment Input */}
                    <div className="px-4 py-3 border-t border-gray-700/50 bg-gray-900/80 backdrop-blur-sm flex-shrink-0">
                        <div className="flex items-end gap-3">
                            <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full border border-sky-500 flex items-center justify-center flex-shrink-0">
                                <User className="w-4 h-4 sm:w-6 sm:h-6 text-white" />
                            </div>
                            <div className="flex-1 relative">
                                <textarea
                                    value={comment}
                                    onChange={(e) => setComment(e.target.value)}
                                    onKeyPress={handleKeyPress}
                                    placeholder="Add a comment..."
                                    rows={1}
                                    className="w-full bg-gray-800/80 backdrop-blur-sm rounded-2xl px-3 py-2 sm:px-4 sm:py-3 text-sm text-white placeholder-gray-400 border border-gray-600/50 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500/50 transition-all duration-200 resize-none"
                                    style={{ minHeight: '36px', maxHeight: '120px' }}
                                    onInput={(e: React.FormEvent<HTMLTextAreaElement>) => {
                                        const target = e.target as HTMLTextAreaElement;
                                        target.style.height = 'auto';
                                        target.style.height = target.scrollHeight + 'px';
                                    }}
                                />
                            </div>
                            <button
                                onClick={handleSendComment}
                                disabled={!comment.trim()}
                                className={`p-2 sm:p-3 rounded-full transition-all duration-200 ${comment.trim()
                                    ? 'bg-blue-500 hover:bg-blue-600 text-white hover:scale-105 shadow-lg shadow-blue-500/25'
                                    : 'bg-gray-700 text-gray-400 cursor-not-allowed'
                                    }`}
                            >
                                <Send size={16} className="sm:hidden" />
                                <Send size={20} className="hidden sm:block" />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}