import styles from "./MenuCarro.module.scss";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeToCart } from "../../../redux/actions";
import RedirectButton from "./RedirectButton/RedirectButton";
import { autoSetCarro } from "../../../redux/actions";
import { v4 as uuidv4 } from "uuid";
import { IoTrash } from "react-icons/io5";

const MenuCarro = ({ mostrarCarro, mostrarUser }) => {
  // const cartJSON = window.localStorage.getItem("cart");
  // const cart = JSON.parse(cartJSON);

  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  useEffect(() => {
    // if (cartJSON) setActualCart(cart);
    window.localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart.length]);

  const quitarProducto = (item) => {
    dispatch(removeToCart(item));
  };

  const incrementarCantidad = (produ) => {
    if (produ.cantidad < produ.stock[produ.talle]) {
      cart.forEach((actualProdu) => {
        if (produ.uuid === actualProdu.uuid) {
          actualProdu.cantidad = actualProdu.cantidad + 1;
        }
      });

      dispatch(autoSetCarro(cart));
      // window.localStorage.setItem("cart", JSON.stringify(cart));
    }
  };

  const decrementarCantidad = (produ) => {
    if (produ.cantidad > 1) {
      cart.forEach((actualProdu) => {
        if (produ.uuid === actualProdu.uuid) {
          actualProdu.cantidad = actualProdu.cantidad - 1;
        }
      });

      dispatch(autoSetCarro(cart));
      // window.localStorage.setItem("cart", JSON.stringify(cart));
    }
  };

  const calcularTotal = () => {
    let total = 0;
    cart.forEach((item) => {
      total += item.precio * item.cantidad;
    });
    return total;
  };

  return (
    <div className={styles.menuContainer}>
      <div
        className={`${styles.fondo} fixed inset-0 bg-black opacity-100`}
        onClick={() => mostrarCarro(false)}
      ></div>
      <div
        className={`${styles.carro} absolute inset-y-0 right-0 max-w-full flex`}
      >
        <div className="w-full bg-white p-3 " style={{ height: "85%" }}>
          <div className="font-bold text-red-600 text-xl justify-between flex mb-4">
            <span>MI COMPRA</span>
          </div>
          <div className={styles.productos}>
            {cart.map((produ, index) => (
              <div
                key={index}
                className={`${styles.cartItem} flex items-center justify-between border-b py-2`}
              >
                <img
                  src={produ.imagen[0]}
                  alt={produ.nombre}
                  className="w-24  object-cover rounded"
                />
                <div className="flex-1 ml-4">
                  <div className="font-bold text-[#0C78BF]">{produ.nombre}</div>
                  <div className="font-bold text-[#65B44D]">Talle:
                    <span className="font-bold text-[#374151] px-2">
                      {produ.talle}
                    </span>
                  </div>
                  <div className="font-bold text-[#65B44D]">Precio:
                    <span className="font-bold text-[#374151] px-2">
                      $ {produ.precio}
                    </span>
                  </div>
                  <div className="font-bold text-[#65B44D]">
                    Cantidad:
                    <span className="px-1">
                      <button className="px-1 text-[#0C78BF]" onClick={() => decrementarCantidad(produ)}>
                        -
                      </button>
                      <span className="px-1 text-[#374151]">
                        {produ.cantidad}
                      </span>
                      <button className="px-1 text-[#0C78BF]" onClick={() => incrementarCantidad(produ)}>
                        +
                      </button>
                    </span>
                  </div>
                </div>
                <button onClick={() => quitarProducto(produ.uuid)}
                  className="text-red-500 font-bold text-3xl ml-4"
                >
                  <IoTrash />
                </button>
              </div>
            ))}
          </div>
          <br></br>
          <div className="font-bold text-red-600 text-xl mb-4">
            Total: ${calcularTotal()}
          </div>
          <RedirectButton
            mostrarCarro={mostrarCarro}
            mostrarUser={mostrarUser}
          />
          <button
            className=" text-black py-2 rounded-md mt-2"
            onClick={() => mostrarCarro(false)}
          >
            haz click fuera del carro para seguir comprando
          </button>
          <p>
            Las promociones y costo de envío lo verás aplicado en el checkout
          </p>
        </div>
      </div>
    </div>
  );
};

export default MenuCarro;
// // ESTILOS
// import styles from "./MenuCarro.module.scss";

// // HOOKS
// import { useEffect, useState } from "react";
// import { useSelector, useDispatch } from "react-redux";

// // ACTIONS
// import { removeToCart } from "../../../redux/actions";

// // COMPONENTS
// import RedirectButton from "./RedirectButton/RedirectButton";

// import { v4 as uuidv4 } from "uuid";

// const MenuCarro = ({ mostrarCarro, mostrarUser, emailLocalStorage }) => {
//   // Obtener el estado del carrito desde Redux
//   const cart = useSelector((state) => state.cart);
//   const dispatch = useDispatch();

//   const [email, setEmail] = useState("");

//   useEffect(() => {
//     // Obtener el objeto del usuario almacenado en localStorage
//     const storedUser = JSON.parse(window.localStorage.getItem("user"));

//     // Verificar si se encontró el usuario y si tiene la propiedad email
//     if (storedUser && storedUser.email) {
//       // Obtener y establecer el email del usuario
//       setEmail(storedUser.email);
//     }
//   }, []);

//   const quitarProducto = (item) => {
//     dispatch(removeToCart(item));
//   };

//   const calcularTotal = () => {
//     let total = 0;
//     cart.forEach((item) => {
//       total += item.precio;
//     });
//     return total;
//   };

//   useEffect(() => {
//     window.localStorage.setItem("cart", JSON.stringify(cart));
//   }, [cart.length]);

//   return (
//     <div className={styles.menuContainer}>
//       <div
//         className={`${styles.fondo} fixed inset-0 bg-black opacity-100`}
//         onClick={() => mostrarCarro(false)}
//       ></div>

//       <div
//         className={`${styles.carro} absolute inset-y-0 right-0 max-w-full flex`}
//       >
//         <div className="w-auto bg-white p-4">
//           <div className="font-bold text-red-600 text-xl mb-4">CARRITO</div>

//           {cart.map((produ, index) => (
//             <div
//               key={index}
//               className={`${styles.cartItem} flex items-center justify-between border-b py-2`}
//             >
//               <img
//                 src={produ.imagen[0]}
//                 alt={produ.nombre}
//                 className="w-24  object-cover rounded"
//               />
//               <div className="flex-1 ml-4">
//                 <div className="font-semibold">{produ.nombre}</div>
//                 <div>Precio: ${produ.precio}</div>
//                 <div>
//                   Cantidad: {produ.cantidad}
//                   <button onClick={() => incrementarCantidad(produ)}>+</button>
//                   <button onClick={() => decrementarCantidad(produ)}>-</button>
//                 </div>
//               </div>
//               <button
//                 onClick={() => quitarProducto(produ.uuid)}
//                 className="text-red-500 font-bold ml-4"
//               >
//                 Quitar
//               </button>
//             </div>
//           ))}

//           <div className="mt-4 font-bold">Total: ${calcularTotal()}</div>
//           <button
//             className="w-full bg-gray-800 text-white py-2 rounded-md hover:bg-gray-700 mt-2"
//             onClick={() => mostrarCarro(false)}
//           >
//             Cerrar Carrito
//           </button>

//           <RedirectButton
//             mostrarCarro={mostrarCarro}
//             mostrarUser={mostrarUser}
//           />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default MenuCarro;
