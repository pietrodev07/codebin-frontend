import { AuthLayout } from "@/components/layout/auth-layout";
import { LoginForm } from "./components/form";

export const LoginPage = () => {
  return (
    <AuthLayout
      navbar={{ registerBtn: true, forgotBtn: true }}
      className="flex items-center justify-center"
    >
      <LoginForm />
    </AuthLayout>
  );
};
