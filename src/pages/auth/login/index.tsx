import { AuthLayout } from "@/components/layout/auth-layout";

export const LoginPage = () => {
  return (
    <AuthLayout
      navbar={{ registerBtn: true, forgotBtn: true }}
      className="flex items-center justify-center"
    >
      <h1 className="title">Login Page</h1>
    </AuthLayout>
  );
};
