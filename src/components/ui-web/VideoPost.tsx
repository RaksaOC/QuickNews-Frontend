import { div } from "framer-motion/client";
import { VideoInteractions } from "./VideoInteractions";
import { VideoText } from "./VideoText";
import { useRef, useState, useEffect } from "react";
import Comments from "./Comments";
import Share from "./Share";
import Article from "./Article";
import { Video } from "@/types/Video";
import { Heart } from "lucide-react";
import VideoPlayer from "./VideoPlayer";
import { ProgressBar } from "./ProgressBar";

/*
    This component is for containing the video posts
*/

interface VideoPostProps {
    video: Video;
    onCommentClick: () => void;
    onShareClick: () => void;
    onArticleClick: (vidId: number) => void;
    onIsLiked: (isLiked: boolean) => void;
    onShowChatbot?: () => void;
}

const getResponsiveSize = (baseSize: number): string => {
    // Convert base size to vh units (700px = 100vh reference)
    const vhSize = (baseSize / 700) * 100;
    // Only use vh units for responsive scaling, with a minimum size to prevent text from becoming too small
    return `max(${baseSize * 0.5}px, ${vhSize}vh)`;
};

export default function VideoPost({ video, onCommentClick, onShareClick, onArticleClick, onIsLiked, onShowChatbot }: VideoPostProps) {
    const [showComments, setShowComments] = useState(false);
    const [showShare, setShowShare] = useState(false);
    const [showArticle, setShowArticle] = useState(false);
    const [isLiked, setIsLiked] = useState(false);
    const [isVisible, setIsVisible] = useState(false);
    const [isSaved, setIsSaved] = useState(false);
    const containerRef = useRef<HTMLDivElement>(null);
    const [progress, setProgress] = useState(0);
    const [updatedProgress, setUpdatedProgress] = useState(0);
    const [isProgressBarDragging, setIsProgressBarDragging] = useState(false);

    useEffect(() => {
        let timeout: NodeJS.Timeout;
        let isMounted = true;
        let isScrolling = false;
        let scrollTimeout: NodeJS.Timeout;

        // Handle scroll events
        const handleScroll = () => {
            isScrolling = true;
            clearTimeout(scrollTimeout);
            scrollTimeout = setTimeout(() => {
                isScrolling = false;
            }, 150); // Wait for scroll to finish
        };

        window.addEventListener('scroll', handleScroll);

        const observer = new IntersectionObserver(
            ([entry]) => {
                // Don't process if we're still scrolling
                if (isScrolling) return;

                clearTimeout(timeout);
                timeout = setTimeout(() => {
                    if (isMounted && entry.isIntersecting !== isVisible) {
                        setIsVisible(entry.isIntersecting);
                        console.log("videos that is visible is ", video.headline, video.id, video.category, entry.isIntersecting);
                    }
                }, 150); // Increased debounce time for mobile
            },
            {
                threshold: 0.8, // Slightly lower threshold for mobile
                rootMargin: '0px' // No margin
            }
        );

        if (containerRef.current) observer.observe(containerRef.current);

        return () => {
            isMounted = false;
            clearTimeout(timeout);
            clearTimeout(scrollTimeout);
            window.removeEventListener('scroll', handleScroll);
            if (containerRef.current) observer.unobserve(containerRef.current);
        };
    }, [isVisible, video.headline, video.id, video.category]); // Added video props to dependencies

    function handleCommentClick() {
        setShowComments(!showComments);
    }
    function handleShareClick() {
        setShowShare(!showShare);
    }
    function handleArticleClick() {
        setShowArticle(!showArticle);
    }
    function handleCloseArticle() {
        setShowArticle(false);
    }
    function handleSaveClick() {
        console.log('save clicked');
        setIsSaved(!isSaved);
    }

    function handleIsLiked(isLiked: boolean) {
        if (isLiked) {
            setIsLiked(true);
        } else {
            setIsLiked(false);
        }
    }

    const handleDoubleTap = () => {
        setIsLiked(true);
        handleIsLiked(true);
    };

    return (
        <div
            ref={containerRef}
            className="video-post w-full h-full relative rounded-3xl overflow-hidden flex justify-center items-center "
            onTouchStart={(e) => {
                if (isProgressBarDragging) {
                    e.stopPropagation();
                }
            }}
            onTouchMove={(e) => {
                if (isProgressBarDragging) {
                    e.stopPropagation();
                }
            }}
            onTouchEnd={(e) => {
                if (isProgressBarDragging) {
                    e.stopPropagation();
                }
            }}
        >
            <div className="flex gap-4 w-full h-full justify-center items-center">
                <div className="relative w-full aspect-[9/16]"
                    style={{
                        maxWidth: getResponsiveSize(370),
                    }}
                >
                    <VideoPlayer
                        url={video.url}
                        isVisible={isVisible}
                        onDoubleTap={handleDoubleTap}
                        progress={progress}
                        onProgressUpdate={(played) => {
                            setProgress(played);
                        }}
                        progressChange={updatedProgress}
                    />
                    <VideoText
                        creator={video.creator}
                        title={video.headline}
                        description={video.content}
                        onShowArticle={() => onArticleClick(video.id)}
                    />
                    <ProgressBar
                        progress={progress}
                        onProgressChange={(progress) => { setProgress(progress) }}
                        onProgressChangeUpdate={(progress) => { setUpdatedProgress(progress) }}
                        onDragChange={(dragging) => { setIsProgressBarDragging(dragging) }}
                    />
                </div>
                <VideoInteractions
                    likes={video.likes}
                    comments={video.comments}
                    shares={video.shares}
                    onCommentClick={onCommentClick}
                    onShareClick={onShareClick}
                    isLiked={isLiked}
                    onIsLiked={handleIsLiked}
                    onSaveClick={handleSaveClick}
                    isSaved={isSaved}
                />

            </div>




        </div>
    )
}