import { Link, NavLink } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import fesc from "../assets/img/fescp.png";

function Navegacion({ loggedIn, onSignOut }) {


  return (
    <Navbar expand="lg" className="navegacion" >
      <Container className='contNav'>
      <Navbar.Brand as={Link} to={"#"} >
          <img
            src={fesc}
            alt="Logo"
            className="d-inline-block "

          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav"/>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="contLink">
          {loggedIn ? (
              <>
                <Nav.Link as={NavLink} to={"/homepage"}>Home</Nav.Link>
                <Nav.Link as={NavLink} to={"/RegistrarAlumno"}>Registrar Alumnos</Nav.Link>
                <Nav.Link as={NavLink} to={"/PanelCorreo"}>Enviar Correos</Nav.Link>
                <Nav.Link as={NavLink} to={"/CrearRecordatorio"}>Recordatorios</Nav.Link>
                  <Nav.Link className="text-bg-danger" style={{borderRadius:'10px'}} as={NavLink} to={"/"} onClick={onSignOut}>Cerrar sesión</Nav.Link>
              </>
            ) : (
              <>

                <Nav.Link as={NavLink} to={"/"}>Home</Nav.Link>
                {/* <Nav.Link as={NavLink} to={"/nosotros"}>Nosotros</Nav.Link>
                <Nav.Link as={NavLink} to={"/mision"}>Misión</Nav.Link>
                <Nav.Link as={NavLink} to={"/galeria"}>Galería</Nav.Link>
                <Nav.Link as={NavLink} to={"/login"}>Login</Nav.Link> */}
              </>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export { Navegacion }

