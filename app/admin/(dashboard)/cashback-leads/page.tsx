"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

import {
  FaSearch,
  FaEye,
  FaPhone,
  FaMoneyBillWave,
} from "react-icons/fa";

import styles from "./cashback-leads.module.css";

interface CashbackLead {
  _id: string;
  name: string;
  phone: string;
  status: "new" | "contacted" | "converted" | "closed";
  createdAt: string;
}

interface Pagination {
  page: number;
  limit: number;
  total: number;
  totalPages: number;
}

export default function CashbackLeadsPage() {
  const [leads, setLeads] = useState<CashbackLead[]>([]);

  const [selected, setSelected] =
    useState<CashbackLead | null>(null);

  const [search, setSearch] = useState("");

  const [statusFilter, setStatusFilter] =
    useState("All");

  const [loading, setLoading] = useState(true);

  const [page, setPage] = useState(1);

  const [totalPages, setTotalPages] = useState(1);

  const fetchCashbackLeads = async () => {
    try {
      setLoading(true);

      const params = new URLSearchParams({
        page: page.toString(),
        limit: "10",
        search,
        status:
          statusFilter === "All"
            ? ""
            : statusFilter,
      });

      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/admin/cashback-leads?${params.toString()}`,
        {
          cache: "no-store",
          credentials: "include",
        }
      );

      const result = await response.json();

      if (!response.ok) {
        throw new Error(
          result?.message ||
            "Failed to fetch cashback leads."
        );
      }

      setLeads(result.data || []);

      setTotalPages(
        result.pagination?.totalPages || 1
      );
    } catch (error) {
      console.error(
        "Cashback leads error:",
        error
      );

      setLeads([]);
      setTotalPages(1);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCashbackLeads();
  }, [page, search, statusFilter]);

  const updateStatus = async (
    id: string,
    status: string
  ) => {
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/admin/cashback-leads/${id}/status`,
        {
          method: "PATCH",
          credentials: "include",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            status,
          }),
        }
      );

      const result = await response.json();

      if (!response.ok) {
        throw new Error(
          result?.message ||
            "Failed to update status."
        );
      }

      setLeads((prev) =>
        prev.map((item) =>
          item._id === id
            ? {
                ...item,
                status:
                  status as CashbackLead["status"],
              }
            : item
        )
      );

      if (selected?._id === id) {
        setSelected({
          ...selected,
          status:
            status as CashbackLead["status"],
        });
      }
    } catch (error) {
      console.error(
        "Update cashback status error:",
        error
      );
    }
  };

  const formatDate = (date: string) => {
    return new Date(date).toLocaleDateString(
      "en-IN",
      {
        day: "2-digit",
        month: "short",
        year: "numeric",
      }
    );
  };

  return (
    <div className={styles.wrapper}>
      {/* =====================================================
          HERO
      ===================================================== */}

      <motion.div
        className={styles.hero}
        initial={{
          opacity: 0,
          y: 25,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
      >
        <div>
          <span className={styles.badge}>
            Cashback Management
          </span>

          <h1>Cashback Leads</h1>

          <p>
            Manage all cashback requests submitted
            by users.
          </p>
        </div>
      </motion.div>

      {/* =====================================================
          TABLE CARD
      ===================================================== */}

      <div className={styles.tableCard}>
        {/* =================================================
            HEADER / SEARCH / FILTER
        ================================================= */}

        <div className={styles.tableHeader}>
          <div className={styles.search}>
            <FaSearch />

            <input
              type="text"
              placeholder="Search by name or mobile number..."
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
            <option value="All">
              All Status
            </option>

            <option value="new">
              New
            </option>

            <option value="contacted">
              Contacted
            </option>

            <option value="converted">
              Converted
            </option>

            <option value="closed">
              Closed
            </option>
          </select>
        </div>

        {/* =================================================
            TABLE
        ================================================= */}

        <div className={styles.tableWrapper}>
          <table>
            <thead>
              <tr>
                <th>User</th>

                <th>Mobile Number</th>

                <th>Status</th>

                <th>Date</th>

                <th>Action</th>
              </tr>
            </thead>

            <tbody>
              {loading ? (
                <tr>
                  <td
                    colSpan={5}
                    className={
                      styles.loadingState
                    }
                  >
                    Loading...
                  </td>
                </tr>
              ) : leads.length === 0 ? (
                <tr>
                  <td
                    colSpan={5}
                    className={
                      styles.emptyState
                    }
                  >
                    No cashback leads found
                  </td>
                </tr>
              ) : (
                leads.map((item) => (
                  <tr key={item._id}>
                    {/* USER */}

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
                          {item.name
                            .charAt(0)
                            .toUpperCase()}
                        </div>

                        <div>
                          <h4>
                            {item.name}
                          </h4>

                          <p>
                            Cashback Request
                          </p>
                        </div>
                      </div>
                    </td>

                    {/* PHONE */}

                    <td>
                      <a
                        href={`tel:${item.phone}`}
                        className={
                          styles.phoneLink
                        }
                      >
                        <FaPhone />

                        <span>
                          {item.phone}
                        </span>
                      </a>
                    </td>

                    {/* STATUS */}

                    <td>
                      <select
                        className={
                          styles.statusSelect
                        }
                        value={item.status}
                        onChange={(e) =>
                          updateStatus(
                            item._id,
                            e.target.value
                          )
                        }
                      >
                        <option value="new">
                          New
                        </option>

                        <option value="contacted">
                          Contacted
                        </option>

                        <option value="converted">
                          Converted
                        </option>

                        <option value="closed">
                          Closed
                        </option>
                      </select>
                    </td>

                    {/* DATE */}

                    <td>
                      {formatDate(
                        item.createdAt
                      )}
                    </td>

                    {/* ACTION */}

                    <td>
                      <button
                        className={
                          styles.viewBtn
                        }
                        onClick={() =>
                          setSelected(item)
                        }
                        aria-label="View cashback lead"
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

        {/* =================================================
            PAGINATION
        ================================================= */}

        <div className={styles.pagination}>
          <button
            disabled={page === 1}
            onClick={() =>
              setPage(
                (prev) =>
                  Math.max(prev - 1, 1)
              )
            }
          >
            Previous
          </button>

          <span>
            {page} / {totalPages}
          </span>

          <button
            disabled={
              page >= totalPages
            }
            onClick={() =>
              setPage(
                (prev) =>
                  Math.min(
                    prev + 1,
                    totalPages
                  )
              )
            }
          >
            Next
          </button>
        </div>
      </div>

      {/* =====================================================
          DETAIL MODAL
      ===================================================== */}

      {selected && (
        <div
          className={
            styles.modalOverlay
          }
          onClick={() =>
            setSelected(null)
          }
        >
          <motion.div
            className={styles.modal}
            initial={{
              opacity: 0,
              scale: 0.95,
              y: 20,
            }}
            animate={{
              opacity: 1,
              scale: 1,
              y: 0,
            }}
            onClick={(e) =>
              e.stopPropagation()
            }
          >
            {/* MODAL HEADER */}

            <div
              className={
                styles.modalHeader
              }
            >
              <div
                className={
                  styles.modalIcon
                }
              >
                <FaMoneyBillWave />
              </div>

              <div>
                <h3>
                  Cashback Lead Details
                </h3>

                <p>
                  View submitted cashback
                  request details.
                </p>
              </div>

              <button
                className={
                  styles.modalClose
                }
                onClick={() =>
                  setSelected(null)
                }
              >
                ×
              </button>
            </div>

            {/* DETAILS */}

            <div className={styles.details}>
              <div
                className={
                  styles.detail
                }
              >
                <strong>
                  Name:
                </strong>

                <span>
                  {selected.name}
                </span>
              </div>

              <div
                className={
                  styles.detail
                }
              >
                <strong>
                  Mobile Number:
                </strong>

                <a
                  href={`tel:${selected.phone}`}
                >
                  {selected.phone}
                </a>
              </div>

              <div
                className={
                  styles.detail
                }
              >
                <strong>
                  Status:
                </strong>

                <select
                  className={
                    styles.statusSelect
                  }
                  value={
                    selected.status
                  }
                  onChange={(e) =>
                    updateStatus(
                      selected._id,
                      e.target.value
                    )
                  }
                >
                  <option value="new">
                    New
                  </option>

                  <option value="contacted">
                    Contacted
                  </option>

                  <option value="converted">
                    Converted
                  </option>

                  <option value="closed">
                    Closed
                  </option>
                </select>
              </div>

              <div
                className={
                  styles.detail
                }
              >
                <strong>
                  Submitted:
                </strong>

                <span>
                  {new Date(
                    selected.createdAt
                  ).toLocaleString(
                    "en-IN"
                  )}
                </span>
              </div>
            </div>

            {/* CALL BUTTON */}

            <a
              href={`tel:${selected.phone}`}
              className={
                styles.callBtn
              }
            >
              <FaPhone />

              Call User
            </a>
          </motion.div>
        </div>
      )}
    </div>
  );
}