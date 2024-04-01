// FORMIK
import { useFormik } from "formik";

// COMPONENTS
import Autenticador from "../../../../Helpers/Auntenticador";

// ACTIONS
import { signUp, signUpWhitGoogle } from "../../../../redux/actions";

// HOOKS
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";

// VALIDACION DEL FORMULARIO
import { validate } from "./validate";

const SignIn = ({ handleView, mostrarUser }) => {
  const dispatch = useDispatch();
  const [showAnimation, setShowAnimation] = useState(true);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setShowAnimation(false);
    }, 500);

    return () => clearTimeout(timeoutId);
  }, []);

  const handleSignInClick = () => {
    setShowAnimation(true);

    // Ajusta el tiempo según la duración de tu animación CSS
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

  const formik = useFormik({
    initialValues: {
      nombre: "",
      apellido: "",
      email: "",
      password: "",
      rPassword: "",
    },
    validate,
    onSubmit: (values) => {
      dispatch(signUp(values));
      mostrarUser();
    },
  });

  return (
    <div
      className={`max-w-md mx-auto bg-white p-6 rounded-md shadow-md transition-opacity transform duration-500 ${
        showAnimation ? "opacity-0" : "opacity-100"
      }`}
    >
      <div className="text-2xl font-bold mb-6 text-gray-600">
        REGISTRARSE EN UUID STORE
      </div>
      <form onSubmit={formik.handleSubmit} className="flex flex-col space-y-4">
        <div>
          <label htmlFor="nombre" className="text-gray-600 block font-semibold">
            Nombre
          </label>
          <input
            id="nombre"
            name="nombre"
            type="text"
            onChange={formik.handleChange}
            value={formik.values.nombre}
            onBlur={formik.handleBlur}
            className="w-full border rounded px-3 py-2 mt-1 text-black"
          />
          {formik.touched.nombre && formik.errors.nombre && (
            <span className="text-red-500">{formik.errors.nombre}</span>
          )}
        </div>

        <div>
          <label
            htmlFor="apellido"
            className="text-gray-600 block font-semibold"
          >
            Apellido
          </label>
          <input
            id="apellido"
            name="apellido"
            type="text"
            onChange={formik.handleChange}
            value={formik.values.apellido}
            onBlur={formik.handleBlur}
            className="w-full border rounded px-3 py-2 mt-1 text-black"
          />
          {formik.touched.apellido && formik.errors.apellido && (
            <span className="text-red-500">{formik.errors.apellido}</span>
          )}
        </div>

        <div>
          <label htmlFor="email" className="text-gray-600 block font-semibold">
            Email
          </label>
          <input
            id="email"
            name="email"
            type="text"
            onChange={formik.handleChange}
            value={formik.values.email}
            onBlur={formik.handleBlur}
            className="w-full border rounded px-3 py-2 mt-1 text-black"
          />
          {formik.touched.email && formik.errors.email && (
            <span className="text-red-500">{formik.errors.email}</span>
          )}
        </div>

        <div>
          <label
            htmlFor="password"
            className="text-gray-600 block font-semibold"
          >
            Contraseña
          </label>
          <input
            id="password"
            name="password"
            type="password"
            onChange={formik.handleChange}
            value={formik.values.password}
            onBlur={formik.handleBlur}
            className="w-full border rounded px-3 py-2 mt-1 text-black"
          />
          {formik.touched.password && formik.errors.password && (
            <span className="text-red-500">{formik.errors.password}</span>
          )}
        </div>

        <div>
          <label
            htmlFor="rPassword"
            className="text-gray-600 block font-semibold"
          >
            Repetir contraseña
          </label>
          <input
            id="rPassword"
            name="rPassword"
            type="password"
            onChange={formik.handleChange}
            value={formik.values.rPassword}
            onBlur={formik.handleBlur}
            className="w-full border rounded px-3 py-2 mt-1 text-black"
          />
          {formik.touched.rPassword && formik.errors.rPassword && (
            <span className="text-red-500">{formik.errors.rPassword}</span>
          )}
        </div>

        <hr className="my-4" />

        <div className="flex items-center space-x-2">
          <span className="text-gray-600">O continúa con:</span>
          <Autenticador
            mostrarUser={mostrarUser}
            signUpWhitGoogle={signUpWhitGoogle}
          />
        </div>

        <div>
          <div className="text-center">
            <span
              className={`text-blue-500 cursor-pointer ${
                showAnimation ? "animate-bounce" : ""
              }`}
              onClick={handleSignInClick}
            >
              ¿Ya tenés cuenta? ¡Inicia sesión!
            </span>
          </div>

          <div className="mt-2 flex justify-between">
            <button
              className="text-red-500 cursor-pointer focus:outline-none"
              onClick={handleExitClick}
            >
              Salir
            </button>

            <button
              type="submit"
              className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700"
            >
              Registrar
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default SignIn;
