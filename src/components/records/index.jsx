import React from "react";
import { Link } from "react-router-dom";
import Button from '@mui/material/Button';


function Records(){
    return(
        <>
        <h1 className="h1welcome">Fichas</h1>
        <Link to={`/dashboard`}>
          <Button variant="contained">Volver</Button>
        </Link>
        </>
    )
}

export default Records;