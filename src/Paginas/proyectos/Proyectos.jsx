import React from 'react'
import CartaPerfil from '../../components/CartaPerfil/CartaPerfil';
import NavBar from '../../components/NavBar/NavBar';
import './estilos.css'
import ProyectoMeme from '../../img/proyectoMeme.png'
import ProyectoRiot from '../../img/proyectoRiot.png'
import ProyectoMainumbys from '../../img/proyectoMainumbys.png'
import ProyectoVirasoro from '../../img/proyectoVirasoro.png'
import Proyec from '../../components/Proyectos/Proyec';
const Proyectos = () => {
  const proyectos = [
    {
      id:'1',
      link:'https://memes-gamma.vercel.app/',
      img:ProyectoMeme,
      titulo:'Generador de memes',
      descripcion:'Aplicación creada con React'
    },
    {
      id:'2',
      link:'https://demo-sitio-riot.vercel.app/',
      img:ProyectoRiot,
      titulo:'Sitio RiotGames',
      descripcion:'Página Web estatica inspirada en el videojuego LoL'
    },
    {
      id:'3',
      link:'https://mainumbys.wixsite.com/inicio',
      img:ProyectoMainumbys,
      titulo:'Sitio Mainumbys',
      descripcion:'Página Web creada con wix para clases de Danza Aerea'
    },
    {
      id:'4',
      link:'virasorocity.wordpress.com',
      img:ProyectoVirasoro,
      titulo:'Sitio de Virasoro',
      descripcion:'Página Web creada con Wordpress para Trabajo Practico de mi carrera'
    },
   

          
  ]
  return (
    <div className="inicio">
        <div ><NavBar/></div>
      <div className="autor">
        <CartaPerfil/>
        <h1 className="tituloproyectos">Lista de Proyectos realizados</h1>
        </div>
      <div className="contenedorProyecto"> 
          <Proyec proyectos={proyectos}/>
      </div>
    </div>
  )
}

export default Proyectos