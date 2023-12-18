import React from "react";
import { Link } from "react-router-dom";
import Button from '@mui/material/Button';

import "./Navbar.css"



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
                        <li><Link to="/nosotros" className="navbar-link">Nosotros</Link></li>
                        <li><Link to="/contacto" className="navbar-link">Contacto</Link></li>
                        <li>
                            <Link to={`/login`}>
                                <Button variant="contained">
                                    Log In
                                </Button>
                            </Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    </>
    )
}

export default Navbar;