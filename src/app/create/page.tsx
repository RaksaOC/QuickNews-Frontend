'use client';

import { useState } from 'react';
import { ArrowLeft, FileText, Video } from 'lucide-react';
import { useRouter } from 'next/navigation';
import VideoCreator from '@/components/ui2/VideoCreator';
import ArticleCreator from '@/components/ui2/ArticleCreator';

export default function CreatePage() {
  const [activeTab, setActiveTab] = useState<'video' | 'article'>('video');
  const router = useRouter();

  return (
    <div className="relative h-full bg-black flex flex-col">
      {/* Content */}
      <div className="flex-1 overflow-hidden">
        {activeTab === 'video' ? <VideoCreator /> : <ArticleCreator />}
      </div>

      {/* Bottom Tabs */}
      <div className="absolute bottom-0 left-0 right-0 bg-black/10 backdrop-blur-sm">
        <div className="flex justify-center items-center py-4">
          <div className="flex items-center gap-8">
            <button
              className={`text-sm font-medium flex items-center gap-1 ${activeTab === 'video' ? 'text-white' : 'text-gray-400'
                }`}
              onClick={() => setActiveTab('video')}
            >
              <Video size={16} />
              VIDEO
            </button>
            <button
              onClick={() => setActiveTab('article')}
              className={`text-sm font-medium flex items-center gap-1 ${activeTab === 'article' ? 'text-white' : 'text-gray-400'
                }`}
            >
              <FileText size={16} />
              ARTICLE
            </button>
          </div>
        </div>
      </div>
    </div>
  );
} 