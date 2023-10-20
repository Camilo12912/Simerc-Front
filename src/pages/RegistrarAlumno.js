import { AlumnoFormulario } from '../components/AlumnoFormulario';
function RegistrarAlumno({alumnos, setAlumnos}) {



  const handleAlumnoSubmit = (alumnosData) => {
    setAlumnos([...alumnos, alumnosData]);
  };

  return (
    <div className="Proyecto-form" style={{marginTop:'70px', marginBottom:'100px'}}>
      <AlumnoFormulario onAlumnoSubmit={handleAlumnoSubmit}/>

    </div>  
  );
}

export {RegistrarAlumno};

