'use client'
import React from 'react';

const AnimatingBackground = () => {
    // Floating tech orbs
    const orbs = Array.from({ length: 8 }, (_, i) => ({
        id: i,
        size: Math.random() * 120 + 60,
        x: Math.random() * 100,
        y: Math.random() * 100,
        duration: Math.random() * 20 + 15,
        delay: Math.random() * 10,
        opacity: Math.random() * 0.1 + 0.05,
    }));

    // Grid dots
    const gridDots = Array.from({ length: 40 }, (_, i) => ({
        id: i,
        x: (i % 8) * 12.5 + 6.25,
        y: Math.floor(i / 8) * 16.67 + 10,
        delay: Math.random() * 4,
    }));

    return (
        <div className="fixed inset-0 z-0 pointer-events-none select-none overflow-hidden" aria-hidden="true">
            {/* Base gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-slate-900 to-sky-950"></div>

            {/* Animated mesh background */}
            <div
                className="absolute inset-0 opacity-30"
                style={{
                    backgroundImage: `
                        linear-gradient(rgba(14, 165, 233, 0.1) 1px, transparent 1px),
                        linear-gradient(90deg, rgba(14, 165, 233, 0.1) 1px, transparent 1px)
                    `,
                    backgroundSize: '80px 80px',
                    animation: 'meshFlow 30s linear infinite'
                }}
            ></div>

            {/* Large floating orbs */}
            {orbs.map((orb) => (
                <div
                    key={orb.id}
                    className="absolute rounded-full"
                    style={{
                        width: `${orb.size}px`,
                        height: `${orb.size}px`,
                        left: `${orb.x}%`,
                        top: `${orb.y}%`,
                        background: `radial-gradient(circle, rgba(14, 165, 233, ${orb.opacity}) 0%, rgba(14, 165, 233, ${orb.opacity * 0.3}) 50%, transparent 100%)`,
                        animation: `orbFloat ${orb.duration}s ease-in-out infinite`,
                        animationDelay: `${orb.delay}s`,
                        filter: 'blur(1px)'
                    }}
                ></div>
            ))}

            {/* Grid dots pattern */}
            <div className="absolute inset-0">
                {gridDots.map((dot) => (
                    <div
                        key={dot.id}
                        className="absolute w-1 h-1 bg-sky-500/20 rounded-full"
                        style={{
                            left: `${dot.x}%`,
                            top: `${dot.y}%`,
                            animation: `dotPulse 3s ease-in-out infinite`,
                            animationDelay: `${dot.delay}s`
                        }}
                    ></div>
                ))}
            </div>

            {/* Tech UI elements */}
            <div className="absolute inset-0">
                {/* Corner brackets */}
                <div className="absolute top-6 left-6 w-8 h-8 border-l-2 border-t-2 border-sky-500/40 opacity-60"></div>
                <div className="absolute top-6 right-6 w-8 h-8 border-r-2 border-t-2 border-sky-500/40 opacity-60"></div>
                <div className="absolute bottom-6 left-6 w-8 h-8 border-l-2 border-b-2 border-sky-500/40 opacity-60"></div>
                <div className="absolute bottom-6 right-6 w-8 h-8 border-r-2 border-b-2 border-sky-500/40 opacity-60"></div>

                {/* Central accent lines */}
                <div
                    className="absolute left-1/4 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-sky-500/30 to-transparent"
                    style={{ animation: 'lineGlow 8s ease-in-out infinite' }}
                ></div>
                <div
                    className="absolute right-1/4 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-sky-500/30 to-transparent"
                    style={{ animation: 'lineGlow 8s ease-in-out infinite 2s' }}
                ></div>

                {/* Scanning effect */}
                <div
                    className="absolute left-0 right-0 h-px opacity-50"
                    style={{
                        background: 'linear-gradient(90deg, transparent, rgba(14, 165, 233, 0.8), transparent)',
                        animation: '20s ease-in-out infinite'
                    }}
                ></div>

                {/* Data stream lines */}
                <div className="absolute top-1/3 left-0 right-0 h-px bg-gradient-to-r from-transparent via-sky-500/20 to-transparent opacity-40"></div>
                <div className="absolute bottom-1/3 left-0 right-0 h-px bg-gradient-to-r from-transparent via-sky-500/20 to-transparent opacity-40"></div>

                {/* Subtle tech pattern overlay */}
                <div
                    className="absolute inset-0 opacity-10"
                    style={{
                        backgroundImage: `
                            radial-gradient(circle at 20% 30%, rgba(14, 165, 233, 0.3) 1px, transparent 1px),
                            radial-gradient(circle at 80% 70%, rgba(14, 165, 233, 0.3) 1px, transparent 1px)
                        `,
                        backgroundSize: '100px 100px, 120px 120px',
                        animation: 'patternShift 25s linear infinite'
                    }}
                ></div>
            </div>

            {/* Vignette effect */}
            <div className="absolute inset-0 bg-gradient-radial from-transparent via-transparent to-slate-950/30"></div>

            <style jsx>{`
                @keyframes orbFloat {
                    0%, 100% { 
                        transform: translate(0px, 0px) scale(1); 
                        opacity: 0.6; 
                    }
                    33% { 
                        transform: translate(30px, -40px) scale(1.1); 
                        opacity: 0.8; 
                    }
                    66% { 
                        transform: translate(-20px, 20px) scale(0.9); 
                        opacity: 0.4; 
                    }
                }
                
                @keyframes meshFlow {
                    0% { transform: translate(0, 0); }
                    100% { transform: translate(80px, 80px); }
                }
                
                @keyframes dotPulse {
                    0%, 100% { opacity: 0.2; transform: scale(1); }
                    50% { opacity: 0.6; transform: scale(1.5); }
                }
                
                @keyframes lineGlow {
                    0%, 100% { opacity: 0.3; }
                    50% { opacity: 0.8; }
                }
                
                @keyframes scanVertical {
                    0% { top: -2px; opacity: 0; }
                    10% { top: 0px; opacity: 0.2; }
                    20% { top: 2px; opacity: 0.2; }
                    30% { top: 4px; opacity: 0.2; }
                    40% { top: 6px; opacity: 0.2; }
                    50% { top: 50%; opacity: 1; }
                    60% { top: 100%; opacity: 0.5; }
                    70% { top: 100%; opacity: 0.5; }
                    80% { top: 100%; opacity: 0.5; }
                    90% { top: 100%; opacity: 0.5; }
                    100% { top: 100%; opacity: 0; }
                }
                
                @keyframes patternShift {
                    0% { transform: translate(0, 0) rotate(0deg); }
                    100% { transform: translate(50px, 50px) rotate(360deg); }
                }
                
                .bg-gradient-radial {
                    background: radial-gradient(circle, var(--tw-gradient-stops));
                }
            `}</style>
        </div>
    );
};

export default AnimatingBackground;