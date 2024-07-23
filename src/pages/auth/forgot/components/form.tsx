import { useForgot } from "../hooks/use-forgot";
import { getInputClass } from "@/utils/get-class";

export const ForgotPasswordForm = () => {
  const { actions, validators, isDirty, user } = useForgot();

  return (
    <form className="form" onSubmit={actions.handleSubmit}>
      <h1 className="title">Forgot Password</h1>

      <input
        className={getInputClass(isDirty.email, validators.isEmailValid)}
        placeholder="Email"
        name="email"
        type="email"
        value={user.email}
        onChange={actions.handleChange}
        aria-label="Email"
      />

      <button
        className="btn btn-solid-primary border border-border"
        type="submit"
        disabled={!validators.isEmailValid}
        aria-disabled={!validators.isEmailValid}
      >
        Forgot
      </button>
    </form>
  );
};
