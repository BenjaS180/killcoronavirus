import { Link } from "react-router-dom";
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import LandingIllustration from './assets/illustration.png'
import Navbar from './components/navbar';
import Footer from './components/footer'

import './App.css'

function App() {
  return (
    <>
      <Navbar/>
      <div className="landing-container">
        <div className="landing-container__main">
          <Typography className="landing-container__title" variant="h1" gutterBottom>
            Bienvenido a KillCoronavirus
          </Typography>
          <Typography variant="subtitle1" gutterBottom>
          Somos una plataforma médica diseñada para gestionar y resolver todas las necesidades de tu centro médico.
          Simplificamos la gestión de tu centro médico, desde citas hasta recursos, permitiéndote enfocarte en la atención médica de calidad. 
          ¡Con soluciones intuitivas, nos encargamos de la tecnología para impulsar tu centro!
          </Typography>
          <Link to={`/login`}>
            <Button variant="contained">
              Empezar ahora
            </Button>
          </Link>
        </div>
        <div className='landing-container__second'>
          <img className="landing-container__image" src={LandingIllustration} alt="Landing Illustration" />
        </div>
      </div>
      <Footer/>
    </>
  )
}

export default App;
