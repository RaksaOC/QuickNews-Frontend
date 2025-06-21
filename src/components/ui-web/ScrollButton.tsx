import { ArrowDown, ArrowUp } from "lucide-react";

export default function ScrollButton() {
    return (
        <div className="fixed  top-[45%] right-4 flex-col gap-4 lg:flex hidden">
            <button className="p-6 bg-gray-700/30 backdrop-blur-sm shadow-xl border border-slate-500 rounded-full text-white transition-all duration-200 hover:bg-gray-500/50 cursor-pointer">
                <ArrowUp />
            </button>
            <button className="p-6 bg-gray-700/30 backdrop-blur-sm shadow-xl border border-slate-500 rounded-full text-white transition-all duration-200 hover:bg-gray-500/50 cursor-pointer">
                <ArrowDown />
            </button>
        </div>
    )
}