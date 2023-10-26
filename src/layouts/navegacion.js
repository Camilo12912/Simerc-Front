import { Link, NavLink } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from "../assets/img/logo.png";

function Navegacion({ loggedIn, onSignOut }) {


  return (
    <Navbar expand="lg" className="navegacion" >
      
      <Container className='contNav'>
      <Navbar.Brand as={Link} to={"#"} >
          <img
            src={logo}
            alt="Logo"
            className="d-inline-block "

          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav"/>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="contLink">
          {loggedIn ? (
              <>
                <Nav.Link as={NavLink} to={"/CrearRecordatorio"}>Home</Nav.Link>
                <Nav.Link as={NavLink} to={"/RegistrarAlumno"}>Alumnos</Nav.Link>
                <Nav.Link as={NavLink} to={"/PanelCorreo"}>Correos Masivos</Nav.Link>
                  <Nav.Link className="text-bg-danger" style={{borderRadius:'5px'}} as={NavLink} to={"/"} onClick={onSignOut}>Cerrar sesión</Nav.Link>
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

