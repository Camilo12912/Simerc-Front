
import { FormCorreos } from "../components/ListaAlumnos.js";

const PanelCorreo=({alumnos})=>{


  return (
    <div className="Usuario-container" >

      <FormCorreos alumnos={alumnos} />
    </div>
  );
}

export { PanelCorreo }

