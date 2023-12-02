
import EnviarCorreo, { Correo } from "../components/EnviarCorreo.js";
import { Card, Container } from "react-bootstrap";
const PanelCorreo=({})=>{


  return (
    <Container className="mt-4 !important" style={{paddingTop:'100px'}}>
    <Card className="mx-auto  w-75 my-5 mt-5" >
      <Card.Body>
          <EnviarCorreo />
      </Card.Body>
    </Card>
    </Container>
  );
}

export { PanelCorreo }

