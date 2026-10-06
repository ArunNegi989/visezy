"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import GuestRoute from "@/components/auth/GuestRoute";
import styles from "./forgotPassword.module.css";
import { forgotPassword } from "@/app/src/lib/auth.Service";

export default function ForgotPasswordPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      setLoading(true);
      const res = await forgotPassword(email);
      toast.success(res.data.message);
      setTimeout(() => router.replace("/admin/login"), 2000);
    } catch (error: any) {
      toast.error(error?.response?.data?.message || "Something went wrong.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <GuestRoute>
      <div className={styles.pageWrapper}>
        {/* Left Side Branding */}
        <div className={styles.leftSide}>
          <h2>Vinsure Secure</h2>
          <p>Protecting your insurance business data with enterprise-grade security.</p>
        </div>

        {/* Right Side Form */}
        <div className={styles.rightSide}>
          <form onSubmit={handleSubmit} className={styles.form}>
            <h1 className={styles.title}>Reset Password</h1>
            <p className={styles.subtitle}>Enter your email to recover your Vinsure access.</p>
            
            <div className={styles.field}>
              <label>Email Address</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="abc@def.gh"
                required
              />
            </div>

            <button type="submit" disabled={loading} className={styles.submitButton}>
              {loading ? "Processing..." : "Send Reset Link"}
            </button>

            <Link href="/admin/login" style={{ textAlign: 'center', color: '#64748b', fontSize: '0.9rem' }}>
              Back to Login
            </Link>
          </form>
        </div>
      </div>
    </GuestRoute>
  );
}