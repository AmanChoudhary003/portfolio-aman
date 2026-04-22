"use server";
import prisma from "@/lib/prisma/prisma";

interface Consent {
  consentId: string;
  status: string;
  userAgent: string;
}

interface Props {
  consent: Consent;
}

export async function SaveConsent({ consent }: Props) {
  if (!consent.consentId || !consent.status || !consent.userAgent) {
    throw new Error("Missing required consent fields");
  }
  try {
    await prisma.auditLog.upsert({
      where: {
        consentId: consent.consentId,
      },
      update: {
        status: consent.status,
        userAgent: consent.userAgent,
      },
      create: {
        consentId: consent.consentId,
        status: consent.status,
        userAgent: consent.userAgent,
      },
    });
    return { success: true };
  } catch (err) {
    console.log(`database error: ${err}`);
    return { success: false };
  }
}

// export async function DeleteConsent(consentId: string) {
//   try {
//     await prisma.auditLog.delete({ where: { consentId } });
//     return { success: true };
//   } catch (err) {
//     console.log(`database error: ${err}`);
//     return { success: false };
//   }
// }
