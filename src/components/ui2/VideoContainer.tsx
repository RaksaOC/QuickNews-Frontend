import { div } from "framer-motion/client";
import { VideoInteractions } from "./VideoInteractions";
import { VideoText } from "./VideoText";
import { useState } from "react";
import Comments from "./Comments";
import Share from "./Share";
import Article from "./Article";

/*
    This component is for containing the video posts
*/

export function VideoContainer() {
    const [showComments, setShowComments] = useState(false);
    const [showShare, setShowShare] = useState(false);
    const [showArticle, setShowArticle] = useState(false);

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

    const fakeArticle = {
        title: "QuickNews has launched! 🚀",
        content: `
In a surprising move this morning, a group of independent developers announced the launch of QuickNews — a modern, AI-powered news aggregator aimed at revolutionizing how people consume short-form content. 

Unlike traditional news platforms, QuickNews uses a proprietary algorithm to curate personalized video summaries of trending global topics. Each video is under 60 seconds, making it ideal for users on the go.

“We believe attention is the new currency,” said the lead developer during the press briefing. “Our goal is to keep people informed without overwhelming them.”

The app is currently in early access with plans to expand globally by Q4. Early adopters are already praising its clean UI, fast performance, and ability to cut through the noise.

Stay tuned for more updates as QuickNews continues to redefine digital journalism in the short-form era.
`,
        image: "https://via.placeholder.com/150",
        link: "https://www.google.com"
    }
    const fakeVideoCreator = {
        name: "QuickNews",
        handle: "quicknews",
        avatar: "https://via.placeholder.com/150"
    }

    return (
        <div className="w-full h-[90%] aspect-[9/16] border-dashed border-red-300 flex justify-center items-center relative">
            <h1 className="text-white">Hello World, this is a video container</h1>
            {/* TODO: should be attached to a videoPost component instead */}
            <VideoInteractions likes={100} comments={100} shares={100} onCommentClick={handleCommentClick} onShareClick={handleShareClick} />
            <VideoText creator="QuickNews" title="QuickNews has launched!" description="Check out the latest news and updates from QuickNews" onShowArticle={handleArticleClick} />
            {showComments && <Comments onClose={() => setShowComments(false)} />}
            {showShare && <Share onClose={() => setShowShare(false)} />}
            {showArticle && <Article title={fakeArticle.title} content={fakeArticle.content} image={fakeArticle.image} link={fakeArticle.link} onClose={() => setShowArticle(false)} videoCreator={fakeVideoCreator} />}
        </div>
    )
}