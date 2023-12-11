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
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua
          </Typography>
          <Typography variant="caption" display="block" gutterBottom>
            ©KillCoronavirusLTD 2023. All rights reserved
          </Typography>
        </div>
        <div className='footer__second'>
          <div>
          <Typography variant="h6" gutterBottom>
            Company
          </Typography>
          <Typography variant="subtitle1" gutterBottom>
            About
          </Typography>
          <Typography variant="subtitle1" gutterBottom>
            Blog
          </Typography>
          </div>
          <div>
          <Typography variant="h6" gutterBottom>
            Region
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
            Help
          </Typography>
          <Typography variant="subtitle1" gutterBottom>
            Help Center
          </Typography>
          <Typography variant="subtitle1" gutterBottom>
            Contact Support
          </Typography>
          <Typography variant="subtitle1" gutterBottom>
            FAQ
          </Typography>
          </div>
        </div>
      </div>
    </>
  )
}

export default Footer;
