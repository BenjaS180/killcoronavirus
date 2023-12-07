import React from "react";
import "./Patient.css"
import { Link } from "react-router-dom";
import Button from '@mui/material/Button';
import Navbar from '../navbar/index';


function Patient(){
    return(
        <>
        <h1 className="h1welcome">PACIENTES</h1>
        <Link to={`/dashboard`}>
          <Button variant="contained">Volver</Button>
        </Link>
        </>
    )
}

export default Patient;