import nodemailer from "nodemailer";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const { name, email, message } = req.body ?? {};

  if (!name || !email || !message) {
    return res.status(400).json({ error: "Faltan campos requeridos." });
  }

  const gmailUser = "yordisandresmestrasmendez@gmail.com";
  const gmailPass = process.env.GMAIL_APP_PASSWORD;

  if (!gmailPass) {
    return res.status(500).json({ error: "El servidor de correo no está configurado." });
  }

  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: { user: gmailUser, pass: gmailPass },
  });

  try {
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
    return res.json({ success: true });
  } catch (err) {
    console.error("Failed to send email:", err);
    return res.status(500).json({ error: "No se pudo enviar el mensaje. Intenta de nuevo." });
  }
}
