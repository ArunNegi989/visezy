import styles from "./RecentLeads.module.css";

const leads = [
  {
    name: "Rahul Sharma",
    insurance: "Health",
    date: "Today",
  },
  {
    name: "Priya Patel",
    insurance: "Car",
    date: "Yesterday",
  },
  {
    name: "Amit Singh",
    insurance: "Life",
    date: "2 days ago",
  },
  {
    name: "Neha Verma",
    insurance: "Health",
    date: "3 days ago",
  },
];

export default function RecentLeads() {
  return (
    <div className={styles.card}>
      <div className={styles.header}>
        <h3>Recent Leads</h3>
        <button>View All</button>
      </div>

      <div className={styles.table}>
        {leads.map((lead) => (
          <div
            key={lead.name}
            className={styles.row}
          >
            <div>
              <h4>{lead.name}</h4>
              <span>{lead.insurance}</span>
            </div>

            <p>{lead.date}</p>
          </div>
        ))}
      </div>
    </div>
  );
}