import { ChangeEvent, FormEvent, useState } from "react";

import { ForgotUser } from "@/types/user";
import { useAuth } from "@/services/auth/auth.hook";

const userInitialState = { email: "" };
const dirtyIntialState = { email: false };

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export const useForgot = () => {
  const [user, setUser] = useState<ForgotUser>(userInitialState);
  const [isDirty, setIsDirty] = useState(dirtyIntialState);
  const { forgot } = useAuth();

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUser((prev) => ({ ...prev, [name]: value }));
    setIsDirty((prev) => ({ ...prev, [name]: value.length < 1 ? false : true }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    await forgot(user);
    setUser(userInitialState);
    setIsDirty(dirtyIntialState);
  };

  const isEmailValid = EMAIL_REGEX.test(user.email);

  return {
    actions: { handleChange, handleSubmit },
    validators: { isEmailValid },
    isDirty,
    user,
  };
};
