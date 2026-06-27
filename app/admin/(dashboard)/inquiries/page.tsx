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
  status: "Pending" | "Contacted" | "Resolved";
}

export default function InquiriesPage() {
  const [inquiries, setInquiries] = useState<Inquiry[]>([]);
  const [selected, setSelected] =
    useState<Inquiry | null>(null);
  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState("All");
  const [loading, setLoading] = useState(true);

  const [page, setPage] = useState(1);

  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    fetchInquiries();
  }, [page, search, statusFilter]);

  const fetchInquiries = async () => {
    try {
      setLoading(true);

      const params = new URLSearchParams({
        page: page.toString(),
        search,
        status: statusFilter,
      });

      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/contact?${params.toString()}`,
        {
          cache: "no-store",
        }
      );

      const result = await response.json();

      setInquiries(result.data || []);
      setTotalPages(result.pagination?.totalPages || 1);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const updateStatus = async (
    id: string,
    status: string
  ) => {
    try {
      await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/contact/${id}/status`,
        {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ status }),
        }
      );

      setInquiries((prev) =>
        prev.map((item) =>
          item._id === id
            ? { ...item, status: status as Inquiry["status"] }
            : item
        )
      );

      if (selected?._id === id) {
        setSelected({
          ...selected,
          status: status as Inquiry["status"],
        });
      }
    } catch (error) {
      console.error(error);
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
        <div className={styles.tableHeader}>
          <div className={styles.search}>
            <FaSearch />

            <input
              type="text"
              placeholder="Search by name, email or phone..."
              value={search}
              onChange={(e) => {
                setPage(1);
                setSearch(e.target.value);
              }}
            />
          </div>

          <select
            className={styles.filterSelect}
            value={statusFilter}
            onChange={(e) => {
              setPage(1);
              setStatusFilter(e.target.value);
            }}
          >
            <option value="All">All Status</option>
            <option value="Pending">Pending</option>
            <option value="Contacted">Contacted</option>
            <option value="Resolved">Resolved</option>
          </select>
        </div>
        <div className={styles.tableWrapper}>
          <table>
            <thead>
              <tr>
                <th>User</th>
                <th>Phone</th>
                <th>Subject</th>
                <th>Status</th>
                <th>Date</th>
                <th>Action</th>
              </tr>
            </thead>

            <tbody>
              {loading ? (
                <tr>
                  <td colSpan={6} className={styles.loadingState}>
                    Loading...
                  </td>
                </tr>
              ) : inquiries.length === 0 ? (
                <tr>
                  <td colSpan={6} className={styles.emptyState}>
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
                      <select
                        className={styles.statusSelect}
                        value={item.status}
                        onChange={(e) =>
                          updateStatus(item._id, e.target.value)
                        }
                      >
                        <option value="Pending">Pending</option>
                        <option value="Contacted">Contacted</option>
                        <option value="Resolved">Resolved</option>
                      </select>
                    </td>
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
  <strong>Status:</strong>

  <select
    className={styles.statusSelect}
    value={selected.status}
    onChange={(e) =>
      updateStatus(selected._id, e.target.value)
    }
  >
    <option value="Pending">Pending</option>
    <option value="Contacted">Contacted</option>
    <option value="Resolved">Resolved</option>
  </select>
</div>
            <div className={styles.detail}>
              <strong>Message:</strong>
              <span>{selected.message}</span>
            </div>

            <a
              href={`https://mail.google.com/mail/?view=cm&fs=1&to=${selected.email}&su=Regarding your inquiry`}
              target="_blank"
              rel="noopener noreferrer"
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