import { Link } from "react-router-dom";
import Button from '@mui/material/Button';

import "./Navbarloged.css"



function Navbarloged() {
    return(
    <>
        <header className="navbar-header">
            <div className="navbar-left">
                <h2 className="navbar-heading">KILLCORONAVIRUS</h2>
            </div>
            <div className="navbar-right">
                <nav className="navbar-links">
                    <ul>
                        <li><Link to="/dashboard" className="navbar-link">Dashboard</Link></li>
                        <li><Link to="/medicamentos" className="navbar-link">Medicamentos</Link></li>
                        <li><Link to="/patient" className="navbar-link">Médicos</Link></li>
                        <li><Link to="/patient" className="navbar-link">Pacientes</Link></li>
                        <li><Link to="/generar-ficha" className="navbar-link">Ficha</Link></li>
                        <li><Link to="/" className="navbar-link">Salir</Link></li>
                    </ul>
                </nav>
            </div>
        </header>
    </>
    )
}

export default Navbarloged;