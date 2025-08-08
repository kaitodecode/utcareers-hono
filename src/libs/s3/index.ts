import {
  S3Client,
  PutObjectCommand,
  DeleteObjectCommand,
  HeadObjectCommand,
} from "@aws-sdk/client-s3";
import { randomUUID } from "crypto";

if (!process.env.AWS_ACCESS_KEY_ID || !process.env.AWS_SECRET_ACCESS_KEY || !process.env.AWS_BUCKET_NAME) {
  const error = new Error("Kredensial AWS atau nama bucket tidak dikonfigurasi / AWS credentials or bucket name not configured");
  console.error('Configuration Error:', error);
  throw error;
}

const s3Client = new S3Client({
  region: process.env.AWS_REGION || "id-jkt-1",
  endpoint: process.env.AWS_ENDPOINT || "https://is3.idcloudhost.com",
  credentials: {
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
  },
  forcePathStyle: true,
});

const BUCKET_NAME = process.env.AWS_BUCKET_NAME;

interface FileValidation {
  allowedExtensions?: string[];
  maxSizeInMB?: number;
  minSizeInMB?: number;
}

export class FileUploadError extends Error {
  constructor(message: string) {
    super(message);
    this.name = 'FileUploadError';
  }
}
  
export async function deleteFile(filePath: string): Promise<void> {
  try {
    if (!filePath || typeof filePath !== 'string') {
      const error = new FileUploadError("Path file tidak valid / Invalid file path provided");
      console.error('Validation Error:', error);
      throw error;
    }

    // Check if file exists before attempting to delete
    try {
      const headCommand = new HeadObjectCommand({
        Bucket: BUCKET_NAME,
        Key: filePath,
      });
      await s3Client.send(headCommand);
    } catch (error) {
      console.error('Head Object Error:', error);
      if ((error as { name?: string }).name === 'NotFound') {
        return; // File doesn't exist, no need to delete
      }
      throw error;
    }

    const deleteCommand = new DeleteObjectCommand({
      Bucket: BUCKET_NAME,
      Key: filePath,
    });

    await s3Client.send(deleteCommand);
  } catch (error) {
    console.error('S3 Delete Error:', error);
    if ((error as { name?: string }).name === 'NotImplemented') {
      const uploadError = new FileUploadError("Operasi tidak didukung oleh penyedia penyimpanan / Operation not supported by storage provider");
      console.error('Operation Error:', uploadError);
      throw uploadError;
    }
    if (error instanceof FileUploadError) {
      throw error;
    } else if (error instanceof Error) {
      const uploadError = new FileUploadError(`Gagal menghapus file: ${error.message} / Failed to delete file: ${error.message}`);
      console.error('Delete Error:', uploadError);
      throw uploadError;
    }
    const unknownError = new FileUploadError("Gagal menghapus file karena kesalahan yang tidak diketahui / Failed to delete file due to an unknown error");
    console.error('Unknown Error:', unknownError);
    throw unknownError;
  }
}

export async function uploadFile(
  folder: string,
  file: File,
  oldFile?: string | null,
  validation?: FileValidation
): Promise<string> {
  try {
    if (!file || !(file instanceof File)) {
      const error = new FileUploadError("Objek file tidak valid / Invalid file object provided");
      console.error('File Validation Error:', error);
      throw error;
    }

    if (!folder || typeof folder !== 'string') {
      const error = new FileUploadError("Path folder tidak valid / Invalid folder path provided");
      console.error('Folder Validation Error:', error);
      throw error;
    }

    const fileExtension = file.name.split(".").pop()?.toLowerCase();
    if (!fileExtension) {
      const error = new FileUploadError("File harus memiliki ekstensi / File must have an extension");
      console.error('Extension Error:', error);
      throw error;
    }

    if (validation?.allowedExtensions?.length) {
      if (!validation.allowedExtensions.includes(fileExtension)) {
        const error = new FileUploadError(
          `Ekstensi file tidak diizinkan. Ekstensi yang diizinkan: ${validation.allowedExtensions.join(", ")} / File extension not allowed. Allowed extensions: ${validation.allowedExtensions.join(", ")}`
        );
        console.error('Extension Validation Error:', error);
        throw error;
      }
    }

    const fileSizeInMB = file.size / (1024 * 1024);
    
    if (validation?.minSizeInMB && fileSizeInMB < validation.minSizeInMB) {
      const error = new FileUploadError(
        `Ukuran file terlalu kecil. Minimum: ${validation.minSizeInMB}MB / File size too small. Minimum: ${validation.minSizeInMB}MB`
      );
      console.error('File Size Error:', error);
      throw error;
    }

    if (validation?.maxSizeInMB && fileSizeInMB > validation.maxSizeInMB) {
      const error = new FileUploadError(
        `Ukuran file terlalu besar. Maksimum: ${validation.maxSizeInMB}MB / File size too large. Maximum: ${validation.maxSizeInMB}MB`
      );
      console.error('File Size Error:', error);
      throw error;
    }
  
    if (oldFile) {
      const deleteCommand = new DeleteObjectCommand({
        Bucket: BUCKET_NAME,
        Key: oldFile,
      });
      await s3Client.send(deleteCommand);
    }

    const newFileName = `${randomUUID()}.${fileExtension}`;
    const fullPath = `${folder}/${newFileName}`;

    const arrayBuffer = await file.arrayBuffer();
    const buffer = Buffer.from(arrayBuffer);

    const uploadCommand = new PutObjectCommand({
      Bucket: BUCKET_NAME,
      Key: fullPath,
      Body: buffer,
      ContentType: file.type,
      ACL: "public-read",
    });

    await s3Client.send(uploadCommand);

    return `${process.env.AWS_ENDPOINT}/${process.env.AWS_BUCKET_NAME}/${fullPath}`;
  } catch (error) {
    console.error('Upload Error:', error);
    if (error instanceof FileUploadError) {
      throw error;
    } else if (error instanceof Error) {
      const uploadError = new FileUploadError(`Gagal mengunggah file: ${error.message} / Failed to upload file: ${error.message}`);
      console.error('Upload Processing Error:', uploadError);
      throw uploadError;
    }
    const unknownError = new FileUploadError("Gagal mengunggah file karena kesalahan yang tidak diketahui / Failed to upload file due to an unknown error");
    console.error('Unknown Upload Error:', unknownError);
    throw unknownError;
  }
}
