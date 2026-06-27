"use client";

import { motion } from "framer-motion";

import {
  FaChartLine,
  FaUsers,
  FaUserCheck,
  FaEnvelope,
  FaArrowTrendUp,
} from "react-icons/fa6";

import styles from "./analytics.module.css";

export default function AnalyticsPage() {
  return (
    <div className={styles.wrapper}>
      <motion.div
        className={styles.hero}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <div>
          <span className={styles.badge}>
            Business Intelligence
          </span>

          <h1>Analytics Dashboard</h1>

          <p>
            Monitor visitors, conversions,
            leads and overall website
            performance.
          </p>
        </div>
      </motion.div>

      <div className={styles.statsGrid}>
        <div className={styles.statCard}>
          <FaUsers />

          <div>
            <span>Total Visitors</span>
            <h2>24.5K</h2>
            <p>+18.4%</p>
          </div>
        </div>

        <div className={styles.statCard}>
          <FaEnvelope />

          <div>
            <span>Total Leads</span>
            <h2>356</h2>
            <p>+12.8%</p>
          </div>
        </div>

        <div className={styles.statCard}>
          <FaUserCheck />

          <div>
            <span>Conversions</span>
            <h2>72</h2>
            <p>+8.3%</p>
          </div>
        </div>

        <div className={styles.statCard}>
          <FaArrowTrendUp />

          <div>
            <span>Growth Rate</span>
            <h2>32%</h2>
            <p>+5.4%</p>
          </div>
        </div>
      </div>

      <div className={styles.chartGrid}>
        <div className={styles.chartCard}>
          <div className={styles.chartHeader}>
            <h3>Traffic Overview</h3>
            <span>Last 6 Months</span>
          </div>

          <div className={styles.chartPlaceholder}>
            <FaChartLine />
            <p>
              Traffic Analytics Chart
            </p>
          </div>
        </div>

        <div className={styles.chartCard}>
          <div className={styles.chartHeader}>
            <h3>Lead Sources</h3>
            <span>Current Month</span>
          </div>

          <div className={styles.leadsBreakdown}>
            <div>
              <span>Health Insurance</span>
              <strong>48%</strong>
            </div>

            <div>
              <span>Car Insurance</span>
              <strong>28%</strong>
            </div>

            <div>
              <span>Life Insurance</span>
              <strong>24%</strong>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.bottomGrid}>
        <div className={styles.card}>
          <h3>Top Pages</h3>

          <ul>
            <li>
              Health Insurance Guide
            </li>
            <li>
              Car Insurance Plans
            </li>
            <li>
              Life Insurance Benefits
            </li>
            <li>
              Compare Policies
            </li>
          </ul>
        </div>

        <div className={styles.card}>
          <h3>Recent Performance</h3>

          <ul>
            <li>
              Visitors increased by 18%
            </li>
            <li>
              Leads increased by 12%
            </li>
            <li>
              Bounce rate reduced by 5%
            </li>
            <li>
              Conversion rate improved
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}