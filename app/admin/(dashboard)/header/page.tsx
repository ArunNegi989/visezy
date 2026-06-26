"use client";

import { motion } from "framer-motion";
import { FaSave, FaPlus } from "react-icons/fa";

import styles from "./header.module.css";

export default function HeaderPage() {
  return (
    <div className={styles.wrapper}>
      <motion.div
        className={styles.hero}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <div>
          <span className={styles.badge}>
            Website Navigation
          </span>

          <h1>Header Management</h1>

          <p>
            Manage logo, navigation menu
            and call-to-action buttons.
          </p>
        </div>
      </motion.div>

      <div className={styles.contentGrid}>
        <div className={styles.formCard}>
          <h3>Header Settings</h3>

          <div className={styles.field}>
            <label>Website Logo</label>
            <input
              defaultValue="visezy-logo.png"
            />
          </div>

          <div className={styles.field}>
            <label>Navigation Item 1</label>
            <input
              defaultValue="Home"
            />
          </div>

          <div className={styles.field}>
            <label>Navigation Item 2</label>
            <input
              defaultValue="Policies"
            />
          </div>

          <div className={styles.field}>
            <label>Navigation Item 3</label>
            <input
              defaultValue="Blogs"
            />
          </div>

          <div className={styles.field}>
            <label>CTA Button Text</label>
            <input
              defaultValue="Get Quote"
            />
          </div>

          <div className={styles.buttons}>
            <button className={styles.addBtn}>
              <FaPlus />
              Add Menu Item
            </button>

            <button className={styles.saveBtn}>
              <FaSave />
              Save Changes
            </button>
          </div>
        </div>

        <div className={styles.previewCard}>
          <h3>Live Preview</h3>

          <div className={styles.previewHeader}>
            <div className={styles.logo}>
              VISEZY
            </div>

            <div className={styles.nav}>
              <span>Home</span>
              <span>Policies</span>
              <span>Blogs</span>
              <span>Contact</span>
            </div>

            <button>
              Get Quote
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}