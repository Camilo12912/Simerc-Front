import { Link, NavLink } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from "../assets/img/logo.png";
import { cerrarSesion } from '../connections/usuarioAcciones';
import { useSelector } from 'react-redux/es/hooks/useSelector';
import { useDispatch } from 'react-redux';

function Navegacion({ }) {
  const conectado=useSelector(estado=>estado.conectado);
  const usuario=useSelector(estado=>estado.usuario); 
  const dispatch= useDispatch();

  return (
    <Navbar expand="lg" className="navegacion">
  <Container className='contNav'>
    <Navbar.Brand as={Link} to={"#"} >
      <img src={logo} alt="Logo" className="d-inline-block " />
    </Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav"/>
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="navbar-nav custom-center">
        {conectado ? (
          <>
            <Nav.Link as={NavLink} to={"/Recordatorios"}>Home</Nav.Link>
            <Nav.Link as={NavLink} to={"/Alumnos"}>Alumnos</Nav.Link>
            <Nav.Link as={NavLink} to={"/PanelCorreo"}>Correos</Nav.Link>
            <Nav.Link as={NavLink} to={"/"} onClick={() => dispatch(cerrarSesion())}>
              Cerrar sesión
            </Nav.Link>
          </>
        ) : (
          <>
            {/* <Nav.Link as={NavLink} to={"/"}>Home</Nav.Link> */}
            {/* Otros enlaces cuando no está conectado */}
          </>
        )}
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>
  );
}

export { Navegacion }

