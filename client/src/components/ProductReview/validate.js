const validate = (values) => {
  let errors = {};

  const regexComentario = /^[\p{L}\p{M}0-9.,\s]*$/u;

  if (!values.puntuacion) errors.puntuacion = "La puntuación no puede ser 0";

  if (!values.comentario)
    errors.comentario = "El comentario no puede estar vacío";
  else if (values.comentario.length > 160)
    errors.comentario = "El comentario puede tener máximo 160 caracteres";
  else if (!regexComentario.test(values.comentario))
    errors.comentario = "Campo inválido!";

  return errors;
};

export default validate;
