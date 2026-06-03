import styles from "./Hero.module.css";
import {
  HiOutlineShieldCheck,
  HiOutlineStar,
  HiOutlineLightningBolt,
} from "react-icons/hi";

export default function Hero() {
  return (
<section id="hero" className={styles.hero}>
      <div className={styles.blurOne}></div>
      <div className={styles.blurTwo}></div>

      <div className={styles.gridPattern}></div>

      <div className={styles.container}>
        {/* LEFT SIDE */}

        <div className={styles.left}>
          <span className={styles.badge}>
            Trusted by 5000+ customers
          </span>

          <h1>
            Insurance Made
            <span> Simple,</span>
            <br />
            Transparent &
            Affordable
          </h1>

          <p>
            Compare plans from India's leading
            insurance providers, discover the
            right coverage and save more — all
            through a single platform.
          </p>

          <div className={styles.buttons}>
            <button className={styles.primaryBtn}>
              Get Free Quote
            </button>

            <button className={styles.secondaryBtn}>
              Compare Plans
            </button>
          </div>

          <div className={styles.trustRow}>
            <div>
              <HiOutlineShieldCheck />
              Secure Platform
            </div>

            <div>
              <HiOutlineStar />
              4.9 Rating
            </div>

            <div>
              <HiOutlineLightningBolt />
              Instant Quotes
            </div>
          </div>

          <div className={styles.stats}>
            <div>
              <h3>30+</h3>
              <span>Providers</span>
            </div>

            <div>
              <h3>5000+</h3>
              <span>Customers</span>
            </div>

            <div>
              <h3>98%</h3>
              <span>Claim Support</span>
            </div>
          </div>
        </div>

        {/* RIGHT SIDE */}

        <div className={styles.right}>
          <div className={styles.floatingTop}>
            Save up to 20%
          </div>

          <div className={styles.dashboard}>
            <div className={styles.dashboardHeader}>
              <span>Insurance Dashboard</span>

              <span className={styles.liveBadge}>
                Live
              </span>
            </div>

            <div className={styles.savings}>
              <p>Average Savings</p>
              <h2>₹15,000</h2>
            </div>

            <div className={styles.metrics}>
              <div>
                <strong>30+</strong>
                <span>Providers</span>
              </div>

              <div>
                <strong>4.9★</strong>
                <span>Rating</span>
              </div>

              <div>
                <strong>24/7</strong>
                <span>Support</span>
              </div>
            </div>

            <div className={styles.chart}>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
            </div>
          </div>

          <div className={styles.floatingBottom}>
            Instant Quote Available
          </div>
        </div>
      </div>
    </section>
  );
}