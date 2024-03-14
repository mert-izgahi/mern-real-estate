import mongoose from "mongoose";

export interface IUser {
    _id?: mongoose.Schema.Types.ObjectId;
    name: string;
    email?: string;
    password: string;
    bio: string;
    socials?: {
        [key: string]: string;
    };
    createdAt?: Date;
    updatedAt?: Date;
}

const userSchema = new mongoose.Schema<IUser>(
    {
        name: { type: String, required: [true, "Name is required"] },
        email: {
            type: String,
            required: [true, "Email is required"],
            unique: [true, "Email already exists"],
        },
        password: { type: String, required: [true, "Password is required"] },
        bio: { type: String },
        socials: {
            type: Map,
            of: String,
            default: {},
        },
    },
    {
        timestamps: true,
        versionKey: false,
    }
);

// User model
const User = mongoose.models.User || mongoose.model<IUser>("User", userSchema);

export default User;
