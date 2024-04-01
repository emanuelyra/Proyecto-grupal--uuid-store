const { Usuario } = require("../../db");
const bcrypt = require("bcrypt");
const nodemailer = require("nodemailer");
const jwt = require("jsonwebtoken");
require("dotenv").config();
const { JWT_SECRET } = process.env;

const signUpUser = async (req, res) => {
  const { email, nombre, apellido, password, rPassword } = req.body;

  try {
    if (!email || !nombre || !apellido || !password || !rPassword)
      return res.status(400).send("Faltan ingresar datos.");

    const hash = await bcrypt.hash(password, 10);

    let [user, seCreoUser] = await Usuario.findOrCreate({
      where: { email },
      defaults: {
        nombre,
        apellido,
        email,
        password: hash,
        rPassword: hash,
      },
    });

    if (!seCreoUser) return res.status(400).send("El usuario ya existe.");

    enviarCorreo(
      email,
      "Bienvenido",
      "¡Gracias por autenticarte en nuestro sitio web, esto no ayuda a la protección tuya como de los demás usuarios."
    );

    const payload = {
      id: user.id,
      username: user.email,
      admin: user.admin,
    };

    const token = jwt.sign(payload, JWT_SECRET);

    delete user.dataValues.password;
    delete user.dataValues.rPassword;

    // LO HARDCODEO PARA LA DEMO
    if (email === "adrianortizzt1vl@gmail.com") user.dataValues.admin = true;


    return res.status(201).json({ ...user.dataValues, token });
  } catch (error) {
    return res.status(500).send(error.message);
  }
};

const signUpUserGoogle = async (req, res) => {
  const { email, nombre, googleId, imageUrl, givenName, apellido } = req.body;
  try {
    let [user, seCreoUser] = await Usuario.findOrCreate({
      where: { email },
      defaults: {
        email,
        nombre,
        apellido,
        googleId,
        imageUrl,
        givenName,
      },
    });

    if (!seCreoUser) return res.status(400).send("El usuario ya existe.");

    enviarCorreo(
      email,
      "Bienvenido",
      "¡Gracias por autenticarte en nuestro sitio web, esto no ayuda a la protección tuya como de los demás usuarios."
    );

    const payload = {
      id: user.id,
      username: user.email,
      admin: user.admin,
    };

    const token = jwt.sign(payload, JWT_SECRET);

    // LO HARDCODEO PARA LA DEMO
    if (email === "adrianortizzt1vl@gmail.com") user.dataValues.admin = true;

    return res.status(201).json({ ...user.dataValues, token });
  } catch (error) {
    return res.status(500).send(error.message);
  }
};

//Configuración de admin / transporter
const transporter = nodemailer.createTransport({
  service: "Outlook",
  auth: {
    user: "uuidstore@outlook.com",
    pass: "Henry!123",
  },
});

// Función para enviar el correo electrónico.
function enviarCorreo(destinatario, asunto, mensaje) {
  // Opciones del correo electrónico
  const mailOptions = {
    from: "uuidstore@outlook.com",
    to: destinatario,
    subject: asunto,
    text: mensaje,
  };

  // Enviar el correo electrónico
  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.log("Error al enviar el correo electrónico:", error);
    } else {
      console.log("Correo electrónico enviado:", info.response);
    }
  });
}

module.exports = { signUpUserGoogle, signUpUser };
