import React from 'react'
import './estilos.css'
import perfil from '../../img/perfil.png'
const CartaPerfil = () => {
  return (
    <div className="Carta">
        <img src={perfil} className="FotoYo" alt="Marcos"></img>
        <div className="Carta-Texto">
            <h1>Marcos Lopez</h1>
            <h2>Tecnico Analista de Sistemas</h2>
            <h2>Gdor Virasoro. Corrientes, Argentina</h2>
        </div>
    </div>
  )
}

export default CartaPerfil