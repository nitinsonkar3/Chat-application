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

const registerSchema = z
  .object({
    fullName: z
      .string()
      .min(3, "Full name must be at least 3 characters"),

    username: z
      .string()
      .min(3, "Username must be at least 3 characters")
      .max(20, "Username cannot exceed 20 characters"),

    email: z
      .string()
      .email("Invalid email address"),

    password: z
      .string()
      .min(8, "Password must be at least 8 characters")
      .regex(/[A-Z]/, "Must contain one uppercase letter")
      .regex(/[a-z]/, "Must contain one lowercase letter")
      .regex(/[0-9]/, "Must contain one number"),

    confirmPassword: z.string(),

    terms: z.boolean().refine((value) => value === true, {
      message: "You must accept the terms & conditions",
    }),
  })
  .refine((data) => data.password === data.confirmPassword, {
    path: ["confirmPassword"],
    message: "Passwords do not match",
  });

type RegisterFormValues = z.infer<typeof registerSchema>;

export default function RegisterForm() {
  const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
  } = useForm<RegisterFormValues>({
    resolver: zodResolver(registerSchema),
    defaultValues: {
      fullName: "",
      username: "",
      email: "",
      password: "",
      confirmPassword: "",
      terms: false,
    },
  });

  const terms = watch("terms");

  const onSubmit = async (data: RegisterFormValues) => {
    try {
      setLoading(true);

      console.log(data);

      // TODO
      // await authService.register(data);

      await new Promise((resolve) => setTimeout(resolve, 2000));

      alert("Registration Successful");
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="space-y-5"
    >
      {/* Full Name */}

      <div className="space-y-2">
        <Label htmlFor="fullName">Full Name</Label>

        <Input
          id="fullName"
          placeholder="John Doe"
          {...register("fullName")}
        />

        {errors.fullName && (
          <p className="text-sm text-red-500">
            {errors.fullName.message}
          </p>
        )}
      </div>

      {/* Username */}

      <div className="space-y-2">
        <Label htmlFor="username">Username</Label>

        <Input
          id="username"
          placeholder="john_doe"
          {...register("username")}
        />

        {errors.username && (
          <p className="text-sm text-red-500">
            {errors.username.message}
          </p>
        )}
      </div>

      {/* Email */}

      <div className="space-y-2">
        <Label htmlFor="email">Email Address</Label>

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
        <Label htmlFor="password">Password</Label>

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

      {/* Confirm Password */}

      <div className="space-y-2">
        <Label htmlFor="confirmPassword">
          Confirm Password
        </Label>

        <PasswordInput
          id="confirmPassword"
          placeholder="Confirm password"
          {...register("confirmPassword")}
        />

        {errors.confirmPassword && (
          <p className="text-sm text-red-500">
            {errors.confirmPassword.message}
          </p>
        )}
      </div>

      {/* Terms */}

      <div>
        <div className="flex items-start gap-3">
          <Checkbox
            checked={terms}
            onCheckedChange={(checked) =>
              setValue("terms", !!checked)
            }
          />

          <Label className="cursor-pointer leading-6">
            I agree to the{" "}
            <Link
              href="/terms"
              className="text-blue-600 hover:underline"
            >
              Terms
            </Link>{" "}
            and{" "}
            <Link
              href="/privacy"
              className="text-blue-600 hover:underline"
            >
              Privacy Policy
            </Link>
          </Label>
        </div>

        {errors.terms && (
          <p className="mt-2 text-sm text-red-500">
            {errors.terms.message}
          </p>
        )}
      </div>

      {/* Register Button */}

      <Button
        type="submit"
        disabled={loading}
        className="h-12 w-full rounded-xl"
      >
        {loading ? (
          <>
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            Creating Account...
          </>
        ) : (
          "Create Account"
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
        type="button"
        variant="outline"
        className="h-12 w-full rounded-xl"
      >
        Continue with Google
      </Button>

      {/* Login */}

      <p className="text-center text-sm text-slate-500">
        Already have an account?{" "}
        <Link
          href="/login"
          className="font-semibold text-blue-600 hover:underline"
        >
          Sign In
        </Link>
      </p>
    </form>
  );
}