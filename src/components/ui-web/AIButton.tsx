import { Bot } from "lucide-react";

export function AIButton() {
    return (
        <div className="fixed bottom-4 right-4 bg-gray-500/30 backdrop-blur-sm shadow-xl border border-slate-500 rounded-full text-white transition-all duration-200 flex items-center gap-2 px-4 py-2 hover:bg-sky-500/20 cursor-pointer">
            <Bot className="w-6 h-6" />
            <span className="text-sm">Ask AI</span>
        </div>
    )
}