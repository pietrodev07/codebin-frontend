import { toast, ToasterProps } from "sonner";

export const renderToast = (condition: boolean, message: string) => {
  condition ? toast.success(message) : toast.error(message);
};

export const toastOptions: ToasterProps["toastOptions"] = {
  classNames: {
    toast: "border border-border",
    closeButton: "border border-border",
  },
};
