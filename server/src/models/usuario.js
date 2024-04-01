const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define(
    "Usuario",
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        allowNull: false,
        unique: true,
        primaryKey: true,
      },

      nombre: {
        //podria reemplazarlo por lo que se recibe de google e implementar name para el formulario.
        type: DataTypes.STRING,
        allowNull: false,
      },

      apellido: {
        type: DataTypes.STRING,
        allowNull: true,
      },

      email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true, // Asegura que el correo electrónico sea único
        validate: {
          isEmail: true, // Validación de formato de correo electrónico
        },
      },
      password: {
        type: DataTypes.STRING,
        allowNull: true,
      },

      rPassword: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      recoveryToken: {
        type: DataTypes.STRING,
        allowNul: true,
      },

      googleId: {
        type: DataTypes.STRING,
        allowNull: true,
      },

      imageUrl: {
        //Se podria quitar
        type: DataTypes.STRING,
        allowNull: true,
      },

      givenName: {
        type: DataTypes.STRING,
        allowNull: true,
      },

      admin: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false,
      },

      estadoInactividad: {
        type: DataTypes.BOOLEAN,
        allowNul: true,
        defaultValue: false,
      },
      //DATOS DEL CLIENTE PARA COMPLETAR FORMULARIO DEL PERFIL.

      direccion: {
        type: DataTypes.STRING,
        allowNull: true,
      },

      provincia: {
        type: DataTypes.STRING,
        allowNull: true,
      },

      localidad: {
        type: DataTypes.STRING,
        allowNull: true,
      },

      codigoPostal: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },

      dni: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },

      numeroTramite: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },

      telefono: {
        type: DataTypes.STRING,
        allowNull: true,
      },

      genero: {
        type: DataTypes.STRING,
        allowNull: true,
      },

      notificaciones: {
        //deberia ser un checkbox que indique que si desea recibir notificaciones de la página.
        type: DataTypes.BOOLEAN,
        default: false,
        allowNull: true,
      },
    },
    { timestamps: true }
  );
};
