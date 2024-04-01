import { Link } from "react-router-dom";
import { useState } from "react";
import { useSelector } from "react-redux";
import axios from "axios";
import { initMercadoPago, Wallet } from "@mercadopago/sdk-react";
import styles from "./Confirmacion.module.scss";

const Confirmacion = ({ userBuyData }) => {
  const cart = useSelector((state) => state.cart);

  //Mercadopago
  const [preferenceId, setPreferenceId] = useState(null);
  initMercadoPago("TEST-634691e0-a670-4492-adcc-21f03ac697bc", {
    locale: "es-AR",
  });

  const createPreference = async () => {
    try {
      const response = await axios.post("/create_preference", { cart });
      const { id } = response.data;
      return id;
    } catch (error) {
      console.log(error.message);
    }
  };

  const handleBuy = async () => {
    const id = await createPreference();
    if (id) {
      setPreferenceId(id);
    }
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-xl font-semibold mb-4">CONFIRMA TUS DATOS</h2>

      <div className="mb-8">
        <h2 className="text-lg font-semibold mb-2">Tus Datos</h2>
        <span className="block mb-2">
          <span className="text-lg font-bold mx-2">Nombre:</span>
          {userBuyData.nombre} {userBuyData.apellido}
        </span>
        <span className="block mb-2">
          <span className="text-lg font-bold mx-2">Email:</span>
          {userBuyData.email}</span>
        <span className="block mb-2">
          <span className="text-lg font-bold mx-2">DNI:</span>
          {userBuyData.dni}</span>
        <span className="block mb-2">
          <span className="text-lg font-bold mx-2">Telefono:</span>
          {userBuyData.telefono}</span>
      </div>

      <div className="mb-8">
        <h2 className="text-lg font-semibold mb-2">Datos de Envío</h2>
        <span className="block mb-2">
          <span className="text-lg font-bold mx-2">Dirección:</span>
          {userBuyData.direccion}</span>
        <span className="block mb-2">
          <span className="text-lg font-bold mx-2">Localidad:</span>
          {userBuyData.localidad}</span>
        <span className="block mb-2">
          <span className="text-lg font-bold mx-2">Código Postal:</span>
          {userBuyData.codigoPostal}</span>
        <span className="block mb-2">
          <span className="text-lg font-bold mx-2">Provincia:</span>
          {userBuyData.provincia}</span>
        <span className="block mb-2">
          <span className="text-lg font-bold mx-2">Método de envío:</span>
          {userBuyData.metodoDeEnvio}</span>
      </div>

      <button
        className="bg-gray-800 text-white py-2 px-4 rounded-md hover:bg-gray-700 mt-4 focus:outline-none"
        onClick={handleBuy}
      >
        Pagar
      </button>

      {preferenceId && <Wallet initialization={{ preferenceId: preferenceId }} />}
    </div>

  );
};

export default Confirmacion;
