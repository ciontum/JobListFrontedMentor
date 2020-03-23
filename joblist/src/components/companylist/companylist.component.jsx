import React, { useState, useEffect } from "react"
import CompanyBox from "../companybox/companybox.component"
import "./companylist.styles.css"
const CompanyList=({companiesFilter})=>{
    const [svg,setSvg]=useState([]);
    useEffect(()=>{
         const reqSvgs=require.context('../../companylogos',true,/\.svg$/)
         const paths=reqSvgs.keys();
        const svgs = paths.map( path => reqSvgs ( path ) )
         setSvg(svgs)
    },[])
    return (
        <div className="company-list_container">
        {
            companiesFilter.map(company=>{
                return <CompanyBox
                                                         companyName={company.name} 
                                                         roleName={company.role}
                                                          tags={company.tags}   
                                                          svg={svg}/>

            })
        }
        </div>
    )
}

export default CompanyList;