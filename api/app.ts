import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import { authRouter } from "./routers";
import errorHandler from "./middlewares/errorHandler";
dotenv.config({ path: "./.env" });

const app = express();
app.use(express.json());
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

app.use(errorHandler);

app.listen(3000, async () => {
    await connectDB();
    console.log("Server started on port 3000");
});
