import jwt from "jsonwebtoken";

export const createToken = async (payload: any) => {
    return await jwt.sign(payload, process.env.JWT_SECRET as string, {
        expiresIn: process.env.JWT_EXPIRES_IN,
    });
};
