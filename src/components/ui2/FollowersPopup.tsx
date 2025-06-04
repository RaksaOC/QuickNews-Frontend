'use client';

import { useState, useRef, useEffect } from 'react';
import { X } from 'lucide-react';



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
        if (dragOffset > 150) {
            onClose();
        } else {
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
            onTouchStart,
        },
    };
}

interface FollowersPopupProps {
    followers: any[] | undefined;
    onClose: () => void;
}

export default function FollowersPopup({ followers, onClose }: FollowersPopupProps) {
    const [isOpen, setIsOpen] = useState(true);
    const modalRef = useRef<HTMLDivElement>(null);
    const { shouldRender, animationClass } = useAnimation(isOpen);

    const { dragRef, isDragging, dragOffset, dragHandlers } = useDrag(() => {
        setIsOpen(false);
        onClose();
    });

    const handleClose = () => {
        setIsOpen(false);
        setTimeout(() => {
            onClose();
        }, 300);
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

    const backdropOpacity = Math.max(0.6 - dragOffset / 300, 0);
    const modalOpacity = Math.max(1 - dragOffset / 400, 0.3);

    return (
        <div
            className="absolute  inset-0 z-50 transition-all duration-300 ease-out"
            style={{
                backgroundColor: `rgba(0, 0, 0, ${animationClass === 'animate-in' ? backdropOpacity : animationClass === 'animate-out' ? 0 : 0
                    })`,
                backdropFilter: animationClass === 'animate-in' ? 'blur(4px)' : 'none',
            }}
        >
            <div
                ref={modalRef}
                className={`absolute bottom-[0%] left-0 right-0 bg-gray-900/95 backdrop-blur-xl border-t border-gray-700 rounded-t-3xl shadow-2xl transition-all ease-out ${isDragging ? 'duration-0' : 'duration-300'
                    }`}
                style={{
                    maxHeight: '85vh',
                    transform: `translateY(${animationClass === 'animate-in'
                        ? dragOffset
                        : animationClass === 'animate-out'
                            ? '100%'
                            : '100%'
                        }px)`,
                    opacity: animationClass === 'animate-in' ? modalOpacity : animationClass === 'animate-out' ? 0 : 0,
                }}
            >
                {/* Drag Handle */}
                <div className="flex justify-center pt-3 pb-1 cursor-grab active:cursor-grabbing" {...dragHandlers}>
                    <div className="w-12 h-1.5 bg-gray-600 rounded-full transition-colors duration-200 hover:bg-gray-500"></div>
                </div>

                {/* Header */}
                <div
                    className="flex items-center justify-between px-4 py-2 border-b border-gray-700/50 cursor-grab active:cursor-grabbing"
                    {...dragHandlers}
                >
                    <h2 className="text-xl font-bold text-white">Followers</h2>
                    <button
                        onClick={handleClose}
                        className="p-2 hover:bg-gray-700/50 rounded-full transition-all duration-200 hover:scale-110 text-gray-400 hover:text-white"
                    >
                        <X size={28} />
                    </button>
                </div>

                {/* Followers List */}
                <div
                    className="overflow-y-auto scrollbar-thin scrollbar-thumb-gray-600 scrollbar-track-transparent"
                    style={{ height: 'calc(60vh - 80px)' }}
                >
                    {followers!.map((f, idx) => (
                        <div
                            key={idx}
                            className="flex items-center justify-between px-4 py-4 border-b border-gray-700/50"
                        >
                            <div className="flex items-center gap-4">
                                <img
                                    src={f.avatar}
                                    alt={f.name}
                                    className="w-14 h-14 rounded-full object-cover"
                                />
                                <div>
                                    <div className="text-white font-medium text-sm">{f.name}</div>
                                </div>
                            </div>
                            <button className="bg-sky-500 text-white px-6 py-2 rounded-full font-semibold text-sm shadow hover:bg-sky-600 transition-all">
                                Follow
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
