import React, { useState, useEffect } from "react"
import Header from "./components/header/header.component";
import ActiveBar from "./components/active-stater/active-stater.component";
import "./App.css"
import CompanyList from "./components/companylist/companylist.component";
const App=()=> {
  const [filters,setFilters]=useState([])
  const func=name=>{

  }
  const [companiesFilter,setCompanyFilter]=useState([{
    name:'Photosnap',
    role:'Senior Frontend Developer',
    tags:{
      stack:"Frontend",
      role:"Senior",
      tech:['HTML','CSS','JavaScript']
    }
  },
  {
    name:'Manage',
    role:'Fullstack Developer',
    tags:{
      stack:"Fullstack",
      role:"Middle",
      tech:['Python','React']
    }
  },
  {
    name:'Account',
    role:'Junior Frontend Developer',
    tags:{
      stack:"Frontend",
      role:"Junior",
      tech:['React','Sass','JavaScript']
    }
  },
  {
    name:'MyHome',
    role:'Junior Frontend Developer',
    tags:{
      stack:"Frontend",
      role:"Junior",
      tech:['CSS','JavaScript']
    }
  },
  {
    name:'Loop-Studios',
    role:'Software Engieer',
    tags:{
      stack:"Fullstack",
      role:"Middle",
      tech:['Sass','JavaScript','Ruby']
    }
  },
  
  {
    name:'Faceit',
    role:'Junior Backend Developer',
    tags:{
      stack:"Backend",
      role:"Junior",
      tech:['JavaScript','Ruby']
    }
  },
])
useEffect(()=>{
  if(filters[0])
  {
 const newCompanies= companiesFilter.filter(company=>{
    return filters.some(item=>company.tags.tech.includes(item))
})
setCompanyFilter(newCompanies);
  }
}
,[filters])
  return (
    <>
    <div className="container">
   <Header / >
   <ActiveBar setAppFilters={setFilters}/>
   <CompanyList companiesFilter={companiesFilter}/>
   </div>
   </>
  );
}

export default App;
