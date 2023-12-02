import { SignInForm } from "../components/LoginForm.js"
import { Card, Col, Image, Row } from 'react-bootstrap';
import imageLogin from "../assets/img/loginm (1).png"
import { useState } from "react"; 
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { autenticacion } from "../connections/usuarioAcciones";
import Swal from "sweetalert2";

function SignIn () {

    const [errores, setErrores]= useState({});
    const navegar=useNavigate();
    const enviarAccion= useDispatch();

    const login = ({username, password})=>{

        const error={};
        setErrores(error);

        enviarAccion(autenticacion({username, password}))
        .then(respuesta =>{
            navegar("/Recordatorios")
        })
        .catch(err=>{        
            Swal.fire({
                title: "Error",
                text: "No se ha podido iniciar sesion",
                icon: "error"
              });            
        })
    }

    return(
        <Card className="loginCard">
        <Row>
            <Col xs={6} md={6} xl={6}>
                <Image src={imageLogin} rounded className="imagen-login" />
            </Col>
            <Col xs={6} md={5} xl={5}>
            <Card.Body>
                <h1 style={{textAlign: "center"}} >Login</h1><br/>
                <SignInForm errores={errores} callback={login} />
            </Card.Body>
            </Col>
        </Row>
        </Card>
    )
}

export {SignIn}


