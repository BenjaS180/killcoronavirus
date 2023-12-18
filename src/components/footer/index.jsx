import Typography from '@mui/material/Typography';
import './Footer.css'

function Footer() {
  return (
    <>
      <div className="footer">
        <div className="footer__main">
          <Typography variant="h6" gutterBottom>
            KillCoronavirus
          </Typography>
          <Typography variant="subtitle1" gutterBottom>
          Gestionamos tu centro médico, desde citas hasta recursos, permitiéndote enfocarte en la atención médica.
          </Typography>
          <Typography variant="caption" display="block" gutterBottom>
            ©KillCoronavirusLTD 2023. All rights reserved
          </Typography>
        </div>
        <div className='footer__second'>
          <div>
          <Typography variant="h6" gutterBottom>
            Organización
          </Typography>
          <Typography variant="subtitle1" gutterBottom>
            Nosotros
          </Typography>
          <Typography variant="subtitle1" gutterBottom>
            Blog
          </Typography>
          </div>
          <div>
          <Typography variant="h6" gutterBottom>
            Ubicaciones
          </Typography>
          <Typography variant="subtitle1" gutterBottom>
            Santiago Centro, RM.
          </Typography>
          <Typography variant="subtitle1" gutterBottom>
            Ñuñoa, RM.
          </Typography>
          <Typography variant="subtitle1" gutterBottom>
            Las Condes, RM.
          </Typography>
          </div>
          <div>
          <Typography variant="h6" gutterBottom>
            Ayuda
          </Typography>
          <Typography variant="subtitle1" gutterBottom>
            Centro de Soporte
          </Typography>
          <Typography variant="subtitle1" gutterBottom>
            Contacto de Soporte
          </Typography>
          <Typography variant="subtitle1" gutterBottom>
            Preguntas Frecuentes
          </Typography>
          </div>
        </div>
      </div>
    </>
  )
}

export default Footer;
