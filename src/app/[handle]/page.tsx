'use client';

import FollowersPopup from '@/components/ui2/FollowersPopup';
import NavBar from '@/components/ui2/NavBar';
import { formatStats } from '@/utils/formatStats';
import { CheckBadgeIcon } from '@heroicons/react/16/solid';
import { Settings, BookOpen, PlayCircle, Bookmark, ThumbsUp, MessageCircle, ArrowLeft, BadgeCheck, Clock, PlusCircle } from 'lucide-react';
import { useState } from 'react';

// Mock data
const followers = Array(6).fill({
    id: 1,
    name: 'Bluesnake260',
    avatar: '/avatars/avatar2.png',
    lastSeen: 'Last seen 5 min ago',
});

// Mock data
const profile = {
    name: 'Al Jazeera',
    avatar: '/aljazeera.png',
    verified: true,
    stats: [
        { label: 'Likes', value: '20k' },
        { label: 'Followers', value: '120k', followers: followers },
        { label: 'Posts', value: '200' },
    ],
    cover: '/cover.jpg',
};

const activities = [
    {
        id: 1,
        image: '/activity1.jpg',
        date: '20-3-2025',
        text: 'Just finished reading this amazing book. Highly recommend it before 24 hours! 📖',
        likes: 47000,
        comments: 47000,
        action: 'Read',
    },
    {
        id: 2,
        image: '/activity2.jpg',
        date: '20-3-2025',
        text: 'Just finished reading this amazing book. Highly recommend it before 24 hours! 📖',
        likes: 47000,
        comments: 47000,
        action: 'Read',
    },
    {
        id: 3,
        image: '/activity3.jpg',
        date: '20-3-2025',
        text: 'Just finished reading this amazing book. Highly recommend it before 24 hours! 📖',
        likes: 47000,
        comments: 47000,
        action: 'Read',
    },
];

// Card for activity/post
function PostCard({ image, date, text, likes, comments, action }: any) {
    return (
        <div className="bg-[#18181b] rounded-2xl p-3 flex items-center gap-3 mb-4">
            <img src={image} alt="" className="w-20 h-20 rounded-xl object-cover" />
            <div className="flex-1">
                <div className="flex items-center text-xs text-gray-300 mb-1">
                    <span className="mr-2 flex items-center gap-1">
                        <Clock size={16} className='text-sky-500' /> {date}
                    </span>
                </div>
                <div className="text-white text-sm mb-2">{text}</div>
                <div className="flex items-center gap-4">
                    <div className="flex items-center gap-1 text-gray-300 text-xs">
                        <ThumbsUp size={16} /> {formatStats(likes)}
                    </div>
                    <div className="flex items-center gap-1 text-gray-300 text-xs">
                        <MessageCircle size={16} /> {formatStats(comments)}
                    </div>
                    <button className="ml-auto bg-sky-500 text-white text-xs px-4 py-1 rounded-full font-medium">{action}</button>
                </div>
            </div>
        </div>
    );
}

export default function CreatorPage() {
    const [isFollowersPopupOpen, setIsFollowersPopupOpen] = useState(false);

    return (

        <div className='relative'>
            <div className=" bg-black h-[90%]">
                {/* Cover and header */}
                <div className="relative h-60 w-full">
                    <img
                        src={profile.cover}
                        alt="cover"
                        className="absolute inset-0 w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-black/90" />
                    <div className="absolute top-6 left-4">
                        <button className="w-10 h-10 flex items-center justify-center rounded-full bg-black/50">
                            <ArrowLeft className="text-white" size={22} />
                        </button>
                    </div>
                    <div className="absolute top-6 right-4">
                        <button className="w-10 h-10 flex items-center justify-center rounded-full bg-black/50">
                            <Settings className="text-white" size={22} />
                        </button>
                    </div>
                    <div className="absolute left-4 right-4 bottom-[-32px] flex items-center">
                        <img
                            src={profile.avatar}
                            alt={profile.name}
                            className="w-14 h-14 rounded-full border-4 border-[#FFB800] bg-white object-cover"
                        />
                        <div className="ml-4 flex items-center justify-between w-full">
                            <div className="flex items-center gap-2">
                                <span className="text-white text-xl font-semibold">{profile.name}</span>
                                <BadgeCheck className="text-sky-500" size={22} />
                            </div>
                            <button className='bg-sky-500 text-white text-xs px-3 py-1 rounded-full font-medium flex items-center gap-1'>
                                <PlusCircle size={22} className='text-white' />
                                Follow
                            </button>
                        </div>
                    </div>
                </div>

                {/* Stats */}
                <div className="flex justify-center gap-4 mt-16 mb-6">
                    {profile.stats.map((stat) => (
                        <div
                            key={stat.label}
                            className="flex flex-col items-center justify-center w-28 h-20 border border-gray-500/50 rounded-2xl"
                            onClick={() => {
                                if (stat.label === 'Followers') {
                                    setIsFollowersPopupOpen(true);
                                }
                            }}
                        >
                            <span className="text-white text-xl font-semibold">{stat.value}</span>
                            <span className="text-gray-300 text-sm">{stat.label}</span>
                        </div>
                    ))}
                </div>

                {/* Tabs */}
                <div className="flex justify-between items-center gap-16 mb-6 px-8">
                    <BookOpen className="text-white" size={28} />
                    <PlayCircle className="text-sky-500 bg-black rounded-full p-1" size={38} />
                    <Bookmark className="text-white" size={28} />
                </div>

                {/* Activity Feed */}
                <div className="px-4 flex-1 overflow-y-auto">
                    {activities.map((a) => (
                        <PostCard key={a.id} {...a} />
                    ))}
                </div>
            </div>
            <div className="h-[10%] sticky bottom-0">
                <NavBar />
            </div>
            {isFollowersPopupOpen && (
                <FollowersPopup followers={profile.stats[1].followers} onClose={() => setIsFollowersPopupOpen(false)} />
            )}
        </div>
    );
}