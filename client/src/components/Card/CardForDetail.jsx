import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import styles from "./Card.module.scss";
import { useEffect, useState } from "react";

function CardForDetail({ producto }) {
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
          
      </Link>
    </div>
  );
}

CardForDetail.propTypes = {
  producto: PropTypes.object.isRequired,
};

export default CardForDetail;
