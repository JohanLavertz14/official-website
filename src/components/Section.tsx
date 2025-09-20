import React from "react";

export default function Section({ id, title, children }: { id: string; title: string; children: React.ReactNode }) {
  return (
    <section id={id} className="scroll-mt-24 py-16 md:py-24">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-semibold tracking-tight mb-8">
          <span
            className="px-3 py-1 rounded-full text-orange-800 bg-orange-50 border border-orange-100
              dark:text-orange-300 dark:bg-orange-950/50 dark:border-orange-900"
          >
            {title}
          </span>
        </h2>
        {children}
      </div>
    </section>
  );
}