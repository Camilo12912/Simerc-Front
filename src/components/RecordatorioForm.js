import React from 'react';
import { useState } from 'react';
import { MostrarModal } from './modal'
import { Container, Row, Col, Form, Button, Card} from 'react-bootstrap';

const RecordatorioForm = ( {onRecordatorioSubmit} ) => {
    const [titulo, setTitulo] = useState('');
    const [descripcion, setDescripcion] = useState('');
    const [showModal, setShowModal] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
    
            if (!titulo || !descripcion) {
            alert('Por favor, complete todos los campos.');
            return;
            }
        
            const recordatorioData = {
            titulo,
            descripcion
            };
        
            onRecordatorioSubmit(recordatorioData);
        
        

            setTitulo('');
            setDescripcion('');
            setShowModal(true);
        };
        
        const closeModal = () => {
            setShowModal(false);
        };

    return (
        <section className="correo" id="Correo">
        <Container fluid>
            <Row className="justify-content-center">
            {/* Columna de la Derecha (Recordatorios) */}
            <Col xs={12} md={6}>
                <Card border="success" className="text-center bg-dark text-white card-banner mt-5" style={{height:'30rem'}}>
                <Card.Header>Crear recordatorio</Card.Header>
                <Card.Body>
                    <Form className="mb-5" onSubmit={handleSubmit}>
                    <Form.Group controlId="reminderTitle">
                        <Form.Control type="text" placeholder="Título" className="mb-5" value={titulo} onChange={(e)=> setTitulo(e.target.value)}/>
                    </Form.Group>
                    <Form.Group controlId="reminderDescription">
                        <Form.Control as="textarea" rows={3} placeholder="Descripción" className="mb-5" value={descripcion} onChange={(e)=> setDescripcion(e.target.value)}/>
                    </Form.Group>
                    <Form.Group controlId="reminderDate">
                        <Form.Control type="datetime-local" className="mb-5"/>
                    </Form.Group>
                    <Button variant="danger" type="submit" block>
                        Crear Recordatorio
                    </Button>
                    </Form>
                </Card.Body>
                </Card>
                <MostrarModal
    show={showModal}
    onHide={closeModal}
    title="Recordatorio creado con éxito"
    content="El recordatorio se creó correctamente."
    />
            </Col>
            </Row>
        </Container>
        </section>
    );
};

export  {RecordatorioForm}