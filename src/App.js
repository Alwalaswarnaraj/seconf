import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Link } from "react-router-dom";
// import {useState} from 'react'
// import Update from './Update'
// import Update2 from './Update2'
import Imageupdate from './Imageupdate'
// import Map from './Map'
// import Json from './Json'
// import DataFromFake from './DataFromFake'
// import Cards from './Cards'
// import Effect from './Effect'

// import Effect2 from './Effect2'
// import Effect3 from './Effect3'
// import Weather from './Weather'

import UseMemo from "./UseMemo";
// import ControlledComp from "./ControlledComp";
// import Search from "./Search";
export default function App() {
  return (
    <>
     <BrowserRouter>
     <Link to='/'>Home</Link>
     <Link to='/about'>about</Link>
     <Link to='/contact'>contact</Link>
     <Link to='/UseMemo'>useMemo</Link>
     <Link to='/image'>image</Link>
        <Routes>
            <Route path='/' element={<h1>Home Page</h1>}/>
            <Route path='/about' element={<h1>About Page</h1>}/>
            <Route path='/contact' element={<h1>contact Us</h1>}/>
            <Route path='/UseMemo' element={<UseMemo/>}></Route>
            <Route path='/image' element={<Imageupdate/>}></Route>
        </Routes>
     </BrowserRouter>
    </>
  );
}
