import { Menu, Search } from "lucide-react";
import Category from "./Category";
import { div } from "framer-motion/client";
import { useRouter } from "next/navigation";

interface TopNavProps {
    category: string;
    onMenuClick: () => void;
    onCategoryChange: (category: string) => void;
}

export function TopNav({ onMenuClick, category, onCategoryChange }: TopNavProps) {
    const router = useRouter();
    return (
        <div className="absolute top-4 left-0 right-0 z-20 flex justify-between items-center px-4  ">
            <div className="w-full flex justify-between items-center">
                <div className="rounded-full flex justify-center items-center p-2 border border-gray-500/50">
                    <Menu size={20} className="text-white" onClick={onMenuClick} />
                </div>
                <Category category={category} onCategoryChange={onCategoryChange} />
                <div className="rounded-full flex justify-center items-center p-2 border border-gray-500/50" onClick={() => { router.push('/search') }}>
                    <Search size={20} className="text-white" />
                </div>
            </div>
        </div>
    )
}