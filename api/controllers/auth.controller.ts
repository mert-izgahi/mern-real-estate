import { Request, Response } from "express";
import { asyncWrapper } from "../middlewares/asyncWrapper";
import User, { IUser } from "../models/User";

export const signUp = asyncWrapper(
    async (
        req: Request<
            {},
            { user: IUser; message: string }, // Response type
            { name: string; email: string; password: string } // Request type
        >,
        res: Response
    ) => {
        const { name, email, password } = req.body;

        const exists = await User.exists({ email });
        if (exists) {
            return res.status(400).json({ message: "Email already exists" });
        }

        const user = await User.create({ name, email, password });

        res.status(201).json({ user, message: "User created successfully" });
    }
);
