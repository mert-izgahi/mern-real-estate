import mongoose from "mongoose";
import bcrypt from "bcrypt";
import validator from "validator";

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
            validate: {
                validator: validator.isEmail,
                message: "Invalid email",
            },
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

userSchema.pre("save", async function (next) {
    if (!this.isModified("password")) return next();
    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(this.password, salt);
    this.password = hash;
    next();
});

// User model
const User = mongoose.models.User || mongoose.model<IUser>("User", userSchema);

export default User;
