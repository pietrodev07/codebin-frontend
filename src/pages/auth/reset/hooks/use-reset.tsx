import { useSearchParams } from "react-router-dom";
import { ChangeEvent, FormEvent, useState } from "react";

import { ResetUser } from "@/types/user";
import { useAuth } from "@/services/auth/auth.hook";

const userInitialState = { password: "" };
const dirtyIntialState = { password: false };

export const useReset = () => {
  const [user, setUser] = useState<ResetUser>(userInitialState);
  const [isDirty, setIsDirty] = useState(dirtyIntialState);
  const [searchParams] = useSearchParams();
  const { reset } = useAuth();

  const params = [
    { key: "email", value: searchParams.get("email")! },
    { key: "token", value: searchParams.get("token")! },
  ];

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUser((prev) => ({ ...prev, [name]: value }));
    setIsDirty((prev) => ({ ...prev, [name]: value.length < 1 ? false : true }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    await reset(user, params);
    setUser(userInitialState);
    setIsDirty(dirtyIntialState);
  };

  const isPasswordValid = user.password.length > 7;

  return {
    actions: { handleChange, handleSubmit },
    validators: { isPasswordValid },
    isDirty,
    user,
  };
};
