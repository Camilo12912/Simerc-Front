import axios from 'axios';
import { useEffect, useState } from 'react';
import { Form, Row, Col, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { ALUMNODETALLE_GET_ENDPOINT, ACTUALIZARALUMNO_PUT_ENDPOINT } from '../../connections/helpers/endpoints';

function AlumnoDetalle({ id }) {
  const [alumno, setAlumno] = useState(null);
  const [editando, setEditando] = useState(false);
  const [tipoDocumentoSeleccionado, setTipoDocumentoSeleccionado] = useState('');
  const [nombre, setNombre] = useState('');
  const [apellido, setApellido] = useState('');
  const [documento, setDocumento] = useState('');
  const [email, setEmail] = useState('');
  const [telefono, setTelefono] = useState('');
  const [direccion, setDireccion] = useState('');
  const [colegio, setColegio] = useState('');
  const [carrera, setCarrera] = useState('');
  const [modalidad, setModalidad] = useState('');
  const [nacionalidad, setNacionalidad] = useState('');
  const [observaciones, setObservaciones] = useState('');

  const navegar = useNavigate();

  useEffect(() => {
    axios
      .get(`${ALUMNODETALLE_GET_ENDPOINT}/${id}`)
      .then((response) => {
        const data = response.data[0];
        setAlumno(data);
        setTipoDocumentoSeleccionado(data.tipoDocumento);
        setNombre(data.nombre);
        setApellido(data.apellido);
        setDocumento(data.documento);
        setEmail(data.email);
        setTelefono(data.telefono);
        setDireccion(data.direccion);
        setColegio(data.colegio);
        setCarrera(data.carrera);
        setModalidad(data.modalidad);
        setNacionalidad(data.nacionalidad);
        setObservaciones(data.observaciones);
      })
      .catch((e) => {
        navegar(-1);
      });
  }, [id, navegar]);

  const guardarCambios = () => {
    const alumnoActualizado = {
      ...alumno,
      tipoDocumento: tipoDocumentoSeleccionado,
      nombre,
      apellido,
      documento,
      email,
      telefono,
      direccion,
      colegio,
      carrera,
      modalidad,
      nacionalidad,
      observaciones,
    };

    axios
      .put(`${ACTUALIZARALUMNO_PUT_ENDPOINT}/${id}`, alumnoActualizado)
      .then((response) => {
        console.log(response.data);
        setEditando(false);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    alumno ? (
      <Form>
        <Row className="mb-3">
          <Form.Group as={Col} className="mb-3">
            <Form.Label>Tipo de documento</Form.Label>
            <Form.Control
              as="select"
              value={tipoDocumentoSeleccionado}
              onChange={(e) => editando && setTipoDocumentoSeleccionado(e.target.value)}
              disabled={!editando}
            >
                <option>{tipoDocumentoSeleccionado}</option>
                <option value="1">Cedula de ciudadania</option>
                <option value="2">Cedula de extranjeria</option>
                <option value="3">Pasaporte</option>
                <option value="4">NIT</option>
              {/* Agrega más opciones según sea necesario */}
            </Form.Control>
          </Form.Group>

          <Form.Group as={Col} className="mb-3">
            <Form.Label>No. Documento</Form.Label>
            <Form.Control
              type="text"
              value={documento}
              onChange={(e) => editando && setDocumento(e.target.value)}
              disabled={!editando}
            />
          </Form.Group>
        </Row>

        <Row className="mb-3">
          <Form.Group as={Col} className="mb-3">
            <Form.Label>Nombre(s)</Form.Label>
            <Form.Control
              type="text"
              value={nombre}
              onChange={(e) => editando && setNombre(e.target.value)}
              disabled={!editando}
            />
          </Form.Group>

          <Form.Group as={Col} className="mb-3">
            <Form.Label>Apellido</Form.Label>
            <Form.Control
              type="text"
              value={apellido}
              onChange={(e) => editando && setApellido(e.target.value)}
              disabled={!editando}
            />
          </Form.Group>
        </Row>

        <Row className="mb-3">
          <Form.Group as={Col} className="mb-3">
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="text"
              value={email}
              onChange={(e) => editando && setEmail(e.target.value)}
              disabled
            />
          </Form.Group>

          <Form.Group as={Col} className="mb-3">
            <Form.Label>Teléfono</Form.Label>
            <Form.Control
              type="text"
              value={telefono}
              onChange={(e) => editando && setTelefono(e.target.value)}
              disabled
            />
          </Form.Group>
        </Row>

        <Row className="mb-3">
          <Form.Group as={Col} className="mb-3">
            <Form.Label>Dirección</Form.Label>
            <Form.Control
              type="text"
              value={direccion}
              onChange={(e) => editando && setDireccion(e.target.value)}
              disabled
            />
          </Form.Group>

          <Form.Group as={Col} className="mb-3">
            <Form.Label>Colegio que Egresó</Form.Label>
            <Form.Control
              type="text"
              value={colegio}
              onChange={(e) => editando && setColegio(e.target.value)}
              disabled
            />
          </Form.Group>

          <Form.Group as={Col} className="mb-3">
            <Form.Label>Carrera de interés</Form.Label>
            <Form.Control
              type="text"
              value={carrera}
              onChange={(e) => editando && setCarrera(e.target.value)}
              disabled
            />
          </Form.Group>
        </Row>

        <Row className="mb-3">
          <Form.Group as={Col} className="mb-3">
            <Form.Label>Modalidad</Form.Label>
            <Form.Control
              type="text"
              value={modalidad}
              onChange={(e) => editando && setModalidad(e.target.value)}
              disabled
            />
          </Form.Group>

          <Form.Group as={Col} className="mb-3">
            <Form.Label>Nacionalidad</Form.Label>
            <Form.Control
              type="text"
              value={nacionalidad}
              onChange={(e) => editando && setNacionalidad(e.target.value)}
              disabled
            />
          </Form.Group>
        </Row>

        <Row className="mb-3">
          <Form.Group as={Col} className="mb-3">
            <Form.Label>Observaciones</Form.Label>
            <Form.Control
              as="textarea"
              value={observaciones}
              onChange={(e) => editando && setObservaciones(e.target.value)}
              disabled
            />
          </Form.Group>
        </Row>

        <Button variant="warning" onClick={() => setEditando(true)} disabled={editando}>
          Editar
        </Button>

        <Button variant="success" onClick={guardarCambios} disabled={!editando}>
          Guardar Cambios
        </Button>

        <p>{editando ? 'Guardando cambios...' : 'Cargando datos del tercero...'}</p>
      </Form>
    ) : (
      <p>Cargando datos del tercero...</p>
    )
  );
}

export { AlumnoDetalle };
