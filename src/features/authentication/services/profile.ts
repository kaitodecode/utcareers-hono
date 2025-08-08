import { Context } from "hono";
import prisma from "../../../libs/prisma";
import { Response } from "../../../libs/response";
import { uploadFile, deleteFile } from "../../../libs/s3";

export const UpdateProfileService = async (c: Context) => {
  try {
    const { id } = c.req.param();
    const body = c.req.valid("form" as never);

    const { name, address, description } = body;
    const photoFile = (body as { photo?: File }).photo;
    
    // Get existing user data
    const existingUser = await prisma.users.findUnique({
      where: { id },
      select: { photo: true }
    });
    
    if (!existingUser) {
      return Response(c, null, "User not found", 404);
    }
    
    // Handle photo upload
    let photoUrl = existingUser.photo; // Keep existing photo by default
    if (photoFile && photoFile.size > 0) {
      try {
        photoUrl = await uploadFile("profiles", photoFile, existingUser.photo, {
          allowedExtensions: ["jpg", "jpeg", "png", "gif", "webp"],
          maxSizeInMB: 5
        });
      } catch (error) {
        return Response(c, null, error instanceof Error ? error.message : "Failed to upload photo", 400);
      }
    }
    
    const user = await prisma.users.update({
      where: {
        id,
      },
      data: {
        name: name as string,
        address: address as string || null,
        description: description as string || null,
        photo: photoUrl,
      },
      select: {
        id: true,
        photo: true,
        name: true,
        phone: true,
        email: true,
        address: true,
        description: true,
        role: true,
        verified_at: true,
        created_at: true,
        updated_at: true
      }
    });
    return Response(c, user, "Profile updated successfully", 200);
  } catch (error) { 
    return Response(c, null, "Failed to update profile", 500);
  }
}