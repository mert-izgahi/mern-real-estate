import { z } from "zod";

export const signUpInputSchema = z.object({
    name: z.string().min(1, "Name is required"),
    email: z.string().min(1, "Email is required").email("Email is invalid"),
    password: z
        .string()
        .min(1, "Password is required")
        .min(8, "Password must be more than 8 characters")
        .max(32, "Password must be less than 32 characters"),
});

export const signInInputSchema = z.object({
    email: z.string().min(1, "Email is required").email("Email is invalid"),
    password: z
        .string()
        .min(1, "Password is required")
        .min(8, "Password must be more than 8 characters")
        .max(32, "Password must be less than 32 characters"),
});

export const profileInputSchema = z
    .object({
        name: z.string().min(1, "Name is required"),
        password: z.string().optional(),
        bio: z.string().optional(),
    })
    .refine((data) => (data.password ? data.password.length > 0 : true), {
        message: "Password is required",
        path: ["password"],
    });
