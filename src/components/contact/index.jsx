import Navbar from '../navbar/index';
import { Link } from "react-router-dom";
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

function Contact() {
  return (
    <>
      <Navbar/>
      <div className="landing-container">
        <div className="landing-container__main">
          <Typography className="landing-container__title" variant="h1" gutterBottom>
            Contáctanos!
          </Typography>
          <Typography variant="subtitle1" gutterBottom>
            En KillCoronavirus, nos preocupamos profundamente por tu bienestar. Si tienes preguntas, inquietudes o simplemente necesitas apoyo, estamos aquí para ayudarte. ¡Tu salud es nuestra prioridad!
            No dudes en ponerte en contacto con nosotros por correo electrónico. Nuestro equipo médico está listo para responder a todas tus consultas y proporcionarte la información más actualizada sobre el COVID-19.
          </Typography>
          <Typography variant="subtitle1" gutterBottom>
            📧 Correo electrónico: info@killcoronavirus.com
            Recuerda, estamos en esto juntos. ¡Mantente seguro y saludable con KillCoronavirus!
          </Typography>
          <a href="info@killcoronavirus.com">Send email
            <Button variant="contained">
              Enviar mail
            </Button>
          </a>
        </div>
        <div className='landing-container__second'>
        </div>
      </div>
    </>
  );
}

export default Contact;