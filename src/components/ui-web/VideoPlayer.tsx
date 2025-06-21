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
    const controlsTimeoutRef = useRef<NodeJS.Timeout>();
    const [isUserPaused, setIsUserPaused] = useState(false);
    const touchStartY = useRef(0);
    const touchStartTime = useRef(0);

    // Handle visibility changes
    useEffect(() => {
        if (isVisible && !isUserPaused) {
            playerRef.current?.seekTo(0, 'fraction');
            setIsPlaying(true);
            setShowControls(true);
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

    const handleClick = (event: React.MouseEvent) => {
        event.preventDefault();
        handlePlayPause();
    };

    const handleTouchStart = (event: React.TouchEvent) => {
        touchStartTime.current = Date.now();
        touchStartY.current = event.touches[0].clientY;
    };

    const handleTouchMove = (event: React.TouchEvent) => {
        if (!touchStartY.current) return;

        const currentY = event.touches[0].clientY;
        const deltaY = Math.abs(currentY - touchStartY.current);

        // If vertical movement is significant, it's a scroll
        if (deltaY > 10) {
            touchStartY.current = 0;
        }
    };

    const handleTouchEnd = (event: React.TouchEvent) => {
        const now = Date.now();
        const touchDuration = now - touchStartTime.current;

        // Only trigger play/pause if it was a short tap (less than 200ms)
        // and there wasn't significant movement
        if (touchDuration < 200 && touchStartY.current !== 0) {
            handlePlayPause();
        }

        touchStartY.current = 0;
        touchStartTime.current = 0;
    };

    const handlePlayPause = () => {
        const newPlayingState = !isPlaying;
        setIsPlaying(newPlayingState);
        setIsUserPaused(newPlayingState);
        setShowControls(true);

        // Show controls and manage timeout
        if (controlsTimeoutRef.current) {
            clearTimeout(controlsTimeoutRef.current);
        }
        setShowControls(false);
    };

    const handleProgress = (state: { played: number }) => {
        if (onProgressUpdate) {
            onProgressUpdate(state.played); // played is a float between 0 and 1
        }
    };

    // Reset video position when becoming visible
    useEffect(() => {
        if (isVisible && !isUserPaused) {
            playerRef.current?.seekTo(0, 'fraction');
        }
    }, [isVisible]);

    return (
        <div
            ref={containerRef}
            className="absolute top-0 left-0 w-full h-full rounded-full"
            onClick={handleClick}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
            style={{ touchAction: 'pan-y' }}
        >
            <ReactPlayer
                ref={playerRef}
                url={url}
                playing={isPlaying}
                muted={false}
                loop
                playsInline
                disablePictureInPicture
                disableRemotePlayback
                disableContextMenu
                disableKeyboard
                disableFullscreen
                progressInterval={150}
                width="100%"
                height="100%"
                onProgress={handleProgress}
                className="w-full h-full rounded-xl"
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