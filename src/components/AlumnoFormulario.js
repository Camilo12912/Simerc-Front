import React, { useState } from "react";
import { Modal, Button, Form, Row, Col, FloatingLabel, InputGroup } from 'react-bootstrap';

const AlumnoFormulario = ({ show, handleClose, onAlumnoSubmit }) => {
  const [tipo, setTipo] = useState("");
  const [cedula, setCedula] = useState("");
  const [nombre, setNombre] = useState("");
  const [apellido, setApellido] = useState("");
  const [email, setEmail] = useState("");
  const [colegio, setColegio] = useState("");
  const [direccion, setDireccion] = useState("");
  const [carrera, setCarrera] = useState("");
  const [telefono, setTelefono] = useState("");
  const [nacionalidad, setNacionalidad] = useState("");
  const [modalidad, setModalidad] = useState("");
  const [observaciones, setObservaciones] = useState("");

  
  const handleSubmit = (e) => {
    e.preventDefault();

    if (!tipo || !nombre || !apellido || !email || !colegio || !cedula || !direccion) {
      alert('Por favor, complete todos los campos.');
      return;
    }

    const alumnoData = {
      tipo,
      cedula,
      nombre,
      apellido,
      email,
      colegio,
      direccion,
      carrera,
      telefono,
      nacionalidad,
      modalidad,
      observaciones
    };

    onAlumnoSubmit(alumnoData);

    // Limpiar los campos del formulario después de enviar
    setTipo('');
    setCedula('');
    setNombre('');
    setApellido('');
    setEmail('');
    setColegio('');
    setDireccion('');
    setCarrera('');
    setTelefono('');
    setNacionalidad('');
    setModalidad('');
    setObservaciones('');

    // Cerrar el modal después de enviar el formulario
    handleClose();
  };

  return (

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Registrar Alumno</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmit}>
            <Row className="mb-3">
              <Col>
                <FloatingLabel controlId="tipo" label="Tipo">
                  <Form.Select
                    aria-label="Tipo"
                    value={tipo}
                    onChange={(e) => setTipo(e.target.value)}
                  >
                    <option value="">Seleccionar tipo</option>
                    <option value="CC">Cédula de Ciudadanía</option>
                    <option value="TI">Tarjeta de Identidad</option>
                    <option value="CE">Cédula de Extranjería</option>
                  </Form.Select>
                </FloatingLabel>
              </Col>
              <Col>
                <FloatingLabel controlId="cedula" label="Cédula">
                  <Form.Control
                    type="text"
                    placeholder="Número de cédula"
                    value={cedula}
                    onChange={(e) => setCedula(e.target.value)}
                  />
                </FloatingLabel>
              </Col>
            </Row>
            <Row className="mb-3">
              <Col>
                <FloatingLabel controlId="nombre" label="Nombre">
                  <Form.Control
                    type="text"
                    placeholder="Nombre"
                    value={nombre}
                    onChange={(e) => setNombre(e.target.value)}
                  />
                </FloatingLabel>
              </Col>
              <Col>
                <FloatingLabel controlId="apellido" label="Apellido">
                  <Form.Control
                    type="text"
                    placeholder="Apellido"
                    value={apellido}
                    onChange={(e) => setApellido(e.target.value)}
                  />
                </FloatingLabel>
              </Col>
            </Row>
            <Row className="mb-3">
              <Col>
                <FloatingLabel controlId="email" label="Email">
                  <Form.Control
                    type="email"
                    placeholder="Correo electrónico"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </FloatingLabel>
              </Col>
            </Row>
            <Row className="mb-3">
              <Col>
                <FloatingLabel controlId="colegio" label="Colegio">
                  <Form.Control
                    type="text"
                    placeholder="Nombre del colegio"
                    value={colegio}
                    onChange={(e) => setColegio(e.target.value)}
                  />
                </FloatingLabel>
              </Col>
            </Row>
            <Row className="mb-3">
              <Col>
                <FloatingLabel controlId="direccion" label="Dirección">
                  <Form.Control
                    type="text"
                    placeholder="Dirección"
                    value={direccion}
                    onChange={(e) => setDireccion(e.target.value)}
                  />
                </FloatingLabel>
              </Col>
            </Row>
            <Row className="mb-3">
              <Col>
                <FloatingLabel controlId="carrera" label="Carrera">
                  <Form.Control
                    type="text"
                    placeholder="Carrera"
                    value={carrera}
                    onChange={(e) => setCarrera(e.target.value)}
                  />
                </FloatingLabel>
              </Col>
              <Col>
                <FloatingLabel >
                  <InputGroup hasValidation>
                    <InputGroup.Text id="telefono">+57</InputGroup.Text>
                    <Form.Control
                      type="text"
                      placeholder="Número de teléfono"
                      value={telefono}
                      onChange={(e) => setTelefono(e.target.value)}
                    />
                  </InputGroup>
                </FloatingLabel>
              </Col>
            </Row>
            <Row className="mb-3">
              <Col>
                <FloatingLabel controlId="nacionalidad" label="Nacionalidad">
                  <Form.Control
                    type="text"
                    placeholder="Nacionalidad"
                    value={nacionalidad}
                    onChange={(e) => setNacionalidad(e.target.value)}
                  />
                </FloatingLabel>
              </Col>
              <Col>
                <FloatingLabel controlId="modalidad" label="Modalidad">
                  <Form.Control
                    as="select"
                    value={modalidad}
                    onChange={(e) => setModalidad(e.target.value)}
                  >
                    <option value="">Seleccionar</option>
                    <option value="Presencial">Presencial</option>
                    <option value="Virtual">Virtual</option>
                  </Form.Control>
                </FloatingLabel>
              </Col>
            </Row>
            <Row className="mb-3">
              <Col>
                <FloatingLabel controlId="observaciones" label="Observaciones">
                  <Form.Control
                    as="textarea"
                    placeholder="Observaciones"
                    style={{ height: '100px' }}
                    value={observaciones}
                    onChange={(e) => setObservaciones(e.target.value)}
                  />
                </FloatingLabel>
              </Col>
            </Row>
            <div className="text-center">
            <Button variant="primary" onClick={handleSubmit} style={{marginTop:"10px"}}>
                REGISTRAR ALUMNO
              </Button>
            </div>
          </Form>
        </Modal.Body>
      </Modal>
  );
};

export { AlumnoFormulario };
