import React,{useRef} from 'react'
import './estilos.css'
import MusicaFondo from '../../musica/musicafondo.mp3'
import muted from '../../img/muted.png'
import disco from '../../img/disco.gif'
const NavBar = () => {
  const audioRef = useRef(null); // Crea una referencia al elemento <audio>
  const playAudio = () => {
    audioRef.current.play() 
  };
  const toggleMute = () => {
    audioRef.current.muted = !audioRef.current.muted; // Invertir el valor de muted
  };
  return (
    <div className="Barra">  
    <nav>
    <audio className="Barra-audio" src= {MusicaFondo} loop ref={audioRef}/>
    <p>clickea el disco y desmutea para escuchar musica!
   </p>
    <div className="Barra-Sonido">
     <img src={disco} alt="muted" className="icons" onClick={playAudio}/>
    <img src={muted} alt="muted" className="icons" onClick={toggleMute}/>
    </div>
    <a href="#home">Perfil</a>
    <a href="#about">Contacto</a>
    <a href="#contact">Proyectos</a>
    <a href="#arte">Arte</a>
  </nav></div>
  )
}

export default NavBar