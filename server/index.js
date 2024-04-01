const server = require("./src/server");
const { conn } = require("./src/db.js");
require("dotenv").config();
const{PORT} = process.env;

const {
  dbRegisterDEMO,
  dbRegisterUsuariosDEMO,
} = require("./dbRegistrerDEMO.js");

conn
  .sync({ force: true })
  .then(async () => {
    await dbRegisterDEMO();
    await dbRegisterUsuariosDEMO();

    server.listen(PORT, "0.0.0.0", () => {
      console.log(`Server listening on port ${PORT}`);
    });
  })

  .catch((error) => console.error(error));

// conn.sync({ force: true }).then(
//      server.listen(PORT, () => {
//      console.log(`Server listening on port ${PORT}`);
//     })

// )
// .catch(error => console.error(error))

//Agregar el puerto del deploy al funcion de listen.
//Se modifico la url del postgress que le pasamos a back-end.