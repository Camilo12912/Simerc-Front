import React, { useState } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';

const CorreoModal = ({ showModal, handleClose }) => {
    const [para, setPara] = useState('');
    const [asunto, setAsunto] = useState('');
    const [mensaje, setMensaje] = useState('');

    const handleEnviarCorreo = () => {
    
        console.log('Correo enviado:', { para, asunto, mensaje });
        handleClose(); // Cierra el modal después de enviar el correo
    };

    return (
        <Modal show={showModal} onHide={handleClose}>
        <Modal.Header closeButton>
            <Modal.Title>Redactar Correo</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <Form>
            <Form.Group controlId="para">
                <Form.Label>Para:</Form.Label>
                <Form.Control type="email" placeholder="Correo del destinatario" value={para} onChange={(e) => setPara(e.target.value)} />
            </Form.Group>

            <Form.Group controlId="asunto" className="mt-3">
                <Form.Label>Asunto:</Form.Label>
                <Form.Control type="text" placeholder="Asunto del correo" value={asunto} onChange={(e) => setAsunto(e.target.value)} />
            </Form.Group>

            <Form.Group controlId="mensaje" className="mt-3">
                <Form.Label>Mensaje:</Form.Label>
                <Form.Control as="textarea" rows={6} value={mensaje} onChange={(e) => setMensaje(e.target.value)} />
            </Form.Group>

            <Button variant="primary" className="mt-3" onClick={handleEnviarCorreo}>
                Enviar Correo
            </Button>
            </Form>
        </Modal.Body>
        </Modal>
    );
};

export default CorreoModal;