"use client";

import { useState } from "react";

import Sidebar from "@/components/admin/Sidebar/Sidebar";
import Topbar from "@/components/admin/Topbar/Topbar";

import styles from "./adminLayout.module.css";

interface AdminLayoutProps {
  children: React.ReactNode;
}

export default function AdminLayout({
  children,
}: AdminLayoutProps) {
  const [sidebarOpen, setSidebarOpen] =
    useState(false);

  const openSidebar = () => {
    setSidebarOpen(true);
  };

  const closeSidebar = () => {
    setSidebarOpen(false);
  };

  return (
    <div className={styles.wrapper}>
      <Sidebar
        isOpen={sidebarOpen}
        onClose={closeSidebar}
      />

      <main className={styles.main}>
        <Topbar
          onMenuClick={openSidebar}
        />

        <div className={styles.content}>
          {children}
        </div>
      </main>
    </div>
  );
}