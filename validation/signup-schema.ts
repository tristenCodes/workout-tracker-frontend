import * as z from "zod";

const signupSchema = z.object({
    email: z.email("Invalid email address format"),
    password: z.string(),
    confirmPassword: z.string()
}).refine((data) => data.password === data.confirmPassword, {
    path: ["confirmPassword"],
    message: "Passwords do not match",
});

type SignupValues = z.infer<typeof signupSchema>;

export { signupSchema, SignupValues }