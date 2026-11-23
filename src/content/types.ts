import type { ReactNode } from "react";

export type Post = {
  /** URL: /blog/<slug> (also reachable at /<slug>). Must match the file name. */
  slug: string;
  title: string;
  /** ISO date, e.g. "2026-11-22". Posts are listed newest first. */
  date: string;
  /** One or two sentences; used on cards and as the page description. */
  summary: string;
  tags: string[];
  cover?: string;
  coverAlt?: string;
  github?: string;
  live?: string;
  liveLabel?: string;
  body: ReactNode;
};
