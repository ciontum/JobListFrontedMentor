import React, { useState, useEffect } from "react"
import Header from "./components/header/header.component";
import ActiveBar from "./components/active-stater/active-stater.component";
import "./App.css"
import CompanyList from "./components/companylist/companylist.component";
const App=()=> {
  const [filters,setFilters]=useState([])
  const [companiesFilter,setCompanyFilter]=useState([{
    name:'Photosnap',
    nameTags:{
      new:true,
      featured:true
    },
    role:'Senior Frontend Developer',
    tags:{
      stack:"Frontend",
      role:"Senior",
      tech:['HTML','CSS','JavaScript']
    },
    
    metaTags:{
      day:"1d",
      hours:"Full Time",
      region:"USA only",
    }
  },
  {
    name:'Manage',
    role:'Fullstack Developer',
    nameTags:{
      new:true,
      featured:true
    },
    tags:{
      stack:"Fullstack",
      role:"Middle",
      tech:['Python','React']
    },
    
    metaTags:{
      day:"1d",
      hours:"Part Time",
      region:"Remote",
    }
  },
  {
    name:'Account',
    role:'Junior Frontend Developer',
    nameTags:{
      new:true,
      featured:false
    },
    tags:{
      stack:"Frontend",
      role:"Junior",
      tech:['React','Sass','JavaScript']
    },
    
    metaTags:{
      day:"2d",
      hours:"Part Time",
      region:"USA only",
    }
  },
  {
    name:'MyHome',
    role:'Junior Frontend Developer',
    tags:{
      stack:"Frontend",
      role:"Junior",
      tech:['CSS','JavaScript']
    },
    
    metaTags:{
      day:"5d",
      hours:"Contract",
      region:"USA only",
    }
  },
  {
    name:'Loop-Studios',
    role:'Software Engieer',
    tags:{
      stack:"Fullstack",
      role:"Middle",
      tech:['Sass','JavaScript','Ruby']
    },
    
    metaTags:{
      day:"1w",
      hours:"Full Time",
      region:"Worldwide",
    }
  },
  
  {
    name:'Faceit',
    role:'Junior Backend Developer',
    tags:{
      stack:"Backend",
      role:"Junior",
      tech:['JavaScript','Ruby']
    },
    metaTags:{
      day:"2w",
      hours:"Full Time",
      region:"UK only",
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
