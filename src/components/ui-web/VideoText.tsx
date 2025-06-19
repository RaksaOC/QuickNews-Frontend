import { on } from "events";
import { ArrowRightCircle, BadgeCheck, Check, CheckCircle, ScrollText, User } from "lucide-react";
import { User as UserType } from "@/types/User";
import { useRouter } from "next/navigation";
import { useState } from "react";

interface VideoTextProps {
    creator: UserType;
    title: string;
    description: string;
    onShowArticle: () => void;
}

export function VideoText({ creator, title, description, onShowArticle }: VideoTextProps) {
    const [isShortened, setIsShortened] = useState(true);
    const [isFollowing, setIsFollowing] = useState(false);
    const router = useRouter();

    return (
        <div className={`absolute bottom-4 left-0  w-full px-4 pb-2 flex flex-col gap-2 ${!isShortened ? "bg-gradient-to-b from-transparent via-black/50 to-black" : ""}`}>

            {/* longer headline */}
            {/* <div className="text-white text-lg mt-2 w-full font-bold line-clamp-2">
                <span className=" text-wrap">{description}</span>
            </div> */}
            {/* shorter headline with read more to see full headline*/}
            <div className={` text-white text-md mt-2 w-[80%] font-bold ${isShortened ? "line-clamp-2" : "line-clamp-none"}`} onClick={() => { setIsShortened(!isShortened) }}>
                <span className="select-none text-wrap">{title}</span>
            </div>
            {/* <div className="text-sky-500 flex flex-col max-w-28 text-sm cursor-pointer" onClick={() => { setIsShortened(!isShortened) }}>
                <span className="flex flex-row gap-2 items-center">
                    <span>Read More</span>
                    <ArrowRightCircle size={18}></ArrowRightCircle>
                </span>
                <div className="h-[2px] w-full max-w-[100px] bg-sky-500 rounded-full"></div>
            </div> */}
            <div className=" text-white text-lg flex font-bold flex-row gap-5 items-center justify-between ">
                <div className="flex flex-row gap-2 items-center ">
                    <div className="rounded-full border border-sky-500 w-10 h-10 flex items-center justify-center" onClick={() => { router.push(`/${creator.handle}`) }}>
                        <img src={creator.avatar} alt={creator.name} className="w-full h-full rounded-full" />
                    </div>
                    <div className="flex flex-row gap-1 items-center text-sm cursor-pointer" onClick={() => { router.push(`/${creator.handle}`) }}>
                        <p>{creator.name}</p>
                        <BadgeCheck size={20} className="text-white fill-sky-500" />
                    </div>
                    <button className={`text-white text-sm border bg-gray-500/30 backdrop-blur-sm border-gray-500/50 rounded-full px-2 py-1 ${isFollowing ? "bg-sky-500" : "bg-gray-500/30"} transition-all duration-300`} onClick={() => { setIsFollowing(!isFollowing) }}>
                        {isFollowing ? <div className="flex flex-row gap-1 items-center">
                            <p>Followed</p>
                            <CheckCircle size={16} className="text-white fill-sky-500" />
                        </div> : "Follow"}
                    </button>
                </div>
                <button className="text-white text-sm  bg-sky-500  rounded-full px-2 py-1" onClick={onShowArticle}>
                    Full Article
                </button>
            </div>
        </div >

    )
}