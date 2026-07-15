import Link from "next/link";
import { MessageCircleMore } from "lucide-react";

interface AuthHeaderProps {
  title: string;
  subtitle: string;
  showLogo?: boolean;
}

export default function AuthHeader({
  title,
  subtitle,
  showLogo = true,
}: AuthHeaderProps) {
  return (
    <div className="mb-8 flex flex-col items-center text-center">
      {showLogo && (
        <>
          <div className="mb-5 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 shadow-lg">
            <MessageCircleMore className="h-8 w-8 text-white" />
          </div>

          <Link
            href="/"
            className="text-3xl font-extrabold tracking-tight text-slate-900 dark:text-white"
          >
            ChatSphere
          </Link>

          <p className="mt-2 text-sm text-slate-500 dark:text-slate-400">
            Secure • Fast • Real-Time Messaging
          </p>
        </>
      )}

      <div className="mt-8 space-y-2">
        <h1 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white">
          {title}
        </h1>

        <p className="text-sm leading-6 text-slate-500 dark:text-slate-400">
          {subtitle}
        </p>
      </div>
    </div>
  );
}