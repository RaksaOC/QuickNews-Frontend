'use client';

import { useState } from 'react';
import { Search, ArrowLeft, ChevronLeft } from 'lucide-react';
import { useRouter } from 'next/navigation';

/*
 The results here actually means that when there are no search query thus it shows some recommended search or links
 TODO: Implement the actual search functionality 
*/

// Mock data for now
const mockResults = [
  { id: 1, title: 'Breaking News: Tech Innovation', type: 'video' },
  { id: 2, title: 'Politics Today: Latest Updates', type: 'article' },
  { id: 3, title: 'Sports Highlights', type: 'video' },
  { id: 4, title: 'Business News', type: 'article' },
];

export default function SearchPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [results, setResults] = useState(mockResults);
  const router = useRouter();

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const query = e.target.value;
    setSearchQuery(query);

    // Mock search filtering
    const filtered = mockResults.filter(item =>
      item.title.toLowerCase().includes(query.toLowerCase())
    );
    setResults(filtered);
  };

  return (
    <div className="min-h-screen bg-black text-white p-2">
      {/* Search Header */}
      <div className="mx-auto">
        <div className="flex items-center gap-2">
          <button
            onClick={() => router.push('/')}
            className=" hover:bg-gray-800/50 rounded-lg transition-colors"
          >
            <ChevronLeft size={24} className="text-gray-400" />
          </button>
          <div className="relative flex-1">
            <input
              type="text"
              value={searchQuery}
              onChange={handleSearch}
              placeholder="Search videos, articles, and more..."
              className="w-full bg-gray-800/50 text-white px-4 py-2 pl-12 rounded-xl 
                       border border-gray-700 focus:border-sky-500 focus:outline-none
                       placeholder-gray-400 text-sm"
            />
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
          </div>
        </div>

        {/* Results Section */}
        <div className="mt-6 space-y-4"></div>
        {results.map((result) => (
          <div
            key={result.id}
            className="p-4 bg-gray-800/30 rounded-xl hover:bg-gray-800/50 
                       transition-colors cursor-pointer"
          >
            <div className="flex items-center gap-3">
              <div className={`p-2 rounded-lg ${result.type === 'video' ? 'bg-sky-500/20' : 'bg-purple-500/20'
                }`}>
                {result.type === 'video' ? '🎥' : '📰'}
              </div>
              <div>
                <h3 className="font-medium">{result.title}</h3>
                <p className="text-sm text-gray-400 capitalize">{result.type}</p>
              </div>
            </div>
          </div>
        ))}

        {/* No Results State */}
        {results.length === 0 && (
          <div className="text-center py-8 text-gray-400">
            <p>No results found for "{searchQuery}"</p>
          </div>
        )}
      </div>
    </div>
  );
} 