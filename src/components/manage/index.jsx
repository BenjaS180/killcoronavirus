import React from "react";
import "./Manage.css"
import { Link } from "react-router-dom";
import Button from '@mui/material/Button';

function Manage(){
    return(
        <>
        <h1 className="h1welcome" > ADMINISTRANDO</h1>
        <Link to={`/dashboard`}>
          <Button variant="contained">Volver</Button>
        </Link>
        </>
    )
}

export default Manage;