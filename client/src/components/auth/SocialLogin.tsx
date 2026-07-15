"use client";

import { Chrome, Loader2 } from "lucide-react";
import { useState } from "react";

import { Button } from "@/components/ui/button";

export default function SocialLogin() {
  const [loading, setLoading] = useState(false);

  const handleGoogleLogin = async () => {
    try {
      setLoading(true);

      // TODO:
      // Replace with Google OAuth
      // signIn("google")

      await new Promise((resolve) => setTimeout(resolve, 2000));

      console.log("Google Login");

    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="space-y-6">

      {/* Divider */}

      <div className="relative">

        <div className="absolute inset-0 flex items-center">
          <span className="w-full border-t border-slate-200 dark:border-slate-700" />
        </div>

        <div className="relative flex justify-center">
          <span className="bg-white px-4 text-xs uppercase tracking-wider text-slate-500 dark:bg-slate-900 dark:text-slate-400">
            OR CONTINUE WITH
          </span>
        </div>

      </div>

      {/* Google Button */}

      <Button
        type="button"
        variant="outline"
        onClick={handleGoogleLogin}
        disabled={loading}
        className="
          h-12
          w-full
          rounded-xl
          border-slate-300
          bg-white
          text-slate-900
          transition-all
          duration-300
          hover:bg-slate-100
          dark:border-slate-700
          dark:bg-slate-900
          dark:text-white
          dark:hover:bg-slate-800
        "
      >
        {loading ? (
          <>
            <Loader2 className="mr-2 h-5 w-5 animate-spin" />
            Connecting...
          </>
        ) : (
          <>
            <Chrome className="mr-3 h-5 w-5 text-red-500" />

            Continue with Google
          </>
        )}
      </Button>

    </div>
  );
}