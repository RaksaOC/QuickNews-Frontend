import { Menu, Search } from "lucide-react";
import Category from "./Category";
import { div } from "framer-motion/client";
import { useRouter } from "next/navigation";

interface TopNavProps {
    category: string;
    onMenuClick: () => void;
    onCategoryChange: (category: string) => void;
}

const getResponsiveSize = (baseSize: number): string => {
    // Convert base size to vh units (700px = 100vh reference)
    const vhSize = (baseSize / 700) * 100;
    // Only use vh units for responsive scaling, with a minimum size to prevent text from becoming too small
    return `max(${baseSize * 0.5}px, ${vhSize}vh)`;
  };

export function TopNav({ onMenuClick, category, onCategoryChange }: TopNavProps) {
    const router = useRouter();
    return (
        <div className="absolute top-4 left-[14%] right-0 z-20 flex justify-between items-center px-4  "
            style={{
                maxWidth: getResponsiveSize(390),
            }}
        >
            {/* if have search button and menu button, change to justify-between */}
            <div className="w-full flex justify-center items-center">
                {/* <div className="rounded-full flex justify-center items-center p-2 border border-gray-500/50">
                    <Menu size={20} className="text-white" onClick={onMenuClick} />
                </div> */}
                <Category category={category} onCategoryChange={onCategoryChange} />
                {/* <div className="rounded-full flex justify-center items-center p-2 border border-gray-500/50" onClick={() => { router.push('/search') }}>
                    <Search size={20} className="text-white" />
                </div> */}
            </div>
        </div>
    )
}