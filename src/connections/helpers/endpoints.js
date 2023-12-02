const API_URL="http://localhost:4000"

export const SIGNIN_POST_ENDPOINT = API_URL+"/usuario/login";
export const CREARUSUARIO_POST_ENDPOINT = API_URL+"/usuario";

export const CREARECORDATORIO_POST_ENDPOINT = API_URL+"/recordatorios";
export const RECORDATORIOSCREADOS_GET_ENDPOINT = API_URL+"/recordatorios";
export const RECORDATORIODETALLE_GET_ENDPOINT = API_URL+"/recordatorios";
// export const ACTUALIZARRECORDATORIO_PUT_ENDPOINT = API_URL+"/recordatorios";
export const ELIMINARRECORDATORIO_DELETE_ENDPOINT = API_URL+"/recordatorios";

export const CREARALUMNOS_POST_ENDPOINT = API_URL+"/alumnos";
export const ALUMNOSCREADOS_GET_ENDPOINT = API_URL+"/alumnos";
export const ALUMNODETALLE_GET_ENDPOINT = API_URL+"/alumnos";
export const ACTUALIZARALUMNO_PUT_ENDPOINT = API_URL+"/alumnos";
export const ELIMINARALUMNO_DELETE_ENDPOINT = API_URL+"/alumnos";


export const CREARARTICULO_POST_ENDPOINT = API_URL+"/articulos";
export const ARTICULOSCREADOS_GET_ENDPOINT = API_URL+"/articulos";
export const ARTICULODETALLE_GET_ENDPOINT = API_URL+"/articulos";
export const ACTUALIZARARTICULO_PUT_ENDPOINT = API_URL+"/articulos";
export const ELIMINARARTICULO_DELETE_ENDPOINT = API_URL+"/articulos";


export const CREARROL_POST_ENDPOINT = API_URL+"/rol";
export const ROLESCREADOS_GET_ENDPOINT = API_URL+"/rol";
export const ROLDETALLE_GET_ENDPOINT = API_URL+"/rol";
export const ACTUALIZARROL_PUT_ENDPOINT = API_URL+"/rol";
export const ELIMINARROL_DELETE_ENDPOINT = API_URL+"/rol";

export const ENVIAR_CORREO_POST_ENDPOINT = API_URL + "/email/send-email"; // Nuevo endpoint para enviar correos

export const OBTENER_EMAIL_POR_DOCUMENTO_GET_ENDPOINT = API_URL + "/alumnos/email";  // Agrega la nueva URL
export const ENVIAR_CORREO_POR_CARRERA_POST_ENDPOINT = API_URL+'/email/enviar-correo-por-carrera';

// OBTENER_CORREOS_POR_CARRERA_GET_ENDPOINT
export const OBTENER_CORREOS_POR_CARRERA_GET_ENDPOINT = API_URL + '/alumnos/carrera';

export const USUARIOSCREADOS_GET_ENDPOINT = API_URL+"/usuario";
