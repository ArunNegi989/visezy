"use client";

import Link from "next/link";
import Image from "next/image";
import { FaArrowLeft, FaEye, FaEyeSlash } from "react-icons/fa";
import { useState } from "react";

import styles from "./login.module.css";

export default function LoginPage() {
  const [showPassword, setShowPassword] =
    useState(false);

  return (
    <main className={styles.wrapper}>
      <div className={styles.leftPanel}>
        <div className={styles.imageOverlay}>
          <div className={styles.brandContent}>
            <Image
              src="/visezy-logo.png"
              alt="Visezy"
              width={180}
              height={60}
            />

            <h2>
              Protect What Matters
              Most
            </h2>

            <p>
              Compare insurance plans,
              find the best coverage,
              and secure your future
              with confidence.
            </p>
          </div>
        </div>

        <Image
          src="https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?auto=format&fit=crop&w=1400&q=80"
          alt="Insurance"
          fill
          priority
          className={styles.bgImage}
        />
      </div>

      <div className={styles.rightPanel}>
        <div className={styles.formContainer}>
          <Link
            href="/"
            className={styles.backLink}
          >
            <FaArrowLeft />
            Back To Home
          </Link>

          <h1>Welcome Back</h1>

          <p className={styles.subtitle}>
            Login to your account and
            continue exploring insurance
            plans.
          </p>

          <form className={styles.form}>
            <div className={styles.field}>
              <label>Email Address</label>

              <input
                type="email"
                placeholder="Enter your email"
              />
            </div>

            <div className={styles.field}>
              <label>Password</label>

              <div
                className={
                  styles.passwordWrapper
                }
              >
                <input
                  type={
                    showPassword
                      ? "text"
                      : "password"
                  }
                  placeholder="Enter your password"
                />

                <button
                  type="button"
                  onClick={() =>
                    setShowPassword(
                      !showPassword
                    )
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

            <div
              className={
                styles.formOptions
              }
            >
              <Link href="#">
                Forgot Password?
              </Link>
            </div>

            <button
              className={
                styles.loginButton
              }
              type="submit"
            >
              Sign In
            </button>
          </form>

          <p className={styles.signupText}>
            Don't have an account?
            <Link href="/signup">
              Sign Up
            </Link>
          </p>
        </div>
      </div>
    </main>
  );
}