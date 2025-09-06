"use client";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import React from "react";

type Props = {
  href?: string;
  onClick?: () => void;
  children: React.ReactNode;
  className?: string;
  arrow?: boolean;
};

export default function AnimatedButton({ href, onClick, children, className, arrow }: Props) {
  const Base = (
    <motion.span
      className={cn("btn px-6 py-3 rounded-xl", className)}
      whileHover={{ scale: 1.05, y: -1 }}
      whileTap={{ scale: 0.98 }}
      transition={{ type: "spring", stiffness: 260, damping: 20 }}
    >
      <span className="inline-flex items-center gap-2">
        {children}
        {arrow && <ArrowRight className="w-4 h-4" />}
      </span>
    </motion.span>
  );

  if (href) {
    return (
      <Link href={href} className="inline-flex">
        {Base}
      </Link>
    );
  }

  return <button onClick={onClick} className="inline-flex">{Base}</button>;
}
