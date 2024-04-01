import React from "react";
import styles from "./Footer.module.scss";

const Footer = () => {
  return (
    <footer className={`${styles.footer}`}>
      {/* <footer className="fixed bottom-0 left-0 w-full bg-[#FF3131] text-white p-4 text-center"> */}
      <p>&copy; 2024 uuid. Todos los derechos reservados.</p>
    </footer>
  );
};

export default Footer;
