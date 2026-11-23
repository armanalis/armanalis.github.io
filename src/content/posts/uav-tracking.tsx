import React from "react";
import type { Post } from "../types";
import cover from "../../assets/images/UAV.webp";

const post: Post = {
  slug: "uav-tracking",
  title: "Autonomous UAV Optical Tracking",
  date: "2026-02-20",
  summary: "Real-time C++ object tracking that holds up under changing light and occlusion.",
  tags: ["C++", "OpenCV", "Kalman filter", "Computer vision"],
  cover,
  coverAlt: "UAV tracking project",
  github: "https://github.com/armanalis/opencv-gpu-tracker",
  body: (
    <>
      <h2>Why I built it</h2>
      <p>
        A drone that follows a target has to keep seeing it when the light changes or something passes in front
        of it. Simple color tracking breaks in exactly those moments. I wanted a tracker that stays locked on in
        real time on ordinary hardware.
      </p>

      <h2>How it works</h2>
      <ul>
        <li>
          <strong>CLAHE</strong> (adaptive histogram equalization) evens out the lighting before anything else
          runs.
        </li>
        <li><strong>HSV masking</strong> isolates the target by color, which is steadier than RGB under shadows.</li>
        <li>
          A <strong>Kalman filter</strong> predicts where the target will be, so a short occlusion doesn't lose
          it.
        </li>
      </ul>

      <h2>In progress</h2>
      <p>YOLO detection, UDP telemetry, and Metal GPU acceleration on Apple Silicon.</p>
    </>
  ),
};

export default post;
