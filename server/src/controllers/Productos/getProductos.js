const { Productos, Usuario } = require("../../db");
const { Op } = require("sequelize");

const getProductos = async (req, res) => {
  try {
    let allProdu = await Productos.findAll({
      attributes: { exclude: ["createdAt", "updatedAt"] },
    });
    allProdu = allProdu.map((produ) => produ.get());
    return res.status(200).json(allProdu);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};


const getProductosSeleccionados = async (req, res) => {
  try {
    // Obtener productos con quantitysold mayor que 0
    const masVendidos = await Productos.findAll({
      attributes: { exclude: ["createdAt", "updatedAt"] },
      where: {quantitysold: { [Op.gt]: 0 }},
      order: [["quantitysold", "DESC"]]
    });

    const cantidadConValor = masVendidos.length;

    // Relleno de productos en caso de que no haya más vendidos.
    // El 10 representa la cantidad de productos a devolver
    const faltantes = Math.max(10 - cantidadConValor, 0);

    // Obtener productos con quantitysold igual a 0 o null, ordenados de mayor a menor
    const randomProdu = await Productos.findAll({
      attributes: { exclude: ["createdAt", "updatedAt"] },
      where: {
        [Op.or]: [
          { quantitysold: 0 },
          { quantitysold: null }
        ]
      },
      order: [["quantitysold", "DESC"]],
      limit: faltantes
    });

    //Me traigo los valores en caso de que falten.
    const topProductos = [...masVendidos, ...randomProdu];

    return res.status(200).json(topProductos);

  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getProductosON = async (req, res) => {
  try {
    let allProdu = await Productos.findAll({
      where: {
        estado: true,
      },

      attributes: { exclude: ["createdAt", "updatedAt"] },
    });
    allProdu = allProdu.map((produ) => produ.get());
    return res.status(200).json(allProdu);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getProductosById = async (req, res) => {
  let { id } = req.params;
  try {
    let product = await Productos.findOne({
      where: { id: id },
    });
    return res.status(200).json(product);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getProductosByName = async (req, res) => {
  try {
    const { nombre } = req.query;
    console.log(nombre);

    if (!nombre) {
      return res.status(400).json("Debes ingresar el nombre de un producto");
    }

    let product = await Productos.findAll({
      where: {
        estado: true,
        nombre: { [Op.iLike]: `%${nombre}%` },
      },
      attributes: { exclude: ["createdAt", "updatedAt"] },
    });

    if (product.length === 0) {
      return res
        .status(400)
        .json({ message: "No se encontraron productos con ese nombre" });
    }

    res.status(200).json(product);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getProductosFilter = async (req, res) => {
  try {
    const options = {
      where: {},
    };

    //PAGINADO
    const { limit, offset } = req.query;
    if ((limit, offset)) {
      options.limit = limit;
      options.offset = offset;
    }

    //FILTRADO POR PRECIO
    const { precio } = req.query;
    if (precio) {
      options.where.precio = precio;
    }

    //FILTRADO POR RANGO DE PRECIO
    const { priceMin, priceMax } = req.query;

    if ((priceMin, priceMax)) {
      options.where.precio = {
        [Op.gte]: priceMin,
        [Op.lte]: priceMax,
      };
    }

    //FILTRADO POR MARCA
    const { marca } = req.query;

    if (marca) {
      options.where.marca = { [Op.iLike]: `%${marca}%` };
    }

    const { modelo } = req.query;

    if (modelo) {
      options.where.modelo = { [Op.iLike]: `%${modelo}%` };
    }

    //FILTRADO POR GENERO
    const { genero } = req.query;

    if (genero) {
      options.where.genero = { [Op.iLike]: `%${genero}%` };
    }

    const products = await Productos.findAll(options);
    res.status(200).json(products);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = {
  getProductos,
  getProductosSeleccionados,
  getProductosById,
  getProductosON,
  getProductosByName,
  getProductosFilter,
};
