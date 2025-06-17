"use client";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import Feed from "../components/feed";
import { useUser } from "@/context/UserContext";

export default function FeedPage() {
  const router = useRouter();
  const { user } = useUser();

  useEffect(() => {
    if (!user) {
      router.push("/login");
    }
  }, [user, router]);

  if (!user) return null;

  return (
    <div className="p-4">
      <Feed />
    </div>
  );
}