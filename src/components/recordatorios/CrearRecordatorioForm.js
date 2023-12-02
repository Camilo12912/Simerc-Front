import { useState } from 'react';
import { Form, Alert, Row } from 'react-bootstrap';

function RecordatorioForm({errores, callback, rTitulo="", rDescripción="", rfecha_final=""  }) {

    const [titulo, setTitulo] = useState(rTitulo);
    const [descripcion, setDescripcion] = useState(rDescripción);
    const [fecha_final, setfecha_final] = useState(rfecha_final);

    const handleSubmit=(e)=>{
        e.preventDefault();
        callback({titulo, descripcion, fecha_final})
    }

    return (

        <Form onSubmit={handleSubmit} id="recordatorio-form">
            <Row>
        <Form.Group controlId="titulo" className='mb-4'>
            <Form.Label>Titulo del recordatorio</Form.Label>
            <Form.Control
            type="text"
            value={titulo}
            onChange={(e) => setTitulo(e.target.value)}
            />
            {errores.titulo && (
            <Alert variant="danger">{errores.titulo}</Alert>
            )}
        </Form.Group>
        </Row>

        <Row>
        <Form.Group controlId="descripcion" className='mb-4'>
            <Form.Label>Descripcion del recordatorio</Form.Label>
            <Form.Control
            as="textarea" 
            rows={4} 
            value={descripcion}
            onChange={(e) => setDescripcion(e.target.value)}
            />
            {errores.descripcion && (
            <Alert variant="danger">{errores.descripcion}</Alert>
            )}
        </Form.Group>
        </Row>

        <Row>
        <Form.Group controlId="fecha_final" className='mb-4'>
            <Form.Label>Fecha final del recordatorio</Form.Label>
            <Form.Control
            type="date"
            value={fecha_final}
            onChange={(e) => setfecha_final(e.target.value)}
            />
            {errores.fecha_final && (
            <Alert variant="danger">{errores.fecha_final}</Alert>
            )}
        </Form.Group>
        </Row>


        </Form>
    );
}

export {RecordatorioForm};
