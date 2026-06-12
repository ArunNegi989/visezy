"use client";
import CustomerTestimonials from "@/components/sections/CustomerTestimonials/CustomerTestimonials";
import React, { useState } from "react";
import styles from "./contact-us.module.css";
import {
  HiOutlineMail,
  HiOutlinePhone,
  HiOutlineLocationMarker,
  HiChevronRight
} from "react-icons/hi";

export default function Contact() {
  type FormState = {
    name: string;
    email: string;
    phone: string;
    msg: string;
  };

  const [formState, setFormState] = useState<FormState>({
    name: "",
    email: "",
    phone: "",
    msg: "",
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    field: keyof FormState
  ) => {
    setFormState((prev) => ({
      ...prev,
      [field]: e.target.value,
    }));
  };
return (
  <>
    <section
      id="contact"
      className={styles.section}
      aria-labelledby="contact-heading"
    >
      {/* Dynamic structural background layers */}
      <div className={styles.ambientGlow} aria-hidden="true" />
      <div className={styles.gridCanvas} aria-hidden="true" />

      <div className={styles.container}>
        {/* Left Side: Editorial Platform Info */}
        <div className={styles.leftColumn}>
          <div className={styles.badge}>
            <span className={styles.badgePulse} />
            <span className={styles.badgeText}>Connect Instantly</span>
          </div>

          <h2 id="contact-heading" className={styles.title}>
            Let's Find The Right <br />
            <span className={styles.gradientText}>Insurance Shield</span>
          </h2>

          <p className={styles.description}>
            Skip the generic support queues. Drop your configuration
            parameters below and connect directly with an underwriting
            strategist certified for your specific risk category.
          </p>

          <div className={styles.infoStack}>
            <div className={styles.infoRow}>
              <div className={styles.iconBox}>
                <HiOutlinePhone />
              </div>
              <div className={styles.infoMeta}>
                <span className={styles.metaLabel}>
                  Direct Routing Line
                </span>
                <span className={styles.metaValue}>
                  +91 96345 56234
                </span>
              </div>
            </div>

            <div className={styles.infoRow}>
              <div className={styles.iconBox}>
                <HiOutlineMail />
              </div>
              <div className={styles.infoMeta}>
                <span className={styles.metaLabel}>
                  Enterprise Delivery
                </span>
                <span className={styles.metaValue}>
                  sales@visezy.in
                </span>
              </div>
            </div>

            <div className={styles.infoRow}>
              <div className={styles.iconBox}>
                <HiOutlineLocationMarker />
              </div>
              <div className={styles.infoMeta}>
                <span className={styles.metaLabel}>
                  HQ Operations Matrix
                </span>
                <span className={styles.metaValue}>
                  Dehradun, Uttarakhand, India
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side: High-Tier Glass Form Capsule */}
        <div className={styles.rightColumn}>
          <form
            className={styles.formCapsule}
            onSubmit={(e) => e.preventDefault()}
          >
            <div className={styles.formHeader}>
              <h3>Initialize Callback</h3>
              <p>Average queue response speed: 4 minutes.</p>
            </div>

            <div className={styles.inputGroup}>
              <input
                type="text"
                required
                placeholder=" "
                value={formState.name}
                onChange={(e) => handleInputChange(e, "name")}
                className={styles.formInput}
              />
              <label className={styles.floatingLabel}>
                Full Name
              </label>
              <div className={styles.inputFocusLine} />
            </div>

            <div className={styles.inputGroup}>
              <input
                type="email"
                required
                placeholder=" "
                value={formState.email}
                onChange={(e) => handleInputChange(e, "email")}
                className={styles.formInput}
              />
              <label className={styles.floatingLabel}>
                Email Address
              </label>
              <div className={styles.inputFocusLine} />
            </div>

            <div className={styles.inputGroup}>
              <input
                type="tel"
                required
                placeholder=" "
                value={formState.phone}
                onChange={(e) => handleInputChange(e, "phone")}
                className={styles.formInput}
              />
              <label className={styles.floatingLabel}>
                Phone Number
              </label>
              <div className={styles.inputFocusLine} />
            </div>

            <div className={styles.inputGroup}>
              <textarea
                rows={4}
                required
                placeholder=" "
                value={formState.msg}
                onChange={(e) => handleInputChange(e, "msg")}
                className={styles.formTextarea}
              />
              <label className={styles.floatingLabel}>
                Coverage Parameters & Notes
              </label>
              <div className={styles.inputFocusLine} />
            </div>

            <button type="submit" className={styles.submitBtn}>
              <span className={styles.btnText}>
                Dispatch Secure Request
              </span>

              <div className={styles.btnArrowWrapper}>
                <HiChevronRight className={styles.btnArrow} />
              </div>
            </button>
          </form>
        </div>
      </div>
    </section>

    {/* NEW TESTIMONIAL SECTION */}
    <CustomerTestimonials />
  </>
);
}