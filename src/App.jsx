import React, { useState } from 'react'
import Home from './components/Home'
import { BrowserRouter, Routes,Route } from 'react-router-dom'
import Navbar from './components/Navbar'

const App = () => {
  const [data,setData] = useState("");
  const getSearch = (data)=>{
    setData(data);
  }


  return (
    <div>
      <Navbar onSubmit={getSearch} />
      <Home data={data} ark={"arkk"} />
    </div>
  )
}

export default App