import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
import fileUpload from "express-fileupload";
import cookieParser from "cookie-parser";
import { authRouter, storageRouter } from "./routers";
import errorHandler from "./middlewares/errorHandler";
dotenv.config({ path: "./.env" });
const allowedOrigins = ["http://localhost:3000", "http://localhost:5173"];
const app = express();
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(
    cors({
        credentials: true,
        origin: function (origin, callback) {
            if (!origin) return callback(null, true);
            if (allowedOrigins.indexOf(origin) === -1) {
                const msg =
                    "The CORS policy for this site does not allow access from the specified Origin.";
                return callback(new Error(msg), false);
            }
            return callback(null, true);
        },
    })
);

app.use(
    fileUpload({
        useTempFiles: true,
        tempFileDir: "/tmp/",
        createParentPath: true,
        limits: { fileSize: 50 * 1024 * 1024, files: 3, parts: 3 },
    })
);

// Connect to MongoDB
const connectDB = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGO_URI as string);
        console.log(`MongoDB Connected: ${conn.connection.host}`);
    } catch (error: any) {
        console.error(`Error: ${error.message}`);
        process.exit(1);
    }
};

app.use("/api/auth", authRouter);
app.use("/api/storage", storageRouter);

app.use(errorHandler);

app.listen(3000, async () => {
    await connectDB();
    console.log("Server started on port 3000");
});
