import { RecordatorioForm } from "../components/RecordatorioForm"; 

const CrearRecordatorio=({recordatorio, setRecordatorio})=>{

    
    const handleRecordatorioSubmit = (recordatorioData) => {
        setRecordatorio([...recordatorio, recordatorioData]);
    };

    return (
        <div className="Recordatorio-container" >

        <RecordatorioForm onRecordatorioSubmit={handleRecordatorioSubmit} />
        </div>
    );
    }

export { CrearRecordatorio }
