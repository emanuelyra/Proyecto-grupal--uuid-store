const validate = values => {

    const regexLetras = /^[a-zA-Z\s]*$/;
    const regexNumeros = /^[0-9]+$/;
    const regexEmail = /^[\w.-]+@[a-zA-Z\d.-]+\.[a-zA-Z]{2,}$/;

    let errors = {};

    if(!values.nombre) errors = {...errors, nombre: "Campo obligatorio!"};
    if(!values.apellido) errors = {...errors, apellido: "Campo obligatorio!"};
    if(!values.email) errors = {...errors, email: "Campo obligatorio!"};
    if(!values.dni) errors = {...errors, dni: "Campo obligatorio!"};
    if(!values.telefono) errors = {...errors, telefono: "Campo obligatorio!"};

    if(!regexLetras.test(values.nombre)) errors = {...errors, nombre: "El nombre solo puede contener letras"};
    if(!regexLetras.test(values.apellido)) errors = {...errors, apellido: "El apellido solo puede contener letras"};
    if(!regexEmail.test(values.email)) errors = {...errors, email: "El campo introducido tiene que ser un email"};
    if(!regexNumeros.test(values.dni)) errors = {...errors, dni: "El dni solo puede contener numeros (sin puntos)"};
    if(!regexNumeros.test(values.telefono)) errors = {...errors, telefono: "El telefono solo puede contener numeros (sin puntos)"};
    

    return errors;
}

export default validate;