import AuthLayout from "@/components/auth/AuthLayout";
import AuthCard from "@/components/auth/AuthCard";
import AuthHeader from "@/components/auth/AuthHeader";
import RegisterForm from "@/components/auth/RegisterForm";

export default function RegisterPage() {
  return (
    <AuthLayout>
      <AuthCard
        title="Create Your Account"
        description="Join ChatSphere and start chatting with your friends."
      >
        <AuthHeader
          title="Sign Up"
          subtitle="Create your account to continue"
          showLogo={true}
        />

        <RegisterForm />
      </AuthCard>
    </AuthLayout>
  );
}