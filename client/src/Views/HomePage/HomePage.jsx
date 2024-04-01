import React, { useEffect, useState } from "react";
import Carrusel from "./Carrusel/Carrusel";
import Carrusel2 from "./Carrusel/Carrusel2";
import Cards from "../../components/Cards/Cards";
import { useDispatch, useSelector } from "react-redux";
import { getProductos } from "../../redux/actions";
import Footer from "../../components/Footer/Footer";
import CardsForDetail from "../../components/Cards/CardsforDetail";


const HomePage = () => {
  const dispatch = useDispatch();
  const allProductos = useSelector((state) => state.allProductosHome);
  const [showParagraph, setShowParagraph] = useState(true);

  const recommendedProducts2 = Array.isArray(allProductos)
    ? allProductos
        .slice()
        .sort(() => Math.random() - 0.5)
        .slice(0, 4)
    : [];

  useEffect(() => {
    if (allProductos.length === 0) {
      dispatch(getProductos());
    }
  }, [dispatch, allProductos.length]);

  // Ordenar los productos por stock en orden descendente
  const sortedProductos = allProductos.slice().sort((a, b) => b.stock - a.stock);
  const recommendedProducts = sortedProductos.slice(0, 8);

  useEffect(() => {
    function handleScroll() {
      const windowHeight = window.innerHeight;
      const scrollTop = window.scrollY;
      const documentHeight = document.body.clientHeight;
      const scrollPercentage = (scrollTop / (documentHeight - windowHeight)) * 100;

      if (scrollPercentage >= 50) {
        setShowParagraph(false);
      } else {
        setShowParagraph(true);
      }
    }

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div>
      <Carrusel />
      <div>
        <Cards data={recommendedProducts} />
      </div>
      <br />
      <br />
      <div
        className="h-40 bg-gradient-to-t from-gray-200 to-transparent"
        style={{ position: "fixed", bottom: 0, width: "100%" }}
      >
        <p
          style={{
            fontWeight: "bold",
            color: "red",
            textAlign: "center",
            fontSize: "90px",
            opacity: "0.5",
            display: showParagraph ? "block" : "none",
          }}
        >
          TOP DROPS OF THE WEEK
        </p>
      </div>
      <Carrusel2  />
      <div style={{ width: "150px", height: "300px", border: "1px solid #ccc" }}></div>
      <CardsForDetail data={recommendedProducts2} style={{ width: "150px", height: "200px", border: "1px solid #ccc" }}/>
      <div style={{ paddingBottom: "1%" }}>
        <Footer />
      </div>
    </div>
  );
};

export default HomePage;
