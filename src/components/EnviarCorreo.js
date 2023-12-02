// Importa las dependencias necesarias

import React, { useState, useEffect } from 'react';
import { Button, Col, Form, Row } from 'react-bootstrap';
import axios from 'axios';

// Importa los endpoints actualizados
import {
  ENVIAR_CORREO_POST_ENDPOINT,
  OBTENER_EMAIL_POR_DOCUMENTO_GET_ENDPOINT,
  ENVIAR_CORREO_POR_CARRERA_POST_ENDPOINT,
  OBTENER_CORREOS_POR_CARRERA_GET_ENDPOINT,
} from '../connections/helpers/endpoints';

import Swal from 'sweetalert2';

const EnviarCorreo = () => {
  // Define los estados iniciales
  const [correo, setCorreo] = useState({
    to: '',
    subject: '',
    text: '',
  });

  const [documento, setDocumento] = useState('');
  const [loading, setLoading] = useState(false);
  const [esPorCarrera, setEsPorCarrera] = useState(false);
  const [carreraSeleccionada, setCarreraSeleccionada] = useState('');
  const [emailsPorCarrera, setEmailsPorCarrera] = useState([]);

  // Maneja el cambio en los campos del formulario
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCorreo({ ...correo, [name]: value });
  };

  // Maneja el cambio en el campo del documento
  const handleDocumentoChange = (e) => {
    setDocumento(e.target.value);
  };

  // Maneja el cambio en el checkbox "Enviar por Carrera"
  const handleCheckboxChange = (e) => {
    setEsPorCarrera(e.target.checked);
    if (!e.target.checked) {
      setEmailsPorCarrera([]);
    }
  };

  const handleCarreraChange = async (e) => {
    const carrera = e.target.value;
    setCarreraSeleccionada(carrera);
  
    if (esPorCarrera && carrera) {
      try {
        // Obtiene los emails por carrera desde el backend
        const response = await axios.get(`${OBTENER_CORREOS_POR_CARRERA_GET_ENDPOINT}/${carrera}`);
        setEmailsPorCarrera(response.data.emails);
      } catch (error) {
        console.error('Error al obtener emails por carrera:', error);
        // Muestra el mensaje de error en la consola para depuración
        Swal.fire('Error', `Hubo un error al obtener emails por carrera: ${error.message}`, 'error');
      }
    }
  };

  const confirmarEnvio = async () => {
    if (esPorCarrera && (!carreraSeleccionada || emailsPorCarrera.length === 0)) {
      // Si "Enviar por Carrera" está marcado pero no hay una carrera seleccionada o no hay correos por carrera
      Swal.fire('Error', 'Por favor, seleccione una carrera con correos asociados.', 'error');
      return;
    }

    if (!esPorCarrera && !documento) {
      // Si no está marcada "Enviar por Carrera" y no hay un documento ingresado
      Swal.fire('Error', 'Por favor, ingrese el documento del alumno.', 'error');
      return;
    }

    const confirmacion = await Swal.fire({
      title: '¿Estás seguro de enviar el correo?',
      icon: 'question',
      showCancelButton: true,
      confirmButtonText: 'Enviar',
      cancelButtonText: 'Cancelar',
    });

    if (confirmacion.isConfirmed) {
      enviarCorreo();
    } else {
      console.log('Envío cancelado por el usuario');
    }
  };

  // Obtiene el email por documento
  const obtenerEmailPorDocumento = async () => {
    try {
      setLoading(true);
      const response = await axios.get(`${OBTENER_EMAIL_POR_DOCUMENTO_GET_ENDPOINT}/${documento}`);
      const email = response.data.email;
      setCorreo((prevCorreo) => ({ ...prevCorreo, to: email }));
    } catch (error) {
      console.error('Error al obtener el email por documento:', error);
      Swal.fire('Error', 'Hubo un error al obtener el email por documento', 'error');
    } finally {
      setLoading(false);
    }
  };

  // Envía el correo
  const enviarCorreo = async () => {
    try {
      // Decide qué endpoint utilizar según si es por carrera o no
      const endpoint = esPorCarrera ? ENVIAR_CORREO_POR_CARRERA_POST_ENDPOINT : ENVIAR_CORREO_POST_ENDPOINT;
      
      // Realiza la solicitud al backend
      await axios.post(endpoint, correo);
  
      // Muestra un mensaje de éxito
      Swal.fire('Correo enviado exitosamente', '', 'success');
    } catch (error) {
      console.error('Error al enviar el correo:', error);
      Swal.fire('Error', 'Hubo un error al enviar el correo', 'error');
    }
  };

  // Efecto para obtener el email por documento cuando cambia el documento
  useEffect(() => {
    if (documento) {
      obtenerEmailPorDocumento();
    }
  }, [documento]);

  // Renderiza el formulario
  return (
    <div>
      <h1>Enviar Correo</h1>

      <Form>
        <Row>
          <Col>
            <Form.Group controlId="formDocumento" className="mb-4">
              <Form.Label>Documento del Alumno:</Form.Label>
              <Form.Control
                type="text"
                placeholder="Ingrese el documento del alumno"
                value={documento}
                onChange={handleDocumentoChange}
                disabled={esPorCarrera}
              />
            </Form.Group>
          </Col>
          <Col>
            <Form.Group controlId="formTo" className="mb-4">
              <Form.Label>Para:</Form.Label>
              <Form.Control
                type="email"
                placeholder="Correo del destinatario"
                name="to"
                value={correo.to}
                onChange={handleInputChange}
                disabled={esPorCarrera}
              />
            </Form.Group>
          </Col>
        </Row>

        <Form.Group controlId="formSubject" className="mb-4">
          <Form.Label>Asunto:</Form.Label>
          <Form.Control
            type="text"
            placeholder="Ingrese el asunto"
            name="subject"
            value={correo.subject}
            onChange={handleInputChange}
          />
        </Form.Group>

        <Form.Group controlId="formText" className="mb-4">
          <Form.Label>Mensaje:</Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            placeholder="Ingrese el mensaje"
            name="text"
            value={correo.text}
            onChange={handleInputChange}
          />
        </Form.Group>

        <Form.Group controlId="formCarrera" className="mb-4">
          <Form.Check
            type="checkbox"
            label="Enviar por Carrera"
            checked={esPorCarrera}
            onChange={handleCheckboxChange}
          />
          {esPorCarrera && (
            <div>
              <Form.Label>Seleccione Carrera:</Form.Label>
              <Form.Control as="select" value={carreraSeleccionada} onChange={handleCarreraChange}>
                <option>Seleccione la Carrera</option>
                <option value="1">Diseño Grafico</option>
                <option value="2">Diseño de Modas</option>
                <option value="3">Administración Turística y Hotelera</option>
                <option value="4">Ingeniería de Software</option>
                <option value="5">Negocios Internacionales</option>
                <option value="6">Negocios Internacionales (Distancia)</option>
                <option value="7">Administración Financiera</option>
                <option value="8">Gestión Logística Empresarial</option>
              </Form.Control>
              {emailsPorCarrera.length > 0 && (
                <div>
                  <Form.Label>Emails por Carrera:</Form.Label>
                  <ul>
                    {emailsPorCarrera.map((email) => (
                      <li key={email}>{email}</li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          )}
        </Form.Group>

        <Button variant="primary" onClick={confirmarEnvio}>
          Enviar Correo
        </Button>
      </Form>
    </div>
  );
};

export default EnviarCorreo;
