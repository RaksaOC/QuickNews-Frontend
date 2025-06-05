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

/*
    This component is for containing the video posts
*/

interface VideoPostProps {
    video: Video;
    onCommentClick: () => void;
    onShareClick: () => void;
    onArticleClick: (vidId: number) => void;
    onIsLiked: (isLiked: boolean) => void;
}

export default function VideoPost({ video, onCommentClick, onShareClick, onArticleClick, onIsLiked }: VideoPostProps) {
    const [showComments, setShowComments] = useState(false);
    const [showShare, setShowShare] = useState(false);
    const [showArticle, setShowArticle] = useState(false);
    const [isLiked, setIsLiked] = useState(false);
    const [isVisible, setIsVisible] = useState(false);
    const [isSaved, setIsSaved] = useState(false);
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                setIsVisible(entry.isIntersecting);
            },
            {
                threshold: 0.5, // Video will play when 50% visible
                rootMargin: '0px', // No margin
            }
        );

        if (containerRef.current) {
            observer.observe(containerRef.current);
        }

        return () => {
            if (containerRef.current) {
                observer.unobserve(containerRef.current);
            }
        };
    }, []);

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
        <div ref={containerRef} className="w-full h-full p-4 relative">
            <VideoPlayer
                url={video.url}
                isVisible={isVisible}
                onDoubleTap={handleDoubleTap}
            />
            <VideoInteractions
                likes={video.likes}
                comments={video.comments.length}
                shares={video.shares}
                onCommentClick={onCommentClick}
                onShareClick={onShareClick}
                isLiked={isLiked}
                onIsLiked={handleIsLiked}
                onSaveClick={handleSaveClick}
                isSaved={isSaved}
            />
            <VideoText
                creator={video.creator}
                title={video.headline}
                description={video.content}
                onShowArticle={() => onArticleClick(video.id)}
            />
        </div>
    )
}