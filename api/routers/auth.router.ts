import express from "express";
import {
    deleteMe,
    getMe,
    signIn,
    signOut,
    signUp,
    updateMe,
} from "../controllers/auth.controller";
import { withAuth } from "../middlewares/withAuth";

const router = express.Router();

router.post("/sign-up", signUp);
router.post("/sign-in", signIn);
router.post("/sign-out", signOut);
router.get("/me", withAuth, getMe);
router.put("/update-me", withAuth, updateMe);
router.delete("/delete-me", withAuth, deleteMe);
export { router };
