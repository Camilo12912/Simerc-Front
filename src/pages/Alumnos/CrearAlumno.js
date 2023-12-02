import { useState } from "react";
import { Modal, Container, Button } from "react-bootstrap";
import { BsPlusSquareFill } from "react-icons/bs";
import Swal from "sweetalert2";
import axios from "axios";
import { CREARALUMNOS_POST_ENDPOINT } from "../../connections/helpers/endpoints";
import { CrearAlumnoForm } from "../../components/alumnos/CrearAlumnos";


function CrearAlumno() {

    const [errores, setErrores]= useState({});    
    const [showModal, setShowModal] = useState(false);

    const mostrarAlerta = () => {
        Swal.fire(
            'Éxito',
            'El alumno se registró correctamente',
            'success'
        ).then(() => {
            // Recarga la página después de mostrar la alerta
            window.location.reload();
        });
    };

    const crear= async ({documento, nombre, apellido, telefono, tipoDocumento, email, direccion, colegio, carrera, nacionalidad, modalidad, observaciones})=>{

        const errores={};
        setErrores(errores);

        axios.post(CREARALUMNOS_POST_ENDPOINT, {documento, nombre, apellido, telefono, tipoDocumento, email, direccion, colegio, carrera, nacionalidad, modalidad, observaciones}
        ).then((response)=>{
            handleCloseModal();
            mostrarAlerta();
        })
        .catch((error)=>{
            setErrores({new: error.response.data.message});
        })
    }

    const handleCloseModal = () => {
        setShowModal(false);
        };
    
    const handleShowModal = () => {
        setShowModal(true);
        };

    return (
        <Container>
            <Button variant="success" onClick={handleShowModal}>
                <BsPlusSquareFill/> Registrar Alumno
            </Button>
            <Modal className="mi-modal-form" backdrop="static" size="lg" show={showModal} onHide={handleCloseModal}>
                <Modal.Header closeButton>
                <Modal.Title>Datos del Alumno</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                <CrearAlumnoForm errores={errores} callback={crear} />
                </Modal.Body>
                <Modal.Footer>
                <Button variant="success" type="submit" form="alumnos-form">
                    Crear
                </Button>
                <Button variant="danger" onClick={handleCloseModal}>
                    Cerrar
                </Button>                
                </Modal.Footer>
            </Modal>
        </Container>
    )
}

export { CrearAlumno }