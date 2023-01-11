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
      <div className="contenedor"> 
        <div className="contenedor-item1"><CartaPerfil/></div>
        <div className="contenedor-item2"><CartaInfo/></div>
        <div className="contenedor-item3"><Redes/></div>
        <div className="contenedor-item4"><Habilidades/></div>
        <div className="contenedor-item5"><HabilidadesDos/></div>
      </div>
    </div>
  )
}

export default Inicio