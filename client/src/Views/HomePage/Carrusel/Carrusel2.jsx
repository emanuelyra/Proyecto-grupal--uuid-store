import { useEffect, useRef, useState } from "react";
import styles from "./Carrusel.module.scss";
import { data } from "../../../assets/Carrusel2/data2.js"

const Carrusel2 = () => {
  const listRef = useRef();
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const listNode = listRef.current;
    const imgNode = listNode.querySelectorAll("li > img")[currentIndex];

    if (imgNode) {
      const rect = imgNode.getBoundingClientRect();
      const isVisible =
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <=
          (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <=
          (window.innerWidth || document.documentElement.clientWidth);

      // Si la imagen no está visible, entonces desplázala en la vista
      if (!isVisible) {
        imgNode.scrollIntoView({
          behavior: "smooth",
          block: "nearest",
          inline: "nearest",
        });
      }
    }
  }, [currentIndex]);

  const scrollToImage = (direction) => {
    setCurrentIndex((curr) => {
      if (direction === "prev") {
        // Si está en la primera posición, tomar la última posición del array
        return curr === 0 ? data.length - 1 : curr - 1;
      } else {
        // Si está en la última posición, tomar la primera posición del array
        return curr === data.length - 1 ? 0 : curr + 1;
      }
    });
  };

  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };

  return (
    <div className={styles.fade}>
      <div className={styles.mainContainer}>
        <div className={styles.sliderContainer}>
        <div
  className={styles.leftArrow}
  onClick={() => scrollToImage("prev")}
  style={{
    borderRadius: "100%",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "80px", // Ajusta el ancho según sea necesario
    height: "80px", // Ajusta la altura según sea necesario
  }}
>
  &#10092;
</div>
<div
  className={styles.rightArrow}
  onClick={() => scrollToImage("next")}
  style={{
    borderRadius: "100%",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "80px", // Ajusta el ancho según sea necesario
    height: "80px", // Ajusta la altura según sea necesario
  }}
>
  &#10093;
</div>

          <div className={styles.containerImages} style={{ height: "730px" }}>
            <ul ref={listRef} className={styles.imageList}>
              {data.map((item, idx) => (
                <li key={idx} className={styles.imageItem}>
                  <img
                    src={item.imgUrl}
                    alt={`slide-${item.id}`}
                    className={styles.image}
                  />
                </li>
              ))}
            </ul>
          </div>
          <div className={styles.dotsContainer}>
            {data.map((_, idx) => (
              <div
                key={idx}
                className={`${styles.dotContainerItem} ${
                  idx === currentIndex ? styles.active : ""
                }`}
                onClick={() => goToSlide(idx)}
              >
                &#9865;
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Carrusel2;
