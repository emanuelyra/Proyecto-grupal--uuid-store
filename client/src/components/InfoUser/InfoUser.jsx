import { useState } from 'react';
import { useSelector } from "react-redux";
import ActualizarData from "../ActualizarData/ActualizarData"
import './infoUser2.css';

function InfoUser(){

    const user = useSelector((state) => state.actualUser);
    const [view, setView] = useState('')

    const handleView = (option) => {
        setView(option);
    }

    return(
        <div>
            <div className="info-container">
                <div className="card1">
                    <h1> Nombre: {user.nombre}</h1> 
                </div>
                <div className="card1">
                    <h1> Apellido: {user.apellido}</h1>
                </div>
                <div className="card1">
                    <h1> Email: {user.email}</h1>
                </div>
                <button className="btn" onClick={() => handleView('actualizar')}>ACTUALIZAR DATOS</button>
                
            </div>

            {view === 'actualizar' && (
                        <article className="contenedor2">
                            <h2> -MIS DATOS- </h2>
                            <ActualizarData />
                        </article>
                )}
        </div>
    )
}

export default InfoUser;