import React, { useState, useEffect } from "react"
import "./active-starter.styles.css"
import SingleStater from "../single-stater/single-stater.component"
const ActiveBar=({setAppFilters})=>{
    const [filters,setFilters]=useState(["HTML","CSS","Sass","JavaScript","React","Vue","Angular"])
    useEffect(()=>{
        setAppFilters([...filters]);
    },[filters])
    const removeItem=name=>{
        const newFilters=filters.filter(filter=> name!== filter)
        setFilters(newFilters);
    }
    return(
        <div className="active-bar_container">
        
            <div className="active-bar_items">
            {
                  filters.map(filter=>{
                   return <SingleStater name={filter} isRemover={true} removeItem={removeItem}/>
                  })
            }
            </div>
            
            <span className="active-bar_clear" >Clear</span>
        </div>
        
    )
}

export default ActiveBar;