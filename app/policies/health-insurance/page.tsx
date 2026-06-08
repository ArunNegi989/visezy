import styles from "./health-insurance.module.css";
import Image from "next/image";
import Link from "next/link";
import {
  FiArrowRight,
  FiHeart,
  FiShield,
  FiUsers,
  FiCheckCircle,
  FiActivity,
  FiAward,
  FiFileText,
  FiDollarSign,
  FiTrendingUp,
  FiSmile,
  FiHelpCircle,
  FiLock,
  FiClock,
} from "react-icons/fi";

export const metadata = {
  title: "Comprehensive Health Insurance Plans | Visezy",
  description:
    "Secure your family's health and financial future with Visezy. Explore customizable health insurance solutions, cashless hospitalization, and critical illness covers.",
};

const plans = [
  {
    icon: <FiUsers />,
    title: "Family Floater Protection",
    tagline: "Total Family Security",
    description:
      "An all-inclusive single policy that extends a shared sum insured across your entire family, covering spouse, children, and dependent parents seamlessly.",
  },
  {
    icon: <FiHeart />,
    title: "Individual Health Elite",
    tagline: "Tailored For You",
    description:
      "Personalized, high-tier healthcare coverage designed specifically around your unique medical profile, wellness habits, and lifestyle demands.",
  },
  {
    icon: <FiShield />,
    title: "Critical Illness Safeguard",
    tagline: "Lump-Sum Payouts",
    description:
      "Immediate financial protection providing substantial lump-sum payouts upon diagnosis of major life-threatening conditions or cardiovascular illnesses.",
  },
  {
    icon: <FiActivity />,
    title: "Cashless Hospitalization Network",
    tagline: "Zero Out-Of-Pocket Expenses",
    description:
      "Gain instantaneous medical attention across 10,000+ elite network partner hospitals without the stress of upfront medical bills or cash deposits.",
  },
];

const benefits = [
  {
    title: "In-Patient Hospitalization",
    desc: "Complete coverage for nursing, room rent, ICU fees, and medical practitioner expenditures.",
  },
  {
    title: "Pre & Post Care Coverage",
    desc: "We clear your medical bills up to 60 days before admission and 90 days following discharge.",
  },
  {
    title: "Advanced Daycare Procedures",
    desc: "Financial security for rapid medical treatments requiring less than 24 hours of hospital stay.",
  },
  {
    title: "Inflation-Shield Adjustments",
    desc: "Automatic sum insured increments to buffer against annually compounding medical inflation.",
  },
  {
    title: "Complimentary Annual Checkups",
    desc: "Proactive health screening matrices provided completely free once every policy renewal cycle.",
  },
  {
    title: "Maximum Tax Exemptions",
    desc: "Enjoy comprehensive deductions under local premium regulations to optimize your fiscal year.",
  },
];

const processes = [
  {
    title: "Select Your Arena",
    desc: "Input your baseline metrics to instantly compare personalized risk premiums.",
  },
  {
    title: "Smart Application",
    desc: "Fill our secure digital questionnaire with zero cumbersome paper trails.",
  },
  {
    title: "Instant Verification",
    desc: "Our automated underwriter structures your parameters in real-time.",
  },
  {
    title: "Active Protection",
    desc: "Receive your policy kit instantly. You are officially covered.",
  },
];

const faqs = [
  {
    question: "What exact factors determine my annual insurance premiums?",
    answer:
      "Your health insurance premiums are scientifically evaluated based on composite factors including age, geographical location, medical history, policy type, chosen deductible margins, and overall lifestyle habits.",
  },
  {
    question: "How does the cashless hospitalization settlement system operate?",
    answer:
      "When admitted to an approved network hospital, you present your Visezy digital health card. The hospital TPA desk validates identity, and we clear the treatment costs directly with the medical center billing department.",
  },
  {
    question: "Is there a waiting window for pre-existing medical conditions?",
    answer:
      "Typically, pre-existing health conditions carry a standard waiting window ranging between 2 to 4 years depending on policy configurations. However, premium riders can significantly minimize or waive this constraint.",
  },
  {
    question: "Can I upgrade my coverage limit mid-cycle if medical requirements shift?",
    answer:
      "Sum insured enhancements are highly scalable and can be fully processed during your designated annual policy renewal phase to prevent administrative overlaps.",
  },
];

export default function HealthInsurancePage() {
  return (
    <main className={styles.page}>
      {/* BACKGROUND GRAPHIC MATRIX */}
      <div className={styles.gridOverlay}></div>
      <div className={styles.glowOne}></div>
      <div className={styles.glowTwo}></div>
      <div className={styles.glowThree}></div>

      {/* HERO SECTION */}
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <span className={styles.badge}>
            <FiLock className={styles.badgeIcon} /> HEALTH ASSET ARCHITECTURE
          </span>

          <h1 className={styles.heroTitle}>
            Protect Your Health.
            <span className={styles.gradientText}> Protect Your Legacy.</span>
          </h1>

          <p className={styles.heroDescription}>
            Mitigate modern medical risks with dynamically scaling insurance plans. Secure your family's personal well-being, optimize emergency healthcare parameters, and build a definitive buffer against rising healthcare costs.
          </p>

          <div className={styles.heroActionGroup}>
            <Link href="#plans" className={styles.primaryBtn}>
              Explore Formulated Plans
              <FiArrowRight />
            </Link>
            <div className={styles.heroTrustMeta}>
              <span className={styles.avatarStack}>
                <span className={styles.miniAvatar}>✓</span>
              </span>
              <p>Trusted by 45k+ active individuals globally</p>
            </div>
          </div>
        </div>

        <div className={styles.heroImageContainer}>
          <div className={styles.imageInner}>
            <Image
              src="https://images.unsplash.com/photo-1584515933487-779824d29309?w=1600&q=80"
              alt="Elite Corporate Health Management Matrix"
              fill
              priority
              sizes="(max-width:1200px) 100vw, 50vw"
            />
            <div className={styles.floatingStatsCard}>
              <FiClock className={styles.statsCardIcon} />
              <div>
                <h4>99.4% Claim Ratio</h4>
                <p>Accelerated processing</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* VALUE PROP SECTON */}
      <section className={styles.whySection}>
        <div className={styles.heading}>
          <span className={styles.sectionTag}>MARKET REALITY GRID</span>
          <h2>The Price of Clinical Recovery is Scaling</h2>
          <p>
            Modern medical inflation outpaces basic consumer price indices. An unexpected medical crisis shouldn't disrupt your long-term capital investments.
          </p>
        </div>

        <div className={styles.statsGrid}>
          <div className={styles.statCard}>
            <div className={styles.statIconWrapper}>
              <FiDollarSign />
            </div>
            <h3>Financial Immunity</h3>
            <p>
              Insulate your cash reserves and stock portfolios from unexpected, high-velocity healthcare charges.
            </p>
          </div>

          <div className={styles.statCard}>
            <div className={styles.statIconWrapper}>
              <FiTrendingUp />
            </div>
            <h3>Inflation Defense</h3>
            <p>
              Our premium coverage solutions integrate automated capital adjustments to outpace year-over-year operational hospital inflation.
            </p>
          </div>

          <div className={styles.statCard}>
            <div className={styles.statIconWrapper}>
              <FiSmile />
            </div>
            <h3>Elite Access</h3>
            <p>
              Acquire instantaneous access to premium single-occupancy private rooms and premier surgical practitioners without secondary approvals.
            </p>
          </div>
        </div>
      </section>

      {/* DETAILED PLANS */}
      <section id="plans" className={styles.planSection}>
        <div className={styles.heading}>
          <span className={styles.sectionTag}>PREMIUM ARCHITECTURES</span>
          <h2>Health Deployments Configured For Growth</h2>
        </div>

        <div className={styles.planGrid}>
          {plans.map((plan, index) => (
            <div key={index} className={styles.planCard}>
              <div className={styles.planHeader}>
                <div className={styles.iconBox}>{plan.icon}</div>
                <span className={styles.planTagline}>{plan.tagline}</span>
              </div>
              <h3>{plan.title}</h3>
              <p>{plan.description}</p>
              <div className={styles.planCardAction}>
                <span>Analyze Metrics</span>
                <FiArrowRight />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CORE BENEFIT BLOCK */}
      <section className={styles.benefitsSection}>
        <div className={styles.heading}>
          <span className={styles.sectionTag}>PRODUCT MATRICES</span>
          <h2>Granular Benefits Engineered For Absolute Certainty</h2>
        </div>

        <div className={styles.benefitGrid}>
          {benefits.map((item, index) => (
            <div key={index} className={styles.benefitCard}>
              <div className={styles.benefitIconHeader}>
                <FiCheckCircle />
              </div>
              <div>
                <h4>{item.title}</h4>
                <p>{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* JOURNEY LOGIC STEPPING */}
      <section className={styles.processSection}>
        <div className={styles.heading}>
          <span className={styles.sectionTag}>ONBOARDING WORKFLOW</span>
          <h2>Four Steps to Sovereign Medical Coverage</h2>
        </div>

        <div className={styles.processGrid}>
          {processes.map((step, index) => (
            <div key={index} className={styles.processCard}>
              <div className={styles.processHeader}>
                <span className={styles.stepNumber}>0{index + 1}</span>
                <div className={styles.stepConnector}></div>
              </div>
              <h4>{step.title}</h4>
              <p>{step.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ COMPONENT */}
      <section className={styles.faqSection}>
        <div className={styles.heading}>
          <span className={styles.sectionTag}>KNOWLEDGE BASE</span>
          <h2>Frequently Verified Inquiries</h2>
        </div>

        <div className={styles.faqGrid}>
          {faqs.map((faq, index) => (
            <div key={index} className={styles.faqCard}>
              <div className={styles.faqCardHeader}>
                <FiHelpCircle className={styles.faqIcon} />
                <h4>{faq.question}</h4>
              </div>
              <p>{faq.answer}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CALL TO ACTION */}
      <section className={styles.ctaSection}>
        <div className={styles.ctaCard}>
          <div className={styles.ctaContent}>
            <div className={styles.ctaIcon}>
              <FiAward />
            </div>

            <h2>Secure Your Immediate Health Baseline</h2>

            <p>
              Connect with our medical underwriting team to build a bespoke risk mitigation policy configured around your personal assets.
            </p>

            <Link href="/contact-us" className={styles.ctaBtn}>
              Initiate Risk Assessment
              <FiArrowRight />
            </Link>
          </div>

          <div className={styles.ctaImage}>
            <Image
              src="https://images.unsplash.com/photo-1631217868264-e5b90bb7e133?w=1200&q=80"
              alt="Visezy Strategic Healthcare Support Center"
              fill
              sizes="(max-width:1200px) 100vw, 40vw"
            />
          </div>
        </div>
      </section>
    </main>
  );
}