const { Usuario } = require("../../db");

const deleteUser = async (req, res) => {
  try {
    const { email } = req.query;
    if(!email){ return res.status(404).json("Se necesita el email para poder eliminar el usuario.")}
    
    const usuario = await Usuario.findOne({where: {email}});

    if (!usuario) {return res.status(404).json({ message: "Usuario no encontrado." });}
    await usuario.destroy();

    return res.status(200).json({ message: "Usuario eliminado exitosamente.", usuario });

  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Error al eliminar el usuario." });
  }
};

module.exports = { deleteUser };
