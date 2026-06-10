"use client";

import {
  ResponsiveContainer,
  AreaChart,
  Area,
  XAxis,
  Tooltip,
} from "recharts";

import { analyticsData } from "@/app/src/lib/dashboardData";
import styles from "./AnalyticsChart.module.css";

export default function AnalyticsChart() {
  return (
    <div className={styles.chartCard}>
      <div className={styles.header}>
        <h3>Website Analytics</h3>
        <span>Last 6 Months</span>
      </div>

      <ResponsiveContainer
        width="100%"
        height={320}
      >
        <AreaChart data={analyticsData}>
          <defs>
            <linearGradient
              id="gradient"
              x1="0"
              y1="0"
              x2="0"
              y2="1"
            >
              <stop
                offset="5%"
                stopColor="#2563eb"
                stopOpacity={0.4}
              />
              <stop
                offset="95%"
                stopColor="#2563eb"
                stopOpacity={0}
              />
            </linearGradient>
          </defs>

          <XAxis dataKey="month" />

          <Tooltip />

          <Area
            type="monotone"
            dataKey="visitors"
            stroke="#2563eb"
            fill="url(#gradient)"
            strokeWidth={3}
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}