"use client";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import Feed from "../components/feed";

export default function Home() {
  const router = useRouter();

  // useEffect(() => {
  //   if (!localStorage.getItem("token")) {
  //     router.push("/login");
  //   }
  // }, [router]);

  return <Feed />;
}