"use client";

import Link from "next/link";
import Image from "next/image";
import { FaArrowLeft, FaEye, FaEyeSlash } from "react-icons/fa";
import { useState } from "react";

import styles from "./signup.module.css";

export default function SignupPage() {
  const [showPassword, setShowPassword] =
    useState(false);

  const [showConfirmPassword, setShowConfirmPassword] =
    useState(false);

  return (
    <main className={styles.wrapper}>
      {/* FORM SIDE */}
      <div className={styles.leftPanel}>
        <div className={styles.formContainer}>
                   <h1>Create Account</h1>

          <p className={styles.subtitle}>
            Start comparing insurance plans and
            secure your future today.
          </p>

          <form className={styles.form}>
            <div className={styles.field}>
              <label>Full Name</label>

              <input
                type="text"
                placeholder="Enter your full name"
              />
            </div>

            <div className={styles.field}>
              <label>Email Address</label>

              <input
                type="email"
                placeholder="Enter your email"
              />
            </div>

            <div className={styles.field}>
              <label>Phone Number</label>

              <input
                type="tel"
                placeholder="Enter your phone number"
              />
            </div>

            <div className={styles.field}>
              <label>Password</label>

              <div className={styles.passwordWrapper}>
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Create password"
                />

                <button
                  type="button"
                  onClick={() =>
                    setShowPassword(!showPassword)
                  }
                >
                  {showPassword ? (
                    <FaEyeSlash />
                  ) : (
                    <FaEye />
                  )}
                </button>
              </div>
            </div>

            <div className={styles.field}>
              <label>Confirm Password</label>

              <div className={styles.passwordWrapper}>
                <input
                  type={
                    showConfirmPassword
                      ? "text"
                      : "password"
                  }
                  placeholder="Confirm password"
                />

                <button
                  type="button"
                  onClick={() =>
                    setShowConfirmPassword(
                      !showConfirmPassword
                    )
                  }
                >
                  {showConfirmPassword ? (
                    <FaEyeSlash />
                  ) : (
                    <FaEye />
                  )}
                </button>
              </div>
            </div>

            <button
              className={styles.signupButton}
              type="submit"
            >
              Create Account
            </button>
          </form>

          <p className={styles.loginText}>
            Already have an account?
            <Link href="/login">
              Login
            </Link>
          </p>
        </div>
      </div>

      {/* IMAGE SIDE */}
      <div className={styles.rightPanel}>
        <div className={styles.imageOverlay}>
          <div className={styles.brandContent}>
            <Image
              src="/visezy-logo.png"
              alt="Visezy"
              width={180}
              height={60}
            />

            <h2>
              Secure Your Future
              With Confidence
            </h2>

            <p>
              Join thousands of customers who
              trust Visezy to compare, choose and
              manage their insurance coverage.
            </p>

            <div className={styles.stats}>
              <div>
                <h3>10K+</h3>
                <span>Happy Customers</span>
              </div>

              <div>
                <h3>500+</h3>
                <span>Insurance Plans</span>
              </div>

              <div>
                <h3>24/7</h3>
                <span>Support</span>
              </div>
            </div>
          </div>
        </div>

        <Image
          src="https://images.unsplash.com/photo-1511988617509-a57c8a288659?auto=format&fit=crop&w=1600&q=80"
          alt="Insurance Family"
          fill
          priority
          className={styles.bgImage}
        />
      </div>
    </main>
  );
}