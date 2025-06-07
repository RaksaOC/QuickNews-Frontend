import { useState, useRef, useEffect } from 'react';
import { User, BadgeCheck, X, Save, MoreVertical, BookMarked, Heart, Eye, Bot, ChevronDown, Globe } from 'lucide-react';
import { div, image, title } from 'framer-motion/client';
import ChatbotPopup from './ChatbotPopup';
import { Article as ArticleType } from '@/types/Article';

interface ArticleProps {
    onClose: () => void;
    article: ArticleType | undefined;
    onShowChatbot: (show: boolean) => void;
}

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

export default function Article({ onClose, article, onShowChatbot }: ArticleProps) {
    const [isOpen, setIsOpen] = useState(true);
    const modalRef = useRef<HTMLDivElement>(null);
    const { shouldRender, animationClass } = useAnimation(isOpen);
    const [isLiked, setIsLiked] = useState(false);

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
        // Don't close the article if the chatbot is open

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

    if (!shouldRender) return null;

    // Calculate opacity based on drag distance
    const backdropOpacity = Math.max(0.6 - (dragOffset / 300), 0);
    const modalOpacity = Math.max(1 - (dragOffset / 400), 0.3);

    return (
        <div
            className={`absolute inset-0 z-50 transition-all duration-300 ease-out`}
            style={{
                backgroundColor: `rgba(0, 0, 0, ${animationClass === 'animate-in' ? backdropOpacity :
                    animationClass === 'animate-out' ? 0 : 0
                    })`,
                backdropFilter: animationClass === 'animate-in' ? 'blur(4px)' : 'none'
            }}
        >
            <div
                ref={modalRef}
                className={`absolute bottom-[0%] left-0 right-0 bg-gray-900/95 backdrop-blur-xl border-t border-gray-700 rounded-t-3xl shadow-2xl transition-all ease-out ${isDragging ? 'duration-0' : 'duration-300'
                    }`}
                style={{
                    minHeight: '98vh',
                    transform: `translateY(${animationClass === 'animate-in' ? dragOffset :
                        animationClass === 'animate-out' ? '100%' : '100%'
                        }px)`,
                    opacity: animationClass === 'animate-in' ? modalOpacity :
                        animationClass === 'animate-out' ? 0 : 0
                }}
            >
                {/* Drag Handle */}
                <div
                    className="flex justify-center pt-3 pb-1 cursor-grab active:cursor-grabbing"
                    {...dragHandlers}
                >
                    <div className="w-12 h-1.5 bg-gray-600 rounded-full transition-colors duration-200 hover:bg-gray-500"></div>
                </div>

                {/* Header */}
                <div
                    className="flex items-center justify-between px-4 py-2 border-b border-gray-700/50 cursor-grab active:cursor-grabbing"
                    {...dragHandlers}
                >
                    <div className="flex items-center gap-3">
                        <h2 className="text-xl font-bold text-white">Article</h2>
                    </div>
                    <button
                        onClick={handleClose}
                        className="p-2 hover:bg-gray-700/50 rounded-full transition-all duration-200 hover:scale-110 text-gray-400 hover:text-white"
                    >
                        <X size={22} />
                    </button>
                </div>

                {/* Content */}
                <div className="p-4 overflow-y-auto" style={{ maxHeight: 'calc(98vh - 90px)' }}>
                    {/* Title */}
                    <h1 className="text-2xl font-bold text-white mb-4">{article?.headline}</h1>

                    {/* Creator Info */}
                    {article?.creator && (
                        <div className='flex flex-row gap-2 justify-between items-center py-2'>
                            <div className="flex flex-row gap-2 justify-between items-center py-2">
                                <div className="rounded-full border border-sky-500 w-10 h-10 flex items-center justify-center">
                                    <User size={20} className="text-gray-300" />
                                </div>
                                <div className="flex flex-row gap-1 items-center text-sm text-white">
                                    <p>{article?.creator.name}</p>
                                    <BadgeCheck size={20} className="text-sky-500" />
                                </div>
                                <button className="text-white text-sm border bg-gray-500/30 backdrop-blur-sm border-gray-500/50 rounded-full px-2 py-1">
                                    Follow
                                </button>
                            </div>
                            <div className='flex flex-row gap-2 items-center rounded-full bg-gray-500/30 backdrop-blur-sm border border-gray-500/50 p-2 justify-center'>
                                <span className='text-white text-sm'>EN</span>
                                <ChevronDown size={16} className='text-white' />
                            </div>
                        </div>
                    )}

                    {/* Featured Image */}
                    <div className="w-full aspect-video bg-gray-800 rounded-xl mb-6 overflow-hidden relative group">
                        <img
                            src={article?.image || "https://picsum.photos/seed/article/800/450"}
                            alt={article?.headline}
                            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                        />
                    </div>

                    {/* Engagement */}
                    <div className="flex w-full gap-4  items-center py-2">
                        <div className='flex flex-row gap-2 items-center rounded-full   justify-center transition-all duration-300' onClick={() => setIsLiked(!isLiked)}>
                            <Heart size={20} className={`${isLiked ? 'text-red-500 fill-red-500 animate-like-pop transition-all duration-300' : 'text-white'}`} />
                            <span className={`${isLiked ? 'text-red-500' : 'text-white'} text-sm`}>100</span>
                        </div>
                        <div className='flex flex-row gap-2 items-center rounded-full  justify-center'>
                            <Eye size={20} className='text-white' />
                            <span className='text-white text-sm'>100</span>
                        </div>
                        <div className='flex flex-row gap-2 items-center rounded-full  justify-center'>
                            <BookMarked size={20} className='text-white' />
                            <span className='text-white text-sm'>100</span>
                        </div>
                    </div>

                    {/* Article Content */}
                    <div className="prose prose-invert max-w-none text-white">
                        <p className="text-gray-300 leading-relaxed whitespace-pre-line text-md">
                            {article?.content}
                        </p>
                    </div>
                </div>
            </div>
            {/* Ask AI Button - Bottom Right */}
            {
                <button
                    className="absolute bottom-6 right-6 z-50 flex items-center gap-2 px-4 py-2 rounded-full bg-gray-900 backdrop-blur-xl border border-slate-500 shadow-lg  transition-all"
                    style={{ minWidth: 0 }}
                    onClick={() => { onShowChatbot(true); console.log('clicked chatbot button') }}
                >
                    {/* You can use an SVG or emoji for the robot icon */}
                    <span className="text-2xl"><Bot size={20} className='text-sky-500' /></span>
                    <span className="text-white ">Ask AI</span>
                    {/* <ChevronDown size={20} className='text-white' /> */}
                </button>
            }

        </div>
    );
}