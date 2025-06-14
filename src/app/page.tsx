'use client';

import { useEffect, useState, useRef } from 'react';
import NavBar from '@/components/ui2/NavBar';
import { TopNav } from '@/components/ui2/TopNav';
import VideoFeedContainer from '@/components/ui2/VideoFeedContainer';
import { DEMO_VIDEOS } from '@/data/Video';
import MenuPopup from '@/components/ui2/MenuPopup';
import LandingPage from '@/components/ui2/LandingPage';
import Comments from '@/components/ui2/Comments';
import Share from '@/components/ui2/Share';
import Article from '@/components/ui2/Article';
import ChatbotPopup from '@/components/ui2/ChatbotPopup';
import { Video } from '@/types/Video';
import { LEGIT_VIDEOS } from '@/data/LegitVideos';

export default function Page() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLandingPage, setIsLandingPage] = useState(false);
  const [isMainPage, setIsMainPage] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [category, setCategory] = useState('following');
  const [videos, setVideos] = useState(LEGIT_VIDEOS);
  const [dragX, setDragX] = useState(0);
  const touchStartX = useRef<number | null>(null);
  const touchStartY = useRef<number | null>(null);
  const touchStartTime = useRef<number | null>(null);
  const [gestureDirection, setGestureDirection] = useState<'horizontal' | 'vertical' | null>(null);
  const [showComments, setShowComments] = useState(false);
  const [showShare, setShowShare] = useState(false);
  const [showArticle, setShowArticle] = useState(false);
  const [showChatbot, setShowChatbot] = useState(false);
  const [currentVideo, setCurrentVideo] = useState<Video | null>(null);
  const [isMouseDown, setIsMouseDown] = useState(false);

  useEffect(() => {
    setIsLandingPage(true);
    const timeout = setTimeout(() => {
      setIsLandingPage(false);
      setIsLoading(false);
    }, 1000);

    return () => {
      setIsMainPage(true);
      clearTimeout(timeout);
    };
  }, []);

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
    touchStartY.current = e.touches[0].clientY;
    touchStartTime.current = Date.now();
    setGestureDirection(null);
  };

  const handleMouseDown = (e: React.MouseEvent) => {
    setIsMouseDown(true);
    touchStartX.current = e.clientX;
    touchStartY.current = e.clientY;
    touchStartTime.current = Date.now();
    setGestureDirection(null);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (touchStartX.current === null || touchStartY.current === null) return;
    const deltaX = e.touches[0].clientX - touchStartX.current;
    const deltaY = e.touches[0].clientY - touchStartY.current;

    // If direction not yet determined, check if movement exceeds threshold
    if (!gestureDirection) {
      if (Math.abs(deltaX) > 10 || Math.abs(deltaY) > 10) {
        if (Math.abs(deltaX) > Math.abs(deltaY)) {
          setGestureDirection('horizontal');
        } else {
          setGestureDirection('vertical');
        }
      } else {
        return;
      }
    }

    // Handle horizontal gestures (category swiping)
    if (gestureDirection === 'horizontal') {
      e.preventDefault(); // Prevent vertical scroll
      const currentIdx = categories.indexOf(category);
      let resistedDelta = deltaX;
      if ((currentIdx === 0 && deltaX > 0) || (currentIdx === categories.length - 1 && deltaX < 0)) {
        resistedDelta = deltaX * 0.3;
      } else {
        resistedDelta = deltaX * 0.8;
      }
      setDragX(resistedDelta);
    }

    // For vertical gestures, allow normal touch scrolling
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isMouseDown || touchStartX.current === null || touchStartY.current === null) return;
    const deltaX = e.clientX - touchStartX.current;
    const deltaY = e.clientY - touchStartY.current;

    // If direction not yet determined, check if movement exceeds threshold
    if (!gestureDirection) {
      if (Math.abs(deltaX) > 10 || Math.abs(deltaY) > 10) {
        if (Math.abs(deltaX) > Math.abs(deltaY)) {
          setGestureDirection('horizontal');
        } else {
          setGestureDirection('vertical');
        }
      } else {
        return;
      }
    }

    // Handle horizontal gestures (category swiping)
    if (gestureDirection === 'horizontal') {
      e.preventDefault(); // Prevent vertical scroll
      const currentIdx = categories.indexOf(category);
      let resistedDelta = deltaX;
      if ((currentIdx === 0 && deltaX > 0) || (currentIdx === categories.length - 1 && deltaX < 0)) {
        resistedDelta = deltaX * 0.3;
      } else {
        resistedDelta = deltaX * 0.8;
      }
      setDragX(resistedDelta);
    }

    // For vertical gestures, allow normal scrolling (no manual intervention)
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null || touchStartTime.current === null) return;

    // Only process horizontal swipe if gestureDirection is horizontal
    if (gestureDirection === 'horizontal') {
      const deltaX = e.changedTouches[0].clientX - touchStartX.current;
      const deltaTime = Date.now() - touchStartTime.current;
      const velocity = Math.abs(deltaX) / deltaTime;
      const currentIdx = categories.indexOf(category);
      const shouldSwipe = Math.abs(deltaX) > 100 || velocity > 0.5;
      if (shouldSwipe) {
        if (deltaX > 0 && currentIdx > 0) {
          setCategory(categories[currentIdx - 1]);
        } else if (deltaX < 0 && currentIdx < categories.length - 1) {
          setCategory(categories[currentIdx + 1]);
        }
      }
    }

    // Reset all states
    setDragX(0);
    setGestureDirection(null);
    touchStartX.current = null;
    touchStartY.current = null;
    touchStartTime.current = null;
  };

  const handleMouseUp = (e: React.MouseEvent) => {
    if (!isMouseDown || touchStartX.current === null || touchStartTime.current === null) return;
    setIsMouseDown(false);

    // Only process horizontal swipe if gestureDirection is horizontal
    if (gestureDirection === 'horizontal') {
      const deltaX = e.clientX - touchStartX.current;
      const deltaTime = Date.now() - touchStartTime.current;
      const velocity = Math.abs(deltaX) / deltaTime;
      const currentIdx = categories.indexOf(category);
      const shouldSwipe = Math.abs(deltaX) > 100 || velocity > 0.5;
      if (shouldSwipe) {
        if (deltaX > 0 && currentIdx > 0) {
          setCategory(categories[currentIdx - 1]);
        } else if (deltaX < 0 && currentIdx < categories.length - 1) {
          setCategory(categories[currentIdx + 1]);
        }
      }
    }

    // Reset all states
    setDragX(0);
    setGestureDirection(null);
    touchStartX.current = null;
    touchStartY.current = null;
    touchStartTime.current = null;
  };

  const handleMouseLeave = () => {
    if (isMouseDown) {
      setIsMouseDown(false);
      setGestureDirection(null);
      touchStartX.current = null;
      touchStartY.current = null;
      touchStartTime.current = null;
      setDragX(0);
    }
  };

  const categories = [
    'following',
    'foryou',
    'breaking',
    'tech',
    'sports',
    'entertainment',
    'business',
    'health',
    'science'
  ];

  const currentIndex = categories.indexOf(category);

  return (
    isMainPage && (
      <div className='relative h-full flex flex-col justify-between items-center bg-black'>
        {/* shadow gradient for the top nav*/}
        <div className='absolute top-0 left-0 w-full h-16 bg-gradient-to-b from-black/60 to-transparent z-10'></div>
        {!isLandingPage && <TopNav category={category} onCategoryChange={(category) => setCategory(category)} onMenuClick={() => { setIsMenuOpen(true) }} />}

        {isLandingPage ? (
          <LandingPage />
        ) : (
          <div
            className="relative w-full h-full overflow-hidden"
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseLeave}
            style={{
              overflowY: gestureDirection === 'horizontal' ? 'hidden' : 'auto',
            }}
          >
            <div
              className="flex w-full h-full transition-transform duration-300 ease-out"
              style={{
                transform: `translateX(calc(-${currentIndex * 100}% + ${dragX}px))`,
              }}
            >
              {categories.map((cat, index) => (
                <div key={cat} className="flex-shrink-0 w-full h-full">
                  <VideoFeedContainer
                    videos={cat === category ? videos.filter(video => video.category === cat) : []}
                    category={cat}
                    onCategoryChange={setCategory}
                    onShowComments={(video) => { setShowComments(true); setCurrentVideo(video); }}
                    onShowShare={(video) => { setShowShare(true); setCurrentVideo(video); }}
                    onShowArticle={(video) => { setShowArticle(true); setCurrentVideo(video); }}
                    onShowChatbot={() => setShowChatbot(true)}
                  />
                </div>
              ))}
            </div>
            {showComments && <Comments comments={currentVideo?.comments || []} onClose={() => setShowComments(false)} />}
            {showShare && <Share onClose={() => setShowShare(false)} />}
            {showArticle && <Article
              article={currentVideo?.article || undefined}
              onClose={() => setShowArticle(false)}
              onShowChatbot={(show) => { setShowChatbot(show); setShowArticle(false); }} />}
            {showChatbot && <ChatbotPopup onClose={() => { setShowChatbot(false); setShowArticle(true); }} article={currentVideo?.article || undefined} onBackToArticle={() => { setShowChatbot(false); setShowArticle(true); }} />}
          </div>
        )}
        {!isLandingPage && <NavBar />}
        {isMenuOpen && <MenuPopup onClose={() => { setIsMenuOpen(false) }} />}
      </div >
    )
  );
} 