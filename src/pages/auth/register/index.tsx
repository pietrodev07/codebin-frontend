import { AuthLayout } from "@/components/layout/auth-layout";

export const RegisterPage = () => {
  return (
    <AuthLayout
      navbar={{ loginBtn: true }}
      className="flex items-center justify-center"
    >
      <h1 className="title">Register Page</h1>
    </AuthLayout>
  );
};
