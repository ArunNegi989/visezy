"use client";

import React from "react";
import styles from "./Testimonials.module.css";
import { HiStar, HiOutlineCheckCircle, HiOutlineArrowSmRight } from "react-icons/hi";

export default function Testimonials() {
  return (
    <section id="testimonials" className={styles.section}>
      {/* Dynamic Aura Background */}
      <div className={styles.auroraGlow} aria-hidden="true"></div>

      <div className={styles.container}>

        {/* TOP INTERACTIVE CARD GROUP */}
        <div className={styles.topLayoutGroup}>

          {/* LEFT META COLUMN */}
          <div className={styles.leftMetaColumn}>
            <div className={styles.badge}>
              <span className={styles.badgePulse}></span>
              <span className={styles.badgeText}>ABOUT VISEZY</span>
            </div>

            <h2 className={styles.boldHeading}>
              Your Trusted Guide to <br />
              <span className={styles.gradientText}>Insurance Savings</span>
            </h2>

            <p className={styles.bodyCopy}>
              Visezy isn't just another insurance broker. We're passionate about empowering people like you to navigate the complex world of insurance with confidence and ease. Founded on the belief that everyone deserves access to affordable, high-quality coverage, we built Visezy to simplify your insurance journey.
            </p>

            <div className={styles.featureGrid}>
              <div className={styles.featureItem}>
                <HiOutlineCheckCircle className={styles.checkIcon} />
                <span>Manage your policy online</span>
              </div>
              <div className={styles.featureItem}>
                <HiOutlineCheckCircle className={styles.checkIcon} />
                <span>Every little interaction matters</span>
              </div>
              <div className={styles.featureItem}>
                <HiOutlineCheckCircle className={styles.checkIcon} />
                <span>100% Claim success rates</span>
              </div>
            </div>
          </div>

          {/* RIGHT PANEL - FLOATING TOKEN ARCHITECTURE */}
          <div className={styles.rightCardColumn}>
            <div className={`${styles.premiumBoxCard} ${styles.blueToken}`}>
              <div className={styles.tokenBar}></div>
              <h3 className={styles.boxCardTitle}>Insurance Item</h3>
              <p className={styles.boxCardText}>
                We will give you a complete account of the system, and expound the actual system configurations instantly without overhead latency.
              </p>
            </div>

            <div className={`${styles.ctaCardBlock} ${styles.greenToken}`}>
              <div className={styles.tokenBar}></div>
              <h3 className={styles.ctaTitle}>Join the Visezy Community</h3>
              <p className={styles.ctaText}>
                We're your partner in securing your future with absolute peace of mind. Get a tailored free quote today and see how much you can save.
              </p>
              <div className={styles.ctaLink}>
                <span>Get Started Now</span>
                <HiOutlineArrowSmRight className={styles.arrowInline} />
              </div>
            </div>
          </div>
        </div>

        {/* BOTTOM RATING SCOREBAR PANEL */}
        <div className={styles.scoreBarPanel}>
          <div className={styles.scoreDivider}></div>

          <p className={styles.barLabel}>HIGHEST RATED INSURANCE PLATFORM</p>

          <div className={styles.starsRow}>
            {[...Array(5)].map((_, i) => (
              <HiStar key={i} className={styles.starIcon} />
            ))}
          </div>

          <div className={styles.metaRatingFlex}>
            <h4 className={styles.trustScoreDisplay}>Average Score rated 4.9/5</h4>
            <span className={styles.dotSeparator}>•</span>
            <p className={styles.ratingText}>
              Trusted by over 5000+ customers
              <span className={styles.viewReviewsLink}>View all Reviews</span>
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}