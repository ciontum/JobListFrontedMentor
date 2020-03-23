import React from "react"
import "./single-stater.styles.css"
const SingleStater=({name,isRemover,removeItem})=>{
    
    return(
        <div className="single-stater_item">
                   <p>{name}</p> 
                   {
                       isRemover ?
                   <div className="single-stater_remove" onClick={()=>removeItem(name)}>&#10005;</div>
                   :<></>
                   }
        </div>
    )
}

export default SingleStater;