"use client";

import { motion } from "framer-motion";
import {
  FaSave,
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
} from "react-icons/fa";

import styles from "./footer.module.css";

export default function FooterPage() {
  return (
    <div className={styles.wrapper}>
      <motion.div
        className={styles.hero}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <div>
          <span className={styles.badge}>
            Website Footer
          </span>

          <h1>Footer Management</h1>

          <p>
            Manage company information,
            footer links and social media.
          </p>
        </div>
      </motion.div>

      <div className={styles.contentGrid}>
        <div className={styles.formCard}>
          <h3>Footer Settings</h3>

          <div className={styles.field}>
            <label>Company Name</label>
            <input
              defaultValue="Visezy"
            />
          </div>

          <div className={styles.field}>
            <label>Footer Description</label>

            <textarea
              rows={4}
              defaultValue="Helping users compare and choose the best insurance plans."
            />
          </div>

          <div className={styles.field}>
            <label>Quick Links</label>
            <input
              defaultValue="Home, Policies, Blogs, Contact"
            />
          </div>

          <div className={styles.field}>
            <label>Policy Links</label>
            <input
              defaultValue="Privacy Policy, Terms & Conditions"
            />
          </div>

          <div className={styles.field}>
            <label>Copyright Text</label>
            <input
              defaultValue="© 2026 Visezy. All Rights Reserved."
            />
          </div>

          <button className={styles.saveBtn}>
            <FaSave />
            Save Changes
          </button>
        </div>

        <div className={styles.previewCard}>
          <h3>Footer Preview</h3>

          <div className={styles.preview}>
            <div>
              <h2>Visezy</h2>

              <p>
                Helping users compare and
                choose the best insurance
                plans.
              </p>
            </div>

            <div>
              <h4>Quick Links</h4>

              <ul>
                <li>Home</li>
                <li>Policies</li>
                <li>Blogs</li>
                <li>Contact</li>
              </ul>
            </div>

            <div>
              <h4>Policies</h4>

              <ul>
                <li>Privacy Policy</li>
                <li>Terms</li>
              </ul>
            </div>

            <div>
              <h4>Follow Us</h4>

              <div className={styles.socials}>
                <FaFacebook />
                <FaInstagram />
                <FaLinkedin />
                <FaTwitter />
              </div>
            </div>
          </div>

          <div className={styles.copyright}>
            © 2026 Visezy. All Rights Reserved.
          </div>
        </div>
      </div>
    </div>
  );
}