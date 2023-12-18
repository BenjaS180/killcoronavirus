import Typography from '@mui/material/Typography';
import { Link } from "react-router-dom";
import Navbar from '../navbar/index';
import LoginImage from '../../assets/image1.png'
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import PersonIcon from '@mui/icons-material/Person';


import "./Login.css"

function Login() {
  return (
    <>
      <Navbar/>
      <main className="login-container">
        <div className="login-container__form">
          <PersonIcon/>
          <TextField 
            variant="standard"
            InputProps={{
              disableUnderline: true,
            }}
            className="login-container__input" placeholder='Username'
          />
          <TextField 
            variant="standard"
            InputProps={{
              disableUnderline: true,
            }}
            type="password"
            className="login-container__input" 
            placeholder='Password'
          />
          <Link to={`/dashboard`}>
            <Button variant="contained">
                Log In
            </Button>
          </Link>
          <Typography variant="caption" display="block" gutterBottom>
              Registrarse
          </Typography>
        </div>
        <div>
          <img className="login-container__image" src={LoginImage} alt="Login Image" />
        </div>
      </main>
    </>
  );
}

export default Login;