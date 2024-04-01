import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";

import styles from "./CompraConfirmada.module.scss";

import {
  createTicket,
  clearCart,
  clearDetalleDeCompra,
} from "../../redux/actions";

const CompraConfirmada = () => {
  const [infoDeCompra, setInfoDeCompra] = useState({});
  const compra = useSelector((state) => state.compraActual);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    if (Object.keys(infoDeCompra).length == 0) {
      const formUserJSON = window.localStorage.getItem("actualForm");
      const formUser = JSON.parse(formUserJSON);

      const cartJSON = window.localStorage.getItem("cart");
      const cart = JSON.parse(cartJSON);

      const userJSON = window.localStorage.getItem("loggedUser");
      const user = JSON.parse(userJSON);

      if (!formUserJSON || !cartJSON || !userJSON) navigate("/");

      setInfoDeCompra({
        emailStorage: user.email,
        ...formUser,
        productos: cart,
      });
    }
  }, []);

  useEffect(() => {
    if (infoDeCompra) {
      dispatch(createTicket(infoDeCompra));
    }

    return () => {
      if (Object.keys(infoDeCompra).length > 0) {
        dispatch(clearCart());
        dispatch(clearDetalleDeCompra());
        window.localStorage.setItem("cart", JSON.stringify([]));
        window.localStorage.removeItem("actualForm");
      }
    };
  }, [infoDeCompra]);

  return (
    <section className={styles.container}>
      {Object.keys(compra).length !== 0 ? (
        <div className={styles.confirmada}>
          <h2 className={styles.titulo}>Muchas gracias por tu compra!</h2>
          <h2>id de tu compra: {compra.idDeCompra}</h2>

          <div className={styles.compra}>
            <h2>Compraste:</h2>
            <ul className={styles.productos}>
              {compra.productos.map((produ, index) => (
                <li key={index}>{`${produ.nombre} ${produ.modelo}`}</li>
              ))}
            </ul>
          </div>

          <h2>Total: ${compra.total}</h2>

          <h2>
            Podés revisar el estado de tu compra en el siguiente{" "}
            <Link className={styles.link} to={`/success/${compra.idDeCompra}`}>
              Link
            </Link>
          </h2>
        </div>
      ) : (
        <div>Cargando...</div>
      )}
    </section>
  );
};

export default CompraConfirmada;
