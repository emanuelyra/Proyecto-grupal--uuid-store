const { Usuario } = require("../../db");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const nodemailer = require("nodemailer");
require("dotenv").config();
const { JWT_SECRET } = process.env;

const login = async (req, res) => {
  try {
    const { email, password } = req.query;

    const user = await Usuario.findOne({ where: { email: email } });

    const passwordCorrect =
      user === null ? false : await bcrypt.compare(password, user.password);

    if (!user || !passwordCorrect) {
      return res.status(400).send("contraseña o usuario inválido");
    }

    const payload = {
      id: user.id,
      username: user.email,
      admin: user.admin,
    };

    const token = jwt.sign(payload, JWT_SECRET, { expiresIn: "1d" });
    if (email === "abusscin_@hotmail.com") user.dataValues.admin = true;

    res.json({
      ...user.dataValues,
      token,
    });
  } catch (error) {
    console.log(error);
    res.status(400).send(error.message);
  }
};

// logInGoogle tiene que devolver todo.
const loginGoogle = async (req, res) => {
  try {
    const { email } = req.query;

    const user = await Usuario.findOne({ where: { email } });

    if (!user) {
      return res
        .status(404)
        .send("Usuario no encontrado. Por favor, regístrate.");
    }

    const payload = {
      id: user.id,
      username: user.email,
      admin: user.admin,
    };

    const token = jwt.sign(payload, JWT_SECRET, { expiresIn: "1d" }); //No estoy seguro de esto, deberia devolverte el toquen?

    res.status(200).json({
      ...user.dataValues, //DataValues devuelve todos los valores del registro del usuario que pases por email!
      token, //Si tiene un token generado te lo envio en el json manquina.
    });
  } catch (error) {
    return res.status(400).send(error.message);
  }
};

const mailPassword = async (req, res) => {
  try {
    const { email } = req.body;

    const user = await Usuario.findOne({ where: { email } });

    if (!user) {
      return res
        .status(404)
        .send("Usuario no encontrado. Por favor, regístrate.");
    }

    const payload = {
      id: user.id,
    };

    const token = jwt.sign(payload, JWT_SECRET, { expiresIn: "10min" });
    const link = `https://uuid-store.vercel.app/change-password?${token}`;
    await Usuario.update({ recoveryToken: token }, { where: { id: user.id } });

    const transporter = nodemailer.createTransport({
      service: "Outlook",
      auth: {
        user: "uuidstore@outlook.com",
        pass: "Henry!123",
      },
    });

    const info = await transporter.sendMail({
      from: "uuidstore@outlook.com",
      to: `${user.email}`,
      subject: "Cambio de contraseña",
      html: `<b>Ingresa a este link para cambiar la contraseña: ${link}</b>`,
    });

    res.status(200).json({ token });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const cambioPassword = async (req, res) => {
  try {
    const recoveryToken = req.body.token;
    const newPassword = req.body.newPassword.newPassword;

    const token = recoveryToken.token;

    const payload = jwt.verify(token, JWT_SECRET);

    const user = await Usuario.findOne({ where: { id: payload.id } });

    if (user.recoveryToken !== token) {
      res.status(400).json({ error: "error token" });
    }

    const hash = await bcrypt.hash(newPassword, 10);
    await Usuario.update(
      { recoveryToken: null, password: hash, rPassword: hash },
      { where: { id: user.id } }
    );
    res.status(200).send("Contraseña actualizada correctamente!");
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = { login, loginGoogle, mailPassword, cambioPassword };
