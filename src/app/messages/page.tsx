'use client';

import { useRouter } from 'next/navigation';
import { Search, ArrowLeft, Settings } from 'lucide-react';
import DMConversationItem from '@/components/ui2/DMItem';
import NavBar from '@/components/ui2/NavBar';

// Mock data
const frequentContacts = [
  { id: 1, name: 'Alina Brooks', avatar: '/assets/avatar1.jpg', online: true },
  { id: 2, name: 'Carlos Mendes', avatar: '/assets/avatar2.jpg', online: true },
  { id: 3, name: 'Felix Tran', avatar: '/assets/avatar1.jpg', online: true },
  { id: 4, name: 'Riya Kapoor', avatar: '/assets/avatar2.jpg', online: true },
  { id: 5, name: 'Jonas Becker', avatar: '/assets/avatar1.jpg', online: true },
  { id: 6, name: 'Yuki Nakamura', avatar: '/assets/avatar2.jpg', online: true },
  { id: 6, name: 'Yuki Nakamura', avatar: '/assets/avatar2.jpg', online: true },
  { id: 6, name: 'Yuki Nakamura', avatar: '/assets/avatar2.jpg', online: true },
  { id: 6, name: 'Yuki Nakamura', avatar: '/assets/avatar2.jpg', online: true },
  { id: 6, name: 'Yuki Nakamura', avatar: '/assets/avatar2.jpg', online: true },
  { id: 6, name: 'Yuki Nakamura', avatar: '/assets/avatar2.jpg', online: true },
  { id: 6, name: 'Yuki Nakamura', avatar: '/assets/avatar2.jpg', online: true },
  { id: 6, name: 'Yuki Nakamura', avatar: '/assets/avatar2.jpg', online: true },
  { id: 6, name: 'Yuki Nakamura', avatar: '/assets/avatar2.jpg', online: true },
];


const conversations = [
  { id: 1, name: 'Bluesnake260', avatar: '/assets/avatar2.jpg', lastSeen: 'Last seen 5 min ago', time: '10 min ago', bg: 'bg-green-200' },
  { id: 2, name: 'NightFalcon', avatar: '/assets/avatar2.jpg', lastSeen: 'Last seen 2 min ago', time: '5 min ago', bg: 'bg-orange-200' },
  { id: 3, name: 'LunarMist', avatar: '/assets/avatar1.jpg', lastSeen: 'Last seen 20 min ago', time: '30 min ago', bg: 'bg-purple-200' },
  { id: 4, name: 'CrimsonPeak', avatar: '/assets/avatar1.jpg', lastSeen: 'Last seen just now', time: '1 min ago', bg: 'bg-blue-200' },
  { id: 5, name: 'TechNomad', avatar: '/assets/avatar2.jpg', lastSeen: 'Last seen 8 min ago', time: '12 min ago', bg: 'bg-blue-200' },
  { id: 6, name: 'WanderBot', avatar: '/assets/avatar1.jpg', lastSeen: 'Last seen 1 hr ago', time: '45 min ago', bg: 'bg-yellow-200' },
  { id: 7, name: 'EchoQueen', avatar: '/assets/avatar2.jpg', lastSeen: 'Last seen 3 hr ago', time: '2 hr ago', bg: 'bg-yellow-200' },
  { id: 8, name: 'SolarByte', avatar: '/assets/avatar1.jpg', lastSeen: 'Last seen yesterday', time: 'Yesterday', bg: 'bg-yellow-200' },
  { id: 9, name: 'ZetaWave', avatar: '/assets/avatar2.jpg', lastSeen: 'Last seen 10 sec ago', time: 'Just now', bg: 'bg-yellow-200' },
  { id: 10, name: 'NebulaDrift', avatar: '/assets/avatar1.jpg', lastSeen: 'Last seen 30 min ago', time: '35 min ago', bg: 'bg-yellow-200' },
  { id: 11, name: 'NovaKnight', avatar: '/assets/avatar2.jpg', lastSeen: 'Last seen 6 min ago', time: '9 min ago', bg: 'bg-yellow-200' },
];




export default function DirectMessagesScreen() {
  const router = useRouter();

  return (
    <div className="  relative  ">
      <div className=" bg-black h-full">
        {/* Header */}
        <div className="flex sticky top-0 z-10 items-center justify-center px-2 pt-4 pb-6 bg-black">
          <p className="text-lg font-semibold text-white">Direct Messages</p>
        </div>

        {/* Search Bar */}
        <div className="px-4 pb-2">
          <div className="flex items-center bg-black/0 border border-gray-500/50 rounded-full px-4 py-3">
            <Search className="text-gray-400 mr-3" size={20} />
            <input
              className="bg-transparent outline-none text-white placeholder:text-gray-400 w-full text-base"
              placeholder="Search messages"
            />
          </div>
        </div>

        {/* Frequently Contacted */}
        <div className="px-4 pt-2 pb-4">
          <h2 className="text-lg font-semibold text-white mb-2">Frequently contacted</h2>
          <div className="flex overflow-x-auto scrollbar-hide">
            {frequentContacts.map((c) => (
              <div key={c.id} className="flex flex-col items-center mr-4">
                <div className="relative w-16 h-16">
                  <img
                    src={c.avatar}
                    alt={c.name}
                    className="w-16 h-16 rounded-full border-4 border-[#18181b] bg-[#222] object-cover"
                  />
                  {c.online && (
                    <span className="absolute bottom-1 right-1 w-4 h-4 bg-green-400 border-2 border-black rounded-full" />
                  )}
                </div>
                <span className="text-white text-center text-[0.7rem] mt-2 font-medium">{c.name}</span>
              </div>
            ))}
          </div>
        </div>

          <span className="text-white text-center text-lg font-bold mt-2 pl-4">Messages</span>
        {/* Conversation List */}
        <div className="pt-2 pb-20">
          {conversations.map((c) => (
            <DMConversationItem
              key={c.id}
              {...c}
              onConversationClick={() => router.push(`/messages/${c.name}`)}
            />
          ))}
        </div>
      </div>
      <div className="h-[10%] sticky bottom-0">
        <NavBar />
      </div>
    </div>
  );
} 