"use client";

import Link from "next/link";
import { useState } from "react";
import { Loader2 } from "lucide-react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import PasswordInput from "./PasswordInput";

const loginSchema = z.object({
  email: z
    .string()
    .min(1, "Email is required")
    .email("Invalid email address"),

  password: z
    .string()
    .min(8, "Password must be at least 8 characters"),

  rememberMe: z.boolean().optional(),
});

type LoginFormValues = z.infer<typeof loginSchema>;

export default function LoginForm() {
  const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
  } = useForm<LoginFormValues>({
    resolver: zodResolver(loginSchema),

    defaultValues: {
      email: "",
      password: "",
      rememberMe: false,
    },
  });

  const rememberMe = watch("rememberMe");

  const onSubmit = async (data: LoginFormValues) => {
    try {
      setLoading(true);

      console.log(data);

      // TODO
      // const response = await authService.login(data);

      await new Promise((resolve) => setTimeout(resolve, 2000));

      alert("Login Successful");

    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="space-y-6"
    >
      {/* Email */}

      <div className="space-y-2">
        <Label htmlFor="email">
          Email Address
        </Label>

        <Input
          id="email"
          type="email"
          placeholder="john@example.com"
          {...register("email")}
        />

        {errors.email && (
          <p className="text-sm text-red-500">
            {errors.email.message}
          </p>
        )}
      </div>

      {/* Password */}

      <div className="space-y-2">
        <Label htmlFor="password">
          Password
        </Label>

        <PasswordInput
          id="password"
          placeholder="Enter password"
          {...register("password")}
        />

        {errors.password && (
          <p className="text-sm text-red-500">
            {errors.password.message}
          </p>
        )}
      </div>

      {/* Remember */}

      <div className="flex items-center justify-between">

        <div className="flex items-center gap-2">

          <Checkbox
            checked={rememberMe}
            onCheckedChange={(checked) =>
              setValue("rememberMe", !!checked)
            }
          />

          <Label className="cursor-pointer">
            Remember Me
          </Label>

        </div>

        <Link
          href="/forgot-password"
          className="text-sm font-medium text-blue-600 hover:underline"
        >
          Forgot Password?
        </Link>

      </div>

      {/* Button */}

      <Button
        type="submit"
        disabled={loading}
        className="h-12 w-full rounded-xl text-base"
      >
        {loading ? (
          <>
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            Signing In...
          </>
        ) : (
          "Sign In"
        )}
      </Button>

      {/* Divider */}

      <div className="relative">

        <div className="absolute inset-0 flex items-center">
          <span className="w-full border-t" />
        </div>

        <div className="relative flex justify-center text-xs uppercase">
          <span className="bg-white px-3 text-slate-500 dark:bg-slate-900">
            OR
          </span>
        </div>

      </div>

      {/* Google */}

      <Button
        variant="outline"
        className="h-12 w-full rounded-xl"
        type="button"
      >
        Continue with Google
      </Button>

      {/* Register */}

      <p className="text-center text-sm text-slate-500">

        Don't have an account?{" "}

        <Link
          href="/register"
          className="font-semibold text-blue-600 hover:underline"
        >
          Create Account
        </Link>

      </p>
    </form>
  );
}