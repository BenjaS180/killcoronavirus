import React from "react";
import "./Navbar.css"
import { Link } from "react-router-dom";



function Navbar() {
    return(
    <>
    <div className="container-navbar">
        <h2 className="h2-navbar" >KILLCORONAVIRUS</h2>
        <div>
        <Link className="navbar-link" to={"/"} ><b>Inicio</b></Link>
        <Link className="navbar-link" to={"/manage"} >Administrar</Link>
        <Link className="navbar-link" to={"/patient"} >Pacientes</Link>
        <Link className="navbar-link" to={"/records"} >Fichas</Link>
        <Link className="navbar-link" to={"/"}>Salir</Link>
        </div>
    </div>
    </>
    )
}

export default Navbar;