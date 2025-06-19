import { useEffect, useRef, useState } from "react";

export function ProgressBar({ progress, onProgressChange, onProgressChangeUpdate, onDragChange }: { progress: number, onProgressChange: (progress: number) => void, onProgressChangeUpdate: (progress: number) => void, onDragChange: (dragging: boolean) => void }) {
    const barRef = useRef<HTMLDivElement>(null);
    const [dragging, setDragging] = useState(false);

    // Calculate progress based on mouse/touch position
    const getProgressFromEvent = (e: MouseEvent | TouchEvent) => {
        if (!barRef.current) return progress;
        const rect = barRef.current.getBoundingClientRect();
        let clientX: number;
        if ("touches" in e && e.touches.length > 0) {
            clientX = e.touches[0].clientX;
        } else if ("changedTouches" in e && e.changedTouches.length > 0) {
            clientX = e.changedTouches[0].clientX;
        } else if ("clientX" in e) {
            clientX = (e as MouseEvent).clientX;
        } else {
            return progress;
        }
        let newProgress = (clientX - rect.left) / rect.width;
        newProgress = Math.max(0, Math.min(1, newProgress));
        return newProgress;
    };

    // Mouse events
    const handleMouseDown = (e: React.MouseEvent) => {
        e.stopPropagation();
        setDragging(true);
        onDragChange(true);
    };

    const handleMouseMove = (e: MouseEvent) => {
        if (!dragging) return;
        e.preventDefault();
        onProgressChange(getProgressFromEvent(e));
        onProgressChangeUpdate(getProgressFromEvent(e));
    };

    const handleMouseUp = (e: MouseEvent) => {
        if (!dragging) return;
        e.preventDefault();
        setDragging(false);
        onDragChange(false);
        onProgressChange(getProgressFromEvent(e));
        onProgressChangeUpdate(getProgressFromEvent(e));
    };

    // Touch events
    const handleTouchStart = (e: React.TouchEvent) => {
        e.stopPropagation();
        setDragging(true);
        onDragChange(true);
    };

    const handleTouchMove = (e: TouchEvent) => {
        if (!dragging) return;
        e.preventDefault();
        onProgressChange(getProgressFromEvent(e));
        onProgressChangeUpdate(getProgressFromEvent(e));
    };

    const handleTouchEnd = (e: TouchEvent) => {
        if (!dragging) return;
        e.preventDefault();
        setDragging(false);
        onDragChange(false);
        onProgressChange(getProgressFromEvent(e));
        onProgressChangeUpdate(getProgressFromEvent(e));
    };

    // Attach/remove global listeners
    useEffect(() => {
        if (dragging) {
            document.addEventListener("mousemove", handleMouseMove);
            document.addEventListener("mouseup", handleMouseUp);
            document.addEventListener("touchmove", handleTouchMove, { passive: false });
            document.addEventListener("touchend", handleTouchEnd);
        } else {
            document.removeEventListener("mousemove", handleMouseMove);
            document.removeEventListener("mouseup", handleMouseUp);
            document.removeEventListener("touchmove", handleTouchMove);
            document.removeEventListener("touchend", handleTouchEnd);
        }
        return () => {
            document.removeEventListener("mousemove", handleMouseMove);
            document.removeEventListener("mouseup", handleMouseUp);
            document.removeEventListener("touchmove", handleTouchMove);
            document.removeEventListener("touchend", handleTouchEnd);
        };
        // eslint-disable-next-line
    }, [dragging]);

    return (
        <div
            className="absolute bottom-2 left-0 right-0 px-6 z-[999]"
            onTouchStart={(e) => e.stopPropagation()}
            onTouchMove={(e) => e.stopPropagation()}
            onTouchEnd={(e) => e.stopPropagation()}
        >
            <div
                ref={barRef}
                className="w-full h-1 bg-gray-500/50 rounded-full relative cursor-pointer"
                onMouseDown={handleMouseDown}
                onTouchStart={handleTouchStart}
                onClick={e => e.preventDefault()}
            >
                <div
                    className="h-full bg-sky-500 rounded-full transition-all duration-300"
                    style={{ width: `${progress * 100}%` }}
                ></div>
                {/* Draggable handle */}
                <div
                    className="absolute top-1/2 -translate-y-1/2 bg-sky-500 z-[999] w-2 h-2 rounded-full"
                    style={{
                        left: `calc(${progress * 100}% - 8px)`,
                        width: 10,
                        height: 10,
                        background: "#38bdf8",
                        borderRadius: "50%",
                        boxShadow: "0 0 12px #ffffff",
                        cursor: "grab",
                        transition: "background 0.2s",
                    }}
                />
            </div>
        </div>
    )
}