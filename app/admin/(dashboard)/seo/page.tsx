"use client";

import { motion } from "framer-motion";
import { FaSave, FaGlobe } from "react-icons/fa";

import styles from "./seo.module.css";

export default function SEOPage() {
  return (
    <div className={styles.wrapper}>
      <motion.div
        className={styles.hero}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <div>
          <span className={styles.badge}>
            Search Engine Optimization
          </span>

          <h1>SEO Management</h1>

          <p>
            Manage meta tags, keywords,
            Open Graph settings and
            search engine visibility.
          </p>
        </div>
      </motion.div>

      <div className={styles.contentGrid}>
        <div className={styles.formCard}>
          <h3>SEO Settings</h3>

          <div className={styles.field}>
            <label>Meta Title</label>
            <input
              defaultValue="Visezy - Compare Insurance Plans"
            />
          </div>

          <div className={styles.field}>
            <label>Meta Description</label>
            <textarea
              rows={5}
              defaultValue="Compare and choose the best insurance plans with expert guidance."
            />
          </div>

          <div className={styles.field}>
            <label>Keywords</label>
            <input
              defaultValue="insurance, health insurance, car insurance, life insurance"
            />
          </div>

          <div className={styles.field}>
            <label>Canonical URL</label>
            <input
              defaultValue="https://www.visezy.com"
            />
          </div>

          <div className={styles.field}>
            <label>Open Graph Image</label>
            <input
              defaultValue="/og-image.jpg"
            />
          </div>

          <button className={styles.saveBtn}>
            <FaSave />
            Save SEO Settings
          </button>
        </div>

        <div className={styles.previewCard}>
          <h3>Google Preview</h3>

          <div className={styles.preview}>
            <FaGlobe />

            <span>
              https://www.visezy.com
            </span>

            <h2>
              Visezy - Compare Insurance
              Plans
            </h2>

            <p>
              Compare and choose the best
              insurance plans with expert
              guidance and instant
              comparisons.
            </p>
          </div>

          <div className={styles.seoStats}>
            <div>
              <span>SEO Score</span>
              <h4>92/100</h4>
            </div>

            <div>
              <span>Keywords</span>
              <h4>124</h4>
            </div>

            <div>
              <span>Indexed Pages</span>
              <h4>38</h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}