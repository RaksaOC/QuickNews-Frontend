'use client';

import FollowersPopup from '@/components/ui2/FollowersPopup';
import NavBar from '@/components/ui2/NavBar';
import { DEMO_ARTICLES } from '@/data/Article';
import { OTHER_USERS } from '@/data/DemoUsers';
import { LEGIT_VIDEOS } from '@/data/LegitVideos';
import { DEMO_VIDEOS } from '@/data/Video';
import { formatStats } from '@/utils/formatStats';
import { Settings, BookOpen, PlayCircle, Bookmark, ThumbsUp, MessageCircle, ArrowLeft, BadgeCheck, Clock } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

const mockProfile = OTHER_USERS[0];

// Card for activity/post
function PostCard({ image, date, text, likes, action }: { image: string, date: string, text: string, likes: number, action: string }) {
  return (
    <div className="bg-[#18181b] rounded-2xl p-3 flex items-center gap-3 mb-4">
      <img src={image} alt="" className="w-20 h-20 rounded-xl object-cover" />
      <div className="flex-1">
        <div className="flex items-center text-xs text-gray-300 mb-1">
          <span className="mr-2 flex items-center gap-1">
            <Clock size={16} className='text-sky-500' /> {date || ''}
            <span className="text-gray-300 text-xs">QuickNews</span>
          </span>
        </div>
        <div className="text-white text-sm mb-2">{text || 'This is a test text'}</div>
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-1 text-gray-300 text-xs">
            <ThumbsUp size={16} /> {formatStats(likes || 10000)}
          </div>
          <button className="ml-auto bg-sky-500 text-white text-xs px-4 py-1 rounded-full font-medium">Read</button>
        </div>
      </div>
    </div>
  );
}

export default function ProfilePage() {
  const [activeTab, setActiveTab] = useState<'videos' | 'articles' | 'saved'>('videos');
  const router = useRouter();
  const [showFollowers, setShowFollowers] = useState(false);
  return (
    <div className='relative max-h-screen h-full'>
      <div className=" relative bg-black max-h-screen h-full overflow-y-scroll">
        {/* Cover and header */}
        <div className="relative h-60 w-full">
          <img
            src={'/assets/avatar1.jpg'}
            alt="cover"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-black/90" />
          <div className="absolute top-6 right-4">
            <button className="w-10 h-10 flex items-center justify-center rounded-full bg-black/50" onClick={() => { router.push('/settings') }}>
              <Settings className="text-white" size={22} />
            </button>
          </div>
          <div className="absolute left-6 bottom-[-32px] flex items-center">
            <img
              src={mockProfile.avatar}
              alt={mockProfile.name}
              className="w-20 h-20 rounded-full border-4 border-sky-500 bg-white object-cover"
            />
            <div className="ml-4 flex flex-col">
              <div className="flex items-center gap-2">
                <span className="text-white text-xl font-semibold">{mockProfile.name}</span>
                <BadgeCheck className="text-sky-500" size={22} />
              </div>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="flex justify-between gap-4 mt-16 mb-6 px-4">
          {Object.entries(mockProfile.stats).map(([key, value]) => (
            <div
              key={key}
              className="flex flex-col items-center justify-center w-full h-20 border border-gray-500/50 rounded-2xl"
              onClick={key === 'followers' ? () => { setShowFollowers(true) } : undefined}
            >
              <span className="text-white text-xl font-semibold">{formatStats(value)}</span>
              <span className="text-gray-300 text-sm">{key.charAt(0).toUpperCase() + key.slice(1)}</span>
            </div>
          ))}
        </div>

        {/* Tabs */}
        <div className="mx-auto flex justify-center items-center gap-48 mb-6 px-8">
          {/* <button onClick={() => setActiveTab('articles')}>
            <BookOpen className={`${activeTab === 'articles' ? 'text-sky-500' : 'text-white'}`} size={28} />
          </button> */}
          <button onClick={() => setActiveTab('videos')}>
            <PlayCircle className={`rounded-full p-1 ${activeTab === 'videos' ? 'text-sky-500 bg-black' : 'text-gray-400'}`} size={38} />
          </button>
          <button onClick={() => setActiveTab('saved')}>
            <Bookmark className={`${activeTab === 'saved' ? 'text-sky-500' : 'text-white'}`} size={28} />
          </button>
        </div>

        {/* Activity Feed */}
        {activeTab === 'saved' && (
          <div className="px-4 flex-1 overflow-y-auto pb-24">
            <div className="grid grid-cols-2 gap-3">
              {LEGIT_VIDEOS.map((video) => (
                <div key={video.id} className="relative">
                  <div className="relative aspect-[9/16] bg-gray-800 rounded-lg overflow-hidden flex items-center justify-center">
                    <img src={'/assets/logo2.png'} alt={video.headline} className=" object-cover" />
                    <div className="absolute top-2 left-2 bg-black/70 rounded-full px-2 py-1 flex items-center gap-1 border border-sky-500">
                      <div className="w-3 h-3 rounded-full border border-white flex items-center justify-center">
                        <ThumbsUp className="w-2 h-2 text-white" />
                      </div>
                      <span className="text-xs text-white font-medium">{formatStats(video.likes || 10000)}</span>
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
        {
          activeTab === 'videos' && (
            <div className='flex  justify-center  w-full px-4 pb-24'>
              <div className="flex flex-col items-center justify-center w-full max-w-xs  rounded-2xl shadow-lg p-8 mb-6">
                <h1 className='text-white text-xl font-bold text-center mb-2'>Become a Creator</h1>
                <p className='text-gray-300 text-center mb-4 text-sm'>Sign up as a creator to start posting your own news videos and grow your audience on QuickNews.</p>
                <button className='bg-sky-500 hover:bg-sky-600 transition text-white px-6 py-2  rounded-full text-sm font-semibold shadow-lg'>Sign up</button>
              </div>
            </div>
          )
        }

        {/* {activeTab === 'articles' && (
          <div className="px-4 flex-1 overflow-y-auto pb-24">
            {DEMO_ARTICLES.map((a) => (
              <PostCard key={a.id} image={a.image} date={a.createdAt} text={a.headline} likes={a.likes} action="Read" />
            ))}
          </div>
        )} */}

        {/* {activeTab === 'saved' && (
          <div className="px-4 flex-1 overflow-y-auto pb-24">
            {DEMO_ARTICLES.map((a) => (
              <PostCard key={a.id} image={a.image} date={a.createdAt} text={a.headline} likes={a.likes} action="Read" />
            ))}
          </div>
        )} */}
      </div>
      <div className='sticky bottom-0 z-10'>
        <NavBar />
      </div>
      {showFollowers && <FollowersPopup followers={[{
        id: 1,
        name: 'John Doe',
        avatar: '/assets/avatar1.jpg',
        verified: false,
      }]} onClose={() => { setShowFollowers(false) }} />}
    </div>
  );
}