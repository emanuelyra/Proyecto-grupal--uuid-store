// Estilos
import styles from "./App.module.scss";

// Routers
import { Routes, Route, useLocation } from "react-router-dom";

// Componentes
import Nav from "./components/Header/Nav/Nav";

// Views
import Admin from "./Views/Admin/Admin";
import User from "./Views/User/DataUser";
import Detail from "./Views/Detail/Detail";
import HomePage from "./Views/HomePage/HomePage";
import Productos from "./Views/Productos/Productos";
import ConfirmacionDeCompra from "./Views/ConfirmacionDeCompra/ConfirmacionDeCompra";
import CompraConfirmada from "./Views/CompraConfirmada/CompraConfirmada";
import DetallesDeCompra from "./Views/DetallesDeCompra/DetallesDeCompra";
import EnvioMailCambioPassword from "./Views/EnvioMailCambioPassword/EnvioMailCambioPassword";
import CambioDePassword from "./Views/CambioDePassword/CambioDePassword";
import ErrorPage from "./Views/ErrorPage/ErrorPage";

//PATHROUTES
import PATHROUTES from "./Helpers/path";

import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

// ACTION
import { clearMessage } from "./redux/actions";
import { autoLogin, autoSetCarro } from "./redux/actions";

function App() {
  const dispatch = useDispatch();

  const user = useSelector((state) => state.actualUser);
  const cart = useSelector((state) => state.cart);
  const message = useSelector((state) => state.messageToUser);

  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  useEffect(() => {
    if (user.token) {
      window.localStorage.setItem("loggedUser", JSON.stringify(user));
    }
  }, [user]);

  useEffect(() => {
    const userJSON = window.localStorage.getItem("loggedUser");
    if (userJSON) {
      const user = JSON.parse(userJSON);
      dispatch(autoLogin(user));
    }
  }, []);

  useEffect(() => {
    if (cart.length) window.localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart, cart.length]);

  useEffect(() => {
    const cartJSON = window.localStorage.getItem("cart");
    if (cartJSON) {
      const cartAct = JSON.parse(cartJSON);
      dispatch(autoSetCarro(cartAct));
    }
  }, []);

  useEffect(() => {
    setTimeout(() => {
      dispatch(clearMessage());
    }, 5000);
  }, [message]);

  return (
      <div className={styles.appContainer} style={{ height: "100%" }}>
      <Nav />

      <Routes>
        <Route path={PATHROUTES.ADMIN} element={<Admin />} />
        <Route path={PATHROUTES.USER} element={<User />} />
        <Route path={PATHROUTES.DETAIL} element={<Detail />} />
        <Route path={PATHROUTES.HOME} element={<HomePage />} />
        <Route path={PATHROUTES.PRODUCTOS} element={<Productos />} />
        <Route path={PATHROUTES.CONFIRMACION} element={<ConfirmacionDeCompra />} />
        <Route path={PATHROUTES.SUCCESS} element={<CompraConfirmada />} />
        <Route path={PATHROUTES.DETALLESDECOMPRA} element={<DetallesDeCompra />}/>
        <Route path={PATHROUTES.ENVIOMAILPASSWORD} element={<EnvioMailCambioPassword />} />
        <Route path={PATHROUTES.CAMBIOPASSWORD} element={<CambioDePassword />} />
        <Route path={PATHROUTES.ERROR} element={<ErrorPage/>} />
      </Routes>

      {message && <span className={styles.message}> {message} </span>}

     
    </div>
  );
}

export default App;
