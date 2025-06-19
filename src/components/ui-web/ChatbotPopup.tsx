import { useState, useRef, useEffect } from 'react';
import { X, RefreshCw, CheckCircle2, Bot, User, Globe, FileText, BookOpenCheck, Search, Frame, Fullscreen, FullscreenIcon } from 'lucide-react';
import { Article } from '@/types/Article';

interface ChatbotPopupProps {
    onClose: (article: Article | undefined) => void;
    article: Article | undefined;
    onBackToArticle: (article: Article | undefined) => void;
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
        const newOffset = Math.max(0, deltaY);
        setDragOffset(newOffset);
    };

    const handleDragEnd = () => {
        if (!isDragging) return;
        setIsDragging(false);
        document.body.style.userSelect = 'auto';
        if (dragOffset > 150) {
            onClose();
        } else {
            setDragOffset(0);
        }
    };

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

// Mock chat data
const chatMessages = [
    {
        type: 'user',
        text: 'Is this a legit news',
        time: '09.16',
        avatar: '🧑‍💼',
    },
    {
        type: 'bot',
        text: "I can't believe Jihyo is turning 25 this year, time really flies. 😭",
        time: '09.12',
    },
];

// Action list for the right panel
const actionList = [
    { icon: <FileText className="w-5 h-5" />, label: 'Summarise this article' },
    { icon: <BookOpenCheck className="w-5 h-5" />, label: 'Provide me the sources' },
    { icon: <Globe className="w-5 h-5" />, label: 'Translate this article' },
    { icon: <Search className="w-5 h-5" />, label: 'Fact check this news' },
];

export default function ChatbotPopup({ onClose, article, onBackToArticle }: ChatbotPopupProps) {
    // Always open on mount
    const [isOpen, setIsOpen] = useState(true);
    const [showActions, setShowActions] = useState(true); // Toggle for demo
    const modalRef = useRef<HTMLDivElement>(null);
    const { shouldRender, animationClass } = useAnimation(isOpen);
    const [inputValue, setInputValue] = useState('');
    const [isFullscreen, setIsFullscreen] = useState(false);
    const { dragRef, isDragging, dragOffset, dragHandlers } = useDrag(() => {
        setIsOpen(false);
        setTimeout(() => {
            onClose(article);
        }, 300);
    });
    const handleClose = () => {
        setIsOpen(false);
        setTimeout(() => {
            onClose(article);
        }, 300);
    };

    const handleInputChange = (value: string) => {
        if (value === '') setShowActions(true);
        setInputValue(value);
    };

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
    if (!shouldRender) return null;
    const backdropOpacity = Math.max(0.6 - (dragOffset / 300), 0);
    const modalOpacity = Math.max(1 - (dragOffset / 400), 0.3);
    return (
        <div
            className={`absolute inset-0 z-50 transition-all duration-300 ease-out overflow-y-hidden`}
            style={{
                backgroundColor: `rgba(0, 0, 0, ${animationClass === 'animate-in' ? backdropOpacity : animationClass === 'animate-out' ? 0 : 0})`,
                backdropFilter: animationClass === 'animate-in' ? 'blur(4px)' : 'none',
            }}
        >
            <div className='h-full flex flex-col justify-end'>
                <div
                    ref={modalRef}
                    className={`flex flex-col bg-gray-900/95 backdrop-blur-xl border-t border-gray-700 rounded-t-3xl shadow-2xl transition-all ease-out ${isDragging ? 'duration-0' : 'duration-300'}  ${isFullscreen ? 'h-full' : 'h-3/4'}`}
                    style={{
                        transform: `translateY(${animationClass === 'animate-in' ? dragOffset : animationClass === 'animate-out' ? '100%' : '100%'}px)`,
                        opacity: animationClass === 'animate-in' ? modalOpacity : animationClass === 'animate-out' ? 0 : 0,
                    }}
                >
                    {/* Drag Handle */}
                    <div className="flex justify-center pt-3 pb-1 cursor-grab active:cursor-grabbing flex-shrink-0" {...dragHandlers}>
                        <div className="w-12 h-1.5 bg-gray-600 rounded-full transition-colors duration-200 hover:bg-gray-500"></div>
                    </div>

                    {/* Header */}
                    <div className="flex items-center justify-between px-4 py-2 border-b border-gray-700/50 cursor-grab active:cursor-grabbing flex-shrink-0" {...dragHandlers}>
                        <div className="flex items-center gap-3">
                            <Bot size={24} className="text-sky-500" />
                            <span className="text-lg font-bold text-white">QuickNews AI</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <button onClick={() => setIsFullscreen((v) => !v)} className="p-2 hover:bg-gray-700/50 rounded-full transition-all duration-200 text-gray-400 hover:text-white">
                                {!isFullscreen ? <FullscreenIcon size={20} /> : <Fullscreen size={20} />}
                            </button>
                            <button onClick={() => { onBackToArticle(article); handleClose() }} className="p-2 hover:bg-gray-700/50 rounded-full transition-all duration-200 text-gray-400 hover:text-white">
                                <X size={22} />
                            </button>
                        </div>
                    </div>

                    {/* Article Info */}
                    <div className="flex flex-row justify-between items-center gap-2 px-4 py-2 border-b border-gray-700/50 flex-shrink-0">
                        <div className="flex flex-col gap-1 max-w-[60%]">
                            <span className="text-sm font-semibold text-white line-clamp-2">{article?.headline}</span>
                            {/* <span className="text-xs text-gray-400">{article?.creator.name}</span> */}
                        </div>
                        <button className="text-sm bg-sky-500 text-white px-2 py-1 rounded-full" onClick={() => { onBackToArticle(article) }}>
                            Back to article
                        </button>
                    </div>

                    {/* Main Content */}
                    <div className="flex-1 overflow-y-auto scrollbar-thin scrollbar-thumb-gray-600 scrollbar-track-transparent min-h-0">
                        {showActions ? (
                            <div className="px-4">
                                <div className="flex items-center gap-2 mt-2 mb-4">
                                    <span className="text-md font-semibold text-white">Hey, What would you love to know about this article?</span>
                                </div>
                                <div className="flex flex-col gap-3 mb-4">
                                    {actionList.map((action, idx) => (
                                        <button key={idx} className="flex items-center gap-3 px-2 py-3 rounded-xl text-white text-sm font-medium transition-all duration-200 hover:bg-gray-800/50">
                                            {action.icon}
                                            {action.label}
                                        </button>
                                    ))}
                                </div>
                            </div>
                        ) : (
                            <div className="px-4">
                                <div className="flex flex-col gap-4">
                                    {/* User message */}
                                    <div className="flex items-end gap-2 self-end">
                                        <div className="bg-sky-500 text-white px-4 py-2 rounded-2xl rounded-br-none max-w-[70%] text-base">
                                            {chatMessages[0].text}
                                        </div>
                                        <span className="text-2xl">{chatMessages[0].avatar}</span>
                                    </div>
                                    <div className="flex items-end gap-2 self-start">
                                        <Bot className="w-6 h-6 text-sky-400 mb-2" />
                                        <div className="bg-gray-700 text-white px-4 py-2 rounded-2xl rounded-bl-none max-w-[70%] text-base">
                                            {chatMessages[1].text}
                                        </div>
                                    </div>
                                    <div className="flex flex-col gap-1 mt-2">
                                        <span className="text-xs text-gray-400 self-end">{chatMessages[0].time}</span>
                                        <span className="text-xs text-gray-400 self-start">{chatMessages[1].time}</span>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>

                    {/* Input */}
                    <div className="px-4 py-3 border-t border-gray-700/50 bg-gray-900/80 backdrop-blur-sm flex-shrink-0">
                        <div className="flex items-center gap-3">
                            <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full border border-sky-500 flex items-center justify-center flex-shrink-0">
                                <User className="w-4 h-4 sm:w-6 sm:h-6 text-white" />
                            </div>
                            <div className="flex-1 relative">
                                <textarea
                                    className="w-full bg-gray-800/80 backdrop-blur-sm rounded-2xl px-3 py-2 sm:px-4 sm:py-3 text-sm text-white placeholder-gray-400 border border-gray-600/50 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500/50 transition-all duration-200 resize-none"
                                    placeholder="Ask AI anything about this article..."
                                    value={inputValue}
                                    onChange={(e) => handleInputChange(e.target.value)}
                                    rows={1}
                                    style={{ minHeight: '36px', maxHeight: '120px' }}
                                    onInput={(e: React.FormEvent<HTMLTextAreaElement>) => {
                                        const target = e.target as HTMLTextAreaElement;
                                        target.style.height = 'auto';
                                        target.style.height = target.scrollHeight + 'px';
                                    }}
                                />
                            </div>
                            <button
                                onClick={() => { setShowActions(false); setInputValue('') }}
                                disabled={!inputValue.trim()}
                                className={`p-2 sm:p-3 rounded-full transition-all duration-200 ${inputValue.trim()
                                    ? 'bg-sky-500 hover:bg-sky-600 text-white hover:scale-105 shadow-lg shadow-sky-500/25'
                                    : 'bg-gray-700 text-gray-400 cursor-not-allowed'
                                    }`}
                            >
                                <svg width="16" height="16" className="sm:hidden" fill="none" viewBox="0 0 24 24" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="22" y1="2" x2="11" y2="13"></line><polygon points="22 2 15 22 11 13 2 9 22 2"></polygon></svg>
                                <svg width="20" height="20" className="hidden sm:block" fill="none" viewBox="0 0 24 24" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="22" y1="2" x2="11" y2="13"></line><polygon points="22 2 15 22 11 13 2 9 22 2"></polygon></svg>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}