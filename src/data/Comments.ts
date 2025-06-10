import { Comment } from "@/types/Comment";
import { DEMO_USERS, OTHER_USERS } from "./DemoUsers";
import { DEMO_REPLIES } from "./Replies";

// Only use DEMO_REPLIES[0] to DEMO_REPLIES[5]
export const DEMO_COMMENTS: Comment[] = [
  { id: 1, user: OTHER_USERS[1], videoId: 1, content: "Amazing insights!", createdAt: "2025-06-01", likes: 10, replies: [DEMO_REPLIES[0], DEMO_REPLIES[1]] },
  { id: 2, user: OTHER_USERS[2], videoId: 1, content: "AI is the future!", createdAt: "2025-06-01", likes: 10, replies: [DEMO_REPLIES[2], DEMO_REPLIES[3]] },
  { id: 3, user: OTHER_USERS[3], videoId: 1, content: "Great video!", createdAt: "2025-06-01", likes: 10, replies: [DEMO_REPLIES[4], DEMO_REPLIES[5]] },
  { id: 4, user: OTHER_USERS[1], videoId: 2, content: "Robots are everywhere now.", createdAt: "2025-06-02", likes: 10, replies: [DEMO_REPLIES[1], DEMO_REPLIES[3]] },
  { id: 5, user: OTHER_USERS[0], videoId: 2, content: "Can't wait for more!", createdAt: "2025-06-02", likes: 10, replies: [DEMO_REPLIES[0], DEMO_REPLIES[5]] },
  { id: 6, user: OTHER_USERS[2], videoId: 3, content: "Quantum is so cool!", createdAt: "2025-06-03", likes: 10, replies: [DEMO_REPLIES[2], DEMO_REPLIES[4]] },
  { id: 7, user: OTHER_USERS[3], videoId: 6, content: "Meditation changed my life.", createdAt: "2025-06-06", likes: 10, replies: [DEMO_REPLIES[3], DEMO_REPLIES[0]] },
  { id: 8, user: OTHER_USERS[1], videoId: 6, content: "Great tips!", createdAt: "2025-06-06", likes: 10, replies: [DEMO_REPLIES[5], DEMO_REPLIES[1]] },
  { id: 9, user: OTHER_USERS[2], videoId: 7, content: "Exercise is key!", createdAt: "2025-06-07", likes: 10, replies: [DEMO_REPLIES[4], DEMO_REPLIES[2]] }
];
