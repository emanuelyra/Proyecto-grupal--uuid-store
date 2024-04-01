import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";

import styles from "./DetallesDeCompra.module.scss";

import { getDetalleDeCompra } from "../../redux/actions";

const DetallesDeCompra = () => {
  const { idDeCompra } = useParams();
  const dispatch = useDispatch();

  const compra = useSelector((state) => state.compraActual);

  useEffect(() => {
    dispatch(getDetalleDeCompra(idDeCompra));
  }, []);

  return (
    <div className={styles.container}>
      {Object.keys(compra).length > 0 ? (
        <div className={styles.data}>
          <div className={styles.datos}>
            <h2 className={styles.titulo}>Datos de la compra:</h2>
            <h2>ID de tu compra: {compra.idDeCompra}</h2>

            <div>
              <h2>Datos del usuario:</h2>
              <ul>
                {Object.entries(compra.userData).map((dato, index) => (
                  <li key={index}> {`${dato[0]}: ${dato[1]}`} </li>
                ))}
              </ul>
            </div>

            <div>
              <h2>Datos de envio:</h2>
              <ul>
                {Object.entries(compra.datosDeEnvio).map((dato, index) => (
                  <li key={index}> {`${dato[0]}: ${dato[1]}`} </li>
                ))}
              </ul>
            </div>
            <h2>Estado de tu compra: {compra.estadoDelPedido}</h2>
          </div>

          <div className={styles.productos}>
            <h2 className={styles.titulo}>Productos:</h2>
            <div className={styles.listaDeProductos}>
              {compra.productos.map((produ, index) => {
                return (
                  <div className={styles.card} key={index}>
                    {console.log(produ)}
                    <img
                      src={produ.imagen && produ.imagen[0]}
                      alt={produ.modelo}
                    />
                    <span>
                      {produ.nombre} {produ.modelo}
                    </span>
                    <span> Marca: {produ.marca}</span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      ) : (
        <div> Cargando... </div>
      )}
    </div>
  );
};

export default DetallesDeCompra;
