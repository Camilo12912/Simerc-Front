import React, { useState, useEffect } from 'react';
import { Button, Container, Modal } from 'react-bootstrap';
import { AlumnoDetalle } from '../../pages/Alumnos/AlumnoDetalle.js';
import { useNavigate } from 'react-router-dom';
import { EliminarAlumnoBoton } from './eliminarAlumnos.js';

const AlumnoTable = ({ alumno, contador }) => {
  const [showModal, setShowModal] = useState(false);
  const [editando, setEditando] = useState(false);
  const navigate = useNavigate();

  const handleShowModal = () => {
    setEditando(false);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    // Recarga la página cuando se cierra el modal
    window.location.reload();
  };

  useEffect(() => {
    if (showModal) {
      window.addEventListener('beforeunload', handleCloseModal);
    } else {
      window.removeEventListener('beforeunload', handleCloseModal);
    }

    return () => {
      window.removeEventListener('beforeunload', handleCloseModal);
    };
  }, [showModal]);

  return (
    <>
      <tr key={alumno.id} onClick={handleShowModal}>
        <td>{contador}</td>
        <td>{alumno.documento}</td>
        <td>{alumno.nombre}</td>
        <td>{alumno.apellido}</td>
        
        <td style={{maxWidth:'150px'}}>{alumno.email}</td>

      </tr>

      <Container>
        <Modal backdrop="static" size="lg" show={showModal} onHide={() => setShowModal(false)}>
          <Modal.Header closeButton>
            <Modal.Title>Detalle de el Alumno</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <AlumnoDetalle id={alumno.idAlumno} />
          </Modal.Body>
          <Modal.Footer className="botones-td">
            {/* <EditarSuscripcion id={suscripcion.idSuscripcion}/> */}
            <EliminarAlumnoBoton id={alumno.idAlumno}/>
            <Button variant="secondary" onClick={handleCloseModal}>
              Cerrar
            </Button>
          </Modal.Footer>
        </Modal>
      </Container>
    </>
  );
};

export { AlumnoTable };
