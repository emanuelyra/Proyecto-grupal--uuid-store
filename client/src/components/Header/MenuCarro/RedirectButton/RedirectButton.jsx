import { useNavigate } from "react-router-dom";

const RedirectButton = ({ mostrarUser, mostrarCarro }) => {

    const navigate = useNavigate();

    const userJson = window.localStorage.getItem('loggedUser');

    const handleRedirect = () => {
        if(userJson){
            navigate('/confirmacionDeCompra');
            mostrarCarro();
        }else{
            mostrarUser();
            mostrarCarro();
        }
    }

    return (
        
        <button className="w-full bg-gray-800 text-white py-2 rounded-md hover:bg-gray-700 mt-2" onClick={handleRedirect}>
            Confirmar compra
        </button>
    )
}

export default RedirectButton;