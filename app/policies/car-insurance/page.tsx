import styles from "./car-insurance.module.css";
import Image from "next/image";
import Link from "next/link";
import {
  FiArrowRight,
  FiCheckCircle,
  FiShield,
  FiTruck,
  FiClock,
  FiDollarSign,
  FiAlertCircle,
  FiAward,
  FiFileText,
  FiTool,
  FiUsers,
  FiStar,
  FiTrendingUp,
  FiLayers,
} from "react-icons/fi";

export const metadata = {
  title: "Car Insurance | Visezy",
  description:
    "Explore car insurance solutions with comprehensive coverage, roadside assistance, premium claims support, and maximum protection for your vehicle.",
};

const coverages = [
  {
    icon: <FiShield />,
    title: "Comprehensive Coverage",
    description:
      "All-inclusive asset shielding against unpredictable multi-vehicle collisions, localized animal damage, theft, structural fires, severe weather, and third-party liabilities.",
  },
  {
    icon: <FiTruck />,
    title: "Third-Party Liability",
    description:
      "Full coverage protecting you from mounting financial liabilities stemming from property destruction or physical bodily injuries inflicted on other people or vehicles.",
  },
  {
    icon: <FiTool />,
    title: "Roadside Assistance",
    description:
      "On-demand emergency response networks for immediate long-distance towing, puncture tyre changes, rapid battery re-charging, and quick-turnaround on-site mechanical repairs.",
  },
  {
    icon: <FiDollarSign />,
    title: "Premium Add-On Covers",
    description:
      "Maximize security with structural zero-depreciation riders, complete internal engine protection blocks, return-to-invoice recovery, and consumable expense reimbursement.",
  },
];

const benefits = [
  "Comprehensive protection countering out-of-pocket structural repair expenses",
  "Total regulatory compliance with modern legal vehicle insurance mandates",
  "Expedited market-valuation recoveries for auto theft and total disaster events",
  "Around-the-clock roadside help matching exact geolocation metrics",
  "High-tier personal injury and accidental driver liability protections",
  "Streamlined claim networks linking pre-approved cashless service garages",
];

const coveredItems = [
  "Accidental external collisions and structural crashes",
  "Third-party asset damage and vehicle restoration",
  "Third-party bodily injury health payouts",
  "Vandalism, auto burglary, and vehicle theft recovery",
  "Internal engine fires and localized lighting flashes",
  "Severe flash floods, earthquakes, and wind storms",
  "Compulsory personal accident protection layers",
  "Optional specialized rider packages",
];

const excludedItems = [
  "Intoxicated vehicle operation or driving under major influence",
  "Operating vehicles with expired or missing driver licenses",
  "Gradual engine wear, vehicle rust, and systemic aging",
  "Non-accident internal mechanical breakdowns",
  "Consequential drop in value or depreciation losses",
  "Unlawful commercial use of personal private vehicles",
  "Competitive track racing, time trials, and speed testing",
  "Incidents occurring outside formal geopolitical policy boundaries",
];

const claimSteps = [
  { title: "Immediate Notification", desc: "Report details instantly online or via support lines right after an incident occurs." },
  { title: "Document Submission", desc: "Instantly upload digital copies of licenses, policy details, and active camera proofs." },
  { title: "Assessor Inspection", desc: "A licensed inspector reviews structural damage to verify dynamic repair requirements." },
  { title: "Cashless Settlement", desc: "Get authorized repairs done directly through nationwide network garages fast." },
];

const documents = [
  "Vehicle Registration Certificate (RC)",
  "Valid Identity-verified Driving Licence",
  "Active Insurance Policy Endorsement Copy",
  "Local Police FIR Filings (For Theft or Malicious Acts)",
  "Digitally Signed Policy Claim Form",
  "Itemized Mechanic Estimates and Garage Bills",
];

const faqs = [
  {
    question: "Why should I buy comprehensive auto coverage?",
    answer:
      "Comprehensive auto plans shield you from systemic repair bills, sudden theft write-offs, catastrophic storm events, and critical litigation exposure from third-party road collisions.",
  },
  {
    question: "How do zero-depreciation additions function?",
    answer:
      "Standard insurance factors in vehicle wear and tear during claims. A zero-depreciation rider ensures your insurer pays out the full replacement cost of parts without deducting for age or usage.",
  },
  {
    question: "How long does the digital claim review take?",
    answer:
      "With modern automated inspection workflows, minor claims at partner garages are approved within hours. Major structural reviews typically clear within 3 to 5 business days.",
  },
  {
    question: "Can I transfer accumulated No-Claim Bonuses (NCB)?",
    answer:
      "Yes. The No-Claim Bonus belongs to you, not the car. You can seamlessly apply your earned safe-driving discounts to a new vehicle policy when upgrading your ride.",
  },
];

export default function CarInsurancePage() {
  return (
    <main className={styles.page}>
      {/* BACKGROUND ELEMENTS */}
      <div className={styles.gridOverlay} aria-hidden="true" />
      <div className={styles.glowOne} aria-hidden="true" />
      <div className={styles.glowTwo} aria-hidden="true" />
      <div className={styles.glowThree} aria-hidden="true" />

      {/* HERO SECTION */}
      <section className={styles.hero} aria-label="Insurance Overview">
        <div className={styles.heroContent}>
          <span className={styles.badge}>
            <FiStar className={styles.badgeIcon} /> CAR INSURANCE SOLUTIONS
          </span>

          <h1 className={styles.heroTitle}>
            Protect Every Mile With
            <span className={styles.gradientText}> Intelligent Security</span>
          </h1>

          <p className={styles.heroDescription}>
            Whether navigating dynamic daily commutes or maintaining multi-vehicle fleets, protect your automotive assets against rising liability risks. Deploy smart, comprehensive safeguards built for modern drivers.
          </p>

          <div className={styles.heroActions}>
            <Link href="#coverage" className={styles.primaryBtn}>
              Explore Coverage <FiArrowRight className={styles.btnIcon} />
            </Link>
            <Link href="/contact-us" className={styles.secondaryBtn}>
              Get A Fast Quote
            </Link>
          </div>
        </div>

        <div className={styles.heroImageContainer}>
          <div className={styles.imageInner}>
            <Image
              src="https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=1600&q=80"
              alt="Premium premium automobile driving on an open road highlighting security coverage"
              fill
              priority
              sizes="(max-width:1200px) 100vw, 50vw"
            />
          </div>
        </div>
      </section>

      {/* STRATEGIC METRICS SECTION */}
      <section className={styles.statsSection} aria-label="Service Statistics">
        <div className={styles.statsGrid}>
          {[
            { tag: "24/7/365", label: "Live Emergency Assistance" },
            { tag: "100%", label: "Transparent Policy Verification" },
            { tag: "Instant", label: "Digital Cashless Approval" },
            { tag: "Tier-1", label: "Network Garage Protections" },
          ].map((stat, idx) => (
            <div key={idx} className={styles.statCard} style={{ '--card-idx': idx } as React.CSSProperties}>
              <h3>{stat.tag}</h3>
              <p>{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CORPORATE BENEFITS MATRIX */}
      <section className={styles.infoSection}>
        <div className={styles.heading}>
          <span className={styles.sectionTag}>WHY RISK UNPROTECTED TRAVEL</span>
          <h2>Engineered For Premium Vehicle Security</h2>
          <p>
            Standard plans leave performance vectors uncovered. Move to high-tier structural liability shielding and comprehensive legal indemnification frameworks.
          </p>
        </div>

        <div className={styles.infoGrid}>
          <div className={styles.infoCard}>
            <div className={styles.infoIconWrapper}><FiTrendingUp /></div>
            <h3>Financial Protection</h3>
            <p>Insulate private investment portfolios from soaring third-party legal claims and expensive parts manufacturing replacements.</p>
          </div>

          <div className={styles.infoCard}>
            <div className={styles.infoIconWrapper}><FiLayers /></div>
            <h3>Bulletproof Compliance</h3>
            <p>Ensure immediate regulatory adherence with current digital regional safety mandates seamlessly and automatically.</p>
          </div>

          <div className={styles.infoCard}>
            <div className={styles.infoIconWrapper}><FiClock /></div>
            <h3>Rapid Roadside Help</h3>
            <p>Deploy specialized vehicle extraction fleets, battery diagnostics, and heavy towing services on request anywhere.</p>
          </div>
        </div>
      </section>

      {/* CARD GRIDS SECTION */}
      <section id="coverage" className={styles.coverageSection}>
        <div className={styles.heading}>
          <span className={styles.sectionTag}>COVERAGE FRAMEWORKS</span>
          <h2>Flexible Protection Levels</h2>
        </div>

        <div className={styles.coverageGrid}>
          {coverages.map((item, index) => (
            <div key={index} className={styles.coverageCard}>
              <div className={styles.iconBox}>{item.icon}</div>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* KEY BENEFITS LIST */}
      <section className={styles.benefitsSection}>
        <div className={styles.heading}>
          <span className={styles.sectionTag}>OPERATIONAL ADVANTAGES</span>
          <h2>Why Thousands Trust Our Insurance Layouts</h2>
        </div>

        <div className={styles.benefitsGrid}>
          {benefits.map((item, index) => (
            <div key={index} className={styles.benefitCard}>
              <FiCheckCircle className={styles.benefitIcon} />
              <span>{item}</span>
            </div>
          ))}
        </div>
      </section>

      {/* CONTRAST MATRIX SECTION (COVERED VS EXCLUDED) */}
      <section className={styles.compareSection} aria-label="Policy Boundary Comparison">
        <div className={styles.compareCard}>
          <h3 className={styles.includeTitle}><FiCheckCircle /> What's Explicitly Covered</h3>
          <div className={styles.compareList}>
            {coveredItems.map((item, index) => (
              <div key={index} className={styles.listItem}>
                <FiCheckCircle className={styles.checkIcon} />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>

        <div className={styles.compareCard}>
          <h3 className={styles.excludeTitle}><FiAlertCircle /> Standard Exclusions</h3>
          <div className={styles.compareList}>
            {excludedItems.map((item, index) => (
              <div key={index} className={styles.listItem}>
                <FiAlertCircle className={styles.alertIcon} />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* STEP-BY-STEP CLAIM WORKFLOW */}
      <section className={styles.processSection}>
        <div className={styles.heading}>
          <span className={styles.sectionTag}>RESOLUTION MAP</span>
          <h2>Accelerated Claims Settlement Timeline</h2>
        </div>

        <div className={styles.processGrid}>
          {claimSteps.map((step, index) => (
            <div key={index} className={styles.processCard}>
              <div className={styles.stepBubble}>
                <span>0{index + 1}</span>
              </div>
              <h4>{step.title}</h4>
              <p className={styles.processDesc}>{step.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* COMPLIANCE DOCUMENTS PACK */}
      <section className={styles.documentsSection}>
        <div className={styles.heading}>
          <span className={styles.sectionTag}>COMPLIANCE CHECKLIST</span>
          <h2>Documents for Instant Claims Approval</h2>
        </div>

        <div className={styles.documentsGrid}>
          {documents.map((item, index) => (
            <div key={index} className={styles.documentCard}>
              <div className={styles.docIconBox}><FiFileText /></div>
              <span>{item}</span>
            </div>
          ))}
        </div>
      </section>

      {/* ACCORDION ACCESSIBLE FAQ SECTION */}
      <section className={styles.faqSection}>
        <div className={styles.heading}>
          <span className={styles.sectionTag}>POLICY INTELLIGENCE</span>
          <h2>Frequently Asked Inquiries</h2>
        </div>

        <div className={styles.faqGrid}>
          {faqs.map((faq, index) => (
            <div key={index} className={styles.faqCard}>
              <h4>{faq.question}</h4>
              <p>{faq.answer}</p>
            </div>
          ))}
        </div>
      </section>

      {/* HIGH-CONVERSION CALL TO ACTION */}
      <section className={styles.ctaSection}>
        <div className={styles.ctaCard}>
          <div className={styles.ctaContent}>
            <div className={styles.ctaIcon} aria-hidden="true">
              <FiAward />
            </div>
            <h2>Secure Your Vehicle Assets Today</h2>
            <p>
              Instantly review tailored premiums matching your exact vehicle model, safety features, and local transit requirements. Ensure absolute peace of mind.
            </p>
            <Link href="/contact-us" className={styles.ctaBtn}>
              Configure Premium Layout <FiArrowRight />
            </Link>
          </div>

          <div className={styles.ctaImage}>
            <Image
              src="https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=1200&q=80"
              alt="Clean close-up profile of a sports car body highlighting precision alignment"
              fill
              sizes="(max-width:1200px) 100vw, 40vw"
            />
          </div>
        </div>
      </section>
    </main>
  );
}