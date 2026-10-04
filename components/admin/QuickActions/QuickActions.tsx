"use client";

import Link from "next/link";

import {
  FaBlog,
  FaImage,
  FaList,
  FaImages,
} from "react-icons/fa";

import styles from "./QuickActions.module.css";

const actions = [
  {
    icon: <FaBlog />,
    title: "Add Blog",
    href: "/admin/blogs/create",
  },
  {
    icon: <FaList />,
    title: "Manage Blogs",
    href: "/admin/blogs",
  },
  {
    icon: <FaImage />,
    title: "Add Banner",
    href: "/admin/banners/create",
  },
  {
    icon: <FaImages />,
    title: "Manage Banners",
    href: "/admin/banners",
  },
];

export default function QuickActions() {
  return (
    <div className={styles.card}>
      <h3>Quick Actions</h3>

      <div className={styles.grid}>
        {actions.map((item) => (
          <Link
            key={item.title}
            href={item.href}
            className={styles.action}
          >
            {item.icon}

            <span>{item.title}</span>
          </Link>
        ))}
      </div>
    </div>
  );
}