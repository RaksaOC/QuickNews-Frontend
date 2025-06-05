'use client';

import { useState } from 'react';
import { Search, ArrowLeft, ChevronLeft, Play, Filter, SlidersHorizontal } from 'lucide-react';
import { useRouter } from 'next/navigation';

// Mock video data similar to the Trump news results
const mockVideoResults = [
  {
    id: 1,
    title: 'Trump administration continues target international students.',
    thumbnail: '/api/placeholder/350/200',
    views: '47K',
    duration: '3:45'
  },
  {
    id: 2,
    title: 'Trump administration continues target international students.',
    thumbnail: '/api/placeholder/350/200',
    views: '47K',
    duration: '2:31'
  },
  {
    id: 3,
    title: 'Trump administration continues target international students.',
    thumbnail: '/api/placeholder/350/200',
    views: '47K',
    duration: '4:12'
  },
  {
    id: 4,
    title: 'Trump administration continues target international students.',
    thumbnail: '/api/placeholder/350/200',
    views: '47K',
    duration: '1:58'
  },
  {
    id: 5,
    title: 'Trump administration continues target international students.',
    thumbnail: '/api/placeholder/350/200',
    views: '47K',
    duration: '5:23'
  },
  {
    id: 6,
    title: 'Trump administration continues target international students.',
    thumbnail: '/api/placeholder/350/200',
    views: '47K',
    duration: '3:07'
  }
];

export default function SearchPage() {
  const [searchQuery, setSearchQuery] = useState('trump');
  const [results, setResults] = useState(mockVideoResults);
  const [hasSearched, setHasSearched] = useState(true);
  const router = useRouter();

  const handleSearch = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      setHasSearched(true);
      // Mock search - in real app, you'd make an API call here
      setResults(mockVideoResults);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Search Header */}
      <div className="sticky top-0 bg-black border-b border-gray-800 p-4 z-10">
        <div className="flex items-center gap-3">
          <button
            onClick={() => router.push('/')}
            className="p-2 hover:bg-gray-800/50 rounded-full transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
          </button>

          <div className="flex-1 relative">
            {/* Search icon (left) */}
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={handleInputChange}
              onKeyPress={handleSearch}
              placeholder="Search news"
              className="w-full bg-gray-900 border border-gray-700 rounded-full py-3 pl-10 pr-12 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            {/* Filter icon (right) */}
            <button
              type="button"
              className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-gray-900 border border-gray-700 rounded-full p-2 flex items-center justify-center hover:bg-gray-800 transition"
              aria-label="Filter"
            >
              <SlidersHorizontal className="w-5 h-5 text-gray-400" />
            </button>
          </div>
        </div>
      </div>

      {/* Search Results */}
      {hasSearched && (
        <div className="p-4">
          {/* Results Header */}
          <h2 className="text-lg font-medium mb-4 text-gray-300">
            Showing search results for {searchQuery && `"${searchQuery}"`}
          </h2>

          {/* Video Grid */}
          <div className="grid grid-cols-2 gap-3">
            {results.map((video) => (
              <div key={video.id} className="relative">
                {/* Video Thumbnail */}
                <div className="relative aspect-[9/16] bg-gray-800 rounded-lg overflow-hidden">
                  {/* Placeholder for video thumbnail */}
                  <div className="w-full h-full flex items-center justify-center">
                    <div className="w-16 h-16 bg-black/30 rounded-full flex items-center justify-center">
                      <Play className="w-6 h-6 text-sky-500 ml-1" />
                    </div>
                  </div>

                  {/* Views counter */}
                  <div className="absolute top-2 left-2 bg-black/70 rounded-full px-2 py-1 flex items-center gap-1 border border-sky-500">
                    <div className="w-3 h-3 rounded-full border border-white flex items-center justify-center">
                      <Play className="w-2 h-2 text-white" />
                    </div>
                    <span className="text-xs text-white font-medium">{video.views}</span>
                  </div>
                </div>

                {/* Video Title */}
                <div className="mt-2">
                  <p className="text-sm text-white leading-tight line-clamp-2">
                    {video.title}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* No Results State */}
          {results.length === 0 && (
            <div className="text-center py-8">
              <p className="text-gray-400">No results found for "{searchQuery}"</p>
            </div>
          )}
        </div>
      )}

      {/* Default state when no search has been performed */}
      {!hasSearched && (
        <div className="p-4">
          <div className="text-center py-8">
            <p className="text-gray-400">Enter a search term to find news videos</p>
          </div>
        </div>
      )}
    </div>
  );
}