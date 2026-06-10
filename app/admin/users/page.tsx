"use client";

import { motion } from "framer-motion";

import {
  FaPlus,
  FaSearch,
  FaEdit,
  FaTrash,
  FaEye,
  FaUsers,
  FaUserCheck,
} from "react-icons/fa";

import styles from "./users.module.css";

const users = [
  {
    id: 1,
    name: "Rahul Sharma",
    email: "rahul@gmail.com",
    role: "Admin",
    status: "Active",
    joined: "12 Jun 2026",
  },
  {
    id: 2,
    name: "Priya Patel",
    email: "priya@gmail.com",
    role: "Editor",
    status: "Active",
    joined: "10 Jun 2026",
  },
  {
    id: 3,
    name: "Amit Singh",
    email: "amit@gmail.com",
    role: "Author",
    status: "Inactive",
    joined: "08 Jun 2026",
  },
  {
    id: 4,
    name: "Neha Verma",
    email: "neha@gmail.com",
    role: "Editor",
    status: "Active",
    joined: "05 Jun 2026",
  },
];

export default function UsersPage() {
  return (
    <div className={styles.wrapper}>
      <motion.div
        className={styles.hero}
        initial={{ opacity: 0, y: 25 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <div>
          <span className={styles.badge}>
            User Management
          </span>

          <h1>Manage Users</h1>

          <p>
            Control administrators,
            editors and authors.
          </p>
        </div>

        <button className={styles.addBtn}>
          <FaPlus />
          Add User
        </button>
      </motion.div>

      <div className={styles.statsGrid}>
        <div className={styles.statCard}>
          <FaUsers />
          <div>
            <span>Total Users</span>
            <h2>124</h2>
          </div>
        </div>

        <div className={styles.statCard}>
          <FaUserCheck />
          <div>
            <span>Active Users</span>
            <h2>98</h2>
          </div>
        </div>

        <div className={styles.statCard}>
          <FaUsers />
          <div>
            <span>Admins</span>
            <h2>12</h2>
          </div>
        </div>
      </div>

      <div className={styles.tableCard}>
        <div className={styles.tableHeader}>
          <div className={styles.search}>
            <FaSearch />
            <input
              placeholder="Search users..."
            />
          </div>

          <button className={styles.addBtnSmall}>
            <FaPlus />
            New User
          </button>
        </div>

        <div className={styles.tableWrapper}>
          <table>
            <thead>
              <tr>
                <th>User</th>
                <th>Role</th>
                <th>Status</th>
                <th>Joined</th>
                <th>Actions</th>
              </tr>
            </thead>

            <tbody>
              {users.map((user) => (
                <motion.tr
                  key={user.id}
                 
                >
                  <td>
                    <div
                      className={
                        styles.userCell
                      }
                    >
                      <div
                        className={
                          styles.avatar
                        }
                      >
                        {user.name
                          .charAt(0)}
                      </div>

                      <div>
                        <h4>
                          {user.name}
                        </h4>

                        <p>
                          {user.email}
                        </p>
                      </div>
                    </div>
                  </td>

                  <td>
                    <span
                      className={
                        styles.role
                      }
                    >
                      {user.role}
                    </span>
                  </td>

                  <td>
                    <span
                      className={
                        user.status ===
                        "Active"
                          ? styles.active
                          : styles.inactive
                      }
                    >
                      {user.status}
                    </span>
                  </td>

                  <td>{user.joined}</td>

                  <td>
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