"use client";

import CustomerTestimonials from "@/components/sections/CustomerTestimonials/CustomerTestimonials";
import { submitInquiry } from "@/app/src/lib/contactService";

import React, { useState } from "react";

import styles from "./contact-us.module.css";

import {
  HiOutlineMail,
  HiOutlinePhone,
  HiOutlineLocationMarker,
  HiChevronRight,
} from "react-icons/hi";

type FormState = {
  name: string;
  email: string;
  phone: string;
  msg: string;
};

type ErrorState = {
  name: string;
  email: string;
  phone: string;
  msg: string;
};

const initialFormState: FormState = {
  name: "",
  email: "",
  phone: "",
  msg: "",
};

const initialErrorState: ErrorState = {
  name: "",
  email: "",
  phone: "",
  msg: "",
};

export default function Contact() {
  const [formState, setFormState] =
    useState<FormState>(initialFormState);

  const [errors, setErrors] =
    useState<ErrorState>(initialErrorState);

  const [loading, setLoading] =
    useState(false);

  const [success, setSuccess] =
    useState(false);

  const validateField = (
    field: keyof FormState,
    value: string
  ) => {
    switch (field) {
      case "name":
        if (!value.trim()) {
          return "Full name is required";
        }

        if (value.trim().length < 3) {
          return "Please enter your full name";
        }

        return "";

      case "email":
        if (!value.trim()) {
          return "Email address is required";
        }

        if (
          !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(
            value
          )
        ) {
          return "Please enter a valid email address";
        }

        return "";

      case "phone":
        if (!value.trim()) {
          return "Phone number is required";
        }

        if (!/^[6-9]\d{9}$/.test(value)) {
          return "Please enter a valid mobile number";
        }

        return "";

      case "msg":
        if (!value.trim()) {
          return "Message is required";
        }

        if (value.trim().length < 10) {
          return "Message must contain at least 10 characters";
        }

        return "";

      default:
        return "";
    }
  };

  const validateForm = () => {
    const newErrors: ErrorState = {
      name: validateField(
        "name",
        formState.name
      ),

      email: validateField(
        "email",
        formState.email
      ),

      phone: validateField(
        "phone",
        formState.phone
      ),

      msg: validateField(
        "msg",
        formState.msg
      ),
    };

    setErrors(newErrors);

    return !Object.values(newErrors).some(
      Boolean
    );
  };

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement
    >,
    field: keyof FormState
  ) => {
    const value = e.target.value;

    setFormState((prev) => ({
      ...prev,
      [field]: value,
    }));

    if (errors[field]) {
      setErrors((prev) => ({
        ...prev,
        [field]: validateField(
          field,
          value
        ),
      }));
    }
  };

  const handleBlur = (
    field: keyof FormState
  ) => {
    setErrors((prev) => ({
      ...prev,
      [field]: validateField(
        field,
        formState[field]
      ),
    }));
  };

  const handleSubmit = async (
    e: React.FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault();

    if (!validateForm()) return;

    try {
      setLoading(true);

      await submitInquiry({
        name: formState.name.trim(),
        email: formState.email.trim(),
        phone: formState.phone.trim(),
        message: formState.msg.trim(),
      });

      setSuccess(true);
      setTimeout(() => {
        setSuccess(false);
      }, 5000);
      setFormState(initialFormState);
      setErrors(initialErrorState);

      setTimeout(() => {
        setSuccess(false);
      }, 4000);
    } catch (error) {
      setErrors((prev) => ({
        ...prev,
        msg:
          error instanceof Error
            ? error.message
            : "Something went wrong. Please try again.",
      }));
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <section
        id="contact"
        className={styles.section}
        aria-labelledby="contact-heading"
      >
        <div
          className={styles.ambientGlow}
          aria-hidden="true"
        />

        <div
          className={styles.gridCanvas}
          aria-hidden="true"
        />

        <div className={styles.container}>
          <div className={styles.leftColumn}>
            <div className={styles.badge}>
              <span
                className={styles.badgePulse}
              />

              <span
                className={styles.badgeText}
              >
                Connect Instantly
              </span>
            </div>

            <h2
              id="contact-heading"
              className={styles.title}
            >
              Let's Find The Right <br />

              <span
                className={styles.gradientText}
              >
                Insurance Shield
              </span>
            </h2>

            <p className={styles.description}>
              Skip the generic support
              queues. Drop your
              configuration parameters
              below and connect directly
              with an underwriting
              strategist certified for
              your specific risk
              category.
            </p>

            <div className={styles.infoStack}>
              <div className={styles.infoRow}>
                <div
                  className={styles.iconBox}
                >
                  <HiOutlinePhone />
                </div>

                <div
                  className={styles.infoMeta}
                >
                  <span
                    className={
                      styles.metaLabel
                    }
                  >
                    Direct Routing Line
                  </span>

                  <span
                    className={
                      styles.metaValue
                    }
                  >
                    +91 96345 56234
                  </span>
                </div>
              </div>

              <div className={styles.infoRow}>
                <div
                  className={styles.iconBox}
                >
                  <HiOutlineMail />
                </div>

                <div
                  className={styles.infoMeta}
                >
                  <span
                    className={
                      styles.metaLabel
                    }
                  >
                    Enterprise Delivery
                  </span>

                  <span
                    className={
                      styles.metaValue
                    }
                  >
                    sales@visezy.in
                  </span>
                </div>
              </div>

              <div className={styles.infoRow}>
                <div
                  className={styles.iconBox}
                >
                  <HiOutlineLocationMarker />
                </div>

                <div
                  className={styles.infoMeta}
                >
                  <span
                    className={
                      styles.metaLabel
                    }
                  >
                    HQ Operations Matrix
                  </span>

                  <span
                    className={
                      styles.metaValue
                    }
                  >
                    Dehradun,
                    Uttarakhand, India
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className={styles.rightColumn}>
            {success ? (
              <div className={styles.successContainer}>
                <div className={styles.successShield}>
                  <svg
                    viewBox="0 0 120 120"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M60 10L95 24V52C95 76 79 98 60 110C41 98 25 76 25 52V24L60 10Z"
                      className={styles.shieldPath}
                    />

                    <path
                      d="M43 60L54 71L78 47"
                      className={styles.checkPath}
                    />
                  </svg>
                </div>

                <h3>Your Request Is Securely Submitted</h3>

                <p>
                  Thank you for contacting us. Our insurance specialist
                  will review your inquiry and get back to you shortly.
                </p>

                <div className={styles.successMeta}>
                  <span>🔒 End-to-End Encrypted</span>
                  <span>🛡️ Privacy Protected</span>
                  <span>⚡ Response Within 1 Day</span>
                </div>
              </div>
            ) : (
              <form
                className={styles.formCapsule}
                onSubmit={handleSubmit}
                noValidate
              >
                {/* Existing form content */}


                <div className={styles.inputGroup}>
                  <input
                    type="text"
                    placeholder=" "
                    value={formState.name}
                    onChange={(e) =>
                      handleInputChange(
                        e,
                        "name"
                      )
                    }
                    onBlur={() =>
                      handleBlur("name")
                    }
                    className={`${styles.formInput} ${errors.name
                      ? styles.inputError
                      : ""
                      }`}
                  />

                  <label
                    className={
                      styles.floatingLabel
                    }
                  >
                    Full Name
                  </label>

                  <div
                    className={
                      styles.inputFocusLine
                    }
                  />

                  {errors.name && (
                    <span
                      className={
                        styles.errorText
                      }
                    >
                      {errors.name}
                    </span>
                  )}
                </div>

                <div className={styles.inputGroup}>
                  <input
                    type="email"
                    placeholder=" "
                    value={formState.email}
                    onChange={(e) =>
                      handleInputChange(
                        e,
                        "email"
                      )
                    }
                    onBlur={() =>
                      handleBlur("email")
                    }
                    className={`${styles.formInput} ${errors.email
                      ? styles.inputError
                      : ""
                      }`}
                  />

                  <label
                    className={
                      styles.floatingLabel
                    }
                  >
                    Email Address
                  </label>

                  <div
                    className={
                      styles.inputFocusLine
                    }
                  />

                  {errors.email && (
                    <span
                      className={
                        styles.errorText
                      }
                    >
                      {errors.email}
                    </span>
                  )}
                </div>

                <div className={styles.inputGroup}>
                  <input
                    type="tel"
                    placeholder=" "
                    maxLength={10}
                    value={formState.phone}
                    onChange={(e) =>
                      handleInputChange(
                        e,
                        "phone"
                      )
                    }
                    onBlur={() =>
                      handleBlur("phone")
                    }
                    className={`${styles.formInput} ${errors.phone
                      ? styles.inputError
                      : ""
                      }`}
                  />

                  <label
                    className={
                      styles.floatingLabel
                    }
                  >
                    Phone Number
                  </label>

                  <div
                    className={
                      styles.inputFocusLine
                    }
                  />

                  {errors.phone && (
                    <span
                      className={
                        styles.errorText
                      }
                    >
                      {errors.phone}
                    </span>
                  )}
                </div>

                <div className={styles.inputGroup}>
                  <textarea
                    rows={4}
                    placeholder=" "
                    value={formState.msg}
                    onChange={(e) =>
                      handleInputChange(
                        e,
                        "msg"
                      )
                    }
                    onBlur={() =>
                      handleBlur("msg")
                    }
                    className={`${styles.formTextarea} ${errors.msg
                      ? styles.inputError
                      : ""
                      }`}
                  />

                  <label
                    className={
                      styles.floatingLabel
                    }
                  >
                    Coverage Parameters &
                    Notes
                  </label>

                  <div
                    className={
                      styles.inputFocusLine
                    }
                  />

                  {errors.msg && (
                    <span
                      className={
                        styles.errorText
                      }
                    >
                      {errors.msg}
                    </span>
                  )}
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className={styles.submitBtn}
                >
                  <span
                    className={styles.btnText}
                  >
                    {loading
                      ? "Submitting..."
                      : "Dispatch Secure Request"}
                  </span>

                  {!loading && (
                    <div
                      className={
                        styles.btnArrowWrapper
                      }
                    >
                      <HiChevronRight
                        className={
                          styles.btnArrow
                        }
                      />
                    </div>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

      <CustomerTestimonials />
    </>
  );
}