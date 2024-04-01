import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getOrdenes, putStateOrdens } from "../../../redux/actions";

import "./OrdenCompra.css";

function OrdenCompra() {
  const [selectedEstado, setSelectedEstado] = useState("pendiente");
  const orders = useSelector((state) => state.allOrdenes);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getOrdenes());
  }, []);

  const handleEstadoChange = async (orderId, email, newEstado) => {
    try {
      await dispatch(putStateOrdens(orderId, email, newEstado));
      console.log("Orden ID:", orderId, "Nuevo Estado:", newEstado);
      window.location.reload();
    } catch (error) {
      console.error("Error al actualizar el estado de la orden:", error);
    }
  };

  return (
    <div>
      <div className="contenedor-table">
        <table>
          <thead>
            <tr>
              <th>N° de Orden</th>
              <th>Productos (haz click en el nombre para ver el producto.)</th>
              <th>Usuario</th>
              <th>Estado</th>
              <th>Fecha y hora</th>
              <th>Acción</th>
            </tr>
          </thead>

          <tbody>
            {orders.map((order) => (
              <tr key={order.idDeCompra}>
                <td>{order.idDeCompra}</td>
                <td>
                  {order.productos.map((producto) => (
                    <div key={producto.id}>
                      <a href={`/detail/${producto.id}`}>VER :<br />
                      {producto.nombre}</a> <br />
                      - Talle: {producto.talle} <br />
                      - Precio: ${producto.precio}<br /><br /><br />
                    </div>
                    
                  ))}
                </td>
                <td>
                  {order.userData.nombre} {order.userData.apellido} <br />
                  DNI: {order.userData.dni} <br />
                  Teléfono: {order.userData.telefono} <br />
                  Email: {order.userData.email}
                </td>
                <td>
                  <select
                    value={order.estadoDelPedido}
                    onChange={(e) => handleEstadoChange(order.idDeCompra, order.userData.email, e.target.value)}
                  >
                    <option value="pendiente">Pendiente</option>
                    <option value="despachado">Despachado</option>
                    <option value="cancelado">Cancelado</option>
                  </select>
                </td>
                <td>
                    {order.createdAt}
                </td>
                <td>
                  <button>Eliminar</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default OrdenCompra;