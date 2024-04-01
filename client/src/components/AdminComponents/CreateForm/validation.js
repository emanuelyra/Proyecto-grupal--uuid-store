const validate = (valores) => {
  const errors = {};

  const regexCaracteres = /^[a-zA-Z0-9\s]*$/;

  if (!valores.nombre) {
    errors.nombre = "Campo obligatorio";
  } else if (!regexCaracteres.test(valores.nombre)) {
    errors.nombre = "Campo invalido";
  } else if (valores.nombre.length > 30) {
    errors.nombre = "El nombre puede contener 15 caracteres como máximo";
  }

  if (!valores.marca) {
    errors.marca = "Campo obligatorio";
  } else if (!regexCaracteres.test(valores.marca)) {
    errors.marca = "Campo invalido";
  } else if (valores.marca.length > 30) {
    errors.marca = "La marca puede contener 15 caracteres como máximo";
  }

  if (!valores.modelo) {
    errors.modelo = "Campo obligatorio";
  } else if (!regexCaracteres.test(valores.modelo)) {
    errors.modelo = "Campo invalido";
  } else if (valores.modelo.length > 30) {
    errors.modelo = "El modelo puede contener 15 caracteres como máximo";
  }

  if (!valores.precio) {
    errors.precio = "Campo obligatorio";
  } else if (typeof Number(valores.precio) !== "number") {
    errors.precio = "El precio tiene que ser un número";
  }

  if (valores.imagen.length === 0) {
    errors.imagen = "Se debe insertar una imagen como mínimo";
  }

  return errors;
};

export default validate;
