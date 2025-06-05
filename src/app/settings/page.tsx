'use client';

import { User, Lock, Shield, Share2, Bell, Tv, Music, Clock, Users, Video, Megaphone } from 'lucide-react';
import { useRouter } from 'next/navigation';

const accountItems = [
    { icon: <User className="w-5 h-5" />, label: "Account" },
    { icon: <Lock className="w-5 h-5" />, label: "Privacy" },
    { icon: <Shield className="w-5 h-5" />, label: "Security & permissions" },
    { icon: <Share2 className="w-5 h-5" />, label: "Share profile" },
];

const contentItems = [
    { icon: <Bell className="w-5 h-5" />, label: "Notifications" },
    { icon: <Clock className="w-5 h-5" />, label: "Activity center" },
    { icon: <Video className="w-5 h-5" />, label: "Content preferences" },
    { icon: <Users className="w-5 h-5" />, label: "Audience controls" },
    { icon: <Megaphone className="w-5 h-5" />, label: "Ads" },
];

function Section({ title, items }: { title: string; items: { icon: JSX.Element; label: string }[] }) {
    return (
        <div className="mb-6 px-2">
            <h2 className="text-gray-400 text-sm font-semibold mb-4 px-2">{title}</h2>
            <div className="bg-gray-900 rounded-xl overflow-hidden ">
                {items.map((item, idx) => (
                    <button
                        key={item.label}
                        className={`flex items-center w-full px-4 py-4 text-left text-white text-base font-medium border-b border-[#232323] last:border-b-0 hover:bg-[#232323] transition`}
                    >
                        <span className="mr-4 text-xl flex items-center">{item.icon}</span>
                        <span className="text-sm">{item.label}</span>
                        <span className="ml-auto text-gray-500">{'>'}</span>
                    </button>
                ))}
            </div>
        </div>
    );
}

export default function SettingsPage() {
    const router = useRouter();
    return (
        <div className="min-h-screen bg-black px-0 pt-4 pb-8">
            {/* Header */}
            <div className="flex items-center px-4 mb-10">
                <button className="mr-2 text-white text-2xl" onClick={() => { router.back() }}>{'<'}</button>
                <h1 className="text-md font-bold text-white">Settings and privacy</h1>
            </div>
            {/* Sections */}
            <Section title="Account" items={accountItems} />
            <Section title="Content & Display" items={contentItems} />
        </div>
    );
}