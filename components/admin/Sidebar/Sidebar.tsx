"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import Image from "next/image";

import {
  FaChartPie,
  FaBlog,
  FaUsers,
  FaLayerGroup,
  FaEnvelope,
  FaCog,
  FaChartLine,
  FaSearch,
  FaImages,
  FaHeadset,
  FaMoneyBillWave
} from "react-icons/fa";

import styles from "./Sidebar.module.css";

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

const menuSections = [
  {
    title: "MAIN",
    items: [
      {
        title: "Dashboard",
        icon: <FaChartPie />,
        href: "/admin",
      },
    ],
  },
  {
    title: "CONTENT",
    items: [
      {
        title: "Banners",
        icon: <FaImages />,
        href: "/admin/banners",
      },
      {
        title: "Blogs",
        icon: <FaBlog />,
        href: "/admin/blogs",
      },
    ],
  },
  {
    title: "SYSTEM",
    items: [
      {
        title: "Inquiries",
        icon: <FaHeadset />,
        href: "/admin/inquiries",
      },
       {
        title: "Cashback Leads",
        icon: <FaMoneyBillWave />,
        href: "/admin/cashback-leads",
      },
    ],
  },
];

export default function Sidebar({
  isOpen,
  onClose,
}: SidebarProps) {
  const pathname = usePathname();

  return (
    <>
      {isOpen && (
        <div
          className={styles.overlay}
          onClick={onClose}
        />
      )}

      <aside
        className={`${styles.sidebar} ${isOpen ? styles.open : ""
          }`}
      >
        <div className={styles.logoSection}>
  <div className={styles.logoWrapper}>
    <Image
      src="/visezy-logo.png"
      alt="Vinsure"
      width={70}
      height={70}
      className={styles.logoImage}
      priority
    />

    <span className={styles.brandName}>Vinsure</span>
  </div>
</div>

        <div className={styles.menuWrapper}>
          {menuSections.map((section) => (
            <div
              key={section.title}
              className={styles.section}
            >
              <span className={styles.sectionTitle}>
                {section.title}
              </span>

              <nav className={styles.nav}>
                {section.items.map((item) => {
                  const isActive =
                    pathname === item.href ||
                    (item.href !== "/admin" &&
                      pathname.startsWith(item.href + "/"));

                  return (
                    <motion.div
                      key={item.title}
                      whileHover={{ x: 5 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <Link
                        href={item.href}
                        onClick={onClose}
                        className={`${styles.link} ${isActive ? styles.active : ""
                          }`}
                      >
                        <span className={styles.icon}>
                          {item.icon}
                        </span>

                        <span>{item.title}</span>
                      </Link>
                    </motion.div>
                  );
                })}
              </nav>
            </div>
          ))}
        </div>
      </aside>
    </>
  );
}