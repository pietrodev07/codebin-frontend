import { AuthLayout } from "@/components/layout/auth-layout";

export const ResetPasswordPage = () => {
  return (
    <AuthLayout
      navbar={{ loginBtn: true }}
      className="flex items-center justify-center"
    >
      <h1 className="title">Reset Password Page</h1>
    </AuthLayout>
  );
};
