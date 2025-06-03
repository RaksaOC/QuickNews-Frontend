import { Suspense } from 'react';
import VideoFeed from '@/components/ui/VideoFeed';
import NavBar from '@/components/ui2/NavBar';
import { VideoContainer } from '@/components/ui2/VideoContainer';

export default function Page() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <VideoContainer />
      <NavBar />
    </Suspense>
  );
} 