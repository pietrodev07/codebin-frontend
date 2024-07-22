import { toast } from "sonner";

export const renderToast = (condition: boolean, message: string) => {
  condition ? toast.success(message) : toast.error(message);
};
