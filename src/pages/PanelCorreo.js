
import { Correo } from "../components/EnviarCorreo.js";
import { Card } from "react-bootstrap";
const PanelCorreo=({})=>{


  return (

    <Card className="mx-auto bg-dark text-white w-75 my-5">
      <Card.Body>
        <div className="Usuario-container">
          <Correo />
        </div>
      </Card.Body>
    </Card>

  );
}

export { PanelCorreo }

