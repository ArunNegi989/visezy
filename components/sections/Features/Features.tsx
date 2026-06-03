import styles from "./Features.module.css";
import {
  HiOutlineShieldCheck,
  HiOutlineCurrencyDollar,
  HiOutlineClock,
  HiOutlineUserGroup,
} from "react-icons/hi";

const features = [
  {
    icon: <HiOutlineCurrencyDollar />,
    title: "Save More",
    description:
      "Compare plans from multiple providers and reduce insurance costs.",
  },
  {
    icon: <HiOutlineShieldCheck />,
    title: "Trusted Coverage",
    description:
      "Access verified insurance partners with reliable coverage.",
  },
  {
    icon: <HiOutlineClock />,
    title: "Instant Quotes",
    description:
      "Get personalized quotes within minutes without paperwork.",
  },
  {
    icon: <HiOutlineUserGroup />,
    title: "Expert Advisors",
    description:
      "Dedicated support team to help choose the right plan.",
  },
];

export default function Features() {
  return (
  <section id="features" className={styles.features}>
      <div className={styles.container}>
        <span className={styles.badge}>
          Why Choose Visezy
        </span>

        <h2>
          Everything You Need To Find
          Better Insurance
        </h2>

        <p>
          Compare, save and manage your insurance
          from a single platform.
        </p>

        <div className={styles.grid}>
          {features.map((feature, index) => (
            <div
              key={index}
              className={styles.card}
            >
              <div className={styles.icon}>
                {feature.icon}
              </div>

              <h3>{feature.title}</h3>

              <p>{feature.description}</p>

              <span className={styles.arrow}>
                →
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}