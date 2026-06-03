"use client";

import React from "react";
import styles from "./Hero.module.css";
import {
  HiOutlineShieldCheck,
  HiOutlineStar,
  HiOutlineLightningBolt,
  HiTrendingUp,
  HiCheckCircle,
  HiUsers,
  HiChartBar,
  HiOutlineArrowSmRight,
  HiOutlineShieldExclamation,
  HiOutlineCheckCircle
} from "react-icons/hi";

export default function Hero() {
  return (
    <section id="hero" className={styles.hero} aria-label="Insurance Introduction">
      {/* Dynamic Cinematic Background Mesh */}
      <div className={styles.gridPattern} aria-hidden="true"></div>
      <div className={styles.glowPremium} aria-hidden="true"></div>
      <div className={styles.blurOne} aria-hidden="true"></div>
      <div className={styles.blurTwo} aria-hidden="true"></div>

      <div className={styles.container}>
        {/* LEFT SIDE: Core Value Prop & Typography */}
        <div className={styles.left}>
          <div className={styles.badge}>
            <span className={styles.badgeDot}></span>
            <span className={styles.badgeText}>IRDAI Regulated &amp; Trusted by 5,000+ Indians</span>
          </div>

          <h1 className={styles.title}>
            Insurance Made
            <span className={styles.gradientText}> Smarter,</span>
            <br />
            <span className={styles.textSlideUp}>Faster &amp; Transparent</span>
          </h1>

          <p className={styles.description}>
            Eliminate dark patterns. Compare customized protocols from India's elite providers with zero broker commission markup. Transparent coverage built for real retention.
          </p>

          <div className={styles.buttons}>
            <button className={styles.primaryBtn} type="button">
              <span>Get Free Quote</span>
              <HiOutlineLightningBolt className={styles.btnIconInline} />
            </button>
            <button className={styles.secondaryBtn} type="button">
              <span>Compare Plans</span>
              <HiOutlineArrowSmRight className={styles.arrow} />
            </button>
          </div>

          {/* Quick-Trust Micro-Badges */}
          <div className={styles.trustRow}>
            <div className={styles.trustItem}>
              <HiOutlineShieldCheck className={styles.trustIcon} />
              <span>AES-256 Encrypted</span>
            </div>
            <div className={styles.trustItem}>
              <HiOutlineStar className={styles.trustIconStar} />
              <span>4.9/5 User Rating</span>
            </div>
            <div className={styles.trustItem}>
              <HiOutlineLightningBolt className={styles.trustIconLightning} />
              <span>Instant Setup</span>
            </div>
          </div>

          {/* Core Analytics Metrics Grid */}
          <div className={styles.statsGrid}>
            <div className={styles.statCard}>
              <div className={styles.statLine}></div>
              <h3>30+</h3>
              <p>Tier-1 Partners</p>
            </div>
            <div className={styles.statCard}>
              <div className={styles.statLine}></div>
              <h3>98.4%</h3>
              <p>Settlement Rate</p>
            </div>
            <div className={styles.statCard}>
              <div className={styles.statLine}></div>
              <h3>&lt; 2m</h3>
              <p>Instant Issuance</p>
            </div>
          </div>
        </div>

        {/* RIGHT SIDE: Interactive UI Visual */}
        <div className={styles.right}>
          <div className={styles.dashboardContainer}>
            {/* Outer Floating Ambient Elements */}
            <div className={`${styles.floatingWidget} ${styles.widgetTopLeft}`}>
              <HiOutlineShieldExclamation /> <span>Zero Hidden Costs</span>
            </div>


            <div className={styles.dashboard}>
              {/* FIXED: Header row alignment container */}
              <div className={styles.dashboardHeader}>
                <div className={styles.dots}>
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
                <div className={styles.liveBadge}>
                  <span className={styles.livePulse}></span>
                  Live Realtime Index
                </div>
              </div>

              {/* Household Matrix Data Card */}
              <div className={styles.savingsCard}>
                <span className={styles.savingsTitle}>Average Household Premium Saved</span>
                <div className={styles.savingsRow}>
                  <h2>₹15,000<span className={styles.annumText}>/yr</span></h2>
                  <div className={styles.growth}>
                    <HiTrendingUp />
                    <span>+14.2% YoY</span>
                  </div>
                </div>
              </div>

              {/* Analytics Strip */}
              <div className={styles.metrics}>
                <div className={styles.metricCard}>
                  <div className={styles.metricIconWrapper} style={
  {
    '--accent-color': 'rgba(99, 102, 241, 0.15)'
  } as React.CSSProperties
}>
                    <HiUsers className={styles.metricIcon} style={{ color: '#6366f1' }} />
                  </div>
                  <strong>5.2k+</strong>
                  <span>Active Pools</span>
                </div>
                <div className={styles.metricCard}>
                  <div className={styles.metricIconWrapper} style={{ '--accent-color': 'rgba(245, 158, 11, 0.15)' } as React.CSSProperties }>
                    <HiOutlineStar className={styles.metricIconStar} style={{ color: '#f59e0b' }} />
                  </div>
                  <strong>4.95★</strong>
                  <span>User Score</span>
                </div>
                <div className={styles.metricCard}>
                  <div className={styles.metricIconWrapper} style={{ '--accent-color': 'rgba(16, 185, 129, 0.15)' } as React.CSSProperties}>
                    <HiChartBar className={styles.metricIconChart} style={{ color: '#10b981' }} />
                  </div>
                  <strong>99.1%</strong>
                  <span>Uptime SLA</span>
                </div>
              </div>

              {/* Data Stream Chart Visualizer */}
              <div className={styles.chartWrapper}>
                <div className={styles.chartLabelRow}>
                  <span>Pool Volume Tracker</span>
                  <span className={styles.chartValuePulse}>Live Stream</span>
                </div>
                <div className={styles.chart}>
                  <div className={styles.chartBar} style={{ height: "35%" }} />
                  <div className={styles.chartBar} style={{ height: "55%" }} />
                  <div className={styles.chartBar} style={{ height: "75%" }} />
                  <div className={`${styles.chartBar} ${styles.activeBar}`} style={{ height: "100%" }} />
                  <div className={styles.chartBar} style={{ height: "65%" }} />
                  <div className={styles.chartBar} style={{ height: "85%" }} />
                  <div className={styles.chartBar} style={{ height: "45%" }} />
                </div>
              </div>

              {/* Premium Features Row */}
              <div className={styles.featureBadgesRow}>
                <div className={styles.featureInlineCard}>
                  <div className={styles.floatingIcon}>
                    <HiTrendingUp />
                  </div>
                  <div className={styles.floatingContent}>
                    <span className={styles.floatingLabel}>Smart Yield Optimization</span>
                    <strong className={styles.floatingValue}>Save up to 24%</strong>
                  </div>
                </div>

                <div className={styles.featureInlineCard}>
                  <div className={styles.floatingIconBlue}>
                    <HiCheckCircle />
                  </div>
                  <div className={styles.floatingContent}>
                    <span className={styles.floatingLabel}>Regulatory Compliance</span>
                    <strong className={styles.floatingValue}>IRDAI Licensed</strong>
                  </div>
                </div>
              </div>

              {/* Bottom Trust Verification Anchor Footer */}
              <div className={styles.bottomTrust}>
                <div><HiCheckCircle className={styles.verifiedCheck} /> 100% Direct Claims</div>
                <div><HiCheckCircle className={styles.verifiedCheck} /> Dedicated 1-on-1 Guide</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}