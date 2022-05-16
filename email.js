const nodemailer = require("nodemailer");
function sendEmail() {
  let transporter = nodemailer.createTransport({
    host: "smtp.mailtrap.io",
    port: 2525,
    auth: {
      user: "4d17a200e115bf",
      pass: "a66a58ed318c5d",
    },
  });
  message = {
    from: "cleanblog@email.com",
    to: "admins@email.com",
    subject: "Nuevo articulo",
    text: "Se a subido un nuevo articulo",
  };
  transporter.sendMail(message);
}

module.exports = sendEmail;
