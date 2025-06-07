import VideoPost from './VideoPost';
import { Video } from '../../types/Video';
import { Loader2 } from 'lucide-react';
import { useEffect, useState, useRef } from 'react';
import Comments from './Comments';
import Share from './Share';
import Article from './Article';
import ChatbotPopup from './ChatbotPopup';

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

interface VideoFeedContainerProps {
    videos: Video[];
    category: string;
    onCategoryChange: (category: string) => void;
}

export default function VideoFeedContainer({ videos, category, onCategoryChange }: VideoFeedContainerProps) {
    const [showComments, setShowComments] = useState(false);
    const [showShare, setShowShare] = useState(false);
    const [showArticle, setShowArticle] = useState(false);
    const [currentVideo, setCurrentVideo] = useState<Video | null>(null);
    const touchStartX = useRef<number | null>(null);
    const touchStartTime = useRef<number | null>(null);
    const [dragX, setDragX] = useState(0);
    const [isDragging, setIsDragging] = useState(false);
    const [isAnimating, setIsAnimating] = useState(false);
    const animationRef = useRef<number | null>(null);
    const [showChatbot, setShowChatbot] = useState(false);

    const handleTouchStart = (e: React.TouchEvent) => {
        // Cancel any ongoing animations
        if (animationRef.current) {
            cancelAnimationFrame(animationRef.current);
        }

        touchStartX.current = e.touches[0].clientX;
        touchStartTime.current = Date.now();
        setIsDragging(true);
        setIsAnimating(false);
    };

    const handleTouchMove = (e: React.TouchEvent) => {
        if (touchStartX.current === null || isAnimating) return;

        const deltaX = e.touches[0].clientX - touchStartX.current;
        const currentIdx = categories.indexOf(category);

        // Add resistance at the edges
        let resistedDelta = deltaX;
        if ((currentIdx === 0 && deltaX > 0) || (currentIdx === categories.length - 1 && deltaX < 0)) {
            // Apply strong resistance at edges
            resistedDelta = deltaX * 0.3;
        } else {
            // Apply light resistance for smoother feel
            resistedDelta = deltaX * 0.8;
        }

        setDragX(resistedDelta);
    };

    const animateToPosition = (targetX: number, onComplete?: () => void) => {
        setIsAnimating(true);
        const startX = dragX;
        const distance = targetX - startX;
        const duration = 300; // ms
        const startTime = Date.now();

        const animate = () => {
            const elapsed = Date.now() - startTime;
            const progress = Math.min(elapsed / duration, 1);

            // Ease out cubic for smooth deceleration
            const easeOut = 1 - Math.pow(1 - progress, 3);
            const currentX = startX + (distance * easeOut);

            setDragX(currentX);

            if (progress < 1) {
                animationRef.current = requestAnimationFrame(animate);
            } else {
                setIsAnimating(false);
                if (onComplete) onComplete();
            }
        };

        animationRef.current = requestAnimationFrame(animate);
    };

    const handleTouchEnd = (e: React.TouchEvent) => {
        if (touchStartX.current === null || touchStartTime.current === null) return;

        const deltaX = e.changedTouches[0].clientX - touchStartX.current;
        const deltaTime = Date.now() - touchStartTime.current;
        const velocity = Math.abs(deltaX) / deltaTime; // px/ms

        const currentIdx = categories.indexOf(category);
        const lightThreshold = 50; // Reduced from 100px for lighter touch
        const velocityThreshold = 0.5; // px/ms for momentum-based swiping

        setIsDragging(false);

        // Check for category change based on distance OR velocity
        const shouldSwipe = Math.abs(deltaX) > lightThreshold || velocity > velocityThreshold;

        if (shouldSwipe && deltaX > 0 && currentIdx > 0) {
            // Swiped right: go to previous category
            animateToPosition(0, () => {
                onCategoryChange(categories[currentIdx - 1]);
            });
        } else if (shouldSwipe && deltaX < 0 && currentIdx < categories.length - 1) {
            // Swiped left: go to next category
            animateToPosition(0, () => {
                onCategoryChange(categories[currentIdx + 1]);
            });
        } else {
            // Not enough swipe, animate back to center
            animateToPosition(0);
        }

        touchStartX.current = null;
        touchStartTime.current = null;
    };

    // Reset drag position when category changes
    useEffect(() => {
        if (!isDragging && !isAnimating) {
            setDragX(0);
        }
    }, [category, isDragging, isAnimating]);

    // Cleanup animation on unmount
    useEffect(() => {
        return () => {
            if (animationRef.current) {
                cancelAnimationFrame(animationRef.current);
            }
        };
    }, []);

    return (
        <div
            className="overflow-y-auto snap-y snap-mandatory w-full h-full flex flex-col justify-start items-center scrollbar-hide scroll-auto"
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
            style={{ touchAction: 'pan-y' }} // Allow vertical scrolling while handling horizontal gestures
        >
            <div className="w-full py-16 flex justify-center items-center">
                <Loader2 className="text-sky-500 text-2xl font-bold animate-spin" />
            </div>
            {videos.map((video, idx) => (
                <div
                    key={video.id}
                    className="snap-start snap-always min-h-full w-full relative"
                    style={{
                        transform: idx === 0 && (isDragging || isAnimating) ? `translateX(${dragX}px)` : 'translateX(0px)',
                        transition: isDragging ? 'none' : 'transform 0.3s cubic-bezier(0.4, 0.0, 0.2, 1)'
                    }}
                >
                    <VideoPost
                        onCommentClick={() => { setShowComments(true); setCurrentVideo(videos.find(v => v.id === video.id) || null) }}
                        onShareClick={() => { setShowShare(true); setCurrentVideo(videos.find(v => v.id === video.id) || null) }}
                        onArticleClick={(vidId) => { setShowArticle(true); setCurrentVideo(videos.find(v => v.id === vidId) || null) }}
                        onIsLiked={() => { }}
                        video={video}
                    />
                </div>
            ))}
            <div className="pt-4 pb-24 w-full flex justify-center items-center">
                <h1 className="text-white text-sm">No more content available</h1>
            </div>
            {showComments && <Comments comments={currentVideo?.comments || []} onClose={() => setShowComments(false)} />}
            {showShare && <Share onClose={() => setShowShare(false)} />}
            {showArticle && <Article
                article={currentVideo?.article || undefined}
                onClose={() => setShowArticle(false)}
                onShowChatbot={(show) => { setShowChatbot(show) }} />}
            {showChatbot && <ChatbotPopup onClose={(article) => { setShowArticle(true); setShowChatbot(false); setCurrentVideo(videos.find(v => v.article?.id === article?.id) || null) }} article={currentVideo?.article || undefined} onBackToArticle={(article) => { setShowArticle(true); setShowChatbot(false); setCurrentVideo(videos.find(v => v.article?.id === article?.id) || null) }} />}
        </div>
    );
}