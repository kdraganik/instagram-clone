"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useUser } from "@/context/UserContext";

export default function LoginPage() {
    const { setUser } = useUser();
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const router = useRouter();

    const handleLogin = (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitted(true);
    };

    useEffect(() => {
        if (!isSubmitted) return;
        
        fetch("/api/users/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ username, password }),
        }).then(async (response) => {
            setIsSubmitted(false);
            if (response.ok) {
                const data = await response.json();
                setUser(data);
                router.push("/");
            } else {
                const data = await response.json();
                setError(data.error || "Wystąpił błąd podczas logowania");
            }
        });
    }, [isSubmitted, router, setUser]);

    return (
        <div className="min-h-screen flex items-center justify-center bg-bgLight">
            <div className="w-full max-w-sm bg-white p-8 border border-border rounded-xl shadow-sm">
                <h1 className="text-3xl font-bold text-center text-primary mb-6">
                    InstaClone
                </h1>
                <form onSubmit={handleLogin} className="space-y-4">
                    <input
                        type="text"
                        placeholder="Username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                    />
                    <input
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                    />
                    {error && (
                        <div className="text-red-500 text-sm text-center">
                            {error}
                        </div>
                    )}
                    <button
                        type="submit"
                        className="w-full py-2 border border-border rounded-lg bg-primary text-primar font-semibold hover:bg-accent transition-colors"
                    >
                        Zaloguj się
                    </button>
                </form>

                <div className="text-sm text-center mt-6 text-gray-500">
                    Nie masz konta?{" "}
                    <a href="/register" className="text-primary hover:underline">
                        Zarejestruj się
                    </a>
                </div>
            </div>
        </div>
    );
}