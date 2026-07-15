"use client";

import { useState } from "react";
import { Loader2, Mail, ArrowLeft } from "lucide-react";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function ForgotPasswordForm() {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!email.trim()) return;

    setLoading(true);

    try {
      // TODO:
      // Call your API here
      // await authService.forgotPassword(email);

      await new Promise((resolve) => setTimeout(resolve, 1500));

      setSuccess(true);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  if (success) {
    return (
      <div className="space-y-8 text-center">
        <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-green-100">
          <Mail className="h-10 w-10 text-green-600" />
        </div>

        <div>
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white">
            Check your email
          </h2>

          <p className="mt-3 text-slate-500 dark:text-slate-400">
            We've sent a password reset link to
          </p>

          <p className="mt-1 font-semibold text-slate-700 dark:text-slate-300">
            {email}
          </p>
        </div>

        <Button className="w-full">
          Open Email App
        </Button>

        <Link
          href="/login"
          className="inline-flex items-center gap-2 text-sm text-blue-600 hover:underline"
        >
          <ArrowLeft size={16} />
          Back to Login
        </Link>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-6"
    >
      <div className="space-y-2">
        <Label htmlFor="email">
          Email Address
        </Label>

        <Input
          id="email"
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          autoComplete="email"
          required
        />
      </div>

      <Button
        type="submit"
        className="w-full"
        disabled={loading}
      >
        {loading ? (
          <>
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            Sending Link...
          </>
        ) : (
          "Send Reset Link"
        )}
      </Button>

      <div className="text-center">
        <Link
          href="/login"
          className="inline-flex items-center gap-2 text-sm text-blue-600 hover:underline"
        >
          <ArrowLeft size={16} />
          Back to Login
        </Link>
      </div>
    </form>
  );
}