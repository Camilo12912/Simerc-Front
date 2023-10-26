import React, { useState } from "react";
import { Modal, Button, Form } from "react-bootstrap";

    const RecordatorioForm = ({ show, handleClose, onRecordarioSubmit }) => {
    const [titulo, setTitulo] = useState("");
    const [descripcion, setDescripcion] = useState("");
    const [fecha, setFecha] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        
        if (!titulo || !descripcion || !fecha) {
            alert('Por favor, complete todos los campos.');
            return;
            }
        
            const recordatorioData = {
                titulo,
                descripcion,
                fecha
            };
            
            onRecordarioSubmit(recordatorioData);

        
        

            setTitulo('');
            setDescripcion('');
            setFecha('');
            handleClose();
    };

    return (
        <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
            <Modal.Title>Crear Recordatorio</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <Form onSubmit={handleSubmit}>
            <Form.Group controlId="formTitulo">
                <Form.Label >Título</Form.Label>
                <Form.Control
                type="text"
                placeholder="Ingrese el título"
                value={titulo}
                onChange={(e) => setTitulo(e.target.value)}
                />
            </Form.Group>
            <Form.Group controlId="formDescripcion">
                <Form.Label>Descripción</Form.Label>
                <Form.Control
                as="textarea"
                rows={3}
                placeholder="Ingrese la descripción"
                value={descripcion}
                onChange={(e) => setDescripcion(e.target.value)}
                />
            </Form.Group>
            <Form.Group controlId="formFecha">
                <Form.Label>Fecha</Form.Label>
                <Form.Control
                type="date"
                value={fecha}
                onChange={(e) => setFecha(e.target.value)}
                />
            </Form.Group>
            <Button variant="primary" onClick={handleSubmit} style={{marginTop:"10px"}}>
                Guardar
            </Button>
            </Form>
        </Modal.Body>
        </Modal>
    );
    };

export  {RecordatorioForm}
