import AuthLayout from "@/components/auth/AuthLayout";
import AuthCard from "@/components/auth/AuthCard";
import AuthHeader from "@/components/auth/AuthHeader";
import ForgotPasswordForm from "@/components/auth/ForgotPasswordForm";

export default function ForgotPasswordPage() {
  return (
    <AuthLayout>
      <AuthCard
        title="Forgot Password?"
        description="Enter your email address and we'll send you a password reset link."
      >
        <AuthHeader
          title="Reset Password"
          subtitle="Recover your ChatSphere account"
          showLogo={true}
        />

        <ForgotPasswordForm />
      </AuthCard>
    </AuthLayout>
  );
}