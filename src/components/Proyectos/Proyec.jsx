import React from 'react'
import './estilos.css'
const Proyec = ({proyectos}) => {
    
    const listaProyectos = proyectos.map((proyecto) => (
        <div className="Carta proyecto">
            <div className="Carta-Texto" >
                <img src={proyecto.img} className="ImgProyecto" alt="Proyecto"></img>
                <a  className="tituloProyecto" rel="noopener noreferrer"
                target="_blank" href={proyecto.link}>{proyecto.titulo}</a>
                <h2>{proyecto.descripcion}</h2>  
            </div>
        </div>
        )
        );
        return listaProyectos;
      }


export default Proyec