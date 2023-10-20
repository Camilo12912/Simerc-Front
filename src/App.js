import './css/App.css';
import "bootstrap/dist/css/bootstrap.min.css"
import { useState } from 'react';
import { Navegacion } from './layouts/navegacion';
import { Homepage } from './pages/Homepage';
import { SignIn } from './pages/SignIn';
import { Footer } from './layouts/footer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { RegistrarAlumno } from './pages/RegistrarAlumno';
import { PanelCorreo } from './pages/PanelCorreo';
import {CrearRecordatorio} from './pages/CrearRecordatorio.js'

function App() {

  const [recordatorio, setRecordatorio] = useState([]);
  const [alumnos, setAlumnos] = useState([]);
  const [loggedIn, setLoggedIn] = useState(false);

  const handleSignIn = () => {
    setLoggedIn(true);
  };

  const handleSignOut = () => {
    setLoggedIn(false);
  };

  return (
    <div>
      <BrowserRouter>
        <Navegacion loggedIn={loggedIn} onSignOut={handleSignOut} />
        <Routes>
          <Route path='/' element={<SignIn onSignIn={handleSignIn}/>} />
          <Route path="/homepage" element={<Homepage recordatorio={recordatorio} />} />
          <Route path="/RegistrarAlumno" element={<RegistrarAlumno alumnos={alumnos} setAlumnos={setAlumnos} />} />
          <Route path="/PanelCorreo" element={<PanelCorreo alumnos={alumnos} />} />
          <Route path="/CrearRecordatorio" element={<CrearRecordatorio recordatorio={recordatorio} setRecordatorio={setRecordatorio}/>} />
        </Routes>
      </BrowserRouter>
      <Footer/>
    </div>
  );
}

export default App;
