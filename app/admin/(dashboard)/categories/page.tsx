"use client";

import { motion } from "framer-motion";

import {
  FaPlus,
  FaSearch,
  FaEdit,
  FaTrash,
  FaLayerGroup,
} from "react-icons/fa";

import styles from "./categories.module.css";

const categories = [
  {
    id: 1,
    name: "Health Insurance",
    slug: "health-insurance",
    blogs: 28,
    status: "Active",
  },
  {
    id: 2,
    name: "Car Insurance",
    slug: "car-insurance",
    blogs: 16,
    status: "Active",
  },
  {
    id: 3,
    name: "Life Insurance",
    slug: "life-insurance",
    blogs: 12,
    status: "Active",
  },
  {
    id: 4,
    name: "Travel Insurance",
    slug: "travel-insurance",
    blogs: 4,
    status: "Inactive",
  },
];

export default function CategoriesPage() {
  return (
    <div className={styles.wrapper}>
      <motion.div
        className={styles.hero}
        initial={{ opacity: 0, y: 25 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <div>
          <span className={styles.badge}>
            Content Organization
          </span>

          <h1>Categories Management</h1>

          <p>
            Create and manage website
            categories efficiently.
          </p>
        </div>

        <button className={styles.addBtn}>
          <FaPlus />
          Add Category
        </button>
      </motion.div>

      <div className={styles.statsGrid}>
        <div className={styles.statCard}>
          <FaLayerGroup />
          <div>
            <span>Total Categories</span>
            <h2>24</h2>
          </div>
        </div>

        <div className={styles.statCard}>
          <FaLayerGroup />
          <div>
            <span>Active</span>
            <h2>18</h2>
          </div>
        </div>

        <div className={styles.statCard}>
          <FaLayerGroup />
          <div>
            <span>Inactive</span>
            <h2>6</h2>
          </div>
        </div>
      </div>

      <div className={styles.tableCard}>
        <div className={styles.tableHeader}>
          <div className={styles.search}>
            <FaSearch />

            <input
              type="text"
              placeholder="Search categories..."
            />
          </div>

          <button className={styles.addBtnSmall}>
            <FaPlus />
            New Category
          </button>
        </div>

        <div className={styles.tableWrapper}>
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Slug</th>
                <th>Blogs</th>
                <th>Status</th>
                <th>Actions</th>
              </tr>
            </thead>

            <tbody>
              {categories.map((category) => (
                <motion.tr
                  key={category.id}
                 
                >
                  <td>
                    <div className={styles.nameCell}>
                      <div
                        className={
                          styles.categoryIcon
                        }
                      >
                        <FaLayerGroup />
                      </div>

                      <span>
                        {category.name}
                      </span>
                    </div>
                  </td>

                  <td>{category.slug}</td>

                  <td>
                    <span
                      className={
                        styles.blogCount
                      }
                    >
                      {category.blogs}
                    </span>
                  </td>

                  <td>
                    <span
                      className={
                        category.status ===
                        "Active"
                          ? styles.active
                          : styles.inactive
                      }
                    >
                      {category.status}
                    </span>
                  </td>

                  <td>
                    <div
                      className={
                        styles.actions
                      }
                    >
                      <button>
                        <FaEdit />
                      </button>

                      <button>
                        <FaTrash />
                      </button>
                    </div>
                  </td>
                </motion.tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}