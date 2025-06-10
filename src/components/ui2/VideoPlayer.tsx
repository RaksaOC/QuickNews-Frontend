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
    const playPauseTimeoutRef = useRef<NodeJS.Timeout>();
    const controlsTimeoutRef = useRef<NodeJS.Timeout>();

    // Handle visibility changes
    useEffect(() => {
        if (isVisible) {
            playerRef.current?.seekTo(0, 'seconds');
            setIsPlaying(true);
            setShowControls(false);
        } else {
            setIsPlaying(false);
            setShowControls(false);
        }
    }, [isVisible]);

    useEffect(() => {
        if (playerRef.current) {
            playerRef.current.seekTo(progress, 'fraction');
        }
    }, [progressChange]);

    const handleTap = (event: React.MouseEvent | React.TouchEvent) => {
        const now = Date.now();
        const DOUBLE_TAP_DELAY = 300; // milliseconds
        const PLAY_PAUSE_DELAY = 400; // milliseconds
        const DOUBLE_TAP_COOLDOWN = 800; // cooldown period to prevent rapid double taps

        // Get click/touch position relative to container
        if (containerRef.current) {
            const rect = containerRef.current.getBoundingClientRect();
            let x, y;

            if ('touches' in event) {
                // Touch event
                x = event.touches[0].clientX - rect.left;
                y = event.touches[0].clientY - rect.top;
            } else {
                // Mouse event
                x = event.clientX - rect.left;
                y = event.clientY - rect.top;
            }
            setLikePosition({ x, y });
        }

        const isWithinDoubleTapWindow = now - lastTapRef.current < DOUBLE_TAP_DELAY;
        const isOutsideCooldown = now - lastDoubleTapRef.current > DOUBLE_TAP_COOLDOWN;

        if (isWithinDoubleTapWindow && isOutsideCooldown) {
            // Valid double tap detected
            onDoubleTap();
            triggerLikePop();
            lastDoubleTapRef.current = now;

            // Clear any pending play/pause
            if (playPauseTimeoutRef.current) {
                clearTimeout(playPauseTimeoutRef.current);
            }
        } else if (isWithinDoubleTapWindow && !isOutsideCooldown) {
            // Double tap detected but within cooldown - ignore completely
            // Don't trigger play/pause either
        } else {
            // Single tap - delay the play/pause to allow for potential double tap
            playPauseTimeoutRef.current = setTimeout(() => {
                handlePlayPause();
            }, PLAY_PAUSE_DELAY);
        }

        // Always update lastTapRef for the next tap
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
        >
            <ReactPlayer
                ref={playerRef}
                url={url}
                playing={isPlaying}
                muted={true} // TO CHANGE
                loop
                playsInline
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
                        <button
                            className=" transition-colors text-white/90"
                        >
                            {!isPlaying ? <Play size={80} className="animate-fade-out fill-white/80" /> : null}
                        </button>
                    </div>
                </div>
            )}

            {showLikePop && (
                <div
                    className="absolute z-20 pointer-events-none"
                    style={{
                        left: likePosition.x - 40, // Center the heart (80px width / 2)
                        top: likePosition.y - 40,  // Center the heart (80px height / 2)
                    }}
                >
                    {/* Blurry background effect */}
                    <div className="absolute inset-0 bg-sky-500/50 rounded-full blur-md transform scale-150"></div>
                    <Heart size={80} className="relative text-sky-500 fill-sky-500 animate-like-pop" />
                </div>
            )}
        </div>
    );
}