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

// Following videos (1-8)
export const followingVideos: Video[] = shuffledVideos
  .slice(0, 8)
  .map((video, index) => ({
    ...video,
    id: 1 + index,
    category: "following",
  }));

// ForYou videos (9-17)
export const forYouVideos: Video[] = shuffledVideos
  .slice(8, 17)
  .map((video, index) => ({
    ...video,
    id: 9 + index,
    category: "foryou",
  }));

// Breaking videos (18-26)
export const breakingVideos: Video[] = shuffledVideos
  .slice(17, 26)
  .map((video, index) => ({
    ...video,
    id: 18 + index,
    category: "breaking",
  }));

// All mixed videos combined
export const mixedVideos: Video[] = [
  ...followingVideos,
  ...forYouVideos,
  ...breakingVideos,
];
