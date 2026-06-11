"use client";

import { usePathname } from "next/navigation";

import Header from "@/components/common/Header/Header";
import { Footer } from "@/components/common/Footer/Footer";

export default function LayoutWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  const hideLayout =
    pathname.startsWith("/admin") ||
    pathname.startsWith("/login") ||
    pathname.startsWith("/signup");

  return (
    <>
      {!hideLayout && <Header />}


      <main className="flex-grow">
        {children}
      </main>

      {!hideLayout && <Footer />}
    </>
  );
}