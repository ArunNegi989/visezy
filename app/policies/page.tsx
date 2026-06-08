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

export const metadata = {
  title: "Comprehensive Insurance Policies & Protection Solutions | Visezy",
  description:
    "Explore enterprise-grade, transparent insurance policy solutions tailored for individuals, growing families, and corporate organizations.",
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

export default function PoliciesPage() {
  return (
    <main className={styles.page}>
      {/* SaaS BACKGROUND ACCENTS */}
      <div className={styles.gridOverlay}></div>
      <div className={styles.radialGlowOne}></div>
      <div className={styles.radialGlowTwo}></div>

      {/* 1. HERO SECTION */}
      <section className={styles.hero}>
        <div className={styles.content}>
          <div className={styles.badgeWrapper}>
            <span className={styles.badge}>
              <FiCpu /> NEXT-GENERATION PROTECTION
            </span>
          </div>
          <h1 className={styles.heroTitle}>
            Institutional Coverage Engineered For
            <span className={styles.gradientText}> Modern Life Ecosystems</span>
          </h1>
          <p className={styles.heroDescription}>
            Visezy bridges the gap between complicated risk mitigation parameters and practical protection structures.
            Discover clarity, transparency, and expert-led protection blueprints designed to defend your private,
            familial, and commercial financial assets in an evolving world.
          </p>
          <div className={styles.heroButtonGroup}>
            <Link href="#categories" className={styles.primaryBtn}>
              Explore Policies <FiArrowRight className={styles.btnArrow} />
            </Link>
            <Link href="#why-insurance" className={styles.secondaryBtn}>
              Why Risk Frameworks Matter
            </Link>
          </div>
        </div>

        <div className={styles.heroImageContainer}>
          <div className={styles.imageInner}>
            <Image
              src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=1600&q=80"
              alt="Insurance Strategy and Portfolio Planning"
              fill
              priority
              sizes="(max-width: 1200px) 100vw, 50vw"
            />
          </div>
        </div>
      </section>

      {/* 2. WHY INSURANCE MATTERS */}
      <section id="why-insurance" className={styles.importanceSection}>
        <div className={styles.heading}>
          <span className={styles.sectionTag}>STRATEGIC VALUE ARCHITECTURE</span>
          <h2>Protection Beyond Conventional Asset Coverage</h2>
          <p className={styles.sectionContext}>
            Modern security requires moving past reactive frameworks. True indemnity serves as an active economic
            foundation, enabling strategic innovation, long-term real estate investment, and family stability through systemic market challenges.
          </p>
        </div>

        <div className={styles.importanceGrid}>
          {importance.map((item, index) => (
            <div key={index} className={styles.importanceCard}>
              <div className={styles.importanceIcon}>{item.icon}</div>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 3. POLICY TYPES */}
      <section id="categories" className={styles.categories}>
        <div className={styles.heading}>
          <span className={styles.sectionTag}>CURATED POLICY MATRIX</span>
          <h2>Tailored Insurance Configurations for Every Milestone</h2>
          <p className={styles.sectionContext}>
            From single asset protection frameworks to enterprise-wide employee benefits portfolios, explore our highly flexible,
            vetted selection of insurance models designed to integrate seamlessly into your asset allocation strategies.
          </p>
        </div>

        <div className={styles.grid}>
          {policies.map((item, index) => (
            <div key={index} className={styles.card}>
              <div className={styles.cardGlow}></div>
              <div className={styles.iconBox}>{item.icon}</div>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* EXTRA CONTENT CORE: ANALYTICAL PRODUCT ADVANTAGES */}
      <section className={styles.insightsSection}>
        <div className={styles.insightGrid}>
          <div className={styles.insightContent}>
            <span className={styles.sectionTag}>INTELLIGENT RISK MANAGEMENT</span>
            <h2>Eliminate Arbitrary Adjustments and Hidden Premiums</h2>
            <p>
              Traditional brokers depend on information gaps to inflate structural fees. Visezy uses unbiased analysis
              and verified transparency to pass maximum programmatic value directly back to policyholders.
            </p>
            <div className={styles.insightItems}>
              {analyticInsights.map((insight, i) => (
                <div key={i} className={styles.insightRow}>
                  <div className={styles.insightBullet}><FiActivity /></div>
                  <div>
                    <h5>{insight.title}</h5>
                    <p>{insight.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className={styles.insightVisual}>
            <div className={styles.visualCard}>
              <div className={styles.cardHeader}>
                <FiFileText /> <h4>Verified Coverage Quality Report</h4>
              </div>
              <p className={styles.visualSub}>Audited Protection Assessment Metrics</p>
              <div className={styles.metricRow}>
                <span>Claim Acceptance Success Rate</span>
                <strong>99.4%</strong>
              </div>
              <div className={styles.metricRow}>
                <span>Average Allocation Review Wait-time</span>
                <strong>4.2 Mins</strong>
              </div>
              <div className={styles.metricRow}>
                <span>Provider Networks Tracked</span>
                <strong>140+ Banks</strong>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. HOW IT WORKS */}
      <section className={styles.process}>
        <div className={styles.heading}>
          <span className={styles.sectionTag}>THE MODERN ROADMAP</span>
          <h2>A Streamlined, High-Velocity Onboarding Protocol</h2>
          <p className={styles.sectionContext}>
            We have replaced outdated paper configurations and endless verification meetings with a seamless digital interface.
            Secure your complete protective configuration in minutes.
          </p>
        </div>

        <div className={styles.steps}>
          {steps.map((step, index) => (
            <div key={index} className={styles.step}>
              <div className={styles.stepHeader}>
                <span className={styles.stepNumber}>{step.num}</span>
                {index < 3 && <div className={styles.stepLine}></div>}
              </div>
              <h4>{step.title}</h4>
              <p>{step.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 5. BENEFITS */}
      <section className={styles.benefits}>
        <div className={styles.heading}>
          <span className={styles.sectionTag}>OPERATIONAL ADVANTAGE</span>
          <h2>The Core Competitive Framework Behind Visezy</h2>
          <p className={styles.sectionContext}>
            Our structural configuration is built to provide measurable, data-driven utility. Discover how our customer-first commitment
            transforms abstract risk management into an actionable financial asset.
          </p>
        </div>

        <div className={styles.benefitGrid}>
          {benefits.map((item, index) => (
            <div key={index} className={styles.benefitCard}>
              <div className={styles.benefitIcon}><FiCheckCircle /></div>
              <span className={styles.benefitText}>{item}</span>
            </div>
          ))}
        </div>
      </section>

      {/* 6. TRUST & TRANSPARENCY */}
      <section className={styles.trustSection}>
        <div className={styles.trustGrid}>
          <div className={styles.trustContent}>
            <span className={styles.sectionTag}>TRUST & OBJECTIVITY MATRIX</span>
            <h2>Empowering Customers with Independent, Verified Market Data</h2>
            <p>
              We are built on absolute fiduciary transparency. Visezy operates independent of hidden corporate incentives or legacy insurer
              payout networks. Every data model generated, premium calculated, and coverage choice recommended is derived strictly from
              unbiased metrics matching your custom risk specifications.
            </p>
            <p className={styles.trustSubtext}>
              By standardizing complex documentation and isolating hidden contractual clauses, we reveal the true value profile of every plan,
              ensuring you know exactly what you are purchasing before signing.
            </p>
            <div className={styles.trustStats}>
              <div><h3>$45M+</h3><p>Protected Assets Managed</p></div>
              <div><h3>120k+</h3><p>Active Verified Accounts</p></div>
            </div>
          </div>
          <div className={styles.trustImageContainer}>
            <div className={styles.trustImageInner}>
              <Image
                src="https://images.unsplash.com/photo-1521791136064-7986c2920216?w=1200&q=80"
                alt="Personal Insurance Consultation and Risk Architecture Assessment"
                fill
                sizes="(max-width: 1200px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 7. FAQ */}
      <section className={styles.faq}>
        <div className={styles.heading}>
          <span className={styles.sectionTag}>KNOWLEDGE BASE & ARCHITECTURE</span>
          <h2>Frequently Addressed Structural Inquiries</h2>
          <p className={styles.sectionContext}>
            Clear answers to fundamental questions about premium structural modifications, asset allocations,
            and deep security protocols.
          </p>
        </div>

        <div className={styles.faqGrid}>
          <div className={styles.faqCard}>
            <div className={styles.faqIcon}><FiAlertCircle /></div>
            <h4>How do I properly evaluate policy suitability?</h4>
            <p>
              Suitability is determined by evaluating historical asset exposure against your future liquidity requirements. Our dynamic analysis tools automatically track your unique parameters across premium limitations, coverage deductibles, and exclusionary terms to flag ideal operational packages.
            </p>
          </div>
          <div className={styles.faqCard}>
            <div className={styles.faqIcon}><FiUsers /></div>
            <h4>Can I aggregate family configurations and commercial entities under unified monitoring?</h4>
            <p>
              Yes. Our scalable portal architecture enables account managers to combine standard retail family setups, auto assets, and specialized corporate enterprise liabilities into a single, comprehensive management dashboard.
            </p>
          </div>
          <div className={styles.faqCard}>
            <div className={styles.faqIcon}><FiFileText /></div>
            <h4>What administrative steps are required during a structural claim activation?</h4>
            <p>
              Visezy features automated digital incident submission. Simply log into your dashboard, attach relevant verification files or loss metrics directly through the digital claim asset manager, and your file will be processed by our internal priority response group immediately.
            </p>
          </div>
        </div>
      </section>

      {/* 8. CTA SECTION */}
      <section className={styles.ctaSection}>
        <div className={styles.ctaCard}>
          <div className={styles.ctaContent}>
            <h2>Ready to Transform Your Insurance Risk Architecture?</h2>
            <p>
              Stop paying inflated legacy broker fees. Establish a modern, optimized digital configuration and secure comprehensive,
              transparent coverage options tailored specifically to your financial landscape.
            </p>
            <Link href="/" className={styles.ctaBtn}>
              Deploy Custom Strategy <FiArrowRight className={styles.btnArrow} />
            </Link>
          </div>
          <div className={styles.ctaImageContainer}>
            <Image
              src="https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=1200&q=80"
              alt="Secure Asset Protection Portfolio"
              fill
              sizes="(max-width: 1200px) 100vw, 40vw"
            />
          </div>
        </div>
      </section>
    </main>
  );
}