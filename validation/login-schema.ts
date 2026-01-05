
import * as z from "zod";

const loginSchema = z.object({
    email: z.email("Invalid email address format"),
    password: z.string(),
});

type LoginValues = z.infer<typeof loginSchema>;

export { loginSchema, LoginValues }