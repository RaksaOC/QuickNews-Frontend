'use client';

import { useState, useRef, useEffect } from 'react';
import { X, Camera, Square, RotateCcw, Upload, Zap, Clock, Sparkles, Music, Hash, MapPin, Users, Globe, Lock, Timer, User, Flashlight } from 'lucide-react';
import { useRouter } from 'next/navigation';

export default function VideoCreator() {
    const [isRecording, setIsRecording] = useState(false);
    const [recordingTime, setRecordingTime] = useState(0);
    const [selectedDuration, setSelectedDuration] = useState('15s');
    const [selectedMode, setSelectedMode] = useState<'15s' | '60s' | '10m'>('15s');
    const [selectedSpeed, setSelectedSpeed] = useState(1);
    const [showSettings, setShowSettings] = useState(false);
    const [caption, setCaption] = useState('');
    const [hashtags, setHashtags] = useState('');
    const [location, setLocation] = useState('');
    const [privacy, setPrivacy] = useState<'public' | 'followers' | 'private'>('public');
    const [flashMode, setFlashMode] = useState<'off' | 'on' | 'auto'>('off');
    const [cameraFacing, setCameraFacing] = useState<'front' | 'back'>('back');

    const router = useRouter();
    const timerRef = useRef<NodeJS.Timeout>();

    const modes = ['10m', '60s', '15s'];
    const speeds = [0.3, 0.5, 1, 2, 3];

    useEffect(() => {
        if (isRecording) {
            timerRef.current = setInterval(() => {
                setRecordingTime(prev => {
                    const maxTime = selectedMode === '15s' ? 15 : selectedMode === '60s' ? 60 : 600;
                    if (prev >= maxTime) {
                        setIsRecording(false);
                        return 0;
                    }
                    return prev + 0.1;
                });
            }, 100);
        } else {
            if (timerRef.current) {
                clearInterval(timerRef.current);
            }
        }

        return () => {
            if (timerRef.current) {
                clearInterval(timerRef.current);
            }
        };
    }, [isRecording, selectedMode]);

    const handleRecord = () => {


        if (isRecording) {
            setIsRecording(false);
            setRecordingTime(0);
        } else {
            setIsRecording(true);
        }
    };

    const formatTime = (time: number) => {
        const seconds = Math.floor(time);
        const minutes = Math.floor(seconds / 60);
        const remainingSeconds = seconds % 60;
        return `${minutes}:${remainingSeconds.toString().padStart(2, '0')}`;
    };

    const getSpeedLabel = (speed: number) => {
        if (speed < 1) return `${speed}x`;
        return `${speed}x`;
    };

    return (
        <div className="h-full bg-black relative overflow-hidden">
            {/* Main Camera View */}
            <div className="relative h-full flex flex-col">
                {/* Camera Viewfinder */}
                <div className="flex-1 relative bg-gray-900 flex items-center justify-center">
                    {/* Placeholder Camera View */}
                    <div className="w-full h-full bg-gradient-to-b from-gray-800 to-gray-900 flex items-center justify-center">
                        <div className="text-center text-gray-400">
                            <Camera size={64} className="mx-auto mb-4" />
                            <p className="text-sm">Tap record to start filming</p>
                        </div>
                    </div>

                    {/* Top Controls */}
                    <div className="absolute top-4 left-4 right-4 flex justify-between items-center z-10">
                        {/* Back Button */}
                        <button
                            onClick={() => router.back()}
                            className="p-2 rounded-full text-white"
                        >
                            <X size={24} />
                        </button>

                        {/* Camera Flip */}
                        <button
                            onClick={() => setCameraFacing(cameraFacing === 'front' ? 'back' : 'front')}
                            className="p-2 rounded-full text-white"
                        >
                            <RotateCcw size={24} />
                        </button>
                    </div>

                    {/* Timer Display */}
                    {isRecording && (
                        <div className="absolute top-20 left-1/2 transform -translate-x-1/2 z-10">
                            <div className="bg-sky-500 px-3 py-1 rounded-full flex items-center gap-2">
                                <div className="w-2 h-2 bg-white rounded-full animate-pulse" />
                                <span className="text-white text-sm font-medium">
                                    {formatTime(recordingTime)}
                                </span>
                            </div>
                        </div>
                    )}

                    {/* Side Controls */}
                    <div className="absolute right-4 top-1/2 transform -translate-y-1/2 flex flex-col gap-6 z-10">
                        {/* Flash */}
                        <button
                            onClick={() => setFlashMode(flashMode === 'off' ? 'on' : flashMode === 'on' ? 'auto' : 'off')}
                            className="p-3 rounded-full text-white"
                        >
                            <Flashlight size={24} />
                        </button>

                        {/* Effects */}
                        <button className="p-3 rounded-full text-white">
                            <Sparkles size={24} />
                        </button>
                    </div>

                    {/* Progress Bar */}
                    {isRecording && (
                        <div className="absolute bottom-40 left-4 right-4 z-10">
                            <div className="w-full h-1 bg-white/20 rounded-full overflow-hidden">
                                <div
                                    className="h-full bg-sky-500 transition-all duration-100 ease-linear"
                                    style={{
                                        width: `${(recordingTime / (selectedMode === '15s' ? 15 : selectedMode === '60s' ? 60 : 600)) * 100}%`
                                    }}
                                />
                            </div>
                        </div>
                    )}
                </div>

                {/* Duration/Mode Selector */}
                {
                    !isRecording && (<div className="absolute bottom-40 left-1/2 transform -translate-x-1/2 z-20">
                        <div className="flex items-center gap-6">
                            {modes.map((mode) => (
                                <button
                                    key={mode}
                                    onClick={() => setSelectedMode(mode as any)}
                                    className={`text-sm font-medium transition-all duration-200 ${selectedMode === mode
                                        ? 'bg-white text-black px-4 py-2 rounded-full'
                                        : 'text-gray-400'
                                        }`}
                                >
                                    {mode}
                                </button>
                            ))}
                        </div>
                    </div>)
                }


                {/* Bottom Controls */}
                <div className="absolute bottom-16 left-0 right-0 px-6 z-20">
                    <div className="flex items-center justify-between">
                        {/* Gallery */}
                        <div className="flex flex-col gap-2">
                            <button className="w-12 h-12 bg-gray-700 rounded-xl overflow-hidden">
                                <img
                                    src="/assets/avatar1.jpg"
                                    alt="Gallery"
                                    className="w-full h-full object-cover"
                                />
                            </button>
                        </div>

                        {/* Record Button */}
                        <div className="relative">
                            <button
                                onClick={handleRecord}
                                className={`relative w-20 h-20 rounded-full border-4 transition-all duration-200 ${isRecording
                                    ? 'border-sky-500 bg-sky-500 scale-110'
                                    : 'border-white bg-transparent hover:scale-105'
                                    }`}
                            >
                                {isRecording ? (
                                    <Square size={32} className="text-white mx-auto" />
                                ) : (
                                    <div className="w-16 h-16 bg-sky-500 rounded-full mx-auto" />
                                )
                                }
                            </button>
                        </div>

                        {/* Right Space */}
                        <div className="w-12"></div>
                    </div>
                </div>
            </div>

            {/* Settings Panel */}
            {showSettings && (
                <div className="absolute inset-0 z-50 bg-black/80 backdrop-blur-sm">
                    <div className="h-full flex flex-col">
                        {/* Header */}
                        <div className="flex items-center justify-between p-4 border-b border-gray-700/50">
                            <h2 className="text-xl font-bold text-white">Settings</h2>
                            <button
                                onClick={() => setShowSettings(false)}
                                className="p-2 hover:bg-gray-700/50 rounded-full text-gray-400 hover:text-white"
                            >
                                <X size={22} />
                            </button>
                        </div>

                        {/* Settings Content */}
                        <div className="flex-1 overflow-y-auto p-6 space-y-6">
                            {/* Caption */}
                            <div>
                                <label className="block text-sm font-medium text-white mb-2">Caption</label>
                                <textarea
                                    value={caption}
                                    onChange={(e) => setCaption(e.target.value)}
                                    placeholder="Describe your video..."
                                    className="w-full bg-gray-800/80 rounded-xl px-4 py-3 text-white placeholder-gray-400 border border-gray-600/50 focus:outline-none focus:ring-2 focus:ring-sky-500/50 resize-none"
                                    rows={3}
                                />
                            </div>

                            {/* Hashtags */}
                            <div>
                                <label className="flex items-center gap-2 text-sm font-medium text-white mb-2">
                                    <Hash size={16} />
                                    Hashtags
                                </label>
                                <input
                                    value={hashtags}
                                    onChange={(e) => setHashtags(e.target.value)}
                                    placeholder="#viral #trending #news"
                                    className="w-full bg-gray-800/80 rounded-xl px-4 py-3 text-white placeholder-gray-400 border border-gray-600/50 focus:outline-none focus:ring-2 focus:ring-sky-500/50"
                                />
                            </div>

                            {/* Location */}
                            <div>
                                <label className="flex items-center gap-2 text-sm font-medium text-white mb-2">
                                    <MapPin size={16} />
                                    Location
                                </label>
                                <input
                                    value={location}
                                    onChange={(e) => setLocation(e.target.value)}
                                    placeholder="Add location"
                                    className="w-full bg-gray-800/80 rounded-xl px-4 py-3 text-white placeholder-gray-400 border border-gray-600/50 focus:outline-none focus:ring-2 focus:ring-sky-500/50"
                                />
                            </div>

                            {/* Privacy */}
                            <div>
                                <label className="block text-sm font-medium text-white mb-3">Who can see this video</label>
                                <div className="space-y-2">
                                    <button
                                        onClick={() => setPrivacy('public')}
                                        className={`w-full flex items-center gap-3 p-3 rounded-xl transition-all duration-200 ${privacy === 'public' ? 'bg-sky-500/20 border border-sky-500/50' : 'bg-gray-800/50 hover:bg-gray-700/50'
                                            }`}
                                    >
                                        <Globe size={16} />
                                        <span className="text-white">Everyone</span>
                                    </button>
                                    <button
                                        onClick={() => setPrivacy('followers')}
                                        className={`w-full flex items-center gap-3 p-3 rounded-xl transition-all duration-200 ${privacy === 'followers' ? 'bg-sky-500/20 border border-sky-500/50' : 'bg-gray-800/50 hover:bg-gray-700/50'
                                            }`}
                                    >
                                        <Users size={16} />
                                        <span className="text-white">Followers</span>
                                    </button>
                                    <button
                                        onClick={() => setPrivacy('private')}
                                        className={`w-full flex items-center gap-3 p-3 rounded-xl transition-all duration-200 ${privacy === 'private' ? 'bg-sky-500/20 border border-sky-500/50' : 'bg-gray-800/50 hover:bg-gray-700/50'
                                            }`}
                                    >
                                        <Lock size={16} />
                                        <span className="text-white">Only me</span>
                                    </button>
                                </div>
                            </div>
                        </div>

                        {/* Actions */}
                        <div className="p-6 border-t border-gray-700/50">
                            <div className="flex gap-3">
                                <button className="flex-1 bg-gray-700 hover:bg-gray-600 text-white py-3 rounded-xl font-medium transition-all duration-200">
                                    Save Draft
                                </button>
                                <button className="flex-1 bg-sky-500 hover:bg-sky-600 text-white py-3 rounded-xl font-medium transition-all duration-200">
                                    Post
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
} 