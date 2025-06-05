'use client';

import { Suspense, useState } from 'react';
import VideoFeed from '@/components/ui/VideoFeed';
import NavBar from '@/components/ui2/NavBar';
import { TopNav } from '@/components/ui2/TopNav';
import VideoFeedContainer from '@/components/ui2/VideoFeedContainer';
import { videoData } from '@/data/Video';
import MenuPopup from '@/components/ui2/MenuPopup';

export default function Page() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleCategoryChange = (category: string) => {
    // TODO: Change the category of the video feed
    // will need to use useEffect to fetch the videos for the new category and then possible cause a re-render to the videoContainer
    console.log(category);
  }

  return (
    <div className='relative h-full flex flex-col justify-between items-center'>
      <TopNav onMenuClick={() => { setIsMenuOpen(true); console.log('menu opened') }} />
      <VideoFeedContainer videos={videoData} />
      <NavBar />
      {isMenuOpen && <MenuPopup onClose={() => { setIsMenuOpen(false); console.log('menu closed') }} />}
    </div>
  );
} 