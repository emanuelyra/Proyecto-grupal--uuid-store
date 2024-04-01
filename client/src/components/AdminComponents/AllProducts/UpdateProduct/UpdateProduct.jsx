import { useState } from "react";
import { useSelector } from "react-redux";
import axios from "axios";

import { useFormik } from "formik";

const UpdateProduct2 = ({ productId, onCancel, onSubmit }) => {
  const producto = useSelector((state) =>
    state.allProductos.find((p) => p.id === productId)
  );

  const formik = useFormik({
    initialValues: {
      id: producto.id,
      nombre: producto.nombre,
      marca: producto.marca,
      modelo: producto.modelo,
      precio: producto.precio,
      stock: producto.stock,
      estado: producto.estado,
      genero: producto.genero,
      imagen: [],
      enDescuento: producto.enDescuento,
      comentarios: producto.comentario,
    },
    onSubmit: (values) => handleSubmit(values),
  });

  const talles = [
    36, 36.5, 37, 37.5, 38, 38.5, 39, 39.5, 40, 40.5, 41, 41.5, 42, 42.5, 43,
    43.5, 44, 44.5, 45, 45.5, 46,
  ];

  const handleStock = (talle, count) => {
    if (count === "-" && formik.values.stock[talle] > 0)
      formik.setFieldValue("stock", {
        ...formik.values.stock,
        [talle]: formik.values.stock[talle] - 1,
      });

    if (count === "+")
      formik.setFieldValue("stock", {
        ...formik.values.stock,
        [talle]: formik.values.stock[talle] + 1,
      });
  };

  const [images, setImages] = useState(producto.imagen);
  const handleSubmit = async (values) => {
    let newImages = [];

    for (let i = 0; i < images.length; i++) {
      try {
        const data = new FormData();
        data.append("file", images[i]);
        data.append("upload_preset", "ilxmjryu");

        const response = await axios.post(
          `https://api.cloudinary.com/v1_1/djd7b0upe/image/upload`,
          data
        );
        newImages.push(response.data.secure_url);
      } catch (error) {
        console.log(error);
      }
    }

    // console.log("Estado enviado:", formData);
    onSubmit({ ...values, imagen: newImages });
  };

  const handleDrop = (event) => {
    event.preventDefault();

    // generamos un array a partir de las imagenes que se van agregando
    const newFiles = event.dataTransfer.files;
    const newImagesArray = Array.from(newFiles);

    // Actualizar el valor de imagenes en el estado local
    setImages((prevImages) => [...prevImages, ...newImagesArray]);
  };

  const removeImage = (imgIndex) => {
    setImages((actualImg) =>
      actualImg.filter((_, index) => imgIndex !== index)
    );
  };

  return (
    <div className="bg-white max-w-full h-full p-4 rounded-md mx-auto grid grid-cols-5 gap-4">
      <form
        onSubmit={formik.handleSubmit}
        className="col-span-3 space-y-4 flex-col"
      >
        {[
          { label: "Nombre", name: "nombre" },
          { label: "Marca", name: "marca" },
          { label: "Modelo", name: "modelo" },
          { label: "Comentario", name: "comentario" },
          { label: "Precio", name: "precio" },
          { label: "Estado", name: "estado" },
          {
            label: "Genero",
            name: "genero",
            type: "select",
            options: ["Masculino", "Femenino", "Unisex"],
          },
          { label: "Descuento", name: "descuento" },
        ].map((field) => (
          <div key={field.name} className="mb-4">
            <label
              htmlFor={field.name}
              className="block text-sm font-medium text-gray-700"
            >
              {field.label}:
            </label>
            {field.name === "estado" ? ( // Verificamos si es el campo "estado"
              <select
                name={field.name}
                id={field.name}
                onChange={formik.handleChange}
                value={formik.values[field.name]}
                className="mt-1 p-2 border rounded-md w-full sm:w-96 focus:outline-none focus:border-blue-500"
              >
                <option value="true">On</option>
                <option value="false">Off</option>
              </select>
            ) : (
              <input
                type="text"
                id={field.name}
                name={field.name}
                value={formik.values[field.name] || ""}
                onChange={formik.handleChange}
                className="mt-1 p-2 border rounded-md w-full sm:w-96 focus:outline-none focus:border-blue-500"
              />
            )}
          </div>
        ))}

        {/* Botones de enviar y cancelar */}
        <div className="flex space-x-4">
          <button
            type="submit"
            className="bg-blue-500 text-white p-2 rounded-md hover:bg-blue-700 focus:outline-none transition duration-300 ease-in-out"
          >
            Guardar cambios
          </button>
          <button
            type="button"
            onClick={onCancel}
            className="bg-gray-300 text-gray-700 p-2 rounded-md hover:bg-gray-400 focus:outline-none transition duration-300 ease-in-out"
          >
            Cancelar
          </button>
        </div>
      </form>

      <div className="col-span-0.5">
        {/* Imágenes */}
        <div
          onDrop={handleDrop}
          onDragOver={(event) => event.preventDefault()}
          className={`border-dashed border-2 p-4 rounded`}
        >
          <p>Arrastra y suelta una o varias imágenes aquí</p>
        </div>
        <label
          htmlFor="imagenes"
          className="block text-sm font-medium text-gray-700"
        >
          Imágenes:
        </label>

        {images?.map((image, index) => (
          <div key={index} className="mt-2">
            <img
              src={
                typeof image === "object" ? URL.createObjectURL(image) : image
              }
              alt={`Imagen ${index}`}
              className="w-16 h-16 object-cover rounded"
            />
            <button
              type="button"
              onClick={() => removeImage(index)}
              className="ml-2 px-2 py-1 bg-red-500 text-white rounded"
            >
              Eliminar
            </button>
          </div>
        ))}
      </div>

      <div className="col-span-1.5">
        <label
          htmlFor="talles"
          className="block text-sm font-medium text-gray-700"
        >
          Talles y stock:
        </label>
        {talles.map((talle, index) => (
          <div key={index} className="flex items-center space-x-2">
            {console.log(talle)}
            {console.log(formik.values.stock)}
            <button
              className="text-blue-500 focus:outline-none"
              onClick={() => handleStock(talle, "-")}
            >
              -
            </button>
            <span>{talle}</span>
            <button
              className="text-blue-500 focus:outline-none"
              onClick={() => handleStock(talle, "+")}
            >
              +
            </button>
            <span className="ml-2">
              Cantidad en stock:{" "}
              {Object.keys(formik.values).length && formik.values.stock[talle]}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};
export default UpdateProduct2;
