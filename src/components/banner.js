import React from "react";
import { Container, Row, Col, Button, Card, Table } from "react-bootstrap";
import { Link } from "react-router-dom";
// import fesc from "../assets/img/fescp.png";

function Banner ({recordatorio}) {
  return (
    <section className="banner" id="home" >
      <Container margin="0" padding="0" >
        <Row className="align-items-center" >
          <Col xs={10} md={6} xl={7}>
            <div >
              <h1>BIENVENIDO</h1>
            </div>
            <div className="d-grid buttom-banner">
      <Link to="/RegistrarAlumno" style={{ textDecoration: 'none' }}>
      <Button variant="primary" size="lg" style={{width:'100%'}}>
        Registrar Alumno
      </Button>
      </Link>
      <Link  style={{ textDecoration: 'none' }}>
      <Button variant="primary" size="lg" style={{width:'100%'}}>
        Registrar Asesor
      </Button>
      </Link>
      <Link to="/PanelCorreo" style={{ textDecoration: 'none' }}>
      <Button variant="primary" size="lg" style={{width:'100%'}}>
        Enviar Correos
      </Button>
      </Link>
      <Link to="/CrearRecordatorio" style={{ textDecoration: 'none' }}>
      <Button variant="primary" size="lg" style={{width:'100%'}}>
        Recordatorios
      </Button>
      </Link>
    </div>
          </Col>
          <Col xs={12} md={6} xl={5}>
          <Card border="success" className="text-center bg-dark text-white card-banner" style={{ width: '35rem', height:'35rem', marginTop:'5rem'}} >
        <Card.Header>RECORDATORIOS</Card.Header>
        <Card.Body>
          <Table striped bordered hover>
      <thead>
        <tr>
          <th>Titulo</th>
          <th>Descripcion</th>
        </tr>
      </thead>
      <tbody>
        {recordatorio.map((recordatorio)=>(
        <tr>
          <td>{recordatorio.titulo}</td>
          <td>{recordatorio.descripcion}</td>
        </tr>
        ))}
      </tbody>
    </Table>
        </Card.Body>
      </Card>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export {Banner}
