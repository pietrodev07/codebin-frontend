export interface User {
  email: string;
  username: string;
  password: string;
}

export type RegisterUser = User;
export type LoginUser = Omit<User, "email">;
export type ForgotUser = Omit<User, "username" | "password">;
export type ResetUser = Omit<User, "email" | "username">;
