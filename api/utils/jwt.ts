import jwt from "jsonwebtoken";

export const verifyToken = async (token: string) => {
    await jwt.verify(
        token,
        process.env.JWT_SECRET as string,
        (err: any, decoded: any) => {
            if (err) {
                return false;
            }
            return decoded;
        }
    );
};
export const createToken = async (payload: any) => {
    return await jwt.sign(payload, process.env.JWT_SECRET as string, {
        expiresIn: process.env.JWT_EXPIRES_IN,
    });
};
