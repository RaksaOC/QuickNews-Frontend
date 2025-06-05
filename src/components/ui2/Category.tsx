// src/components/ui/Category.tsx
'use client';

import { useState } from 'react';

const categories = [
    { id: 'breaking', name: 'Breaking', style: 'px-2 py-1 rounded-full text-sm font-medium whitespace-nowrap transition-all duration-200 text-red-500' },
    { id: 'foryou', name: 'For You', style: 'px-2 py-1 rounded-full text-sm font-medium whitespace-nowrap transition-all duration-200' },
    { id: 'politics', name: 'Politics', style: 'px-2 py-1 rounded-full text-sm font-medium whitespace-nowrap transition-all duration-200' },
    { id: 'tech', name: 'Tech', style: 'px-2 py-1 rounded-full text-sm font-medium whitespace-nowrap transition-all duration-200' },
    { id: 'business', name: 'Business', style: 'px-2 py-1 rounded-full text-sm font-medium whitespace-nowrap transition-all duration-200' },
    { id: 'sports', name: 'Sports', style: 'px-2 py-1 rounded-full text-sm font-medium whitespace-nowrap transition-all duration-200' },
    { id: 'entertainment', name: 'Entertainment', style: 'px-2 py-1 rounded-full text-sm font-medium whitespace-nowrap transition-all duration-200' }
];

export default function Category({ onCategoryChange }: { onCategoryChange: (category: string) => void }) {
    function handleCategoryChange(category: string) {
        setActiveCategory(category);
        onCategoryChange(category);
    }
    const [activeCategory, setActiveCategory] = useState('foryou');

    return (
        <div className="relative flex items-center justify-between w-[70%]">
            {/* Categories Scroll Container */}
            <div className="flex-1 w-full overflow-x-auto scrollbar-hide">
                <div className="flex w-full items-center gap-2 px-0 py-1 ">
                    {categories.map((category) => (
                        <button
                            key={category.id}
                            onClick={() => setActiveCategory(category.id)}
                            className={` ${category.style}
                                            ${activeCategory === category.id
                                    ? 'text-sky-500 underline underline-offset-8 decoration-sky-500/50'
                                    : 'text-white hover:bg-gray-800/50'
                                }`}
                        >
                            {category.name}
                        </button>
                    ))}
                </div>
            </div>
        </div>
    );
}