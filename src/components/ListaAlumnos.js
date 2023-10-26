import { Container, Row, Col, Form, Button, Card, Table } from 'react-bootstrap';
import DetallesAlumnoModal from './AlumnoDetalle.js';
import { useState } from 'react';
import CorreoModal from './ModalEnviarCorreo.js';

    const FormCorreos = ({ alumnos }) => {

        (function(document) {
            'use strict';
        
            var LightTableFilter = (function(Arr) {
        
                var _input;
        
                function _onInputEvent(e) {
                    _input = e.target;
                    var tables = document.getElementsByClassName(_input.getAttribute('data-table'));
                    Arr.forEach.call(tables, function(table) {
                        Arr.forEach.call(table.tBodies, function(tbody) {
                            Arr.forEach.call(tbody.rows, _filter);
                        });
                    });
                }
        
                function _filter(row) {
                    var text = row.textContent.toLowerCase(), val = _input.value.toLowerCase();
                    row.style.display = text.indexOf(val) === -1 ? 'none' : 'table-row';
                }
        
                return {
                    init: function() {
                        var inputs = document.getElementsByClassName('light-table-filter');
                        Arr.forEach.call(inputs, function(input) {
                            input.oninput = _onInputEvent;
                        });
                    }
                };
            })(Array.prototype);
        
            document.addEventListener('readystatechange', function() {
                if (document.readyState === 'complete') {
                    LightTableFilter.init();
                }
            });
        
        })(document);



        const [showModal1, setShowModal1] = useState(false);
        const [showModal2, setShowModal2] = useState(false);

            const handleOpenModal1 = () => {
            setShowModal1(true);
            };
        
            const handleCloseModal1 = () => {
            setShowModal1(false);
            };

            const handleOpenModal2 = () => {
            setShowModal2(true);
            };
        
            const handleCloseModal2 = () => {
            setShowModal2(false);
            };

            return (
                    <section className="listaAlumno" id="listaAlumno">
                    <Container fluid style={{maxWidth:'80rem'}}>
                    <Row>
                        <Form className="mb-3">
                            <Row className="buscar">
                            <Col sm={6} md={5} lg={4} xl={3}>
                                <Form.Group className="ml-1">
                                <input
                                type="search" 
                                class="light-table-filter mb-3" 
                                data-table="order-table"
                                placeholder="Buscar..."
                                style={{
                                    minWidth: '200px', 
                                    height:'2.2rem',
                                    margin: '0 auto', 
                                    borderRadius: '8px',       
                                }}
                                />
                                </Form.Group>
                            </Col>
                            </Row>
                        </Form>
            
                        <div className="d-flex justify-content-center align-items-center">
                        <div className="table-container" style={{ minWidth: '80rem' }}>
                            <table className="table table-striped table-bordered table-hover order-table table-danger">
                            <thead>
                                <tr>
                                <th style={{ textAlign: 'center' }}>Documento</th>
                                <th style={{ textAlign: 'center' }}>Nombre</th>
                                <th style={{ textAlign: 'center' }}>Apellido</th>
                                <th style={{ textAlign: 'center' }}>Correo</th>
                                <th style={{ textAlign: 'center' }}>Carrera</th>
                                <th style={{ textAlign: 'center' }}>Acciones</th>
                                </tr>
                            </thead>
                            <tbody>
                                {alumnos.map((alumno) => (
                                <tr key={alumno.id}>
                                    <td>{alumno.cedula}</td>
                                    <td>{alumno.nombre}</td>
                                    <td>{alumno.apellido}</td>
                                    <td>{alumno.email}</td>
                                    <td>{alumno.carrera}</td>
                                    <td style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                    <Button onClick={() => handleOpenModal2(alumno)} className="btn btn-secondary me-4" style={{ border: 'none' }}>
                                        Detalle
                                    </Button>
                                    <Button onClick={() => handleOpenModal1()} className="btn " style={{ border: 'none' }}>
                                        Correo
                                    </Button>
                                    </td>
                                    <CorreoModal showModal={showModal1} handleClose={handleCloseModal1} />
                                    <DetallesAlumnoModal show={showModal2} handleClose={handleCloseModal2} alumno={alumno} />
                                </tr>
                                ))}
                                {/* Agregar más filas de recordatorios si es necesario */}
                            </tbody>
                            </table>
                        </div>
                        </div>
                    </Row>
                    </Container>
                </section>
            );
        };
    
    export { FormCorreos };
    