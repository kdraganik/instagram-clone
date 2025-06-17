"use client";

import { usePathname } from "next/navigation";
import { Navbar } from "./navbar";

export const ConditionalNavbar = () => {
  const pathname = usePathname();
  if (pathname === "/login" || pathname === "/register") return null;
  return <Navbar />;
};
