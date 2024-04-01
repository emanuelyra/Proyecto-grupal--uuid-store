const validate = (values) => {
    let errors = {};

    const regexCaracteresValidos = /^[a-zA-Z0-9\s.,]*$/;

    if(!values.direccion) errors = {...errors, direccion: "Campo obligatorio!"};
    if(!values.provincia) errors = {...errors, provincia: "Campo obligatorio!"};
    if(!values.localidad) errors = {...errors, localidad: "Campo obligatorio!"};
    if(!values.codigoPostal) errors = {...errors, codigoPostal: "Campo obligatorio!"};

    if(!regexCaracteresValidos.test(values.direccion)) errors = {...errors, direccion: "El campo ingresado no es válido"};
    if(!regexCaracteresValidos.test(values.provincia)) errors = {...errors, provincia: "El campo ingresado no es válido"};
    if(!regexCaracteresValidos.test(values.localidad)) errors = {...errors, localidad: "El campo ingresado no es válido"};
    if(!regexCaracteresValidos.test(values.codigoPostal)) errors = {...errors, codigoPostal: "El campo ingresado no es válido"};

    return errors;
}

export default validate;