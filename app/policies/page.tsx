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
} from "react-icons/fi";

export const metadata = {
  title: "Policies | Visezy",
  description:
    "Explore insurance policy solutions designed for individuals, families, and businesses.",
};

const policies = [
  {
    icon: <FiTruck />,
    title: "Motor Insurance",
    description:
      "Coverage solutions designed to help protect your vehicle and financial interests.",
  },
  {
    icon: <FiHeart />,
    title: "Health Insurance",
    description:
      "Support for healthcare expenses and access to comprehensive coverage options.",
  },
  {
    icon: <FiShield />,
    title: "Life Insurance",
    description:
      "Financial protection designed to support your family’s future goals.",
  },
  {
    icon: <FiHome />,
    title: "Home Insurance",
    description:
      "Protection against unforeseen risks affecting your home and belongings.",
  },
  {
    icon: <FiGlobe />,
    title: "Travel Insurance",
    description:
      "Coverage support for travel-related disruptions and emergencies.",
  },
  {
    icon: <FiBriefcase />,
    title: "Business Insurance",
    description:
      "Insurance solutions tailored for growing businesses and enterprises.",
  },
];

const benefits = [
  "Transparent policy comparison",
  "Dedicated expert assistance",
  "Multiple insurer options",
  "Fast support process",
  "Digital documentation",
  "Customer-first guidance",
];

export default function PoliciesPage() {
  return (
    <main className={styles.page}>
      {/* HERO */}

      <section className={styles.hero}>
        <div className={styles.content}>
          <span className={styles.badge}>
            INSURANCE SOLUTIONS
          </span>

          <h1>
            Find Coverage That
            <span> Fits Your Needs</span>
          </h1>

          <p>
            Explore a range of insurance options designed to help
            individuals, families, and businesses protect what
            matters most.
          </p>

          <Link href="#categories" className={styles.primaryBtn}>
            Explore Policies
          </Link>
        </div>

        <div className={styles.heroImage}>
          <Image
            src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=1600&q=80"
            alt="Insurance Planning"
            fill
            priority
          />
        </div>
      </section>

      {/* POLICY TYPES */}

      <section id="categories" className={styles.categories}>
        <div className={styles.heading}>
          <span>POLICY OPTIONS</span>

          <h2>
            Insurance Solutions For Every Stage Of Life
          </h2>

          <p>
            Discover coverage options designed around your
            personal and professional needs.
          </p>
        </div>

        <div className={styles.grid}>
          {policies.map((item, index) => (
            <div key={index} className={styles.card}>
              <div className={styles.icon}>
                {item.icon}
              </div>

              <h3>{item.title}</h3>

              <p>{item.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* HOW IT WORKS */}

      <section className={styles.process}>
        <div className={styles.heading}>
          <span>HOW IT WORKS</span>

          <h2>
            A Simple Insurance Journey
          </h2>
        </div>

        <div className={styles.steps}>
          <div className={styles.step}>
            <h3>01</h3>
            <h4>Share Requirements</h4>
            <p>
              Tell us your needs and coverage preferences.
            </p>
          </div>

          <div className={styles.step}>
            <h3>02</h3>
            <h4>Compare Options</h4>
            <p>
              Explore multiple policy choices from trusted providers.
            </p>
          </div>

          <div className={styles.step}>
            <h3>03</h3>
            <h4>Choose Coverage</h4>
            <p>
              Select a plan aligned with your goals and budget.
            </p>
          </div>

          <div className={styles.step}>
            <h3>04</h3>
            <h4>Get Support</h4>
            <p>
              Receive assistance throughout your insurance journey.
            </p>
          </div>
        </div>
      </section>

      {/* BENEFITS */}

      <section className={styles.benefits}>
        <div className={styles.heading}>
          <span>WHY CHOOSE VISEZY</span>

          <h2>
            Benefits Of Working With Us
          </h2>
        </div>

        <div className={styles.benefitGrid}>
          {benefits.map((item, index) => (
            <div key={index} className={styles.benefit}>
              <FiCheckCircle />
              <span>{item}</span>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ */}

      <section className={styles.faq}>
        <div className={styles.heading}>
          <span>FAQ</span>

          <h2>
            Frequently Asked Questions
          </h2>
        </div>

        <div className={styles.faqGrid}>
          <div className={styles.faqCard}>
            <h4>How do I choose a policy?</h4>
            <p>
              Compare coverage features, benefits, and suitability
              for your personal requirements.
            </p>
          </div>

          <div className={styles.faqCard}>
            <h4>Can I compare multiple options?</h4>
            <p>
              Yes. Reviewing different plans helps you make
              informed decisions.
            </p>
          </div>

          <div className={styles.faqCard}>
            <h4>Do I receive assistance?</h4>
            <p>
              Our team helps simplify policy evaluation and
              selection.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}

      <section className={styles.cta}>
        <div className={styles.ctaContent}>
          <h2>
            Ready To Explore Insurance Options?
          </h2>

          <p>
            Discover coverage solutions tailored around
            your priorities.
          </p>

          <Link href="/" className={styles.ctaBtn}>
            Get Started
          </Link>
        </div>

        <div className={styles.ctaImage}>
          <Image
            src="https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=1200&q=80"
            alt="Insurance Support"
            fill
          />
        </div>
      </section>
    </main>
  );
}