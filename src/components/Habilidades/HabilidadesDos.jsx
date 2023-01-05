import React from 'react'
import './estilos.css'
export const HabilidadesDos = ({parte2}) => {
  return (
    <div className="Habilidades ">
      <b>Ingles</b>
      <progress className="Habilidades-Prog" value="55" max="100"></progress>
      <b>Conocimiento sobre DB, SQL, etc.</b>
      <progress className="Habilidades-Prog" value="52" max="100"></progress>
      <b>Community Manager</b>
      <progress className="Habilidades-Prog" value="87" max="100"></progress>
    </div>
  )
}
