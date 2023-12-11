import React from "react";
import "./Navbar.css"
import { Link } from "react-router-dom";



function Navbar() {
    return(
    <>
        <header className="navbar-header">
            <div className="navbar-left">
                {/* <img src={Logo} className="" alt="logo" /> */}
                <h2 className="navbar-heading">KILLCORONAVIRUS</h2>
            </div>
            <div className="navbar-right">
                <nav className="navbar-links">
                    <ul>
                        <li><Link to="/" className="navbar-link"><b>Inicio</b></Link></li>
                        <li><Link to="/manage" className="navbar-link">Administrar</Link></li>
                        <li><Link to="/patient" className="navbar-link">Pacientes</Link></li>
                        <li><Link to="/records" className="navbar-link">Fichas</Link></li>
                        <li><Link to="/" className="navbar-link">Salir</Link></li>
                    </ul>
                </nav>
            </div>
        </header>
    </>
    )
}

export default Navbar;