import { Typography, TextField, Button, Box} from "@mui/material";
import { useState } from "react";
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import Modal from '@mui/material/Modal';
import SearchIcon from '@mui/icons-material/Search';
import "./Patient.css"

import Navbarloged from "../navbarloged";

const names = [
  "Anderson Antonio Nuñez Toro",
  "Maria Luisa Gomez Martinez",
  "Carlos Alberto Martinez Ramirez",
  "Ana Maria Perez Hernandez",
  "Pedro Jose Gonzalez Diaz",
  "Laura Sofia Hernandez Perez",
  "Luis Angel Diaz Fernandez",
  "Isabel Maria Castro Lopez",
  "Miguel Antonio Fernandez Perez",
  "Carmen Rosa Lopez Martinez",
];

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '60%',
  height: '50%',
  bgcolor: 'background.paper',
  boxShadow: 24,
  p: 4,
  'border-radius': 12,
};

function Patient(){
  const [filteredNames, setFilteredNames] = useState(names);
  const [searchValue, setSearchValue] = useState('');
  const [open, setOpen] = useState(false);
  const [diagnostico, setDiagnostico] = useState('COVID-19 y cuadro de infección');
  const [notas, setNotas] = useState('Debe tomar antibióticos e hidratarse continuamente');
  const [rut, setRut] = useState('25974090-4');


  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleSearchChange = (event) => {
    const value = event.target.value;
    setSearchValue(value);

    const filtered = names.filter((name) =>
      name.toLowerCase().includes(value.toLowerCase())
    );
    setFilteredNames(filtered);
  };

  const handleDelete = (nameToDelete) => {
    const updatedNames = filteredNames.filter((name) => name !== nameToDelete);
    setFilteredNames(updatedNames);
  };

    return(
        <>
        <Navbarloged/>
        <div className="patient-container">
          <div className="patient-container__top">
            <Typography className="ficha-container__header" variant="subtitle">
              Búsqueda de Paciente
            </Typography>
            <TextField 
                variant="standard"
                InputProps={{
                  disableUnderline: true,
                }}
                placeholder="Buscar paciente..."
                className="patient-container__search"
                value={searchValue}
                onChange={handleSearchChange}
            />
              <SearchIcon/>
          </div>
          <div className="patient-container__list">
          {filteredNames.map((fullName, index) => {
            return (
              <div key={index} className="patient-container__list--info">
                <TextField 
                  variant="standard"
                  disabled
                  value={fullName}
                  InputProps={{
                    disableUnderline: true,
                  }}
                  className="patient-container__item"
                />
                <Button variant="contained" onClick={handleOpen}>
                  <EditIcon />
                </Button>
                <Button 
                  variant="contained" 
                  color="error"
                  onClick={() => handleDelete(fullName)}
                >
                  <DeleteIcon />
                </Button>
              </div>
            );
          })}
          </div>
        </div>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <div className="patient-container__details">
              <div>
                <Typography className="ficha-container__header" variant="subtitle">
                  Detalle de Paciente
                </Typography>
              </div>
              <div className='ficha-container__form'>
                <div className='ficha_container__form--person'>
                <TextField 
                  variant="standard"
                  InputProps={{
                    disableUnderline: true,
                  }}
                  value="Anderson Antonio"
                  className="ficha-container__input" placeholder='Nombre paciente'
                />
                <TextField 
                  variant="standard"
                  InputProps={{
                    disableUnderline: true,
                  }}
                  value="Nuñez Toro"
                  className="ficha-container__input" placeholder='Apellido Paciente'
                />
                <TextField 
                  variant="standard"
                  InputProps={{
                    disableUnderline: true,
                  }}
                  value={rut}
                  onChange={(e) => setRut(e.target.value)}
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
                  value={diagnostico}
                  onChange={(e) => setDiagnostico(e.target.value)}
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
                  value={notas}
                  onChange={(e) => setNotas(e.target.value)}
                  rows={4}
                  className="ficha-container__input-area"
                  placeholder='Escribe notas médicas aquí...'
                />
                </div>
                <div className='ficha-container__save'>
                  <Button variant='outlined' onClick={handleClose}>
                      Guardar
                  </Button>
                </div>
              </div>
            </div>
          </Box>
        </Modal>
        </>
    )
}

export default Patient;