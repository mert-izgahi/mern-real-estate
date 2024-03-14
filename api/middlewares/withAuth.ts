import { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";

export async function withAuth(
    req: Request,
    res: Response,
    next: NextFunction
) {
    const token = req.cookies.access_token;
    console.log("cookies", req.cookies);

    if (!token) return next();

    await jwt.verify(
        token,
        process.env.JWT_SECRET as string,
        (err: any, decoded: any) => {
            if (err) {
                console.log(err);

                return next();
            }

            res.locals.user = decoded;
            console.log(res.locals.user);

            return next();
        }
    );
}
