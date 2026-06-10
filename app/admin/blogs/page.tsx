"use client";

import { motion } from "framer-motion";

import {
  FaPlus,
  FaSearch,
  FaEdit,
  FaTrash,
  FaEye,
} from "react-icons/fa";

import styles from "./blogs.module.css";

const blogs = [
  {
    id: 1,
    image:
      "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=400",
    title: "Complete Health Insurance Guide",
    excerpt:
      "Everything you need to know about health insurance policies.",
    category: "Health Insurance",
    author: "Admin",
    date: "10 Jun 2026",
    status: "Published",
  },
  {
    id: 2,
    image:
      "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=400",
    title: "Car Insurance Tips",
    excerpt:
      "Learn how to save money while choosing the right coverage.",
    category: "Car Insurance",
    author: "Admin",
    date: "08 Jun 2026",
    status: "Draft",
  },
  {
    id: 3,
    image:
      "https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?w=400",
    title: "Life Insurance Planning",
    excerpt:
      "Long term financial protection for your family.",
    category: "Life Insurance",
    author: "Admin",
    date: "05 Jun 2026",
    status: "Published",
  },
];

export default function BlogsPage() {
  return (
  <div className={styles.wrapper}>
    <motion.div
      className={styles.hero}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
    >
      <div>
        <span className={styles.badge}>
          Content Management
        </span>

        <h1>Blogs Management</h1>

        <p>
          Manage, edit and publish all
          website blogs from one place.
        </p>
      </div>

      <button className={styles.addBtn}>
        <FaPlus />
        Add Blog
      </button>
    </motion.div>

    <div className={styles.statsRow}>
      <div className={styles.statCard}>
        <span>Total Blogs</span>
        <h2>128</h2>
      </div>

      <div className={styles.statCard}>
        <span>Published</span>
        <h2>96</h2>
      </div>

      <div className={styles.statCard}>
        <span>Drafts</span>
        <h2>22</h2>
      </div>

      <div className={styles.statCard}>
        <span>Reviews</span>
        <h2>10</h2>
      </div>
    </div>

    <div className={styles.contentCard}>
      <div className={styles.toolbar}>
        <div className={styles.search}>
          <FaSearch />
          <input
            placeholder="Search blogs..."
          />
        </div>

        <select className={styles.filter}>
          <option>All Status</option>
          <option>Published</option>
          <option>Draft</option>
        </select>
      </div>

      <div className={styles.blogGrid}>
        {blogs.map((blog) => (
          <motion.div
            key={blog.id}
            className={styles.blogCard}
            whileHover={{ y: -6 }}
          >
            <img
              src={blog.image}
              alt={blog.title}
              className={styles.blogImage}
            />

            <div className={styles.blogBody}>
              <div className={styles.topRow}>
                <span
                  className={
                    styles.category
                  }
                >
                  {blog.category}
                </span>

                <span
                  className={
                    blog.status ===
                    "Published"
                      ? styles.published
                      : styles.draft
                  }
                >
                  {blog.status}
                </span>
              </div>

              <h3>{blog.title}</h3>

              <p>{blog.excerpt}</p>

              <div className={styles.meta}>
                <span>
                  {blog.author}
                </span>

                <span>
                  {blog.date}
                </span>
              </div>

              <div
                className={
                  styles.actions
                }
              >
                <button>
                  <FaEye />
                </button>

                <button>
                  <FaEdit />
                </button>

                <button>
                  <FaTrash />
                </button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </div>
);
}