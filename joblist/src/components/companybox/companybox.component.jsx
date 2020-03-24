import React, { useEffect, useState } from "react"
import "./companybox.styles.css"
import SingleStater from "../single-stater/single-stater.component"
const CompanyBox=({companyName,roleName,tags,svg,metaTags,nameTags})=>{
    const [newSvg,setNewSvg]=useState('')
    useEffect(()=>{
        let newSvg=svg.filter(svgs=>svgs.includes(companyName.toLowerCase()))
        console.log(companyName,newSvg)
        setNewSvg(newSvg);
    },[svg,companyName])
     return(
            <div className="company-box_container">
                <div className="company-box_image">
                <img src={newSvg} alt="logo" />
                </div>
                <div className="company-box_content_container">
                    <div className="company-box_content_header">
                        <span className="company-box_content_header_name">{companyName}</span>
                        {
                            nameTags?
                            nameTags.new ?

                            <span className="company-box_content_header_new">NEW!</span>
                            :
                            <></>
                            :<></>
                        }
                        {
                            nameTags?
                                nameTags.featured?
                            <span className="company-box_content_header_new" style={{marginLeft:"0",background:"black"}}>FEATURED</span>
                            :
                            <></>
                            :
                            <></>
                        }
                    </div>
                    <div className="company-box_content_title">{roleName}</div>
                    <ul className="company-box_content_details">
                        <li className="list-style_none">
                            <span>{metaTags.day} ago</span>
                        </li>
                        <li>
                           <span>{metaTags.hours}</span>
                        </li>
                        <li>
                           <span> {metaTags.region}</span>
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