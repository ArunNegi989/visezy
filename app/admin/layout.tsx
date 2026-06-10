import Sidebar from "@/components/admin/Sidebar/Sidebar";
import Topbar from "@/components/admin/Topbar/Topbar";
import styles from "./adminLayout.module.css";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className={styles.wrapper}>
      <Sidebar />

      <main className={styles.main}>
        <Topbar />

        <div className={styles.content}>
          {children}
        </div>
      </main>
    </div>
  );
}