import { ForgotPasswordForm } from "./components/form";
import { AuthLayout } from "@/components/layout/auth-layout";

export const ForgotPasswordPage = () => {
  return (
    <AuthLayout
      navbar={{ loginBtn: true, registerBtn: true }}
      className="flex items-center justify-center"
    >
      <ForgotPasswordForm />
    </AuthLayout>
  );
};
