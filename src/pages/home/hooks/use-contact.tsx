import { ChangeEvent, FormEvent, useState } from "react";

import { ContactBody } from "@/types";
import { renderToast } from "@/utils/toast";
import { contact } from "@/services/utils/utils.api";

const userInitialState = { email: "", name: "", message: "" };
const dirtyIntialState = { email: false, name: false, message: false };

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export const useContact = () => {
  const [user, setUser] = useState<ContactBody>(userInitialState);
  const [isDirty, setIsDirty] = useState(dirtyIntialState);

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setUser((prev) => ({ ...prev, [name]: value }));
    setIsDirty((prev) => ({ ...prev, [name]: value.length < 1 ? false : true }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const res = await contact(user);
    renderToast(res.success, res.message);

    setUser(userInitialState);
    setIsDirty(dirtyIntialState);
  };

  const isEmailValid = EMAIL_REGEX.test(user.email);
  const isNameValid = user.name.length > 2;
  const isMessageValid = user.message.length > 2;
  const isFormValid = isEmailValid && isNameValid && isMessageValid;

  return {
    actions: { handleChange, handleSubmit },
    validators: { isEmailValid, isNameValid, isMessageValid, isFormValid },
    isDirty,
    user,
  };
};
