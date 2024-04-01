export const validate = (values) => {
  const regexLetras = /^[a-zA-Z\s]+$/;
  const regexEmail = /^[\w.-]+@[a-zA-Z\d.-]+\.[a-zA-Z]{2,}$/;

  let errors = {};

  if (!regexLetras.test(values.nombre))
    errors = {
      ...errors,
      nombre: "El nombre solo puede estar compuesto de letras",
    };

  if (!regexLetras.test(values.apellido))
    errors = {
      ...errors,
      apellido: "El apellido solo puede estar compuesto de letras",
    };

  if (!regexEmail.test(values.email))
    errors = {
      ...errors,
      email: "El campo introducido debe ser un email",
    };

  if (values.password.length < 6)
    errors = {
      ...errors,
      password: "La contraseña debe tener mínimo 6 caracteres",
    };

  if (values.password !== values.rPassword)
    errors = {
      ...errors,
      rPassword: "Las contraseñas no coinciden",
    };

  return errors;
};
