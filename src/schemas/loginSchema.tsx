import { z } from "zod";

export const loginSchema = z.object({
   email: z.string().min(1, "Enter a valid e-mail").email(),
   password: z.string().min(1, "Enter a valid password")
})