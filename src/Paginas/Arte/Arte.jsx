import React, { useState } from 'react'
import Masonry, { ResponsiveMasonry } from 'react-responsive-masonry'
import NavBar from '../../components/NavBar/NavBar'
import './estilos.css'
import flechaD from '../../img/flechaD.png'
import flechaI from '../../img/flechaI.png'
import salir from '../../img/salir.png'
const images = [
  require("../../img/arte/1.gif"),
  require("../../img/arte/2.jpg"),
  require("../../img/arte/3.png"),
  require("../../img/arte/4.gif"),
  require("../../img/arte/5.png"),
  require("../../img/arte/6.gif"),
  require("../../img/arte/7.png"),
  require("../../img/arte/8.gif"),
  require("../../img/arte/9.png"),
  require("../../img/arte/11.png"),
  require("../../img/arte/12.gif"),
  require("../../img/arte/13.png"),
  require("../../img/arte/14.gif"),
  require("../../img/arte/15.png"),
  require("../../img/arte/16.gif"),
  require("../../img/arte/17.png"),
  require("../../img/arte/18.gif"),
  require("../../img/arte/19.png")
  

]


const Arte = () => {
  const [data,setData] =useState({img:'', i:0});
  const viewImage= (img,i)=>{
    setData({img,i})
  };
  const imgAction= (action)=>{
    let i =data.i;
    if (action==="next-img"){
      setData({img:images[i+1],i:i+1});
    }
    if (action==="previous-img"){
      setData({img:images[i-1],i:i-1});
    }
    if(!action){
      setData({img:'',i:0});
    }
  }
  
  return (
    <div className="arte">
  {
    data.img &&
    <div style={{
      width:'100%',height:"100vh",background:"rgba(0,0,0,0.9)",position:"fixed",display:"flex",justifyContent:"center",alignItems:"center",overflow:"hidden"
      }}>
      <img src={salir} className="botoncitos" onClick={()=>imgAction()} style={{position:"absolute",top:"10px",right:"10px"}} alt=""/>
      <img src={flechaI} className="botoncitos" onClick={()=>imgAction('previous-img')} alt="Anterior"/>
      <img src={data.img} style={{width:"auto",maxWidth:"90%",maxHeight:"90%"}}alt=""/>
      <img src={flechaD} className="botoncitos" onClick={()=>imgAction('next-img')} alt="Siguiente"/>
    </div>
  }
  <NavBar/>  
  <div style={{padding:'10px'}} >
    {/* <NavBar style={{position:"absolute"}}/> */}
    <ResponsiveMasonry columnsCountBreakPoints={{350:1,750:2,900:3}}>
      <Masonry gutter="20px">
         {images.map((image,i)=>(
        <img key={i}
        src={image}
        style={{width:"100%",display:"block"}}
        alt="" onClick={()=>viewImage(image,i)}/>

      ))}
      </Masonry>
    </ResponsiveMasonry>
  </div>
  </div>
  )
}

export default Arte