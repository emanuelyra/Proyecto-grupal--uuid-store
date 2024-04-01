const { Productos } = require("../../db");

const createComment = async (req, res) => {
  const { id } = req.query;
  const { comment } = req.body;

  if (!id)
    return res.status(400).send("No se encontró el producto con este id");

  const producto = await Productos.findByPk(id);

  if (!producto) return res.status(404).send("Producto no encontrado");

  let puntuaciones = producto.getDataValue("puntuaciones");
  puntuaciones = [...puntuaciones, comment];
  await producto.update({ puntuaciones });

  return res.status(200).json(comment);
};
const deleteComment = async (req, res) => {
  const { id, uuid } = req.query;

  if (!id)
    return res.status(400).send("No se encontró el producto con este id");

  const producto = await Productos.findByPk(id);

  if (!producto) return res.status(404).send("Producto no encontrado");

  let puntuaciones = producto.getDataValue("puntuaciones");
  puntuaciones = puntuaciones.filter((comment) => uuid !== comment.uuid);
  await producto.update({ puntuaciones });

  return res.status(200).json(puntuaciones);
};

module.exports = { createComment, deleteComment };
