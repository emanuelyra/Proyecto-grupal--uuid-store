import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { cambiarPassword } from "../../redux/actions";

const CambioDePassword = () => {
  const recoveryToken = useSelector((state) => state.token);
  console.log(recoveryToken);
  const tokenStorage = localStorage.getItem("recoveryToken") || "";
  const token = JSON.parse(tokenStorage);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [newPassword, setNewPassword] = useState({});
  const [errors, setErrors] = useState({});
  const [confirm, setConfirm] = useState(false);

  const validacion = (data) => {
    let errors = {};

    if (data.newPassword.length < 6) {
      errors.error = "La contraseña debe tener mínimo 6 caracteres.";
    }

    if (data.newPassword !== data.repeatNewPassword) {
      errors.error2 = "Las contraseñas no coinciden.";
    }

    return errors;
  };

  const handleChange = (event) => {
    const property = event.target.name;
    const value = event.target.value;
    const objeto = { ...newPassword, [property]: value };

    setNewPassword({ ...newPassword, [property]: value });
    setErrors(validacion(objeto));
  };

  const confirmarCambio = (event) => {
    event.preventDefault();
    if (Object.keys(errors).length === 0) {
      dispatch(cambiarPassword(token, newPassword));
      setNewPassword({ newPassword: "", repeatNewPassword: "" });
      setConfirm(true);
    }
  };

  const handleToHome = () => {
    navigate("/");
  };

  return (
    <div className="max-w-md mx-auto bg-white p-6 rounded-md shadow-md transition-opacity transform duration-500" style={{ backgroundColor: "#d9d9d9" }}>
      {confirm === false ? (
        <>
          <div className="text-2xl font-bold mb-6 text-gray-600">
            Introduce tu nueva contraseña
          </div>
          {errors.error && <span className="text-red-500">{errors.error}</span>}
          {!errors.error ? (
            <span className="text-red-500">{errors.error2}</span>
          ) : (
            false
          )}
          <form className="flex flex-col space-y-4">
            <label className="text-gray-600 block font-semibold">
              Nueva contraseña
            </label>
            <input
              type="password"
              name="newPassword"
              value={newPassword.newPassword}
              onChange={handleChange}
              className="w-full border rounded px-3 py-2 mt-1 text-black"
            />
            <label className="text-gray-600 block font-semibold">
              Repetir contraseña
            </label>
            <input
              type="password"
              name="repeatNewPassword"
              value={newPassword.repeatNewPassword}
              onChange={handleChange}
              className="w-full border rounded px-3 py-2 mt-1 text-black"
            />
            <button
              className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-700"
              onClick={confirmarCambio}
            >
              Confirmar
            </button>
          </form>
        </>
      ) : (
        <>
          <h1>El cambio se realizó con éxito</h1>
          <button className="mt-4 px-4 py-2 rounded bg-red-500 text-white hover:bg-red-700" onClick={handleToHome}>Volver al Home</button>
        </>
      )}
    </div>
  );
  
};

export default CambioDePassword;
