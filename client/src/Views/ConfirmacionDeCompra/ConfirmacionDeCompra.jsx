import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import styles from "./ConfirmacionDeCompra.module.scss";

import UserData from "./UserData/UserData";
import DireccionDeEnvio from "./DireccionDeEnvio/DireccionDeEnvio";
import MetodoDeEnvio from "./MetodoDeEnvio/MetodoDeEnvio";
import Confirmacion from "./Confirmacion/Confirmacion";

const ConfirmacionDeCompra = () => {
  const carritoJSON = window.localStorage.getItem("cart");
  const carrito = JSON.parse(carritoJSON);

  const userJSON = window.localStorage.getItem("loggedUser");

  const navigate = useNavigate();

  const [totalCarrito, setTotalCarrito] = useState(0);
  const [view, setView] = useState(1);
  const [userBuyData, setUserBuyData] = useState({
    nombre: "",
    apellido: "",
    email: "",
    dni: "",
    telefono: "",
    provincia: "",
    localidad: "",
    direccion: "",
    codigoPostal: "",
    metodoDeEnvio: "",
  });

  const handleView = (option) => {
    setView(option);
  };

  const calcularTotal = () => {
    let total = 0;
    carrito.forEach((item) => {
      total += item.precio * item.cantidad;
    });
    return total;
  };

  useEffect(() => {
    if (!userJSON || carrito.length === 0) navigate("/");
    window.localStorage.setItem("actualForm", JSON.stringify(userBuyData));

    setTotalCarrito(calcularTotal());
  }, []);

  return (
    <section className={styles.container}>
      <aside className={styles.carrito}>
        <h2 className={styles.header}>Tu compra</h2>
        <div className={styles.productos}>
          {carrito.map((produ, index) => {
            return (
              <div className={styles.producto} key={index}>
                <div>
                  <h2>
                    {produ.nombre} {produ.modelo} {produ.marca}
                  </h2>
                  <h2><span className="font-bold">Precio:</span> ${produ.precio}</h2>
                  <h2><span className="font-bold">Talle:</span> {produ.talle}</h2>
                  <h2><span className="font-bold">Cantidad:</span> {produ.cantidad}</h2>
                </div>
                <hr />
              </div>
            );
          })}
        </div>

        <div className={styles.total}>Total: ${totalCarrito}</div>
      </aside>
      <div className={styles.data}>
        <div className={styles.index}>
          <h2>CONFIRMACION DE LA COMPRA</h2>
          <div className={styles.secciones}>
            <ul>
              <li
                className={view > 1 ? styles.disponible : styles.noDisponible}
                onClick={() => {
                  handleView(1);
                }}
              >
                <strong>1.</strong> Tus datos {">"}
              </li>

              <li
                className={view > 2 ? styles.disponible : styles.noDisponible}
                onClick={() => {
                  view > 2 && handleView(2);
                }}
              >
                <strong>2.</strong> Dirección de envío {">"}
              </li>

              <li
                className={view > 3 ? styles.disponible : styles.noDisponible}
                onClick={() => {
                  view > 3 && handleView(3);
                }}
              >
                <strong>3.</strong> Método de envío {">"}
              </li>

              <li
                className={view > 4 ? styles.disponible : styles.noDisponible}
                onClick={() => {
                  view > 4 && handleView(4);
                }}
              >
                <strong>4.</strong> Confirmación de compra
              </li>
            </ul>
          </div>
        </div>

        <article className={styles.formsContainer}>
          {view === 1 && (
            <UserData
              userBuyData={userBuyData}
              setUserBuyData={setUserBuyData}
              setView={setView}
            />
          )}
          {view === 2 && (
            <DireccionDeEnvio
              userBuyData={userBuyData}
              setUserBuyData={setUserBuyData}
              setView={setView}
            />
          )}
          {view === 3 && (
            <MetodoDeEnvio
              userBuyData={userBuyData}
              setUserBuyData={setUserBuyData}
              setView={setView}
            />
          )}
          {view === 4 && <Confirmacion userBuyData={userBuyData} />}
        </article>
      </div>
    </section>
  );
};

export default ConfirmacionDeCompra;
