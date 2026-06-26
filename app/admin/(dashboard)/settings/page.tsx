"use client";

import { motion } from "framer-motion";

import {
  FaSave,
  FaGlobe,
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
} from "react-icons/fa";

import styles from "./settings.module.css";

export default function SettingsPage() {
  return (
    <div className={styles.wrapper}>
      <motion.div
        className={styles.hero}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <div>
          <span className={styles.badge}>
            Website Configuration
          </span>

          <h1>Settings</h1>

          <p>
            Manage global website settings,
            contact details and business
            information.
          </p>
        </div>
      </motion.div>

      <div className={styles.contentGrid}>
        <div className={styles.formCard}>
          <h3>General Settings</h3>

          <div className={styles.field}>
            <label>Website Name</label>

            <input
              defaultValue="Visezy"
            />
          </div>

          <div className={styles.field}>
            <label>Website URL</label>

            <input
              defaultValue="https://visezy.in"
            />
          </div>

          <div className={styles.field}>
            <label>Admin Email</label>

            <input
              defaultValue="admin@visezy.in"
            />
          </div>

          <div className={styles.field}>
            <label>Phone Number</label>

            <input
              defaultValue="+91 9876543210"
            />
          </div>

          <div className={styles.field}>
            <label>Office Address</label>

            <textarea
              rows={4}
              defaultValue="H.No-84, Chandar Nagar, Dehradun City, Dehradun, Uttarakhand, India, 248001"
            />
          </div>

          <button className={styles.saveBtn}>
            <FaSave />
            Save Settings
          </button>
        </div>

        <div className={styles.previewCard}>
          <h3>Business Overview</h3>

          <div className={styles.infoCard}>
            <div className={styles.infoRow}>
              <FaGlobe />
              <span>visezy.in</span>
            </div>

            <div className={styles.infoRow}>
              <FaEnvelope />
              <span>
                admin@visezy.in
              </span>
            </div>

            <div className={styles.infoRow}>
              <FaPhone />
              <span>
                +91 9876543210
              </span>
            </div>

            <div className={styles.infoRow}>
              <FaMapMarkerAlt />
              <span>
                Dehradun, Uttarakhand
              </span>
            </div>
          </div>

          <div className={styles.statsGrid}>
            <div>
              <span>Visitors</span>
              <h4>24.5K</h4>
            </div>

            <div>
              <span>Blogs</span>
              <h4>128</h4>
            </div>

            <div>
              <span>Leads</span>
              <h4>356</h4>
            </div>

            <div>
              <span>Users</span>
              <h4>124</h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}