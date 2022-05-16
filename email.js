const nodemailer = require("nodemailer");
let transporter = nodemailer.createTransport({
  host: "smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: "4d17a200e115bf",
    pass: "a66a58ed318c5d",
  },
});
message = {
  from: "from-example@email.com",
  to: "to-example@email.com",
  subject: "Nuevo articulo",
  text: "Se a subido un nuevo articulo",
};
transporter.sendMail(message);
