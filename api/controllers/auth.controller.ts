import { Request, Response } from "express";
import { asyncWrapper } from "../middlewares/asyncWrapper";
import User, { IUser } from "../models/User";
import { createToken } from "../utils/jwt";

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

export const signIn = asyncWrapper(
    async (
        req: Request<
            {},
            { user: IUser; message: string }, // Response type
            { email: string; password: string } // Request type
        >,
        res: Response
    ) => {
        const { email, password } = req.body;
        const user = await User.findOne({ email });

        if (!user) {
            return res.status(401).json({ message: "Invalid credentials" });
        }

        const isMatch = await user.comparePassword(password);
        if (!isMatch) {
            return res.status(401).json({ message: "Invalid credentials" });
        }

        const token = await createToken({ id: user._id, name: user.name });

        res.cookie("access_token", token, {
            httpOnly: true,
            maxAge: 24 * 60 * 60 * 1000,
            expires: new Date(Date.now() + 24 * 60 * 60 * 1000),
        })
            .status(200)
            .json({ user, message: "Sign in successful" });
    }
);

export const signOut = asyncWrapper(async (req: Request, res: Response) => {
    res.status(200).json({ message: "Sign out successful" });
});
