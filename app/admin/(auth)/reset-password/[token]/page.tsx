"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter, useParams } from "next/navigation";
import { toast } from "sonner";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import GuestRoute from "@/components/auth/GuestRoute";
import styles from "./resetPassword.module.css";
import { resetPassword } from "@/app/src/lib/auth.Service";
import { validatePassword } from "@/app/src/lib/auth.validation";

export default function ResetPasswordPage() {
const router = useRouter();

const params = useParams();

const token = params.token as string;
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const validation = validatePassword(password);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (password !== confirmPassword) return toast.error("Passwords do not match.");
    if (!Object.values(validation).every(Boolean)) return toast.error("Requirements not met.");

    try {
      setLoading(true);
const res = await resetPassword(token, password);
      toast.success(res.data.message);
      setTimeout(() => router.replace("/admin/login"), 1500);
    } catch (error: any) {
      toast.error(error?.response?.data?.message || "Reset failed.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <GuestRoute>
      <div className={styles.pageWrapper}>
        <div className={styles.leftSide}>
          <h1>Visezy Secure</h1>
          <p>Insurance simplified. Reset your password to continue managing your policies and clients with ease.</p>
        </div>

        <div className={styles.rightSide}>
          <form onSubmit={handleSubmit} className={styles.formContainer}>
            <h2 className={styles.headerTitle}>Create New Password</h2>
            <p className={styles.headerSubtitle}>Ensure your new password is unique and secure.</p>

            <div className={styles.field}>
              <label>New Password</label>
              <div className={styles.passwordWrapper}>
                <input type={showPassword ? "text" : "password"} value={password} onChange={(e) => setPassword(e.target.value)} />
                <button type="button" onClick={() => setShowPassword(!showPassword)}>{showPassword ? <FaEyeSlash /> : <FaEye />}</button>
              </div>
            </div>

            <div className={styles.field}>
              <label>Confirm Password</label>
              <div className={styles.passwordWrapper}>
                <input type={showConfirmPassword ? "text" : "password"} value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
                <button type="button" onClick={() => setShowConfirmPassword(!showConfirmPassword)}>{showConfirmPassword ? <FaEyeSlash /> : <FaEye />}</button>
              </div>
            </div>

            <div className={styles.rules}>
              <p>{validation.length ? "✅" : "❌"} Minimum 8 characters</p>
              <p>{validation.uppercase ? "✅" : "❌"} Uppercase Letter</p>
              <p>{validation.lowercase ? "✅" : "❌"} Lowercase Letter</p>
              <p>{validation.number ? "✅" : "❌"} Number</p>
              <p>{validation.special ? "✅" : "❌"} Special Character</p>
              
              <button type="submit" disabled={loading} className={styles.submitButton}>
                {loading ? "Resetting..." : "Reset Password"}
              </button>
            </div>
            <Link href="/admin/login" style={{ textAlign: 'center', color: '#64748b', fontSize: '0.9rem', marginTop: '10px' }}>Back to Login</Link>
          </form>
        </div>
      </div>
    </GuestRoute>
  );
}