import { Router } from "express";
import nodemailer from "nodemailer";

const router = Router();

router.post("/contact", async (req, res) => {
  const { name, email, message } = req.body as {
    name?: string;
    email?: string;
    message?: string;
  };

  if (!name || !email || !message) {
    res.status(400).json({ error: "Faltan campos requeridos." });
    return;
  }

  const gmailUser = "yordisandresmestrasmendez@gmail.com";
  const gmailPass = process.env.GMAIL_APP_PASSWORD;

  if (!gmailPass) {
    req.log.error("GMAIL_APP_PASSWORD not configured");
    res.status(500).json({ error: "El servidor de correo no está configurado." });
    return;
  }

  req.log.info({ passLen: gmailPass.length }, "Attempting to send email");

  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
      user: gmailUser,
      pass: gmailPass,
    },
  });

  try {
    await transporter.verify();
    req.log.info("SMTP connection verified successfully");

    await transporter.sendMail({
      from: `"Portfolio Contact" <${gmailUser}>`,
      to: gmailUser,
      replyTo: email,
      subject: `Nuevo mensaje de ${name} — Portfolio`,
      html: `
        <h2>Nuevo mensaje desde tu portafolio</h2>
        <p><strong>Nombre:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Mensaje:</strong></p>
        <p>${message.replace(/\n/g, "<br>")}</p>
      `,
    });

    req.log.info({ from: email }, "Contact email sent successfully");
    res.json({ success: true });
  } catch (err) {
    const error = err as NodeJS.ErrnoException & { code?: string; responseCode?: number; response?: string };
    req.log.error({ code: error.code, responseCode: error.responseCode, response: error.response, message: error.message }, "Failed to send contact email");
    res.status(500).json({ error: "No se pudo enviar el mensaje. Intenta de nuevo." });
  }
});

export default router;
