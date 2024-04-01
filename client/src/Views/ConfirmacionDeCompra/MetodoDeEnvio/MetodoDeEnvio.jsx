import { useFormik } from "formik";
import styles from "./MetodoDeEnvio.module.scss";

const MetodoDeEnvio = ({ userBuyData, setUserBuyData, setView }) => {
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
      metodoDeEnvio: actualForm.metodoDeEnvio ? actualForm.metodoDeEnvio : "",
    },
    onSubmit: (values) => handleSubmitAndView(values),
  });

  return (
    <form className={styles.container} onSubmit={formik.handleSubmit}>
      <h2>ELIJA UN METODO DE ENVIO</h2>
      <label htmlFor="oca">
        <input
          type="radio"
          name="metodoDeEnvio"
          id="oca"
          value="OCA"
          onChange={formik.handleChange}
          checked={formik.values.metodoDeEnvio === "OCA"}
        />
        <span>Oca</span>
      </label>

      <label htmlFor="correoArgentino">
        <input
          type="radio"
          name="metodoDeEnvio"
          id="correoArgentino"
          value="Correo Argentino"
          onChange={formik.handleChange}
          checked={formik.values.metodoDeEnvio === "Correo Argentino"}
        />
        <span>Correo Argentino</span>
        
      </label>

      <button
        className="ml-2 bg-red-500 text-white p-2 rounded focus:outline-none hover:bg-red-700"
        type="submit"
      >
        Confirmar
      </button>
    </form>
  );
};

export default MetodoDeEnvio;
