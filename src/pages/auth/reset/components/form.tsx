import { useReset } from "../hooks/use-reset";
import { getInputClass } from "@/utils/get-class";

export const ResetPasswordForm = () => {
  const { actions, validators, isDirty, user } = useReset();

  return (
    <form className="form" onSubmit={actions.handleSubmit}>
      <h1 className="title">Reset Password</h1>

      <input
        className={getInputClass(isDirty.password, validators.isPasswordValid)}
        placeholder="Password"
        name="password"
        type="password"
        value={user.password}
        onChange={actions.handleChange}
        aria-label="Password"
      />

      <button
        className="btn btn-solid-primary border border-border"
        type="submit"
        disabled={!validators.isPasswordValid}
        aria-disabled={!validators.isPasswordValid}
      >
        Reset
      </button>
    </form>
  );
};
