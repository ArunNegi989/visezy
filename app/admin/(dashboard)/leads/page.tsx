"use client";

import { motion } from "framer-motion";

import {
  FaSearch,
  FaEye,
  FaTrash,
  FaPhone,
  FaEnvelope,
  FaUserTie,
} from "react-icons/fa";

import styles from "./leads.module.css";

const leads = [
  {
    id: 1,
    name: "Rahul Sharma",
    email: "rahul@gmail.com",
    phone: "+91 9876543210",
    insurance: "Health Insurance",
    status: "New",
    date: "12 Jun 2026",
  },
  {
    id: 2,
    name: "Priya Patel",
    email: "priya@gmail.com",
    phone: "+91 9988776655",
    insurance: "Car Insurance",
    status: "Contacted",
    date: "10 Jun 2026",
  },
  {
    id: 3,
    name: "Amit Singh",
    email: "amit@gmail.com",
    phone: "+91 8899776655",
    insurance: "Life Insurance",
    status: "Converted",
    date: "08 Jun 2026",
  },
];

export default function LeadsPage() {
  return (
    <div className={styles.wrapper}>
      <motion.div
        className={styles.hero}
        initial={{ opacity: 0, y: 25 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <div>
          <span className={styles.badge}>
            CRM Management
          </span>

          <h1>Leads Management</h1>

          <p>
            Track and manage all customer
            enquiries from one place.
          </p>
        </div>
      </motion.div>

      <div className={styles.statsGrid}>
        <div className={styles.statCard}>
          <FaUserTie />
          <div>
            <span>Total Leads</span>
            <h2>356</h2>
          </div>
        </div>

        <div className={styles.statCard}>
          <FaPhone />
          <div>
            <span>Contacted</span>
            <h2>148</h2>
          </div>
        </div>

        <div className={styles.statCard}>
          <FaEnvelope />
          <div>
            <span>Converted</span>
            <h2>72</h2>
          </div>
        </div>
      </div>

      <div className={styles.tableCard}>
        <div className={styles.tableHeader}>
          <div className={styles.search}>
            <FaSearch />
            <input
              placeholder="Search leads..."
            />
          </div>

          <select>
            <option>All Status</option>
            <option>New</option>
            <option>Contacted</option>
            <option>Converted</option>
          </select>
        </div>

        <div className={styles.tableWrapper}>
          <table>
            <thead>
              <tr>
                <th>Lead</th>
                <th>Insurance</th>
                <th>Phone</th>
                <th>Status</th>
                <th>Date</th>
                <th>Actions</th>
              </tr>
            </thead>

            <tbody>
              {leads.map((lead) => (
                <motion.tr
                  key={lead.id}
                  
                >
                  <td>
                    <div className={styles.userCell}>
                      <div className={styles.avatar}>
                        {lead.name.charAt(0)}
                      </div>

                      <div>
                        <h4>{lead.name}</h4>
                        <p>{lead.email}</p>
                      </div>
                    </div>
                  </td>

                  <td>
                    <span className={styles.insurance}>
                      {lead.insurance}
                    </span>
                  </td>

                  <td>{lead.phone}</td>

                  <td>
                    <span
                      className={
                        lead.status === "New"
                          ? styles.new
                          : lead.status ===
                            "Contacted"
                          ? styles.contacted
                          : styles.converted
                      }
                    >
                      {lead.status}
                    </span>
                  </td>

                  <td>{lead.date}</td>

                  <td>
                    <div className={styles.actions}>
                      <button>
                        <FaEye />
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