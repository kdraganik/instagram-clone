"use client";

import { useState, useEffect, use } from "react";

export default function RegisterPage() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [passwordConfirm, setPasswordConfirm] = useState("");
    const [username, setUsername] = useState("");
    const [submitted, setSubmitted] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const [success, setSuccess] = useState(false);
    const [loading, setLoading] = useState(false);

    const handleRegister = (e: React.FormEvent) => {
        e.preventDefault();
        setSubmitted(true);
    };

    useEffect(() => {
        setError("");
        if (!submitted) return;
        if (password !== passwordConfirm) {
            setError("Hasła nie pasują do siebie");
            setLoading(false);
            return;
        }
        if (!email || !password || !username) {
            setError("Wszystkie pola są wymagane");
            setLoading(false);
            return;
        }
        fetch("/api/users", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                email,
                password,
                username
            }),
        }).then(async (response) => {
            console.log("Response:", response);
            setLoading(false);
            if (response.ok) {
                setSuccess(true);
                setError("");
                window.location.href = "/login";
            } else {
                const data = await response.json();
                setError(data.error || "Wystąpił błąd podczas rejestracji");
            }
        })
    }, [submitted]);

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
                    <input
                        type="text"
                        placeholder="Confirm Password"
                        value={passwordConfirm}
                        onChange={(e) => setPasswordConfirm(e.target.value)}
                        className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                    />
                    {error && (
                        <div className="text-red-500 text-sm text-center">
                            {error}
                        </div>
                    )}
                    <button
                        type="submit"
                        className="w-full py-2 border border-border rounded-lg bg-primary text-primar font-semibold hover:bg-accent transition-colors cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
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
