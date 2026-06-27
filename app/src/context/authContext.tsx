"use client";

import {
    createContext,
    useContext,
    useEffect,
    useState,
    ReactNode,
} from "react";



import AuthLoader from "@/components/auth/AuthLoader";
import { me,logout } from "../lib/auth.Service";

export interface Admin {
    id: string;
    name: string;
    email: string;
    role: string;
    verified: boolean;
    active: boolean;
    lastLogin: string | null;
}

interface AuthContextType {
    admin: Admin | null;

    loading: boolean;

    authenticated: boolean;

    checkAuth: () => Promise<void>;

    logoutAdmin: () => Promise<void>;
}

const AuthContext =
    createContext<AuthContextType | null>(
        null
    );

export function AuthProvider({
    children,
}: {
    children: ReactNode;
}) {
    const [admin, setAdmin] =
        useState<Admin | null>(null);

    const [loading, setLoading] =
        useState(true);

    const checkAuth =
        async () => {
            try {
                const res =
                    await me();

                setAdmin(
                    res.data.admin
                );
            } catch {
                setAdmin(null);
            } finally {
                setLoading(false);
            }
        };

    useEffect(() => {
        checkAuth();
    }, []);

    const logoutAdmin =
        async () => {
            await logout();

            setAdmin(null);
        };

    return (
        <AuthContext.Provider
            value={{
                admin,

                loading,

                authenticated:
                    !!admin,

                checkAuth,

                logoutAdmin,
            }}
        >
            {loading ? (
                <AuthLoader />
            ) : (
                children
            )}
        </AuthContext.Provider>
    );
}

export const useAuthContext =
    () => {
        const context =
            useContext(AuthContext);

        if (!context) {
            throw new Error(
                "useAuthContext must be used inside AuthProvider"
            );
        }

        return context;
    };