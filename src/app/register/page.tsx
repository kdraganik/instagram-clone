"use client";

import { useState, useEffect } from "react";

export default function RegisterPage() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [submitted, setSubmitted] = useState(false);

    const handleRegister = (e: React.FormEvent) => {
        e.preventDefault();
        setSubmitted(true);
    };

    useEffect(() => {
        if (submitted) {
            fetch("/api/users", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ email, password }),
            })
                .then((res) => res.json())
                .then((data) => {
                    console.log("Registration successful:", data);
                })
                .catch((err) => {
                    console.error("Registration error:", err);
                })
                .finally(() => {
                    setSubmitted(false);
                });
        }
    }, [submitted, email, password]);

    return (
        <div className="min-h-screen flex items-center justify-center bg-bgLight">
            <div className="w-full max-w-sm bg-white p-8 border border-border rounded-xl shadow-sm">
                <h1 className="text-3xl font-bold text-center text-primary mb-6">
                    InstaClone
                </h1>
                <form onSubmit={handleRegister} className="space-y-4">
                    <input
                        type="email"
                        placeholder="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                    />
                    <input
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                    />
                    <button
                        type="submit"
                        className="w-full py-2 border border-border rounded-lg bg-primary text-primar font-semibold hover:bg-accent transition-colors"
                    >
                        Zarejestruj się
                    </button>
                </form>
                <div className="text-sm text-center mt-6 text-gray-500">
                    Masz już konto?{" "}
                    <a href="/login" className="text-primary hover:underline">
                        Zaloguj się
                    </a>
                </div>
            </div>
        </div>
    );
}
