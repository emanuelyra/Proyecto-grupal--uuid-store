const { Productos, Usuario } = require("./src/db.js");
const produDemo = require("./produDemo.js");
const usuarioDemo = require("./usuarioDEMO.js");

const dbRegisterDEMO = async () => {
  try {
    const productos = produDemo;
    const mappedProductos = productos.map((producto) => {
      return {
        id: producto.id,
        nombre: producto.nombre,
        modelo: producto.modelo,
        precio: producto.precio,
        stock: producto.stock,
        genero: producto.genero,
        marca: producto.marca,
        imagen: producto.imagen,
        estado: producto.estado,
        codigo: producto.codigo,
        keyBorradoLogico: producto.keyBorradoLogico,
      };
    });

    // Inserta los productos en la base de datos
    await Productos.bulkCreate(mappedProductos);
    console.log("Productos cargados a la base de datos correctamente");
  } catch (error) {
    console.error("Error en la carga de productos:", error);
  }
};

const dbRegisterUsuariosDEMO = async () => {
  try {
    const usuarios = usuarioDemo;
    const mappedUsuarios = usuarios.map((usuario) => {
      return {
        id: usuario.id,
        nombre: usuario.nombre,
        email: usuario.email,
        password: usuario.password,
        googleId: usuario.googleId,
        imageUrl: usuario.imageUrl,
        givenName: usuario.givenName,
        admin: usuario.admin,
        estadoInactividad: usuario.estadoInactividad,
        apellido: usuario.apellido,
        direccion: usuario.direccion,
        provincia: usuario.provincia,
        localidad: usuario.localidad,
        codigoPostal: usuario.codigoPostal,
        dni: usuario.dni,
        numeroTramite: usuario.numeroTramite,
        telefono: usuario.telefono,
        genero: usuario.genero,
        notificaciones: usuario.notificaciones,
      };
    });

    // Inserta los usuarios en la base de datos
    await Usuario.bulkCreate(mappedUsuarios);
    console.log("Usuarios cargados a la base de datos correctamente");
  } catch (error) {
    console.error("Error en la carga de usuarios:", error);
  }
};

module.exports = { dbRegisterUsuariosDEMO, dbRegisterDEMO };
