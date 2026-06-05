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

export const metadata = {
  title: "About Our Vision, Core Principles & Advisory Team | Visezy",
  description:
    "Discover the engineering, industry-standard values, and digital-first philosophies behind Visezy. Learn how we are building a more transparent insurance ecosystem.",
};

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
  }
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
    description: "We provide complete access to structural comparison metrics with no hidden platform fees or premium additions. Every dynamic pricing model is presented openly so you can confidently track your asset investments.",
  },
  {
    icon: <FiUsers />,
    title: "Customer-Centric Architecture",
    description: "We design every recommendation framework entirely around your unique financial metrics, long-term real estate goals, corporate scale requirements, and capital limitations.",
  },
  {
    icon: <FiAward />,
    title: "Uncompromising Integrity",
    description: "Long-term relationships are built on clear, honest communication. We maintain total transparency by refusing backend incentive structures from traditional legacy insurance brokers.",
  },
  {
    icon: <FiTrendingUp />,
    title: "Data-Driven Expert Advisory",
    description: "Our licensed advisory teams blend real-world risk consulting experience with modern algorithmic tracking tools to keep your dynamic coverage perfectly aligned with changing market conditions.",
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
  return (
    <main className={styles.page}>
      {/* BACKGROUND DECORATIONS */}
      <div className={styles.gridOverlay}></div>
      <div className={styles.blobOne}></div>
      <div className={styles.blobTwo}></div>

      {/* HERO SECTION */}
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <div className={styles.badgeWrapper}>
            <span className={styles.badge}>THE VISEZY ETHOS</span>
          </div>

          <h1 className={styles.heroTitle}>
            Democratizing Risk Management via
            <span className={styles.gradientText}> Clarity, Integrity & Technology</span>
          </h1>

          <p className={styles.heroDescription}>
            Visezy was built to address a core problem: traditional insurance systems are often confusing, costly, and misaligned with user interests.
            We combine objective data analytics with seasoned consumer advocacy to help you safeguard what matters most with total confidence.
          </p>

          <div className={styles.heroActions}>
            <Link href="/policies" className={styles.primaryBtn}>
              Explore Policies <FiArrowRight />
            </Link>
            <Link href="#story" className={styles.secondaryBtn}>
              Our Corporate Story
            </Link>
          </div>
        </div>

        <div className={styles.heroImageContainer}>
          <div className={styles.imageInner}>
            <Image
              src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=1200&q=80"
              alt="Visezy Strategic Leadership Consultation Session"
              fill
              priority
              sizes="(max-width: 1200px) 100vw, 50vw"
            />
          </div>
        </div>
      </section>

      {/* STATS SECTION */}
      <section className={styles.statsSection}>
        <div className={styles.statsGrid}>
          {stats.map((item, index) => (
            <div className={styles.statCard} key={index}>
              <h3 className={styles.statNumber}>{item.number}</h3>
              <p className={styles.statLabel}>{item.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* STORY SECTION */}
      <section id="story" className={styles.storySection}>
        <div className={styles.storyGrid}>
          <div className={styles.storyImageContainer}>
            <div className={styles.imageInner}>
              <Image
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=1200&q=80"
                alt="Collaborative Risk Engineers and Product Developers at Visezy HQ"
                fill
                sizes="(max-width: 1200px) 100vw, 50vw"
              />
            </div>
          </div>

          <div className={styles.storyContent}>
            <span className={styles.sectionTag}>OUR FOUNDING PRINCIPLE</span>
            <h2 className={styles.sectionTitle}>
              Replacing Structural Confusion With Clear, Actionable Certainty
            </h2>
            <p className={styles.storyText}>
              Visezy was founded by an expert group of financial analysts, regulatory lawyers, and software engineers who noticed that legacy insurance procurement systems relied on confusing information gaps to maximize corporate commissions.
            </p>
            <p className={styles.storyText}>
              We chose to build a completely transparent alternative. By combining modern comparison engines with real, human expertise, we strip away confusing fine print and focus on providing independent, data-backed value directly to the consumer.
            </p>

            <div className={styles.checkList}>
              {features.map((item, index) => (
                <div key={index} className={styles.checkItem}>
                  <span className={styles.checkIcon}><FiCheckCircle /></span>
                  <span className={styles.checkText}>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* MISSION & VISION SECTION */}
      <section className={styles.missionSection}>
        <div className={styles.missionGrid}>
          <div className={styles.missionCard}>
            <div className={styles.missionIconWrapper}><FiTarget /></div>
            <h3>Our Modern Mission</h3>
            <p>
              To rebuild the core insurance landscape around transparency, accessibility, and metric-driven integrity. We protect families, small businesses, and growing enterprises by turning complex, fragmented risk policies into clear, asset-backed configurations.
            </p>
          </div>

          <div className={styles.missionCard}>
            <div className={styles.missionIconWrapper}><FiTrendingUp /></div>
            <h3>Our Architectural Vision</h3>
            <p>
              To become the global gold standard for consumer protection networks. We are building an intuitive platform where users instantly analyze, optimize, and secure their complete multi-asset insurance coverage without worrying about hidden administrative fees.
            </p>
          </div>
        </div>
      </section>

      {/* VALUES SECTION */}
      <section className={styles.valuesSection}>
        <div className={styles.valuesHeader}>
          <span className={styles.sectionTag}>OUR VALUES</span>
          <h2 className={styles.sectionTitleCenter}>The Core Principles Anchoring Our Culture</h2>
          <p className={styles.sectionSubtitle}>
            These structural concepts define our day-to-day work, guiding how we evaluate carrier partnerships and maintain fiduciary responsibility across thousands of portfolio assets.
          </p>
        </div>

        <div className={styles.valuesGrid}>
          {values.map((value, index) => (
            <div className={styles.valueCard} key={index}>
              <div className={styles.iconBox}>
                {value.icon}
              </div>
              <h3>{value.title}</h3>
              <p>{value.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* WHY CHOOSE SECTION */}
      <section className={styles.whyChooseSection}>
        <div className={styles.valuesHeader}>
          <span className={styles.sectionTag}>OPERATIONAL DIFFERENTIATORS</span>
          <h2 className={styles.sectionTitleCenter}>
            Built To Prioritize Personal Wealth and Business Security
          </h2>
        </div>

        <div className={styles.reasonGrid}>
          {reasons.map((item, index) => (
            <div key={index} className={styles.reasonCard}>
              <div className={styles.reasonHeaderIcon}><FiLayers /></div>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* HOW WE HELP SECTION */}
      <section className={styles.processSection}>
        <div className={styles.valuesHeader}>
          <span className={styles.sectionTag}>THE MODERN ROADMAP</span>
          <h2 className={styles.sectionTitleCenter}>
            A Fast, Streamlined Framework Built For Clarity
          </h2>
        </div>

        <div className={styles.processGrid}>
          <div className={styles.processCard}>
            <div className={styles.processNumberWrapper}><span>01</span></div>
            <h3>Map Individual Risk Needs</h3>
            <p>
              Our dynamic data engine tracks your specific family size, corporate framework, or asset portfolio to isolate exactly where your risk sits, eliminating unnecessary coverage extras.
            </p>
          </div>

          <div className={styles.processCard}>
            <div className={styles.processNumberWrapper}><span>02</span></div>
            <h3>Run Real-Time Comparative Models</h3>
            <p>
              We cross-examine dozens of vetted, regulatory-compliant carriers side-by-side, giving you a clear look at true deductible metrics, policy exclusions, and realistic premium allocations.
            </p>
          </div>

          <div className={styles.processCard}>
            <div className={styles.processNumberWrapper}><span>03</span></div>
            <h3>Deploy Lifelong Advisory Support</h3>
            <p>
              Once your policy is active, our personal account managers continuously monitor your coverage, checking in at major life milestones to keep your asset configuration perfectly optimized.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ SECTION */}
      <section className={styles.faqSection}>
        <div className={styles.valuesHeader}>
          <span className={styles.sectionTag}>FAQ</span>
          <h2 className={styles.sectionTitleCenter}>
            Frequently Addressed Inquiries Regarding Our Platform
          </h2>
        </div>

        <div className={styles.faqGrid}>
          <div className={styles.faqCard}>
            <div className={styles.faqTitleBox}>
              <FiInfo className={styles.faqQuestionIcon} />
              <h4>How does Visezy keep its advice completely unbiased?</h4>
            </div>
            <p>
              Unlike legacy insurance brokers who are incentivized to sell specific policies for hidden backend commissions, Visezy works under a completely transparent model. Our comparison systems evaluate policies strictly by metrics like pricing advantages, customer claim scores, and historical data matching your specific profile.
            </p>
          </div>

          <div className={styles.faqCard}>
            <div className={styles.faqTitleBox}>
              <FiInfo className={styles.faqQuestionIcon} />
              <h4>Does Visezy provide hands-on help if I need to file an emergency claim?</h4>
            </div>
            <p>
              Absolutely. We don't just point you toward a policy and walk away. If you encounter an incident that triggers a claim, you can coordinate directly with our internal customer care group. We help compile your loss documentation and advocate on your behalf to guarantee a fair evaluation from the carrier.
            </p>
          </div>

          <div className={styles.faqCard}>
            <div className={styles.faqTitleBox}>
              <FiInfo className={styles.faqQuestionIcon} />
              <h4>Can I transition an existing legacy policy over to your management engine?</h4>
            </div>
            <p>
              Yes, easily. Our onboarding process allows you to import your current insurance documentation into our platform. Our optimization tools will evaluate your active structure for policy overlaps or excessive premiums, helping you safely transition over without missing a single day of coverage.
            </p>
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className={styles.ctaSection}>
        <div className={styles.ctaCard}>
          <div className={styles.ctaContent}>
            <span className={styles.ctaTag}>Take Command of Your Security</span>
            <h2>Build an Uncompromising, Transparent Risk Portfolio Today</h2>
            <p>
              Stop leaving your personal properties and business ventures exposed to complex, legacy policy architecture. Join thousands of users who depend on Visezy for clear, data-driven insurance strategy.
            </p>
            <Link href="/policies" className={styles.ctaBtn}>
              Begin Free Evaluation <FiArrowRight />
            </Link>
          </div>

          <div className={styles.ctaImageContainer}>
            <Image
              src="https://images.unsplash.com/photo-1556740749-887f6717d7e4?w=1200&q=80"
              alt="Verified Financial Security Advisory Support Group"
              fill
              sizes="(max-width: 1200px) 100vw, 40vw"
            />
          </div>
        </div>
      </section>
    </main>
  );
}