import clsx from "clsx";

export const getInputClass = (isDirty: boolean, isValid: boolean) => {
  return clsx(
    "input max-w-full border border-border",
    !isDirty && "input-solid",
    !isValid && isDirty && "input-solid-error",
    isValid && isDirty && "input-solid-success",
  );
};

export const getTextareaClass = (isDirty: boolean, isValid: boolean) => {
  return clsx(
    "textarea max-w-full border border-border resize-none",
    !isDirty && "textarea-solid",
    !isValid && isDirty && "textarea-solid-error",
    isValid && isDirty && "textarea-solid-success",
  );
};
