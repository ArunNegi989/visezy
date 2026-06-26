"use client";

import { motion } from "framer-motion";
import { FaImage, FaSave } from "react-icons/fa";

import styles from "./hero.module.css";

export default function HeroCMSPage() {
  return (
    <div className={styles.wrapper}>
      <motion.div
        className={styles.heroBanner}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <div>
          <span className={styles.badge}>
            Homepage CMS
          </span>

          <h1>Hero Section</h1>

          <p>
            Manage homepage hero content,
            CTA buttons and banner image.
          </p>
        </div>
      </motion.div>

      <div className={styles.contentGrid}>
        <div className={styles.formCard}>
          <h3>Hero Content</h3>

          <div className={styles.field}>
            <label>Hero Title</label>

            <input
              defaultValue="Compare Insurance Plans & Save More"
            />
          </div>

          <div className={styles.field}>
            <label>Hero Subtitle</label>

            <textarea
              rows={5}
              defaultValue="Find the best insurance coverage for your needs with expert guidance and instant comparisons."
            />
          </div>

          <div className={styles.field}>
            <label>Primary Button</label>

            <input
              defaultValue="Get Started"
            />
          </div>

          <div className={styles.field}>
            <label>Secondary Button</label>

            <input
              defaultValue="Learn More"
            />
          </div>

          <button className={styles.saveBtn}>
            <FaSave />
            Save Changes
          </button>
        </div>

        <div className={styles.previewCard}>
          <div className={styles.previewImage}>
            <FaImage />
          </div>

          <h3>Hero Preview</h3>

          <h2>
            Compare Insurance Plans &
            Save More
          </h2>

          <p>
            Find the best insurance
            coverage for your needs with
            expert guidance.
          </p>

          <div className={styles.previewBtns}>
            <button>
              Get Started
            </button>

            <button>
              Learn More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}