import { combineReducers } from "redux";
import {
  CREATE_CATEGORY,
  GET_PRODUCTOS,
  GET_NAME,
  GET_DETAIL,
  CLEAR_DETAIL,
  POST_PRODUCTO,
  LOGIN,
  GET_ORDER,
  FILTER_MARCA,
  FILTER_SEARCH,
  FILTER_MODELO,
  SIGNUP,
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
  CLEAR_CART,
  CLEAR_COMPRA,
  GET_DETALLE_DE_COMPRA,
  CLEAR_DETALLE_DE_COMPRA,
  DELETE_PRODUCTO,
  UPDATE_PRODUCTO,
  ENVIAR_MAIL_PASSWORD,
  CAMBIAR_PASSWORD,
  POST_COMENTARIO,
  DELETE_COMENTARIO,
  UPDATE_USER,
  UPDATE_CART,
} from "./action-types.js";

const initialState = {
  categoryReducer: [],
  allProductosHome: [],
  allProductosDetail: [],
  allProductos: [],
  allProductosAux: [],
  allUsers: [],
  detail: {},
  productCreated: {},
  actualUser: {},
  messageToUser: "",
  cart: [],
  compraActual: {},
  allOrdenes: [],
  token: {},
};

const categoryReducer = (state = [], action) => {
  switch (action.type) {
    case CREATE_CATEGORY:
      // Agrega la nueva categoría al estado
      return [
        ...state,
        action.payload, // Supongamos que payload contiene los datos de la categoría creada
      ];
    default:
      return state;
  }
};
const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_PRODUCTOS:
      return {
        ...state,
        allProductosHome: payload,
        allProductosDetail: payload,
        allProductos: payload,
        allProductosAux: payload,
      };

    case GET_USERS:
      return {
        ...state,
        allUsers: payload,
      };

    case DELETE_USERS:
      const updatedUsers = state.allUsers.filter(
        (user) => user.email !== payload
      );
      return {
        ...state,
        allUsers: updatedUsers,
      };

    case UPDATE_USER:
      console.log(payload.usuario);
      return {
        ...state,
        actualUser: payload.usuario,
      };

    case GET_NAME:
      return {
        ...state,
        allProductos: payload,
      };

    case GET_DETAIL:
      return {
        ...state,
        detail: payload,
      };

    case CLEAR_DETAIL:
      return {
        ...state,
        detail: payload,
      };

    case POST_PRODUCTO:
      return {
        ...state,
        productCreated: payload,
        messageToUser: "Producto creado correctamente!",
      };

    case FILTER_MARCA:
      const copyCont = [...state.allProductosAux];
      if (payload === "All") {
        return {
          ...state,
          allProductos: copyCont,
        };
      }

      let filteredMarca = copyCont.filter(function (filtroCont) {
        return filtroCont.marca === payload;
      });

      return {
        ...state,
        allProductos: filteredMarca,
      };

    case FILTER_SEARCH:
      const filteredProductos = state.allProductosAux.filter((producto) => {
        // Aplica el filtro en función del término de búsqueda
        return producto.nombre.toLowerCase().includes(payload.toLowerCase());
      });
      return {
        ...state,
        allProductos: filteredProductos,
      };

    case FILTER_MODELO:
      const copyCont3 = [...state.allProductosAux];
      if (payload === "All") {
        return {
          ...state,
          allProductos: copyCont3,
        };
      }

      let filteredModelo = copyCont3.filter(function (filtroCont) {
        return filtroCont.modelo === payload;
      });

      return {
        ...state,
        allProductos: filteredModelo,
      };

    case GET_ORDER:
      let ordenAlf = [...state.allProductos];

      return {
        ...state,
        allProductos: ordenAlf.sort((a, b) => {
          return payload === "As" ? a.precio - b.precio : b.precio - a.precio;
        }),
      };

    case LOGIN:
      return {
        ...state,
        actualUser: payload,
        messageToUser: "Sesión iniciada correctamente!",
      };

    case SIGNUP:
      return {
        ...state,
        actualUser: payload,
        messageToUser: "Usuario creado correctamente!",
      };

    case LOGOUT:
      return {
        ...state,
        actualUser: payload,
      };

    case MESSAGE_TO_USER:
      return {
        ...state,
        messageToUser: payload,
      };

    case CLEAR_MESSAGE:
      return {
        ...state,
        messageToUser: payload,
      };

    case AUTO_LOGIN:
      return {
        ...state,
        actualUser: payload,
      };

    case LOG_IN_GOOGLE:
      return {
        ...state,
        actualUser: payload,
        messageToUser: "Sesión iniciada correctamente!",
      };

    case SIGN_UP_GOOGLE:
      return {
        ...state,
        actualUser: payload,
        messageToUser: "Usuario creado correctamente!",
      };

    case ADD_TO_CART:
      return {
        ...state,
        cart: [...state.cart, payload],
        messageToUser: "Producto agregado al carrito!",
      };

    case UPDATE_CART:
     
      return {
        ...state,
        cart: payload,
        messageToUser: "Se agrego otro zapato a tu carrito!",
      };


    case REMOVE_TO_CART:
      const cartFilter = state.cart.filter((item) => item.uuid !== payload);
      return {
        ...state,
        cart: cartFilter,
      };

    case AUTO_SET_CARRO:
      return {
        ...state,
        cart: [...payload],
      };

    case CREATE_TICKET:
      return {
        ...state,
        compraActual: payload,
      };

    case CLEAR_COMPRA:
      return {
        ...state,
        compraActual: payload,
      };

    case GET_ORDENES:
      return {
        ...state,
        allOrdenes: payload,
      };

    case DELETE_PRODUCTO:
      return {
        ...state,
        allProductos: payload,
        //allProductos: state.allProductos.filter(
        //(producto) => producto.id !== payload
        //),
      };

    case CLEAR_CART:
      return {
        ...state,
        cart: payload,
      };

    case GET_DETALLE_DE_COMPRA:
      return {
        ...state,
        compraActual: payload,
      };

    case CLEAR_DETALLE_DE_COMPRA:
      return {
        ...state,
        compraActual: payload,
      };

    case ENVIAR_MAIL_PASSWORD:
      return {
        ...state,
        token: payload,
      };

    case CAMBIAR_PASSWORD:
      return {
        ...state,
        messageToUser: payload,
      };

    case POST_COMENTARIO:
      return {
        ...state,
        messageToUser: "Comentario agregado con éxito!",
        detail: {
          ...state.detail,
          puntuaciones: [...state.detail.puntuaciones, payload],
        },
      };

    case DELETE_COMENTARIO:
      return {
        ...state,
        messageToUser: payload,
        detail: {
          ...state.detail,
          puntuaciones: payload,
        },
      };

    case UPDATE_PRODUCTO:
      return {
        ...state,
        messageToUser: payload,
      };

    default:
      return state;
  }
};

export default reducer;
