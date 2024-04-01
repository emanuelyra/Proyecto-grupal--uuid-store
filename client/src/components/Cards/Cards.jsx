import Card from "../Card/Card";
import "./Cards.scss";

function Cards({ data }) {
  const productosList = Array.isArray(data) ? data : [];

  return productosList.length === 0 ? null : (
      <div className="m-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 gap-5">

      
      {productosList.map((producto) => (
        <div key={producto.id} className="flex-shrink-0 w-full">
          <Card producto={producto} />
        </div>
      ))}
    </div>
  );
}

export default Cards;
