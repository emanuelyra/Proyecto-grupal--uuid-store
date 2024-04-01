const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const router = require("./routes/indexroutes");


const server = express();

server.use(morgan("dev"));
server.use(express.json());
server.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*'); // Reemplaza con la URL de tu frontend
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Credentials', 'true');
    next();
  });

server.use(router)


module.exports = server ;