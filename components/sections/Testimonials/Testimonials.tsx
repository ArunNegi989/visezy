"use client";

import { motion, type Variants } from "framer-motion";
import styles from "./Testimonials.module.css";
import {
  HiStar,
  HiOutlineCheckCircle,
  HiOutlineArrowSmRight,
} from "react-icons/hi";

export default function Testimonials() {
  /* ============================
      FRAMER MOTION VARIANTS
  ============================ */

  const containerVariants: Variants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.18,
        delayChildren: 0.15,
      },
    },
  };

  const fadeLeft: Variants = {
    hidden: {
      opacity: 0,
      x: -60,
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  const fadeRight: Variants = {
    hidden: {
      opacity: 0,
      x: 60,
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
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

  return (
    <section id="testimonials" className={styles.section}>
      {/* ============================
          BACKGROUND
      ============================ */}

      <div
        className={styles.auroraGlow}
        aria-hidden="true"
      />

      <motion.div
        className={styles.container}
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{
          once: true,
          amount: 0.2,
        }}
      >
        {/* ============================
            TOP LAYOUT
        ============================ */}

        <div className={styles.topLayoutGroup}>

          {/* ============================
              LEFT COLUMN
          ============================ */}

          <motion.div
            className={styles.leftMetaColumn}
            variants={fadeLeft}
          >
            <div className={styles.badge}>
              <span className={styles.badgePulse}></span>

              <span className={styles.badgeText}>
                ABOUT VISEZY
              </span>
            </div>

            <h2 className={styles.boldHeading}>
              Your Trusted Guide to
              <br />

              <span className={styles.gradientText}>
                Insurance Savings
              </span>
            </h2>

            <p className={styles.bodyCopy}>
              Visezy isn't just another insurance broker.
              We're passionate about empowering people
              like you to navigate the complex world of
              insurance with confidence and ease.
              Founded on the belief that everyone deserves
              access to affordable, high-quality coverage,
              we built Visezy to simplify your insurance
              journey.
            </p>

            <div className={styles.featureGrid}>
              <div className={styles.featureItem}>
                <HiOutlineCheckCircle
                  className={styles.checkIcon}
                />

                <span>
                  Manage your policy online
                </span>
              </div>

              <div className={styles.featureItem}>
                <HiOutlineCheckCircle
                  className={styles.checkIcon}
                />

                <span>
                  Every little interaction matters
                </span>
              </div>

              <div className={styles.featureItem}>
                <HiOutlineCheckCircle
                  className={styles.checkIcon}
                />

                <span>
                  100% Claim success rates
                </span>
              </div>
            </div>
          </motion.div>

          {/* ============================
              RIGHT COLUMN
              (PART 2)
          ============================ */}
                    {/* ============================
              RIGHT COLUMN
          ============================ */}

          <motion.div
            className={styles.rightCardColumn}
            variants={containerVariants}
          >
            {/* Premium Info Card */}

            <motion.div
              variants={fadeRight}
              whileHover={{
                y: -10,
                scale: 1.03,
                rotateY: -5,
              }}
              transition={{
                type: "spring",
                stiffness: 280,
                damping: 18,
              }}
              style={{
                transformStyle: "preserve-3d",
              }}
            >
              <div
                className={`${styles.premiumBoxCard} ${styles.blueToken}`}
              >
                <div className={styles.tokenBar}></div>

                <h3 className={styles.boxCardTitle}>
                  Insurance Item
                </h3>

                <p className={styles.boxCardText}>
                  We will give you a complete account of
                  the system, and expound the actual
                  system configurations instantly without
                  overhead latency.
                </p>
              </div>
            </motion.div>

            {/* CTA Card */}

            <motion.div
              variants={fadeRight}
              whileHover={{
                y: -10,
                scale: 1.03,
                rotateY: -5,
              }}
              transition={{
                type: "spring",
                stiffness: 280,
                damping: 18,
              }}
              style={{
                transformStyle: "preserve-3d",
              }}
            >
              <div
                className={`${styles.ctaCardBlock} ${styles.greenToken}`}
              >
                <div className={styles.tokenBar}></div>

                <h3 className={styles.ctaTitle}>
                  Join the Visezy Community
                </h3>

                <p className={styles.ctaText}>
                  We're your partner in securing your
                  future with absolute peace of mind.
                  Get a tailored free quote today and
                  see how much you can save.
                </p>

                <div className={styles.ctaLink}>
                  <span>Get Started Now</span>

                  <HiOutlineArrowSmRight
                    className={styles.arrowInline}
                  />
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* ============================
            RATING PANEL
        ============================ */}

        <motion.div
          className={styles.scoreBarPanel}
          variants={fadeUp}
        >
          <div className={styles.scoreDivider}></div>

          <p className={styles.barLabel}>
            HIGHEST RATED INSURANCE PLATFORM
          </p>

          <div className={styles.starsRow}>
            {[...Array(5)].map((_, i) => (
              <motion.div
                key={i}
                initial={{
                  scale: 0,
                  rotate: -20,
                }}
                whileInView={{
                  scale: 1,
                  rotate: 0,
                }}
                viewport={{
                  once: true,
                }}
                transition={{
                  delay: 0.45 + i * 0.08,
                  type: "spring",
                  stiffness: 320,
                }}
                whileHover={{
                  scale: 1.25,
                  rotate: 12,
                }}
              >
                <HiStar className={styles.starIcon} />
              </motion.div>
            ))}
          </div>

          <div className={styles.metaRatingFlex}>
            <h4 className={styles.trustScoreDisplay}>
              Average Score rated 4.9/5
            </h4>

            <span className={styles.dotSeparator}>
              •
            </span>

            <p className={styles.ratingText}>
              Trusted by over 5000+ customers
            </p>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}