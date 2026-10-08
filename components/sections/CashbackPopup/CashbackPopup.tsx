"use client";

import { useEffect, useState } from "react";
import { HiX, HiSparkles, HiCheckCircle } from "react-icons/hi";
import Image from "next/image";
import PhoneInput, {
  isValidPhoneNumber,
} from "react-phone-number-input";
import "react-phone-number-input/style.css";
import styles from "./CashbackPopup.module.css";

type PhoneValue = string | undefined;

export default function CashbackPopup() {
  const [open, setOpen] = useState(false);

  // NEW: claim form state
  const [showClaimForm, setShowClaimForm] = useState(false);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState<PhoneValue>("");
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const [nameError, setNameError] = useState("");
  const [phoneError, setPhoneError] = useState("");

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
    const handleOpen = () => {
      setOpen(true);
    };

    window.addEventListener("openCashbackPopup", handleOpen);

    return () => {
      window.removeEventListener("openCashbackPopup", handleOpen);
    };
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
    setShowClaimForm(false);
    setSubmitted(false);

    setName("");
    setPhone("");
    setNameError("");
    setPhoneError("");
  };

  // NEW: open claim form
  const handleClaimCashback = () => {
    setShowClaimForm(true);
    setNameError("");
    setPhoneError("");
  };

  // NEW: submit cashback details
  const handleSubmit = async () => {
    let valid = true;

    setNameError("");
    setPhoneError("");

    if (!name.trim()) {
      setNameError("Please enter your name.");
      valid = false;
    } else if (name.trim().length < 2) {
      setNameError("Please enter a valid name.");
      valid = false;
    }

    if (!phone) {
      setPhoneError("Please enter your mobile number.");
      valid = false;
    } else if (!isValidPhoneNumber(phone)) {
      setPhoneError("Please enter a valid mobile number.");
      valid = false;
    }

    if (!valid) return;

    try {
      setSubmitting(true);

      const API_URL =
        process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000/api";

      const response = await fetch(`${API_URL}/cashback-leads`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: name.trim(),
          phone,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(
          data?.message || "Unable to submit your request."
        );
      }

      setSubmitted(true);
    } catch (error) {
      console.error("Cashback submission error:", error);

      setPhoneError(
        error instanceof Error
          ? error.message
          : "Something went wrong. Please try again."
      );
    } finally {
      setSubmitting(false);
    }
  };

  if (!open) return null;

  return (
    <div className={styles.overlay} onClick={closePopup}>
      <div
        className={styles.popup}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          className={styles.closeBtn}
          onClick={closePopup}
          aria-label="Close Popup"
        >
          <HiX />
        </button>

        <div className={styles.glow} />

        {!showClaimForm ? (
          <>
            {/* EXISTING CONTENT - UNCHANGED */}

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
              <span className={styles.gradientText}>
                {" "}
                on Every Insurance
              </span>
            </h2>

            <p className={styles.description}>
              Purchase any insurance policy through Vinsure and unlock
              guaranteed cashback rewards on every successful insurance
              purchase.
            </p>

            <div className={styles.offerBox}>
              <span className={styles.offerLabel}>UP TO</span>

              <h3 className={styles.amount}>₹5,000</h3>

              <p className={styles.offerSubtext}>
                Instant Cashback Rewards
              </p>
            </div>

            <div className={styles.actions}>
              <button
                className={styles.primaryBtn}
                type="button"
                onClick={handleClaimCashback}
              >
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
          </>
        ) : (
          <>
            {/* NEW FORM */}

            {!submitted ? (
              <div className={styles.claimForm}>
                <div className={styles.badge}>
                  <HiSparkles className={styles.badgeIcon} />
                  <span>Claim Your Cashback</span>
                </div>

                <h2 className={styles.title}>
                  Get Your
                  <span className={styles.gradientText}>
                    {" "}
                    Cashback
                  </span>
                </h2>

                <p className={styles.description}>
                  Enter your details below and our team will contact
                  you regarding your cashback offer.
                </p>

                <div className={styles.formGroup}>
                  <label htmlFor="cashback-name">
                    Full Name
                  </label>

                  <input
                    id="cashback-name"
                    type="text"
                    placeholder="Enter your full name"
                    value={name}
                    onChange={(e) => {
                      setName(e.target.value);
                      setNameError("");
                    }}
                    disabled={submitting}
                  />

                  {nameError && (
                    <span className={styles.formError}>
                      {nameError}
                    </span>
                  )}
                </div>

                <div className={styles.formGroup}>
                  <label htmlFor="cashback-phone">
                    Mobile Number
                  </label>

                  <PhoneInput
                    id="cashback-phone"
                    international
                    defaultCountry="IN"
                    value={phone}
                    onChange={(value) => {
                      setPhone(value);
                      setPhoneError("");
                    }}
                    placeholder="Enter mobile number"
                    disabled={submitting}
                  />

                  {phoneError && (
                    <span className={styles.formError}>
                      {phoneError}
                    </span>
                  )}
                </div>

                <div className={styles.formActions}>
                  <button
                    className={styles.primaryBtn}
                    type="button"
                    onClick={handleSubmit}
                    disabled={submitting}
                  >
                    {submitting
                      ? "Submitting..."
                      : "Submit"}
                  </button>

                  <button
                    className={styles.secondaryBtn}
                    type="button"
                    onClick={() => setShowClaimForm(false)}
                    disabled={submitting}
                  >
                    Back
                  </button>
                </div>
              </div>
            ) : (
              <div className={styles.successMessage}>
                <HiCheckCircle
                  className={styles.successIcon}
                />

                <h2 className={styles.title}>
                  Thank You!
                </h2>

                <p className={styles.description}>
                  Your cashback request has been submitted
                  successfully. Our team will contact you
                  shortly.
                </p>

                <button
                  className={styles.primaryBtn}
                  type="button"
                  onClick={closePopup}
                >
                  Continue Browsing
                </button>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
}