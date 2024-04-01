import { useFormik } from "formik";
import validate from "./validate";
import styles from "./UserData.module.scss";

const UserData = ({ userBuyData, setUserBuyData, setView }) => {
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
      nombre: user.nombre,
      apellido: user.apellido,
      email: user.email,
      dni: actualForm ? actualForm.dni : user.dni ? user.dni : "",
      telefono: actualForm
        ? actualForm.telefono
        : user.telefono
          ? user.telefono
          : "",
    },
    validate,
    onSubmit: (values) => handleSubmitAndView(values),
  });

  return (
    <form className={styles.container} onSubmit={formik.handleSubmit}>
      <h2>TUS DATOS PERSONALES</h2>

      <div className={styles.inputs}>
        <div className={styles.princ}>
          <div className={styles.input}>
            <label htmlFor="nombre"> Nombre </label>
            <input
              id="nombre"
              name="nombre"
              type="text"
              value={formik.values.nombre}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.touched.nombre && formik.errors.nombre && (
              <span className={styles.error}> {formik.errors.nombre} </span>
            )}
          </div>

          <div className={styles.input}>
            <label htmlFor="apellido"> Apellido </label>
            <input
              id="apellido"
              name="apellido"
              type="text"
              value={formik.values.apellido}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.touched.apellido && formik.errors.apellido && (
              <span className={styles.error}> {formik.errors.apellido} </span>
            )}
          </div>

          <div className={styles.input}>
            <label htmlFor="email"> Email </label>
            <input
              id="email"
              name="email"
              type="text"
              value={formik.values.email}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.touched.email && formik.errors.email && (
              <span className={styles.error}> {formik.errors.email} </span>
            )}
          </div>
        </div>

        <div className={styles.sec}>
          <div className={styles.input}>
            <label htmlFor="dni"> DNI </label>
            <input
              id="dni"
              name="dni"
              type="text"
              value={formik.values.dni}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.touched.dni && formik.errors.dni && (
              <span className={styles.error}> {formik.errors.dni} </span>
            )}
          </div>

          <div className={styles.input}>
            <label htmlFor="telefono"> Telefono </label>
            <input
              id="telefono"
              name="telefono"
              type="text"
              value={formik.values.telefono}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.touched.telefono && formik.errors.telefono && (
              <span className={styles.error}> {formik.errors.telefono} </span>
            )}
          </div>
        </div>
      </div>

      <button
        className={`ml-2 bg-red-500 text-white p-2 rounded focus:outline-none hover:bg-red-700`}
        type="submit"
      >
        Continuar
      </button>
    </form>
  );
};

export default UserData;
