import { v2 as cloudinary } from "cloudinary";
import fs from 'fs';

cloudinary.config({
    cloud_name: process.env.CLOUD_NAME,
    api_key: process.env.CLOUD_API_KEY,
    api_secret: process.env.CLOUD_API_SECRET
});

const upload_on_cloudinary = async (localFilePath) => {
    try {
        if (localFilePath) throw new Error(`Could not find the local file path! error from cloudinary.`);
        const response = await cloudinary.uploader.upload(localFilePath, {
            resource_type: "auto"
        })
        .then(result => console.log(result));
        console.log(response);
        return response;
    } catch (error) {
        fs.unlinkSync(localFilePath);
        console.log(error.message);
    };
};

export default upload_on_cloudinary;