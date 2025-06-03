'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import BottomNav from '@/components/ui/BottomNav';
import { QrCode, User, Mail, Lock, Eye, EyeOff, X, ChevronDown, Play } from 'lucide-react';

export default function AuthPage() {
  const [showAuthModal, setShowAuthModal] = useState(false);
  const [authType, setAuthType] = useState<'qr' | 'email' | 'social'>('social');
  const [isLogin, setIsLogin] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  const [showMoreOptions, setShowMoreOptions] = useState(false);
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Implement actual authentication
    router.push('/');
  };

  const handleContinueAsGuest = () => {
    router.push('/');
  };

  const authOptions = [
    {
      id: 'qr',
      label: 'Use QR code',
      icon: <QrCode className="w-6 h-6" />,
    },
    {
      id: 'email',
      label: 'Use phone / email / username',
      icon: <User className="w-6 h-6" />,
    },
    {
      id: 'facebook',
      label: 'Continue with Facebook',
      icon: (
        <svg className="w-6 h-6 text-blue-600" viewBox="0 0 24 24" fill="currentColor">
          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
        </svg>
      ),
    },
    {
      id: 'google',
      label: 'Continue with Google',
      icon: (
        <svg className="w-6 h-6" viewBox="0 0 24 24">
          <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
          <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
          <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
          <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
        </svg>
      ),
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white flex flex-col relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-sky-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col items-center justify-center px-6  relative z-10">
        <div className="w-full max-w-sm space-y-8">
          {/* Logo */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-sky-500 to-blue-600 rounded-2xl mb-6 shadow-lg shadow-sky-500/25">
              <Play className="w-10 h-10 text-white ml-1" fill="currentColor" />
            </div>
            <h1 className="text-3xl font-bold mb-2">Log in to QuickNews</h1>
          </div>

          {/* Auth Options */}
          <div className="space-y-4 mb-8">
            {authOptions.map((option, index) => (
              <button
                key={option.id}
                onClick={() => {
                  if (option.id === 'qr' || option.id === 'email') {
                    setAuthType(option.id);
                    setShowAuthModal(true);
                  }
                }}
                className="w-full flex items-center px-4 py-4 border border-gray-600/30 rounded-lg bg-gray-800/20 transition-all duration-300 group"
              >
                <div className="flex-shrink-0 mr-4 group-hover:scale-110 transition-transform">
                  {option.icon}
                </div>
                <span className="text-left font-medium text-gray-200 group-hover:text-white transition-colors">
                  {option.label}
                </span>
              </button>
            ))}
          </div>

          {/* OR Divider */}
          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-600/30"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-4 text-gray-400">OR</span>
            </div>
          </div>

          {/* Continue as Guest */}
          <button
            onClick={handleContinueAsGuest}
            className="w-full py-4 bg-gradient-to-r from-sky-500 to-blue-600 rounded-2xl0 text-white rounded-lg font-bold text-lg transition-all duration-30 shadow-lg shadow-sky-500/25 "
          >
            Continue as guest
          </button>

          {/* Footer */}
          <div className="text-center space-y-4">
            <p className="text-xs text-gray-500">
              By continuing, you agree to QuickVids'{' '}
              <button className="text-sky-400 hover:text-sky-300 transition-colors">Terms of Service</button>
              {' '}and confirm that you have read QuickVids'{' '}
              <button className="text-sky-400 hover:text-sky-300 transition-colors">Privacy Policy</button>
            </p>
            
            <p className="text-sm text-gray-400">
              Don't have an account?{' '}
              <button
                onClick={() => {
                  setIsLogin(false);
                  setAuthType('email');
                  setShowAuthModal(true);
                }}
                className="text-sky-400 hover:text-sky-300 transition-colors font-medium"
              >
                Sign up
              </button>
            </p>
          </div>
        </div>
      </div>

      {/* Auth Modal */}
      {showAuthModal && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-end justify-center z-50">
          <div className="w-full max-w-md bg-gray-800/90 backdrop-blur-xl rounded-t-3xl p-6 space-y-6 animate-in slide-in-from-bottom duration-300">
            {/* Modal Header */}
            <div className="flex items-center justify-between">
              <h2 className="text-xl font-bold">
                {authType === 'qr' ? 'Log in with QR code' : isLogin ? 'Log in' : 'Sign up'}
              </h2>
              <button
                onClick={() => setShowAuthModal(false)}
                className="p-2 hover:bg-gray-700/50 rounded-full transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {authType === 'qr' ? (
              /* QR Code Section */
              <div className="text-center space-y-4">
                <div className="w-48 h-48 bg-white rounded-2xl mx-auto flex items-center justify-center">
                  <div className="text-6xl">📱</div>
                </div>
                <div className="space-y-2">
                  <p className="font-medium">Scan with your device</p>
                  <p className="text-sm text-gray-400">Open QuickVids on your phone and scan this code</p>
                </div>
              </div>
            ) : (
              /* Email/Password Form */
              <form onSubmit={handleSubmit} className="space-y-4">
                {!isLogin && (
                  <div className="relative">
                    <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <input
                      type="text"
                      placeholder="Username"
                      className="w-full pl-10 pr-4 py-3.5 rounded-xl bg-gray-700/30 border border-gray-600/30 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-sky-500/50 focus:border-sky-500/50 transition-all duration-300"
                    />
                  </div>
                )}
                
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    type="email"
                    placeholder="Email"
                    className="w-full pl-10 pr-4 py-3.5 rounded-xl bg-gray-700/30 border border-gray-600/30 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-sky-500/50 focus:border-sky-500/50 transition-all duration-300"
                  />
                </div>

                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    type={showPassword ? "text" : "password"}
                    placeholder="Password"
                    className="w-full pl-10 pr-12 py-3.5 rounded-xl bg-gray-700/30 border border-gray-600/30 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-sky-500/50 focus:border-sky-500/50 transition-all duration-300"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-white transition-colors"
                  >
                    {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                  </button>
                </div>

                {isLogin && (
                  <div className="flex justify-end">
                    <button type="button" className="text-sm text-sky-400 hover:text-sky-300 transition-colors">
                      Forgot password?
                    </button>
                  </div>
                )}

                <button
                  type="submit"
                  className="w-full py-3.5 bg-gradient-to-r from-sky-500 to-blue-600 text-white rounded-xl font-bold hover:from-sky-600 hover:to-blue-700 transition-all duration-300 shadow-lg shadow-sky-500/25"
                >
                  {isLogin ? 'Log in' : 'Sign up'}
                </button>

                <div className="text-center">
                  <button
                    type="button"
                    onClick={() => setIsLogin(!isLogin)}
                    className="text-sm text-sky-400 hover:text-sky-300 transition-colors"
                  >
                    {isLogin ? "Don't have an account? Sign up" : "Already have an account? Log in"}
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      )}

    </div>
  );
}