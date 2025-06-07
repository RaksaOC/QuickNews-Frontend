'use client';

import { Suspense, useEffect, useState } from 'react';
import VideoFeed from '@/components/ui/VideoFeed';
import NavBar from '@/components/ui2/NavBar';
import { TopNav } from '@/components/ui2/TopNav';
import VideoFeedContainer from '@/components/ui2/VideoFeedContainer';
import { videoData } from '@/data/Video';
import MenuPopup from '@/components/ui2/MenuPopup';
import LandingPage from '@/components/ui2/LandingPage';
import { Loader2 } from 'lucide-react';

export default function Page() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLandingPage, setIsLandingPage] = useState(false);
  const [isMainPage, setIsMainPage] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [category, setCategory] = useState('foryou');

  useEffect(() => {
    setIsLandingPage(true);
    // TODO: fetch data here while landing page is shown
    // when fetching is done set isLoading to false
    const timeout = setTimeout(() => {
      setIsLandingPage(false);
      // TODO: remove this after the API is implemented
      setIsLoading(false);
    }, 1000);

    return () => {
      setIsMainPage(true);
      clearTimeout(timeout);
    };
  }, []);

  return (
    isMainPage && (
      <div className='relative h-full flex flex-col justify-between items-center bg-black'>
        {/* shadow gradient for the top nav*/}
        <div className='absolute top-0 left-0 w-full h-16 bg-gradient-to-b from-black/60 to-transparent z-10'></div>
        {!isLandingPage && <TopNav category={category} onCategoryChange={setCategory} onMenuClick={() => { setIsMenuOpen(true); console.log('menu opened') }} />}
        {isLandingPage ? <LandingPage /> : <VideoFeedContainer videos={videoData} category={category} onCategoryChange={setCategory} />}
        {!isLandingPage && <NavBar />}
        {isMenuOpen && <MenuPopup onClose={() => { setIsMenuOpen(false); console.log('menu closed') }} />}
      </div>
    )
  );
} 