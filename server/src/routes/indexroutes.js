const { Router } = require("express");
//Cliente/Usuario
const postUser = require("../controllers/Users/signUp");
const getUser = require("../controllers/Users/getUser");
const putUser = require("../controllers/Users/putUser");
const deleteUser = require("../controllers/Users/deleteUser");
const login = require("../controllers/Users/LogIn");
//Productos
const getProdu = require("../controllers/Productos/getProductos");
const postProdu = require("../controllers/Productos/postProductos");
const deleteProdu = require("../controllers/Productos/deleteProductos");
const putProdu = require("../controllers/Productos/putProductos");
const comments = require("../controllers/Productos/comment");
//Carrito
const postCarrito = require("../controllers/Carrito/postCarrito");
const deleteCarrito = require("../controllers/Carrito/deleteCarrito");
const getCarritos = require("../controllers/Carrito/getCarritos");
const putCarrito = require("../controllers/Carrito/putCarrito");

//MercadoPago
const makePayment = require("../controllers/PasarelaDePagos/makePayment");

const router = Router();

//*Productos
router.get("/getproductos", getProdu.getProductosON);// endpoint para productos activos
router.get("/getproductosmv", getProdu.getProductosSeleccionados);
router.get("/getproductos/all", getProdu.getProductos); 
router.get("/getproductos/:id", getProdu.getProductosById);
router.get("/getproductosByName", getProdu.getProductosByName);
router.get("/getproductosFilter", getProdu.getProductosFilter);
router.post("/postcomment", comments.createComment);
router.put("/deletecomment", comments.deleteComment);

//admin
router.post("/postproductos", postProdu.postProductos);

router.put("/updateproductos/:id", putProdu.updateProductos);

//esta ruta corresponde a una ruta de borrado lógico, a través del estado: activo o inactivo.
router.put("/updatestateproductos/:id", putProdu.borradoLogicoProductos);
//esta ruta corresponde a la ruta para borrado definitivo.
router.delete("/deleteproductos/:id", deleteProdu.deleteProductos);

//*Usuario/Cliente
// Obtiene todos los clientes
router.get("/getuser", getUser.getAllUsers); //endpoint para todos los clientes
// obtiene los datos desde el google
router.post("/signupgoogle", postUser.signUpUserGoogle);
router.post("/signup", postUser.signUpUser);
router.get("/login", login.login);
router.get("/loginGoogle", login.loginGoogle); // nuevo endpoint para el login desde google

// Crea el usuario sin google / complemento del google
router.put("/updateuser", putUser.updateUser);
//
router.put("/updateuser/info", putUser.updateUser);

//borrado definitivo a través de email
router.delete("/deleteuser", deleteUser.deleteUser);
//desactivar cuenta temporalmente / implementación de borrado lógico.
router.put("/updatestateuser", putUser.updateStateUser);
router.put("/adminaccess", putUser.updateAdminUser);

//cambio de contraseña
router.post("/recovery", login.mailPassword);
router.post("/change-password", login.cambioPassword);

//*Carrito
router.post("/createOrden", postCarrito.postOrden);
router.post("/getCarritosPrueba", postCarrito.postOrden);
router.post("/getOrden/byuserid", getCarritos.getCarritosByUserId);
router.get("/getOrdenbyid", getCarritos.getCarritosById)


router.put("/stateOrden", putCarrito.updateStateOrden);

router.get("/getOrden", getCarritos.getCarritos);
router.delete("/deleteOrden", deleteCarrito.deleteCarrito);

//*MercadoPago
router.post("/create_preference", makePayment);

// crear categorias
const createCategory = require("../controllers/Productos/createCategorias");

router.post("/createCategory", createCategory.createCategory);

module.exports = router;
