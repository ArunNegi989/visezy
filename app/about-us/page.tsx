"use client";

import { motion, type Variants } from "framer-motion";
import styles from "./about-us.module.css";
import Image from "next/image";
import Link from "next/link";
import {
  FiShield,
  FiUsers,
  FiTrendingUp,
  FiCheckCircle,
  FiTarget,
  FiAward,
  FiArrowRight,
  FiActivity,
  FiLayers,
  FiInfo,
} from "react-icons/fi";

const reasons = [
  {
    title: "Unbiased, Fiduciary-Grade Guidance",
    description:
      "We eliminate traditional corporate misalignments by putting objective market statistics first. Our primary focus is ensuring that customers possess the exact analytical breakdown required to choose risk-mitigation frameworks with absolute confidence.",
  },
  {
    title: "Simplified Institutional Architecture",
    description:
      "Complex contractual language shouldn't hold back your business or family security. We standardize complicated terminology, clear up hidden processing limitations, and turn bureaucratic systems into clear, intuitive step-by-step roadmaps.",
  },
  {
    title: "Continuous Claims Ecosystem Support",
    description:
      "Our administrative support goes far beyond the point of purchase. We stand with you as active customer advocates throughout your entire policy life cycle, offering clear guidance during critical asset loss assessments and filings.",
  },
];

const stats = [
  { number: "15K+", label: "Portfolios Tailored" },
  { number: "99.2%", label: "Verified Claims Success Rate" },
  { number: "24/7", label: "Active Incident Response" },
  { number: "100%", label: "Unbiased Commission Structure" },
];

const values = [
  {
    icon: <FiShield />,
    title: "Radical Transparency",
    description:
      "We provide complete access to structural comparison metrics with no hidden platform fees or premium additions. Every dynamic pricing model is presented openly so you can confidently track your asset investments.",
  },
  {
    icon: <FiUsers />,
    title: "Customer-Centric Architecture",
    description:
      "We design every recommendation framework entirely around your unique financial metrics, long-term real estate goals, corporate scale requirements, and capital limitations.",
  },
  {
    icon: <FiAward />,
    title: "Uncompromising Integrity",
    description:
      "Long-term relationships are built on clear, honest communication. We maintain total transparency by refusing backend incentive structures from traditional legacy insurance brokers.",
  },
  {
    icon: <FiTrendingUp />,
    title: "Data-Driven Expert Advisory",
    description:
      "Our licensed advisory teams blend real-world risk consulting experience with modern algorithmic tracking tools to keep your dynamic coverage perfectly aligned with changing market conditions.",
  },
];

const features = [
  "Algorithmic personalization matching your exact risk profile",
  "Hassle-free digital documentation and automated identity verification",
  "Transparent, multi-variant premium and deductible comparisons",
  "Dedicated individual claims and risk mitigation advocates",
  "Direct API access to coverage portfolios from top global insurers",
  "Cloud-native dynamic policy asset storage and accessibility",
  "Comprehensive regulatory and compliance cross-matching",
  "Proactive milestone tracking for family and business growth",
];

export default function AboutUsPage() {
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
      x: -70,
      filter: "blur(0px)",
    },
    visible: {
      opacity: 1,
      x: 0,
      filter: "blur(0px)",
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  const fadeRight: Variants = {
    hidden: {
      opacity: 0,
      x: 70,
      filter: "blur(0px)",
    },
    visible: {
      opacity: 1,
      x: 0,
      filter: "blur(0px)",
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
      filter: "blur(0px)",
    },
    visible: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: {
        duration: 0.7,
        ease: "easeOut",
      },
    },
  };

  return (
    <main className={styles.page}>
      <div className={styles.gridOverlay}></div>
      <div className={styles.blobOne}></div>
      <div className={styles.blobTwo}></div>

      {/* HERO */}

      <motion.section
        className={styles.hero}
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <motion.div
          className={styles.heroContent}
          variants={fadeLeft}
        >
          <div className={styles.badgeWrapper}>
            <span className={styles.badge}>THE VINSURE ETHOS</span>
          </div>

          <h1 className={styles.heroTitle}>
            Democratizing Risk Management via
            <span className={styles.gradientText}>
              {" "}
              Clarity, Integrity & Technology
            </span>
          </h1>

          <p className={styles.heroDescription}>
            Vinsure was built to address a core problem: traditional insurance
            systems are often confusing, costly, and misaligned with user
            interests. We combine objective data analytics with seasoned
            consumer advocacy to help you safeguard what matters most with total
            confidence.
          </p>

          <div className={styles.heroActions}>
            <Link href="/policies" className={styles.primaryBtn}>
              Explore Policies <FiArrowRight />
            </Link>

            <Link href="#story" className={styles.secondaryBtn}>
              Our Corporate Story
            </Link>
          </div>
        </motion.div>

        <motion.div
          className={styles.heroImageContainer}
          variants={fadeRight}
          whileHover={{
            y: -8,
            scale: 1.02,
          }}
          transition={{
            type: "spring",
            stiffness: 260,
            damping: 20,
          }}
        >
          <div className={styles.imageInner}>
            <Image
              src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=1200&q=80"
              alt="Vinsure Strategic Leadership Consultation Session"
              fill
              priority
              sizes="(max-width:1200px)100vw,50vw"
            />
          </div>
        </motion.div>
      </motion.section>

      {/* STATS */}

      <motion.section
        className={styles.statsSection}
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.25 }}
      >
        <div className={styles.statsGrid}>
          {stats.map((item, index) => (
            <motion.div
              key={index}
              className={styles.statCard}
              variants={fadeUp}
              whileHover={{
                y: -8,
                scale: 1.03,
              }}
              transition={{
                type: "spring",
                stiffness: 260,
                damping: 20,
              }}
            >
              <h3 className={styles.statNumber}>{item.number}</h3>
              <p className={styles.statLabel}>{item.label}</p>
            </motion.div>
          ))}
        </div>
      </motion.section>

              {/* ============================
            STORY SECTION
        ============================ */}

        <motion.section
          id="story"
          className={styles.storySection}
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
            amount: 0.2,
          }}
        >
          <div className={styles.storyGrid}>
            {/* LEFT IMAGE */}

            <motion.div
              className={styles.storyImageContainer}
              variants={fadeLeft}
              whileHover={{
                y: -8,
                scale: 1.02,
              }}
              transition={{
                type: "spring",
                stiffness: 260,
                damping: 20,
              }}
            >
              <div className={styles.imageInner}>
                <Image
                  src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=1200&q=80"
                  alt="Collaborative Risk Engineers and Product Developers at Vinsure HQ"
                  fill
                  sizes="(max-width:1200px)100vw,50vw"
                />
              </div>
            </motion.div>

            {/* RIGHT CONTENT */}

            <motion.div
              className={styles.storyContent}
              variants={fadeRight}
            >
              <span className={styles.sectionTag}>
                OUR FOUNDING PRINCIPLE
              </span>

              <h2 className={styles.sectionTitle}>
                Replacing Structural Confusion
                With Clear, Actionable Certainty
              </h2>

              <p className={styles.storyText}>
                Vinsure was founded by an expert
                group of financial analysts,
                regulatory lawyers and software
                engineers who noticed that legacy
                insurance procurement systems
                relied on confusing information
                gaps to maximize corporate
                commissions.
              </p>

              <p className={styles.storyText}>
                We chose to build a completely
                transparent alternative. By
                combining modern comparison
                engines with real human expertise,
                we strip away confusing fine
                print and focus on providing
                independent, data-backed value
                directly to every customer.
              </p>

              <motion.div
                className={styles.checkList}
                variants={containerVariants}
              >
                {features.map((item, index) => (
                  <motion.div
                    key={index}
                    className={styles.checkItem}
                    variants={fadeUp}
                    whileHover={{
                      x: 8,
                    }}
                    transition={{
                      type: "spring",
                      stiffness: 280,
                      damping: 18,
                    }}
                  >
                    <span className={styles.checkIcon}>
                      <FiCheckCircle />
                    </span>

                    <span className={styles.checkText}>
                      {item}
                    </span>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          </div>
        </motion.section>

                {/* ============================
            MISSION & VISION SECTION
        ============================ */}

        <motion.section
          className={styles.missionSection}
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
            amount: 0.2,
          }}
        >
          <div className={styles.missionGrid}>
            {/* Mission Card */}

            <motion.div
              className={styles.missionCard}
              variants={fadeLeft}
              whileHover={{
                y: -10,
                scale: 1.03,
                rotateY: -4,
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
              <motion.div
                className={styles.missionIconWrapper}
                whileHover={{
                  rotate: 10,
                  scale: 1.12,
                }}
                transition={{
                  type: "spring",
                  stiffness: 320,
                }}
              >
                <FiTarget />
              </motion.div>

              <h3>Our Modern Mission</h3>

              <p>
                To rebuild the core insurance landscape
                around transparency, accessibility and
                metric-driven integrity. We protect
                families, small businesses and growing
                enterprises by turning complex,
                fragmented risk policies into clear,
                asset-backed configurations.
              </p>
            </motion.div>

            {/* Vision Card */}

            <motion.div
              className={styles.missionCard}
              variants={fadeRight}
              whileHover={{
                y: -10,
                scale: 1.03,
                rotateY: 4,
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
              <motion.div
                className={styles.missionIconWrapper}
                whileHover={{
                  rotate: -10,
                  scale: 1.12,
                }}
                transition={{
                  type: "spring",
                  stiffness: 320,
                }}
              >
                <FiTrendingUp />
              </motion.div>

              <h3>Our Architectural Vision</h3>

              <p>
                To become the global gold standard
                for consumer protection networks.
                We are building an intuitive platform
                where users instantly analyze,
                optimize and secure their complete
                multi-asset insurance coverage
                without worrying about hidden
                administrative fees.
              </p>
            </motion.div>
          </div>
        </motion.section>

                {/* ============================
            VALUES SECTION
        ============================ */}

        <motion.section
          className={styles.valuesSection}
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
            amount: 0.2,
          }}
        >
          <motion.div
            className={styles.valuesHeader}
            variants={fadeUp}
          >
            <span className={styles.sectionTag}>
              OUR VALUES
            </span>

            <h2 className={styles.sectionTitleCenter}>
              The Core Principles Anchoring Our Culture
            </h2>

            <p className={styles.sectionSubtitle}>
              These structural concepts define our
              day-to-day work, guiding how we evaluate
              carrier partnerships and maintain fiduciary
              responsibility across thousands of portfolio
              assets.
            </p>
          </motion.div>

          <motion.div
            className={styles.valuesGrid}
            variants={containerVariants}
          >
            {values.map((value, index) => (
              <motion.div
                key={index}
                className={styles.valueCard}
                variants={fadeUp}
                whileHover={{
                  y: -10,
                  scale: 1.03,
                  rotateX: 4,
                  rotateY: -4,
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
                <motion.div
                  className={styles.iconBox}
                  whileHover={{
                    rotate: 12,
                    scale: 1.12,
                  }}
                  transition={{
                    type: "spring",
                    stiffness: 320,
                  }}
                >
                  {value.icon}
                </motion.div>

                <h3>{value.title}</h3>

                <p>{value.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.section>

        {/* ============================
            WHY CHOOSE US
        ============================ */}

        <motion.section
          className={styles.whyChooseSection}
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
            amount: 0.2,
          }}
        >
          <motion.div
            className={styles.valuesHeader}
            variants={fadeUp}
          >
            <span className={styles.sectionTag}>
              OPERATIONAL DIFFERENTIATORS
            </span>

            <h2 className={styles.sectionTitleCenter}>
              Built To Prioritize Personal Wealth and
              Business Security
            </h2>
          </motion.div>

          <motion.div
            className={styles.reasonGrid}
            variants={containerVariants}
          >
            {reasons.map((item, index) => (
              <motion.div
                key={index}
                className={styles.reasonCard}
                variants={fadeUp}
                whileHover={{
                  y: -10,
                  scale: 1.03,
                  rotateX: 4,
                  rotateY: -4,
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
                <motion.div
                  className={styles.reasonHeaderIcon}
                  whileHover={{
                    rotate: 15,
                    scale: 1.15,
                  }}
                  transition={{
                    type: "spring",
                    stiffness: 320,
                  }}
                >
                  <FiLayers />
                </motion.div>

                <h3>{item.title}</h3>

                <p>{item.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.section>
                {/* ============================
            PROCESS SECTION
        ============================ */}

        <motion.section
          className={styles.processSection}
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <motion.div
            className={styles.valuesHeader}
            variants={fadeUp}
          >
            <span className={styles.sectionTag}>
              THE MODERN ROADMAP
            </span>

            <h2 className={styles.sectionTitleCenter}>
              A Fast, Streamlined Framework Built For Clarity
            </h2>
          </motion.div>

          <motion.div
            className={styles.processGrid}
            variants={containerVariants}
          >
            {[
              {
                number: "01",
                title: "Map Individual Risk Needs",
                text: "Our dynamic data engine tracks your specific family size, corporate framework, or asset portfolio to isolate exactly where your risk sits, eliminating unnecessary coverage extras.",
              },
              {
                number: "02",
                title: "Run Real-Time Comparative Models",
                text: "We cross-examine dozens of vetted, regulatory-compliant carriers side-by-side, giving you a clear look at true deductible metrics, policy exclusions, and realistic premium allocations.",
              },
              {
                number: "03",
                title: "Deploy Lifelong Advisory Support",
                text: "Once your policy is active, our personal account managers continuously monitor your coverage, checking in at major life milestones to keep your asset configuration perfectly optimized.",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                className={styles.processCard}
                variants={fadeUp}
                whileHover={{
                  y: -10,
                  scale: 1.03,
                  rotateX: 4,
                  rotateY: -4,
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
                <motion.div
                  className={styles.processNumberWrapper}
                  whileHover={{
                    rotate: 12,
                    scale: 1.12,
                  }}
                  transition={{
                    type: "spring",
                    stiffness: 320,
                  }}
                >
                  <span>{item.number}</span>
                </motion.div>

                <h3>{item.title}</h3>

                <p>{item.text}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.section>

        {/* ============================
            FAQ SECTION
        ============================ */}

        <motion.section
          className={styles.faqSection}
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <motion.div
            className={styles.valuesHeader}
            variants={fadeUp}
          >
            <span className={styles.sectionTag}>
              FAQ
            </span>

            <h2 className={styles.sectionTitleCenter}>
              Frequently Addressed Inquiries Regarding Our Platform
            </h2>
          </motion.div>

          <motion.div
            className={styles.faqGrid}
            variants={containerVariants}
          >
            {[
              {
                title:
                  "How does Vinsure keep its advice completely unbiased?",
                desc:
                  "Unlike legacy insurance brokers who are incentivized to sell specific policies for hidden backend commissions, Vinsure works under a completely transparent model. Our comparison systems evaluate policies strictly by metrics like pricing advantages, customer claim scores, and historical data matching your specific profile.",
              },
              {
                title:
                  "Does Vinsure provide hands-on help if I need to file an emergency claim?",
                desc:
                  "Absolutely. We don't just point you toward a policy and walk away. Our customer care specialists assist with documentation, claim filing, and communication with the insurer until the process is complete.",
              },
              {
                title:
                  "Can I transition my existing insurance policy to Vinsure?",
                desc:
                  "Yes. We evaluate your current policy, identify overlaps or unnecessary premiums, and help you transition seamlessly without losing your existing coverage.",
              },
            ].map((faq, index) => (
              <motion.div
                key={index}
                className={styles.faqCard}
                variants={fadeUp}
                whileHover={{
                  y: -8,
                  scale: 1.02,
                }}
                transition={{
                  type: "spring",
                  stiffness: 280,
                  damping: 18,
                }}
              >
                <div className={styles.faqTitleBox}>
                  <FiInfo
                    className={styles.faqQuestionIcon}
                  />

                  <h4>{faq.title}</h4>
                </div>

                <p>{faq.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.section>

        {/* ============================
            CTA SECTION
        ============================ */}

        <motion.section
          className={styles.ctaSection}
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <motion.div
            className={styles.ctaCard}
            variants={fadeUp}
          >
            <motion.div
              className={styles.ctaContent}
              variants={fadeLeft}
            >
              <span className={styles.ctaTag}>
                Take Command of Your Security
              </span>

              <h2>
                Build an Uncompromising, Transparent Risk
                Portfolio Today
              </h2>

              <p>
                Stop leaving your personal properties
                and business ventures exposed to complex,
                legacy policy architecture. Join
                thousands of users who depend on Vinsure
                for clear, data-driven insurance
                strategy.
              </p>

              <motion.div
                whileHover={{
                  x: 5,
                }}
              >
                <Link
                  href="/policies"
                  className={styles.ctaBtn}
                >
                  Begin Free Evaluation

                  <FiArrowRight />
                </Link>
              </motion.div>
            </motion.div>

            <motion.div
              className={styles.ctaImageContainer}
              variants={fadeRight}
              whileHover={{
                scale: 1.03,
                y: -8,
              }}
              transition={{
                type: "spring",
                stiffness: 260,
                damping: 20,
              }}
            >
              <Image
                src="https://images.unsplash.com/photo-1556740749-887f6717d7e4?w=1200&q=80"
                alt="Verified Financial Security Advisory Support Group"
                fill
                sizes="(max-width:1200px)100vw,40vw"
              />
            </motion.div>
          </motion.div>
        </motion.section>

      </main>
    );
}