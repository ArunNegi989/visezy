"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import { FaEye, FaEyeSlash } from "react-icons/fa";

import GuestRoute from "@/components/auth/GuestRoute";
import { signup, adminExists } from "@/app/src/lib/auth.Service";
import { validatePassword } from "@/app/src/lib/auth.validation";

import styles from "./signup.module.css";

export default function SignupPage() {
  const router = useRouter();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] =
    useState(false);

  const [loading, setLoading] = useState(false);
  const [checkingAdmin, setCheckingAdmin] =
    useState(true);

  const passwordValidation =
    validatePassword(password);

  useEffect(() => {
    const checkAdmin = async () => {
      try {
        const res = await adminExists();

        if (res.data.exists) {
          toast.error(
            "Admin account already exists."
          );

          router.replace("/admin/login");
          return;
        }
      } catch {
        toast.error(
          "Unable to verify admin account."
        );
      } finally {
        setCheckingAdmin(false);
      }
    };

    checkAdmin();
  }, [router]);

  const handleSubmit = async (
    e: React.FormEvent
  ) => {
    e.preventDefault();

    if (
      !name ||
      !email ||
      !password ||
      !confirmPassword
    ) {
      toast.error("Please fill all fields.");
      return;
    }

    if (password !== confirmPassword) {
      toast.error("Passwords do not match.");
      return;
    }

    const strongPassword = Object.values(
      passwordValidation
    ).every(Boolean);

    if (!strongPassword) {
      toast.error(
        "Password does not meet the required criteria."
      );
      return;
    }

    try {
      setLoading(true);

      await signup({
        name,
        email,
        password,
      });

      toast.success(
        "OTP sent successfully."
      );

      router.push(
        `/admin/verify-otp?email=${encodeURIComponent(
          email
        )}`
      );
    } catch (error: any) {
      toast.error(
        error?.response?.data?.message ||
          "Signup failed."
      );
    } finally {
      setLoading(false);
    }
  };

  if (checkingAdmin) return null;

  return (
    <GuestRoute>
      <main className={styles.wrapper}>
        {/* Decorative Background */}
        <div className={styles.bgShapeOne} />
        <div className={styles.bgShapeTwo} />

        {/* LEFT PANEL */}

        <section className={styles.leftPanel}>
          <div className={styles.formCard}>

            <div className={styles.formHeader}>

              <span className={styles.badge}>
                Create Admin Account
              </span>

              <h1>Create Account</h1>

              <p>
                Securely create your administrator
                account to manage Visezy services,
                leads, blogs and website content.
              </p>

            </div>

            <form
              onSubmit={handleSubmit}
              className={styles.form}
            >
              {/* NAME */}

              <div className={styles.field}>
                <label htmlFor="name">
                  Full Name
                </label>

                <input
                  id="name"
                  type="text"
                  autoComplete="name"
                  placeholder="John Doe"
                  value={name}
                  onChange={(e) =>
                    setName(e.target.value)
                  }
                />
              </div>

              {/* EMAIL */}

              <div className={styles.field}>
                <label htmlFor="email">
                  Email Address
                </label>

                <input
                  id="email"
                  type="email"
                  autoComplete="email"
                  placeholder="john@example.com"
                  value={email}
                  onChange={(e) =>
                    setEmail(e.target.value)
                  }
                />
              </div>

              {/* PASSWORD */}

              <div className={styles.field}>
                <label htmlFor="password">
                  Password
                </label>

                <div
                  className={styles.passwordWrapper}
                >
                  <input
                    id="password"
                    type={
                      showPassword
                        ? "text"
                        : "password"
                    }
                    autoComplete="new-password"
                    placeholder="Create password"
                    value={password}
                    onChange={(e) =>
                      setPassword(
                        e.target.value
                      )
                    }
                  />

                  <button
                    type="button"
                    className={
                      styles.eyeButton
                    }
                    aria-label={
                      showPassword
                        ? "Hide password"
                        : "Show password"
                    }
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

              {/* CONFIRM PASSWORD */}

              <div className={styles.field}>
                <label htmlFor="confirmPassword">
                  Confirm Password
                </label>

                <div
                  className={styles.passwordWrapper}
                >
                  <input
                    id="confirmPassword"
                    type={
                      showConfirmPassword
                        ? "text"
                        : "password"
                    }
                    autoComplete="new-password"
                    placeholder="Confirm password"
                    value={confirmPassword}
                    onChange={(e) =>
                      setConfirmPassword(
                        e.target.value
                      )
                    }
                  />

                  <button
                    type="button"
                    className={
                      styles.eyeButton
                    }
                    aria-label={
                      showConfirmPassword
                        ? "Hide password"
                        : "Show password"
                    }
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

                {/* PASSWORD RULES */}

                <div
                  className={
                    styles.passwordRules
                  }
                >
                  <h4>
                    Password Requirements
                  </h4>

                  <div
                    className={styles.rule}
                  >
                    <span
                      className={
                        passwordValidation.length
                          ? styles.valid
                          : styles.invalid
                      }
                    >
                      ✓
                    </span>

                    <span>
                      Minimum 8 characters
                    </span>
                  </div>

                  <div
                    className={styles.rule}
                  >
                    <span
                      className={
                        passwordValidation.uppercase
                          ? styles.valid
                          : styles.invalid
                      }
                    >
                      ✓
                    </span>

                    <span>
                      One uppercase letter
                    </span>
                  </div>

                  <div
                    className={styles.rule}
                  >
                    <span
                      className={
                        passwordValidation.lowercase
                          ? styles.valid
                          : styles.invalid
                      }
                    >
                      ✓
                    </span>

                    <span>
                      One lowercase letter
                    </span>
                  </div>

                  <div
                    className={styles.rule}
                  >
                    <span
                      className={
                        passwordValidation.number
                          ? styles.valid
                          : styles.invalid
                      }
                    >
                      ✓
                    </span>

                    <span>
                      One numeric value
                    </span>
                  </div>

                  <div
                    className={styles.rule}
                  >
                    <span
                      className={
                        passwordValidation.special
                          ? styles.valid
                          : styles.invalid
                      }
                    >
                      ✓
                    </span>

                    <span>
                      One special character
                    </span>
                  </div>
                </div>
              </div>

              {/* BUTTON */}

              <button
                type="submit"
                disabled={loading}
                className={
                  styles.signupButton
                }
              >
                {loading ? (
                  <>
                    <span
                      className={
                        styles.loader
                      }
                    />
                    Creating Account...
                  </>
                ) : (
                  "Create Account"
                )}
              </button>
            </form>

            <div className={styles.footer}>
              <p>
                Already have an account?
              </p>

              <Link
                href="/admin/login"
              >
                Login Now
              </Link>
            </div>
          </div>
        </section>

        {/* RIGHT PANEL */}

        <section className={styles.rightPanel}>
          <Image
            src="https://images.unsplash.com/photo-1511988617509-a57c8a288659?auto=format&fit=crop&w=1800&q=80"
            alt="Insurance"
            fill
            priority
            className={styles.bgImage}
          />

          <div className={styles.overlay} />

          <div
            className={
              styles.rightContent
            }
          >
            <Image
              src="/visezy-logo.png"
              alt="Visezy"
              width={190}
              height={60}
              priority
            />

            <span className={styles.heroBadge}>
              India's Trusted Insurance Platform
            </span>

            <h2>
              Secure Your Future
              <br />
              With Complete Confidence
            </h2>

            <p>
              Compare insurance plans,
              manage customers,
              monitor leads and grow your
              business from one
              powerful dashboard.
            </p>

            <div
              className={styles.stats}
            >
              <div
                className={styles.statCard}
              >
                <h3>10K+</h3>

                <span>
                  Happy Customers
                </span>
              </div>

              <div
                className={styles.statCard}
              >
                <h3>500+</h3>

                <span>
                  Insurance Plans
                </span>
              </div>

              <div
                className={styles.statCard}
              >
                <h3>24/7</h3>

                <span>Support</span>
              </div>
            </div>
          </div>
        </section>
      </main>
    </GuestRoute>
  );
}