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

export const metadata = {
  title: "Terms & Conditions | Visezy",
  description:
    "Review the terms and conditions governing the use of Visezy services, software licenses, platform infrastructure, and legal obligations.",
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

export default function TermsPage() {
  return (
    <main className={styles.page}>
      <div className={styles.gridOverlay}></div>
      <div className={styles.radialGlowOne}></div>
      <div className={styles.radialGlowTwo}></div>

      {/* HERO SECTION */}
      <section className={styles.hero}>
        <div className={styles.content}>
          <div className={styles.badgeWrapper}>
            <span className={styles.badge}>LEGAL FRAMEWORK & COMPLIANCE</span>
          </div>

          <h1 className={styles.heroTitle}>
            Platform Terms &
            <span className={styles.gradientText}> Governing Conditions</span>
          </h1>

          <p className={styles.heroDescription}>
            Welcome to Visezy. These comprehensive Terms & Conditions define the operational parameters, legal protections, system responsibilities, and mutual requirements governing our entire application ecosystem and software services.
          </p>

          <Link href="#terms" className={styles.primaryBtn}>
            Read Terms Document
            <FiArrowRight className={styles.btnArrow} />
          </Link>
        </div>

        <div className={styles.heroImageContainer}>
          <div className={styles.imageInner}>
            <Image
              src="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=1600&q=80"
              alt="Legal Compliance and Framework Documentation"
              fill
              priority
              sizes="(max-width:1200px) 100vw, 50vw"
            />
          </div>
        </div>
      </section>

      {/* TERMS CATEGORIES */}
      <section id="terms" className={styles.categories}>
        <div className={styles.heading}>
          <span className={styles.sectionTag}>CORE CLAUSES</span>
          <h2>Important Legal Architecture</h2>
          <p>
            Please evaluate the functional foundations of our terms. Understanding these blocks guarantees a protected, productive, and reliable experience throughout your workspace lifecycle.
          </p>
        </div>

        <div className={styles.grid}>
          {terms.map((item, index) => (
            <div key={index} className={styles.card}>
              <div className={styles.cardGlow}></div>
              <div className={styles.iconBox}>{item.icon}</div>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* HOW TERMS WORK (PROCESS) */}
      <section className={styles.process}>
        <div className={styles.heading}>
          <span className={styles.sectionTag}>APPLICATION MATRIX</span>
          <h2>Enforcement & Operational Scope</h2>
        </div>

        <div className={styles.steps}>
          <div className={styles.step}>
            <div className={styles.stepHeader}>
              <span className={styles.stepNumber}>01</span>
              <div className={styles.stepLine}></div>
            </div>
            <h4>Secure Authentication</h4>
            <p>
              Users successfully unlock application features upon confirming credentials and registering identity pools securely.
            </p>
          </div>

          <div className={styles.step}>
            <div className={styles.stepHeader}>
              <span className={styles.stepNumber}>02</span>
              <div className={styles.stepLine}></div>
            </div>
            <h4>Payload Verification</h4>
            <p>
              All customer documentation, dynamic records, and configurations must be checked for absolute real-world correctness.
            </p>
          </div>

          <div className={styles.step}>
            <div className={styles.stepHeader}>
              <span className={styles.stepNumber}>03</span>
              <div className={styles.stepLine}></div>
            </div>
            <h4>Policy Synchronization</h4>
            <p>
              Workspaces stay aligned with modern localized laws, systemic restrictions, and global commercial mandates.
            </p>
          </div>

          <div className={styles.step}>
            <div className={styles.stepHeader}>
              <span className={styles.stepNumber}>04</span>
            </div>
            <h4>Continuous Defense</h4>
            <p>
              Automated auditing layers continuously check for suspicious actions, anomalous logins, and intellectual property leaks.
            </p>
          </div>
        </div>
      </section>

      {/* USER RESPONSIBILITIES (BENEFITS GRID) */}
      <section className={styles.benefits}>
        <div className={styles.heading}>
          <span className={styles.sectionTag}>USER CONDUCT OBLIGATIONS</span>
          <h2>System Terms & Operating Etiquette</h2>
          <p>
            To sustain network stability, server speed, and uniform system data integrity, every user agrees to respect the following runtime parameters:
          </p>
        </div>

        <div className={styles.benefitGrid}>
          {responsibilities.map((item, index) => (
            <div key={index} className={styles.benefit}>
              <div className={styles.benefitIcon}>
                <FiCheckCircle />
              </div>
              <span className={styles.benefitText}>{item}</span>
            </div>
          ))}
        </div>
      </section>

      {/* ADDITIONAL CLAUSES SUB-SECTION */}
      <section className={styles.legalDeepDive}>
        <div className={styles.heading}>
          <span className={styles.sectionTag}>PROHIBITED ACTIVITIES</span>
          <h2>Strict System Restrictions</h2>
        </div>

        <div className={styles.clauseGrid}>
          <div className={styles.clauseItem}>
            <div className={styles.clauseIconBox}>
              <FiSlash />
            </div>
            <h3>Platform Abuse</h3>
            <p> Any structural extraction of internal system metrics, database indexing scripts, injection attacks, or brute-force tracking attempts will trigger instant system termination.</p>
          </div>
          <div className={styles.clauseItem}>
            <div className={styles.clauseIconBox}>
              <FiAward />
            </div>
            <h3>Governing Arbitration</h3>
            <p>These terms and all subsequent enterprise contracts are constructed under and governed by standard state and international trade court structures.</p>
          </div>
          <div className={styles.clauseItem}>
            <div className={styles.clauseIconBox}>
              <FiRefreshCw />
            </div>
            <h3>Dynamic Revisions</h3>
            <p>Visezy maintains absolute authority to adjust these clauses. Continued dashboard interaction following policy releases signifies total acceptance of revised guidelines.</p>
          </div>
        </div>
      </section>

      {/* FAQ SECTION */}
      <section className={styles.faq}>
        <div className={styles.heading}>
          <span className={styles.sectionTag}>KNOWLEDGE EXPLORER</span>
          <h2>Terms Frequently Asked Questions</h2>
        </div>

        <div className={styles.faqGrid}>
          <div className={styles.faqCard}>
            <div className={styles.faqTitleBox}>
              <FiHelpCircle className={styles.faqQuestionIcon} />
              <h4>Why must I understand these Terms and Conditions?</h4>
            </div>
            <p>
              Reviewing our formal guidelines outlines your strict legal rights, workspace safety boundaries, cloud data ownership conditions, and structural remedies available during outages.
            </p>
          </div>

          <div className={styles.faqCard}>
            <div className={styles.faqTitleBox}>
              <FiHelpCircle className={styles.faqQuestionIcon} />
              <h4>How often do these platform documents undergo updates?</h4>
            </div>
            <p>
              We run documentation audits semi-annually or whenever massive regional privacy laws change. We alert our enterprise client bases via automated email or account alerts.
            </p>
          </div>

          <div className={styles.faqCard}>
            <div className={styles.faqTitleBox}>
              <FiHelpCircle className={styles.faqQuestionIcon} />
              <h4>What happens if a user violates a core safety clause?</h4>
            </div>
            <p>
              Violations result in progressive administrative actions, beginning with informal warnings, moving to partial feature locks, and ending in complete database account deletion without refund options.
            </p>
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className={styles.ctaSection}>
        <div className={styles.ctaCard}>
          <div className={styles.ctaContent}>
            <h2>Questions About Our Terms?</h2>
            <p>
              Contact our team for clarification regarding platform usage, policies, or legal information.
            </p>

            <Link href="/contact-us" className={styles.ctaBtn}>
              Contact Us
              <FiArrowRight className={styles.btnArrow} />
            </Link>
          </div>

          <div className={styles.ctaImageContainer}>
            <Image
              src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=1200&q=80"
              alt="Customer Support Team"
              fill
              sizes="(max-width:1200px) 100vw, 40vw"
            />
          </div>
        </div>
      </section>
    </main>
  );
}