import { Typography, TextField, Button, Box} from "@mui/material";
import { useState } from "react";
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import Modal from '@mui/material/Modal';
import SearchIcon from '@mui/icons-material/Search';
import ReceiptLongIcon from '@mui/icons-material/ReceiptLong';

import Navbarloged from "../navbarloged";

const names = [
  { nombre: "Dr. Juan García", fecha: "12/05/1978", rut: "12345678-9" },
  { nombre: "Dra. María Rodríguez", fecha: "25/08/1985", rut: "23456789-0" },
  { nombre: "Dr. Carlos Pérez", fecha: "03/11/1972", rut: "34567890-1" },
  { nombre: "Dra. Laura Martínez", fecha: "18/02/1990", rut: "45678901-2" },
  { nombre: "Dr. Antonio López", fecha: "07/09/1988", rut: "56789012-3" },
  { nombre: "Dra. Isabel Gómez", fecha: "30/04/1982", rut: "67890123-4" },
  { nombre: "Dr. Francisco Hernández", fecha: "22/11/1975", rut: "78901234-5" },
  { nombre: "Dra. Ana Díaz", fecha: "14/06/1993", rut: "89012345-6" },
  { nombre: "Dr. Javier Ruiz", fecha: "02/09/1980", rut: "90123456-7" },
  { nombre: "Dra. Carmen Torres", fecha: "15/12/1987", rut: "01234567-8" }
];

const datosPersonales = [
  { nombre: 'Juan Pérez', fecha: '12/05/1990' },
  { nombre: 'María Rodríguez', fecha: '25/08/1985' },
  { nombre: 'Carlos Gutiérrez', fecha: '03/11/1978' },
  { nombre: 'Laura López', fecha: '18/02/1995' },
  { nombre: 'Pedro Martínez', fecha: '07/09/1982' },
  { nombre: 'Isabel Fernández', fecha: '30/04/1993' },
  { nombre: 'Laura López', fecha: '18/02/1995' },
  { nombre: 'Pedro Martínez', fecha: '07/09/1982' },
  { nombre: 'Isabel Fernández', fecha: '30/04/1993' },
  { nombre: 'Laura López', fecha: '18/02/1995' },
  { nombre: 'Pedro Martínez', fecha: '07/09/1982' },
  { nombre: 'Isabel Fernández', fecha: '30/04/1993' },
  { nombre: 'Laura López', fecha: '18/02/1995' },
  { nombre: 'Pedro Martínez', fecha: '07/09/1982' },
  { nombre: 'Isabel Fernández', fecha: '30/04/1993' },
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

function Records(){
  const [filteredNames, setFilteredNames] = useState(names);
  const [searchValue, setSearchValue] = useState('');
  const [open, setOpen] = useState(false);
  const [name, setName] = useState('');
  const [rut, setRut] = useState('9873080-2');
  const [fecha, setFecha] = useState('10/12/2014');


  const handleOpen = (fullname, rut, fecha) => {
    setOpen(true);
    setName(fullname)
    setRut(rut)
    setFecha(fecha)
  } 
  const handleClose = () => setOpen(false);

  const handleSearchChange = (event) => {
    const value = event.target.value;
    setSearchValue(value);

    const filtered = names.filter((med) =>
      med.nombre.toLowerCase().includes(value.toLowerCase())
    );
    setFilteredNames(filtered);
  };

    return(
        <>
        <Navbarloged/>
        <div className="patient-container">
          <div className="patient-container__top">
            <Typography className="ficha-container__header" variant="subtitle">
              Historial Médico
            </Typography>
            <TextField 
                variant="standard"
                InputProps={{
                  disableUnderline: true,
                }}
                placeholder="Buscar médico..."
                className="patient-container__search"
                value={searchValue}
                onChange={handleSearchChange}
            />
              <SearchIcon/>
          </div>
          <div className="patient-container__list">
          {filteredNames.map((medico, index) => {
            return (
              <div key={index} className="patient-container__list--info">
                <TextField 
                  variant="standard"
                  disabled
                  value={medico.nombre}
                  InputProps={{
                    disableUnderline: true,
                  }}
                  className="patient-container__item"
                />
                <Button variant="contained" onClick={() => handleOpen(medico.nombre, medico.fecha, medico.rut)}>
                  <ReceiptLongIcon />
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
                  Detalle de ingresos
                </Typography>
              </div>
              <div className='ficha-container__form'>
                <div className='ficha_container__form--person'>
                <TextField 
                  variant="standard"
                  InputProps={{
                    disableUnderline: true,
                  }}
                  label="Nombre del Médico"
                  value={name}
                  className="ficha-container__input" placeholder='Nombre paciente'
                />
                <TextField 
                  variant="standard"
                  InputProps={{
                    disableUnderline: true,
                  }}
                  label="Fecha Ingreso"
                  value={rut}
                  onChange={(e) => setRut(e.target.value)}
                  className="ficha-container__input" placeholder='RUT'
                />
                <TextField 
                  variant="standard"
                  disabled
                  InputProps={{
                    disableUnderline: true,
                  }}
                  label="Rut"
                  value={fecha}
                  onChange={(e) => setFecha(e.target.value)}
                  className="ficha-container__input" placeholder='RUT'
                />
                </div>
                <div className='ficha_container__form--person ficha_container_registrolist'>
                {datosPersonales.map((item, index) => (
                  <div className="ficha_container_registro" key={index}>
                    <TextField 
                      variant="standard"
                      InputProps={{
                        disableUnderline: true,
                      }}
                      label="Nombre de paciente"
                      value={item.nombre}
                      onChange={(e) => setRut(e.target.value)}
                      className="ficha-container__input"
                      placeholder={`RUT de ${item.nombre}`}
                    />
                    <TextField 
                      variant="standard"
                      disabled
                      InputProps={{
                        disableUnderline: true,
                      }}
                      label="Fecha de atención"
                      value={item.fecha}
                      onChange={(e) => setRut(e.target.value)}
                      className="ficha-container__input"
                    />
                  </div>
                ))}
                </div>
                <div className='ficha-container__save'>
                  <Button variant='outlined' onClick={handleClose}>
                      Cerrar
                  </Button>
                </div>
              </div>
            </div>
          </Box>
        </Modal>
        </>
    )
}

export default Records;