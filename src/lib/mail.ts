import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export const sendVerificationEmail = async (email: string, token: string) => {
  const confirmLink = `http://localhost:3000/auth/new-verification?token=${token}`;

  const tempEmail = "niconel@gmail.com";
  await resend.emails.send({
    from: "YourSite <onboarding@resend.dev>",
    to: tempEmail,
    subject: "Confirm your email",
    html: `<p><a href=${confirmLink}>Click here</a> to confirm your email or past this ${confirmLink}`,
  });
};
