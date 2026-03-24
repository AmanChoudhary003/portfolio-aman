import nodemailer from "nodemailer";

type User = {
  name: string;
  email: string;
  phone: string;
  message: string;
};

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

const transport = global._transport!;

export async function Mail(user: User) {
  try {
    await Promise.all([
      transport.sendMail({
        from: process.env.EMAIL_USER!,
        to: process.env.EMAIL_USER!,
        replyTo: user.email,
        subject: "Contact Form Submission",
        html: `
          <h2>New Message</h2>
          <p><strong>Name:</strong> ${user.name}</p>
          <p><strong>Email:</strong> ${user.email}</p>
          <p><strong>Phone:</strong> ${user.phone}</p>
          <p><strong>Message:</strong> ${user.message}</p>
        `,
      }),

      transport.sendMail({
        from: process.env.EMAIL_USER!,
        to: user.email,
        subject: "We’ve received your message",
        html: `
          <p>Hi ${user.name.charAt(0).toUpperCase() + user.name.slice(1)},</p>

          <p>Thank you for reaching out! We’ve received your message.</p>

          <p>
            If urgent, contact us at <strong>+91 7033077384</strong>
          </p>

          <p>Best regards,<br/>Aman Choudhary</p>
        `,
      }),
    ]);

    return { success: true };
  } catch (err) {
    console.log("smtp error", err);
    return { success: false };
  }
}