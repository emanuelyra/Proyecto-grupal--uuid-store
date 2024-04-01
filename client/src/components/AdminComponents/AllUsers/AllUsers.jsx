import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { allUsers, deleteUser, accessAdminUser } from "../../../redux/actions";
import UserAdminSwitch from "./UserAdminSwitch";


const AllUsers = () => {
  const users = useSelector((state) => state.allUsers);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(allUsers());
  }, [dispatch]);

  const handleDeleteUser = async (email) => {
    try {
      await dispatch(deleteUser(email));
      console.log("Correo electrónico del usuario a eliminar:", email);
      window.location.reload();
    } catch (error) {
      console.error("Error al eliminar usuario:", error);
    }
  };
  
  const handleAdminUser = async (email, admin) => {
    try {
      await dispatch(accessAdminUser(email));
      console.log(`Se ha modificado el acceso admin del mail ${email}`);
      window.location.reload();
    } catch (error) {
      console.error("Error al modificar los permisos de administrador:", error);
    }
  };



  return (
    <div className="contenedor-table">
      <table>
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Email</th>
            <th>Eliminar</th>
            <th>Permisos de admin</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            
            <tr key={user.id}>
              <td>{user.nombre}</td>
              <td>{user.email}</td>
              <td>
                <button onClick={() => handleDeleteUser(user.email)}>Eliminar</button>
              </td>
              <td>
                <button onClick={() => handleAdminUser(user.email , user.admin)}><UserAdminSwitch isAdmin={user.admin}></UserAdminSwitch></button>

              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AllUsers;
