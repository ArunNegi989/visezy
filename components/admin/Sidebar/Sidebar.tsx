"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";

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

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className={styles.sidebar}>
      <div className={styles.logoSection}>
        <div className={styles.logo}>V</div>

        <div>
          <h2>Visezy</h2>
          <p>Admin Dashboard</p>
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
                  whileHover={{
                    x: 5,
                  }}
                  whileTap={{
                    scale: 0.98,
                  }}
                >
                  <Link
                    href={item.href}
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
  );
}