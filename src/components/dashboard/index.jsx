import { Link } from "react-router-dom";
import Typography from '@mui/material/Typography';
import Navbar from '../navbar/index';
import TroubleshootIcon from '@mui/icons-material/Troubleshoot';
import MedicationIcon from '@mui/icons-material/Medication';
import BadgeIcon from '@mui/icons-material/Badge';
import ReceiptLongIcon from '@mui/icons-material/ReceiptLong';
import MedicalServicesIcon from '@mui/icons-material/MedicalServices';
import Tracking from '@mui/icons-material/Poll';

import "./Dashboard.css"

function Dashboard() {

  const DashboardItem = ({ title, link, icon, description }) => (
    <Link to={link}>
      <div className="dashboard-item">
        {icon}
        <h2 className="item-title">{title}</h2>
        <p className="description-item" >{description}</p>
      </div>
    </Link>
  );

  const dashboardItems = [
    {title:'Buscar Paciente', link: "/patient", icon: <TroubleshootIcon/> , description: 'Ingresar a la plataforma de busqueda y administracion de pacientes en el centro medico' },
    {title:'Examenes y medicinas', link: "/", icon: <MedicationIcon/>, description: 'Ingresar a la base de datos de procedimientos y medicamentos del centro medico' },
    {title:'Generar Ficha', link: "/", icon: <BadgeIcon/>, description: 'Generar y administrar fichas medicas de pacientes del centro medico' },
    {title:'Detalles de Medicos', link: "/manage", icon: <ReceiptLongIcon/>, description: 'Gestionar perfiles de medicos tratantes en el centro medico' },
    {title:'Especialidades' , link: "/",  icon: <MedicalServicesIcon/>, description: 'Administrar especialidades medicas disponibles en el centro medico' },
    {title:'Historial Medico' , link: "/records",  icon: <Tracking/>, description: 'Listado e historial medico de pacientes ingresados en la plataforma' },
  ];

  return (
    <>
      <Navbar/>
      <main className="dashboard-container">
        <Typography variant="subtitle1" gutterBottom>
            Inicio / Dashboard
        </Typography>
        <section className="dashboard-container_cards">
          {dashboardItems.map((item, index) => (
            <DashboardItem key={index} title={item.title} link={item.link} icon={item.icon} description={item.description} />
          ))}
        </section>
      </main>
    </>
  );
}

export default Dashboard;