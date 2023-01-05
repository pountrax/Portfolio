import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import ComidaItem from "./ComidaItem";
import RecetaIndex from './RecetaIndex';
import './styles.css'
const Comida = ()=>{
const [url,setUrl] = useState(`https:/www.themealdb.com/api/json/v1/1/search.php?f=a`);
const [item,setItem]=useState()
const [show,setShow]=useState(false);
const [search,setSearch]=useState("")
useEffect(()=>{
fetch(url).then(res=>res.json()).then(data=>{
    setItem(data.meals)
    setShow(true)
})
},[url])
const setIndex=(ABC)=>{
    setUrl(`https:/www.themealdb.com/api/json/v1/1/search.php?f=${ABC}`)
}
// función de buscar
const searchRecipe = (evt)=>{
    if (evt.key=="Enter"){
        setUrl(`https:/www.themealdb.com/api/json/v1/1/search.php?s=${search}`)
    }
}
    return(
        <>
        <div className="main">
            <div className="heading">
                <h1>busca la receta de tu comida</h1>
                <h4>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Adipisci aut magnam, natus blanditiis corrupti fuga aspernatur soluta repudiandae ab iste fugit ea saepe nesciunt, atque aliquam numquam maxime dolorum assumenda.</h4>
            </div>
            <div className="SearchBox">
                <input type="search" className="search-bar" onChange={e=>setSearch(e.target.value)} onKeyPress={searchRecipe}/>
            </div>

            {/* recetas */}
            <div className="container">
            {
                show ? <ComidaItem data={item}/>:"Not Found"
            }
            </div>

            {/* alfabeto */}
            <div className="indexContainer">
                <RecetaIndex ABCIndex={(ABC)=>setIndex(ABC)}/>
            </div>
        </div>
        </>
    )
}
export default Comida;