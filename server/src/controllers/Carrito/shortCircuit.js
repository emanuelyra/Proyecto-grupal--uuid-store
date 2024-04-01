const shortCircuitUser = () => {
    if(!email|| !nombre || !apellido || !dni || !numeroTramite || !telefono || !genero || !notificaciones
        || !provincia || !direccion || !localidad || !codigoPostal){return res.status(404).json("Faltan datos para procesar la compra")}
}

module.exports = { shortCircuitUser }