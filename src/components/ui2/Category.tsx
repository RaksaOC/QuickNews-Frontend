// src/components/ui/Category.tsx
'use client';

const categories = [
    { id: 'following', name: 'Following', style: 'px-2 py-1 rounded-full text-sm font-medium whitespace-nowrap transition-all duration-200' },
    { id: 'foryou', name: 'For You', style: 'px-2 py-1 rounded-full text-sm font-medium whitespace-nowrap transition-all duration-200' },
    { id: 'breaking', name: 'Breaking', style: 'px-2 py-1 rounded-full text-sm font-medium whitespace-nowrap transition-all duration-200 text-red-500' },
    { id: 'tech', name: 'Tech', style: 'px-2 py-1 rounded-full text-sm font-medium whitespace-nowrap transition-all duration-200' },
    { id: 'sports', name: 'Sports', style: 'px-2 py-1 rounded-full text-sm font-medium whitespace-nowrap transition-all duration-200' },
    { id: 'entertainment', name: 'Entertainment', style: 'px-2 py-1 rounded-full text-sm font-medium whitespace-nowrap transition-all duration-200' },
    { id: 'business', name: 'Business', style: 'px-2 py-1 rounded-full text-sm font-medium whitespace-nowrap transition-all duration-200' },
    { id: 'health', name: 'Health', style: 'px-2 py-1 rounded-full text-sm font-medium whitespace-nowrap transition-all duration-200' },
    { id: 'science', name: 'Science', style: 'px-2 py-1 rounded-full text-sm font-medium whitespace-nowrap transition-all duration-200' },
];

interface CategoryProps {
    category: string;
    onCategoryChange: (category: string) => void;
}

export default function Category({ category, onCategoryChange }: CategoryProps) {
    function handleCategoryChange(categoryId: string) {
        onCategoryChange(categoryId);
    }

    return (
        <div className="relative flex items-center justify-between w-[70%]">
            {/* Categories Scroll Container */}
            <div className="flex-1 w-full overflow-x-auto scrollbar-hide">
                <div className="flex w-full items-center gap-2 px-0 py-1 ">
                    {categories.map((cat) => (
                        <button
                            key={cat.id}
                            onClick={() => handleCategoryChange(cat.id)}
                            className={` ${cat.style}
                                            ${category === cat.id
                                    ? 'text-sky-500 underline underline-offset-4 decoration-sky-500 decoration-2'
                                    : 'text-white'
                                }`}
                        >
                            {cat.name}
                        </button>
                    ))}
                </div>
            </div>
        </div>
    );
}