import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import {AuthData } from "@/src/types/(auth)/auth.type";

export default function useDashboardState() {
 
    const router = useRouter();

    const [user, setUser] = useState<AuthData | null>(null);
    const [checkingAuth, setCheckingAuth] = useState(true);

    useEffect(() => {
        const authData = localStorage.getItem("auth");

        if (!authData) {
            router.replace("/login");
            return;
        }

        try {
            const auth: AuthData = JSON.parse(authData);

            if (!auth.isAuthenticated) {
                localStorage.removeItem("auth");
                router.replace("/login");
                return;
            }

            setUser(auth);
            setCheckingAuth(false);
        } catch {
            localStorage.removeItem("auth");
            router.replace("/login");
        }
    }, [router]);

    const handleLogout = () => {
        localStorage.removeItem("auth");
        router.replace("/login");
    };
    return {
        user, checkingAuth, handleLogout
    };
}