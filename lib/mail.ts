"use server";

import { success } from "zod";
import { schemaZod } from "./zod";
import { Mail } from "@/lib/nodemailer";

export async function FormAction(prevState: any, formData: FormData) {
  if (!formData) return { success: false };

  const userDetails = {
    name: formData.get("name") as string,
    email: formData.get("email") as string,
    phone: formData.get("phone") as string,
    message: formData.get("message") as string,
  };

  const parsedData = schemaZod.safeParse(userDetails);

  if (!parsedData.success) {
    console.log("ZOD ERROR:", parsedData.error.flatten());
    return {
      success: false,
    };
  }
  try {
    const message = await Mail(parsedData.data);
    if (message?.success) {
      return {
        success: true,
      };
    }
  } catch (err) {
    console.log("nodemailer error", err);
  }
  return {
    success: true,
  };
}
