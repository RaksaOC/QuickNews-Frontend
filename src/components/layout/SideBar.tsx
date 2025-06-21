"use client"
import { Link, PlusCircle, User, Search, Home, TrendingUp, Globe, Heart, Bookmark, FlaskConical, Laptop, Briefcase, Film, Trophy, Compass, ArrowLeft } from "lucide-react";
import { useState } from "react";

export default function SideBar() {
    const [searchClicked, setSearchClicked] = useState(false);
    const [searchQuery, setSearchQuery] = useState("");
    const [searchResults, setSearchResults] = useState<any[]>([]);

    const handleSearch = () => {
        setSearchClicked(true);
        setSearchQuery(searchQuery);
    }

    return (
        <div className={`min-w-10  ${searchClicked ? "lg:min-w-96 w-60  min-h-[300px]" : ""} h-full   z-50 bg-gray-700/30 backdrop-blur-sm shadow-xl border border-slate-500/80 rounded-2xl text-white transition-all duration-200 overflow-y-auto`}>
            <div className="flex flex-col h-full relative">
                {/* Sticky Header */}
                <div className="hidden lg:flex flex-col justify-center sticky top-0 z-50 bg-gray-950/40 backdrop-blur-sm lg:px-4 px-2 pt-6 pb-4 rounded-t-2xl">
                    {/* Header */}
                    <div className="flex items-center gap-3 mb-8">
                        <img src="/assets/logo2.png" alt="logo" className="w-10 h-10 rounded-lg" />
                        <h1 className="lg:block hidden text-xl font-bold text-white">
                            QuickNews
                        </h1>
                    </div>

                    {/* Search Bar */}
                    <div className="lg:flex hidden relative  items-center justify-between">
                        {
                            searchClicked && (
                                <ArrowLeft className="absolute left-1 top-1/2 transform -translate-y-1/2 text-white/70 w-6 h-6" onClick={() => setSearchClicked(false)} />
                            )
                        }
                        <Search className={`absolute left-3 top-1/2 transform -translate-y-1/2 text-white/70 w-4 h-4 ${searchClicked ? "left-[54px]" : ""}`} />
                        <input
                            type="text"
                            placeholder="Search news..."
                            className={`w-full ${searchClicked ? "w-[90%] ml-10" : ""} pl-10 pr-4 py-3 rounded-xl border border-slate-500/50 bg-slate-500/20 focus:bg-slate-500/30 focus:border-slate-400 focus:outline-none transition-all duration-200 text-sm text-white placeholder-white/70`}
                            onClick={handleSearch}
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                        />
                    </div>
                </div>
                {/* Sticky Header */}
                <div className="lg:hidden flex  flex-col justify-center items-start sticky top-0 z-50 bg-gray-950/40 backdrop-blur-sm lg:px-4 px-2 pt-6 pb-4 rounded-t-2xl ">
                    {/* Header */}
                    <div className="flex items-center gap-3 mb-6">
                        <img src="/assets/logo2.png" alt="logo" className="w-8 h-8 rounded-lg" />
                    </div>
                    {/* Search Bar */}
                    <div className={`${searchClicked ? "flex" : "hidden"} relative  items-center justify-between`}>
                        {
                            searchClicked && (
                                <ArrowLeft className="absolute left-1 top-1/2 transform -translate-y-1/2 text-white/70 w-6 h-6" onClick={() => setSearchClicked(false)} />
                            )
                        }
                        <Search className={`absolute left-3 top-1/2 transform -translate-y-1/2 text-white/70 w-4 h-4 ${searchClicked ? "left-[36px]" : ""}`} />
                        <input
                            type="text"
                            placeholder="Search news..."
                            className={`w-full ${searchClicked ? "w-[90%] ml-8" : ""} pl-6 pr-4 py-3 rounded-xl border border-slate-500/50 bg-slate-500/20 focus:bg-slate-500/30 focus:border-slate-400 focus:outline-none transition-all duration-200  text-white placeholder-white/70 text-xs`}
                            onClick={handleSearch}
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                        />
                    </div>
                </div>

                {/* Scrollable Content */}
                <div className="flex-1 overflow-y-auto px-2 lg:px-4 py-4    scrollbar-hide ">
                    {!searchClicked && (
                        <>
                            {/* Navigation */}
                            <div className="flex-1">
                                <div className="space-y-2 mb-8 border-b border-slate-500/50 pb-4">

                                    <button className="lg:hidden w-full flex items-center gap-3 px-2 py-3 rounded-xl text-white text-sm hover:bg-white/10 transition-all duration-200 group" onClick={() => setSearchClicked(true)}>
                                        <Search className="w-5 h-5 group-hover:scale-110 transition-transform" />
                                    </button>
                                    <button className="w-full flex items-center gap-3 px-2 py-3 rounded-xl text-white text-sm hover:bg-white/10 transition-all duration-200 group">
                                        <Home className="w-5 h-5 group-hover:scale-110 transition-transform" />
                                        <span className="hidden lg:block font-medium">Home</span>
                                    </button>
                                    <button className="w-full flex items-center gap-3 px-2 py-3 rounded-xl text-white text-sm hover:bg-white/10 transition-all duration-200 group">
                                        <Compass className="w-5 h-5 group-hover:scale-110 transition-transform" />
                                        <span className="hidden lg:block font-medium">Explore</span>
                                    </button>
                                    <button className="w-full flex items-center gap-3 px-2 py-3 rounded-xl text-white text-sm hover:bg-white/10 transition-all duration-200 group">
                                        <Bookmark className="w-5 h-5 group-hover:scale-110 transition-transform" />
                                        <span className="hidden lg:block font-medium">Favorites</span>
                                    </button>
                                </div>

                                {/* <div className="space-y-2 mb-8 border-b border-slate-500/50 pb-4">
                                    {[
                                        { name: "Technology", icon: <Laptop className="w-5 h-5 group-hover:scale-110 transition-transform" /> },
                                        { name: "Business", icon: <Briefcase className="w-5 h-5 group-hover:scale-110 transition-transform" /> },
                                        { name: "Entertainment", icon: <Film className="w-5 h-5 group-hover:scale-110 transition-transform" /> },
                                        { name: "Sports", icon: <Trophy className="w-5 h-5 group-hover:scale-110 transition-transform" /> },
                                        { name: "Science", icon: <FlaskConical className="w-5 h-5 group-hover:scale-110 transition-transform" /> },
                                        { name: "Health", icon: <Heart className="w-5 h-5 group-hover:scale-110 transition-transform" /> }
                                    ].map((category) => (
                                        <button
                                            key={category.name}
                                            className="w-full flex items-center gap-3 px-2 py-2.5 rounded-xl text-white hover:bg-white/10 transition-all duration-200 group text-left"
                                        >
                                            {category.icon}
                                            <span className="hidden lg:block font-medium text-sm">{category.name}</span>
                                        </button>
                                    ))}
                                </div> */}

                                {/* Actions */}
                                <div className="space-y-2 border-b border-slate-500/50 pb-4 mb-8">
                                    <button className="w-full flex items-center gap-3 px-2 py-3 rounded-xl text-white text-sm hover:bg-white/10 transition-all duration-200 group">
                                        <PlusCircle className="w-5 h-5 group-hover:scale-110 transition-transform" />
                                        <span className="hidden lg:block font-base">Create</span>
                                    </button>
                                    <button className="w-full flex items-center gap-3 px-2 py-3 rounded-xl text-white text-sm hover:bg-white/10 transition-all duration-200 group">
                                        <User className="w-5 h-5 group-hover:scale-110 transition-transform" />
                                        <span className="hidden lg:block font-base">Profile</span>
                                    </button>
                                    <button className="w-full flex items-center gap-3 px-2 py-3 rounded-xl text-white text-sm hover:bg-white/10 transition-all duration-200 group">
                                        <Link className="w-5 h-5 group-hover:scale-110 transition-transform" />
                                        <span className="hidden lg:block font-base">Social</span>
                                    </button>
                                </div>

                                {/* Accounts followed */}
                                <div className="space-y-2 ">
                                    <h1 className="hidden lg:block text-sm font-medium mb-8">Accounts followed</h1>
                                    <button className="w-full flex items-center gap-3 px-2 py-3 rounded-xl text-white text-sm hover:bg-white/10 transition-all duration-200 group">
                                        <User className="w-5 h-5 group-hover:scale-110 transition-transform" />
                                        <span className="hidden lg:block font-base">Dylan Page</span>
                                    </button>
                                    <button className="w-full flex items-center gap-3 px-2 py-3 rounded-xl text-white text-sm hover:bg-white/10 transition-all duration-200 group">
                                        <User className="w-5 h-5 group-hover:scale-110 transition-transform" />
                                        <span className="hidden lg:block font-base">BBC News</span>
                                    </button>
                                    <button className="w-full flex items-center gap-3 px-2 py-3 rounded-xl text-white text-sm hover:bg-white/10 transition-all duration-200 group">
                                        <User className="w-5 h-5 group-hover:scale-110 transition-transform" />
                                        <span className="hidden lg:block font-base">Daily Mail</span>
                                    </button>
                                </div>
                            </div>
                        </>
                    )}
                </div>
            </div>
        </div>
    )
}