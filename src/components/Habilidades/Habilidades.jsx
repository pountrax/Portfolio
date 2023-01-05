import React from 'react'
import './estilos.css'
export const Habilidades = ({parte2}) => {
  return (
    <div className="Habilidades ">
      <b>Html, Css JavaScript (Frontend)</b>
      <progress className="Habilidades-Prog" value="75" max="100"></progress>
      <b>Paquete Office (Word,Excel,Acces,PowerPoint)</b>
      <progress className="Habilidades-Prog" value="86" max="100"></progress>
      <b>Herramientas de diseño (Sai,Pixrl,Canva, Etc.)</b>
      <progress className="Habilidades-Prog" value="70" max="100"></progress>
    </div>
  )
}
