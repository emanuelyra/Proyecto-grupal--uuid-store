import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  getProductosAll,
  deleteProducto,
  updateProducto,
} from "../../../redux/actions";
import UpdateProduct from "./UpdateProduct/UpdateProduct";
import { FaEdit, FaTrashAlt } from "react-icons/fa";
const AllProducts = () => {
  const dispatch = useDispatch();

  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 10;

  useEffect(() => {
    // Llamar a la acción getProductos cuando el componente monta
    dispatch(getProductosAll());
  }, [dispatch]);

  const productos = useSelector((state) => state.allProductos);

  const [editMode, setEditMode] = useState(false);
  const [selectedProductId, setSelectedProductId] = useState(null);

  const handleDelete = (id) => {
    dispatch(deleteProducto(id));
  };

  const handleUpdate = (id) => {
    setEditMode(true);
    setSelectedProductId(id);
  };

  const handleFormSubmit = (formData) => {
    dispatch(updateProducto(formData));
    setEditMode(false);
    setSelectedProductId(null);
    window.location.reload();
  };

  if (!Array.isArray(productos)) {
    dispatch(getProductosAll());
    return <p>Productos no es un array</p>;
  }

  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = productos.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );

  // Renderizar productos si es un array
  return (
    <div className="contenedor-table max-w-full mx-auto mt-8 p-4 bg-white rounded-md">
      <div className="overflow-x-auto">
        <table className="w-full border border-collapse">
          <thead>
            <tr className="bg-gray-200">
              <th className="p-2 border">ID</th>
              <th className="p-2 border">Código</th>
              <th className="p-2 border">Nombre</th>
              <th className="p-2 border">Modelo</th>
              <th className="p-2 border">Descuento</th>
              <th className="p-2 border">Precio</th>
              <th className="p-2 border">Stock</th>
              <th className="p-2 border">Género</th>
              <th className="p-2 border">Marca</th>
              <th className="p-2 border">Imagen</th>
              <th className="p-2 border">Estado</th>
              <th className="p-2 border">Editar</th>
              <th className="p-2 border">Eliminar</th>
            </tr>
          </thead>
          <tbody>
            {currentProducts?.map((producto) => (
              <tr key={producto?.id} className="hover:bg-gray-100">
                <td className="p-2 border">{producto?.id}</td>
                <td className="p-2 border">{producto?.codigo}</td>
                <td className="p-2 border">{producto?.nombre}</td>
                <td className="p-2 border">{producto?.modelo}</td>
                <td className="p-2 border">{producto?.enDescuento}</td>
                <td className="p-2 border">{producto?.precio}</td>
                <td className="p-2 border">
                  {Object.values(producto?.stock).some((value) => value !== 0)
                    ? "true"
                    : "false"}
                </td>
                <td className="p-2 border">{producto?.genero}</td>
                <td className="p-2 border">{producto?.marca}</td>
                <td className="p-2 border">
                  {producto.imagen ? (
                    <img
                      src={producto?.imagen[0]}
                      alt={producto?.nombre}
                      className="w-16  object-cover"
                    />
                  ) : null}
                </td>
                <td className="p-2 border">
                  {producto?.estado ? (
                    <span
                      style={{
                        backgroundColor: "green",
                        color: "white",
                        padding: "2px 5px",
                        borderRadius: "3px",
                      }}
                    >
                      on
                    </span>
                  ) : (
                    <span
                      style={{
                        backgroundColor: "red",
                        color: "white",
                        padding: "2px 5px",
                        borderRadius: "3px",
                      }}
                    >
                      off
                    </span>
                  )}
                </td>

                <td className="p-2 border text-center">
                  <button
                    onClick={() => handleUpdate(producto?.id)}
                    className="px-2 py-1 bg-blue-500 text-white rounded hover:bg-blue-700 focus:outline-none flex items-center"
                  >
                    <FaEdit className="mr-2" />
                    <span>Editar</span>
                  </button>
                </td>
                <td className="p-2 border">
                  <button
                    onClick={() => handleDelete(producto?.id)}
                    className="px-2 py-1 bg-red-500 text-white rounded hover:bg-red-700 focus:outline-none flex items-center"
                  >
                    <FaTrashAlt className="mr-2" />
                    <span>Eliminar</span>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="pagination flex justify-center mt-4">
        {Array.from({
          length: Math.ceil(productos.length / productsPerPage),
        }).map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentPage(index + 1)}
            className={`px-3 py-2 mx-1 text-gray-800 rounded focus:outline-none focus:bg-gray-400 ${
              currentPage === index + 1 ? "bg-gray-300" : "bg-gray-200"
            }`}
          >
            <span className="text-gray-300">{index + 1}</span>
          </button>
        ))}
      </div>

      {editMode && (
        <UpdateProduct
          productId={selectedProductId}
          onCancel={() => {
            setEditMode(false);
            setSelectedProductId(null);
          }}
          onSubmit={handleFormSubmit}
        />
      )}
    </div>
  );
};

export default AllProducts;
