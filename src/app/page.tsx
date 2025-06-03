'use client';

import { Suspense } from 'react';
import VideoFeed from '@/components/ui/VideoFeed';
import NavBar from '@/components/ui2/NavBar';
import { VideoContainer } from '@/components/ui2/VideoContainer';
import TopNav from '@/components/ui/TopNav';
import Category from '@/components/ui2/Category';

export default function Page() {
  const handleCategoryChange = (category: string) => {
    // TODO: Change the category of the video feed
    // will need to use useEffect to fetch the videos for the new category and then possible cause a re-render to the videoContainer
    console.log(category);
  }

  return (
    <div className='relative h-full flex flex-col justify-between items-center'>
      <Category onCategoryChange={handleCategoryChange}/>
      <VideoContainer />
      <NavBar />
    </div>
  );
} 