import { v2 as cloudinary } from "cloudinary";

const CLOUDINARY_FOLDER = "MERN Stack";
const uploadFile = async (files) => {
  const uploadedFiles = [];
  for (const files of files) {
    const result = await new Promise((resolve, reject) => {
      cloudinary.uploader
        .upload_stream(
          {
            folder: CLOUDINARY_FOLDER,
          },
          (error, data) => {
            if (error) return reject(error);
            resolve(data);
          },
        )
        .end(file.buffer);
    });
    uploadedFiles.push(result);
  }
  return uploadedFiles;
};

export default uploadFile;
