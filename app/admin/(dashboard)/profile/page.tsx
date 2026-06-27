"use client";

import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";

import {
  FaUserCircle,
  FaEnvelope,
  FaUserShield,
  FaCheckCircle,
  FaClock,
  FaPowerOff,
  FaKey,
} from "react-icons/fa";

import { useAuth } from "@/app/src/hooks/useAuth";
import LogoutModal from "@/components/auth/LogoutModal";

import styles from "./profile.module.css";

export default function AdminProfilePage() {
  const router = useRouter();

  const { admin, logoutAdmin } = useAuth();

  const [logoutOpen, setLogoutOpen] =
    useState(false);

  const [loading, setLoading] =
    useState(false);

  const handleLogout = async () => {
    try {
      setLoading(true);

      await logoutAdmin();

      router.replace("/admin/login");
    } finally {
      setLoading(false);
      setLogoutOpen(false);
    }
  };

  const initials =
    admin?.name
      ?.split(" ")
      .map((word) => word[0])
      .join("")
      .toUpperCase()
      .slice(0, 2) || "A";

  return (
    <>
      <div className={styles.wrapper}>
        <div className={styles.header}>
          <div>
            <span className={styles.badge}>
              Administrator
            </span>

            <h1>My Profile</h1>

            <p>
              View your administrator
              information and manage
              account settings.
            </p>
          </div>
        </div>

        <div className={styles.profileCard}>
          <div className={styles.profileTop}>
            <div className={styles.avatar}>
              {initials}
            </div>

            <div className={styles.profileContent}>
              <h2>
                {admin?.name || "Admin"}
              </h2>

              <p>
                {admin?.email ||
                  "admin@visezy.in"}
              </p>

              <div
                className={styles.statusRow}
              >
                <span
                  className={`${styles.status} ${
                    admin?.active
                      ? styles.active
                      : styles.inactive
                  }`}
                >
                  {admin?.active
                    ? "Active"
                    : "Inactive"}
                </span>

                <span
                  className={`${styles.status} ${
                    admin?.verified
                      ? styles.verified
                      : styles.pending
                  }`}
                >
                  {admin?.verified
                    ? "Verified"
                    : "Pending"}
                </span>
              </div>
            </div>
          </div>

          <div className={styles.infoGrid}>
            <div className={styles.infoCard}>
              <FaUserCircle />

              <div>
                <label>
                  Full Name
                </label>

                <p>
                  {admin?.name || "N/A"}
                </p>
              </div>
            </div>

            <div className={styles.infoCard}>
              <FaEnvelope />

              <div>
                <label>Email</label>

                <p>
                  {admin?.email ||
                    "N/A"}
                </p>
              </div>
            </div>

            <div className={styles.infoCard}>
              <FaUserShield />

              <div>
                <label>Role</label>

                <p>
                  {admin?.role || "N/A"}
                </p>
              </div>
            </div>

            <div className={styles.infoCard}>
              <FaCheckCircle />

              <div>
                <label>
                  Verification
                </label>

                <p>
                  {admin?.verified
                    ? "Verified"
                    : "Pending"}
                </p>
              </div>
            </div>

            <div className={styles.infoCard}>
              <FaPowerOff />

              <div>
                <label>Status</label>

                <p>
                  {admin?.active
                    ? "Active"
                    : "Inactive"}
                </p>
              </div>
            </div>

            <div className={styles.infoCard}>
              <FaClock />

              <div>
                <label>
                  Last Login
                </label>

                <p>
                  {admin?.lastLogin
                    ? new Date(
                        admin.lastLogin
                      ).toLocaleString()
                    : "N/A"}
                </p>
              </div>
            </div>
          </div>

          <div className={styles.actionBar}>
            <Link
              href="/admin/change-password"
              className={
                styles.primaryBtn
              }
            >
              <FaKey />
              <span className={styles.changeBtn}>
                Change Password
              </span>
            </Link>

            <button
              className={
                styles.logoutBtn
              }
              onClick={() =>
                setLogoutOpen(true)
              }
            >
              <FaPowerOff />
              <span>Logout</span>
            </button>
          </div>
        </div>
      </div>

      <LogoutModal
        open={logoutOpen}
        onClose={() =>
          setLogoutOpen(false)
        }
        onConfirm={handleLogout}
        loading={loading}
      />
    </>
  );
}