import styles from "./WhyChooseUs.module.css";
import {
  HiOutlineShieldCheck,
  HiOutlineLightningBolt,
  HiOutlineUserGroup,
  HiOutlineChartBar,
} from "react-icons/hi";

const items = [
  {
    icon: <HiOutlineShieldCheck />,
    title: "Trusted Coverage",
    description:
      "Access plans from verified insurance providers with complete transparency.",
  },
  {
    icon: <HiOutlineLightningBolt />,
    title: "Instant Comparison",
    description:
      "Compare multiple policies side by side and choose the best fit quickly.",
  },
  {
    icon: <HiOutlineUserGroup />,
    title: "Expert Guidance",
    description:
      "Dedicated advisors help you make informed insurance decisions.",
  },
  {
    icon: <HiOutlineChartBar />,
    title: "Maximum Savings",
    description:
      "Optimize your coverage while reducing unnecessary premium costs.",
  },
];

export default function WhyChooseUs() {
  return (
  <section id="why-choose-us" className={styles.section}>
      <div className={styles.container}>
        <div className={styles.left}>
          <span className={styles.badge}>
            Why Choose Visezy
          </span>

          <h2>
            Smarter Insurance Decisions
            Made Effortless
          </h2>

          <p>
            We simplify insurance by combining
            comparison, transparency and expert
            support into one seamless platform.
          </p>

          <div className={styles.stats}>
            <div>
              <h3>5000+</h3>
              <span>Happy Customers</span>
            </div>

            <div>
              <h3>30+</h3>
              <span>Insurance Providers</span>
            </div>

            <div>
              <h3>98%</h3>
              <span>Customer Satisfaction</span>
            </div>
          </div>
        </div>

        <div className={styles.right}>
          {items.map((item, index) => (
            <div
              className={styles.card}
              key={index}
            >
              <div className={styles.icon}>
                {item.icon}
              </div>

              <div>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}