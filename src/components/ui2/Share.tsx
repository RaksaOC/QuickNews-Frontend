import { useState, useRef, useEffect } from 'react';
import { X, Share2, Flag, Bookmark, Link2, MessageCircle, MoreHorizontal, Facebook, Linkedin, Mail, Pin, Rocket } from 'lucide-react';

interface ShareProps {
    onClose: () => void;
}

// Social media platforms data
const socialPlatforms = [
    { id: 1, name: 'Facebook', icon: <Facebook></Facebook>, color: 'bg-blue-600' },
    { id: 2, name: 'Twitter', icon: <X></X>, color: 'bg-sky-500' },
    { id: 3, name: 'WhatsApp', icon: <MessageCircle></MessageCircle>, color: 'bg-green-500' },
    { id: 4, name: 'Telegram', icon: <MessageCircle></MessageCircle>, color: 'bg-blue-400' },
    { id: 5, name: 'LinkedIn', icon: <Linkedin></Linkedin>, color: 'bg-blue-700' },
    { id: 6, name: 'Reddit', icon: <Rocket></Rocket>, color: 'bg-orange-500' },
    { id: 7, name: 'Pinterest', icon: <Pin></Pin>, color: 'bg-red-500' },
    { id: 8, name: 'Email', icon: <Mail></Mail>, color: 'bg-gray-500' },
];

// Action buttons data
const actionButtons = [
    { id: 1, name: 'Report', icon: Flag, color: 'text-red-500' },
    { id: 2, name: 'Save', icon: Bookmark, color: 'text-blue-500' },
    { id: 3, name: 'Copy Link', icon: Link2, color: 'text-green-500' },
    { id: 4, name: 'More', icon: MoreHorizontal, color: 'text-gray-400' },
];

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

export default function Share({ onClose }: ShareProps) {
    const [isOpen, setIsOpen] = useState(true);
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

    if (!shouldRender) return null;

    // Calculate opacity based on drag distance
    const backdropOpacity = Math.max(0.6 - (dragOffset / 300), 0);
    const modalOpacity = Math.max(1 - (dragOffset / 400), 0.3);

    return (
        <div
            className={`absolute bottom-0 inset-0 z-50 transition-all duration-300 ease-out`}
            style={{
                backgroundColor: `rgba(0, 0, 0, ${animationClass === 'animate-in' ? backdropOpacity :
                    animationClass === 'animate-out' ? 0 : 0
                    })`,
                backdropFilter: animationClass === 'animate-in' ? 'blur(4px)' : 'none'
            }}
        >
            <div
                ref={modalRef}
                className={`absolute bottom-0 left-0 right-0 bg-gray-900/95 backdrop-blur-xl border-t border-gray-700 rounded-t-3xl shadow-2xl transition-all ease-out ${isDragging ? 'duration-0' : 'duration-300'
                    }`}
                style={{
                    maxHeight: '85vh',
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
                    className="flex items-center justify-between px-6 py-2 border-b border-gray-700/50 cursor-grab active:cursor-grabbing"
                    {...dragHandlers}
                >
                    <div className="flex items-center gap-3">
                        <h2 className="text-xl font-bold text-white">Share</h2>
                    </div>
                    <button
                        onClick={handleClose}
                        className="p-2 hover:bg-gray-700/50 rounded-full transition-all duration-200 hover:scale-110 text-gray-400 hover:text-white"
                    >
                        <X size={22} />
                    </button>
                </div>

                {/* Social Media Platforms */}
                <div className="p-6">
                    <div className="flex gap-4 overflow-x-auto pb-4 scrollbar-hide">
                        {socialPlatforms.map((platform) => (
                            <button
                                key={platform.id}
                                className={`flex flex-col items-center gap-2 min-w-[80px] p-3 rounded-xl transition-all duration-200 hover:scale-105 text-white`}
                            >
                                {platform.icon}
                                <span className="text-xs font-medium text-white">{platform.name}</span>
                            </button>
                        ))}
                    </div>
                </div>

                {/* Action Buttons */}
                <div className="px-6 pb-6">
                    <div className="grid grid-cols-2 gap-3">
                        {actionButtons.map((action) => (
                            <button
                                key={action.id}
                                className="flex items-center gap-3 p-4 rounded-xl bg-gray-800/50  transition-all duration-200"
                            >
                                <action.icon className={`w-5 h-5 ${action.color}`} />
                                <span className="text-sm font-medium text-white">{action.name}</span>
                            </button>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}