import { div } from "framer-motion/client";
import { VideoInteractions } from "./VideoInteractions";

/*
    This component is for containing the video posts
*/

export function VideoContainer(){
    return (
        <div className="w-full h-[90%] aspect-[9/16] border-dashed border-red-300 flex justify-center items-center">
            <h1 className="text-white">Hello World, this is a video container</h1>
            {/* TODO: should be attached to a videoPost component instead */}
            <VideoInteractions likes={100} comments={100} shares={100} />
        </div>
    )
}