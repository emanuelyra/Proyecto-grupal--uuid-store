import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { putUser } from "../../redux/actions";
import "./ActualizarData.css";


function ActualizarData() {
    const dispatch = useDispatch();
    const user = useSelector((state) => state.actualUser);

    const [userData, setUserData] = useState({
        id: user.id,
      nombre: user.nombre,
      apellido: user.apellido,
      dni: user.dni,
      direccion: user.direccion,
      localidad: user.localidad,
      provincia: user.provincia,
      email: user.email,
      telefono: user.telefono,
    });
    const [mostrarDiv, setMostrarDiv] = useState(false);
  
    const handleChange = (e) => {
      const { name, value } = e.target;
      setUserData({
        ...userData,
        [name]: value,
      });
    };
  
    const handleSubmit = async (event) => {
      event.preventDefault();
      console.log(userData)
      try {
        await dispatch(putUser(userData)); // Esperar a que la acción se complete
        setMostrarDiv(true); // Mostrar el div después de actualizar
      } catch (error) {
        console.error("Error al actualizar el usuario:", error);
      }
    };

  return (
    <div className="contenedor-user">
      <form>
        <label>
          Nombre:
          <input
            type="text"
            name="nombre"
            value={userData.nombre}
            onChange={handleChange}
          />
        </label>
        <label>
          Apellido:
          <input
            type="text"
            name="apellido"
            value={userData.apellido}
            onChange={handleChange}
          />
        </label>
        <label>
          Dni:
          <input
            type="text"
            name="dni"
            value={userData.dni}
            onChange={handleChange}
          />
        </label>
        <label>
          Direccion:
          <input
            type="text"
            name="direccion"
            value={userData.direccion}
            onChange={handleChange}
          />
        </label>
        <label>
          Provincia:
          <input
            type="text"
            name="provincia"
            value={userData.provincia}
            onChange={handleChange}
          />
        </label>
        <label>
          Localidad:
          <input
            type="text"
            name="localidad"
            value={userData.localidad}
            onChange={handleChange}
          />
        </label>
        <label>
          Email:
          <input
            type="email"
            name="email"
            value={userData.email}
            onChange={handleChange}
          />
        </label>
        <label>
          Teléfono:
          <input
            type="text"
            name="telefono"
            value={userData.telefono}
            onChange={handleChange}
          />
        </label>
        <button type="submit" onClick={handleSubmit}>
          Actualizar
        </button>
      </form>
      {mostrarDiv && (
        <div className="mensaje">
          <p>¡Datos actualizados correctamente!</p>
        </div>
      )}
    </div>
  );
}

export default ActualizarData;
