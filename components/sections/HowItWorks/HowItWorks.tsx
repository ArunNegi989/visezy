"use client";

import { motion, type Variants } from "framer-motion";
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

  const containerVariants: Variants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.18,
        delayChildren: 0.15,
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

  const fadeUp: Variants = {
    hidden: {
      opacity: 0,
      y: 60,
      scale: 0.96,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.75,
        ease: "easeOut",
      },
    },
  };

  return (
    <section id="how-it-works" className={styles.section}>
      <div className={styles.ambientBlur} aria-hidden="true"></div>

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
        </motion.div>

        {/* Global wrapper with localized relative vector alignments */}
        <motion.div
          className={styles.gridContainer}
          variants={containerVariants}
        >
          {/* Vector path connector for desktop streams */}
          <div className={styles.zigZagVectorLine} aria-hidden="true"></div>

          {steps.map((item, idx) => (
            <motion.div
              key={item.count}
              className={`${styles.stepColumn} ${item.themeClass}`}
              initial={{
                opacity: 0,
                y: idx % 2 === 0 ? 30 : 90
              }}
              whileInView={{
                opacity: 1,
                y: idx % 2 === 0 ? -30 : 30
              }}
              viewport={{ once: true }}
              transition={{
                duration: 0.7,
                ease: "easeOut",
                delay: idx * 0.15
              }}
              whileHover={{
                y: idx % 2 === 0 ? -40 : 20,
                scale: 1.03,
                rotateX: 4,
                rotateY: -4,
              }}
              style={{
                transformStyle: "preserve-3d",
              }}
            >
              <div className={styles.ghostCounter}>{item.count}</div>

              <div className={styles.stepBadgeWrapper}>
                <span className={styles.stepBadge}>{item.step}</span>
              </div>

              <h3 className={styles.stepTitle}>{item.title}</h3>
              <p className={styles.stepDesc}>{item.description}</p>
            </motion.div>
          ))}
        </motion.div>

      </motion.div>
    </section>
  );
}