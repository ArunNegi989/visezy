"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

import { useAuth } from "@/app/src/hooks/useAuth";

import AuthLoader from "./AuthLoader";

interface Props {
    children: React.ReactNode;
}

export default function ProtectedRoute({
    children,
}: Props) {
    const router = useRouter();

    const {
        authenticated,
        loading,
    } = useAuth();

    useEffect(() => {
        if (!loading && !authenticated) {
            router.replace("/admin/login");
        }
    }, [
        loading,
        authenticated,
        router,
    ]);

    if (loading) {
        return <AuthLoader />;
    }

    if (!authenticated) {
        return null;
    }

    return <>{children}</>;
}