import React, { useEffect, useState } from 'react'
import "./Navbar.css"
import { FaSearch } from "react-icons/fa";
import { FaFilter } from "react-icons/fa";
import NewsApi from '../api/NewsApi';
import Home from './Home';


const Navbar = ({onSubmit}) => {
  const [search,setSearch] = useState("");
  const [open ,setOpen] = useState(false);


  const handleSubmit = (e) =>{
    e.preventDefault();
    onSubmit(search);
  }

  return (
    
    <div className="nav">
        <h1>News</h1>
        <form className="wrapper" onSubmit={handleSubmit} >
            <button className='icon' type='submit' ><FaSearch/></button>
            <input type="text" placeholder='Search' onChange={(e)=>setSearch(e.target.value)}  />
        </form>
        <div className='filter-container'>
          <button className='filter-btn' onClick={()=>setOpen((prev)=>!prev)} ><FaFilter/></button>
          {open && <NavItem/>}
        </div>
        
       
    </div>
  )
}

export default Navbar


const NavItem = ()=>{
  const [filterItem,setFilterItem]=useState("bitcoin");

  useEffect(()=>{
     NewsApi(filterItem);
  },[filterItem])
  
  return(
  <div className='nav-box'>
  <ul className='nav-ul-list'>
    <li  onClick={()=>(setFilterItem("bitcoin"))}>Bitcoin</li>
    <li  onClick={()=>setFilterItem("technology")}>Technology</li>
    <li  onClick={()=>setFilterItem("india")}>India</li>
    <li  onClick={()=>setFilterItem("america")}>America</li>
    <li  onClick={()=>setFilterItem("treading")}>Treading</li>
  </ul>
  </div>
  )
}