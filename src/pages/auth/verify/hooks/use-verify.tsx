import { useSearchParams } from "react-router-dom";

import { useAuth } from "@/services/auth/auth.hook";

export const useVerify = () => {
  const [searchParams] = useSearchParams();
  const { verify } = useAuth();

  const params = [
    { key: "email", value: searchParams.get("email")! },
    { key: "token", value: searchParams.get("token")! },
  ];

  const handleVerify = async () => {
    await verify(params);
  };

  return { actions: { handleVerify }, userEmail: params[0].value };
};
