
import * as React from "react";
import { cn } from "@/lib/utils";

interface AuthCardProps {
  children: React.ReactNode;
  title?: string;
  description?: string;
  className?: string;
}

export default function AuthCard({
  children,
  title,
  description,
  className,
}: AuthCardProps) {
  return (
    <div
      className={cn(
        "w-full max-w-md rounded-3xl",
        "border border-slate-200/60",
        "bg-white/80 backdrop-blur-2xl",
        "shadow-[0_20px_60px_rgba(0,0,0,0.12)]",
        "dark:bg-slate-900/90",
        "dark:border-slate-700",
        "transition-all duration-300",
        "hover:shadow-[0_25px_80px_rgba(37,99,235,0.15)]",
        className
      )}
    >
      <div className="p-8 md:p-10">
        {(title || description) && (
          <div className="mb-8 text-center">
            {title && (
              <h2 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white">
                {title}
              </h2>
            )}

            {description && (
              <p className="mt-3 text-sm leading-6 text-slate-500 dark:text-slate-400">
                {description}
              </p>
            )}
          </div>
        )}

        <div>{children}</div>
      </div>
    </div>
  );
}