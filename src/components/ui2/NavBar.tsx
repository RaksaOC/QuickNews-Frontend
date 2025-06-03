'use client';

import { useState, useEffect, ReactNode } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import Image from 'next/image';
import { Link as LinkIcon, PlusCircle, UserRound } from 'lucide-react';
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
        { id: 'messages', icon: <LinkIcon size={ICON_SIZE} />, isImage: false, path: '/messages', text: "Messages" },
        { id: 'create', icon: <PlusCircle size={48} className='text-sky-500'/>, isImage: false, path: '/create'},
        { id: 'search', icon: <Search size={ICON_SIZE}></Search>, isImage: false, path: '/search' ,text: "Search" },
        { id: 'profile', icon: <UserRound size={ICON_SIZE} />, isImage: false, path: '/profile', text: "Profile" },
    ];

    const handleNavigation = (path: string, id: string) => {
        router.push(path);
    };

    return (
        <div className=" w-full flex justify-center items-center">
            <div className="flex items-center justify-between w-full gap-4 max-w-[98%] py-2 px-4 bg-gray-800/50 backdrop-blur-md border-t border-slate-200/50 shadow-lg">
                {navItems.map((item, index) => (
                    <div className='flex flex-col justify-center items-center gap-2' key={index}>

                        <button
                            key={item.id}
                            onClick={() => handleNavigation(item.path, item.id)}
                            className={`rounded-full flex items-center justify-center text-white transition-all duration-300 ${pathname === item.path ? 'bg-blue-500' : 'hover:opacity-80'
                                }`}
                        >
                            {item.isImage ? (
                                <div>
                                    <img src={item.icon as string} alt={item.id} className="w-7 h-7 transform transition-transform duration-300" />
                                </div>
                            ) : (
                                <div>
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