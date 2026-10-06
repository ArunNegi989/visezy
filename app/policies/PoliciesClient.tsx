"use client";

import styles from "./policies.module.css";
import Image from "next/image";
import Link from "next/link";
import {
    FiShield,
    FiHeart,
    FiHome,
    FiTruck,
    FiGlobe,
    FiBriefcase,
    FiCheckCircle,
    FiArrowRight,
    FiTrendingUp,
    FiClock,
    FiCpu,
    FiActivity,
    FiUsers,
    FiFileText,
    FiAlertCircle,
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
            ease: [0.22, 1, 0.36, 1],
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
            ease: [0.22, 1, 0.36, 1],
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
            ease: [0.22, 1, 0.36, 1],
        },
    },
};



const importance = [
    {
        icon: <FiTrendingUp />,
        title: "Uncompromising Financial Security",
        description:
            "Mitigate unpredictable liabilities and economic disruptions. Our selected policy frameworks insulate your liquid capital, property holdings, and hard-earned assets from catastrophic financial exposure during sudden emergencies.",
    },
    {
        icon: <FiHeart />,
        title: "Absolute Peace Of Mind",
        description:
            "True security means eliminating existential stress. By establishing institutional-grade safeguards around your personal and professional interests, you liberate cognitive bandwidth to scale your business and cherish family life.",
    },
    {
        icon: <FiClock />,
        title: "Generational Future Planning",
        description:
            "Build a structural legacy that survives shifting market dynamics. Strategic coverage guarantees your family’s long-term lifestyle, funds vital milestones like higher education, and anchors wealth preservation plans.",
    },
];

const policies = [
    {
        icon: <FiTruck />,
        title: "Comprehensive Motor Insurance",
        description:
            "All-inclusive damage mitigation protocols covering collision liabilities, structural vehicular restoration, third-party asset protection, and specialized comprehensive coverage options engineered to defend your mobile investments.",
    },
    {
        icon: <FiHeart />,
        title: "Premium Health & Wellness Solutions",
        description:
            "Advanced medical networks offering comprehensive inpatient care, critical illness financial protection, preventative clinical screenings, and instant cashless access to world-class medical facilities and healthcare specialists.",
    },
    {
        icon: <FiShield />,
        title: "Term & Legacy Life Insurance",
        description:
            "Bulletproof wealth replacement and financial continuity mechanisms designed to guarantee your dependents sustain their standard of living, settle institutional debt, and thrive across future generations.",
    },
    {
        icon: <FiHome />,
        title: "High-Value Home & Property Protection",
        description:
            "Deep structural safeguards safeguarding your physical real estate holdings, internal interior investments, and premium personal property configurations against environmental forces, theft, and accidental losses.",
    },
    {
        icon: <FiGlobe />,
        title: "Global Travel & Enterprise Transit",
        description:
            "International corporate and leisure assurance policies that neutralize baggage losses, flight structural interruptions, urgent overseas medical evaluations, and geo-specific disruption liabilities seamlessly.",
    },
    {
        icon: <FiBriefcase />,
        title: "Commercial & Business Risk Indemnity",
        description:
            "Tailored corporate defense risk architecture providing robust general liability protection, professional errors and omissions coverage, worker safety indemnities, and commercial business interruption defenses.",
    },
];

const analyticInsights = [
    {
        title: "Adaptive Risk Assessment",
        text: "Modern risk dynamics require customized calculations. We break down historical risk patterns to optimize your premiums against market realities.",
    },
    {
        title: "Regulatory Compliance Checks",
        text: "Our product portfolio strictly adheres to evolving national and international regulatory guidelines, keeping you safe from compliance failure.",
    },
    {
        title: "Instant Digital Portability",
        text: "Transition seamlessly from your historic providers without forfeiting accrued performance rewards, loyalty distributions, or ongoing coverage tracks.",
    },
];

const benefits = [
    "Transparent, multi-variant policy comparison matrices",
    "Dedicated individual claims and risk mitigation advocacy",
    "Institutional partnerships with top-tier global insurers",
    "Expedited digital-first document verification procedures",
    "Hyper-flexible, customizable deductible adjustment options",
    "Centralized cloud-native dynamic policy asset storage",
    "End-to-end transparent regulatory compliance verification",
    "Proactive customer support networks available around the clock",
];

const steps = [
    {
        num: "01",
        title: "Define Risk Profile & Metrics",
        text: "Input your personal, familial, or enterprise baseline specifications into our system to compile customized protection goals.",
    },
    {
        num: "02",
        title: "Generate Real-Time Comparison Models",
        text: "Our data matching architecture reviews hundreds of vetted policies to present clear comparative benefits, coverage inclusions, and premium values side by side.",
    },
    {
        num: "03",
        title: "Select & Secure Optimized Coverage",
        text: "Finalize your curated protection asset, execute clear validation parameters, and initiate formal setup via encrypted security pathways.",
    },
    {
        num: "04",
        title: "Activate Lifelong Advisory Support",
        text: "Gain immediate access to dedicated case managers, real-time claim monitoring, and routine policy audits to continuously track your changing life milestones.",
    },
];

export default function PoliciesClientPage() {
    return (
        <main className={styles.page}>
            {/* SaaS BACKGROUND ACCENTS */}
            <div className={styles.gridOverlay}></div>
            <div className={styles.radialGlowOne}></div>
            <div className={styles.radialGlowTwo}></div>

            {/* 1. HERO SECTION */}
            <motion.section
                className={styles.hero}
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
            >
                {/* LEFT */}

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
                            <motion.span
                                animate={{
                                    rotate: [0, 12, -12, 0],
                                }}
                                transition={{
                                    duration: 2.5,
                                    repeat: Infinity,
                                    repeatDelay: 2,
                                }}
                            >
                                <FiCpu />
                            </motion.span>

                            NEXT-GENERATION PROTECTION
                        </motion.span>
                    </motion.div>

                    <motion.h1
                        className={styles.heroTitle}
                        variants={fadeUp}
                    >
                        Institutional Coverage Engineered For
                        <span className={styles.gradientText}>
                            {" "}
                            Modern Life Ecosystems
                        </span>
                    </motion.h1>

                    <motion.p
                        className={styles.heroDescription}
                        variants={fadeUp}
                    >
                        Vinsure bridges the gap between complicated risk
                        mitigation parameters and practical protection
                        structures. Discover clarity, transparency,
                        and expert-led protection blueprints designed
                        to defend your private, familial, and
                        commercial financial assets in an evolving
                        world.
                    </motion.p>

                    <motion.div
                        className={styles.heroButtonGroup}
                        variants={fadeUp}
                    >
                        <motion.div
                            whileHover={{
                                y: -3,
                                scale: 1.03,
                            }}
                            whileTap={{
                                scale: .97,
                            }}
                        >
                            <Link
                                href="#categories"
                                className={styles.primaryBtn}
                            >
                                Explore Policies

                                <motion.span
                                    animate={{
                                        x: [0, 4, 0],
                                    }}
                                    transition={{
                                        duration: 1.5,
                                        repeat: Infinity,
                                    }}
                                >
                                    <FiArrowRight className={styles.btnArrow} />
                                </motion.span>
                            </Link>
                        </motion.div>

                        <motion.div
                            whileHover={{
                                y: -3,
                                scale: 1.03,
                            }}
                            whileTap={{
                                scale: .97,
                            }}
                        >
                            <Link
                                href="#why-insurance"
                                className={styles.secondaryBtn}
                            >
                                Why Risk Frameworks Matter
                            </Link>
                        </motion.div>
                    </motion.div>
                </motion.div>

                {/* RIGHT */}

                <motion.div
                    className={styles.heroImageContainer}
                    variants={fadeRight}
                    whileHover={{
                        scale: 1.02,
                        y: -8,
                    }}
                    transition={{
                        type: "spring",
                        stiffness: 260,
                        damping: 20,
                    }}
                >
                    <motion.div
                        className={styles.imageInner}
                        whileHover={{
                            scale: 1.05,
                        }}
                        transition={{
                            duration: .8,
                        }}
                    >
                        <Image
                            src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=1600&q=80"
                            alt="Insurance Strategy and Portfolio Planning"
                            fill
                            priority
                            sizes="(max-width:1200px)100vw,50vw"
                        />
                    </motion.div>
                </motion.div>
            </motion.section>

            {/* 2. WHY INSURANCE MATTERS */}
            {/* ============================
    WHY INSURANCE MATTERS
============================ */}

            <motion.section
                id="why-insurance"
                className={styles.importanceSection}
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
            >
                {/* Heading */}

                <motion.div
                    className={styles.heading}
                    variants={fadeUp}
                >
                    <motion.span
                        className={styles.sectionTag}
                        whileHover={{
                            letterSpacing: "0.12em",
                        }}
                    >
                        STRATEGIC VALUE ARCHITECTURE
                    </motion.span>

                    <motion.h2 variants={fadeUp}>
                        Protection Beyond Conventional Asset Coverage
                    </motion.h2>

                    <motion.p
                        className={styles.sectionContext}
                        variants={fadeUp}
                    >
                        Modern security requires moving past reactive
                        frameworks. True indemnity serves as an active
                        economic foundation, enabling strategic
                        innovation, long-term real estate investment,
                        and family stability through systemic market
                        challenges.
                    </motion.p>
                </motion.div>

                {/* Cards */}

                <motion.div
                    className={styles.importanceGrid}
                    variants={containerVariants}
                >
                    {importance.map((item, index) => (
                        <motion.div
                            key={index}
                            className={styles.importanceCard}
                            variants={fadeUp}
                            whileHover={{
                                y: -12,
                                scale: 1.03,
                                rotateX: 5,
                                rotateY: index % 2 === 0 ? -5 : 5,
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
                                className={styles.importanceIcon}
                                whileHover={{
                                    rotate: 15,
                                    scale: 1.15,
                                }}
                                transition={{
                                    type: "spring",
                                    stiffness: 320,
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

            {/* 3. POLICY TYPES */}
            <motion.section
                id="categories"
                className={styles.categories}
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
                        whileHover={{
                            letterSpacing: "0.12em",
                        }}
                    >
                        CURATED POLICY MATRIX
                    </motion.span>

                    <motion.h2 variants={fadeUp}>
                        Tailored Insurance Configurations for Every Milestone
                    </motion.h2>

                    <motion.p
                        className={styles.sectionContext}
                        variants={fadeUp}
                    >
                        From single asset protection frameworks to enterprise-wide employee
                        benefits portfolios, explore our highly flexible, vetted selection
                        of insurance models designed to integrate seamlessly into your asset
                        allocation strategies.
                    </motion.p>
                </motion.div>

                <motion.div
                    className={styles.grid}
                    variants={containerVariants}
                >
                    {policies.map((item, index) => (
                        <motion.div
                            key={index}
                            className={styles.card}
                            variants={fadeUp}
                            whileHover={{
                                y: -12,
                                scale: 1.03,
                                rotateX: 5,
                                rotateY: index % 2 === 0 ? -5 : 5,
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
                            <div className={styles.cardGlow}></div>

                            <motion.div
                                className={styles.iconBox}
                                whileHover={{
                                    rotate: 12,
                                    scale: 1.15,
                                }}
                                transition={{
                                    type: "spring",
                                    stiffness: 320,
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

            {/* EXTRA CONTENT CORE: ANALYTICAL PRODUCT ADVANTAGES */}
            <motion.section
                className={styles.insightsSection}
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
            >
                <div className={styles.insightGrid}>

                    {/* LEFT */}

                    <motion.div
                        className={styles.insightContent}
                        variants={fadeLeft}
                    >
                        <span className={styles.sectionTag}>
                            INTELLIGENT RISK MANAGEMENT
                        </span>

                        <h2>
                            Eliminate Arbitrary Adjustments and Hidden Premiums
                        </h2>

                        <p>
                            Traditional brokers depend on information gaps to inflate
                            structural fees. Vinsure uses unbiased analysis and verified
                            transparency to pass maximum programmatic value directly back
                            to policyholders.
                        </p>

                        <motion.div
                            className={styles.insightItems}
                            variants={containerVariants}
                        >
                            {analyticInsights.map((insight, i) => (
                                <motion.div
                                    key={i}
                                    className={styles.insightRow}
                                    variants={fadeUp}
                                    whileHover={{
                                        x: 10,
                                    }}
                                    transition={{
                                        type: "spring",
                                        stiffness: 300,
                                    }}
                                >
                                    <motion.div
                                        className={styles.insightBullet}
                                        whileHover={{
                                            rotate: 20,
                                            scale: 1.15,
                                        }}
                                    >
                                        <FiActivity />
                                    </motion.div>

                                    <div>
                                        <h5>{insight.title}</h5>
                                        <p>{insight.text}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </motion.div>
                    </motion.div>

                    {/* RIGHT */}

                    <motion.div
                        className={styles.insightVisual}
                        variants={fadeRight}
                        whileHover={{
                            y: -10,
                            scale: 1.02,
                        }}
                        transition={{
                            type: "spring",
                            stiffness: 260,
                            damping: 20,
                        }}
                    >
                        <div className={styles.visualCard}>
                            <div className={styles.cardHeader}>
                                <FiFileText />

                                <h4>
                                    Verified Coverage Quality Report
                                </h4>
                            </div>

                            <p className={styles.visualSub}>
                                Audited Protection Assessment Metrics
                            </p>

                            {[
                                ["Claim Acceptance Success Rate", "99.4%"],
                                ["Average Allocation Review Wait-time", "4.2 Mins"],
                                ["Provider Networks Tracked", "140+ Banks"],
                            ].map(([title, value], index) => (
                                <motion.div
                                    key={index}
                                    className={styles.metricRow}
                                    variants={fadeUp}
                                    whileHover={{
                                        x: 6,
                                    }}
                                >
                                    <span>{title}</span>

                                    <strong>{value}</strong>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>

                </div>
            </motion.section>

            {/* 4. HOW IT WORKS */}
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
                        whileHover={{
                            letterSpacing: "0.12em",
                        }}
                    >
                        THE MODERN ROADMAP
                    </motion.span>

                    <motion.h2 variants={fadeUp}>
                        A Streamlined, High-Velocity Onboarding Protocol
                    </motion.h2>

                    <motion.p
                        className={styles.sectionContext}
                        variants={fadeUp}
                    >
                        We have replaced outdated paper configurations and endless
                        verification meetings with a seamless digital interface.
                        Secure your complete protective configuration in minutes.
                    </motion.p>
                </motion.div>

                <motion.div
                    className={styles.steps}
                    variants={containerVariants}
                >
                    {steps.map((step, index) => (
                        <motion.div
                            key={index}
                            className={styles.step}
                            variants={fadeUp}
                            whileHover={{
                                y: -12,
                                scale: 1.03,
                                rotateX: 4,
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
                                        scale: 1.15,
                                        rotate: 10,
                                    }}
                                    transition={{
                                        type: "spring",
                                        stiffness: 320,
                                    }}
                                >
                                    {step.num}
                                </motion.span>

                                {index < steps.length - 1 && (
                                    <div className={styles.stepLine}></div>
                                )}

                            </div>

                            <h4>{step.title}</h4>

                            <p>{step.text}</p>

                        </motion.div>
                    ))}
                </motion.div>
            </motion.section>

            {/* 5. BENEFITS */}
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
                        whileHover={{
                            letterSpacing: "0.12em",
                        }}
                    >
                        OPERATIONAL ADVANTAGE
                    </motion.span>

                    <motion.h2 variants={fadeUp}>
                        The Core Competitive Framework Behind Vinsure
                    </motion.h2>

                    <motion.p
                        className={styles.sectionContext}
                        variants={fadeUp}
                    >
                        Our structural configuration is built to provide measurable,
                        data-driven utility. Discover how our customer-first
                        commitment transforms abstract risk management into an
                        actionable financial asset.
                    </motion.p>
                </motion.div>

                <motion.div
                    className={styles.benefitGrid}
                    variants={containerVariants}
                >
                    {benefits.map((item, index) => (
                        <motion.div
                            key={index}
                            className={styles.benefitCard}
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
                                    scale: 1.2,
                                }}
                                transition={{
                                    type: "spring",
                                    stiffness: 320,
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
                className={styles.trustSection}
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
            >
                <div className={styles.trustGrid}>

                    {/* LEFT */}

                    <motion.div
                        className={styles.trustContent}
                        variants={fadeLeft}
                    >
                        <span className={styles.sectionTag}>
                            TRUST & OBJECTIVITY MATRIX
                        </span>

                        <h2>
                            Empowering Customers with Independent,
                            Verified Market Data
                        </h2>

                        <p>
                            We are built on absolute fiduciary transparency.
                            Vinsure operates independent of hidden corporate
                            incentives or legacy insurer payout networks.
                            Every data model generated, premium calculated,
                            and coverage choice recommended is derived
                            strictly from unbiased metrics matching your
                            custom risk specifications.
                        </p>

                        <p className={styles.trustSubtext}>
                            By standardizing complex documentation and
                            isolating hidden contractual clauses, we reveal
                            the true value profile of every plan,
                            ensuring you know exactly what you are
                            purchasing before signing.
                        </p>

                        <motion.div
                            className={styles.trustStats}
                            variants={containerVariants}
                        >
                            {[
                                ["$45M+", "Protected Assets Managed"],
                                ["120k+", "Active Verified Accounts"],
                            ].map(([value, label], index) => (
                                <motion.div
                                    key={index}
                                    variants={fadeUp}
                                    whileHover={{
                                        y: -8,
                                        scale: 1.05,
                                    }}
                                >
                                    <h3>{value}</h3>
                                    <p>{label}</p>
                                </motion.div>
                            ))}
                        </motion.div>
                    </motion.div>

                    {/* RIGHT */}

                    <motion.div
                        className={styles.trustImageContainer}
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
                        <div className={styles.trustImageInner}>
                            <Image
                                src="https://images.unsplash.com/photo-1521791136064-7986c2920216?w=1200&q=80"
                                alt="Personal Insurance Consultation"
                                fill
                                sizes="(max-width:1200px)100vw,50vw"
                            />
                        </div>
                    </motion.div>

                </div>
            </motion.section>

            <motion.section
                className={styles.faq}
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
            >
                <motion.div
                    className={styles.heading}
                    variants={fadeUp}
                >
                    <span className={styles.sectionTag}>
                        KNOWLEDGE BASE & ARCHITECTURE
                    </span>

                    <h2>
                        Frequently Addressed Structural Inquiries
                    </h2>

                    <p className={styles.sectionContext}>
                        Clear answers to fundamental questions
                        about premium structural modifications,
                        asset allocations and security protocols.
                    </p>
                </motion.div>

                <motion.div
                    className={styles.faqGrid}
                    variants={containerVariants}
                >
                    {[
                        {
                            icon: <FiAlertCircle />,
                            title: "How do I properly evaluate policy suitability?",
                            text: "Suitability is determined by evaluating historical asset exposure against your future liquidity requirements. Our dynamic analysis tools automatically track your unique parameters across premium limitations, coverage deductibles and exclusionary terms.",
                        },
                        {
                            icon: <FiUsers />,
                            title: "Can I aggregate family configurations?",
                            text: "Yes. Our scalable portal architecture enables account managers to combine retail family setups, auto assets and commercial liabilities into one dashboard.",
                        },
                        {
                            icon: <FiFileText />,
                            title: "How are claims processed?",
                            text: "Claims are submitted digitally through the Vinsure portal and instantly routed to our dedicated response specialists.",
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
                                className={styles.faqIcon}
                                whileHover={{
                                    rotate: 18,
                                    scale: 1.15,
                                }}
                            >
                                {faq.icon}
                            </motion.div>

                            <h4>{faq.title}</h4>

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
                        <h2>
                            Ready to Transform Your Insurance
                            Risk Architecture?
                        </h2>

                        <p>
                            Stop paying inflated broker fees.
                            Secure transparent coverage options
                            tailored specifically to your
                            financial landscape.
                        </p>

                        <motion.div
                            whileHover={{
                                x: 5,
                            }}
                        >
                            <Link
                                href="/"
                                className={styles.ctaBtn}
                            >
                                Deploy Custom Strategy

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
                        className={styles.ctaImageContainer}
                        variants={fadeRight}
                        whileHover={{
                            scale: 1.03,
                        }}
                    >
                        <Image
                            src="https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=1200&q=80"
                            alt="Secure Asset Protection"
                            fill
                            sizes="(max-width:1200px)100vw,40vw"
                        />
                    </motion.div>

                </motion.div>
            </motion.section>
        </main>
    );
}