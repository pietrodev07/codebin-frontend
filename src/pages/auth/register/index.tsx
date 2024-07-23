import { RegisterForm } from "./components/form";
import { AuthLayout } from "@/components/layout/auth-layout";

export const RegisterPage = () => {
  return (
    <AuthLayout
      navbar={{ loginBtn: true }}
      className="flex items-center justify-center"
    >
      <RegisterForm />
    </AuthLayout>
  );
};
