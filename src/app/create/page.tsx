"use client";

import { useState } from "react";
import { useUser } from "@/context/UserContext";

export default function CreatePostPage() {
  const { user } = useUser();
  const [bio, setBio] = useState("");
  const [file, setFile] = useState<File | null>(null);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    if (!file || !bio) {
      setError("Wszystkie pola są wymagane");
      return;
    }
    if (!user) {
      setError("Brak zalogowanego użytkownika");
      return;
    }
    // Create form data with userId from context.
    const formData = new FormData();
    formData.append("file", file);
    formData.append("bio", bio);
    formData.append("userId", user.id);

    const res = await fetch("/api/post", {
      method: "POST",
      body: formData,
    });

    if (!res.ok) {
      const data = await res.json();
      setError(data.error || "Nie udało się utworzyć posta");
    } else {
      window.location.href = "/";
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-bgLight">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 border border-border rounded-xl shadow-sm space-y-4"
      >
        {error && (
          <div className="text-red-500 text-sm text-center">{error}</div>
        )}
        <input
          type="file"
          onChange={(e) => e.target.files && setFile(e.target.files[0])}
          className="w-full px-4 py-2 border border-border rounded-lg"
        />
        <textarea
          placeholder="Bio"
          value={bio}
          onChange={(e) => setBio(e.target.value)}
          className="w-full px-4 py-2 border border-border rounded-lg"
        />
        <button
          type="submit"
          className="w-full py-2 border border-border rounded-lg bg-primary text-white font-semibold hover:bg-accent transition-colors"
        >
          Create Post
        </button>
      </form>
    </div>
  );
}