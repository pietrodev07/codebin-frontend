import { AuthLayout } from "@/components/layout/auth-layout";

export const ForgotPasswordPage = () => {
  return (
    <AuthLayout
      navbar={{ loginBtn: true, registerBtn: true }}
      className="flex items-center justify-center"
    >
      <h1 className="title">Forgot Password Page</h1>
    </AuthLayout>
  );
};
