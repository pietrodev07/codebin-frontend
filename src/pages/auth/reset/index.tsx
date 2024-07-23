import { ResetPasswordForm } from "./components/form";
import { AuthLayout } from "@/components/layout/auth-layout";

export const ResetPasswordPage = () => {
  return (
    <AuthLayout
      navbar={{ loginBtn: true }}
      className="flex items-center justify-center"
    >
      <ResetPasswordForm />
    </AuthLayout>
  );
};
