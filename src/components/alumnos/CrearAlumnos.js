import axios from 'axios';
import { useEffect, useState } from "react";
import { Alert, Form, Row, Col } from 'react-bootstrap';


function CrearAlumnoForm({errores, callback, tNombres="", tApellidos="", tDireccion="", tCarrera="",tObservaciones="" ,tModalidad="", tNacionalidad="", tTipoDocumento="", tDocumento="", tEmail="", tColegio="", tTelefono="", }) {

        const [nombre, setNombre] = useState(tNombres);
        const [apellido, setApellido] = useState(tApellidos);
        const [tipoDocumento, setTipoDocumento] = useState(tTipoDocumento);
        const [documento, setDocumento] = useState(tDocumento);
        const [email, setEmail] = useState(tEmail);
        const [colegio, setColegio] = useState(tColegio);
        const [direccion, setDireccion] = useState(tDireccion);
        const [telefono, setTelefono] = useState(tTelefono);
        const [carrera, setCarrera] = useState(tCarrera);
        const [nacionalidad, setNacionalidad] = useState(tNacionalidad);
        const [modalidad, setModalidad] = useState(tModalidad);
        const [observaciones, setObservaciones] = useState(tObservaciones);


        const handleSubmit=(e)=>{
            e.preventDefault();
            callback({
            nombre,
            apellido,
            tipoDocumento,
            documento,
            email,
            colegio,
            direccion,
            telefono,
            carrera,
            nacionalidad,
            observaciones,
            modalidad
        })
        }

        return (

        <Form onSubmit={handleSubmit} id="alumnos-form">
    

        <Row className="mb-3">
        
        <Form.Group as={Col} className="mb-3">
            <Form.Label>Tipo de Documento</Form.Label>
                <Form.Select aria-label="Default select example"
                value={tipoDocumento}
                onChange={(e) => setTipoDocumento(e.target.value)}
                >
                <option>Seleccione el tipo de Documento</option>
                <option value="1">Cedula de ciudadania</option>
                <option value="2">Cedula de extranjeria</option>
                <option value="3">Pasaporte</option>
                <option value="4">NIT</option>
                </Form.Select>
        </Form.Group>

        <Form.Group as={Col} className="mb-3" controlId="noDocumento">
            <Form.Label>No. Documento</Form.Label>
            <Form.Control 
            type="text" 
            value={documento}
            onChange={(e) => setDocumento(e.target.value)}
            />
            {errores.documento && (
            <Alert variant="danger">{errores.documento}</Alert>
            )}
        </Form.Group>
        </Row>



        <Row className="mb-3">    
        

        <Form.Group as={Col} className="mb-3" controlId="nombre">
            <Form.Label>Nombre(s)</Form.Label>
            <Form.Control 
            type="text" 
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
            />
            {errores.nombres && (
            <Alert variant="danger">{errores.nombres}</Alert>
            )}
        </Form.Group>

        <Form.Group as={Col} className="mb-3" controlId="Apellidos">
            <Form.Label>Apellidos</Form.Label>
            <Form.Control 
            type="text" 
            value={apellido}
            onChange={(e) => setApellido(e.target.value)}
            />
            {errores.apellidos && (
            <Alert variant="danger">{errores.apellidos}</Alert>
            )}
        </Form.Group>      
        </Row>


        <Row className="mb-3">    
        <Form.Group as={Col} className="mb-3" controlId="email">
            <Form.Label>Email</Form.Label>
            <Form.Control 
            type="text" 
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            />
            {errores.email && (
            <Alert variant="danger">{errores.email}</Alert>
            )}
        </Form.Group>


        <Form.Group as={Col} className="mb-3" controlId="telefono">
            <Form.Label>Telefono</Form.Label>
            <Form.Control 
            type="text" 
            value={telefono}
            onChange={(e) => setTelefono(e.target.value)}
            />
            {errores.telefono && (
            <Alert variant="danger">{errores.telefono}</Alert>
            )}
        </Form.Group>      
        </Row>

        
        <Row className="mb-3">    
        <Form.Group as={Col} className="mb-3" controlId="direccion">
            <Form.Label>Dirección</Form.Label>
            <Form.Control 
            type="text" 
            value={direccion}
            onChange={(e) => setDireccion(e.target.value)}
            />
            {errores.direccion && (
            <Alert variant="danger">{errores.direccion}</Alert>
            )}
        </Form.Group>


        <Form.Group as={Col} className="mb-3" controlId="colegio">
            <Form.Label>Colegio Proveniente</Form.Label>
            <Form.Control 
            type="text" 
            value={colegio}
            onChange={(e) => setColegio(e.target.value)}
            />
            {errores.colegio && (
            <Alert variant="danger">{errores.colegio}</Alert>
            )}
        </Form.Group>    

        <Form.Group as={Col} className="mb-3">
            <Form.Label>Carrera que Interesa</Form.Label>
                <Form.Select aria-label="Default select example"
                value={carrera}
                onChange={(e) => setCarrera(e.target.value)}
                >
                <option>Seleccione la Carrera</option>
                <option value="1">Diseño Grafico</option>
                <option value="2">Diseño de Modas</option>
                <option value="3">Administración Turistica y Hotelera</option>
                <option value="4">Ingenieria de Software</option>
                <option value="5">Negocios Internacionales</option>
                <option value="6">Negocios Internacionales (Distancia)</option>
                <option value="7">Administracion Financiera</option>
                <option value="8">Gestion Logistica Empresarial</option>
                </Form.Select>
        </Form.Group>   
        </Row>

        <Row className="mb-3">
        
        <Form.Group as={Col} className="mb-3">
            <Form.Label>Modalidad</Form.Label>
                <Form.Select aria-label="Default select example"
                value={modalidad}
                onChange={(e) => setModalidad(e.target.value)}
                >
                <option>Seleccione la modalidad</option>
                <option value="1">Presencial</option>
                <option value="2">Virtual</option>
                </Form.Select>
        </Form.Group>

        <Form.Group as={Col} className="mb-3" controlId="noDocumento">
            <Form.Label>Nacionalidad</Form.Label>
            <Form.Control 
            type="text" 
            value={nacionalidad}
            onChange={(e) => setNacionalidad(e.target.value)}
            />
            {errores.nacionalidad && (
            <Alert variant="danger">{errores.nacionalidad}</Alert>
            )}
        </Form.Group>
        </Row>       

        <Row>
        <Form.Group controlId="observaciones" className='mb-4'>
            <Form.Label>observaciones del Alumno</Form.Label>
            <Form.Control
            as="textarea" 
            rows={4} 
            value={observaciones}
            onChange={(e) => setObservaciones(e.target.value)}
            />
            {errores.observaciones && (
            <Alert variant="danger">{errores.observaciones}</Alert>
            )}
        </Form.Group>
        </Row>        

        </Form>

        )

}

export { CrearAlumnoForm }