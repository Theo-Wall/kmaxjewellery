import express from "express";
import nodemailer from "nodemailer";
const router = express.Router();

router.post("/sendEmail", async (req, res) => {
  const data = req.body;
  try {
    let transporter = nodemailer.createTransport({
      host: "smtp-relay.sendinblue.com",
      port: 587,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASSWORD,
      },
    });
    let info = await transporter.sendMail({
      from: ` "${data.fullName}" <${data.email}>`, // sender address
      to: "theo.wall11@gmail.com", // list of receivers
      subject: "Contact KMAXjewellery", // Subject line
      text: `${data.message}`, // plain text body
    });
    res.send(info).status(200);
  } catch (e) {
    res.sendStatus(400);
  }
});

export default router;
