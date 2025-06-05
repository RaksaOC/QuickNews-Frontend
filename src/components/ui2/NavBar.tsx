'use client';

import { useState, useEffect, ReactNode } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import Image from 'next/image';
import { Link as LinkIcon, MessagesSquare, PlusCircle, UserRound } from 'lucide-react';
import { getResponsiveSize } from '@/utils/responsiveSize';
import { Search, Link } from 'lucide-react';

const ICON_SIZE = 24;

interface NavItem {
    id: string;
    icon: string | ReactNode;
    isImage: boolean;
    path: string;
    text?: string;
}

export default function NavBar() {
    const router = useRouter();
    const pathname = usePathname();
    const [activePage, setActivePage] = useState('');

    useEffect(() => {
        // Update active page based on current path
        const path = pathname.slice(1);
        const matchingItem = navItems.find(item => item.path === pathname);
        setActivePage(matchingItem ? matchingItem.id : path || 'home');
    }, [pathname]);

    const navItems: NavItem[] = [
        { id: 'home', icon: '/assets/mainQuickIcon.png', isImage: true, path: '/', text: "Home" },
        { id: 'messages', icon: <Link size={ICON_SIZE} />, isImage: false, path: '/messages', text: "Connect" },
        {
            id: 'create', icon: <div className='w-12 h-12 rounded-full bg-sky-500 flex items-center justify-center'>
                <PlusCircle size={24} className='text-white'></PlusCircle>
            </div>, isImage: false, path: '/create'
        },
        { id: 'search', icon: <Search size={ICON_SIZE}></Search>, isImage: false, path: '/search', text: "Search" },
        { id: 'profile', icon: <UserRound size={ICON_SIZE} />, isImage: false, path: '/profile', text: "Profile" },
    ];

    const handleNavigation = (path: string, id: string) => {
        router.push(path);
    };

    return (
        <div className=" w-full flex justify-center items-center">
            <div className="flex items-center justify-between w-full gap-2 py-2 px-4 bg-gray-500/20 backdrop-blur-xl border-t border-slate-500/50 shadow-lg">
                {navItems.map((item, index) => (
                    <div className='flex flex-col justify-center items-center gap-1' key={index}>

                        <button
                            key={item.id}
                            onClick={() => handleNavigation(item.path, item.id)}
                            className={`rounded-full min-w-[45px] min-h-[45px] flex items-center justify-center text-white transition-all duration-300 ${pathname === item.path ? 'bg-sky-500' : 'hover:opacity-80'
                                }`}
                        >
                            {item.isImage ? (
                                <div className='flex items-center justify-center'>
                                    <img src={item.icon as string} alt={item.id} className="w-7 h-7 transform transition-transform duration-300 grayscale" />
                                </div>
                            ) : (
                                <div className='flex items-center justify-center'>
                                    {item.icon}
                                </div>
                            )}
                        </button>
                        <p className='text-[0.6rem] text-gray-400'>{item.text}</p>
                    </div>
                ))}
            </div>
        </div>
    );
} 