import React from 'react'
import CartaPerfil from '../../components/CartaPerfil/CartaPerfil';
import NavBar from '../../components/NavBar/NavBar';
import './estilos.css'
import ProyectoMeme from '../../img/proyectoMeme.png'
const Proyectos = () => {
  return (
    <div className="inicio">
      <div ><NavBar/></div>
      <div className="contenedor"> 
        <div className="contenedor-item1"><CartaPerfil/></div>
          <div className="Carta proyecto">
          <img src={ProyectoMeme} className="ImgProyecto" alt="Proyecto"></img>
          <div className="Carta-Texto" >
              <a  className="tituloProyecto" rel="noopener noreferrer"
              target="_blank" href="https://memes-gamma.vercel.app/">Generador de memes</a>
              <h2>Aplicación creada con React</h2>  
          </div>
      </div>  
      </div>
    </div>
  )
}

export default Proyectos