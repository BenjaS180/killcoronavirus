import Navbarlogged from '../navbarloged';
import Typography from '@mui/material/Typography';
import { TextField } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { useState } from 'react';
import MedicamentosImage from '../../assets/medicamentos.png';

import './Medicamentos.css';

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

function Info () {
  const [filteredMedicamentos, setFilteredMedicamentos] = useState(medicamentos);
  const [searchValue, setSearchValue] = useState('');
  const [selectedMedicamento, setSelectedMedicamento] = useState({});
  console.log(selectedMedicamento)


  const handleSearchChange = (event) => {
    const value = event.target.value;
    setSearchValue(value);
    setFilteredMedicamentos(value);

    const filtered = medicamentos.filter((med) =>
      med.nombre.toLowerCase().includes(value.toLowerCase())
    );
    setFilteredMedicamentos(filtered);
  };

  const handleMedicamentoClick = (medName) => {
    console.log(medName)
    const matchingMedicamento = medicamentos.find(med => med.nombre === medName);

    if (matchingMedicamento) {
      setSelectedMedicamento(matchingMedicamento);
    }
  };

  return (
    <>
      <Navbarlogged/>
      <div className="landing-container medicamentos">
        <div className='medicamentos-left'>
          <div>
            <Typography variant="subtitle" gutterBottom>
              Listado de Medicamentos
            </Typography>
          </div>
          <div className='medicamentos_search'>
          <TextField 
            variant="standard"
            InputProps={{
              disableUnderline: true,
            }}
            placeholder="Buscar medicamento..."
            className="patient-container__search"
            value={searchValue}
            onChange={handleSearchChange}
          />
          <SearchIcon/>
          </div>
          <div>
          <div className="patient-container__list">
          {filteredMedicamentos.map((med, index) => {
            return (
              <div
              key={index} className="patient-container__list--info medicamentos__item">
                <TextField 
                  variant="standard"
                  onClick={() => handleMedicamentoClick(med.nombre)}
                  value={med.nombre}
                  InputProps={{
                    disableUnderline: true,
                  }}
                  className="patient-container__item"
                />
              </div>
            );
          })}
          </div>
          </div>
        </div>
        <div className='medicamentos-right'>
          <main className="ficha-container">
            <div>
              <Typography className="ficha-container__header" variant="subtitle">
                Detalles de Medicamentos
              </Typography>
            </div>
            <div className='ficha-container__form'>
              <div className='ficha_container__form--person'>
              <TextField 
                variant="standard"
                value={selectedMedicamento.nombre}
                InputProps={{
                  disableUnderline: true,
                }}
                className="ficha-container__input" placeholder='Nombre medicamento'
              />
              <TextField 
                variant="standard"
                InputProps={{
                  disableUnderline: true,
                }}
                value={selectedMedicamento.cantidad}
                className="ficha-container__input" placeholder='Cantidad'
              />
              <TextField 
                variant="standard"
                InputProps={{
                  disableUnderline: true,
                }}
                value={selectedMedicamento.fabricante}
                className="ficha-container__input" placeholder='RUT'
              />
              </div>
              <div className='ficha_container__form--person'>
              <TextField
                id="outlined-multiline-static"
                label="Descripción"
                multiline
                rows={4}
                variant="standard"
                value={selectedMedicamento.descripcion}
                InputProps={{
                  disableUnderline: true,
                }}
                className="ficha-container__input-area"
                placeholder='Escribe la descripción aquí...'
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
                value={selectedMedicamento.instruccionesUso}
                className="ficha-container__input-area"
                placeholder='Escribe las instrucciones de uso aquí...'
              />
              </div>
            </div>
            <div className='ficha-container__bottom'>
              <img className="ficha_container__image" src={MedicamentosImage} alt="Landing Illustration" />
            </div>
          </main>
        </div>
      </div>
    </>
  );
}

export default Info;