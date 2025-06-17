"use client";

import { useEffect, useState } from "react";
import { useUser } from "@/context/UserContext";
import Image from "next/image";

interface Post {
  id: string;
  imageUrl: string;
  caption?: string;
}

export default function ProfilePage() {
  const { user } = useUser();
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!user) return;
    async function fetchUserPosts() {
      try {
        const res = await fetch(`/api/posts?userId=${user?.id}`);
        const data = await res.json();
        setPosts(data);
      } catch (error) {
        console.error("Failed to fetch posts", error);
      } finally {
        setLoading(false);
      }
    }
    fetchUserPosts();
  }, [user]);

  if (!user) {
    return <div className="p-4">Loading...</div>;
  }

  return (
    <div className="max-w-4xl mx-auto px-4">
      {/* Profile Header Section */}
      <div className="flex items-center my-8">
        
      </div>
      {/* Posts Grid */}
      <div>
        
      </div>
    </div>
  );
}
