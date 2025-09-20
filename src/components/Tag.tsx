import React from "react";

export default function Tag({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-full border border-orange-200 bg-orange-50/60 px-3 py-1 text-xs font-medium text-orange-700">
      {children}
    </span>
  );
}