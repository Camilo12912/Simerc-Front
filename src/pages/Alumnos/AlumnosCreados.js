import axios from "axios";
import { useEffect, useState } from "react"
import { ALUMNOSCREADOS_GET_ENDPOINT } from "../../connections/helpers/endpoints";
import { Card, Container, Row, Col, Form, Table, InputGroup } from "react-bootstrap";
import { AlumnoTable } from "../../components/alumnos/listaAlumnos";
import { CrearAlumno } from "./CrearAlumno";
// import { CrearTercero } from "./CrearTerceros";


const AlumnosCreados=()=>{

    const [alumnos, setAlumnos] = useState([])
    const [buscando, setBuscando] = useState(true)
    const [search, setSearch] = useState('');
    const [cantidadRegistros, setCantidadRegistros] = useState(5);

    useEffect(() => {
        axios.get(ALUMNOSCREADOS_GET_ENDPOINT)
          .then(respuesta => {
            setAlumnos(respuesta.data);
            setBuscando(false);
          })
          .catch(e => {
            console.error(e);
            setBuscando(false);
          });
      }, [cantidadRegistros, search]);

    const handleCantidadRegistrosChange = (event) => {
        const value = event.target.value;
        setCantidadRegistros(value); // Asegúrate de que `cantidadRegistros` sea un número
    };

    return(
        <Container className="mt-3 mb-3" >
            <Row>
                <Col sm={12} md={8} lg={6}>
                <h2 className="margen-title"></h2>
                <Card className="card-especialidad mt-3 mb-3">
                    <Card.Header className="d-flex justify-content-between align-items-center">
                        <Card.Title className="mt-2">
                        <InputGroup className='my-3' style={{ display: 'flex', alignItems: 'center' }}>
                            Buscar: 
                                <Form.Control                            
                                onChange={(e) => setSearch(e.target.value)}
                                style={{                                                                                                          
                                    borderRadius: '8px',       
                                }}
                                />
                            </InputGroup>
                        </Card.Title>
                        <div className="ms-auto">
                            <CrearAlumno />
                        </div>
                    </Card.Header>
                    <Card.Body>
                            <div className="d-flex justify-content-between align-items-center">                            
                            <div style={{ display: 'flex', alignItems: 'center' }}>
                                <span>Mostrando </span>
                                <Form.Select
                                    value={cantidadRegistros}
                                    onChange={handleCantidadRegistrosChange}
                                    >
                                    <option value={5}>5</option>
                                    <option value={10}>10</option>
                                    <option value={20}>20</option>
                                    <option value={50}>50</option>
                                    <option value="all">All</option>
                                </Form.Select>
                                <span> registros</span>
                            </div>
                            
                            </div>                                        
                            {buscando ? "Cargando..." : (alumnos.length===0 && "No hay clientes registrados")}
                            <Table   hover className="mt-3 mb-3 " >
                                <thead>
                                <tr>
                                    <th>#</th>
                                    <th>documento</th>
                                    {/* <th>Usuario</th> */}
                                    <th>Nombres</th>
                                    <th>Apellidos</th>
                                    {/* <th>Nombre T</th> */}
                                    {/* <th>Tipo</th> */}
                                    {/* <th>Tipo Doc</th> */}
                                    
                                    <th>email</th>
                                    {/* <th>ciudad</th>
                                    <th>direccion</th> */}
                                    {/* <th>telefono</th> */}
                                    {/* <th>Tipo T</th> */}
                                </tr>
                                </thead>
                                <tbody>
                                {alumnos
                                .filter((item, index) => {
                                    if (cantidadRegistros === "all") {
                                      return true; // Mostrar todos los registros
                                    } else {
                                        return search.toLowerCase() === ''
                                        ? index < cantidadRegistros
                                        : (
                                            (item.email && item.email.toLowerCase().includes(search)) ||
                                            (item.documento && item.documento.toLowerCase().includes(search))
                                        )}
                                })
                                .map((alumno, index) => (
                                    <AlumnoTable key={alumno.idAlumno} alumno={alumno} contador={index + 1} />
                                ))}
                                </tbody>
                            </Table>
                            </Card.Body>
                </Card>
                </Col>
            </Row>
        </Container>
    )
}

export { AlumnosCreados }