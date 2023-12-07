import { useState } from 'react'
import { Link } from "react-router-dom";
import Button from '@mui/material/Button';
import Navbar from '../navbar/index';
import "./Dashboard.css"


function Dashboard() {
  const [count, setCount] = useState(0);

  const DashboardItem = ({ title,imageUrl, description }) => (
    <div className="dashboard-item">
      <img src={imageUrl} alt="Dashboard Item" />
      <h2 className="item-title">{title}</h2>
      <p className="description-item" >{description}</p>
    </div>
  );

  const dashboardItems = [
    {title:'Buscar Paciente' ,imageUrl: 'imagen1.jpg', description: 'Ingresar a la plataforma de busqueda y administracion de pacientes en el centro medico' },
    {title:'Examenes y medicinas' ,imageUrl: 'imagen2.jpg', description: 'Ingresar a la base de datos de procedimientos y medicamentos del centro medico' },
    {title:'Generar Ficha' ,imageUrl: 'imagen3.jpg', description: 'Generar y administrar fichas medicas de pacientes del centro medico' },
    {title:'Detalles de Medicos' ,imageUrl: 'imagen4.jpg', description: 'Gestionar perfiles de medicos tratantes en el centro medico' },
    {title:'Especialidades' ,imageUrl: 'imagen5.jpg', description: 'Administrar especialidades medicas disponibles en el centro medico' },
    {title:'Historial Medico' ,imageUrl: 'imagen6.jpg', description: 'Listado e historial medico de pacientes ingresados en la plataforma' },
  ];

  return (
    <>
      <header>
        <Navbar/>
      </header>
      <main>
        <a href="https://vitejs.dev" target="_blank" rel="noopener noreferrer">
        </a>
        <h2 className="hometitle">Inicio / Dashboard</h2>
        <section className="dashboard">
          {dashboardItems.map((item, index) => (
            <DashboardItem key={index} title={item.title} imageUrl={item.imageUrl} description={item.description} />
          ))}
        </section>
        <div className="button-container">
          <Link to={`/`}>
            <Button variant="contained">Mostrar más</Button>
          </Link>
        </div>
      </main>
    </>

  );
}

export default Dashboard;