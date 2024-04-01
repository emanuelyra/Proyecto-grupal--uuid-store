import { useFormik } from "formik";
import validate from "./validate";
import styles from "./DireccionDeEnvio.module.scss";

const DireccionDeEnvio = ({ userBuyData, setUserBuyData, setView }) => {
  const userJSON = window.localStorage.getItem("loggedUser");
  const user = JSON.parse(userJSON);

  const actualFormJSON = window.localStorage.getItem("actualForm");
  const actualForm = JSON.parse(actualFormJSON);

  const handleSubmitAndView = (values) => {
    setUserBuyData((actualState) => {
      return { ...actualState, ...values };
    });

    window.localStorage.setItem(
      "actualForm",
      JSON.stringify({ ...userBuyData, ...values })
    );

    setView((actualView) => actualView + 1);
  };

  const formik = useFormik({
    initialValues: {
      provincia: actualForm.provincia
        ? actualForm.provincia
        : user.provincia
        ? user.provincia
        : "",
      localidad: actualForm.localidad
        ? actualForm.localidad
        : user.localidad
        ? user.localidad
        : "",
      direccion: actualForm.direccion
        ? actualForm.direccion
        : user.direccion
        ? user.direccion
        : "",
      codigoPostal: actualForm.codigoPostal
        ? actualForm.codigoPostal
        : user.codigoPostal
        ? user.codigoPostal
        : "",
    },
    validate,
    onSubmit: (values) => handleSubmitAndView(values),
  });

  return (
    <form className={styles.container} onSubmit={formik.handleSubmit}>
      <h2>DATOS DE ENVÍO</h2>
      <div className={styles.inputs}>
        <div className={styles.princ}>
          <div className={styles.input}>
            <label htmlFor="direccion"> Direccion de entrega </label>
            <input
              type="text"
              id="direccion"
              name="direccion"
              value={formik.values.direccion}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.touched.direccion && formik.errors.direccion && (
              <span className={styles.error}> {formik.errors.direccion} </span>
            )}
          </div>

          <div className={styles.input}>
            <label htmlFor="localidad"> Localidad </label>
            <input
              type="text"
              id="localidad"
              name="localidad"
              value={formik.values.localidad}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
          </div>

          {formik.touched.localidad && formik.errors.localidad && (
            <span className={styles.error}> {formik.errors.localidad} </span>
          )}
        </div>

        <div className={styles.sec}>
          <div className={styles.input}>
            <label htmlFor="provincia"> Provincia </label>
            <input
              type="text"
              id="provincia"
              name="provincia"
              value={formik.values.provincia}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />

            {formik.touched.provincia && formik.errors.provincia && (
              <span className={styles.error}> {formik.errors.provincia} </span>
            )}
          </div>

          <div className={styles.input}>
            <label htmlFor="codigoPostal"> Código postal </label>
            <input
              type="text"
              id="codigoPostal"
              name="codigoPostal"
              value={formik.values.codigoPostal}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />

            {formik.touched.codigoPostal && formik.errors.codigoPostal && (
              <span className={styles.error}>{formik.errors.codigoPostal}</span>
            )}
          </div>
        </div>
      </div>

      <button
        className="ml-2 bg-red-500 text-white p-2 rounded focus:outline-none hover:bg-red-700"
        type="submit"
      >
        Continuar
      </button>
    </form>
  );
};

export default DireccionDeEnvio;
