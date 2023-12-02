import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Button } from "react-bootstrap";
import { BsTrash3Fill } from "react-icons/bs";
import Swal from "sweetalert2";
import { ELIMINARALUMNO_DELETE_ENDPOINT } from "../../connections/helpers/endpoints";

function EliminarAlumnoBoton({ id, onDelete }) {
  const navegar = useNavigate();

  const eliminar = async () => {
    try {
      await axios.delete(`${ELIMINARALUMNO_DELETE_ENDPOINT}/${id}`);
      onDelete(); // Llamar a la función onDelete después de eliminar
      navegar('/Alumnos');
    } catch (error) {
      console.error(error);
    }
  };

  const crearAlerta = () => {
    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: 'btn btn-success',
        cancelButton: 'btn btn-danger'
      },
      buttonsStyling: false
    });

    swalWithBootstrapButtons
      .fire({
        title: `¿Está seguro de eliminar el Alumno?`,
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Eliminar',
        cancelButtonText: 'Cancelar',
        reverseButtons: true
      })
      .then((result) => {
        if (result.isConfirmed) {
          eliminar();
          swalWithBootstrapButtons.fire(
            'Eliminado',
            'El alumno ha sido eliminado',
            'success'
          );
        } else if (result.dismiss === Swal.DismissReason.cancel) {
          swalWithBootstrapButtons.fire(
            'Cancelada',
            'El alumno sigue registrado',
            'error'
          );
        }
      });
  };

  return (
    <Button
      className="delete-button"
      size="sm"
      onClick={crearAlerta}
    >
      Eliminar
    </Button>
  );
}

export { EliminarAlumnoBoton };
