import React from "react";
import { Container, Row, Col, Card, Table, Button } from "react-bootstrap";

function Banner ({recordatorio}) {


  return (
    <section className="banner" id="home" >
      <Container margin="0" padding="0" >
        <Row className="align-items-center" >
            {/* <div >
              <center><h1 style={{paddingTop:'3rem'}}>BIENVENIDO</h1></center>
            </div> */}
          <div className="d-flex align-items-center justify-content-center">
          <Card border="success" className="text-center bg-dark text-white  card-banner " style={{marginTop:'1rem', width:'50rem', height:'30rem'}}>
        <Card.Header style={{fontSize:'25px'}}>RECORDATORIOS</Card.Header>
        <Card.Body>
          <Table striped bordered hover variant="danger">
      <thead>
        <tr>
          <th>Titulo</th>
          <th>Descripcion</th>
          <th>Fecha</th>
        </tr>
      </thead>
      <tbody>
        {recordatorio.map((recordatorio)=>(
        <tr>
          <td>{recordatorio.titulo}</td>
          <td style={{ whiteSpace: 'pre-wrap', padding: '1rem 0' }}>{recordatorio.descripcion}</td>
          <td>{recordatorio.fecha}</td>
        </tr>
        ))}
      </tbody>
    </Table>
        </Card.Body>
      </Card>
      </div>
        </Row>
      </Container>
    </section>
  );
}

export {Banner}
