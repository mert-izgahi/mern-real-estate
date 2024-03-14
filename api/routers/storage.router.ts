import express from "express";
import { withAuth } from "../middlewares/withAuth";
import { uploadMedia } from "../controllers/storage.controller";

const router = express.Router();

router.post("/upload-media", withAuth, uploadMedia);

export { router };
