import styles from "./ActivityFeed.module.css";

const activities = [
  {
    title: "New lead received",
    time: "2 min ago",
  },
  {
    title: "Blog published",
    time: "14 min ago",
  },
  {
    title: "Hero section updated",
    time: "1 hour ago",
  },
  {
    title: "Footer modified",
    time: "3 hours ago",
  },
  {
    title: "New user added",
    time: "Yesterday",
  },
];

export default function ActivityFeed() {
  return (
    <div className={styles.card}>
      <div className={styles.header}>
        <h3>Recent Activity</h3>
        <span>Live</span>
      </div>

      <div className={styles.timeline}>
        {activities.map((activity) => (
          <div
            key={activity.title}
            className={styles.item}
          >
            <div className={styles.dot}></div>

            <div>
              <h4>{activity.title}</h4>
              <p>{activity.time}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}