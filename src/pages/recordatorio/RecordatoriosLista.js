import axios from "axios";
import { useEffect, useState } from "react"
import { RECORDATORIOSCREADOS_GET_ENDPOINT} from "../../connections/helpers/endpoints";
import { Card, Container, Row, Col, Form, Table, InputGroup } from "react-bootstrap";
import { RecordatorioTable } from "../../components/recordatorios/listaRecordatorios";
import { CrearRecordatorio } from "./CrearRecordatorios";


const RecordatoriosCreados=()=>{

    const [recordatorio, setRecordatorio] = useState([])
    const [buscando, setBuscando] = useState(true)
    const [search, setSearch] = useState('');
    const [cantidadRegistros, setCantidadRegistros] = useState(5);

    useEffect(()=>{
        axios.get(RECORDATORIOSCREADOS_GET_ENDPOINT)
        .then(respuesta=>{
            setRecordatorio(respuesta.data)
            setBuscando(false)
        }).catch(e=>{
            console.error(e)
            setBuscando(false)
        })
    },[recordatorio, cantidadRegistros, search])

    const handleCantidadRegistrosChange = (event) => {
        const value = event.target.value;
        setCantidadRegistros(value); // Asegúrate de que `cantidadRegistros` sea un número
    };

    return(
        <Container className="mt-3 mb-3 " >
            <Row >
                <Col sm={12} md={8} lg={6} >
                <h2 className="margen-title"></h2>
                <Card className="card-especialidad mt-3 mb-3">
                    <Card.Header className="d-flex justify-content-between align-items-center " >
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
                            <CrearRecordatorio />
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
                            {buscando ? "Cargando..." : (recordatorio.length===0 && "No hay recordatorios registrados")}
                            <Table responsive   hover className="mt-3 mb-3 " >
                                <thead>
                                <tr>
                                    <th>#</th>
                                    <th>Titulo</th>
                                    <th>Descripción</th>
                                    <th>Fecha Final</th>
                                    <th style={{textAlign:'center'}}>Acción</th>
                                </tr>
                                </thead>
                                <tbody>
                                {recordatorio
                                .filter((item, index) => {
                                    if (cantidadRegistros === "all") {
                                      return true; // Mostrar todos los registros
                                    } else {
                                    return search.toLowerCase() === ''
                                        ? index < cantidadRegistros
                                        : item.titulo.toLowerCase().includes(search);
                                    }
                                })
                                .map((recordatorio, index) => (
                                    <RecordatorioTable key={recordatorio.id} recordatorio={recordatorio} contador={index + 1} />
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

export { RecordatoriosCreados }