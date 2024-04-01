import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import axios from "axios";

function MisCompras() {
    const user = useSelector((state) => state.actualUser); 
    const [compras, setCompras] = useState([]);

    useEffect(() => {
        console.log(user)
        if (user && user.id) {
            obtenerCarritos(user.id);
        }
    }, [user]); 

    const obtenerCarritos = (userId) => {
    console.log({id: userId})
    axios.post("/getOrden/byuserid", { id: userId }) // siempre que sea post, enviar como objeto el id
    
        .then(response => {
            setCompras(response.data);
        })
        .catch(error => {
            console.error("Error al obtener los carritos:", error);
        });
}
console.log(compras)
    return (
        <div>
            <h1>Revisa los detalles de todas tus compras!</h1>
            <br />
        <hr style={{ borderBottom: "1px solid black" }} />
        <hr style={{ borderBottom: "1px solid black" }} />
        <hr style={{ borderBottom: "1px solid black" }} />


            <ul>
            {compras.map(compra => (
    <li key={compra.idDeCompra}>
        <br />
        <p>ID: {compra.idDeCompra}</p>
        <p>Estado de compra: {compra.estadoDelPedido}</p>
        <p>Fecha: {new Date(compra.createdAt).toLocaleString([], { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit' })}</p>
        <ul>
            {compra.productos.map(producto => (
                <li key={producto.id}>
                    <p>Nombre: {producto.nombre}</p>
                    <p>Precio: {producto.precio}</p>
                </li>
            ))}
            <br />
        <p>Total: {compra.total}</p>
        <br />
        <hr style={{ borderBottom: "1px solid black" }} />
        </ul>
    </li>
))
}

            </ul>
        </div>
    );
}

export default MisCompras;

