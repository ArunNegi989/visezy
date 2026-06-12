"use client";

import styles from "./InsuranceVideos.module.css";
import {
  HiOutlinePlay,
  HiOutlineVideoCamera,
  HiOutlineClock,
} from "react-icons/hi";

const videos = [
  {
    id: 1,
    title: "How Health Insurance Works",
    category: "Health Insurance",
    duration: "4 min",
    thumbnail:
      "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=1200&auto=format&fit=crop"
  },
  {
    id: 2,
    title: "Life Insurance Explained",
    category: "Life Insurance",
    duration: "6 min",
    thumbnail:
      "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=1200&q=80",
  },
  {
    id: 3,
    title: "Car Insurance Claim Process",
    category: "Car Insurance",
    duration: "5 min",
    thumbnail:
      "https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=1200&q=80",
  },
];

export default function InsuranceVideos() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.header}>
          <div className={styles.badge}>
            <HiOutlineVideoCamera />
            Insurance Learning Center
          </div>

          <h2 className={styles.title}>
            Learn Insurance The
            <span className={styles.gradient}> Smart Way</span>
          </h2>

          <p className={styles.description}>
            Watch short expert-curated videos and understand policies,
            claims, coverage and benefits before making decisions.
          </p>
        </div>

        <div className={styles.grid}>
          {videos.map((video) => (
            <div key={video.id} className={styles.card}>
              <div
                className={styles.thumbnail}
                style={{
                  backgroundImage: `url(${video.thumbnail})`,
                }}
              >
                <button className={styles.playBtn}>
                  <HiOutlinePlay />
                </button>

                <div className={styles.duration}>
                  <HiOutlineClock />
                  {video.duration}
                </div>
              </div>

              <div className={styles.content}>
                <span className={styles.category}>
                  {video.category}
                </span>

                <h3>{video.title}</h3>

                <button className={styles.watchBtn}>
                  Watch Video
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}