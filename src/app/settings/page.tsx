'use client';

import { X, Search, User, Edit2, Bell, Lock, Globe, Users, Moon, HelpCircle, MessageSquare } from 'lucide-react';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function SettingsPage() {
    const router = useRouter();
    const [darkMode, setDarkMode] = useState(true);
    const [searchQuery, setSearchQuery] = useState('');

    return (
        <div className="relative min-h-screen bg-black text-white">
            {/* Header */}
            <div className="flex items-center justify-between px-4 py-4 border-b border-gray-800">
                <button
                    onClick={() => router.back()}
                    className="p-2 hover:bg-gray-800 rounded-full transition-colors"
                >
                    <X size={24} />
                </button>
                <h1 className="text-lg font-semibold">Settings</h1>
                <div className="w-10"></div>
            </div>

            <div className="px-4 py-4 space-y-6">
                {/* Search Bar */}
                <div className="relative">
                    <Search size={20} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                    <input
                        type="text"
                        placeholder="Search settings"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="w-full bg-gray-800/50 rounded-lg pl-10 pr-4 py-3 text-white placeholder-gray-400 border border-gray-700 focus:outline-none focus:border-sky-500 transition-colors"
                    />
                </div>

                {/* User Profile Section */}
                <div className="bg-gray-800/30 rounded-xl p-4 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                        <div className="relative">
                            <img
                                src="/assets/avatar1.jpg"
                                alt="Profile"
                                className="w-12 h-12 rounded-full object-cover"
                            />
                            <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-black"></div>
                        </div>
                        <div>
                            <h3 className="font-semibold text-white">Jung Eun-bi</h3>
                            <p className="text-sm text-gray-400">@user</p>
                        </div>
                    </div>
                    <button className="px-4 py-2 bg-gray-700 hover:bg-gray-600 rounded-lg text-sm font-medium transition-colors">
                        Log out
                    </button>
                </div>

                {/* YOUR DATA Section 1 */}
                <div>
                    <h2 className="text-gray-400 text-sm font-medium mb-3 uppercase tracking-wide">Your Data</h2>
                    <div className="bg-gray-800/30 rounded-xl overflow-hidden">
                        <div className="flex items-center justify-between p-4 border-b border-gray-700/50">
                            <div className="flex items-center gap-3">
                                <User size={18} className="text-gray-400" />
                                <span className="text-sm text-gray-300">Name:</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <span className="text-sm text-white">Juan son chuner</span>
                                <Edit2 size={16} className="text-gray-400" />
                            </div>
                        </div>
                        <div className="flex items-center justify-between p-4">
                            <div className="flex items-center gap-3">
                                <span className="text-lg">@</span>
                                <span className="text-sm text-gray-300">Email:</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <span className="text-sm text-white">Juan@gmail.com</span>
                                <Edit2 size={16} className="text-gray-400" />
                            </div>
                        </div>
                    </div>
                </div>

                {/* YOUR DATA Section 2 */}
                <div>
                    <h2 className="text-gray-400 text-sm font-medium mb-3 uppercase tracking-wide">Your Data</h2>
                    <div className="bg-gray-800/30 rounded-xl overflow-hidden">
                        <button className="flex items-center justify-between w-full p-4 border-b border-gray-700/50 hover:bg-gray-700/30 transition-colors">
                            <div className="flex items-center gap-3">
                                <Bell size={18} className="text-gray-400" />
                                <span className="text-sm text-white">Notification:</span>
                            </div>
                            <span className="text-gray-400">{'>'}</span>
                        </button>

                        <button className="flex items-center justify-between w-full p-4 border-b border-gray-700/50 hover:bg-gray-700/30 transition-colors">
                            <div className="flex items-center gap-3">
                                <Lock size={18} className="text-gray-400" />
                                <span className="text-sm text-white">Change Password:</span>
                            </div>
                            <span className="text-gray-400">{'>'}</span>
                        </button>

                        <button className="flex items-center justify-between w-full p-4 border-b border-gray-700/50 hover:bg-gray-700/30 transition-colors">
                            <div className="flex items-center gap-3">
                                <Globe size={18} className="text-gray-400" />
                                <span className="text-sm text-white">Language:</span>
                            </div>
                            <span className="text-gray-400">{'>'}</span>
                        </button>

                        <div className="flex items-center justify-between p-4 border-b border-gray-700/50">
                            <div className="flex items-center gap-3">
                                <Users size={18} className="text-gray-400" />
                                <span className="text-sm text-white">Accessibility:</span>
                            </div>
                            <span className="text-sm text-gray-400">Juan@gmail.com</span>
                        </div>

                        <div className="flex items-center justify-between p-4">
                            <div className="flex items-center gap-3">
                                <Moon size={18} className="text-gray-400" />
                                <span className="text-sm text-white">Dark Mode:</span>
                            </div>
                            <button
                                onClick={() => setDarkMode(!darkMode)}
                                className={`relative w-12 h-6 rounded-full transition-colors ${darkMode ? 'bg-sky-500' : 'bg-gray-600'
                                    }`}
                            >
                                <div
                                    className={`absolute top-0.5 w-5 h-5 bg-white rounded-full transition-transform ${darkMode ? 'translate-x-6' : 'translate-x-0.5'
                                        }`}
                                />
                            </button>
                        </div>
                    </div>
                </div>

                {/* ADDITIONAL INFO Section */}
                <div>
                    <h2 className="text-gray-400 text-sm font-medium mb-3 uppercase tracking-wide">Additional Info</h2>
                    <div className="bg-gray-800/30 rounded-xl overflow-hidden">
                        <button className="flex items-center justify-between w-full p-4 hover:bg-gray-700/30 transition-colors">
                            <div className="flex items-center gap-3">
                                <HelpCircle size={18} className="text-gray-400" />
                                <span className="text-sm text-white">Support and Feedback:</span>
                            </div>
                            <Edit2 size={16} className="text-gray-400" />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}