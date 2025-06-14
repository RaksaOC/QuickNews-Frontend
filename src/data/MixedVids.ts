import { Video } from "../types/Video";
import { LEGIT_VIDEOS } from "./LegitVideos";

// Helper function to shuffle array
function shuffleArray<T>(array: T[]): T[] {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}

// Get all unique videos
const allVideos = [...LEGIT_VIDEOS];
const shuffledVideos = shuffleArray(allVideos);

// Following videos (37-49)
export const followingVideos: Video[] = shuffledVideos
  .slice(0, 13)
  .map((video, index) => ({
    ...video,
    id: 37 + index,
    category: "following",
  }));

// ForYou videos (50-62)
export const forYouVideos: Video[] = shuffledVideos
  .slice(13, 26)
  .map((video, index) => ({
    ...video,
    id: 50 + index,
    category: "foryou",
  }));

// Breaking videos (63-75)
export const breakingVideos: Video[] = shuffledVideos
  .slice(26, 39)
  .map((video, index) => ({
    ...video,
    id: 63 + index,
    category: "breaking",
  }));

// All mixed videos combined
export const mixedVideos: Video[] = [
  ...followingVideos,
  ...forYouVideos,
  ...breakingVideos,
];
