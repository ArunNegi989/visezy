"use client";

import React from "react";
import styles from "@/app/blogs/[slug]/blogDetails.module.css";

export interface ContentBlock {
  id: string;
  type:
  | "h2"
  | "h3"
  | "paragraph"
  | "list"
  | "quote"
  | "image"
  | "video"
  | "table"
  | "code"
  | "divider"
  | "spacer";
  content?: string;
  items?: string[];
  url?: string;
  rows?: string[][];
}

interface Props {
  blocks?: ContentBlock[];
}

export default function BlockRenderer({ blocks = [] }: Props) {
  if (!blocks.length) return null;

  const getYoutubeEmbedUrl = (url: string) => {
    const regExp = /^.*(?:youtu\.be\/|v\/|u\/\w\/|embed\/|watch\?v=)([^#&?]*).*/;
    const match = url.match(regExp);
    const videoId = match && match[1].length === 11 ? match[1] : null;
    return videoId ? `https://www.youtube.com/embed/${videoId}` : null;
  };

  const getImageUrl = (block: ContentBlock) => {
    const imagePath = block.url || block.content || "";

    if (!imagePath) return "";

    // External URL
    if (
      imagePath.startsWith("http://") ||
      imagePath.startsWith("https://")
    ) {
      return imagePath;
    }

    // Local uploaded image
    return `${process.env.NEXT_PUBLIC_BACKEND_URL}${imagePath}`;
  };
  return (
    <div
      className={styles.rendererContainer}
      onClick={(e) => {
        // Kisi bhi inner content block click par default scroll target jump ko completely disable karne ke liye
        const target = e.target as HTMLElement;

        // Agar click kisi valid custom internal redirection navigation Link par nahi hai, toh action block karein
        if (target.tagName !== 'A' || target.getAttribute('href') === '#') {
          e.stopPropagation();
        }
      }}
    >
      {blocks.map((block, index) => {
        const stableKey = block.id ? `block-${block.id}` : `block-${block.type}-${index}`;

        switch (block.type) {
          case "h2":
            return (
              <h2 key={stableKey} className={styles.dynamicH2}>
                {block.content}
              </h2>
            );

          case "h3":
            return (
              <h3 key={stableKey} className={styles.dynamicH3}>
                {block.content}
              </h3>
            );

          case "paragraph":
            return <p key={stableKey}>{block.content}</p>;

          case "quote":
            return <blockquote key={stableKey}>{block.content}</blockquote>;

          case "list":
            return (
              <ul key={stableKey}>
                {block.items?.map((item, itemIndex) => (
                  <li key={`item-${stableKey}-${itemIndex}`}>{item}</li>
                ))}
              </ul>
            );

          case "image": {
            const imageSrc = getImageUrl(block);

            return imageSrc ? (
              <figure key={stableKey} className={styles.wideContent}>
                <img
                  src={imageSrc}
                  alt="Blog content"
                  loading="lazy"
                  onError={(e) => {
                    e.currentTarget.style.display = "none";
                  }}
                />
              </figure>
            ) : null;
          }

          case "video": {
            const embedUrl = block.url ? getYoutubeEmbedUrl(block.url) : null;
            return embedUrl ? (
              <div key={stableKey} className={styles.videoWrapper}>
                <iframe
                  src={embedUrl}
                  title="YouTube video"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
            ) : null;
          }

          case "table":
            return (
              <div key={stableKey}  className={`${styles.tableWrapper} ${styles.wideContent}`}>
                <table>
                  <tbody>
                    {block.rows?.map((row, rowIndex) => (
                      <tr key={`row-${stableKey}-${rowIndex}`}>
                        {row.map((cell, cellIndex) =>
                          rowIndex === 0 ? (
                            <th key={`th-${stableKey}-${cellIndex}`}>{cell}</th>
                          ) : (
                            <td key={`td-${stableKey}-${cellIndex}`}>{cell}</td>
                          )
                        )}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            );

          case "code":
            return (
              <div key={stableKey}   className={`${styles.codeBlock} ${styles.wideContent}`}>
                <div className={styles.codeHeader}>
                  <div className={styles.codeDots}>
                    <span></span>
                    <span></span>
                    <span></span>
                  </div>
                  <span className={styles.codeLang}>Code</span>
                </div>
                <pre>
                  <code>{block.content}</code>
                </pre>
              </div>
            );

          case "divider":
            return <hr key={stableKey} />;

          case "spacer":
            return (
              <div
                key={stableKey}
                style={{
                  height: `${block.content || "40"}px`,
                }}
              />
            );

          default:
            return null;
        }
      })}
    </div>
  );
}