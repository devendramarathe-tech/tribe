import { resendClient } from "../lib/resend.js";
import { createWelcomeEmailTemplate } from "../emails/emailsTemplates.js";

export const sendWelcomeEmail = async (sendWelcomeEmail, name, clientURL) => {
  const { data, error } = await resendClient.emails.send({
    from: `${sender.name} <${sender.email}>`,
    to: email,
    subject: `<h1>Welcome to Tribe!</h1>`,
    html: createWelcomeEmailTemplate(name, clientURL),
  });

  if (error) {
    console.error("Error sending welcome email:", error);
    throw new Error("Failed to send welcome email: ");
  }
  console.log("Welcome email sent successfully", data);
};
