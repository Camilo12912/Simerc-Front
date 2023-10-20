import { Container, Row, Col, Form, Button, Card, Table } from 'react-bootstrap';



    const FormCorreos = ({ alumnos }) => {
        console.log(alumnos)
            return (
                    <section className="correo" id="Correo">
                    <Container fluid>
                    <Row>
                        {/* Columna de la Izquierda (Tabla de Usuarios) */}
                        <Col md={7}>
                        <Form className="mb-3">
                            <Row className="buscar">
                            <Col sm={6} md={5} lg={4} xl={3}>
                                <Form.Group className="ml-1">
                                <Form.Control type="text" id="txtBuscar" name="libro" placeholder="Buscar..." />
                                </Form.Group>
                            </Col>
                            <Col sm={6} md={5} lg={4} xl={3}>
                                <Button variant="danger" block>
                                Buscar
                                </Button>
                            </Col>
                            </Row>
                        </Form>
            
                        <div className="table-container" style={{ maxWidth: '40rem' }}>
                        <Table striped bordered hover variant="danger">
                                <thead>
                                <tr>
                                    <th>Documento</th>
                                    <th>Nombre</th>
                                    <th>Correo</th>
                                    <th>Carrera</th>
                                </tr>
                                </thead>
                                <tbody>
                                    {alumnos.map((alumno)=>(
                                <tr >
                                    <td>{alumno.cedula}</td>
                                    <td>{alumno.nombre}</td>
                                    <td>{alumno.email}</td>
                                    <td>{alumno.carrera}</td>
                                </tr>
                                    ))}
                                {/* Agregar más filas de recordatorios si es necesario */}
                                </tbody>
                            </Table>
                        </div>
                        </Col>
            
                        {/* Columna de la Derecha (Recordatorios) */}
                        <Col xs={12} md={5}>
                <Card border="success" className="text-center bg-dark text-white card-banner mt-2" style={{ width: '35rem' }}>
                <Card.Header>ENVIAR CORREO</Card.Header>
                <Card.Body>
                    <Form className="mb-3">
                    <Form.Group controlId="emailTo">
                        <Form.Control type="email" placeholder="Destinatario"  className='mb-4'/>
                    </Form.Group>
                    <Form.Group controlId="emailSubject">
                        <Form.Control type="text" placeholder="Asunto" className='mb-4'/>
                    </Form.Group>
                    <Form.Group controlId="emailBody">
                        <Form.Control as="textarea" rows={5} placeholder="Escribe tu mensaje aquí..."  className='mb-4'/>
                    </Form.Group>
                    <Button variant="danger" type="submit" block>
                        Enviar Correo
                    </Button>
                    </Form>
                </Card.Body>
                </Card>
            </Col>
                    </Row>
                    </Container>
                </section>
            );
        };
    
    export { FormCorreos };
    