import { Bell, Brain, Briefcase, Film, Heart, LaptopMinimal, Trophy, User, UserCheck } from "lucide-react"
import { useState, useEffect } from "react"

interface CategoriesProps {
    category: string;
    onCategoryChange: (category: string) => void;
}

const categories = [
    {
        id: "following",
        displayName: "Following",
        icon: <UserCheck />
    },
    {
        id: "foryou",
        displayName: "For You",
        icon: <User />
    },
    {
        id: "breaking",
        displayName: "Breaking",
        icon: <Bell />
    },
    {
        id: "tech",
        displayName: "Tech",
        icon: <LaptopMinimal />
    },
    {
        id: "sports",
        displayName: "Sports",
        icon: <Trophy />
    },
    {
        id: "entertainment",
        displayName: "Entertainment",
        icon: <Film />
    },
    {
        id: "business",
        displayName: "Business",
        icon: <Briefcase />
    },
    {
        id: "health",
        displayName: "Health",
        icon: <Heart />
    },
    {
        id: "science",
        displayName: "Science",
        icon: <Brain />
    },
]

export function Categories({ category, onCategoryChange }: CategoriesProps) {
    const [showText, setShowText] = useState(false);
    const [hoveredCategory, setHoveredCategory] = useState<string | null>(null);

    const currentIndex = categories.findIndex(cat => cat.id === category);

    // Show text briefly when category changes
    useEffect(() => {
        setShowText(true);
        const timer = setTimeout(() => {
            setShowText(false);
        }, 2000); // Show for 2 seconds

        return () => clearTimeout(timer);
    }, [category]);

    // Get the 5 categories to show (2 before, current, 2 after)
    const getVisibleCategories = () => {
        const startIndex = Math.max(0, currentIndex - 2);
        const endIndex = Math.min(categories.length, currentIndex + 3);
        return categories.slice(startIndex, endIndex);
    };

    const visibleCategories = getVisibleCategories();

    return (
        <div className="categories flex lg:flex-col gap-4 absolute top-4 left-2 w-full lg:w-auto justify-center items-center transition-all duration-700 ease-out pr-16">
            {visibleCategories.map((cat, index) => {
                const categoryIndex = categories.findIndex(c => c.id === cat.id);
                const distanceFromCurrent = Math.abs(categoryIndex - currentIndex);

                // Calculate opacity and size based on distance from current
                const opacity = distanceFromCurrent === 0 ? 1 : distanceFromCurrent === 1 ? 0.7 : 0.4;
                const scale = distanceFromCurrent === 0 ? 1 : distanceFromCurrent === 1 ? 0.9 : 0.8;

                // Calculate translateX based on distance from current
                let translateX = 0;
                if (distanceFromCurrent === 0) {
                    translateX = 10; // Selected item moves most to the right
                } else if (distanceFromCurrent === 1) {
                    translateX = 5; // Adjacent items move slightly right
                } else {
                    translateX = 0; // Furthest items stay in place
                }

                const shouldShowText = (category === cat.id && showText) || hoveredCategory === cat.id;

                return (
                    <div
                        key={cat.id}
                        className={`flex gap-4 items-center transition-all duration-700 ease-out`}
                        style={{
                            opacity,
                            transform: `translateX(${translateX}px) scale(${scale})`,
                        }}
                        onMouseEnter={() => setHoveredCategory(cat.id)}
                        onMouseLeave={() => setHoveredCategory(null)}
                    >
                        <button
                            onClick={() => onCategoryChange(cat.id)}
                            // disabled={scale <= 0.8}
                            className={`flex flex-col justify-center items-center p-2 border
                                 border-slate-500/80 rounded-full w-12 h-12 text-white transition-all
                                  duration-500 ease-out ${category === cat.id ? 'bg-sky-700/50 border-sky-500' : 'hover:bg-white/10 cursor-pointer bg-gray-900 lg:bg-transparent '}  
                                  ${scale <= 0.8 ? 'user-select-none select-none cursor-not-allowed' : ''} }
                            }`}
                        >
                            {cat.icon}
                        </button>
                        <div className="relative w-0 h-0 hidden lg:block">
                            <p className={`absolute left-0 -top-3 text-sm font-bold text-white transition-all duration-300 ease-out whitespace-nowrap ${shouldShowText ? 'opacity-100' : '-translate-x-4 opacity-0'}`}>
                                {cat.displayName}
                            </p>
                        </div>
                    </div>
                );
            })}
        </div>
    )
}