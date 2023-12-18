import Navbar from '../navbar/index';
import Typography from '@mui/material/Typography';
import LandingIllustration from '../../assets/illustration.png'

function Info () {
  return (
    <>
      <Navbar/>
      <div className="landing-container">
        <div className="landing-container__main">
          <Typography className="landing-container__title" variant="h1" gutterBottom>
            Nuestra historia
          </Typography>
          <Typography variant="subtitle1" gutterBottom>
            En KillCoronavirus, nuestro compromiso es proteger y fortalecer la salud global mediante soluciones innovadoras. Nuestra historia comienza con la determinación de un equipo apasionado de profesionales médicos y expertos en tecnología. Impulsados por la urgencia de combatir la pandemia del COVID-19, decidimos unir fuerzas y crear una aplicación que brinde información confiable, recursos esenciales y apoyo continuo a quienes luchan contra el virus.
          </Typography>
          <Typography variant="subtitle1" gutterBottom>
            Desde entonces, hemos evolucionado para convertirnos en una plataforma integral que aborda los desafíos de la salud pública, priorizando la prevención, la conciencia y el acceso rápido a la atención médica. KillCoronavirus es más que una aplicación; es un compromiso con la seguridad, la solidaridad y el bienestar colectivo.
          </Typography>
        </div>
        <div className='landing-container__second'>
          <img className="landing-container__image" src={LandingIllustration} alt="Landing Illustration" />
        </div>
      </div>
    </>
  );
}

export default Info;