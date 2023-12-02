import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Button } from "react-bootstrap";
import { BsTrash3Fill } from "react-icons/bs";
import Swal from "sweetalert2";
import { ELIMINARRECORDATORIO_DELETE_ENDPOINT } from "../../connections/helpers/endpoints";

function EliminarRecordatorioBoton({ id }) {
    const navigate = useNavigate();

    const eliminar = async () => {
        axios
            .delete(`${ELIMINARRECORDATORIO_DELETE_ENDPOINT}/${id}`)
            .then((respuesta) => {
                // Recarga la página después de eliminar el recordatorio
                window.location.reload();
            })
            .catch((err) => {
                console.log(err);
            });
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
                title: `¿Está seguro de eliminar el recordatorio?`,
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
                        'El recordatorio ha sido eliminado',
                        'success'
                    );
                } else if (result.dismiss === Swal.DismissReason.cancel) {
                    swalWithBootstrapButtons.fire(
                        'Cancelada',
                        'El recordatorio sigue registrado',
                        'error'
                    );
                }
            });
    };

    return (
        <Button className="delete-button" size="sm" onClick={crearAlerta}>
            Eliminar
        </Button>
    );
}

export { EliminarRecordatorioBoton };
