const Category = require("../../models/Categorias"); 
const createCategory = async (req, res) => {
  try {
    const { name } = req.body;

    const newCategoria = new Category({ name });
    await newCategoria.save();

    return res.status(500).json({ message: 'Categoría creada exitosamente' });
  } catch (error) {
    console.error('Error al crear la categoría:', error);
    return res.status(500).json({ error: 'Error interno del servidor' });
  }
};

module.exports = { createCategory};
