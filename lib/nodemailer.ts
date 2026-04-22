import nodemailer from "nodemailer";

if (!global._transport) {
  global._transport = nodemailer.createTransport({
    host: "smtp.hostinger.com",
    port: 465,
    secure: true,
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  global._transport
    .verify()
    .then(() => console.log("SMTP ready"))
    .catch(console.error);
}

export const Transport = global._transport!;
