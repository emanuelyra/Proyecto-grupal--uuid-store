const { DataTypes } = require("sequelize");
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define(
    "Carrito",
    {
      idDeCompra: {
        type: DataTypes.UUID, // Cambia el tipo de datos a UUID
        allowNull: false,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4, // Establece un valor predeterminado utilizando UUIDV4
      },
      total: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      estadoDelPedido: {
        type: DataTypes.STRING,
        defaultValue: "pendiente",
        allowNull: false,
      },
      productos: {
        type: DataTypes.ARRAY(DataTypes.JSONB),
        allowNull: false,
      },
      userData: {
        type: DataTypes.JSONB,
        allowNull: false,
      },
      datosDeEnvio: {
        type: DataTypes.JSONB,
        allowNull: false,
      },
    },
    { timestamps: true }
  );
};
