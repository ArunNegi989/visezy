"use client";

"use client";

import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

import {
  FaArrowLeft,
  FaEye,
  FaEyeSlash,
} from "react-icons/fa";
import {
  login,
  adminExists,
} from "@/app/src/lib/auth.Service";
import { useAuth } from "@/app/src/hooks/useAuth";
import { useEffect, useState } from "react";
import GuestRoute from "@/components/auth/GuestRoute";

import styles from "./login.module.css";

export default function LoginPage() {

  const [showPassword, setShowPassword] =
    useState(false);
  const [showSignup, setShowSignup] =
    useState(false);
  const [email, setEmail] =
    useState("");

  const [password, setPassword] =
    useState("");

  const [loading, setLoading] =
    useState(false);

  const router = useRouter();

  const { checkAuth } =
    useAuth();

  const handleSubmit = async (
    e: React.FormEvent
  ) => {
    e.preventDefault();

    if (!email || !password) {
      toast.error(
        "Please fill all fields."
      );
      return;
    }

    try {

      setLoading(true);

      await login({
        email,
        password,
      });

      await checkAuth();

      toast.success(
        "Login successful."
      );

      router.replace("/admin");

    } catch (error: any) {

      const message =
        error?.response?.data
          ?.message ||
        "Login failed.";

      if (
        message.includes(
          "verify"
        )
      ) {

        toast.error(message);

        router.push(
          `/admin/verify-otp?email=${encodeURIComponent(
            email
          )}`
        );

        return;
      }

      toast.error(message);

    } finally {

      setLoading(false);

    }
  };

  useEffect(() => {
    const checkAdmin = async () => {
      try {
        const res = await adminExists();

        // API returns { exists: true/false }

        setShowSignup(!res.data.exists);

      } catch {
        // Agar API fail ho jaye to signup mat dikhao

        setShowSignup(false);
      }
    };

    checkAdmin();
  }, []);
  return (
    <GuestRoute>
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

            <form
              className={styles.form}
              onSubmit={handleSubmit}
            >
              <div className={styles.field}>
                <label>Email Address</label>

                <input
                  type="email"
                  value={email}
                  onChange={(e) =>
                    setEmail(
                      e.target.value
                    )
                  }
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
                    value={password}
                    onChange={(e) =>
                      setPassword(
                        e.target.value
                      )
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
                <Link
                  href="/admin/forgot-password"
                >
                  Forgot Password?
                </Link>
              </div>

              <button
                className={
                  styles.loginButton
                }
                type="submit"
                disabled={loading}
              >
                {loading
                  ? "Signing In..."
                  : "Sign In"}
              </button>
            </form>

           {showSignup && (
  <p className={styles.signupText}>
    Don't have an account?
    <Link href="/admin/signup">
      Sign Up
    </Link>
  </p>
)}
          </div>
        </div>
      </main>
    </GuestRoute>
  );
}