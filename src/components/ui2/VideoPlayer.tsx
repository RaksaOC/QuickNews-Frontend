import { useEffect, useRef, useState } from 'react';
import ReactPlayer from 'react-player';
import { Play, Pause, Heart } from 'lucide-react';

interface VideoPlayerProps {
    url: string;
    isVisible: boolean;
    onDoubleTap: () => void;
}

export default function VideoPlayer({ url, isVisible, onDoubleTap }: VideoPlayerProps) {
    const [isPlaying, setIsPlaying] = useState(false);
    const [showControls, setShowControls] = useState(false);
    const [showLikePop, setShowLikePop] = useState(false);
    const playerRef = useRef<ReactPlayer>(null);
    const lastTapRef = useRef(0);
    const playPauseTimeoutRef = useRef<NodeJS.Timeout>();
    const controlsTimeoutRef = useRef<NodeJS.Timeout>();

    // Handle visibility changes
    useEffect(() => {
        if (isVisible) {
            setIsPlaying(true);
            // Show controls briefly when becoming visible
            setShowControls(false);
        } else {
            setIsPlaying(false);
            setShowControls(false);
        }
    }, [isVisible]);

    const handleTap = () => {
        const now = Date.now();
        const DOUBLE_TAP_DELAY = 300; // milliseconds
        const PLAY_PAUSE_DELAY = 400; // milliseconds

        if (now - lastTapRef.current < DOUBLE_TAP_DELAY) {
            // Double tap detected
            onDoubleTap();
            triggerLikePop();
            // Clear any pending play/pause
            if (playPauseTimeoutRef.current) {
                clearTimeout(playPauseTimeoutRef.current);
            }
        } else {
            // Single tap - delay the play/pause to allow for double tap
            playPauseTimeoutRef.current = setTimeout(() => {
                handlePlayPause();
            }, PLAY_PAUSE_DELAY);
        }

        lastTapRef.current = now;
    };

    const handlePlayPause = () => {
        setIsPlaying(!isPlaying);
        setShowControls(true);
    };

    const triggerLikePop = () => {
        setShowLikePop(true);
        setTimeout(() => setShowLikePop(false), 800);
    };

    const handleProgress = (state: { played: number }) => {
        // You can add additional logic here if needed
    };

    return (
        <div
            className="absolute top-0 left-0 w-full h-full"
            onClick={handleTap}
        >
            <ReactPlayer
                ref={playerRef}
                url={url}
                playing={isPlaying}
                muted={false}
                loop
                playsInline
                width="100%"
                height="100%"
                onProgress={handleProgress}
                className="w-full h-full rounded-lg"
                style={{ minHeight: '100%', maxHeight: '100%', objectFit: 'cover' }}
            />

            {/* <video
                src={url}
                autoPlay={isPlaying}
                muted={false}
                loop
                playsInline
                className="w-full h-full rounded-lg"
                style={{ minHeight: '100%', maxHeight: '100%',  objectFit: 'cover' }}
            /> */}

            {showControls && (
                <div className="absolute top-[45%] left-0 right-0 p-4">
                    <div className="flex items-center justify-center">
                        <button
                            onClick={handlePlayPause}
                            className=" transition-colors text-white/90"
                        >
                            {!isPlaying && !showLikePop ? <Play size={80} className="animate-fade-out fill-white/80" /> : null}
                        </button>
                    </div>
                </div>
            )}

            {showLikePop && (
                <div className="absolute top-0 left-0 w-full h-full z-20 flex justify-center items-center">
                    <Heart size={80} className="text-red-500 fill-red-500 animate-like-pop translate-x-0" />
                </div>
            )}
        </div>
    );
} 