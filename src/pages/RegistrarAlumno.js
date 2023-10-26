import { AlumnoFormulario } from '../components/AlumnoFormulario';
import { useState } from 'react';
import { Button } from 'react-bootstrap';
import { FormCorreos } from '../components/ListaAlumnos';

function RegistrarAlumno({alumnos, setAlumnos}) {



  const handleAlumnoSubmit = (alumnosData) => {
    setAlumnos([...alumnos, alumnosData]);
  };

  const [showModal, setShowModal] = useState(false);

  const handleShow = () => setShowModal(true);
  const handleClose = () => setShowModal(false);

  return (


    <div className="Proyecto-form" style={{marginTop:'70px', marginBottom:'100px'}}>
            <Button className="bg-success" onClick={handleShow} style={{marginTop:"5rem", marginLeft:"76.5rem", border:'none'}}>
      Registrar Alumno +
    </Button>
      <AlumnoFormulario show={showModal} handleClose={handleClose} onAlumnoSubmit={handleAlumnoSubmit}/>
      <FormCorreos alumnos={alumnos} />
    </div>  
  );
}

export {RegistrarAlumno};

