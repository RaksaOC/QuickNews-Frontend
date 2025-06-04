'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { QrCode, User, Mail, Lock, Eye, EyeOff, X, ChevronLeft, Play, ChevronLeftCircle, ArrowLeftCircle, Facebook, CircleUser, Apple, AppleIcon, CircleHelp } from 'lucide-react';

export default function AuthPage() {
    const [currentView, setCurrentView] = useState<'initial' | 'form'>('initial');
    const [isLogin, setIsLogin] = useState(true);
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const router = useRouter();

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // TODO: Implement actual authentication
        router.push('/');
    };

    const handleCreateAccount = () => {
        setIsLogin(false);
        setCurrentView('form');
    };

    const handleLogin = () => {
        setIsLogin(true);
        setCurrentView('form');
    };

    const handleBack = () => {
        setCurrentView('initial');
    };

    // Initial Auth Selection Screen
    if (currentView === 'initial') {
        return (
            <div className="min-h-screen bg-black text-white flex flex-col relative overflow-hidden">
                {/* News Images Grid */}
                <div className="flex-1 p-4 grid grid-cols-2 gap-3 content-start">
                    {/* Row 1 */}
                    <div className="aspect-[4/3] bg-gray-800 rounded-2xl overflow-hidden">
                        <img
                            src="https://images.unsplash.com/photo-1557804506-669a67965ba0?w=400&h=300&fit=crop"
                            alt="News"
                            className="w-full h-full object-cover"
                        />
                    </div>
                    <div className="aspect-[4/3] bg-gray-800 rounded-2xl overflow-hidden">
                        <img
                            src="https://images.unsplash.com/photo-1495020689067-958852a7765e?w=400&h=300&fit=crop"
                            alt="News"
                            className="w-full h-full object-cover"
                        />
                    </div>

                    {/* Row 2 */}
                    <div className="aspect-[4/3] bg-gray-800 rounded-2xl overflow-hidden">
                        <img
                            src="https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=400&h=300&fit=crop"
                            alt="News"
                            className="w-full h-full object-cover"
                        />
                    </div>
                    <div className="aspect-[4/3] bg-gray-800 rounded-2xl overflow-hidden">
                        <img
                            src="https://images.unsplash.com/photo-1585776245991-cf89dd7fc73a?w=400&h=300&fit=crop"
                            alt="News"
                            className="w-full h-full object-cover"
                        />
                    </div>

                    {/* Row 3 */}
                    <div className="aspect-[4/3] bg-gray-800 rounded-2xl overflow-hidden">
                        <img
                            src="https://images.unsplash.com/photo-1611348586804-61bf6c080437?w=400&h=300&fit=crop"
                            alt="News"
                            className="w-full h-full object-cover"
                        />
                    </div>
                    <div className="aspect-[4/3] bg-gray-800 rounded-2xl overflow-hidden">
                        <img
                            src="https://images.unsplash.com/photo-1586953208448-b95a79798f07?w=400&h=300&fit=crop"
                            alt="News"
                            className="w-full h-full object-cover"
                        />
                    </div>
                </div>

                {/* Page indicators */}
                <div className="flex justify-center py-4">
                    <div className="flex space-x-2">
                        <div className="w-2 h-2 bg-sky-500 rounded-full"></div>
                        <div className="w-2 h-2 bg-gray-600 rounded-full"></div>
                        <div className="w-2 h-2 bg-gray-600 rounded-full"></div>
                    </div>
                </div>

                {/* Bottom section */}
                <div className="px-6 pb-12">
                    <div className="text-center mb-8">
                        <h1 className="text-2xl font-bold mb-4">Swipe through trending news in seconds</h1>
                        <p className="text-gray-400 text-sm">
                            Bite-sized video news from around the world, curated just for you to explore and learn.
                        </p>
                    </div>

                    <div className="space-y-4">
                        <button
                            onClick={handleCreateAccount}
                            className="w-full py-4 border border-sky-500 text-sky-500 rounded-full font-medium text-lg transition-all duration-300"
                        >
                            Create Account
                        </button>

                        <button
                            onClick={handleLogin}
                            className="w-full py-4 bg-sky-500 text-white rounded-full font-medium text-lg transition-all duration-300"
                        >
                            Login
                        </button>
                    </div>
                </div>
            </div>
        );
    }

    // Form Screen
    return (
        <div className="min-h-screen bg-black text-white flex flex-col">
            {/* Header */}
            <div className="flex items-center justify-between px-2 py-4 ">
                <button
                    onClick={handleBack}
                    className="p-3 bg-gray-800 rounded-full"
                >
                    <ArrowLeftCircle className="w-5 h-5" />
                </button>
            </div>

            {/* Toggle Buttons */}
            <div className="px-2 mb-8">
                <div className="flex bg-gray-800 rounded-full p-1">
                    <button
                        onClick={() => setIsLogin(false)}
                        className={`flex-1 py-3 text-center rounded-full transition-all duration-300 ${!isLogin ? 'bg-gray-600 text-white' : 'text-gray-400'
                            }`}
                    >
                        Sign up
                    </button>
                    <button
                        onClick={() => setIsLogin(true)}
                        className={`flex-1 py-3 text-center rounded-full transition-all duration-300 ${isLogin ? 'bg-gray-600 text-white' : 'text-gray-400'
                            }`}
                    >
                        Log in
                    </button>
                </div>
            </div>

            {/* Form Content */}
            <div className="flex-1 px-4">
                <h1 className="text-lg font-bold mb-6">
                    {isLogin ? 'Log in' : 'Create an account'}
                </h1>

                <div onSubmit={handleSubmit} className="space-y-4">
                    {!isLogin && (
                        <div>
                            <div className="block text-white mb-3 text-sm">Personal email</div>
                            <input
                                type="email"
                                placeholder="Enter your email"
                                className="w-full px-4 py-4 rounded-full bg-black/0 border border-gray-700 text-white placeholder-gray-400 focus:outline-none focus:border-sky-500 transition-all duration-300"
                            />
                        </div>
                    )}

                    {isLogin && (
                        <div>
                            <div className="block text-white mb-3 text-sm">Email</div>
                            <input
                                type="email"
                                placeholder="Enter your email"
                                className="w-full px-4 py-4 rounded-full bg-black/0 border border-gray-700 text-white placeholder-gray-400 focus:outline-none focus:border-sky-500 transition-all duration-300"
                            />
                        </div>
                    )}

                    <div>
                        <div className="block text-white mb-3 text-sm">
                            {isLogin ? 'Password' : 'Set Password'}
                        </div>
                        <div className="relative">
                            <input
                                type={showPassword ? "text" : "password"}
                                placeholder="••••••••••••••••••••"
                                className="w-full px-4 py-4 pr-12 rounded-full bg-black/0 border border-gray-700 text-white placeholder-gray-400 focus:outline-none focus:border-sky-500 transition-all duration-300"
                            />
                            <button
                                type="button"
                                onClick={() => setShowPassword(!showPassword)}
                                className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400"
                            >
                                {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                            </button>
                        </div>
                    </div>

                    {!isLogin && (
                        <div>
                            <div className="block text-white mb-3 text-sm">Confirm Password</div>
                            <div className="relative">
                                <input
                                    type={showConfirmPassword ? "text" : "password"}
                                    placeholder="••••••••••••••••••••"
                                    className="w-full px-4 py-4 pr-12 rounded-full bg-black/0 border border-gray-700 text-white placeholder-gray-400 focus:outline-none focus:border-sky-500 transition-all duration-300"
                                />
                                <button
                                    type="button"
                                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                                    className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400"
                                >
                                    {showConfirmPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                                </button>
                            </div>
                        </div>
                    )}

                    {!isLogin && (
                        <div className="flex items-start space-x-3 py-4">
                            <input
                                type="checkbox"
                                id="terms"
                                className="mt-1 w-4 h-4 accent-sky-500 "
                            />
                            <div className="text-gray-400 text-xs leading-relaxed cursor-pointer" onClick={() => document.getElementById('terms')?.click()}>
                                I have read and agree to quick news Terms of Service and Privacy Policy
                            </div>
                        </div>
                    )}

                    <button
                        onClick={handleSubmit}
                        className="w-full py-4 bg-sky-500 text-white rounded-full font-medium text-lg transition-all duration-300 mt-6"
                    >
                        {isLogin ? 'Login' : 'Login'}
                    </button>

                    {isLogin && (
                        <div className="text-center py-4">
                            <button type="button" className="text-gray-400 hover:text-white transition-colors text-sm flex items-center justify-center gap-2 w-full">
                                <p>Forgot password</p>
                                <CircleHelp className="w-4 h-4 text-sky-500" />
                            </button>
                        </div>
                    )}
                </div>

                {/* Social Login Options */}
                <div className="py-6">
                    <div className="relative mb-4">
                        <div className="absolute inset-0 flex items-center">
                            <div className="w-full border-t border-gray-700"></div>
                        </div>
                        <div className="relative flex justify-center">
                            <span className="px-4 text-gray-400 bg-black text-sm">OR</span>
                        </div>
                    </div>

                    <div className="flex justify-center space-x-6">
                        <button className="p-4 bg-gray-500/50 rounded-full border border-gray-500 ">
                            <AppleIcon className="w-6 h-6 text-white" />
                        </button>

                        <button className="p-4 bg-gray-500/50 rounded-full border border-gray-500 ">
                            <Facebook className="w-6 h-6 text-blue-500" />
                        </button>

                        <button className="p-4 bg-gray-500/50 rounded-full border border-gray-500 ">
                            <CircleUser className="w-6 h-6 text-red-500" /> {/* Placeholder for Google */}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}