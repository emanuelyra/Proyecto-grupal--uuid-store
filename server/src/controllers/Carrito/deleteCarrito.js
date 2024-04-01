const {Carrito} = require("../../db")

const deleteCarrito = async (req, res) => {
  const {idDeCompra} = req.body;
  
    try{
        if(!idDeCompra){ return res.status(404).send("Se necesita el id del carrito.")}

        const compra = await Carrito.findByPk(idDeCompra);
        if (!compra) {return res.status(404).json({ message: "Carrito no encontrado." });}

        await compra.destroy()

        return res.status(200).send("Se cancelo la compra exitosamente.")

 }catch(error){
    return res.status(500).json({message: error.message})
 }
}

module.exports = {deleteCarrito}