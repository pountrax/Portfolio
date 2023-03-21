import React from 'react'
import CartaInfo from '../../components/CartaInfo/CartaInfo';
import CartaPerfil from '../../components/CartaPerfil/CartaPerfil';
import { Habilidades } from '../../components/Habilidades/Habilidades';
import { HabilidadesDos } from '../../components/Habilidades/HabilidadesDos';
import NavBar from '../../components/NavBar/NavBar';
import { Redes } from '../../components/Redes/Redes';
import './estilos.css'
const Inicio = () => {
  return (
    <div className="inicio">
      <div ><NavBar/></div>
      <div className="contenedorInicio"> 
        <div className="contenedorInicio-item1"><CartaPerfil/></div>
        <div className="contenedorInicio-item2"><CartaInfo/></div>
        <div className="contenedorInicio-item3"><Redes/></div>
        <div className="contenedorInicio-item4"><Habilidades/></div>
        <div className="contenedorInicio-item5"><HabilidadesDos/></div>
      </div>
    </div>
  )
}

export default Inicio