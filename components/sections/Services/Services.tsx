import styles from "./Services.module.css";
import {
  HiOutlineShieldCheck,
  HiOutlineHeart,
  HiOutlineTruck,
  HiOutlineHome,
} from "react-icons/hi";

const services = [
  {
    icon: <HiOutlineShieldCheck />,
    title: "Car Insurance",
    description:
      "Comprehensive and third-party car insurance plans from trusted providers.",
  },
  {
    icon: <HiOutlineHeart />,
    title: "Health Insurance",
    description:
      "Protect yourself and your family with flexible health coverage options.",
  },
  {
    icon: <HiOutlineTruck />,
    title: "Life Insurance",
    description:
      "Secure your loved ones with reliable life insurance solutions.",
  },
  {
    icon: <HiOutlineHome />,
    title: "Travel Insurance",
    description:
      "Travel with confidence using global coverage and emergency assistance.",
  },
];

export default function Services() {
  return (
  <section id="services" className={styles.section}>
        <div className={styles.container}>
        <span className={styles.badge}>
          Our Services
        </span>

        <h2>
          Insurance Solutions
          For Every Need
        </h2>

        <p>
          Explore a wide range of insurance
          products tailored to individuals,
          families and businesses.
        </p>

        <div className={styles.grid}>
          {services.map((service, index) => (
            <div
              key={index}
              className={styles.card}
            >
              <div className={styles.icon}>
                {service.icon}
              </div>

              <h3>{service.title}</h3>

              <p>{service.description}</p>

              <button>
                Learn More →
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}