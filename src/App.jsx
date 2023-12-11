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
            Welcome to KillCoronavirus
          </Typography>
          <Typography variant="subtitle1" gutterBottom>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua
          </Typography>
          <Link to={`/dashboard`}>
            <Button variant="contained">
              Consult Today
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
