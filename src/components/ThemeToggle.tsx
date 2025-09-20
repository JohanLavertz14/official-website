"use client";
import React, { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";

function getSystemPrefersDark() {
  if (typeof window === "undefined") return false;
  return window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches;
}

export default function ThemeToggle() {
  const [mounted, setMounted] = useState(false);
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    setMounted(true);
    const saved = typeof window !== "undefined" ? localStorage.getItem("theme") : null;
    const shouldDark = saved ? saved === "dark" : getSystemPrefersDark();
    document.documentElement.classList.toggle("dark", shouldDark);
    setIsDark(shouldDark);
  }, []);

  const toggle = () => {
    const next = !isDark;
    setIsDark(next);
    document.documentElement.classList.toggle("dark", next);
    localStorage.setItem("theme", next ? "dark" : "light");
  };

  if (!mounted) return (
    <button aria-label="Toggle theme" className="inline-flex items-center justify-center rounded-full border border-white/10 px-2 py-2">
      <Moon className="h-4 w-4" />
    </button>
  );

  return (
    <button onClick={toggle} aria-label="Toggle theme" className="inline-flex items-center justify-center rounded-full border px-2 py-2 hover:bg-gray-50 dark:border-white/10 dark:hover:bg-white/5">
      {isDark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
    </button>
  );
}