"use client";

import { usePathname } from "next/navigation";

export const ConditionalMarginWrapper = ({ children }: { children: React.ReactNode }) => {
  const pathname = usePathname();
  const hasMargin = pathname !== "/login" && pathname !== "/register";
  return <div className={`${hasMargin ? "ml-72" : ""} flex-1`}>{children}</div>;
};
