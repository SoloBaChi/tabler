import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './Home/Home';
import AdminLogin from './AdminLogin';


const Main = () => {
  return (
  <Router>
    <Routes>
        <Route path='/' element={<AdminLogin/>}/>
        <Route path='dashboard' element={<Home/>}/>
    </Routes>
  </Router>
  )
}

export default Main;
