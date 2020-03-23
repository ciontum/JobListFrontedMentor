import React, { useEffect, useState } from "react"
import "./companybox.styles.css"
import SingleStater from "../single-stater/single-stater.component"
const CompanyBox=({companyName,roleName,tags,svg})=>{
    const [newSvg,setNewSvg]=useState('')
    useEffect(()=>{
        let newSvg=svg.filter(svgs=>svgs.includes(companyName.toLowerCase()))
        console.log(companyName,newSvg)
        setNewSvg(newSvg);
    },[svg,companyName])
     return(
            <div className="company-box_container">
                <div className="company-box_image">
                <img src={newSvg} />
                </div>
                <div className="company-box_content_container">
                    <div className="company-box_content_header">
                        <span className="company-box_content_header_name">{companyName}</span>
                    </div>
                    <div className="company-box_content_title">{roleName}</div>
                    <ul className="company-box_content_details">
                        <li className="list-style_none">
                            <span>1d ago</span>
                        </li>
                        <li>
                           <span>Full Time</span>
                        </li>
                        <li>
                           <span> USA only</span>
                        </li>
                    </ul>
                </div>
                <div className="company-box_filters_container">
                        <SingleStater name={tags.stack} />
                        <SingleStater name={tags.role} / >
                        {
                        tags.tech.map(tech=>{
                            return <SingleStater name={tech}/>
                        }
                        )
                        }
                </div>
            </div>
    )
}
export default CompanyBox;