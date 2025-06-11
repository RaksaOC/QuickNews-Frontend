import VideoPost from './VideoPost';
import { Video } from '../../types/Video';
import { Loader2 } from 'lucide-react';
import { forwardRef } from 'react';

interface VideoFeedContainerProps {
    videos: Video[];
    category: string;
    onCategoryChange: (category: string) => void;
    onShowComments: (video: Video) => void;
    onShowShare: (video: Video) => void;
    onShowArticle: (video: Video) => void;
    onShowChatbot: () => void;
}

const VideoFeedContainer = forwardRef<HTMLDivElement, VideoFeedContainerProps>(({
    videos,
    category,
    onCategoryChange,
    onShowComments,
    onShowShare,
    onShowArticle,
    onShowChatbot
}, ref) => {
    console.log("videos", videos);
    return (
        <div
            ref={ref}
            className="overflow-y-auto snap-y snap-mandatory w-full h-full flex flex-col justify-start items-center scrollbar-hide scroll-auto"
        >
            <div className="w-full py-16 flex justify-center items-center">
                <Loader2 className="text-sky-500 text-2xl font-bold animate-spin" />
            </div>
            {videos.map((video, idx) => (
                console.log("video", video),
                <div
                    key={video.id}
                    className="snap-start snap-always min-h-full w-full relative"
                >
                    <VideoPost
                        onCommentClick={() => onShowComments(video)}
                        onShareClick={() => onShowShare(video)}
                        onArticleClick={() => onShowArticle(video)}
                        onIsLiked={() => { }}
                        video={video}
                        onShowChatbot={onShowChatbot}
                    />
                </div>
            ))}
            <div className="pt-4 pb-24 w-full flex justify-center items-center">
                <h1 className="text-white text-sm">No more content available</h1>
            </div>
        </div>
    );
});

VideoFeedContainer.displayName = 'VideoFeedContainer';

export default VideoFeedContainer;