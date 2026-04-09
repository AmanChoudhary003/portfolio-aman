import nodemailer from "nodemailer";

export {};

declare global {
  // for nodemailer transport
  var _transport: nodemailer.Transporter | undefined;

  // For Google Analytics
  interface Window {
    dataLayer: any[];
    gtag: (...args: any[]) => void;
  }
}
