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
  return (
    <section id="features" className={styles.features} aria-labelledby="features-heading">
      {/* Structural Ambient Mesh Background Layers */}
      <div className={styles.topLightGlow} aria-hidden="true" />
      <div className={styles.gridPattern} aria-hidden="true" />

      <div className={styles.container}>
        <div className={styles.headerBlock}>
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
        </div>

        {/* Updated Modern 4-Column SaaS Grid */}
        <div className={styles.grid}>
          {features.map((feature, index) => (
           <div
  key={index}
  className={styles.card}
  style={
    {
      "--card-index": index,
    } as React.CSSProperties
  }
> {/* Top Accent Line Highlight */}
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
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}