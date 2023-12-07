import React from "react";
import { Link } from "react-router-dom";
import Button from '@mui/material/Button';
import Navbar from '../navbar/index';
import "./Records.css"

function Records(){
    return(
        <>
        <header>
          <Navbar/>
        </header>
          <main>
          <h2 className="initial-h2"></h2>
            <section>
              
            </section>
        <div className="button-container" >
        <Link to={`/dashboard`}>
          <Button variant="contained">Volver</Button>
        </Link>
        </div>
        </main>
        </>
    )
}

export default Records;