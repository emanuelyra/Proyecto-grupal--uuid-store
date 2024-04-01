// Formik
import { useFormik } from "formik";
import validate from "./validation.js";

// estilos
import styles from "./CreateForm.module.scss";

// hooks
import { useState } from "react";
import { useDispatch } from "react-redux";

// actions
import { postProducto } from "../../../redux/actions.js";

// Axios
import axios from "axios";

const CreateForm = () => {
  const talles = [
    36, 36.5, 37, 37.5, 38, 38.5, 39, 39.5, 40, 40.5, 41, 41.5, 42, 42.5, 43,
    43.5, 44, 44.5, 45, 45.5, 46,
  ];

  // images contiene las imagenes subidas para hacer una
  // vista previa antes de enviarlas a cloudinary
  const [images, setImages] = useState([]);
  const dispatch = useDispatch();

  // handleDrop se ejecuta cuando el usuario suelta una imagen dentro del div
  // no haría falta modificar el estado de formik porque después al hacer el submit
  // vamos a sobreescribir la propiedad imagen, pero lo pongo acá para que también
  // vaya manejando los errores de las imágenes
  const handleDrop = (event) => {
    event.preventDefault();

    // generamos un array a partir de las imagenes que se van agregando
    const newFiles = event.dataTransfer.files;
    const newImagesArray = Array.from(newFiles);

    // Actualizar el valor de imagenes en el estado local
    setImages((prevImages) => [...prevImages, ...newImagesArray]);
    // Actualizar el valor de imagenes en formik
    formik.setFieldValue("imagen", [
      ...formik.values.imagen,
      ...newImagesArray,
    ]);
  };

  // removeImage es para borrar imágenes desde la vista previa
  const removeImage = (index) => {
    // Actualizar el valor de imagenes en el estado global
    setImages((prevImages) => prevImages.filter((_, i) => i !== index));
    // Actualizar el valor de imagenes en formik
    formik.setFieldValue(
      "imagen",
      formik.values.imagen.filter((_, i) => i !== index)
    );
  };

  // es la función que se ejecuta cuando hacemos el submit de nuestro formulario
  const onSubmit = async (values) => {
    const imagesUrls = [];

    // por cada imagen se crea una instancia de FormData para enviar el archivo a cloudinary
    for (let i = 0; i < images.length; i++) {
      try {
        const data = new FormData();
        data.append("file", images[i]);
        data.append("upload_preset", "ilxmjryu");

        const response = await axios.post(
          `https://api.cloudinary.com/v1_1/djd7b0upe/image/upload`,
          data
        );
        imagesUrls.push(response.data.secure_url);
      } catch (error) {
        console.log(error);
      }
    }

    // se hace el dispatch para crear el producto
    dispatch(postProducto({ ...values, imagen: imagesUrls }));
  };

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

  

  const formik = useFormik({
    initialValues: {
      nombre: "",
      marca: "",
      modelo: "",
      precio: "",
      genero: "masculino",
      imagen: [],
      estado: true,
      stock: {
        36: 0,
        36.5: 0,
        37: 0,
        37.5: 0,
        38: 0,
        38.5: 0,
        39: 0,
        39.5: 0,
        40: 0,
        40.5: 0,
        41: 0,
        41.5: 0,
        42: 0,
        42.5: 0,
        43: 0,
        43.5: 0,
        44: 0,
        44.5: 0,
        45: 0,
        45.5: 0,
        46: 0,
      },
    },
    validate,
    onSubmit: (values) => onSubmit(values),
  });

  return (
    <form onSubmit={formik.handleSubmit} className={styles.form}>
      <h2>Crear un producto</h2>
      <div className={styles.princ}>
        <div className={styles.inputs}>
          <div className="mb-4">
            <label
              htmlFor="nombre"
              className="block text-sm font-medium text-gray-600"
            >
              Nombre
            </label>
            <input
              id="nombre"
              name="nombre"
              type="text"
              onChange={formik.handleChange}
              value={formik.values.nombre}
              onBlur={formik.handleBlur}
              className="w-full p-2 border border-gray-300 rounded"
            />
            {formik.touched.nombre && formik.errors.nombre && (
              <div className="text-red-500 text-sm mt-1">
                {formik.errors.nombre}
              </div>
            )}
          </div>

          <div className="mb-4">
            <label
              htmlFor="marca"
              className="block text-sm font-medium text-gray-600"
            >
              Marca
            </label>
            <input
              id="marca"
              name="marca"
              type="text"
              onChange={formik.handleChange}
              value={formik.values.marca}
              onBlur={formik.handleBlur}
              className="w-full p-2 border border-gray-300 rounded"
            />
            {formik.touched.marca && formik.errors.marca && (
              <div className="text-red-500 text-sm mt-1">
                {formik.errors.marca}
              </div>
            )}
          </div>

          <div className="mb-4">
            <label
              htmlFor="modelo"
              className="block text-sm font-medium text-gray-600"
            >
              Modelo
            </label>
            <input
              id="modelo"
              name="modelo"
              type="text"
              onChange={formik.handleChange}
              value={formik.values.modelo}
              onBlur={formik.handleBlur}
              className="w-full p-2 border border-gray-300 rounded"
            />
            {formik.touched.modelo && formik.errors.modelo && (
              <div className="text-red-500 text-sm mt-1">
                {formik.errors.modelo}
              </div>
            )}
          </div>

          <div className="mb-4">
            <label
              htmlFor="precio"
              className="block text-sm font-medium text-gray-600"
            >
              Precio
            </label>
            <input
              id="precio"
              name="precio"
              type="number"
              onChange={formik.handleChange}
              value={formik.values.precio}
              onBlur={formik.handleBlur}
              className="w-full p-2 border border-gray-300 rounded"
            />
            {formik.touched.precio && formik.errors.precio && (
              <div className="text-red-500 text-sm mt-1">
                {formik.errors.precio}
              </div>
            )}
          </div>

          <div className="mb-4">
            <label
              htmlFor="genero"
              className="block text-sm font-medium text-gray-600"
            >
              Género
            </label>
            <select
              name="genero"
              id="genero"
              onChange={formik.handleChange}
              value={formik.values.genero}
              className="w-full p-2 border border-gray-300 rounded"
            >
              <option value="Masculino">Masculino</option>
              <option value="femenino">Femenino</option>
              <option value="unisex">Unisex</option>
            </select>
          </div>
        </div>

        <div className={`${styles.images} mb-4`}>
          <div
            onDrop={handleDrop}
            onDragOver={(event) => event.preventDefault()}
            className={`${styles.dropZone} border-dashed border-2 p-4 rounded`}
          >
            <p>Arrastra y suelta una o varias imágenes aquí</p>
          </div>

          <div>
            {images?.map((image, index) => (
              <div key={index} className="mt-2">
                <img
                  src={URL.createObjectURL(image)}
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

          {formik.touched.imagen && formik.errors.imagen && (
            <div className="text-red-500 text-sm mt-1">
              {formik.errors.imagen}
            </div>
          )}
        </div>

        <div className={`${styles.talles} mb-4`}>
          {talles.map((talle, index) => (
            <div key={index} className="flex items-center space-x-2">
              <span
                className="cursor-pointer text-blue-500"
                onClick={() => handleStock(talle, "-")}
              >
                -
              </span>
              <span>{talle}</span>
              <span
                className="cursor-pointer text-blue-500"
                onClick={() => handleStock(talle, "+")}
              >
                +
              </span>
              <span className="ml-2">
                Cantidad en stock: {formik.values.stock[talle]}
              </span>
            </div>
          ))}
        </div>
      </div>

      <button
        type="submit"
        className={`bg-blue-500 text-white px-4 py-2 rounded ${styles.button}`}
      >
        Submit
      </button>
    </form>
  );
};

export default CreateForm;
