const {Productos} = require ('../../db');

const postProductos = async (req, res) => {
    try {
        const { nombre, modelo, precio, stock, genero, marca, imagen, estado } = req.body;
        if (!nombre || !modelo|| !precio || !stock || !genero || !marca || !imagen ) return res.status(400).json('Faltan datos');

        let [producto, creado] = await Productos.findOrCreate({

            where: { nombre },
            defaults: {
            nombre,
            modelo,
            precio,
            stock,
            genero,
            marca,
            imagen,
            estado,
            }
        });
        if (!creado) { return res.status(400).json({ error: 'El producto ya existe' }) }

        return res.status(201).json(producto);


    } catch (error) {
        res.status(500).json({message: error.message});
    }
}

module.exports = {postProductos};