import axios from "axios"
import { store } from "../../pages/status/store.js"
import { usuario } from "../../pages/status/sliceReducers.js";
import { jwtDecode } from "jwt-decode";


export const setAutenticacionToken= (token)=>{
    
    if(token){        
        axios.defaults.headers.common["Authorization"]=token;
    } else {    
        delete axios.defaults.headers.common["Authorization"];        
    }
}

export const getAutenticacionToken=()=>{

    if(localStorage.token){

        setAutenticacionToken(localStorage.token)

        const decodificado = jwtDecode(localStorage.token)        

        store.dispatch(usuario({usuario: decodificado, conectado: true}))

        const tiempoActual= Math.floor(Date.now()/1000)

        if(decodificado.exp < tiempoActual){

            window.location.href="/"
        }
    }
}