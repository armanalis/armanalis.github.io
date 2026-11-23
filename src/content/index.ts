import type { Post } from "./types";
import italiarena from "./posts/italiarena";
import semesterPlanner from "./posts/semester-planner";
import checkUpdates from "./posts/check-updates";
import dockDividers from "./posts/dock-dividers";
import uavTracking from "./posts/uav-tracking";
import leetcode from "./posts/leetcode";

// New post: add a file in ./posts named <slug>.tsx and list it here.
export const posts: Post[] = [
  italiarena,
  semesterPlanner,
  checkUpdates,
  dockDividers,
  uavTracking,
  leetcode,
].sort((a, b) => b.date.localeCompare(a.date));

export const postBySlug = (slug: string) => posts.find((p) => p.slug === slug);

export const postUrl = (slug: string) => `/blog/${slug}`;

export const formatDate = (iso: string) =>
  new Date(`${iso}T00:00:00`).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

export type { Post };
