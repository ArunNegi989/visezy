import styles from "./life-insurance.module.css";
import Image from "next/image";
import Link from "next/link";
import {
  FiArrowRight,
  FiShield,
  FiUsers,
  FiAward,
  FiCheckCircle,
  FiTrendingUp,
  FiHeart,
  FiTarget,
  FiBriefcase,
  FiHome,
  FiClock,
  FiActivity,
  FiFileText,
  FiPercent,
  FiDollarSign,
} from "react-icons/fi";

export const metadata = {
  title: "Life Insurance | Visezy",
  description:
    "Explore elite life insurance solutions engineered to protect your family's future, secure long-term financial milestones, and provide absolute peace of mind.",
};

const plans = [
  {
    icon: <FiShield />,
    title: "Pure Term Assurance",
    description:
      "High-caliber, affordable life protection offering maximum financial leverage. Engineered exclusively to provide substantial capital security for your dependents, replacing income streams seamlessly in your absence.",
  },
  {
    icon: <FiTrendingUp />,
    title: "Whole Life Elite",
    description:
      "Permanent, lifelong coverage integrated with guaranteed cash value accumulation. A powerful hybrid asset class designed for estate planning, generation wealth transfer, and lifetime protection.",
  },
  {
    icon: <FiHeart />,
    title: "Guaranteed Child Capital",
    description:
      "Strategic investment vehicles tailored to fund prestigious higher education milestones and early-career capital demands, ensuring your child's ambitions are fully realized regardless of market volatility.",
  },
  {
    icon: <FiTarget />,
    title: "Legacy Retirement Solutions",
    description:
      "Sophisticated asset preservation and high-yielding annuity plans that build an ironclad financial ecosystem, ensuring your post-career lifestyle remains uncompromised and fully independent.",
  },
];

const features = [
  {
    icon: <FiActivity />,
    title: "Accelerated Critical Illness Protection",
    description: "Immediate lump-sum liquidity payouts triggered upon diagnosis of major critical illnesses, guarding your core capital from healthcare drainage."
  },
  {
    icon: <FiPercent />,
    title: "Tax Optimization Frameworks",
    description: "Maximize your fiscal efficiency with plans structurally aligned to yield major premium deductions and entirely tax-free maturity disbursements."
  },
  {
    icon: <FiDollarSign />,
    title: "Flexible Premium Architecture",
    description: "Calibrate your payment schedules dynamically with single, limited, or regular funding timelines designed to map tightly against your cash flow."
  }
];

const benefits = [
  "Comprehensive immediate income replacement frameworks",
  "Tax-exempt wealth accumulation under current regulatory codes",
  "Irrevocable liquidity generation for debt and mortgage clearance",
  "Inflation-adjusted milestones scaling options over multi-decade cycles",
  "Absolute estate protection guarantees securing seamless inheritance",
  "Immediate liquidity access via flexible policy loan provisions",
];

const whoNeedsInsurance = [
  {
    icon: <FiUsers />,
    title: "Modern Parents",
    description:
      "Maintain your family's lifestyle, fund upcoming premium educations, and construct a permanent financial safety net for growing dependents.",
  },
  {
    icon: <FiBriefcase />,
    title: "Corporate Executives & Professionals",
    description:
      "Offset high-value financial commitments, replace specialized executive income brackets, and build robust dual-purpose investment reserves.",
  },
  {
    icon: <FiHome />,
    title: "Asset & Home Owners",
    description:
      "Insulate your real estate portfolios, ensure mortgage liabilities are instantly self-clearing, and shield family equity from sudden liquidation.",
  },
  {
    icon: <FiTrendingUp />,
    title: "Enterprise Founders",
    description:
      "Protect operational continuity, fund cross-shareholder buy-sell agreements, and protect corporate stakeholders from structural vulnerabilities.",
  },
];

const coverageHighlights = [
  "Guaranteed terminal death benefit capitalization",
  "Enhanced accidental death multipliers up to 200%",
  "Comprehensive premium waiver riders upon total disability",
  "Structured monthly income payouts for long-term support",
  "Pre-calculated maturity bonuses on capital growth plans",
  "Inherent policy monetization options after lock-in periods",
];

const faqs = [
  {
    question: "What is the core distinction between Term and Whole Life Insurance?",
    answer:
      "Term Insurance delivers high-volume capital protection over a designated epoch (e.g., 10-30 years) with zero maturity return, optimizing for absolute affordability. Whole Life structures permanent coverage spanning your complete lifespan while concurrently accumulating an investment-backed cash value you can borrow against.",
  },
  {
    question: "How does Visezy mathematically calculate my ideal sum assured?",
    answer:
      "We utilize a proprietary Human Economic Value (HEV) algorithmic approach. This factors in your current annual expenditure profiles, outstanding liabilities, future educational milestones for dependents, and projected inflation curves to arrive at a multi-million capital baseline.",
  },
  {
    question: "Can these insurance policies serve as active components of my tax strategy?",
    answer:
      "Absolutely. Capital assets routed through our specialized life protection solutions leverage statutory premium deductions and execute entirely tax-free payouts to designated beneficiaries, serving as premier tax insulation vehicles.",
  },
];

const timeline = [
  {
    age: "Ages 20 - 29",
    title: "Capital Leverage Phase",
    description:
      "Lock in historically lowest premium rates, establish high-ceiling underwriting configurations, and construct a long-term compound growth baseline.",
  },
  {
    age: "Ages 30 - 39",
    title: "Peak Liability Insulation",
    description:
      "Integrate critical riders to offset family expansions, manage high-leverage property mortgages, and protect dynamic career income scales.",
  },
  {
    age: "Ages 40 - 49",
    title: "Asset Synchronization",
    description:
      "Balance foundational protection with high-yield capital accumulation frameworks to synchronize with impending higher-education expenses.",
  },
  {
    age: "Ages 50+",
    title: "Legacy Engineering",
    description:
      "Pivot focus sharply toward tax-efficient estate transfer architectures, wealth preservation, and guaranteed retirement cash generation.",
  },
];

export default function LifeInsurancePage() {
  return (
    <main className={styles.page}>
      {/* BACKGROUND GRAPHICS */}
      <div className={styles.gridOverlay}></div>
      <div className={styles.glowOne}></div>
      <div className={styles.glowTwo}></div>
      <div className={styles.glowThree}></div>

      {/* HERO SECTION */}
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <div className={styles.badgeContainer}>
            <span className={styles.badge}>INSTITUTIONAL GRADE SECURITY</span>
          </div>

          <h1 className={styles.heroTitle}>
            Architect Your Legacy.
            <span className={styles.gradientText}>
              {" "}Insulate Your Family's Destiny.
            </span>
          </h1>

          <p className={styles.heroDescription}>
            Life insurance is an elite financial framework, not just a policy. It represents an unyielding structural commitment to your family's economic autonomy. By deploying modern risk-mitigation portfolios, we ensure your wealth remains permanent across generations.
          </p>

          <div className={styles.heroActions}>
            <Link href="#plans" className={styles.primaryBtn}>
              Analyze Premium Plans
              <FiArrowRight className={styles.btnIcon} />
            </Link>
          </div>
        </div>

        <div className={styles.heroImageContainer}>
          <div className={styles.imageInner}>
            <Image
              src="https://images.unsplash.com/photo-1511988617509-a57c8a288659?w=1600&q=80"
              alt="Premium Life Insurance Architecture"
              fill
              priority
              sizes="(max-width:1200px) 100vw, 50vw"
            />
          </div>
        </div>
      </section>

      {/* WHY LIFE INSURANCE & STATS */}
      <section className={styles.whySection}>
        <div className={styles.heading}>
          <span className={styles.sectionTag}>STRATEGIC RISK MANAGEMENT</span>
          <h2>The Foundations of Financial Sovereignty</h2>
          <p>
            Eliminate multi-generational economic vulnerabilities. Our life protection framework implements high-leverage capital safety nets, guarding your wealth from sudden systemic disruptions.
          </p>
        </div>

        <div className={styles.statsGrid}>
          <div className={styles.statCard}>
            <div className={styles.statHeader}>
              <span className={styles.statNumber}>100%</span>
              <div className={styles.miniIcon}><FiShield /></div>
            </div>
            <h3>Capital Allocation Guarantee</h3>
            <p>Complete regulatory compliance ensuring total contractual payouts directly into your beneficiaries' accounts.</p>
          </div>

          <div className={styles.statCard}>
            <div className={styles.statHeader}>
              <span className={styles.statNumber}>15x</span>
              <div className={styles.miniIcon}><FiTrendingUp /></div>
            </div>
            <h3>Income Leveraged Cover</h3>
            <p>Secure massive baseline liquidity asset values calculated up to fifteen times your current active annual earnings.</p>
          </div>

          <div className={styles.statCard}>
            <div className={styles.statHeader}>
              <span className={styles.statNumber}>0%</span>
              <div className={styles.miniIcon}><FiClock /></div>
            </div>
            <h3>Friction Settlement Architecture</h3>
            <p>Accelerated digital validation systems designed to bypass standard probate delays during execution.</p>
          </div>
        </div>
      </section>

      {/* NEW DETAILED FEATURE CARDS SECTION */}
      <section className={styles.featureSection}>
        <div className={styles.heading}>
          <span className={styles.sectionTag}>ADVANCED CAPABILITIES</span>
          <h2>Sophisticated Protection Features</h2>
        </div>
        <div className={styles.featureGrid}>
          {features.map((feature, idx) => (
            <div key={idx} className={styles.featureCard}>
              <div className={styles.featureIconWrapper}>{feature.icon}</div>
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* WHO SHOULD BUY */}
      <section className={styles.whoSection}>
        <div className={styles.heading}>
          <span className={styles.sectionTag}>AUDIENCE DESIGN ARCHITECTURE</span>
          <h2>Tailored Deployments for Every Discipline</h2>
        </div>

        <div className={styles.whoGrid}>
          {whoNeedsInsurance.map((item, index) => (
            <div key={index} className={styles.whoCard}>
              <div className={styles.iconBox}>{item.icon}</div>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* PLAN TYPES */}
      <section id="plans" className={styles.planSection}>
        <div className={styles.heading}>
          <span className={styles.sectionTag}>INSURANCE PORTFOLIOS</span>
          <h2>Ecosystems Built Around Capital Milestones</h2>
        </div>

        <div className={styles.planGrid}>
          {plans.map((plan, index) => (
            <div key={index} className={styles.planCard}>
              <div className={styles.iconBox}>{plan.icon}</div>
              <h3>{plan.title}</h3>
              <p>{plan.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* TWO-COLUMN DUAL HIGHLIGHT GRID */}
      <section className={styles.dualGridSection}>
        {/* COVERAGE HIGHLIGHTS */}
        <div className={styles.dualColumn}>
          <div className={styles.headingLeft}>
            <span className={styles.sectionTag}>PROVISIONS</span>
            <h2>Coverage Protocols</h2>
          </div>
          <div className={styles.compactBenefitGrid}>
            {coverageHighlights.map((item, index) => (
              <div key={index} className={styles.interactiveRow}>
                <FiCheckCircle className={styles.rowCheck} />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>

        {/* BENEFITS */}
        <div className={styles.dualColumn}>
          <div className={styles.headingLeft}>
            <span className={styles.sectionTag}>ADVANTAGES</span>
            <h2>Core Fiscal Benefits</h2>
          </div>
          <div className={styles.compactBenefitGrid}>
            {benefits.map((item, index) => (
              <div key={index} className={styles.interactiveRow}>
                <FiCheckCircle className={styles.rowCheckPrimary} />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TIMELINE */}
      <section className={styles.timelineSection}>
        <div className={styles.heading}>
          <span className={styles.sectionTag}>CHRONOLOGICAL STRATEGY</span>
          <h2>Optimizing Risk Through Lifespan Milestones</h2>
        </div>

        <div className={styles.timelineGrid}>
          {timeline.map((item, index) => (
            <div key={index} className={styles.timelineCard}>
              <div className={styles.timelineHeader}>
                <span className={styles.ageBadge}>{item.age}</span>
                <span className={styles.stepCounter}>0{index + 1}</span>
              </div>
              <h4>{item.title}</h4>
              <p>{item.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* WHY VISEZY / THE DISCIPLINE PROCESS */}
      <section className={styles.processSection}>
        <div className={styles.heading}>
          <span className={styles.sectionTag}>THE VISEZY METHODOLOGY</span>
          <h2>Precision Onboarding Framework</h2>
        </div>

        <div className={styles.processGrid}>
          {[
            "Algorithmic Goal Synthesis",
            "Cross-Market Matrix Comparison",
            "Underwriting Calibration",
            "Lifelong Liquidity Support",
          ].map((step, index) => (
            <div key={index} className={styles.processCard}>
              <div className={styles.processMeta}>
                <span className={styles.processStep}>STEP</span>
                <span className={styles.processNum}>0{index + 1}</span>
              </div>
              <h4>{step}</h4>
              <p>We execute advanced optimization filters ensuring your coverage parameters scale harmoniously against future capital assets.</p>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className={styles.faqSection}>
        <div className={styles.heading}>
          <span className={styles.sectionTag}>KNOWLEDGE BASE</span>
          <h2>Frequently Analyzed Metrics</h2>
        </div>

        <div className={styles.faqGrid}>
          {faqs.map((faq, index) => (
            <div key={index} className={styles.faqCard}>
              <div className={styles.faqHeader}>
                <FiFileText className={styles.faqIcon} />
                <h4>{faq.question}</h4>
              </div>
              <p>{faq.answer}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className={styles.ctaSection}>
        <div className={styles.ctaCard}>
          <div className={styles.ctaContent}>
            <div className={styles.ctaIcon}>
              <FiAward />
            </div>

            <h2>Initialize Your Capital Protection Architecture</h2>

            <p>
              Connect with our master underwriting strategists today. We will calibrate a custom, institutional-grade life insurance configuration meticulously aligned with your private legacy ambitions.
            </p>

            <Link href="/contact-us" className={styles.ctaBtn}>
              Initiate Consultation
              <FiArrowRight className={styles.btnIcon} />
            </Link>
          </div>

          <div className={styles.ctaImage}>
            <Image
              src="https://images.unsplash.com/photo-1511895426328-dc8714191300?w=1200&q=80"
              alt="Premium Generational Asset Protection"
              fill
              sizes="(max-width:1200px) 100vw, 40vw"
            />
          </div>
        </div>
      </section>
    </main>
  );
}