'use client';

import FollowersPopup from '@/components/ui2/FollowersPopup';
import NavBar from '@/components/ui2/NavBar';
import { creatorData } from '@/data/Users';
import { formatStats } from '@/utils/formatStats';
import { CheckBadgeIcon } from '@heroicons/react/16/solid';
import { Settings, BookOpen, PlayCircle, Bookmark, ThumbsUp, MessageCircle, ArrowLeft, BadgeCheck, Clock, PlusCircle, Search } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { useState, useEffect, useRef } from 'react';
import { articleData } from '@/data/Article';
import { videoData } from '@/data/Video';

// Mock data
const user = creatorData[0];
const profile = {
    ...user,
    stats: [
        { label: 'Likes', value: '20k' },
        { label: 'Followers', value: user.followers.toString(), followers: user.followers },
        { label: 'Posts', value: '200' },
    ]
}

const articles = articleData;
const videos = videoData;

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
    const router = useRouter();
    const [isFollowersPopupOpen, setIsFollowersPopupOpen] = useState(false);
    const [activeTab, setActiveTab] = useState<'videos' | 'articles' | 'saved'>('videos');
    const [isScrolledPastCover, setIsScrolledPastCover] = useState(false);
    const scrollContainerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const scrollContainer = scrollContainerRef.current;
        if (!scrollContainer) return;

        const handleScroll = () => {
            // Cover height is 240px (h-60) minus header height, so around 180px
            const coverHeight = 180;
            const scrollTop = scrollContainer.scrollTop;
            setIsScrolledPastCover(scrollTop > coverHeight);
        };

        scrollContainer.addEventListener('scroll', handleScroll);
        return () => scrollContainer.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div className='relative max-h-screen h-screen'>
            <div ref={scrollContainerRef} className="bg-black max-h-screen overflow-y-scroll">
                {/* Sticky Header that overlays everything */}
                <div className={`sticky top-0 left-0 right-0 flex justify-between items-center px-4 py-4 z-50 transition-colors duration-300 ${isScrolledPastCover ? 'bg-black' : 'bg-transparent'}`}>
                    <button className="w-10 h-10 flex items-center justify-center rounded-full bg-black/50" onClick={() => { router.push('/') }}>
                        <ArrowLeft className="text-white" size={22} />
                    </button>
                    <span className='text-white text-xl font-semibold'>{profile.name}</span>
                    <button className="w-10 h-10 flex items-center justify-center rounded-full bg-black/50">
                        <Search className="text-white" size={22} />
                    </button>
                </div>

                <div>
                    {/* Cover section */}
                    <div className="relative h-60 w-full -mt-20">
                        <img
                            src={"/assets/avatar1.jpg"
                                // || profile.avatar
                            }
                            alt="cover"
                            className="absolute inset-0 w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-black/90" />

                        <div className="absolute bottom-[-32px] flex items-center w-full px-4">
                            <img
                                src={
                                    "/assets/avatar1.jpg"
                                    // || profile.avatar
                                }
                                alt={profile.name}
                                className="w-20 h-20 rounded-full border-4 border-sky-500 bg-white object-cover"
                            />
                            <div className="ml-4 flex items-center justify-between w-full ">
                                <div className="flex items-center gap-2">
                                    <span className="text-white text-xl font-semibold">{profile.name}</span>
                                    <BadgeCheck className="text-white fill-sky-500" size={22} />
                                </div>
                                <button className='bg-sky-500 text-white text-xs px-4 py-2 rounded-full font-medium flex items-center gap-1'>
                                    Follow
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Stats */}
                <div className="flex justify-between gap-4 mt-16 mb-6 px-4">
                    {profile.stats.map((stat) => (
                        <div
                            key={stat.label}
                            className="flex flex-col items-center justify-center w-full h-20 border border-gray-500/50 rounded-2xl"
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
                    <button onClick={() => setActiveTab('videos')}>
                        <PlayCircle className={`rounded-full p-1 ${activeTab === 'videos' ? 'text-sky-500 bg-black' : 'text-gray-400'}`} size={38} />
                    </button>
                    <button onClick={() => setActiveTab('articles')}>
                        <BookOpen className={`${activeTab === 'articles' ? 'text-sky-500' : 'text-white'}`} size={28} />
                    </button>
                    <button onClick={() => setActiveTab('saved')}>
                        <Bookmark className={`${activeTab === 'saved' ? 'text-sky-500' : 'text-white'}`} size={28} />
                    </button>
                </div>

                {/* Content based on active tab */}
                {activeTab === 'videos' && (
                    <div className="px-4 flex-1 overflow-y-auto pb-8">
                        <div className="grid grid-cols-2 gap-3">
                            {videos.map((video) => (
                                <div key={video.id} className="relative">
                                    <div className="relative aspect-[9/16] bg-gray-800 rounded-lg overflow-hidden flex items-center justify-center">
                                        <img src={'/assets/logo2.png'} alt={video.headline} className="object-cover" />
                                        <div className="absolute top-2 left-2 bg-black/70 rounded-full px-2 py-1 flex items-center gap-1 border border-sky-500">
                                            <div className="w-3 h-3 rounded-full border border-white flex items-center justify-center">
                                                <PlayCircle className="w-2 h-2 text-white" />
                                            </div>
                                            <span className="text-xs text-white font-medium">{'0'}</span>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-2 py-2">
                                        <img src={'/assets/logo2.png'} alt={video.headline} className="w-3 h-3 rounded-full" />
                                        <p className="text-xs text-white">QuickNews</p>
                                    </div>
                                    <div className="mt-2">
                                        <p className="text-sm text-white leading-tight line-clamp-2">
                                            {video.headline}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                )}

                {activeTab === 'articles' && (
                    <div className="px-4 flex-1 overflow-y-auto pb-24">
                        {articles.map((a) => (
                            <PostCard key={a.id} image={a.image} date="20-3-2025" text={a.headline} likes={47000} comments={47000} action="Read" />
                        ))}
                    </div>
                )}

                {activeTab === 'saved' && (
                    <div className="px-4 flex-1 overflow-y-auto pb-24">
                        {articles.map((a) => (
                            <PostCard key={a.id} image={a.image} date="20-3-2025" text={a.headline} likes={47000} comments={47000} action="Read" />
                        ))}
                    </div>
                )}
            </div>

            {isFollowersPopupOpen && (
                <FollowersPopup followers={profile.stats[1]?.followers ? [profile.stats[1].followers] : [{
                    id: 1,
                    name: 'Bluesnake260',
                    avatar: '/assets/avatar1.jpg',
                    verified: false,
                    lastSeen: 'Last seen 5 min ago',
                }]} onClose={() => setIsFollowersPopupOpen(false)} />
            )}
        </div>
    );
}