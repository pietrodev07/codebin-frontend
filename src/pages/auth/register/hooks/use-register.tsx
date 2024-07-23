import { ChangeEvent, FormEvent, useState } from "react";

import { RegisterUser } from "@/types/user";
import { useAuth } from "@/services/auth/auth.hook";

const userInitialState = { email: "", username: "", password: "" };
const dirtyIntialState = { email: false, username: false, password: false };

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export const useRegister = () => {
  const [user, setUser] = useState<RegisterUser>(userInitialState);
  const [isDirty, setIsDirty] = useState(dirtyIntialState);
  const { register } = useAuth();

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUser((prev) => ({ ...prev, [name]: value }));
    setIsDirty((prev) => ({ ...prev, [name]: value.length < 1 ? false : true }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    await register(user);

    setUser(userInitialState);
    setIsDirty(dirtyIntialState);
  };

  const isEmailValid = EMAIL_REGEX.test(user.email);
  const isUsernameValid = user.username.length > 2;
  const isPasswordValid = user.password.length > 7;
  const isFormValid = isEmailValid && isUsernameValid && isPasswordValid;

  return {
    actions: { handleChange, handleSubmit },
    validators: { isEmailValid, isUsernameValid, isPasswordValid, isFormValid },
    isDirty,
    user,
  };
};
