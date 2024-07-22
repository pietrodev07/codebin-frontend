import { SearchParams } from "@/types";
import { ForgotUser, LoginUser, RegisterUser, ResetUser } from "@/types/user";

export interface AuthState {
  isLogged: boolean;
  isLoading: boolean;
  login: (user: LoginUser) => Promise<void>;
  register: (user: RegisterUser) => Promise<void>;
  forgot: (user: ForgotUser) => Promise<void>;
  reset: (user: ResetUser, params: SearchParams) => Promise<void>;
  verify: (params: SearchParams) => Promise<void>;
  logout: () => Promise<void>;
  me: () => Promise<void>;
}
