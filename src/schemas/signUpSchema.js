import { z } from "zod";

export const usernameValidation = z
  .string()
  .min(5, "username must be at least 5 characters")
  .regex(/^[a-zA-Z0-9_]+$/, "Username must not contain special character");

export const signUpSchema = z.object({
  username: usernameValidation,
  email: z.string().email({ message: "Invalid Email address" }),
  password: z.string().min(6, { message: "password at aleast 6 characters" }),
});
