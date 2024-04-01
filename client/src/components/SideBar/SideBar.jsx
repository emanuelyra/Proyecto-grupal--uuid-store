import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getOrder,
  getProductos,
  filterMarca,
  filterSearch,
  filterModelo,
} from "../../redux/actions";
import "./SideBar.css";

function SideBar() {
  const dispatch = useDispatch();
  const allProductos = useSelector((state) => state.allProductosAux);

  const [selectedMarca, setSelectedMarca] = useState(""); // Estado para la marca seleccionada
  const [filteredModelos, setFilteredModelos] = useState([]); // Estado para los modelos filtrados
  const [selectedPrecio, setSelectedPrecio] = useState(""); // Estado para el precio seleccionado
  const [searchString, setSearchString] = useState("");

  const allMarcas = Array.isArray(allProductos)
    ? [...new Set(allProductos.map((prod) => prod.marca))]
    : [];
  const allModelos = Array.isArray(allProductos)
    ? [...new Set(allProductos.map((prod) => prod.modelo))]
    : [];

  function selectedfilterMarca(e) {
    const marca = e.target.value;
    setSelectedMarca(marca); // Actualiza la marca seleccionada
    setSelectedPrecio(""); // Reinicia el precio seleccionado

    if (marca === "All") {
      setFilteredModelos(allModelos);
    } else {
      const modelosByMarca = allProductos
        .filter((prod) => prod.marca === marca)
        .map((prod) => prod.modelo);
      setFilteredModelos([...new Set(modelosByMarca)]);
    }

    dispatch(filterMarca(e.target.value, e.target.name));
  }

  function selectedfilterModelo(e) {
    const modelo = e.target.value;
    if (modelo === "All") {
      setSelectedMarca(""); // Reinicia la marca seleccionada
    }
    dispatch(filterModelo(modelo, e.target.name));
  }

  function selectOrd(e) {
    setSelectedPrecio(e.target.value);
    dispatch(getOrder(e.target.value));
  }

  useEffect(() => {
    if (allProductos.length === 0) {
      dispatch(getProductos());
    }
  }, [dispatch, allProductos.length]);

  useEffect(() => {
    dispatch(filterSearch(searchString)); // Aplicar filtro en tiempo real
  }, [searchString, dispatch]);

  return (
    <div className="container-side p-4 border-r border-gray-300">
      <div className="mb-4">
        <input
          className="searchInput border rounded p-2 mb-2 w-full focus:outline-none focus:border-blue-500"
          placeholder="Buscar"
          onChange={(e) => setSearchString(e.target.value)}
          value={searchString}
        />
      </div>

      <div className="mb-4">
        <label htmlFor="marca" className="block font-bold mb-2">
          Marca
        </label>
        <select
          id="marca"
          className="border rounded p-2 w-full focus:outline-none focus:border-blue-500"
          onChange={selectedfilterMarca}
          value={selectedMarca}
        >
          <option value="" hidden></option>
          <option value="All">All</option>
          {allMarcas.map((marca, index) => (
            <option key={index} value={marca}>
              {marca}
            </option>
          ))}
        </select>
      </div>

      <div className="mb-4">
        <label htmlFor="modelo" className="block font-bold mb-2">
          Modelo
        </label>
        <select
          id="modelo"
          className="border rounded p-2 w-full focus:outline-none focus:border-blue-500"
          onChange={selectedfilterModelo}
          disabled={!selectedMarca}
        >
          <option value="" hidden></option>
          <option value="All">All</option>
          {filteredModelos.map((modelo, index) => (
            <option key={index} value={modelo}>
              {modelo}
            </option>
          ))}
        </select>
      </div>

      <div className="mb-4">
        <label htmlFor="precio" className="block font-bold mb-2">
          Precio
        </label>
        <select
          id="precio"
          className="border rounded p-2 w-full focus:outline-none focus:border-blue-500"
          onChange={selectOrd}
          value={selectedPrecio}
        >
          <option value="" hidden></option>
          <option value="As">Menor Precio</option>
          <option value="Ds">Mayor Precio</option>
        </select>
      </div>
    </div>

  );
}

export default SideBar;
