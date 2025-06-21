import { Star, User } from "lucide-react";

export function Profile() {
    return (
        <div className="fixed top-4 right-4  lg:flex hidden  items-center justify-between bg-gray-700/30 backdrop-blur-sm shadow-xl border border-slate-500 rounded-full text-white transition-all duration-200 px-6 py-2 ">
            {/* followers */}
            <div className="flex items-center justify-center gap-2 pr-4">
                <Star className="w-4 h-4" />
                <span className="text-sm">100</span>
            </div>
            {/* followers */}
            <div className="flex items-center justify-center gap-2 pr-4">
                <Star className="w-4 h-4" />
                <span className="text-sm">100</span>
            </div>

            <div className="border-l border-slate-500 pl-4">
                <div className="flex items-center justify-center p-1  border border-slate-500 rounded-full">
                    <User className="w-6 h-6" />
                </div>

            </div>

        </div>
    )
}