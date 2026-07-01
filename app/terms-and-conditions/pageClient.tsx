"use client";

import styles from "./terms.module.css";
import Image from "next/image";
import Link from "next/link";
import {
    FiFileText,
    FiShield,
    FiLock,
    FiCheckCircle,
    FiArrowRight,
    FiAlertCircle,
    FiGlobe,
    FiUsers,
    FiHelpCircle,
    FiAward,
    FiSlash,
    FiRefreshCw
} from "react-icons/fi";
import { motion, type Variants } from "framer-motion";

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
        x: 60,
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
        y: 45,
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

const terms = [
    {
        icon: <FiFileText />,
        title: "Acceptance Of Terms & Scope",
        description:
            "By accessing, downloading, registering, or leveraging the Visezy platform, you affirm that you have read, comprehended, and unconditionally consent to be bound by these legal Terms & Conditions, operating framework updates, and all regional global compliance mandates.",
    },
    {
        icon: <FiUsers />,
        title: "User Account Integrity & Profile Rules",
        description:
            "Registered users are strictly obligated to submit authentic, transparent, and accurate profiling credentials. You maintain exclusive accountability for preserving credential safety, avoiding unauthorized cross-sharing, and immediately signaling administrative security breaks.",
    },
    {
        icon: <FiLock />,
        title: "Privacy, Encryption & Data Assets",
        description:
            "Our firm enforces industry-grade transport layers, distributed architectures, and rigorous corporate access boundaries to secure data structures. Usage data metrics, analytical logging, and private credentials are safe-kept according to our core Privacy Policy guidelines.",
    },
    {
        icon: <FiShield />,
        title: "Intellectual Property & Licensing Rights",
        description:
            "All proprietary source trees, interface layouts, vector art, visual palettes, localized scripts, and brand guidelines deployed across Visezy are protected via domestic and global intellectual trademark assets. No unauthorized replication or engineering mirrors are permitted.",
    },
    {
        icon: <FiGlobe />,
        title: "Third-Party Aggregators & Middleware",
        description:
            "To optimize operations, our architecture integrates with third-party software nodes, cloud networks, and transaction clearings. Visezy disclaims structural controls or performance updates handled directly through these outsourced vendors and pipeline frameworks.",
    },
    {
        icon: <FiAlertCircle />,
        title: "Definitive Limitation Of Liability",
        description:
            "Visezy, alongside its executive offices, directors, engineers, and brand affiliates, explicitly rejects liability for operational downtime, financial shortfalls, system data corruptions, or indirect punitive losses resulting from your deployment of the system ecosystem.",
    },
];

const responsibilities = [
    "Provide accurate, fully verified, and legitimate identification metrics across platform instances.",
    "Use the active application ecosystem safely and in total accordance with legal and compliance mandates.",
    "Preserve strict workspace credential safety, avoiding multi-user leaking or shared profiles.",
    "Refrain from utilizing automatic collection spiders, scrapers, API exploits, or network penetration scripts.",
    "Verify data payloads, structural metrics, and calculations prior to executing official corporate choices.",
    "Respect and uphold all legal copyright protocols, interface trademarks, and intellectual proprietary rights.",
    "Prohibit any structural reverse-engineering, decompilation attempts, or core codebase analysis.",
    "Promptly disclose software bugs, security exploits, or data breaches to our engineering team.",
];

export default function TermsPageClient() {
    return (
        <main className={styles.page}>
            <div className={styles.gridOverlay}></div>
            <div className={styles.radialGlowOne}></div>
            <div className={styles.radialGlowTwo}></div>

            {/* HERO SECTION */}
            <motion.section
                className={styles.hero}
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: .2 }}
            >

                <motion.div
                    className={styles.content}
                    variants={fadeLeft}
                >
                    <motion.div
                        className={styles.badgeWrapper}
                        variants={fadeUp}
                    >
                        <motion.span
                            className={styles.badge}
                            whileHover={{
                                scale: 1.05,
                            }}
                        >
                            LEGAL FRAMEWORK & COMPLIANCE
                        </motion.span>
                    </motion.div>

                    <motion.h1
                        className={styles.heroTitle}
                        variants={fadeUp}
                    >
                        Platform Terms &
                        <span className={styles.gradientText}>
                            {" "}Governing Conditions
                        </span>
                    </motion.h1>

                    <motion.p
                        className={styles.heroDescription}
                        variants={fadeUp}
                    >
                        Welcome to Visezy. These comprehensive Terms &
                        Conditions define the operational parameters,
                        legal protections, system responsibilities,
                        and mutual requirements governing our entire
                        application ecosystem.
                    </motion.p>

                    <motion.div
                        variants={fadeUp}
                        whileHover={{
                            y: -3,
                        }}
                    >
                        <Link
                            href="#terms"
                            className={styles.primaryBtn}
                        >
                            Read Terms Document

                            <motion.span
                                animate={{
                                    x: [0, 5, 0],
                                }}
                                transition={{
                                    duration: 1.4,
                                    repeat: Infinity,
                                }}
                            >
                                <FiArrowRight className={styles.btnArrow} />
                            </motion.span>

                        </Link>
                    </motion.div>

                </motion.div>

                <motion.div
                    className={styles.heroImageContainer}
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
                    <div className={styles.imageInner}>
                        <Image
                            src="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=1600&q=80"
                            alt="Legal Compliance"
                            fill
                            priority
                        />
                    </div>
                </motion.div>

            </motion.section>
            <motion.section
                id="terms"
                className={styles.categories}
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: .2 }}
            >

                <motion.div
                    className={styles.heading}
                    variants={fadeUp}
                >
                    <motion.span
                        className={styles.sectionTag}
                        whileHover={{
                            letterSpacing: ".12em",
                        }}
                    >
                        CORE CLAUSES
                    </motion.span>

                    <motion.h2 variants={fadeUp}>
                        Important Legal Architecture
                    </motion.h2>

                    <motion.p variants={fadeUp}>
                        Please evaluate the functional foundations
                        of our terms. Understanding these blocks
                        guarantees a protected, productive,
                        and reliable experience.
                    </motion.p>
                </motion.div>

                <motion.div
                    className={styles.grid}
                    variants={containerVariants}
                >

                    {terms.map((item, index) => (

                        <motion.div
                            key={index}
                            className={styles.card}
                            variants={fadeUp}
                            whileHover={{
                                y: -10,
                                scale: 1.03,
                                rotateX: 5,
                                rotateY: index % 2 === 0 ? -4 : 4,
                            }}
                            transition={{
                                type: "spring",
                                stiffness: 280,
                                damping: 18,
                            }}
                        >

                            <div className={styles.cardGlow}></div>

                            <motion.div
                                className={styles.iconBox}
                                whileHover={{
                                    rotate: 15,
                                    scale: 1.15,
                                }}
                            >
                                {item.icon}
                            </motion.div>

                            <h3>{item.title}</h3>

                            <p>{item.description}</p>

                        </motion.div>

                    ))}

                </motion.div>

            </motion.section>

         <motion.section
  className={styles.process}
  variants={containerVariants}
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true, amount: 0.2 }}
>
  <motion.div
    className={styles.heading}
    variants={fadeUp}
  >
    <motion.span
      className={styles.sectionTag}
      whileHover={{ letterSpacing: ".12em" }}
    >
      APPLICATION MATRIX
    </motion.span>

    <motion.h2 variants={fadeUp}>
      Enforcement & Operational Scope
    </motion.h2>
  </motion.div>

  <motion.div
    className={styles.steps}
    variants={containerVariants}
  >
    {[
      {
        number: "01",
        title: "Secure Authentication",
        description:
          "Users successfully unlock application features upon confirming credentials and registering identity pools securely.",
      },
      {
        number: "02",
        title: "Payload Verification",
        description:
          "All customer documentation, dynamic records, and configurations must be checked for absolute real-world correctness.",
      },
      {
        number: "03",
        title: "Policy Synchronization",
        description:
          "Workspaces stay aligned with modern localized laws, systemic restrictions, and global commercial mandates.",
      },
      {
        number: "04",
        title: "Continuous Defense",
        description:
          "Automated auditing layers continuously check for suspicious actions, anomalous logins, and intellectual property leaks.",
      },
    ].map((step, index) => (
      <motion.div
        key={index}
        className={styles.step}
        variants={fadeUp}
        whileHover={{
          y: -10,
          scale: 1.03,
          rotateX: 5,
          rotateY: index % 2 === 0 ? -4 : 4,
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
        <div className={styles.stepHeader}>
          <motion.span
            className={styles.stepNumber}
            whileHover={{
              rotate: 15,
              scale: 1.15,
            }}
          >
            {step.number}
          </motion.span>

          {index !== 3 && (
            <div className={styles.stepLine}></div>
          )}
        </div>

        <h4>{step.title}</h4>

        <p>{step.description}</p>
      </motion.div>
    ))}
  </motion.div>
</motion.section>
<motion.section
  className={styles.benefits}
  variants={containerVariants}
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true, amount: 0.2 }}
>
  <motion.div
    className={styles.heading}
    variants={fadeUp}
  >
    <motion.span
      className={styles.sectionTag}
      whileHover={{ letterSpacing: ".12em" }}
    >
      USER CONDUCT OBLIGATIONS
    </motion.span>

    <motion.h2 variants={fadeUp}>
      System Terms & Operating Etiquette
    </motion.h2>

    <motion.p variants={fadeUp}>
      To sustain network stability, server speed,
      and uniform system data integrity, every user
      agrees to respect the following runtime parameters.
    </motion.p>
  </motion.div>

  <motion.div
    className={styles.benefitGrid}
    variants={containerVariants}
  >
    {responsibilities.map((item, index) => (
      <motion.div
        key={index}
        className={styles.benefit}
        variants={fadeUp}
        whileHover={{
          y: -8,
          scale: 1.03,
          rotateX: 4,
          rotateY: index % 2 === 0 ? -3 : 3,
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
          className={styles.benefitIcon}
          whileHover={{
            rotate: 18,
            scale: 1.18,
          }}
        >
          <FiCheckCircle />
        </motion.div>

        <span className={styles.benefitText}>
          {item}
        </span>
      </motion.div>
    ))}
  </motion.div>
</motion.section>

            <motion.section
  className={styles.benefits}
  variants={containerVariants}
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true, amount: 0.2 }}
>
  <motion.div
    className={styles.heading}
    variants={fadeUp}
  >
    <motion.span
      className={styles.sectionTag}
      whileHover={{ letterSpacing: ".12em" }}
    >
      USER CONDUCT OBLIGATIONS
    </motion.span>

    <motion.h2 variants={fadeUp}>
      System Terms & Operating Etiquette
    </motion.h2>

    <motion.p variants={fadeUp}>
      To sustain network stability, server speed,
      and uniform system data integrity, every user
      agrees to respect the following runtime parameters.
    </motion.p>
  </motion.div>

  <motion.div
    className={styles.benefitGrid}
    variants={containerVariants}
  >
    {responsibilities.map((item, index) => (
      <motion.div
        key={index}
        className={styles.benefit}
        variants={fadeUp}
        whileHover={{
          y: -8,
          scale: 1.03,
          rotateX: 4,
          rotateY: index % 2 === 0 ? -3 : 3,
        }}
        transition={{
          type: "spring",
          stiffness: 280,
          damping: 18,
        }}
      >
        <motion.div
          className={styles.benefitIcon}
          whileHover={{
            rotate: 18,
            scale: 1.18,
          }}
        >
          <FiCheckCircle />
        </motion.div>

        <span className={styles.benefitText}>
          {item}
        </span>
      </motion.div>
    ))}
  </motion.div>
</motion.section>

          <motion.section
  className={styles.legalDeepDive}
  variants={containerVariants}
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true, amount: .2 }}
>
  <motion.div
    className={styles.heading}
    variants={fadeUp}
  >
    <motion.span
      className={styles.sectionTag}
      whileHover={{ letterSpacing: ".12em" }}
    >
      PROHIBITED ACTIVITIES
    </motion.span>

    <motion.h2 variants={fadeUp}>
      Strict System Restrictions
    </motion.h2>
  </motion.div>

  <motion.div
    className={styles.clauseGrid}
    variants={containerVariants}
  >
    {[
      {
        icon: <FiSlash />,
        title: "Platform Abuse",
        text: "Any structural extraction of internal system metrics, database indexing scripts, injection attacks, or brute-force tracking attempts will trigger instant system termination.",
      },
      {
        icon: <FiAward />,
        title: "Governing Arbitration",
        text: "These terms and all enterprise contracts are governed by applicable state and international trade regulations.",
      },
      {
        icon: <FiRefreshCw />,
        title: "Dynamic Revisions",
        text: "Visezy may revise these clauses. Continued platform usage indicates acceptance of updated terms.",
      },
    ].map((item, index) => (
      <motion.div
        key={index}
        className={styles.clauseItem}
        variants={fadeUp}
        whileHover={{
          y: -10,
          scale: 1.03,
          rotateX: 5,
          rotateY: index % 2 === 0 ? -4 : 4,
        }}
        transition={{
          type: "spring",
          stiffness: 280,
          damping: 18,
        }}
      >
        <motion.div
          className={styles.clauseIconBox}
          whileHover={{
            rotate: 18,
            scale: 1.15,
          }}
        >
          {item.icon}
        </motion.div>

        <h3>{item.title}</h3>

        <p>{item.text}</p>
      </motion.div>
    ))}
  </motion.div>
</motion.section>
<motion.section
  className={styles.faq}
  variants={containerVariants}
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true, amount: .2 }}
>
  <motion.div
    className={styles.heading}
    variants={fadeUp}
  >
    <span className={styles.sectionTag}>
      KNOWLEDGE EXPLORER
    </span>

    <h2>Terms Frequently Asked Questions</h2>
  </motion.div>

  <motion.div
    className={styles.faqGrid}
    variants={containerVariants}
  >
    {[
      {
        title: "Why must I understand these Terms and Conditions?",
        text: "Reviewing our formal guidelines outlines your legal rights, workspace safety boundaries, ownership conditions and available remedies.",
      },
      {
        title: "How often are these documents updated?",
        text: "Documentation is reviewed periodically or whenever applicable regulations require changes.",
      },
      {
        title: "What happens if a user violates a policy?",
        text: "Violations may result in warnings, feature restrictions or permanent account suspension depending on severity.",
      },
    ].map((faq, index) => (
      <motion.div
        key={index}
        className={styles.faqCard}
        variants={fadeUp}
        whileHover={{
          y: -8,
          scale: 1.03,
        }}
      >
        <motion.div
          className={styles.faqTitleBox}
          whileHover={{
            x: 5,
          }}
        >
          <motion.div
            whileHover={{
              rotate: 20,
              scale: 1.15,
            }}
          >
            <FiHelpCircle className={styles.faqQuestionIcon} />
          </motion.div>

          <h4>{faq.title}</h4>
        </motion.div>

        <p>{faq.text}</p>
      </motion.div>
    ))}
  </motion.div>
</motion.section>

<motion.section
  className={styles.ctaSection}
  variants={containerVariants}
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true, amount: .2 }}
>
  <motion.div
    className={styles.ctaCard}
    variants={fadeUp}
  >
    <motion.div
      className={styles.ctaContent}
      variants={fadeLeft}
    >
      <h2>Questions About Our Terms?</h2>

      <p>
        Contact our team for clarification regarding
        platform usage, policies or legal information.
      </p>

      <motion.div
        whileHover={{ x: 5 }}
      >
        <Link
          href="/contact-us"
          className={styles.ctaBtn}
        >
          Contact Us

          <motion.span
            animate={{
              x: [0, 5, 0],
            }}
            transition={{
              duration: 1.4,
              repeat: Infinity,
            }}
          >
            <FiArrowRight className={styles.btnArrow}/>
          </motion.span>
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
        src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=1200&q=80"
        alt="Customer Support Team"
        fill
        sizes="(max-width:1200px)100vw,40vw"
      />
    </motion.div>
  </motion.div>
</motion.section>
</main>
    );
}