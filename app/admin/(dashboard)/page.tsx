"use client";

import { useEffect, useState } from "react";

import StatCard from "@/components/admin/StatCard/StatCard";
import AnalyticsChart from "@/components/admin/Charts/AnalyticsChart";
import ActivityFeed from "@/components/admin/ActivityFeed/ActivityFeed";
import QuickActions from "@/components/admin/QuickActions/QuickActions";

import {
  getDashboard,
  DashboardResponse,
} from "@/app/src/lib/dashboardService";

import styles from "./dashboard.module.css";

export default function DashboardPage() {
  const [dashboard, setDashboard] =
    useState<DashboardResponse | null>(
      null
    );

  const [loading, setLoading] =
    useState(true);

  useEffect(() => {
    const fetchDashboard =
      async () => {
        try {
          const data =
            await getDashboard();

          setDashboard(data);
        } catch (error) {
          console.error(error);
        } finally {
          setLoading(false);
        }
      };

    fetchDashboard();
  }, []);

if (loading) {
  return (
    <div className={styles.wrapper}>
      <section className={styles.heroSkeleton} />

      <section className={styles.statsGrid}>
        {[...Array(4)].map((_, i) => (
          <div
            key={i}
            className={styles.statSkeleton}
          />
        ))}
      </section>

      <section className={styles.analytics}>
        <div
          className={styles.chartSkeleton}
        />

        <div
          className={styles.activitySkeleton}
        />
      </section>

      <section className={styles.bottomGrid}>
        <div
          className={styles.quickSkeleton}
        />
      </section>
    </div>
  );
}

  if (!dashboard) return null;

  const stats = [
    {
      title: "Total Blogs",
      value:
        dashboard.stats.blogs.toString(),
      growth: `${dashboard.stats.blogs} Total`,
    },

    {
      title: "Hero Banners",
      value:
        dashboard.stats.banners.toString(),
      growth: `${dashboard.stats.activeBanners} Active`,
    },

    {
      title: "Inquiries",
      value:
        dashboard.stats.contacts.toString(),
      growth: `${dashboard.stats.pendingContacts} Pending`,
    },

    {
      title: "Active Banners",
      value:
        dashboard.stats.activeBanners.toString(),
      growth: "Live",
    },
  ];

  return (
    <div className={styles.wrapper}>
      <section className={styles.hero}>
        <div>
          <h1>
            Welcome Back, Admin 👋
          </h1>

          <p>
            Monitor website
            performance, content
            and inquiries.
          </p>
        </div>
      </section>

      <section
        className={styles.statsGrid}
      >
        {stats.map((item) => (
          <StatCard
            key={item.title}
            {...item}
          />
        ))}
      </section>

      <section
        className={styles.analytics}
      >
        <AnalyticsChart
          data={dashboard.analytics}
        />

        <ActivityFeed
          activities={
            dashboard.activities
          }
        />
      </section>

      <section
        className={styles.bottomGrid}
      >
        <QuickActions />
      </section>
    </div>
  );
}