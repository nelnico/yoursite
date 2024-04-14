import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export const sendTwoFactorTokenEmail = async (email: string, token: string) => {
  const tempEmail = "niconel@gmail.com";
  await resend.emails.send({
    from: "YourSite <onboarding@resend.dev>",
    to: tempEmail,
    subject: "2FA Code",
    html: `<p>Your 2FA code is: ${token}</p>`,
  });
};

export const sendVerificationEmail = async (email: string, token: string) => {
  const confirmLink = `http://localhost:3000/auth/verify?token=${token}`;

  const tempEmail = "niconel@gmail.com";
  await resend.emails.send({
    from: "YourSite <onboarding@resend.dev>",
    to: tempEmail,
    subject: "Confirm your email",
    html: `<p><a href=${confirmLink}>Click here</a> to confirm your email</p>`,
  });
};

export const sendPasswordResetEmail = async (email: string, token: string) => {
  const resetLink = `http://localhost:3000/auth/password?token=${token}`;

  const tempEmail = "niconel@gmail.com";
  await resend.emails.send({
    from: "YourSite <onboarding@resend.dev>",
    to: tempEmail,
    subject: "Reset your password",
    html: `<p><a href=${resetLink}>Click here</a> to reset your password</p>`,
  });
};
