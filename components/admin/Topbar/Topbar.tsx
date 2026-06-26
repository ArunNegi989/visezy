"use client";

import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { useAuthContext } from "@/app/src/context/authContext";

import {
  FaExternalLinkAlt,
  FaBell,
  FaSearch,
  FaMoon,
  FaUser,
  FaKey,
  FaSignOutAlt,
  FaBars,
} from "react-icons/fa";

import styles from "./Topbar.module.css";
import LogoutModal from "@/components/auth/LogoutModal";
import { useRouter } from "next/navigation";
interface TopbarProps {
  onMenuClick: () => void;
}

export default function Topbar({
  onMenuClick,
}: TopbarProps) {
  const [open, setOpen] = useState(false);
const [logoutLoading, setLogoutLoading] = useState(false);
const router = useRouter();

const { logoutAdmin } = useAuthContext();
const handleLogout = async () => {
    try {
        setLogoutLoading(true);

        await logoutAdmin();

        router.replace("/admin/login");
        router.refresh();
    } finally {
        setLogoutLoading(false);
        setLogoutOpen(false);
    }
};
  const dropdownRef =
    useRef<HTMLDivElement>(null);
  const [logoutOpen, setLogoutOpen] = useState(false);
  useEffect(() => {
    const handleClickOutside = (
      event: MouseEvent
    ) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(
          event.target as Node
        )
      ) {
        setOpen(false);
      }
    };

    document.addEventListener(
      "mousedown",
      handleClickOutside
    );

    return () => {
      document.removeEventListener(
        "mousedown",
        handleClickOutside
      );
    };
  }, []);

  return (
    <>
    <motion.header
      className={styles.topbar}
      initial={{
        opacity: 0,
        y: -20,
      }}
      animate={{
        opacity: 1,
        y: 0,
      }}
    >
      <div className={styles.headingSection}>
        <button
          className={styles.menuBtn}
          onClick={onMenuClick}
        >
          <FaBars />
        </button>

        <div>
          <h1>Dashboard</h1>

          <p>
            Welcome back, manage your
            website efficiently.
          </p>
        </div>
      </div>

      <div className={styles.right}>
        <a
          href="https://visezy.in"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.viewSiteBtn}
        >
          <FaExternalLinkAlt />
          <span>View Site</span>
        </a>

        <div className={styles.search}>
          <FaSearch />

          <input
            placeholder="Search pages..."
          />
        </div>

        <button className={styles.iconBtn}>
          <FaMoon />
        </button>

        <button className={styles.iconBtn}>
          <FaBell />

          <span className={styles.badge}>
            3
          </span>
        </button>

        <div
          className={styles.profileWrapper}
          ref={dropdownRef}
        >
          <button
            className={styles.avatar}
            onClick={() =>
              setOpen(!open)
            }
          >
            A
          </button>

          {open && (
            <div className={styles.dropdown}>
              <Link
                href="/admin/profile"
                className={styles.dropdownItem}
                onClick={() => setOpen(false)}
              >
                <FaUser />
                <span>Profile</span>
              </Link>

              <Link
                href="/admin/change-password"
                className={styles.dropdownItem}
                onClick={() => setOpen(false)}
              >
                <FaKey />
                <span>Change Password</span>
              </Link>

              <button
                className={styles.dropdownItem}
                onClick={() => {
                  setOpen(false);
                  setLogoutOpen(true);
                }}
              >
                <FaSignOutAlt />
                <span>Logout</span>
              </button>
            </div>
          )}
        </div>
      </div>
    </motion.header>
   <LogoutModal
  open={logoutOpen}
  onClose={() => setLogoutOpen(false)}
  onConfirm={handleLogout}
  loading={logoutLoading}
/>
  
  </>);
}