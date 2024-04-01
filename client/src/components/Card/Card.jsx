import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import styles from "./Card.module.scss";
import { useEffect, useState } from "react";

function Card({ producto }) {
  const images = [
    "https://images.pexels.com/photos/1464625/pexels-photo-1464625.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://images.pexels.com/photos/1461048/pexels-photo-1461048.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://images.pexels.com/photos/11135667/pexels-photo-11135667.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://images.pexels.com/photos/11135667/pexels-photo-11135667.jpeg?auto=compress&cs=tinysrgb&w=600",
  ];

  const { id, nombre, stock, modelo, precio, imagen, enDescuento } = producto;

  const [hayStock, setHayStock] = useState(undefined);

  useEffect(() => {
    const arrayStock = Object.values(stock);
    if (arrayStock.some((talle) => talle !== 0)) {
      setHayStock(true);
    } else {
      setHayStock(false);
    }
  }, []);

  return (
    <div className="max-w-xs sm:max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl overflow-hidden rounded-lg bg-gray-200 shadow-md duration-300 hover:scale-105 hover:shadow-lg mb-4">
      <Link to={`/detail/${id}`} className="block">
        <div className={styles.imgContainer}>
          <img
            className="h-full w-full object-cover object-center"
            src={imagen ? imagen[0] : images[1]}
            alt="Imagen 2"
          />
        </div>
        <div className="p-6">
          <h2 className="mb-2 text-xl font-bold text-[#0C78BF]">{nombre}</h2>
          <p className="mb-2 text-lg font-semibold text-[#4CB34D]">{modelo}</p>
          <div className="flex items-center">
            {enDescuento == 0 && (
              <p className="mr-2 text-4xl font-semibold text-[#0C78BF]">
                ${precio - precio * enDescuento}
              </p>
            )}
            {enDescuento == 0 && (
              <p className="text-base font-medium text-gray-500 line-through">
                ${precio}
              </p>
            )}
            {enDescuento !== 0 && (
              <p className="text-base font-medium text-gray-500 ">${precio}</p>
            )}
            {enDescuento == 0 && (
              <p className="bg-[#FBCE40] p-2 ml-auto text-2xl font-bold text-black rounded-lg">
                {enDescuento}
              </p>
            )}
          </div>
        </div>

        {hayStock ? (
          <button className="w-full p-3 bg-red-500 text-white font-bold hover:bg-red-700">
            COMPRAR
          </button>
        ) : (
          <div className="w-full p-3 bg-gray-500 text-white font-bold text-center">
            SIN STOCK
          </div>
        )}
      </Link>
    </div>
  );
}

Card.propTypes = {
  producto: PropTypes.object.isRequired,
};

export default Card;
