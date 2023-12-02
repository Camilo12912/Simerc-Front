import { useState } from "react";
import {CREARECORDATORIO_POST_ENDPOINT } from "../../connections/helpers/endpoints";
import { Modal, Container, Button } from "react-bootstrap";
import { BsPlusSquareFill } from "react-icons/bs";
import Swal from "sweetalert2";
import axios from "axios";
import { RecordatorioForm } from "../../components/recordatorios/CrearRecordatorioForm.js";


function CrearRecordatorio() {

    const [errores, setErrores]= useState({});    
    const [showModal, setShowModal] = useState(false);

    const mostrarAlerta=()=>{
        Swal.fire(
        'Éxito',
        'El recordatorio se creó correctamente',
        'success')
    }

    const crear= async ({titulo, descripcion, fecha_final})=>{
    
        const errores={};
        setErrores(errores);

        axios.post(CREARECORDATORIO_POST_ENDPOINT, {titulo, descripcion, fecha_final}
            ).then((response) => {
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
            <Button variant="success"  onClick={handleShowModal}>
                <BsPlusSquareFill/> Crear Recordatorio
            </Button>
            <Modal backdrop="static" show={showModal} onHide={handleCloseModal}>
                <Modal.Header closeButton>
                <Modal.Title>Crear Recordatorio</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                <RecordatorioForm errores={errores} callback={crear} />
                </Modal.Body>
                <Modal.Footer>
                <Button variant="success" type="submit" form="recordatorio-form">
                    Crear
                </Button>
                <Button variant="danger"  onClick={handleCloseModal}>
                    Cerrar
                </Button>                
                </Modal.Footer>
            </Modal>
        </Container>
    )
}

export {CrearRecordatorio}