"use client";

import styles from "./Footer.module.css";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  FaLinkedinIn,
  FaInstagram,
} from "react-icons/fa6";

const recentBlogs = [
  {
    title: "Top Hiring Trends in 2026",
    date: "June 2026",
  },
  {
    title: "How AI is Transforming Recruitment",
    date: "May 2026",
  },
  {
    title: "Building High-Performance Teams",
    date: "April 2026",
  },
];

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        
        {/* Brand Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          viewport={{ once: true }}
        >
          <div className={styles.logoWrapper}>
            <Image
              src="/visezy-staffing-solutions-footer-logo.png"
              alt="Visezy Staffing Solutions"
              width={220}
              height={70}
              priority
            />
          </div>

          <p className={styles.description}>
            Staffing Solutions focused on connecting businesses with
            exceptional talent and helping professionals discover
            meaningful career opportunities.
          </p>

          <div className={styles.socials}>
            <a
              href="https://www.linkedin.com/company/visezy-staffing-solutions/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <FaLinkedinIn />
            </a>

            <a
              href="https://www.instagram.com/visezy_staffing"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
            >
              <FaInstagram />
            </a>
          </div>
        </motion.div>

        {/* Quick Links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h3>Quick Links</h3>

          <ul className={styles.links}>
            <li>
              <Link href="/">Home</Link>
            </li>

            <li>
              <Link href="/about-us">About Us</Link>
            </li>

            <li>
              <Link href="/policies">Privacy Policy</Link>
            </li>
          </ul>
        </motion.div>

        {/* Recent Blogs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h3>Recent Blogs</h3>

          <div className={styles.blogList}>
            {recentBlogs.map((blog) => (
              <Link
                key={blog.title}
                href="/blog"
                className={styles.blogLink}
              >
                <div className={styles.blogCard}>
                  <h4>{blog.title}</h4>
                  <span>{blog.date}</span>
                </div>
              </Link>
            ))}
          </div>
        </motion.div>

        {/* Contact */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <h3>Contact</h3>

          <ul className={styles.contact}>
            <li>📞 +91 7453-852-331</li>
            <li>✉ info@visezy.com</li>
            <li>📍 Dehradun, Uttarakhand, India</li>
          </ul>
        </motion.div>
      </div>

      <div className={styles.bottomBar}>
        © {new Date().getFullYear()} Visezy Staffing Solutions. All Rights Reserved.
      </div>
    </footer>
  );
};