"use client";

import { useEffect, useState } from "react";
import { HiX, HiSparkles } from "react-icons/hi";
import Image from "next/image";
import styles from "./CashbackPopup.module.css";

export default function CashbackPopup() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const dismissed = sessionStorage.getItem("cashback-popup");
    if (!dismissed) {
      const timer = setTimeout(() => {
        setOpen(true);
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, []);

  useEffect(() => {
    const handleOpen = () => setOpen(true);
    window.addEventListener("openCashbackPopup", handleOpen);
    return () => window.removeEventListener("openCashbackPopup", handleOpen);
  }, []);

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") closePopup();
    };
    window.addEventListener("keydown", handleEscape);
    return () => window.removeEventListener("keydown", handleEscape);
  }, []);

  const closePopup = () => {
    sessionStorage.setItem("cashback-popup", "true");
    setOpen(false);
  };

  if (!open) return null;

  return (
    <div className={styles.overlay} onClick={closePopup}>
      <div className={styles.popup} onClick={(e) => e.stopPropagation()}>
        
        <button
          className={styles.closeBtn}
          onClick={closePopup}
          aria-label="Close Popup"
        >
          <HiX />
        </button>

        <div className={styles.glow} />

        <div className={styles.badge}>
          <HiSparkles className={styles.badgeIcon} />
          <span>Limited Time Cashback Offer</span>
        </div>

        <div className={styles.imageContainer}>
          <Image
            src="/popup.png"
            alt="Insurance Cashback Illustration"
            width={340}
            height={220}
            priority
            className={styles.offerImage}
          />
        </div>

        <h2 className={styles.title}>
          Get Assured Cashback
          <span className={styles.gradientText}> on Every Insurance</span>
        </h2>

        <p className={styles.description}>
          Purchase any insurance policy through Visezy and unlock guaranteed
          cashback rewards on every successful insurance purchase.
        </p>

        <div className={styles.offerBox}>
          <span className={styles.offerLabel}>UP TO</span>
          <h3 className={styles.amount}>₹5,000</h3>
          <p className={styles.offerSubtext}>Instant Cashback Rewards</p>
        </div>

        <div className={styles.actions}>
          <button className={styles.primaryBtn} type="button">
            Claim Cashback Now
          </button>
          <button
            className={styles.secondaryBtn}
            onClick={closePopup}
            type="button"
          >
            Continue Browsing
          </button>
        </div>

      </div>
    </div>
  );
}