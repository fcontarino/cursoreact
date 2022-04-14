import React from 'react';
import ReactDOM from 'react-dom';
import Users from './Componentes/Users';
import Tarjeta from './Tarjeta';
import Titulo from './Titulo';



ReactDOM.render(
  <React.StrictMode>
    <Users/>
    {/* <Titulo titulo='Fundacion' subtitulo="Triologia asimov" parrafo='Blablabla1'/>
    <Titulo titulo='Fundacion2' subtitulo="Triologia asimov2" parrafo='Blablabla2'/>
    <Tarjeta descripcion='Federico Contarino' usuario="fcontarino" correo="facontarino@gmail.com"/>
    <Tarjeta descripcion='Pepito 1' usuario="pepito1" correo="pepito1@gmail.com"/> */}
  </React.StrictMode>,
  document.getElementById('root')
);