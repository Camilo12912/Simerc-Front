import { EliminarRecordatorioBoton } from "./EliminarRecordatorio";

const RecordatorioTable = ({ recordatorio, contador }) => {
  // Función para formatear la fecha
  const formatFecha = (fecha) => {
    const options = { year: 'numeric', month: 'numeric', day: 'numeric' };
    return new Date(fecha).toLocaleDateString(undefined, options);
  };

  return (
    <tr>
      <td >{contador}</td>
      <td>{recordatorio.titulo}</td>
      <td style={{ maxWidth: '200px', overflow: 'hidden', textOverflow: 'ellipsis' }}>{recordatorio.descripcion}</td>
      <td>{formatFecha(recordatorio.fecha_final)}</td>
      <td className="botones-td" style={{ maxWidth: '200px', overflow: 'hidden', textOverflow: 'ellipsis', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
  <EliminarRecordatorioBoton id={recordatorio.idRecordatorio} />
</td>
    </tr>
  );
};

export { RecordatorioTable };