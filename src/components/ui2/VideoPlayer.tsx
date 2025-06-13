import { useEffect, useRef, useState } from 'react';
import ReactPlayer from 'react-player';
import { Play, Pause, Heart } from 'lucide-react';

interface VideoPlayerProps {
    url: string;
    isVisible: boolean;
    onDoubleTap: () => void;
    onProgressUpdate: (played: number) => void;
    progress: number;

    // used when progress is changed with the progress bar
    progressChange: number;
}

export default function VideoPlayer({ url, isVisible, onDoubleTap, onProgressUpdate, progress, progressChange }: VideoPlayerProps) {
    const [isPlaying, setIsPlaying] = useState(false);
    const [showControls, setShowControls] = useState(false);
    const [showLikePop, setShowLikePop] = useState(false);
    const [likePosition, setLikePosition] = useState({ x: 0, y: 0 });
    const playerRef = useRef<ReactPlayer>(null);
    const containerRef = useRef<HTMLDivElement>(null);
    const lastTapRef = useRef(0);
    const lastDoubleTapRef = useRef(0);
    const controlsTimeoutRef = useRef<NodeJS.Timeout>();
    const [isUserPaused, setIsUserPaused] = useState(false);

    // Handle visibility changes
    useEffect(() => {
        if (isVisible && !isUserPaused) {
            setIsPlaying(true);
        } else {
            setIsPlaying(false);
        }
    }, [isVisible, isUserPaused]);

    useEffect(() => {
        if (playerRef.current) {
            playerRef.current.seekTo(progress, 'fraction');
        }
    }, [progressChange]);

    const handleTap = (event: React.MouseEvent | React.TouchEvent) => {
        const now = Date.now();
        const DOUBLE_TAP_DELAY = 300;

        // Prevent default touch behavior
        if ('touches' in event) {
            event.preventDefault();
        }

        // Get click/touch position
        if (containerRef.current) {
            const rect = containerRef.current.getBoundingClientRect();
            let x, y;
            if ('touches' in event) {
                x = event.touches[0].clientX - rect.left;
                y = event.touches[0].clientY - rect.top;
            } else {
                x = event.clientX - rect.left;
                y = event.clientY - rect.top;
            }
            setLikePosition({ x, y });
        }

        // Check for double tap
        if (now - lastTapRef.current < DOUBLE_TAP_DELAY) {
            // Double tap detected - only handle like action
            onDoubleTap();
            triggerLikePop();
            lastDoubleTapRef.current = now;
            lastTapRef.current = 0;
            return;
        }

        // Single tap - handle play/pause
        lastTapRef.current = now;

        // Only handle play/pause if it's not a potential double tap
        setTimeout(() => {
            if (now === lastTapRef.current) {
                handlePlayPause();
            }
        }, DOUBLE_TAP_DELAY);
    };

    const handlePlayPause = () => {
        setIsPlaying(prev => !prev);
        setIsUserPaused(prev => !prev);

        // Show controls and manage timeout
        setShowControls(true);
        if (controlsTimeoutRef.current) {
            clearTimeout(controlsTimeoutRef.current);
        }
    };

    const triggerLikePop = () => {
        setShowLikePop(true);
        setTimeout(() => setShowLikePop(false), 800);
    };

    const handleProgress = (state: { played: number }) => {
        if (onProgressUpdate) {
            onProgressUpdate(state.played); // played is a float between 0 and 1
        }
    };

    return (
        <div
            ref={containerRef}
            className="absolute top-0 left-0 w-full h-full"
            onClick={handleTap}
            onTouchStart={handleTap}
            onTouchEnd={(e) => e.preventDefault()}
            style={{ touchAction: 'none' }}
        >
            <ReactPlayer
                ref={playerRef}
                url={url}
                playing={isPlaying}
                muted={false}
                loop
                playsInline // Only need one playsInline
                disablePictureInPicture
                disableRemotePlayback
                disableContextMenu
                disableKeyboard
                disableFullscreen
                progressInterval={150}
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
                        <button className="transition-colors text-white/90">
                            {!isPlaying ? <Play size={80} className="animate-fade-out fill-white/80" /> : null}
                        </button>
                    </div>
                </div>
            )}

            {showLikePop && (
                <div
                    className="absolute z-20 pointer-events-none"
                    style={{
                        left: likePosition.x - 40,
                        top: likePosition.y - 40,
                    }}
                >
                    <div className="absolute inset-0 bg-sky-500/50 rounded-full blur-md transform scale-150"></div>
                    <Heart size={80} className="relative text-sky-500 fill-sky-500 animate-like-pop" />
                </div>
            )}
        </div>
    );
}