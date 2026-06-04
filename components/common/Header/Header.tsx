"use client";

import { useEffect, useState } from "react";
import styles from "./Header.module.css";
import Image from "next/image";
import Link from "next/link";
import { HiOutlineMenuAlt3, HiX, HiOutlineSearch, HiOutlinePhone } from "react-icons/hi";
import { FaFacebookF, FaTwitter, FaPinterestP, FaRegEnvelope } from "react-icons/fa";
import { FiClock } from "react-icons/fi";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`${styles.header} ${scrolled ? styles.scrolled : ""}`}>
      {/* Top utility bar */}
      <div className={styles.topBar}>
        <div className={styles.topBarLeft}>
          <div className={styles.socials}>
            <a href="#" aria-label="Facebook"><FaFacebookF /></a>
            <a href="#" aria-label="Twitter"><FaTwitter /></a>
            <a href="#" aria-label="Pinterest"><FaPinterestP /></a>
          </div>
          <div className={styles.divider}></div>
          <div className={styles.infoItem}>
            <FiClock className={styles.infoIcon} />
            <span>Mon - Fri 8:00 - 6:30</span>
          </div>
        </div>
        
        <a href="mailto:sales@visezy.in" className={styles.emailLink}>
          <FaRegEnvelope className={styles.infoIcon} />
          <span>sales@visezy.in</span>
        </a>
      </div>

      {/* Main Navigation Row */}
      <div className={styles.container}>
        {/* Dynamic Image Logo Container */}
        <Link href="/" className={styles.logoContainer}>
          <Image 
            src="/visezy-logo.png" 
            alt="Visezy Insurance Broking Company" 
            width={160} 
            height={50} 
            priority
            className={styles.logoImage}
          />
        </Link>

        {/* Desktop Navbar */}
        <nav className={styles.nav}>
          <Link href="/" className={styles.navLink}>Home</Link>
          <Link href="/policies" className={styles.navLink}>Policies</Link>
          <Link href="/about-us" className={styles.navLink}>About Us</Link>
          <Link href="/blogs" className={styles.navLink}>Blogs</Link>
          <Link href="#contact" className={styles.navLink}>Contact Us</Link>
        </nav>

        {/* Action Widgets */}
        <div className={styles.rightSection}>
          <a href="tel:+919634556234" className={styles.callPill}>
            <div className={styles.pulseContainer}>
              <HiOutlinePhone className={styles.phoneIcon} />
              <span className={styles.dot}></span>
            </div>
            <div className={styles.callMeta}>
              <small>Quick Call</small>
              <strong>(91) 9634556234</strong>
            </div>
          </a>

          <button className={styles.iconBtn} aria-label="Search">
            <HiOutlineSearch />
          </button>

          <Link href="#contact" className={styles.quoteBtn}>
            <span>Get A Quote</span>
          </Link>

          <button
            className={styles.mobileBtn}
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <HiX /> : <HiOutlineMenuAlt3 />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Slideout Overlay */}
      <div className={`${styles.mobileMenu} ${mobileOpen ? styles.open : ""}`}>
        <nav className={styles.mobileNavLinks}>
          <Link href="/" onClick={() => setMobileOpen(false)}>Home</Link>
          <Link href="/policies" onClick={() => setMobileOpen(false)}>Policies</Link>
          <Link href="#why-choose-us" onClick={() => setMobileOpen(false)}>About Us</Link>
          <Link href="/" onClick={() => setMobileOpen(false)}>Blogs</Link>
          <Link href="#contact" onClick={() => setMobileOpen(false)}>Contact Us</Link>
        </nav>
        
        <div className={styles.mobileActions}>
          <a href="tel:+919634556234" className={styles.callPill}>
            <div className={styles.pulseContainer}>
              <HiOutlinePhone className={styles.phoneIcon} />
              <span className={styles.dot}></span>
            </div>
            <div>
              <small>Quick Call</small>
              <strong>(91) 9634556234</strong>
            </div>
          </a>
          <Link href="#contact" className={styles.mobileQuote} onClick={() => setMobileOpen(false)}>
            Get A Quote
          </Link>
        </div>
      </div>
    </header>
  );
}