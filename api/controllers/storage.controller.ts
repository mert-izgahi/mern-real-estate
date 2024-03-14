import { Request, Response } from "express";
import { v2 as cloudinary } from "cloudinary";
import dotenv from "dotenv";
import path from "path";
dotenv.config({ path: path.resolve(__dirname, "../.env") });

cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
});

console.log(cloudinary.config());

export async function uploadMedia(req: Request, res: Response) {
    const files = req.files;
    const uploadedMedia = [];
    if (files) {
        const media = files.media;
        if (Array.isArray(media)) {
            for (const file of media) {
                const result = await cloudinary.uploader.upload(
                    file.tempFilePath
                );
                uploadedMedia.push(result);
            }
        } else {
            const result = await cloudinary.uploader.upload(media.tempFilePath);
            uploadedMedia.push(result);
        }
    }
    res.status(200).json({
        uploadedMedia,
        message: "Media uploaded successfully",
    });
}
