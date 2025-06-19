'use client';

import { useState, useRef } from 'react';
import { Image, Bold, Italic, List, Quote, Link, Hash, Eye, Globe, Users, Lock, Clock, Save, X } from 'lucide-react';
import { useRouter } from 'next/navigation';

export default function ArticleCreator() {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [excerpt, setExcerpt] = useState('');
    const [coverImage, setCoverImage] = useState<File | null>(null);
    const [coverImageUrl, setCoverImageUrl] = useState<string>('');
    const [category, setCategory] = useState('');
    const [tags, setTags] = useState('');
    const [privacy, setPrivacy] = useState<'public' | 'followers' | 'draft'>('public');
    const [publishNow, setPublishNow] = useState(true);
    const [scheduledDate, setScheduledDate] = useState('');

    const router = useRouter();
    const fileInputRef = useRef<HTMLInputElement>(null);
    const contentRef = useRef<HTMLTextAreaElement>(null);

    const handleImageSelect = (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];
        if (file && file.type.startsWith('image/')) {
            setCoverImage(file);
            const url = URL.createObjectURL(file);
            setCoverImageUrl(url);
        }
    };

    const insertText = (before: string, after: string = '') => {
        if (contentRef.current) {
            const start = contentRef.current.selectionStart;
            const end = contentRef.current.selectionEnd;
            const selectedText = content.substring(start, end);
            const newText = before + selectedText + after;
            const newContent = content.substring(0, start) + newText + content.substring(end);
            setContent(newContent);

            // Restore cursor position
            setTimeout(() => {
                if (contentRef.current) {
                    contentRef.current.focus();
                    contentRef.current.setSelectionRange(start + before.length, start + before.length + selectedText.length);
                }
            }, 0);
        }
    };

    const categories = [
        'Breaking News', 'Politics', 'Technology', 'Business', 'Sports',
        'Entertainment', 'Health', 'Science', 'World', 'Opinion'
    ];

    const privacyOptions = [
        { value: 'public', icon: <Globe size={14} />, label: 'Public', desc: 'Anyone can read this article' },
        { value: 'followers', icon: <Users size={14} />, label: 'Followers', desc: 'Only followers can read this article' },
        { value: 'draft', icon: <Save size={14} />, label: 'Save as Draft', desc: 'Save privately, publish later' },
    ];

    return (
        <div className="h-full relative bg-black overflow-y-auto">


            <button
                onClick={() => router.back()}
                className="pl-2 pt-4 hover:bg-gray-700/50 rounded-full transition-all duration-200 text-gray-400 hover:text-white"
            >
                <X size={30} />
            </button>

            <div className="max-w-4xl mx-auto p-4 space-y-6 pb-8">
                {/* Cover Image */}
                <div>
                    <label className="block text-sm font-medium text-white mb-2">Cover Image</label>
                    {!coverImageUrl ? (
                        <div
                            className="border-2 border-dashed border-gray-600 rounded-xl p-6 text-center hover:border-sky-500 transition-all duration-300 cursor-pointer bg-gray-900/20"
                            onClick={() => fileInputRef.current?.click()}
                        >
                            <Image size={32} className="mx-auto mb-2 text-gray-400" />
                            <p className="text-gray-400 text-sm mb-1">Click to add a cover image</p>
                            <p className="text-xs text-gray-500">Recommended: 1200x630px (16:9)</p>
                        </div>
                    ) : (
                        <div className="relative rounded-xl overflow-hidden">
                            <img
                                src={coverImageUrl}
                                alt="Cover"
                                className="w-full h-48 object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent">
                                <button
                                    onClick={() => {
                                        setCoverImage(null);
                                        setCoverImageUrl('');
                                    }}
                                    className="absolute top-2 right-2 p-1.5 bg-black/50 hover:bg-black/70 rounded-full text-white transition-all duration-200"
                                >
                                    <X size={14} />
                                </button>
                                <button
                                    onClick={() => fileInputRef.current?.click()}
                                    className="absolute bottom-2 right-2 px-3 py-1.5 bg-black/50 hover:bg-black/70 rounded-lg text-white text-xs transition-all duration-200"
                                >
                                    Change
                                </button>
                            </div>
                        </div>
                    )}
                    <input
                        ref={fileInputRef}
                        type="file"
                        accept="image/*"
                        onChange={handleImageSelect}
                        className="hidden"
                    />
                </div>

                {/* Title */}
                <div>
                    <label className="block text-sm font-medium text-white mb-2">Title</label>
                    <input
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        placeholder="Write a compelling headline..."
                        className="w-full bg-gray-800/80 rounded-xl px-3 py-3 text-lg font-medium text-white placeholder-gray-400 border border-gray-600/50 focus:outline-none focus:ring-2 focus:ring-sky-500/50 focus:border-sky-500/50 transition-all duration-200"
                    />
                    <p className="text-xs text-gray-400 mt-1">{title.length}/120 characters</p>
                </div>

                {/* Excerpt */}
                <div>
                    <label className="block text-sm font-medium text-white mb-2">Excerpt</label>
                    <textarea
                        value={excerpt}
                        onChange={(e) => setExcerpt(e.target.value)}
                        placeholder="Brief summary of your article..."
                        className="w-full bg-gray-800/80 rounded-xl px-3 py-2 text-sm text-white placeholder-gray-400 border border-gray-600/50 focus:outline-none focus:ring-2 focus:ring-sky-500/50 focus:border-sky-500/50 transition-all duration-200 resize-none"
                        rows={2}
                    />
                    <p className="text-xs text-gray-400 mt-1">{excerpt.length}/300 characters</p>
                </div>

                {/* Content */}
                <div>
                    <div className="flex items-center justify-between mb-2">
                        <label className="text-sm font-medium text-white">Content</label>
                        <div className="flex items-center gap-1">
                            <button
                                onClick={() => insertText('**', '**')}
                                className="p-1.5 hover:bg-gray-700/50 rounded-lg text-gray-400 hover:text-white transition-all duration-200"
                                title="Bold"
                            >
                                <Bold size={14} />
                            </button>
                            <button
                                onClick={() => insertText('*', '*')}
                                className="p-1.5 hover:bg-gray-700/50 rounded-lg text-gray-400 hover:text-white transition-all duration-200"
                                title="Italic"
                            >
                                <Italic size={14} />
                            </button>
                            <button
                                onClick={() => insertText('\n> ', '')}
                                className="p-1.5 hover:bg-gray-700/50 rounded-lg text-gray-400 hover:text-white transition-all duration-200"
                                title="Quote"
                            >
                                <Quote size={14} />
                            </button>
                            <button
                                onClick={() => insertText('\n- ', '')}
                                className="p-1.5 hover:bg-gray-700/50 rounded-lg text-gray-400 hover:text-white transition-all duration-200"
                                title="List"
                            >
                                <List size={14} />
                            </button>
                            <button
                                onClick={() => insertText('[', '](url)')}
                                className="p-1.5 hover:bg-gray-700/50 rounded-lg text-gray-400 hover:text-white transition-all duration-200"
                                title="Link"
                            >
                                <Link size={14} />
                            </button>
                        </div>
                    </div>
                    <textarea
                        ref={contentRef}
                        value={content}
                        onChange={(e) => setContent(e.target.value)}
                        placeholder="Write your article content here... 

You can use Markdown formatting:
**Bold text**
*Italic text*
> Quotes
- Lists
[Links](url)"
                        className="w-full bg-gray-800/80 rounded-xl px-3 py-3 text-white placeholder-gray-400 border border-gray-600/50 focus:outline-none focus:ring-2 focus:ring-sky-500/50 focus:border-sky-500/50 transition-all duration-200 resize-none font-mono text-sm leading-relaxed"
                        rows={12}
                    />
                    <div className="flex justify-between mt-1">
                        <p className="text-xs text-gray-400">Supports Markdown formatting</p>
                        <p className="text-xs text-gray-400">{content.length} characters • {Math.ceil(content.length / 5)} words</p>
                    </div>
                </div>

                {/* Category and Tags */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                        <label className="block text-sm font-medium text-white mb-2">Category</label>
                        <select
                            value={category}
                            onChange={(e) => setCategory(e.target.value)}
                            className="w-full bg-gray-800/80 rounded-xl px-3 py-2 text-sm text-white border border-gray-600/50 focus:outline-none focus:ring-2 focus:ring-sky-500/50 focus:border-sky-500/50 transition-all duration-200"
                        >
                            <option value="">Select a category</option>
                            {categories.map((cat) => (
                                <option key={cat} value={cat}>{cat}</option>
                            ))}
                        </select>
                    </div>

                    <div>
                        <label className="flex items-center gap-1 text-sm font-medium text-white mb-2">
                            <Hash size={12} />
                            Tags
                        </label>
                        <input
                            value={tags}
                            onChange={(e) => setTags(e.target.value)}
                            placeholder="news, breaking, politics"
                            className="w-full bg-gray-800/80 rounded-xl px-3 py-2 text-sm text-white placeholder-gray-400 border border-gray-600/50 focus:outline-none focus:ring-2 focus:ring-sky-500/50 focus:border-sky-500/50 transition-all duration-200"
                        />
                    </div>
                </div>

                {/* Publishing Options */}
                <div className="space-y-4">
                    <h3 className="text-sm font-semibold text-white">Publishing Options</h3>

                    {/* Privacy */}
                    <div>
                        <label className="block text-sm font-medium text-white mb-2">Visibility</label>
                        <div className="space-y-2">
                            {privacyOptions.map((option) => (
                                <button
                                    key={option.value}
                                    onClick={() => setPrivacy(option.value as any)}
                                    className={`w-full flex items-center gap-2 p-2.5 rounded-xl transition-all duration-200 ${privacy === option.value
                                        ? 'bg-sky-500/20 border border-sky-500/50'
                                        : 'bg-gray-800/50 border border-gray-600/30 hover:bg-gray-700/50'
                                        }`}
                                >
                                    <div className={`p-1.5 rounded-lg ${privacy === option.value ? 'bg-sky-500/20' : 'bg-gray-700'}`}>
                                        {option.icon}
                                    </div>
                                    <div className="flex-1 text-left">
                                        <p className="text-sm font-medium text-white">{option.label}</p>
                                        <p className="text-xs text-gray-400">{option.desc}</p>
                                    </div>
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Schedule */}
                    {privacy !== 'draft' && (
                        <div>
                            <label className="block text-sm font-medium text-white mb-2">Schedule</label>
                            <div className="space-y-2">
                                <div className="flex items-center gap-2">
                                    <button
                                        onClick={() => setPublishNow(true)}
                                        className={`p-2.5 rounded-xl transition-all duration-200 ${publishNow
                                            ? 'bg-sky-500/20 border border-sky-500/50 text-white'
                                            : 'bg-gray-800/50 border border-gray-600/30 text-gray-400'
                                            }`}
                                    >
                                        <div className="flex items-center gap-1.5">
                                            <Eye size={14} />
                                            <span className="text-xs font-medium">Publish Now</span>
                                        </div>
                                    </button>
                                    <button
                                        onClick={() => setPublishNow(false)}
                                        className={`p-2.5 rounded-xl transition-all duration-200 ${!publishNow
                                            ? 'bg-sky-500/20 border border-sky-500/50 text-white'
                                            : 'bg-gray-800/50 border border-gray-600/30 text-gray-400'
                                            }`}
                                    >
                                        <div className="flex items-center gap-1.5">
                                            <Clock size={14} />
                                            <span className="text-xs font-medium">Schedule</span>
                                        </div>
                                    </button>
                                </div>

                                {!publishNow && (
                                    <input
                                        type="datetime-local"
                                        value={scheduledDate}
                                        onChange={(e) => setScheduledDate(e.target.value)}
                                        className="w-full bg-gray-800/80 rounded-xl px-3 py-2 text-sm text-white border border-gray-600/50 focus:outline-none focus:ring-2 focus:ring-sky-500/50 focus:border-sky-500/50 transition-all duration-200"
                                    />
                                )}
                            </div>
                        </div>
                    )}
                </div>

                {/* Action Buttons */}
                <div className="sticky bottom-10 py-4 bg-gradient-to-t from-black via-black to-transparent">
                    <div className="flex gap-2">
                        <button className="flex-1 bg-gray-700 hover:bg-gray-600 text-white py-2.5 rounded-xl text-sm font-medium transition-all duration-200">
                            Save Draft
                        </button>
                        <button className="flex-1 bg-sky-500 hover:bg-sky-600 text-white py-2.5 rounded-xl text-sm font-medium transition-all duration-200">
                            {privacy === 'draft' ? 'Save' : publishNow ? 'Publish' : 'Schedule'}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
} 