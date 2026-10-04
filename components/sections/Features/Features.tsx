"use client";

import React from "react";
import styles from "./Features.module.css";
import {
  HiOutlineShieldCheck,
  HiOutlineCurrencyDollar,
  HiOutlineClock,
  HiOutlineUserGroup,
  HiArrowRight
} from "react-icons/hi";
import { motion, type Variants } from "framer-motion";
const features = [
  {
    icon: <HiOutlineCurrencyDollar />,
    title: "Save More",
    description: "Compare optimized plans from elite providers to eliminate over-insurance markup.",
    colorClass: styles.iconDollar
  },
  {
    icon: <HiOutlineShieldCheck />,
    title: "Trusted Coverage",
    description: "Access curated policies directly backed by IRDAI-regulated insurance partners.",
    colorClass: styles.iconShield
  },
  {
    icon: <HiOutlineClock />,
    title: "Instant Quotes",
    description: "Get hyper-personalized quotes tailored to your metrics within 120 seconds flat.",
    colorClass: styles.iconClock
  },
  {
    icon: <HiOutlineUserGroup />,
    title: "Expert Advisors",
    description: "On-demand assistance from dedicated humans to guide you through claims.",
    colorClass: styles.iconUser
  },
];

export default function Features() {

  const containerVariants: Variants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.15,
      },
    },
  };

  const fadeUp: Variants = {
    hidden: {
      opacity: 0,
      y: 50,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
        ease: "easeOut",
      },
    },
  };

  const fadeDown: Variants = {
    hidden: {
      opacity: 0,
      y: -40,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };
  return (
    <section id="features" className={styles.features} aria-labelledby="features-heading">
      {/* Structural Ambient Mesh Background Layers */}
      <div className={styles.topLightGlow} aria-hidden="true" />
      <div className={styles.gridPattern} aria-hidden="true" />

      <motion.div
        className={styles.container}
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <motion.div
          className={styles.headerBlock}
          variants={fadeDown}
        >
          <div className={styles.badge}>
            <span className={styles.badgePulse} />
            <span className={styles.badgeText}>Platform Capabilities</span>
          </div>

          <h2 id="features-heading" className={styles.title}>
            Everything You Need To Find <br />
            <span className={styles.gradientText}>Better Insurance</span>
          </h2>

          <p className={styles.description}>
            Compare, customize, and secure your financial safety net using an automated ecosystem engineered for absolute transparency.
          </p>
        </motion.div>
        {/* Updated Modern 4-Column SaaS Grid */}
        <motion.div
          className={styles.grid}
          variants={containerVariants}
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className={styles.card}
              variants={fadeUp}
              whileHover={{
                scale: 1.04,
                rotateX: 4,
                rotateY: -4,
                y: -12
              }}
              transition={{
                type: "spring",
                stiffness: 280,
                damping: 18
              }}>
              {/* Top Accent Line Highlight */}
              <div className={styles.cardBorderAccent} aria-hidden="true" />

              <div className={`${styles.iconContainer} ${feature.colorClass}`}>
                {feature.icon}
              </div>

              <div className={styles.cardBody}>
                <h3>{feature.title}</h3>
                <p>{feature.description}</p>
              </div>

              <div className={styles.actionFooter}>
                <span className={styles.actionText}>Learn more</span>
                <div className={styles.arrowCircle}>
                  <HiArrowRight className={styles.arrowIcon} />
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}