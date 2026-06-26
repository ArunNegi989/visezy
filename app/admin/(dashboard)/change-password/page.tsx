"use client";

import { useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

import {
  FaEye,
  FaEyeSlash,
  FaArrowLeft,
  FaLock,
} from "react-icons/fa";

import { changePassword } from "@/app/src/lib/auth.Service";
import { validatePassword } from "@/app/src/lib/auth.validation";

import styles from "./page.module.css";

export default function ChangePasswordPage() {
  const router = useRouter();

  /* ===============================
      States
  =============================== */

  const [currentPassword, setCurrentPassword] =
    useState("");

  const [newPassword, setNewPassword] =
    useState("");

  const [
    confirmPassword,
    setConfirmPassword,
  ] = useState("");

  const [showCurrent, setShowCurrent] =
    useState(false);

  const [showNew, setShowNew] =
    useState(false);

  const [
    showConfirm,
    setShowConfirm,
  ] = useState(false);

  const [loading, setLoading] =
    useState(false);

  /* ===============================
      Password Validation
  =============================== */

  const passwordValidation =
    useMemo(
      () =>
        validatePassword(
          newPassword
        ),
      [newPassword]
    );

  const isStrongPassword =
    useMemo(
      () =>
        Object.values(
          passwordValidation
        ).every(Boolean),
      [passwordValidation]
    );

  const passwordMatched =
    newPassword.length > 0 &&
    confirmPassword.length > 0 &&
    newPassword === confirmPassword;

  /* ===============================
      Go Back
  =============================== */

  const handleBack = () => {
    router.back();
  };

  /* ===============================
      Submit
  =============================== */

  const handleSubmit = async (
    e: React.FormEvent
  ) => {
    e.preventDefault();

    if (
      !currentPassword ||
      !newPassword ||
      !confirmPassword
    ) {
      toast.error(
        "Please fill all fields."
      );
      return;
    }

    if (!isStrongPassword) {
      toast.error(
        "Password does not meet all requirements."
      );
      return;
    }

    if (!passwordMatched) {
      toast.error(
        "Passwords do not match."
      );
      return;
    }

    try {
      setLoading(true);

      await changePassword({
        oldPassword:
          currentPassword,
        newPassword,
        confirmPassword,
      });

      toast.success(
        "Password changed successfully."
      );

      router.push(
        "/admin/profile"
      );
    } catch (error: any) {
      toast.error(
        error?.response?.data
          ?.message ||
        "Unable to change password."
      );
    } finally {
      setLoading(false);
    }
  };
  return (
    <div className={styles.wrapper}>
      <div className={styles.card}>
        {/* Header */}

        <div className={styles.header}>
          <button
            type="button"
            onClick={handleBack}
            className={styles.backButton}
          >
            <FaArrowLeft />
            <span>Back</span>
          </button>

          <div className={styles.icon}>
            <FaLock />
          </div>

          <h1>Change Password</h1>

          <p className={styles.pTag}>
            Update your account password to keep
            your administrator account secure.
          </p>
        </div>

        {/* Form */}

        <form
          onSubmit={handleSubmit}
          className={styles.form}
        >
          {/* ===========================
              Current Password
          =========================== */}

          <div className={styles.field}>
            <label>
              Current Password
            </label>

            <div
              className={
                styles.passwordWrapper
              }
            >
              <input
                type={
                  showCurrent
                    ? "text"
                    : "password"
                }
                value={currentPassword}
                placeholder="Enter current password"
                autoComplete="current-password"
                onChange={(e) =>
                  setCurrentPassword(
                    e.target.value
                  )
                }
              />

              <button
                type="button"
                className={
                  styles.eyeButton
                }
                onClick={() =>
                  setShowCurrent(
                    !showCurrent
                  )
                }
              >
                {showCurrent ? (
                  <FaEyeSlash />
                ) : (
                  <FaEye />
                )}
              </button>
            </div>
          </div>

          {/* ===========================
              New Password
          =========================== */}

          <div className={styles.field}>
            <label>
              New Password
            </label>

            <div
              className={
                styles.passwordWrapper
              }
            >
              <input
                type={
                  showNew
                    ? "text"
                    : "password"
                }
                value={newPassword}
                placeholder="Create new password"
                autoComplete="new-password"
                onChange={(e) =>
                  setNewPassword(
                    e.target.value
                  )
                }
              />

              <button
                type="button"
                className={
                  styles.eyeButton
                }
                onClick={() =>
                  setShowNew(
                    !showNew
                  )
                }
              >
                {showNew ? (
                  <FaEyeSlash />
                ) : (
                  <FaEye />
                )}
              </button>
            </div>
          </div>              {/* ===========================
              Confirm Password
          =========================== */}

          <div className={`${styles.field} ${styles.fullWidth}`}>
            <label>
              Confirm Password
            </label>

            <div className={styles.passwordWrapper}>
              <input
                type={
                  showConfirm
                    ? "text"
                    : "password"
                }
                value={confirmPassword}
                placeholder="Confirm new password"
                autoComplete="new-password"
                onChange={(e) =>
                  setConfirmPassword(
                    e.target.value
                  )
                }
              />

              <button
                type="button"
                className={styles.eyeButton}
                onClick={() =>
                  setShowConfirm(
                    !showConfirm
                  )
                }
              >
                {showConfirm ? (
                  <FaEyeSlash />
                ) : (
                  <FaEye />
                )}
              </button>
            </div>
          </div>

          {/* ===========================
              Password Requirements
          =========================== */}

          <div
            className={`${styles.requirements} ${styles.fullWidth}`}
          >
            <h3>
              Password Requirements
            </h3>

            <div className={styles.rule}>
              <span
                className={
                  passwordValidation.length
                    ? styles.valid
                    : styles.invalid
                }
              >
                {passwordValidation.length
                  ? "✓"
                  : "•"}
              </span>

              <p>
                Minimum 8 characters
              </p>
            </div>

            <div className={styles.rule}>
              <span
                className={
                  passwordValidation.uppercase
                    ? styles.valid
                    : styles.invalid
                }
              >
                {passwordValidation.uppercase
                  ? "✓"
                  : "•"}
              </span>

              <p>
                One uppercase letter
              </p>
            </div>

            <div className={styles.rule}>
              <span
                className={
                  passwordValidation.lowercase
                    ? styles.valid
                    : styles.invalid
                }
              >
                {passwordValidation.lowercase
                  ? "✓"
                  : "•"}
              </span>

              <p>
                One lowercase letter
              </p>
            </div>

            <div className={styles.rule}>
              <span
                className={
                  passwordValidation.number
                    ? styles.valid
                    : styles.invalid
                }
              >
                {passwordValidation.number
                  ? "✓"
                  : "•"}
              </span>

              <p>
                One numeric digit
              </p>
            </div>

            <div className={styles.rule}>
              <span
                className={
                  passwordValidation.special
                    ? styles.valid
                    : styles.invalid
                }
              >
                {passwordValidation.special
                  ? "✓"
                  : "•"}
              </span>

              <p>
                One special character
              </p>
            </div>

            <div className={styles.rule}>
              <span
                className={
                  passwordMatched
                    ? styles.valid
                    : styles.invalid
                }
              >
                {passwordMatched
                  ? "✓"
                  : "•"}
              </span>

              <p>
                Passwords match
              </p>
            </div>
          </div>

          {/* ===========================
              Action Buttons
          =========================== */}

          <div className={styles.actions}>
            <button
              type="button"
              className={styles.cancelBtn}
              onClick={handleBack}
            >
              Cancel
            </button>

            <button
              type="submit"
              disabled={loading}
              className={styles.saveBtn}
            >
              {loading ? (
                <>
                  <span
                    className={styles.loader}
                  />
                  Updating...
                </>
              ) : (
                "Update Password"
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}