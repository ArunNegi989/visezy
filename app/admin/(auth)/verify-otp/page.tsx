"use client";

import {
    useEffect,
    useRef,
    useState,
} from "react";

import { useRouter, useSearchParams } from "next/navigation";

import { toast } from "sonner";

import GuestRoute from "@/components/auth/GuestRoute";



import styles from "./verifyOtp.module.css";
import { verifyOTP, resendOTP } from "@/app/src/lib/auth.Service";

export default function VerifyOTPPage() {
    const router = useRouter();

    const searchParams =
        useSearchParams();

    const email =
        searchParams.get("email") || "";

    const [otp, setOtp] =
        useState(["", "", "", "", "", ""]);

    const [loading, setLoading] =
        useState(false);

    const [resending, setResending] =
        useState(false);

    const [timer, setTimer] =
        useState(60);

    const inputRefs =
        useRef<HTMLInputElement[]>([]);
    useEffect(() => {
        if (timer === 0) return;

        const interval = setInterval(() => {
            setTimer((prev) => prev - 1);
        }, 1000);

        return () =>
            clearInterval(interval);
    }, [timer]);

    useEffect(() => {
  if (!email) {
    toast.error("Invalid verification session.");
    router.replace("/admin/signup");
  }
}, [email, router]);

    const handleChange = (
        value: string,
        index: number
    ) => {

        if (!/^\d?$/.test(value))
            return;

        const newOtp = [...otp];

        newOtp[index] = value;

        setOtp(newOtp);

        if (
            value &&
            index < 5
        ) {
            inputRefs.current[
                index + 1
            ]?.focus();
        }
    };

    const handleKeyDown = (
        e: React.KeyboardEvent<HTMLInputElement>,
        index: number
    ) => {

        if (
            e.key === "Backspace" &&
            !otp[index] &&
            index > 0
        ) {
            inputRefs.current[
                index - 1
            ]?.focus();
        }

    };
    const handlePaste = (
        e: React.ClipboardEvent
    ) => {

        e.preventDefault();

        const pasted =
            e.clipboardData
                .getData("text")
                .trim()
                .slice(0, 6);

        if (!/^\d+$/.test(pasted))
            return;

        const values =
            pasted.split("");

        while (
            values.length < 6
        ) {
            values.push("");
        }

        setOtp(values);

        inputRefs.current[
            Math.min(
                pasted.length - 1,
                5
            )
        ]?.focus();

    };

    const handleVerify =
        async () => {

            const code =
                otp.join("");

            if (
                code.length !== 6
            ) {
                toast.error(
                    "Enter OTP."
                );
                return;
            }

            try {

                setLoading(true);

                await verifyOTP(
                    email,
                    code
                );

                toast.success(
                    "Email verified successfully."
                );

                router.replace(
                    "/admin/login"
                );

            } catch (error: any) {

                toast.error(
                    error?.response?.data
                        ?.message ||
                    "Verification failed."
                );

            } finally {

                setLoading(false);

            }

        };

    const handleResend =
        async () => {

            try {

                setResending(true);

                await resendOTP(
                    email
                );

                toast.success(
                    "OTP resent."
                );

                setTimer(60);

            } catch (error: any) {

                toast.error(
                    error?.response?.data
                        ?.message
                );

            } finally {

                setResending(false);

            }

        };
   return (
  <GuestRoute>
    <div className={styles.otpWrapper}>
      <div className={styles.otpCard}>
        <h2 className={styles.title}>Verify your email</h2>
        <p className={styles.subtitle}>Enter the 6-digit code sent to your email.</p>

        <div className={styles.otpInputs}>
          {otp.map((digit, index) => (
            <input
              key={index}
              ref={(el) => { if (el) inputRefs.current[index] = el; }}
              type="text"
              maxLength={1}
              className={styles.otpInput}
              value={digit}
              onPaste={handlePaste}
              onChange={(e) => handleChange(e.target.value, index)}
              onKeyDown={(e) => handleKeyDown(e, index)}
            />
          ))}
        </div>

        <button className={styles.verifyBtn} onClick={handleVerify} disabled={loading}>
          {loading ? "Verifying..." : "Verify Code"}
        </button>

        <div style={{ marginTop: '20px' }}>
          {timer > 0 ? (
            <p style={{ color: '#64748b' }}>Resend code in {timer}s</p>
          ) : (
            <button className={styles.resendBtn} onClick={handleResend} disabled={resending}>
              {resending ? "Sending..." : "Resend OTP"}
            </button>
          )}
        </div>
      </div>
    </div>
  </GuestRoute>
);
}