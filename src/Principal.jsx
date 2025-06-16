import { BrowserRouter,Routes,Route,Link } from "react-router-dom";
import React, { useState } from 'react';
import Acordeon from "./Acordeon";
import Carddd from "./Carddd";
import './estilos.css'


function Lapaz(props){
    return(
        <div className="lapaz">
            <h1>PAGINA DE INICIO</h1>
            <Acordeon></Acordeon>
        </div>
    );
}
function Cocha(props){
    return(
        <div className="cocha">
               <h1>LINK2</h1>
               
        </div>
    );
}
function Santa(props){
    return(
        <div className="sta">
               <h1>PAGINA DE OFERTA DE CURSOS</h1>
               <Carddd></Carddd>
        </div>
    );
}

function Principal(props)
{
    return(
        <div>
            
            <div className="Contenido">
                <Routes>
                    <Route path="/" element={<Lapaz></Lapaz>}></Route>
                    <Route path="/pag2" element={<Cocha></Cocha>}></Route>
                    <Route path="finalparcial/pag3" element={<Santa></Santa>}></Route>



                </Routes>
            </div>
        </div>
    );
}
export default Principal;
