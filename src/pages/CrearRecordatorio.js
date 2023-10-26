import { RecordatorioForm } from "../components/RecordatorioForm"; 
import { Banner } from '../components/banner';
import  { useState } from "react";
import { Button } from "react-bootstrap";

const CrearRecordatorio=({recordatorio, setRecordatorio})=>{

    const handleRecordatorioSubmit = (recordatorioData) => {
        setRecordatorio([...recordatorio, recordatorioData]);
    };

const [showModal, setShowModal] = useState(false);

const handleShow = () => setShowModal(true);
const handleClose = () => setShowModal(false);


    return (
        <div className="Recordatorio-container" >
        <Button className="bg-success" onClick={handleShow} style={{marginTop:"5rem", marginLeft:"61.3rem", border:'none'}}> Crear Recordatorio +</Button>
        <RecordatorioForm show={showModal} handleClose={handleClose} onRecordarioSubmit={handleRecordatorioSubmit} />
        <Banner recordatorio={recordatorio} > </Banner>
        </div>
    );
    }

export { CrearRecordatorio }
