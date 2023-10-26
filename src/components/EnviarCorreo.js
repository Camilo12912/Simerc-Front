import React, { useState } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';

const Correo = () => {
  const [para, setPara] = useState('');
  const [asunto, setAsunto] = useState('');
  const [mensaje, setMensaje] = useState('');

  const handleEnviarCorreo = () => {
    // Lógica para enviar el correo
    console.log('Correo enviado:', { para, asunto, mensaje });
  };

  return (
    <Container className="mt-5">
      <Row>
        <Col md={12}>
          <h1>Redactar Correo</h1>
        </Col>
      </Row>
      <Row className="mt-3">
        <Col md={12}>
          <Form>
            <Form.Group controlId="para">
              <Form.Label>Para:</Form.Label>
              <Form.Select
                    aria-label="Tipo"
                  >
                    <option value="">Carrera:</option>
                    <option value="">Todos</option>
                    <option value="">Ingeniera de Software</option>
                    <option value="">Diseño Grafico</option>
                    <option value="">Financiera</option>
                    
                  </Form.Select>
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
        </Col>
      </Row>
    </Container>
  );
}

export {Correo}

