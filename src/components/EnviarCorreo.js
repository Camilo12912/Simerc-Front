import { MostrarModal } from "./modal"
import { Button, Container, Row, Col, Card, Table } from "react-bootstrap"
import { useState } from "react";
import { Form } from "react-bootstrap";
import { BsFillPlusCircleFill } from "react-icons/bs";

const UsuarioFormulario = ({ onUserSubmit }) => {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showModal, setShowModal] = useState(false);



  return (
    
    <section className="CardCorreo" id="home" >
      {/* <Container margin="0" padding="0" style={{marginLeft:'60%'}}>
        <Row className="CardCorreo" >
          <Col xs={12} md={6} xl={7} >
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
        <tr>
          <td>Llamada</td>
          <td>Llamar a la rectora</td>
        </tr>
      </tbody>
    </Table>
        </Card.Body>
      </Card>
          </Col>
        </Row>
      </Container> */}
    </section>
  );
}

export { UsuarioFormulario }
