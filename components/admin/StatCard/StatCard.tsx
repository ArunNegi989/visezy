"use client";

import { motion } from "framer-motion";
import {
  FaArrowTrendUp,
  FaBlog,
  FaUsers,
  FaEnvelope,
  FaChartLine,
} from "react-icons/fa6";

import styles from "./StatCard.module.css";

interface Props {
  title: string;
  value: string;
  growth: string;
}

export default function StatCard({
  title,
  value,
  growth,
}: Props) {
  const getIcon = () => {
    switch (title) {
      case "Total Blogs":
        return <FaBlog />;
      case "Users":
        return <FaUsers />;
      case "Leads":
        return <FaEnvelope />;
      default:
        return <FaChartLine />;
    }
  };

  return (
    <motion.div
      className={styles.card}
      whileHover={{
        y: -8,
        scale: 1.02,
      }}
      transition={{
        duration: 0.25,
      }}
    >
      <div className={styles.top}>
        <div className={styles.icon}>
          {getIcon()}
        </div>

        <div className={styles.growth}>
          <FaArrowTrendUp />
          {growth}
        </div>
      </div>

      <h2>{value}</h2>

      <p>{title}</p>
    </motion.div>
  );
}