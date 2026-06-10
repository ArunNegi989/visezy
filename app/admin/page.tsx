import StatCard from "@/components/admin/StatCard/StatCard";
import AnalyticsChart from "@/components/admin/Charts/AnalyticsChart";
import ActivityFeed from "@/components/admin/ActivityFeed/ActivityFeed";
import RecentLeads from "@/components/admin/RecentLeads/RecentLeads";
import QuickActions from "@/components/admin/QuickActions/QuickActions";

import { stats } from "../src/lib/dashboardData";

import styles from "./dashboard.module.css";

export default function DashboardPage() {
  return (
    <div className={styles.wrapper}>
      <section className={styles.hero}>
        <div>
          <h1>
            Welcome Back, Admin 👋
          </h1>

          <p>
            Monitor website performance,
            content and leads.
          </p>
        </div>
      </section>

      <section className={styles.statsGrid}>
        {stats.map((item) => (
          <StatCard
            key={item.title}
            {...item}
          />
        ))}
      </section>

      <section className={styles.analytics}>
        <AnalyticsChart />

        <ActivityFeed />
      </section>

      <section className={styles.bottomGrid}>
  <RecentLeads />
  <QuickActions />
</section>
    </div>
  );
}