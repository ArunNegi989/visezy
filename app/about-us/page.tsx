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
} from "react-icons/fi";

export const metadata = {
  title: "About Us | Visezy",
  description:
    "Learn about Visezy, our mission, values, and commitment to making insurance simple and accessible.",
};

const stats = [
  {
    number: "10K+",
    label: "Policies Assisted",
  },
  {
    number: "98%",
    label: "Client Satisfaction",
  },
  {
    number: "24/7",
    label: "Customer Support",
  },
  {
    number: "100%",
    label: "Transparent Guidance",
  },
];

const values = [
  {
    icon: <FiShield />,
    title: "Transparency",
    description:
      "Clear guidance with no hidden surprises. Every recommendation is made with your interests in mind.",
  },
  {
    icon: <FiUsers />,
    title: "Customer First",
    description:
      "Every solution is tailored around your requirements, budget, and long-term goals.",
  },
  {
    icon: <FiAward />,
    title: "Integrity",
    description:
      "Trust is earned through consistent service, honest communication, and accountability.",
  },
  {
    icon: <FiTrendingUp />,
    title: "Expert Guidance",
    description:
      "Our team helps simplify complex insurance decisions through professional support.",
  },
];

const features = [
  "Personalized insurance recommendations",
  "Fast and hassle-free assistance",
  "Transparent comparison process",
  "Dedicated customer support",
  "Coverage options from trusted insurers",
  "Digital-first experience",
];

export default function AboutUsPage() {
  return (
    <main className={styles.page}>
      {/* HERO */}
      <section className={styles.hero}>
        <div className={styles.heroGlow}></div>

        <div className={styles.heroContent}>
          <span className={styles.badge}>ABOUT VISEZY</span>

          <h1>
            Making Insurance
            <span> Simple, Transparent & Trusted</span>
          </h1>

          <p>
            We help individuals and businesses navigate insurance confidently
            through expert guidance, transparent advice, and customer-focused
            service.
          </p>

          <div className={styles.heroActions}>
            <Link href="/policies" className={styles.primaryBtn}>
              Explore Policies
            </Link>

            <Link href="#story" className={styles.secondaryBtn}>
              Our Story
            </Link>
          </div>
        </div>

        <div className={styles.heroImage}>
          <Image
            src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=1200&q=80"
            alt="Insurance Consultation"
            fill
            priority
          />
        </div>
      </section>

      {/* STATS */}
      <section className={styles.statsSection}>
        <div className={styles.statsGrid}>
          {stats.map((item, index) => (
            <div className={styles.statCard} key={index}>
              <h3>{item.number}</h3>
              <p>{item.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* STORY */}
      <section id="story" className={styles.story}>
        <div className={styles.storyImage}>
          <Image
            src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=1200&q=80"
            alt="Our Team"
            fill
          />
        </div>

        <div className={styles.storyContent}>
          <span className={styles.sectionTag}>OUR STORY</span>

          <h2>
            Helping Customers Make Better Insurance Decisions
          </h2>

          <p>
            Insurance should provide confidence, not confusion. Our mission is
            to simplify the process and help customers understand their options
            clearly.
          </p>

          <p>
            Through technology, expertise, and customer-first service, we work
            to create a seamless experience that empowers informed decisions.
          </p>

          <div className={styles.checkList}>
            {features.map((item, index) => (
              <div key={index} className={styles.checkItem}>
                <FiCheckCircle />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MISSION */}
      <section className={styles.missionSection}>
        <div className={styles.missionCard}>
          <FiTarget />
          <h3>Our Mission</h3>

          <p>
            To make insurance accessible, understandable, and valuable through
            transparent advice and modern digital experiences.
          </p>
        </div>

        <div className={styles.missionCard}>
          <FiTrendingUp />
          <h3>Our Vision</h3>

          <p>
            To become a trusted destination where individuals and businesses
            confidently discover insurance solutions tailored to their needs.
          </p>
        </div>
      </section>

      {/* VALUES */}
      <section className={styles.values}>
        <div className={styles.heading}>
          <span className={styles.sectionTag}>OUR VALUES</span>

          <h2>Principles That Guide Everything We Do</h2>

          <p>
            These values define how we serve customers and build long-term
            relationships based on trust and excellence.
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

      {/* CTA */}
      <section className={styles.cta}>
        <div className={styles.ctaContent}>
          <span>Ready To Get Started?</span>

          <h2>
            Find Insurance Coverage That Fits Your Needs
          </h2>

          <p>
            Connect with our team and discover policy options designed around
            your goals and priorities.
          </p>

          <Link href="/policies" className={styles.ctaBtn}>
            View Policies
          </Link>
        </div>

        <div className={styles.ctaImage}>
          <Image
            src="https://images.unsplash.com/photo-1556740749-887f6717d7e4?w=1200&q=80"
            alt="Customer Support"
            fill
          />
        </div>
      </section>
    </main>
  );
}