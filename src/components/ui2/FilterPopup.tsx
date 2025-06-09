import { useState, useRef, useEffect } from 'react';
import { X, SlidersHorizontal, Calendar, Clock, Tag, Star, TrendingUp, Search, Filter, Check } from 'lucide-react';

interface FilterPopupProps {
    onClose: () => void;
}

// Filter categories data
const categories = [
    { id: 1, name: 'Technology', count: 128 },
    { id: 2, name: 'Business', count: 85 },
    { id: 3, name: 'Entertainment', count: 64 },
    { id: 4, name: 'Sports', count: 92 },
    { id: 5, name: 'Science', count: 45 },
    { id: 6, name: 'Health', count: 73 },
];

// Sort options
const sortOptions = [
    { id: 1, name: 'Most Recent', icon: Clock },
    { id: 2, name: 'Most Popular', icon: Star },
    { id: 3, name: 'Trending', icon: TrendingUp },
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

export default function FilterPopup({ onClose }: FilterPopupProps) {
    const [isOpen, setIsOpen] = useState(true);
    const [selectedCategories, setSelectedCategories] = useState<number[]>([]);
    const [selectedSort, setSelectedSort] = useState<number>(1);
    const [dateRange, setDateRange] = useState('all');
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

    const toggleCategory = (categoryId: number) => {
        setSelectedCategories(prev =>
            prev.includes(categoryId)
                ? prev.filter(id => id !== categoryId)
                : [...prev, categoryId]
        );
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
            className="absolute inset-0 z-[80] transition-all duration-300 ease-out w-full h-full"
            style={{
                backgroundColor: `rgba(0, 0, 0, ${animationClass === 'animate-in' ? backdropOpacity :
                    animationClass === 'animate-out' ? 0 : 0
                    })`,
                backdropFilter: animationClass === 'animate-in' ? 'blur(4px)' : 'none'
            }}
        >
            <div
                ref={modalRef}
                className={`absolute bottom-0 left-0 right-0 bg-gray-900/95 backdrop-blur-xl border-t border-gray-700 rounded-t-3xl shadow-2xl transition-all ease-out ${isDragging ? 'duration-0' : 'duration-300 overflow-y-scroll'
                    }`}
                style={{
                    minHeight: '70vh',
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
                    className="relative flex items-center justify-between px-6 py-2 border-b border-gray-700/50 cursor-grab active:cursor-grabbing"
                    {...dragHandlers}
                >
                    <div className="flex items-center gap-3">
                        <Filter className="w-5 h-5 text-white" />
                        <h2 className="text-xl font-bold text-white">Search Filters</h2>
                    </div>
                    <button
                        onClick={handleClose}
                        className="p-2 hover:bg-gray-700/50 rounded-full transition-all duration-200 hover:scale-110 text-gray-400 hover:text-white"
                    >
                        <X size={22} />
                    </button>
                </div>

                {/* Filter Content */}
                <div className="sticky top-0 z-50 p-6 space-y-6 overflow-y-scroll max-h-[60vh]">
                    {/* Sort Options */}
                    <div className="space-y-3">
                        <h3 className="text-sm font-medium text-gray-400">Sort By</h3>
                        <div className="grid grid-cols-3 gap-3">
                            {sortOptions.map((option) => (
                                <button
                                    key={option.id}
                                    onClick={() => setSelectedSort(option.id)}
                                    className={`flex items-center justify-center gap-2 p-3 rounded-xl transition-all duration-200 ${selectedSort === option.id
                                        ? 'bg-sky-500 text-white'
                                        : 'bg-gray-800/50 text-gray-400 hover:bg-gray-800'
                                        }`}
                                >
                                    <option.icon className="w-4 h-4" />
                                    <span className="text-sm font-medium">{option.name}</span>
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Date Range */}
                    <div className="space-y-3">
                        <h3 className="text-sm font-medium text-gray-400">Date Range</h3>
                        <div className="grid grid-cols-4 gap-3">
                            {['all', 'today', 'week', 'month'].map((range) => (
                                <button
                                    key={range}
                                    onClick={() => setDateRange(range)}
                                    className={`p-3 rounded-xl transition-all duration-200 ${dateRange === range
                                        ? 'bg-sky-500 text-white'
                                        : 'bg-gray-800/50 text-gray-400 hover:bg-gray-800'
                                        }`}
                                >
                                    <span className="text-sm font-medium capitalize">{range}</span>
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Categories */}
                    <div className="space-y-3">
                        <h3 className="text-sm font-medium text-gray-400">Categories</h3>
                        <div className="grid grid-cols-2 gap-3">
                            {categories.map((category) => (
                                <button
                                    key={category.id}
                                    onClick={() => toggleCategory(category.id)}
                                    className={`flex items-center justify-between p-3 rounded-xl transition-all duration-200 ${selectedCategories.includes(category.id)
                                        ? 'bg-sky-500 text-white'
                                        : 'bg-gray-800/50 text-gray-400 hover:bg-gray-800'
                                        }`}
                                >
                                    <span className="text-sm font-medium">{category.name}</span>
                                    <div className="flex items-center gap-2">
                                        <span className="text-xs opacity-75">({category.count})</span>
                                        {selectedCategories.includes(category.id) && (
                                            <Check className="w-4 h-4" />
                                        )}
                                    </div>
                                </button>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Action Buttons */}
                <div className="px-6 py-4 border-t border-gray-700/50">
                    <div className="flex gap-3">
                        <button
                            onClick={() => {
                                setSelectedCategories([]);
                                setSelectedSort(1);
                                setDateRange('all');
                            }}
                            className="flex-1 p-4 rounded-xl bg-gray-800/50 hover:bg-gray-800 transition-all duration-200 text-white font-medium"
                        >
                            Reset All
                        </button>
                        <button
                            onClick={handleClose}
                            className="flex-1 p-4 rounded-xl bg-sky-500  transition-all duration-200 text-white font-medium"
                        >
                            Apply Filters
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
