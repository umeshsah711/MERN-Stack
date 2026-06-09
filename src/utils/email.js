import { Resend } from "resend";

import config from "../config/config";

const resend = new Resend(config.emailApiKey);

const sendEmail = async (recipient, { subject, html }) => {
  await resend.emails.send({
    from: "onboarding@resend.dev",
    to: [recipient],
    subject,
    html,
  });
};

export default sendEmail;
