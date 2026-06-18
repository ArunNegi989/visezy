"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

import {
  FaSearch,
  FaEye,
  FaEnvelope,
  FaUserTie,
  FaPhone,
} from "react-icons/fa";

import styles from "./inquiries.module.css";

interface Inquiry {
  _id: string;
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
  createdAt: string;
}

export default function InquiriesPage() {
  const [inquiries, setInquiries] = useState<Inquiry[]>([]);
  const [selected, setSelected] =
    useState<Inquiry | null>(null);

  const [loading, setLoading] = useState(true);

  const [page, setPage] = useState(1);

  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    fetchInquiries();
  }, [page]);

  const fetchInquiries = async () => {
    try {
      setLoading(true);

      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/contact?page=${page}`,
        {
          cache: "no-store",
        }
      );

      const result = await response.json();

      setInquiries(result.data);
      setTotalPages(result.pagination.totalPages);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={styles.wrapper}>
      <motion.div
        className={styles.hero}
        initial={{ opacity: 0, y: 25 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <div>
          <span className={styles.badge}>
            Contact Management
          </span>

          <h1>Contact Inquiries</h1>

          <p>
            Manage all contact form submissions.
          </p>
        </div>
      </motion.div>

      <div className={styles.tableCard}>
        <div className={styles.tableWrapper}>
          <table>
            <thead>
              <tr>
                <th>User</th>
                <th>Phone</th>
                <th>Subject</th>
                <th>Date</th>
                <th>Action</th>
              </tr>
            </thead>

            <tbody>
              {loading ? (
                <tr>
                  <td colSpan={5}>
                    Loading...
                  </td>
                </tr>
              ) : inquiries.length === 0 ? (
                <tr>
                  <td colSpan={5}>
                    No inquiries found
                  </td>
                </tr>
              ) : (
                inquiries.map((item) => (
                  <tr key={item._id}>
                    <td>
                      <div className={styles.userCell}>
                        <div className={styles.avatar}>
                          {item.name.charAt(0)}
                        </div>

                        <div>
                          <h4>{item.name}</h4>
                          <p>{item.email}</p>
                        </div>
                      </div>
                    </td>

                    <td>{item.phone}</td>

                    <td>{item.subject}</td>

                    <td>
                      {new Date(
                        item.createdAt
                      ).toLocaleDateString(
                        "en-IN"
                      )}
                    </td>

                    <td>
                      <button
                        className={
                          styles.viewBtn
                        }
                        onClick={() =>
                          setSelected(item)
                        }
                      >
                        <FaEye />
                      </button>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>

        <div className={styles.pagination}>
          <button
            disabled={page === 1}
            onClick={() =>
              setPage((prev) => prev - 1)
            }
          >
            Previous
          </button>

          <span>
            {page} / {totalPages}
          </span>

          <button
            disabled={page === totalPages}
            onClick={() =>
              setPage((prev) => prev + 1)
            }
          >
            Next
          </button>
        </div>
      </div>

      {selected && (
        <div
          className={styles.modalOverlay}
          onClick={() => setSelected(null)}
        >
          <div
            className={styles.modal}
            onClick={(e) =>
              e.stopPropagation()
            }
          >
            <h3>Inquiry Details</h3>

            <div className={styles.detail}>
              <strong>Name:</strong>
              <span>{selected.name}</span>
            </div>

            <div className={styles.detail}>
              <strong>Email:</strong>
              <span>{selected.email}</span>
            </div>

            <div className={styles.detail}>
              <strong>Phone:</strong>
              <span>{selected.phone}</span>
            </div>

            <div className={styles.detail}>
              <strong>Message:</strong>
              <span>{selected.message}</span>
            </div>

            <a
              href={`mailto:${selected.email}`}
              className={styles.emailBtn}
            >
              <FaEnvelope />
              Send Email
            </a>
          </div>
        </div>
      )}
    </div>
  );
}