import { gapi } from "gapi-script";
import GoogleLogin from "react-google-login";

//hooks
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

function Autenticador({ mostrarUser, logInWhitGoogle, signUpWhitGoogle }) {
  const clientID =
    "752795540558-hqqmvr2p9bf1c4bkjmh33c3ui0rbdu81.apps.googleusercontent.com";
  const [user, setUser] = useState(
    JSON.parse(localStorage.getItem("loggedUser")) || {}
  );

  useEffect(() => {
    const start = () => {
      gapi.auth2.init({
        clientId: clientID,
      });
    };
    gapi.load("client:auth2", start);
  }, []);

  const dispatch = useDispatch();

  const onSuccess = (response) => {
    const fullName = response.profileObj.name;
    const partsName = fullName.split(" ");
    const nombre = partsName[0];
    const apellido = partsName.slice(1).join(" ");

    const userData = {
      nombre: nombre,
      apellido: apellido,
      email: response.profileObj.email,
      googleId: response.profileObj.googleId,
      imageUrl: response.profileObj.imageUrl,
      givenName: response.profileObj.givenName,
    };

    // localStorage.setItem("loggedUser", JSON.stringify(userData)); // Almacena los datos del usuario en el almacenamiento local
    setUser(userData);

    singUpUserInDb(userData);
  };

  const onFailure = () => {
    console.log("error al logear");
  };

  const singUpUserInDb = async (userData) => {
    logInWhitGoogle === undefined
      ? dispatch(signUpWhitGoogle(userData))
      : dispatch(logInWhitGoogle(userData));

    mostrarUser();
  };

  return (
    <>
      <div className="loginCont">
        <GoogleLogin
          clientId={clientID}
          onSuccess={onSuccess}
          onFailure={onFailure}
          cookiePolicy={"single_host_policy"}
          uxMode="redirect"
        />
      </div>

      {/* <div className={user ? "profile" : "hidden"}>
        <img src={user.imageUrl} alt="" />
        <h3>{user.nombre + " " + user.apellido}</h3>

      </div> */}
    </>
  );
}

export default Autenticador;
