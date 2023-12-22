import React, { useContext} from "react";
import { DataContext } from "context/DataProvider";
//import { Link } from "react-router-dom";
import Bolso from "images/logo.png";
import { useNavigate } from "react-router-dom";



export function Header() {
  const navigate = useNavigate();
  const value = useContext(DataContext);
  const [carrito] = value.carrito;
  const [menu, setMenu] = value.menu;


  const toogleMenu = () =>{
    setMenu(!menu)
  }
 

  return (
    <header>
      <div className="menu">
      <box-icon name="menu"></box-icon>
      </div>
      <button
        onClick={() => {
          navigate("/");
        }}
      >
        
      </button>
      <div className="logo">
        <img src={Bolso} alt="Bolso" width="300" />
      </div>

      <ul>
        <li>
        <button
        onClick={() => {
          navigate("/");
        }}
      >
        Inicio
      </button>
        </li>
        <li>
        <button
        onClick={() => {
          navigate("/productos");
        }}
      >
        Productos
      </button>
        </li>
      </ul>
      <div className="cart" onClick={toogleMenu}>
        <box-icon name="cart"></box-icon>
        <span className="item__total"> {carrito.length} </span>
      </div>
      <button
        onClick={() => {
          navigate("/productos");
        }}
      ></button>
    </header>
  );
};
