import { useVerify } from "./hooks/use-verify";
import { AuthLayout } from "@/components/layout/auth-layout";

export const VerifyAccountPage = () => {
  const { actions, userEmail } = useVerify();

  return (
    <AuthLayout
      navbar={{ loginBtn: true }}
      className="flex flex-col items-center justify-center gap-5"
    >
      <h1 className="text-2xl font-bold text-content2">Hello [{userEmail}]</h1>

      <h2 className="text-center text-2xl font-bold text-content2">
        Click the button to verify your account!
      </h2>

      <button
        onClick={actions.handleVerify}
        className="btn btn-solid-primary border border-border"
      >
        Verify
      </button>
    </AuthLayout>
  );
};
