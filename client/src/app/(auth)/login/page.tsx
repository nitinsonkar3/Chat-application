import AuthLayout from "@/components/auth/AuthLayout";
import AuthCard from "@/components/auth/AuthCard";
import AuthHeader from "@/components/auth/AuthHeader";
import LoginForm from "@/components/auth/LoginForm";

export default function LoginPage() {
  return (
    <AuthLayout>
      <AuthCard
        title="Welcome Back 👋"
        description="Sign in to continue to ChatSphere"
      >
        <AuthHeader
          title="Welcome Back"
          subtitle="Please sign in to your account"
          showLogo={false}
        />

        <LoginForm />
      </AuthCard>
    </AuthLayout>
  );
}