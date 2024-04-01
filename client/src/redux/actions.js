import {
  GET_PRODUCTOS,
  GET_DETAIL,
  CLEAR_DETAIL,
  GET_NAME,
  POST_PRODUCTO,
  LOGIN,
  SIGNUP,
  FILTER_MARCA,
  FILTER_SEARCH,
  FILTER_MODELO,
  GET_ORDER,
  LOGOUT,
  MESSAGE_TO_USER,
  CLEAR_MESSAGE,
  AUTO_LOGIN,
  ADD_TO_CART,
  REMOVE_TO_CART,
  LOG_IN_GOOGLE,
  SIGN_UP_GOOGLE,
  AUTO_SET_CARRO,
  GET_USERS,
  CREATE_TICKET,
  GET_ORDENES,
  DELETE_USERS,
  ESTADO_ORDEN,
  CLEAR_CART,
  CLEAR_COMPRA,
  GET_DETALLE_DE_COMPRA,
  CLEAR_DETALLE_DE_COMPRA,
  DELETE_PRODUCTO,
  UPDATE_PRODUCTO,
  ENVIAR_MAIL_PASSWORD,
  CAMBIAR_PASSWORD,
  POST_COMENTARIO,
  ADMIN_ACCESS,
  DELETE_COMENTARIO,
  UPDATE_USER,
  UPDATE_CART,
} from "./action-types.js";

import axios from "axios";

// const BACK_URL = import.meta.env.VITE_VERCEL_BACKURL;

axios.defaults.baseURL = "https://uuid-store-production.up.railway.app";
// axios.defaults.baseURL = "http://localhost:3001";

// TRAER TODOS LOS PRODUCTOS
export const getProductos = () => {
  try {
    return async function (dispatch) {
      const response = await axios(`/getproductos`);
      return dispatch({
        type: GET_PRODUCTOS,
        payload: response.data,
      });
    };
  } catch (error) {
    console.log(error);
  }
};

export const getProductosAll = () => {
  try {
    return async function (dispatch) {
      const response = await axios(`/getproductos/all`);
      return dispatch({
        type: GET_PRODUCTOS,
        payload: response.data,
      });
    };
  } catch (error) {
    console.log(error);
  }
};

export const getName = (nombre) => {
  try {
    return async function (dispatch) {
      const response = await axios(`/getproductosByName/?nombre=${nombre}`);
      return dispatch({
        type: GET_NAME,
        payload: response.data,
      });
    };
  } catch (error) {
    console.log(error);
  }
};

// TRAER EL DETAIL DE UN PRODUCTO
export const getDetail = (id) => {
  return async (dispatch) => {
    try {
      const response = await axios.get(`/getproductos/${id}`);
      return dispatch({
        type: GET_DETAIL,
        payload: response.data,
      });
    } catch (error) {
      console.error("Error fetching product detail:", error);
    }
  };
};

export const clearDetail = () => {
  return {
    type: CLEAR_DETAIL,
    payload: {},
  };
};

// CREAR UN PRODUCTO
export const postProducto = (form) => {
  return async (dispatch) => {
    try {
      const response = await axios.post(`/postproductos`, form);
      return dispatch({
        type: POST_PRODUCTO,
        payload: response.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
};

export const filterMarca = (marca) => {
  return {
    type: FILTER_MARCA,
    payload: marca,
  };
};

export const filterSearch = (searchString) => {
  return {
    type: "FILTER_SEARCH",
    payload: searchString,
  };
};

export const filterModelo = (modelo) => {
  return {
    type: FILTER_MODELO,
    payload: modelo,
  };
};

export const getOrder = (order) => {
  return {
    type: GET_ORDER,
    payload: order,
  };
};

// INICIAR SESION
export const logIn = ({ email, password }) => {
  return async (dispatch) => {
    try {
      const response = await axios.get(
        `/login?email=${email}&password=${password}`
      );
      return dispatch({
        type: LOGIN,
        payload: response.data,
      });
    } catch (error) {
      return dispatch({
        type: MESSAGE_TO_USER,
        payload: error.response.data,
      });
    }
  };
};

// REGISTRARSE CON GOOGLE

export const signUpWhitGoogle = (googleData) => {
  return async (dispatch) => {
    try {
      const response = await axios.post(`/signupgoogle`, googleData);
      return dispatch({
        type: SIGN_UP_GOOGLE,
        payload: response.data,
      });
    } catch (error) {
      return dispatch({
        type: MESSAGE_TO_USER,
        payload: error.response.data,
      });
    }
  };
};

// INICIAR SESION CON GOOGLE
export const logInWhitGoogle = ({ email }) => {
  return async (dispatch) => {
    try {
      const response = await axios.get(`/loginGoogle?email=${email}`);
      return dispatch({
        type: LOG_IN_GOOGLE,
        payload: response.data,
      });
    } catch (error) {
      console.log(error);
      return dispatch({
        type: MESSAGE_TO_USER,
        payload: error.response.data,
      });
    }
  };
};

// REGISTRO
export const signUp = (form) => {
  return async (dispatch) => {
    try {
      const response = await axios.post(`/signup`, form);
      return dispatch({
        type: SIGNUP,
        payload: response.data,
      });
    } catch (error) {
      return dispatch({
        type: MESSAGE_TO_USER,
        payload: error.response.data,
      });
    }
  };
};

export const logOut = () => {
  return {
    type: LOGOUT,
    payload: {},
  };
};

export const clearMessage = () => {
  return {
    type: CLEAR_MESSAGE,
    payload: "",
  };
};

export const autoLogin = (user) => {
  return {
    type: AUTO_LOGIN,
    payload: user,
  };
};

//BOTON DE DETAIL

export const addToCart = (product, cart) => {
 
  return {
    type: ADD_TO_CART,
    payload: product,
  };
};

export const updateCart = (updatedCart) => {
  
  return {
    type: UPDATE_CART,
    payload: updatedCart,
  };
};


export const removeToCart = (productIndex) => {
  return {
    type: REMOVE_TO_CART,
    payload: productIndex,
  };
};

export const autoSetCarro = (carro) => {
  return {
    type: AUTO_SET_CARRO,
    payload: carro,
  };
};

export const clearCart = () => {
  return {
    type: CLEAR_CART,
    payload: [],
  };
};

export const allUsers = () => {
  try {
    return async function (dispatch) {
      const response = await axios(`/getuser`);
      console.log();
      return dispatch({
        type: GET_USERS,
        payload: response.data,
      });
    };
  } catch (error) {
    console.log(error);
  }
};

// DELETE USER
export const deleteUser = (email) => {
  return async function (dispatch) {
    try {
      const response = await axios.delete("/deleteuser", { data: { email } });
      return dispatch({
        type: DELETE_USERS,
        payload: email,
      });
    } catch (error) {
      console.log(error);
    }
  };
};

export const accessAdminUser = (email) => {
  return async function (dispatch) {
    try {
      const response = await axios.put("/adminaccess", { email });
      return dispatch({
        type: ADMIN_ACCESS,
        payload: email,
      });
    } catch (error) {
      console.error("Error al acceder al usuario administrador:", error);
    }
  };
};

// CREAR TICKET DE COMPRA

export const createTicket = (data) => {
  return async (dispatch) => {
    try {
      const response = await axios.post(`/createOrden`, data);
      return dispatch({
        type: CREATE_TICKET,
        payload: response.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
};

export const clearCompra = () => {
  return {
    type: CLEAR_COMPRA,
    payload: {},
  };
};

export const getOrdenes = () => {
  try {
    return async function (dispatch) {
      const response = await axios.get(`/getOrden`);
      return dispatch({
        type: GET_ORDENES,
        payload: response.data,
      });
    };
  } catch (error) {
    console.log(error);
  }
};

export const putStateOrdens = (idDeCompra, email, ordenState) => {
  try {
    return async function (dispatch) {
      const response = await axios.put("/stateOrden", {
        idDeCompra,
        email,
        estadoDelPedido: ordenState,
      });
      return dispatch({
        type: ESTADO_ORDEN,
        payload: response.data,
      });
    };
  } catch (error) {
    console.log(error);
  }
};

export const deleteProducto = (id) => {
  return async (dispatch) => {
    try {
      const response = await axios.delete(`/deleteproductos/${id}`);
      return dispatch({
        type: DELETE_PRODUCTO,
        payload: response.data,
      });
    } catch (error) {
      console.error(" Error delete product :", error);
    }
  };
};

export const updateProducto = (formData) => {
  return async (dispatch) => {
    try {
      const response = await axios.put(
        `/updateproductos/${formData.id}`,
        formData
      );

      dispatch({
        type: UPDATE_PRODUCTO,
        payload: response.data, // Puedes ajustar esto según la respuesta de tu API
      });
    } catch (error) {
      // Manejo de errores aquí
      console.error("Error al actualizar el producto:", error);
    }
  };
};

export const getDetalleDeCompra = (id) => {
  return async (dispatch) => {
    try {
      const response = await axios.get(`/getOrdenbyid?idDeCompra=${id}`);
      return dispatch({
        type: GET_DETALLE_DE_COMPRA,
        payload: response.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
};

export const clearDetalleDeCompra = () => {
  return {
    type: CLEAR_DETALLE_DE_COMPRA,
    payload: {},
  };
};

//CAMBIO DE PASSWORD

export const enviarMailPassword = (email) => {
  try {
    return async function (dispatch) {
      const response = await axios.post("/recovery", { email });
      return dispatch({
        type: ENVIAR_MAIL_PASSWORD,
        payload: response.data,
      });
    };
  } catch (error) {
    console.log(error.message);
  }
};

export const cambiarPassword = (token, newPassword) => {
  try {
    return async function (dispatch) {
      const response = await axios.post(`/change-password`, {
        token,
        newPassword,
      });
      return dispatch({
        type: CAMBIAR_PASSWORD,
        payload: response.data,
      });
    };
  } catch (error) {
    console.log(error);
  }
};
// crear categoria
export const createCategory = (categoryName) => {
  return async (dispatch) => {
    try {
      const response = await axios.post("/createCategory", {
        name: categoryName,
      });
      // Aquí podrías hacer algo con la respuesta si es necesario
      console.log("Respuesta de crear categoría:", response);
    } catch (error) {
      console.error("Error al crear la categoría:", error);
      // Puedes añadir alguna lógica para manejar el error si es necesario
    }
  };
};

// export const CREATE_CATEGORY = "CREATE_CATEGORY";

// export const createCategory = (categoryName) => {
//   return async (dispatch) => {
//     try {
//       const response = await axios.post('/createCategory', { name: categoryName });

//     } catch (error) {
//       console.error('Error al crear la categoría:', error);

//     }
//   };
// };

// CREAR UN COMENTARIO
export const postComentario = ({ id, comment }) => {
  return async (dispatch) => {
    try {
      const response = await axios.post(`/postcomment?id=${id}`, {
        comment,
      });

      return dispatch({
        type: POST_COMENTARIO,
        payload: response.data,
      });
    } catch (error) {
      return dispatch({
        type: MESSAGE_TO_USER,
        payload: error.message,
      });
    }
  };
};

// CREAR UN COMENTARIO
export const deleteComentario = ({ id, uuid }) => {
  return async (dispatch) => {
    try {
      const response = await axios.put(`/deletecomment?id=${id}&uuid=${uuid}`);

      return dispatch({
        type: DELETE_COMENTARIO,
        payload: response.data,
      });
    } catch (error) {
      return dispatch({
        type: MESSAGE_TO_USER,
        payload: error.message,
      });
    }
  };
};

export function putUser(user) {
  console.log(user);
  return async (dispatch) => {
    try {
      const response = await axios.put("/updateuser", user);
      return dispatch({
        type: UPDATE_USER,
        payload: response.data,
      });
    } catch (error) {
      console.error("Error al actualizar el usuario:", error);
    }
  };
}
