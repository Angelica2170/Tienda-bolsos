import React from 'react'
import { Link } from "react-router-dom";
import Portada from "images/inicio1.jpg";

export default function Inicio() {
    return (
        <div className="inicio">   
            
            <Link to="/productos">
            <h1>Productos</h1>
            </Link>
            <img src={Portada} alt=""/>
        </div>
    )
}
