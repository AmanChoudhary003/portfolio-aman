import nodemailer from "nodemailer";

declare global {
  var _transport: nodemailer.Transporter | undefined;
}

export {};
