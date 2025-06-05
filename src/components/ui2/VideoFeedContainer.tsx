import VideoPost from './VideoPost';
import { Video } from '../../types/Video';
import { Loader2 } from 'lucide-react';
import { useEffect, useState } from 'react';
import Comments from './Comments';
import Share from './Share';
import Article from './Article';

export default function VideoFeedContainer({ videos }: { videos: Video[] }) {

    const [isLoading, setIsLoading] = useState(true);
    const [showComments, setShowComments] = useState(false);
    const [showShare, setShowShare] = useState(false);
    const [showArticle, setShowArticle] = useState(false);
    const [currentVideo, setCurrentVideo] = useState<Video | null>(null);
    // const [isScrolling, setIsScrolling] = useState(false);

    // const handleScroll = () => {
    //     if (isScrolling) {
    //         setIsScrolling(false);
    //     } else {
    //         setIsScrolling(true);
    //     }
    // }

    useEffect(() => {
        // TODO: Remove this after the API is implemented
        setTimeout(() => {
            setIsLoading(false);
        }, 1000);
    }, []);

    if (isLoading) {
        return (
            <div className="w-full h-full flex flex-col justify-center items-center gap-4">
                <Loader2 className="text-sky-500 text-2xl font-bold animate-spin" />
                <div className="flex flex-col justify-center items-center gap-2">
                    <h1 className="text-white text-sm ">Loading news content tailored to you...</h1>
                    <h1 className="text-gray-500 text-xs ">This may take a few seconds...</h1>
                </div>
            </div>
        )
    }

    return (
        <div className=" overflow-y-auto snap-y snap-mandatory w-full h-full flex flex-col justify-start items-center  scrollbar-hide scroll-auto" >
            <div className="w-full py-16 flex justify-center items-center">
                <Loader2 className="text-sky-500 text-2xl font-bold animate-spin" />
            </div>
            {videos.map((video, idx) => (
                <div key={video.id} className={`snap-start snap-always min-h-full w-full relative`} >
                    <VideoPost onCommentClick={() => { setShowComments(true) }} onShareClick={() => setShowShare(true)} onArticleClick={(vidId) => { setShowArticle(true); setCurrentVideo(videos.find(v => v.id === vidId) || null) }} onIsLiked={() => { }} video={video} />
                </div>
            ))}
            <div className="p-8 w-full flex justify-center items-center">
                <h1 className="text-white text-sm ">No more content available</h1>
            </div>
            {showComments && <Comments comments={currentVideo?.comments || []} onClose={() => setShowComments(false)} />}
            {showShare && <Share onClose={() => setShowShare(false)} />}
            {showArticle && <Article title={currentVideo?.article?.headline || ""} content={currentVideo?.article?.content || ""} image={currentVideo?.article?.image || ""} link={currentVideo?.article?.link || ""} onClose={() => setShowArticle(false)} videoCreator={currentVideo?.creator || undefined} />}
        </div>

    );
}