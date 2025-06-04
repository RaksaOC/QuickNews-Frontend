import { on } from "events";
import { ArrowRightCircle, BadgeCheck, Check, CheckCircle, ScrollText, User } from "lucide-react";

interface VideoTextProps {
    creator: string;
    title: string;
    description: string;
    onShowArticle: () => void;
}

export function VideoText({ creator, title, description, onShowArticle }: VideoTextProps) {

    let creatorMock = "QuickNews"
    let titleMock = "QuickNews has launched!"
    let descriptionMock = "AI offers incredible potential to change various of the most transformative technologies..... "


    return (
        <div className="absolute bottom-0 left-0  w-full px-4 pb-2 flex flex-col gap-3">

            {/* This is the description */}
            <div className="text-white text-lg mt-2 w-full font-bold line-clamp-2">
                <span className="w-full text-wrap">{descriptionMock}</span>
            </div>
            <div className="text-sky-500 flex flex-col max-w-28" onClick={onShowArticle}>
                <span className="flex flex-row gap-2 items-center">
                    <span>Read More</span>
                    <ArrowRightCircle size={18}></ArrowRightCircle>
                </span>
                <div className="h-[2px] w-full bg-sky-500 rounded-full"></div>
            </div>
            <div className="text-white text-lg flex font-bold flex-row gap-5 items-center justify-between ">
                <div className="flex flex-row gap-2 items-center ">
                    <div className="rounded-full border border-sky-500 w-10 h-10 flex items-center justify-center">
                        <User size={20} className="text-gray-300" />
                    </div>
                    <div className="flex flex-row gap-1 items-center text-sm">
                        <p>{creatorMock}</p>
                        <BadgeCheck size={20} className="text-sky-500" />
                    </div>
                    <button className="text-white text-sm border bg-gray-500/30 backdrop-blur-sm border-gray-500/50 rounded-full px-2 py-1">
                        Follow
                    </button>
                </div>
                <button className="text-white text-sm  bg-sky-500  rounded-full px-2 py-1" onClick={onShowArticle}>
                    Full Article
                </button>
            </div>
        </div >

    )
}