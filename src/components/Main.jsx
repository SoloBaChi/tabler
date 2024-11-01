import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './Home/Home';
import Header from './Header/Header';


const Main = () => {
  return (
  <Router>
     <Header/>
    <Routes>
        <Route path='/' element={<Home/>}/>
    </Routes>
  </Router>
  )
}

export default Main;
