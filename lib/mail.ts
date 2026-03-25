"use server";

import { schemaZod } from "./zod";
import { Mail } from "@/lib/nodemailer";
import { RateLimiter } from "./rateLimiter";
import { headers } from "next/headers";

export async function FormAction(prevState: any, formData: FormData) {
  const headerList = await headers();

  const forwarded = headerList.get("x-forwarded-for");

  const ip = forwarded
    ? forwarded.split(",")[0].trim()
    : "anonymous";

  const email = formData.get("email")?.toString() || "";

  try {
    await Promise.all([
      RateLimiter.consume(`ip:${ip}`),
      RateLimiter.consume(`email:${email}`),
    ]);
  } catch {
    return {
      success: false,
      error: "Too many requests. Please try again later.",
    };
  }

  const userDetails = {
    name: formData.get("name")?.toString() || "",
    email,
    phone: formData.get("phone")?.toString() || "",
    message: formData.get("message")?.toString() || "",
  };

  const parsedData = schemaZod.safeParse(userDetails);

  if (!parsedData.success) {
    return {
      success: false,
      errors: parsedData.error.flatten().fieldErrors,
    };
  }

  try {
    const message = await Mail(parsedData.data);

    return {
      success: message?.success ?? false,
    };
  } catch (err) {
    console.log("nodemailer error", err);

    return {
      success: false,
    };
  }
}