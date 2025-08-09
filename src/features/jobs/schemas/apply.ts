import z from "zod";

export const ApplyJobScheme = z.object({
  cv: z.instanceof(File, { message: "CV file is required" }),
  national_identity_card: z.instanceof(File, { message: "National Identity Card file is required" })
});