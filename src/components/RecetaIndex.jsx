import React from 'react'

const RecetaIndex= ({ABCIndex}) => {
const ABC = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
var num =0;   
return (
    <>
        {
            ABC.map(item=>{
                return(
                    <div className="numBox" key={num++} onClick={()=>ABCIndex(item)}>
                        <h3>{item}</h3>
                    </div>
                )
            })
        }
    </>
  )
}
export default RecetaIndex