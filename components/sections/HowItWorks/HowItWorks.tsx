"use client";

import React from "react";
import styles from "./HowItWorks.module.css";

const steps = [
  {
    count: "01",
    step: "STEP 1",
    title: "Tell Us Your Needs",
    description: "Share your basic details and desired coverage type.",
    themeClass: styles.stepBlue
  },
  {
    count: "02",
    step: "STEP 2",
    title: "Compare Quotes",
    description: "Get instant access to personalized quotes from leading insurers.",
    themeClass: styles.stepGreen
  },
  {
    count: "03",
    step: "STEP 3",
    title: "Choose Your Plan",
    description: "Select the policy that best suits your needs and budget.",
    themeClass: styles.stepOrange
  },
  {
    count: "04",
    step: "STEP 4",
    title: "Get Insured",
    description: "We'll handle the paperwork and enrollment, making it seamless and hassle-free.",
    themeClass: styles.stepPurple
  }
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className={styles.section}>
      <div className={styles.ambientBlur} aria-hidden="true"></div>

      <div className={styles.container}>

        <div className={styles.headerBlock}>
          <div className={styles.badgeLayout}>
            <span className={styles.badgeGlow}></span>
            <span className={styles.badgeDot}></span>
            <span className={styles.badgeText}>
              Insurance Workflow Engine
            </span>
          </div>
          <h2 className={styles.mainTitle}>
            Our efficient <span className={styles.gradientText}>working method</span>
          </h2>
          <p className={styles.headerDesc}>
            From analysis to active protection—experience a completely streamlined, automated onboarding cycle.
          </p>
        </div>

        {/* Global wrapper with localized relative vector alignments */}
        <div className={styles.gridContainer}>
          {/* Vector path connector for desktop streams */}
          <div className={styles.zigZagVectorLine} aria-hidden="true"></div>

          {steps.map((item, idx) => (
            <div key={idx} className={`${styles.stepColumn} ${item.themeClass}`}>
              <div className={styles.ghostCounter}>{item.count}</div>

              <div className={styles.stepBadgeWrapper}>
                <span className={styles.stepBadge}>{item.step}</span>
              </div>

              <h3 className={styles.stepTitle}>{item.title}</h3>
              <p className={styles.stepDesc}>{item.description}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}