"use client";

import { motion } from "framer-motion";

import {
  FaArrowTrendUp,
  FaBlog,
  FaImage,
} from "react-icons/fa6";

import { MdEmail } from "react-icons/md";

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

      case "Hero Banners":
        return <FaImage />;

      case "Leads":
        return <MdEmail />;

      default:
        return <FaImage />;
    }

  };

  return (

    <motion.div
      className={styles.card}
      whileHover={{
        y:-8,
        scale:1.02,
      }}
    >

      <div className={styles.top}>

        <div className={styles.icon}>
          {getIcon()}
        </div>

        <div className={styles.growth}>
          <FaArrowTrendUp/>
          {growth}
        </div>

      </div>

      <h2>{value}</h2>

      <p>{title}</p>

    </motion.div>

  );

}