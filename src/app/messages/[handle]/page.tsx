'use client';

import { ArrowLeft, Phone, Video, Info, Mic, Check, ChevronLeft } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';

const messages = [
    {
        id: 1,
        text: "I can't believe Jihyo is turning 25 this year, time really flies. 😭",
        time: '09.12',
        fromMe: false,
    },
    {
        id: 2,
        text: "Yeah, it feels like just yesterday when she debuted with TWICE. 😌",
        time: '09.16',
        fromMe: true,
        read: true,
    },
    {
        id: 3,
        text: "I can't believe Jihyo is turning 25 this year, time really flies. 😭",
        time: '09.12',
        fromMe: false,
    },
    {
        id: 'date-1',
        type: 'date',
        date: 'Sat, 17/10',
    },
    {
        id: 4,
        text: "Yeah, it feels like just yesterday when she debuted with TWICE. 😌",
        time: '09.16',
        fromMe: true,
        read: true,
    },
    {
        id: 5,
        text: "I can't believe Jihyo is turning 25 this year, time really flies. 😭",
        time: '09.12',
        fromMe: false,
    },
    {
        id: 6,
        text: "Yeah, it feels like just yesterday when she debuted with TWICE. 😌",
        time: '09.16',
        fromMe: true,
        read: true,
    },
];

export default function ConversationPage() {
    const router = useRouter();
    
    return (
        <motion.div 
            className="h-full bg-black flex flex-col z-50 relative"
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ 
                type: 'tween',
                ease: 'easeInOut',
                duration: 0.3
            }}
        >
            {/* Header */}
            <div className="flex sticky top-0 z-10 items-center justify-between px-2 py-4 pb-4 border-b bg-black border-gray-500/50">
                <div className="flex items-center gap-3">
                    <button onClick={() => router.back()}>
                        <ChevronLeft className="text-white" size={22} />
                    </button>
                    <div className="relative">
                        <img
                            src="/avatars/avatar6.png"
                            alt="white_goose"
                            className="w-12 h-12 rounded-full border-2 border-sky-500 object-cover"
                        />
                        <span className="absolute bottom-1 right-1 w-3 h-3 bg-green-400 border-2 border-black rounded-full" />
                    </div>
                    <div className="flex flex-col ml-2">
                        <span className="text-white font-semibold text-sm">white_goose</span>
                        <span className="text-green-400 text-xs font-medium">Online now</span>
                    </div>
                </div>
                <div className="flex items-center gap-4">
                    <Phone className="text-white" size={20} />
                    <Video className="text-white" size={20} />
                    <Info className="text-white" size={20} />
                </div>
            </div>

            {/* Messages */}
            <div className="flex-1 px-2 py-4 overflow-y-auto flex flex-col gap-2 bg-black">
                {messages.map((msg, idx) =>
                    msg.type === 'date' ? (
                        <div key={msg.id} className="flex items-center my-4">
                            <div className="flex-1 h-px bg-gray-500/50" />
                            <span className="mx-4 text-gray-400 text-xs">{msg.date}</span>
                            <div className="flex-1 h-px bg-gray-500/50" />
                        </div>
                    ) : (
                        <div
                            key={msg.id}
                            className={`flex ${msg.fromMe ? 'justify-end' : 'justify-start'}`}
                        >
                            <div
                                className={`max-w-[75%] ${msg.fromMe
                                    ? 'bg-sky-500 text-white rounded-2xl rounded-br-md'
                                    : 'bg-gray-800 text-white rounded-2xl rounded-bl-md'
                                    } px-5 py-3 mb-1`}
                            >
                                <span className="block text-sm">{msg.text}</span>
                                <div className="flex items-center gap-1 mt-2">
                                    <span className="text-xs text-white/60">{msg.time}</span>
                                    {msg.fromMe && msg.read && (
                                        <Check className="w-4 h-4 text-sky-300" />
                                    )}
                                </div>
                            </div>
                        </div>
                    )
                )}
            </div>

            {/* Input Bar */}
            <div className="px-2 py-4 sticky bottom-0 bg-black flex items-center gap-2 border-t border-gray-500/50 z-10">
                <div className="flex-1">
                    <div className="flex items-center bg-[#18181b] border border-gray-500/50 rounded-full px-4 py-3">
                        <span className="text-gray-400 mr-3">{'>'}</span>
                        <input
                            className="bg-transparent outline-none text-white placeholder:text-gray-400 w-full text-base"
                            placeholder="Type Messages Here"
                        />
                    </div>
                </div>
                <button className="ml-2 w-12 h-12 rounded-full bg-sky-500 flex items-center justify-center">
                    <Mic className="text-white" size={24} />
                </button>
            </div>
        </motion.div>
    );
}