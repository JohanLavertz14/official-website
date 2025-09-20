import React from "react";

export default function Pill({ children }: { children: React.ReactNode }) {
  return (
    <span
      className="rounded-full bg-orange-100 text-orange-800 px-2.5 py-0.5 text-xs font-medium
        dark:bg-orange-950/50 dark:text-orange-300"
    >
      {children}
    </span>
  );
}