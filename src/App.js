import './css/App.css';
import "bootstrap/dist/css/bootstrap.min.css"
import { useState } from 'react';
import { Navegacion } from './layouts/navegacion';
import { SignIn } from './pages/Login.js';
import { Footer } from './layouts/footer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { getAutenticacionToken } from './connections/helpers/token.js';
import { store } from './pages/status/store.js';
// import { RegistrarAlumno } from './pages/RegistrarAlumno';
// import { PanelCorreo } from './pages/PanelCorreo';
// import {CrearRecordatorio} from './pages/CrearRecordatorio.js'
import { RecordatoriosCreados } from './pages/recordatorio/RecordatoriosLista.js';
import { Provider } from 'react-redux';
import { AlumnosCreados } from './pages/Alumnos/AlumnosCreados.js';
import { PanelCorreo } from './pages/PanelCorreo.js';

getAutenticacionToken()

function App() {



  return (
    <div>
      <Provider store={store}>
      <BrowserRouter>
        <Navegacion />
        <Routes>
          <Route path='/' element={<SignIn />} />
          <Route path='/Recordatorios' element={<RecordatoriosCreados/>}/>
          <Route path='/Alumnos' element={<AlumnosCreados/>}/>
          <Route path='/PanelCorreo' element={<PanelCorreo/>}/>
        </Routes>
      </BrowserRouter>
      <Footer/>
      </Provider>
    </div>
  );
}

export default App;
