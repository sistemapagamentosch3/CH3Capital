"use client";

import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

export const HoverEffect = ({
  items,
  className,
}: {
  items: {
    title: string;
    description: string;
    icon: React.ReactNode;
    className?: string;
  }[];
  className?: string;
}) => {
  let [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div
      className={cn(
        "grid grid-cols-1 md:grid-cols-3 gap-6",
        className
      )}
    >
      {items.map((item, idx) => (
        <div
          key={item?.title}
          className={cn("relative group block h-full", item.className)}
          onMouseEnter={() => setHoveredIndex(idx)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <AnimatePresence>
            {hoveredIndex === idx && (
              <motion.span
                className="absolute inset-0 h-full w-full bg-brand-accent/20 block rounded-2xl -m-2"
                style={{ width: 'calc(100% + 16px)', height: 'calc(100% + 16px)' }}
                layoutId="hoverBackground"
                initial={{ opacity: 0 }}
                animate={{
                  opacity: 1,
                  transition: { duration: 0.15 },
                }}
                exit={{
                  opacity: 0,
                  transition: { duration: 0.15, delay: 0.2 },
                }}
              />
            )}
          </AnimatePresence>
          <div className="relative z-10 w-full h-full bg-brand-surface p-8 rounded-2xl border border-brand-border flex flex-col justify-between transition-colors">
            <div>
              <div className="w-16 h-16 rounded-2xl bg-brand-base border border-brand-border flex items-center justify-center mb-6 text-brand-accent">
                {item.icon}
              </div>
              <h4 className="text-2xl font-bold text-brand-text mb-4">{item.title}</h4>
              <p className="text-brand-muted leading-relaxed text-lg">{item.description}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
