import React from 'react'
import './estilos.css'
import www from '../../img/www.png'
import github from '../../img/github.png'
import instagram from '../../img/instagram.png'
import facebook from '../../img/facebook.png'
export const Redes = () => {
  return (
    <div className="Redes">
    <img src={www} className="Iconos" alt="pagina"/><b>Sitio web</b><a>enproceso.com</a>
    <img src={github} className="Iconos" alt="pagina"/><b>GitHub</b><a target="_blank"  rel="noopener noreferrer" href="https://github.com/pountrax">pountrax</a>
    <img src={instagram} className="Iconos" alt="pagina"/><b>Instagram</b><a target="_blank"  rel="noopener noreferrer" href="https://www.instagram.com/sal.marco_/">sal.marco_</a>
    <img src={facebook} className="Iconos" alt="pagina"/><b>Facebook</b><a target="_blank"  rel="noopener noreferrer" href="https://www.facebook.com/profile.php?id=100003292156200">Marcos Lopez</a>
  </div>
  )
}
