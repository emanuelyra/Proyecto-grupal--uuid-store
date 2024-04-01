// FORMIK
import { useFormik } from "formik";

// COMPONENTS
import Autenticador from "../../../../Helpers/Auntenticador";

// HOOKS
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

// ACTIONS
import { logIn, logInWhitGoogle } from "../../../../redux/actions";

const LogIn = ({ handleView, mostrarUser }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [showAnimation, setShowAnimation] = useState(true);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setShowAnimation(false);
    }, 500);

    return () => clearTimeout(timeoutId);
  }, []);

  const handleSignUpClick = () => {
    setShowAnimation(true);

    setTimeout(() => {
      setShowAnimation(false);
      handleView();
    }, 200);
  };

  const handleExitClick = () => {
    setShowAnimation(true);
    setTimeout(() => {
      setShowAnimation(false);
      mostrarUser();
      // Agrega aquí cualquier lógica adicional que necesites al salir del componente
    }, 200);
  };

  const handleRecoveryPassword = () => {
    setShowAnimation(true);
    setTimeout(() => {
      setShowAnimation(false);
      mostrarUser();
      // Agrega aquí cualquier lógica adicional que necesites al salir del componente
    }, 100);
    setTimeout(() => {
      navigate("/recovery");
    }, 900);
  };

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit: (values) => {
      dispatch(logIn(values));
      mostrarUser();
    },
  });

  return (
    <div
      className={`w-full max-w-md mx-auto p-4 bg-white shadow-md rounded-md transition-opacity transform duration-500 ${
        showAnimation ? "opacity-0 scale-95" : "opacity-100 scale-100"
      }`}
    >
      <div className="text-lg font-semibold mb-4">
        INICIA SESIÓN EN UUID STORE
      </div>
      <form onSubmit={formik.handleSubmit} className="flex flex-col ">
        <label
          htmlFor="email"
          className="block mb-2 text-sm font-medium text-gray-600"
        >
          Ingrese su mail
        </label>
        <input
          id="email"
          name="email"
          type="text"
          className="w-full p-2 border border-gray-300 rounded text-black"
          onChange={formik.handleChange}
          value={formik.values.email}
        />

        <label
          htmlFor="password"
          className="block mt-4 mb-2 text-sm font-medium text-gray-600"
        >
          Contraseña
        </label>
        <input
          id="password"
          name="password"
          type="password"
          className="w-full p-2 border border-gray-300 rounded text-black"
          onChange={formik.handleChange}
          value={formik.values.password}
        />

        <div className="mt-4 flex items-center">
          <span className="text-sm mr-2">O continúa con:</span>
          <Autenticador
            mostrarUser={mostrarUser}
            logInWhitGoogle={logInWhitGoogle}
          />
        </div>

        <div className="mt-6 flex items-center text-sm">
          <span className="mr-2">¿Eres nuevo?</span>
          <span
            className={`text-blue-500 cursor-pointer ${
              showAnimation ? "animate-bounce" : ""
            }`}
            onClick={handleSignUpClick}
          >
            ¡Crea tu cuenta gratis!
          </span>
        </div>

        <div className="mt-8 flex justify-between items-center">
          <span
            className="text-red-500 cursor-pointer focus:outline-none"
            onClick={handleExitClick}
          >
            Salir
          </span>
          <span
            style={{ color: "#615e5e" }}
            className="text-red-500 cursor-pointer focus:outline-none"
            onClick={handleRecoveryPassword}
          >
            olvidé mi contraseña
          </span>

          <button
            type="submit"
            className="px-4 py-2 bg-blue-500 text-white rounded"
          >
            Iniciar sesión
          </button>
        </div>
        <div></div>
      </form>
    </div>
  );
};

export default LogIn;
