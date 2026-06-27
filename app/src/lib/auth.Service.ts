import api from "./axios";

export const adminExists = () =>
    api.get("/auth/admin-exists");

export const signup = (data: {
    name: string;
    email: string;
    password: string;
}) =>
    api.post("/auth/signup", data);

export const verifyOTP = (
    email: string,
    otp: string
) =>
    api.post("/auth/verify-otp", {
        email,
        otp,
    });

export const resendOTP = (
    email: string
) =>
    api.post("/auth/resend-otp", {
        email,
    });

export const login = (data: {
    email: string;
    password: string;
}) =>
    api.post("/auth/login", data);

export const logout = () =>
    api.post("/auth/logout");

export const me = () =>
    api.get("/auth/me");

export const forgotPassword = (
    email: string
) =>
    api.post("/auth/forgot-password", {
        email,
    });

export const resetPassword = (
    token: string,
    password: string
) =>
    api.post(
        `/auth/reset-password/${token}`,
        {
            password,
        }
    );

export const changePassword = (
    data: {
        oldPassword: string;
        newPassword: string;
        confirmPassword: string;
    }
) =>
    api.put(
        "/auth/change-password",
        data
    );