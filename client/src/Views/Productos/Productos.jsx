import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProductos, getName } from "../../redux/actions";
import SideBar from "../../components/SideBar/SideBar"
import Cards from "../../components/Cards/Cards";

import "./Productos.css";

function Productos() {
  const dispatch = useDispatch();
  const allProductos = useSelector((state) => state.allProductos);
  const [searchString, setSearchString] = useState("");
  const [numToShow, setNumToShow] = useState(8);

  function handleChange(e) {
    e.preventDefault();
    setSearchString(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    dispatch(getName(searchString))
  }

  function handleVerMas() {
    setNumToShow(prevNum => prevNum + 8);
  }

  useEffect(() => {
    if (allProductos.length === 0) {
      dispatch(getProductos());
    }
  }, [dispatch, allProductos.length]);

  return (
      <div className="flex flex-col md:flex-row h-screen-40 overflow-hidden">

      <div className="w-full md:w-1/6 p-4" >
        <SideBar handleChange={handleChange} handleSubmit={handleSubmit} />
      </div>
      <div className="w-full p-4 overflow-y-auto scrollbar-thin scrollbar-thumb-gray-300" style={{ scrollbarWidth: "thin", scrollbarColor: "transparent transparent" }}>
        <Cards data={allProductos.slice(0, numToShow)} />
        {numToShow < allProductos.length && (
          <div className="flex justify-center  bg-gradient-to-t">
           <button onClick={handleVerMas} className="mt-4 bg-red-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
           Ver más
           </button>
              </div>


        )}
           <br />
           <br />
      <div className="h-40 bg-gradient-to-t from-white to-transparent" style={{ position: "fixed", bottom: 0, left: 0, width: "100%", zIndex:0 }}></div>

      </div>
    </div>
  );
}

export default Productos;
