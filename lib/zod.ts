import z from "zod";

export const schemaZod = z.object({
  name: z.preprocess(
    (val) => val?.toString().trim(),
    z.string().min(2, { message: "Invalid User name" }),
  ),

  email: z.preprocess(
    (val) => val?.toString().trim().toLowerCase(),
    z.string().email({ message: "Invalid Email" }),
  ),

  phone: z.preprocess(
    (val) => (val ? val.toString().replace(/\D/g, "") : ""),
    z
      .string()
      .refine((val) => val === "" || (val.length >= 10 && val.length <= 14), {
        message: "Invalid phone number",
      }),
  ),

  message: z.preprocess(
    (val) => val?.toString().trim(),
    z.string().min(1, { message: "Enter a message" }),
  ),
});
