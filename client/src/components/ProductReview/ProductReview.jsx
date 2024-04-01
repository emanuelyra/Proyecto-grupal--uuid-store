import { useFormik } from "formik";
import styles from "./ProductReview.module.scss";
import { useSelector, useDispatch } from "react-redux";
import { postComentario } from "../../redux/actions";
import validate from "./validate";
import { v4 as uuidv4 } from "uuid";

const ProductReview = ({ id }) => {
  const user = useSelector((state) => state.actualUser);
  const dispatch = useDispatch();

  const onSubmit = (values) => {
    const usuario = `${user.nombre} ${user.apellido}`;
    const userID = user.id;
    const uuid = uuidv4();
    const productId = id;

    const comment = { ...values, usuario, userID, productId, uuid };
    dispatch(postComentario({ id, comment }));
  };

  const formik = useFormik({
    initialValues: {
      puntuacion: 0,
      comentario: "",
    },
    validate,
    onSubmit: (values) => onSubmit(values),
  });

  const handleRating = (value) => {
    formik.setFieldValue("puntuacion", value);
  };

  return (
    <form
      onSubmit={formik.handleSubmit}
      className="flex flex-col max-w-7xl mx-auto mt-8 p-4 bg-white rounded-md shadow-md"
    >
      <h2 className="text-2xl font-bold mb-4">
        Deja tu comentario y puntuación
      </h2>
      <div className={`${styles.commentario} `}>
        <div className={`mb-4`}>
          <label
            htmlFor="comentario"
            className="block text-sm font-medium text-gray-600"
          >
            Comentario:
          </label>
          <textarea
            id="comentario"
            name="comentario"
            value={formik.values.comentario}
            onChange={formik.handleChange}
            rows="4"
            className={`mt-1 p-2 w-full border rounded-md ${styles.textarea}`}
          ></textarea>
          {formik.touched.comentario && formik.errors.comentario && (
            <div className={styles.error}> {formik.errors.comentario} </div>
          )}
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-600">
            Puntuación:
          </label>
          <div>
            {[1, 2, 3, 4, 5].map((value) => (
              <span
                onClick={() => handleRating(value)}
                key={value}
                className={`${styles.estrella} ${
                  value <= formik.values.puntuacion
                    ? styles.estrellaA
                    : styles.estrellaN
                }`}
              >
                ★
              </span>
            ))}
          </div>
        </div>

        <button
          type="submit"
          className="h-14 px-6 py-2 font-semibold rounded-xl bg-red-500 hover:bg-red-400 text-white"
        >
          Enviar comentario
        </button>
      </div>
    </form>
  );
};

export default ProductReview;
