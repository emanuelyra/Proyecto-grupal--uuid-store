import { Link } from "react-router-dom";

// estilos
import styles from "./Nav.module.scss";

// iconos y logos
import logo from "../../../assets/uuid-logo2.png";
import iconoCarro from "../../../assets/carro.png";
import iconoUser from "../../../assets/persona.png";

// componentes
import MenuCarro from "../MenuCarro/MenuCarro";
import MenuUser from "../MenuUser/MenuUser";

// hooks
import { useState } from "react";

const Nav = () => {
  const [userDisplay, setUserDisplay] = useState(false);
  const [carroDisplay, setCarroDisplay] = useState(false);

  const mostrarUser = () => {
    setUserDisplay(!userDisplay);
  };

  const mostrarCarro = () => {
    setCarroDisplay(!carroDisplay);
  };

  return (
    <nav
      className={`flex items-center justify-between p-4 bg-[#FF3131] text-white ${styles.nav}`}
    >
      <Link to="/">
        <img src={logo} alt="logo" className=" h-auto" />
      </Link>

      <div className={`hidden md:flex space-x-4 ${styles.links}`}>
        <Link to="/">HOME</Link>
        <Link to="/productos">TODOS LOS PRODUCTOS</Link>
      </div>

      <div className={`flex space-x-4 ${styles.menus}`}>
        <span>
          <img
            src={iconoCarro}
            alt="carrito de compras"
            className="cursor-pointer w-8"
            onClick={mostrarCarro}
          />
          {carroDisplay && (
            <MenuCarro mostrarCarro={mostrarCarro} mostrarUser={mostrarUser} />
          )}
        </span>

        <span>
          <img
            src={iconoUser}
            alt="icono de usuario"
            className="cursor-pointer w-8"
            onClick={mostrarUser}
          />
          {userDisplay && <MenuUser mostrarUser={mostrarUser} />}
        </span>
      </div>
    </nav>
  );
};

export default Nav;
