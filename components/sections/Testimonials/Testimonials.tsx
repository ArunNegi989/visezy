import styles from "./Testimonials.module.css";
import { HiStar } from "react-icons/hi";

const testimonials = [
  {
    name: "Rahul Sharma",
    role: "Business Owner",
    review:
      "Visezy helped me compare policies from multiple providers and saved me thousands every year.",
  },
  {
    name: "Priya Verma",
    role: "Working Professional",
    review:
      "The process was simple, transparent and incredibly fast. Highly recommended.",
  },
  {
    name: "Amit Patel",
    role: "Entrepreneur",
    review:
      "Excellent support team and clear comparisons. Made choosing insurance effortless.",
  },
];

export default function Testimonials() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <span className={styles.badge}>
          Testimonials
        </span>

        <h2>
          Loved By Customers
          Across India
        </h2>

        <p>
          Real experiences from people who
          trusted Visezy for their insurance
          decisions.
        </p>

        <div className={styles.grid}>
          {testimonials.map((item, index) => (
            <div
              className={styles.card}
              key={index}
            >
              <div className={styles.stars}>
                {[...Array(5)].map((_, i) => (
                  <HiStar key={i} />
                ))}
              </div>

              <p className={styles.review}>
                "{item.review}"
              </p>

              <div className={styles.user}>
                <div className={styles.avatar}>
                  {item.name.charAt(0)}
                </div>

                <div>
                  <h4>{item.name}</h4>
                  <span>{item.role}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}