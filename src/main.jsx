import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
//import './index.css'
import App from './App.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';
import Principal from './Principal.jsx'
import { BrowserRouter } from 'react-router-dom'
import Barra from './Barra.jsx';
import Nav from './Nav.jsx';
import Pie from './Pie.jsx';
import Contenido from './Contenido.jsx';
import Acordeon from './Acordeon.jsx';
import Carddd from './Carddd.jsx';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Barra></Barra>
    <Nav></Nav>
   <Principal></Principal>
  
    <Pie></Pie>
  </BrowserRouter>,
)
