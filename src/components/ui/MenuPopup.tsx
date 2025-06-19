import { useState, useRef, useEffect } from 'react';
import { X, Star, Wallet, Music, QrCode, Settings, Bell, Lock } from 'lucide-react';
import { useRouter } from 'next/navigation';

// Menu items for QuickNews
const menuItems = [
    { icon: <Star className="w-5 h-5" />, label: 'Quick personalization', link: '/personalization' },
    { icon: <Settings className="w-5 h-5" />, label: 'Profile settings', link: '/profile-settings' },
    { icon: <Wallet className="w-5 h-5" />, label: 'Account preferences', link: '/account-preferences' },
    { icon: <Bell className="w-5 h-5" />, label: 'Notification settings', link: '/notification-settings' },
    { icon: <Lock className="w-5 h-5" />, label: 'Privacy controls', link: '/privacy-controls' },
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

export default function MenuPopup({ onClose }: { onClose: () => void }) {
    const router = useRouter();
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
                backgroundColor: `rgba(0, 0, 0, ${animationClass === 'animate-in' ? backdropOpacity : animationClass === 'animate-out' ? 0 : 0})`,
                backdropFilter: animationClass === 'animate-in' ? 'blur(4px)' : 'none'
            }}
        >
            <div
                ref={modalRef}
                className={`absolute bottom-0 left-0 right-0 bg-gray-900/95 backdrop-blur-xl border-t border-gray-700 rounded-t-3xl shadow-2xl transition-all ease-out ${isDragging ? 'duration-0' : 'duration-300'}`}
                style={{
                    maxHeight: '60vh',
                    transform: `translateY(${animationClass === 'animate-in' ? dragOffset : animationClass === 'animate-out' ? '100%' : '100%'}px)`,
                    opacity: animationClass === 'animate-in' ? modalOpacity : animationClass === 'animate-out' ? 0 : 0
                }}
            >
                {/* Drag Handle */}
                <div className="flex justify-center pt-3 pb-1 cursor-grab active:cursor-grabbing" {...dragHandlers}>
                    <div className="w-12 h-1.5 bg-gray-600 rounded-full transition-colors duration-200 hover:bg-gray-500"></div>
                </div>
                {/* Menu Items */}
                <div className="py-2">
                    {menuItems.map((item, idx) => (
                        <button
                            key={item.label}
                            className={`flex items-center w-full px-6 py-4 text-left text-white text-base font-medium border-b border-gray-800 last:border-b-0 hover:bg-gray-800/60 transition`}
                            onClick={() => { router.push(item.link) }}
                        >
                            <span className="mr-4 text-xl flex items-center">{item.icon}</span>
                            <span className="text-sm">{item.label}</span>
                        </button>
                    ))}
                </div>
            </div>
        </div>
    );
}   