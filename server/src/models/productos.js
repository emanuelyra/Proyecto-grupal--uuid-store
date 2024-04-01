const { DataTypes } = require("sequelize");
const { v4: uuidv4 } = require("uuid");
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define(
    "Productos",
    {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
      codigo: {
        type: DataTypes.STRING,
        defaultValue: () => uuidv4().split("-").join("").slice(0, 6),
        unique: true,
      },
      nombre: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      modelo: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      precio: {
        type: DataTypes.FLOAT,
        allowNull: false,
      },
      talle: {
        type: DataTypes.FLOAT,
        allowNull: true,
      },
      stock: {
        type: DataTypes.JSONB,
        allowNull: true,
      },
      genero: {
        type: DataTypes.STRING,
      },
      marca: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      imagen: {
        type: DataTypes.JSONB(DataTypes.STRING),
        // allowNull: false, //cuando esten las imagenes lista se debe activar esta columna.
      },
      quantitysold: {
        type: DataTypes.INTEGER,
        default: 0,
        allowNull: true,
      },
      enDescuento: {
        type: DataTypes.BOOLEAN,
        default: false,
        allowNull: true,
      },
      estado: {
        //El estado corresponde a activo o inactivo
        type: DataTypes.BOOLEAN,
        default: true,
        allowNull: true,
      },
      puntuaciones: {
        type: DataTypes.ARRAY(DataTypes.JSONB),
        allowNull: false,
        defaultValue: [],
      },
      // comentarios: {
      //   type: DataTypes.ARRAY(DataTypes.JSONB),
      //   allowNull: true,
      // },
      // calificacion: {
      //   type: DataTypes.ARRAY(DataTypes.INTEGER),
      //   allowNull: true,
      // },
    },
    { timestamps: false }
  );
};
