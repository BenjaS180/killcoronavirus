import Typography from '@mui/material/Typography';
import { useNavigate } from "react-router-dom";
import Navbarloged from '../navbarloged';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Chip from '@mui/material/Chip';
import { Autocomplete } from '@mui/material';
import FichaImage from '../../assets/image5.png';

const medicamentos = [
  {
    nombre: "Ibuprofeno",
    cantidad: "20 tabletas",
    descripcion: "Antiinflamatorio no esteroideo (AINE) utilizado para aliviar el dolor y reducir la inflamación.",
    instruccionesUso: "Tomar una tableta cada 8 horas con alimentos.",
    contraindicaciones: "No utilizar en caso de alergia al ibuprofeno o úlceras estomacales.",
    fabricante: "Farmacia XYZ"
  },
  {
    nombre: "Paracetamol",
    cantidad: "30 tabletas",
    descripcion: "Analgésico y antipirético utilizado para reducir la fiebre y aliviar el dolor leve a moderado.",
    instruccionesUso: "Tomar una o dos tabletas cada 4-6 horas según sea necesario.",
    contraindicaciones: "Evitar el consumo excesivo y no combinar con alcohol para evitar daño hepático.",
    fabricante: "Laboratorios ABC"
  },
  {
    nombre: "Amoxicilina",
    cantidad: "15 cápsulas",
    descripcion: "Antibiótico utilizado para tratar infecciones bacterianas, como infecciones respiratorias y del oído.",
    instruccionesUso: "Tomar una cápsula cada 8 horas con agua, incluso si los síntomas mejoran antes.",
    contraindicaciones: "No utilizar si se tiene alergia a la penicilina.",
    fabricante: "Pharma Solutions"
  },
  {
    nombre: "Loratadina",
    cantidad: "10 tabletas",
    descripcion: "Antihistamínico utilizado para aliviar los síntomas de alergias, como la picazón y la congestión nasal.",
    instruccionesUso: "Tomar una tableta diaria con o sin alimentos.",
    contraindicaciones: "Evitar el consumo con jugo de toronja y no combinar con alcohol.",
    fabricante: "MediCare Labs"
  },
  {
    nombre: "Omeprazol",
    cantidad: "14 cápsulas",
    descripcion: "Inhibidor de la bomba de protones (IBP) utilizado para tratar el reflujo ácido y úlceras gástricas.",
    instruccionesUso: "Tomar una cápsula diaria antes del desayuno.",
    contraindicaciones: "No utilizar por más de 14 días sin consultar a un médico.",
    fabricante: "Health Innovations"
  },
  {
    nombre: "Aspirina",
    cantidad: "24 tabletas",
    descripcion: "Analgésico y antiinflamatorio utilizado para aliviar el dolor y reducir la fiebre.",
    instruccionesUso: "Tomar una o dos tabletas cada 4-6 horas con alimentos.",
    contraindicaciones: "No utilizar en caso de úlceras estomacales o alergia a la aspirina.",
    fabricante: "Pharma Solutions"
  },
  {
    nombre: "Dipirona",
    cantidad: "12 tabletas",
    descripcion: "Analgésico y antipirético utilizado para aliviar el dolor y reducir la fiebre.",
    instruccionesUso: "Tomar una tableta cada 6-8 horas con agua.",
    contraindicaciones: "Evitar su uso en casos de trastornos de la sangre y alergia a la dipirona.",
    fabricante: "Laboratorios ABC"
  },
  {
    nombre: "Ciprofloxacino",
    cantidad: "20 tabletas",
    descripcion: "Antibiótico fluoroquinolona utilizado para tratar infecciones bacterianas.",
    instruccionesUso: "Tomar una tableta cada 12 horas con agua, no combinar con productos lácteos.",
    contraindicaciones: "Evitar su uso en niños y adolescentes en desarrollo.",
    fabricante: "MediCare Labs"
  },
  {
    nombre: "Desloratadina",
    cantidad: "15 tabletas",
    descripcion: "Antihistamínico utilizado para aliviar los síntomas de alergias, como la picazón y el lagrimeo.",
    instruccionesUso: "Tomar una tableta diaria con o sin alimentos.",
    contraindicaciones: "No utilizar en caso de insuficiencia hepática o alergia al principio activo.",
    fabricante: "Farmacia XYZ"
  },
  {
    nombre: "Pantoprazol",
    cantidad: "10 cápsulas",
    descripcion: "Inhibidor de la bomba de protones (IBP) utilizado para reducir la producción de ácido gástrico.",
    instruccionesUso: "Tomar una cápsula diaria antes de la primera comida del día.",
    contraindicaciones: "Evitar su uso prolongado sin supervisión médica.",
    fabricante: "Health Innovations"
  },
];

import "./Ficha.css"

function Ficha() {
    const navigate = useNavigate();

  return (
    <>
      <Navbarloged/>
      <main className="ficha-container">
        <div>
          <Typography className="ficha-container__header" variant="subtitle">
            Módulo de Ficha
          </Typography>
        </div>
        <div className='ficha-container__form'>
          <div className='ficha_container__form--person'>
          <TextField 
            variant="standard"
            InputProps={{
              disableUnderline: true,
            }}
            className="ficha-container__input" placeholder='Nombre paciente'
          />
          <TextField 
            variant="standard"
            InputProps={{
              disableUnderline: true,
            }}
            className="ficha-container__input" placeholder='Apellido Paciente'
          />
          <TextField 
            variant="standard"
            InputProps={{
              disableUnderline: true,
            }}
            className="ficha-container__input" placeholder='RUT'
          />
          </div>
          <div className='ficha_container__form--person'>
            <TextField 
              variant="standard"
              disabled
              InputProps={{
                disableUnderline: true,
              }}
              className="ficha-container__input--disabled" placeholder='Médico Tratante'
            />
            <TextField 
              variant="standard"
              disabled
              InputProps={{
                disableUnderline: true,
              }}
              className="ficha-container__input--disabled" placeholder='DD/MM/AAAA'
            />
            <div className='ficha-container__meds'>
              <Autocomplete
                multiple
                id="tags-standard"
                options={medicamentos}
                getOptionLabel={(option) => option.nombre}
                defaultValue={[medicamentos[0]]}
                renderInput={(params) => (
                  <TextField
                    {...params}
                    variant="standard"
                    label="Selecciona los medicamentos"
                    placeholder="Medicamentos"
                  />
                )}
              />
            </div>
          </div>
          <div className='ficha_container__form--person'>
          <TextField
            id="outlined-multiline-static"
            label="Diagnóstico"
            multiline
            rows={4}
            variant="standard"
            InputProps={{
              disableUnderline: true,
            }}
            className="ficha-container__input-area"
            placeholder='Escribe el diagnóstico aquí...'
          />
          <TextField
            id="outlined-multiline-static"
            label="Notas Médicas"
            multiline
            variant="standard"
            InputProps={{
              disableUnderline: true,
            }}
            rows={4}
            className="ficha-container__input-area"
            placeholder='Escribe notas médicas aquí...'
          />
          </div>
        </div>
        <div className='ficha-container__bottom'>
          <img className="ficha_container__image" src={FichaImage} alt="Landing Illustration" />
          <Button variant='outlined' onClick={() => navigate("/dashboard")}>
              Generar ficha
          </Button>
        </div>
      </main>
    </>
  );
}

export default Ficha;