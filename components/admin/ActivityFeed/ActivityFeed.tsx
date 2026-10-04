"use client";

import {
  FaBlog,
  FaImage,
} from "react-icons/fa";

import { MdEmail } from "react-icons/md";

import styles from "./ActivityFeed.module.css";

interface Activity {
  type: "blog" | "banner" | "contact";
  title: string;
  action: string;
  createdAt: string;
}

interface Props {
  activities: Activity[];
}

function getTimeAgo(date: string) {
  const seconds = Math.floor(
    (Date.now() - new Date(date).getTime()) /
    1000
  );

  if (seconds < 60)
    return "Just now";

  const minutes = Math.floor(
    seconds / 60
  );

  if (minutes < 60)
    return `${minutes} min ago`;

  const hours = Math.floor(
    minutes / 60
  );

  if (hours < 24)
    return `${hours} hour ago`;

  const days = Math.floor(
    hours / 24
  );

  if (days === 1)
    return "Yesterday";

  return `${days} days ago`;
}

export default function ActivityFeed({
  activities,
}: Props) {
  const getIcon = (
    type: Activity["type"]
  ) => {
    switch (type) {
      case "blog":
        return (
          <FaBlog
            className={styles.blog}
          />
        );

      case "banner":
        return (
          <FaImage
            className={
              styles.banner
            }
          />
        );

      default:
        return (
          <MdEmail
            className={
              styles.contact
            }
          />
        );
    }
  };

  return (
    <div className={styles.card}>
      <div className={styles.header}>
        <h3>Recent Activity</h3>

        <span>Live</span>
      </div>

      <div className={styles.timeline}>
        {activities.map(
          (activity, index) => (
            <div
              key={index}
              className={
                styles.item
              }
            >
              <div
                className={
                  styles.icon
                }
              >
                {getIcon(
                  activity.type
                )}
              </div>

              <div
                className={
                  styles.content
                }
              >
                <h4>
                  {
                    activity.action
                  }
                </h4>

                <p>
                  {
                    activity.title
                  }
                </p>

                <span>
                  {getTimeAgo(
                    activity.createdAt
                  )}
                </span>
              </div>
            </div>
          )
        )}
      </div>
    </div>
  );
}