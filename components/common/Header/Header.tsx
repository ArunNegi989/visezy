"use client";

import { useEffect, useState } from "react";
import styles from "./Header.module.css";
import Image from "next/image";
import Link from "next/link";
import { HiOutlineMenuAlt3, HiX } from "react-icons/hi";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);

    return () =>
      window.removeEventListener("scroll", handleScroll);
  }, []);

  const closeMenu = () => {
    setMobileOpen(false);
  };

  return (
    <>
      {/* Announcement Bar */}
      <div className={styles.topBar}>
        ✨ Save up to 20% on your insurance plans • Free Consultation Available
      </div>

      <header
        className={`${styles.header} ${
          scrolled ? styles.scrolled : ""
        }`}
      >
        <div className={styles.container}>
          {/* Logo */}
          <Link href="/" className={styles.logo}>
            <Image
              src="/visezy-logo.png"
              alt="Visezy"
              width={180}
              height={50}
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className={styles.nav}>
            <Link href="#features">
              Features
            </Link>

            <Link href="#why-choose-us">
              Why Choose Us
            </Link>

            <Link href="#services">
              Services
            </Link>

            <Link href="#why-choose-us">
              About Us
            </Link>

            <Link href="#contact">
              Contact
            </Link>
          </nav>

          {/* Actions */}
          <div className={styles.actions}>
            <Link
              href="#contact"
              className={styles.quoteBtn}
            >
              Get Free Quote
            </Link>

            <button
              className={styles.mobileBtn}
              onClick={() =>
                setMobileOpen(!mobileOpen)
              }
              aria-label="Toggle Menu"
            >
              {mobileOpen ? (
                <HiX />
              ) : (
                <HiOutlineMenuAlt3 />
              )}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      <div
        className={`${styles.mobileMenu} ${
          mobileOpen ? styles.open : ""
        }`}
      >
        <Link
          href="#features"
          onClick={closeMenu}
        >
          Features
        </Link>

        <Link
          href="#why-choose-us"
          onClick={closeMenu}
        >
          Why Choose Us
        </Link>

        <Link
          href="#services"
          onClick={closeMenu}
        >
          Services
        </Link>

       <Link href="#why-choose-us"
       onClick={closeMenu}>
  About Us
</Link>

        <Link
          href="#contact"
          onClick={closeMenu}
        >
          Contact
        </Link>

        <Link
          href="#contact"
          className={styles.mobileQuote}
          onClick={closeMenu}
        >
          Get Free Quote
        </Link>
      </div>
    </>
  );
}