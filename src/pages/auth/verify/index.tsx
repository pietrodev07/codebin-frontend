import { AuthLayout } from "@/components/layout/auth-layout";

export const VerifyAccountPage = () => {
  return (
    <AuthLayout
      navbar={{ loginBtn: true }}
      className="flex flex-col items-center justify-center gap-5"
    >
      <h1 className="title">Verify Account Page</h1>
    </AuthLayout>
  );
};
