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
      {
        title: "Analytics",
        icon: <FaChartLine />,
        href: "/admin/analytics",
      },
    ],
  },
  {
    title: "CONTENT",
    items: [
      {
        title: "Blogs",
        icon: <FaBlog />,
        href: "/admin/blogs",
      },
      {
        title: "Categories",
        icon: <FaLayerGroup />,
        href: "/admin/categories",
      },
    ],
  },
  {
    title: "SYSTEM",
    items: [
      {
        title: "Users",
        icon: <FaUsers />,
        href: "/admin/users",
      },
      {
        title: "Leads",
        icon: <FaEnvelope />,
        href: "/admin/leads",
      },
      {
        title: "SEO",
        icon: <FaSearch />,
        href: "/admin/seo",
      },
      {
        title: "Settings",
        icon: <FaCog />,
        href: "/admin/settings",
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
        className={`${styles.sidebar} ${
          isOpen ? styles.open : ""
        }`}
      >
        <div className={styles.logoSection}>
          <div className={styles.logoWrapper}>
            <Image
              src="/visezy-logo.png"
              alt="Visezy"
              width={180}
              height={50}
              className={styles.logoImage}
              priority
            />
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
                {section.items.map((item) => (
                  <motion.div
                    key={item.title}
                    whileHover={{ x: 5 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Link
                      href={item.href}
                      onClick={onClose}
                      className={`${styles.link} ${
                        pathname === item.href
                          ? styles.active
                          : ""
                      }`}
                    >
                      <span className={styles.icon}>
                        {item.icon}
                      </span>

                      <span>{item.title}</span>
                    </Link>
                  </motion.div>
                ))}
              </nav>
            </div>
          ))}
        </div>
      </aside>
    </>
  );
}