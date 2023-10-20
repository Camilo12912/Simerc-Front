import { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import InputGroup from'react-bootstrap/InputGroup';
import { MostrarModal } from './modal'
import { CardTitle } from 'react-bootstrap';


const AlumnoFormulario= ({ onAlumnoSubmit }) => {
  const [tipo, setTipo] = useState('');
  const [cedula, setCedula] = useState('');
  const [nombre, setNombre] = useState('');
  const [apellido, setApellido] = useState('');
  const [email, setEmail] = useState('');
  const [colegio, setColegio] = useState('');
  const [direccion, setDireccion] = useState('');
  const [carrera, setCarrera] = useState('');
  const [telefono, setTelefono] = useState('');
  const [nacionalidad, setNacionalidad] = useState('');
  const [modalidad, setModalidad] = useState('');
  const [observaciones, setObservaciones] = useState('');

  const [showModal, setShowModal] = useState(false);



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
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <div>
    <Card className="AlumnoForm bg-dark" >
      <CardTitle>
        <h3 className="text-light text-md-center" style={{marginBottom:'20px'}}>Registrar Alumno</h3>
      </CardTitle>
    <Form onSubmit={handleSubmit}>
      
      <Row>
        <Col column="lg" lg={3} className="mb-3">
        <Form.Select aria-label="Default select example" size='lg-1'  value={tipo} onChange={(e)=> setTipo(e.target.value)}>
      <option>Tipo</option>
      <option value="1">CC</option>
      <option value="2">TI</option>
      <option value="3">CE</option>
    </Form.Select>
        </Col>
        <Col>
        <Form.Control size="lg-1" type="text" placeholder="Cedula" value={cedula} onChange={(e)=> setCedula(e.target.value)} />
        </Col>
      </Row>
      <Row>
        <Col column="lg" lg={6} className="mb-3">
        <Form.Control size="lg-1" type="text" placeholder="Nombre" value={nombre} onChange={(e)=> setNombre(e.target.value)}/>
        </Col>
        <Col>
        <Form.Control size="lg-1" type="text" placeholder="Apellido"  value={apellido} onChange={(e)=> setApellido(e.target.value)}/>
        </Col>
      </Row>
      <Row>
        <Col className="mb-3">
        <Form.Control size="lg-1" type="text" placeholder="Email" value={email} onChange={(e)=> setEmail(e.target.value)}/>
        </Col>
      </Row>
      <Row>
        <Col className="mb-3">
        <Form.Control size="lg-1" type="text" placeholder="Colegio" value={colegio} onChange={(e)=> setColegio(e.target.value)}/>
        </Col>
      </Row>
      <Row>
        <Col className="mb-3">
        <Form.Control size="lg-1" type="text" placeholder="Dirección" value={direccion} onChange={(e)=> setDireccion(e.target.value)}/>
        </Col>
      </Row>
      <Row>
      <Col>
      <InputGroup column="lg" lg={6} className="mb-3" >
        <Form.Select aria-label="Default select example" size='lg-1' value={carrera} onChange={(e)=> setCarrera(e.target.value)}>
      <option>Carrera</option>
      <option value="1">Ingenieria de Software</option>
      <option value="2">Diseño Grafico</option>
      <option value="3">Financiera</option>
    </Form.Select>
        </InputGroup>
        </Col>
        <Col>
        <InputGroup>
        <InputGroup.Text>+57</InputGroup.Text>
        <Form.Control
              id="inlineFormInputGroupUsername"
              placeholder="Telefono"
              value={telefono} onChange={(e)=> setTelefono(e.target.value)}
            />
        </InputGroup>
        </Col>
        </Row>
        <Row>
        <Col column="lg" lg={6} className="mb-3">
        <Form.Control size="lg-1" type="text" placeholder="Nacionalidad" value={nacionalidad} onChange={(e)=> setNacionalidad(e.target.value)}/>
        </Col>
        <Col>
        <Form.Select aria-label="Default select example" size='lg-1' value={modalidad} onChange={(e)=> setModalidad(e.target.value)}>
      <option>Modalidad</option>
      <option value="1">Presencial</option>
      <option value="2">Virtual</option>
    </Form.Select>
        </Col>
      </Row>
      <FloatingLabel controlId="floatingTextarea2" label="Observaciones" className="mb-4" value={observaciones} onChange={(e)=> setObservaciones(e.target.value)}>
        <Form.Control
          as="textarea"
          placeholder="Descripcion"
          style={{ height: '100px' }}
        />
      </FloatingLabel>
      <div className="text-center">
      <Button className="btn-danger mx-auto" type='submit'>REGISTRAR ALUMNO</Button>
    </div>
    </Form>
    </Card>
    <MostrarModal
    show={showModal}
    onHide={closeModal}
    title="alumno creado con éxito"
    content="El alumno se creó correctamente."
  />
  </div>
  );
};

export {AlumnoFormulario};
