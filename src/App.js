import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Link } from "react-router-dom";
import { createContext } from "react";
import CompA from "./components/CompA";
import Add from './higherorderComponentes/Add'
import Del from './higherorderComponentes/Del'
import Hoc from './higherorderComponentes/Hoc'
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

import UseRef from "./UseRef";
import UseMemo from "./UseMemo";
import UseRef2 from "./UseRef2";
// import ControlledComp from "./ControlledComp";
// import Search from "./Search";
import UseRef3 from "./UseRef3";
export const context = createContext()
export default function App() {

  let uid = 'swarnaraj'
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

     <UseRef/>
     {/* <UseRef2/> */}  {/**rerendering */}
     <UseRef3/>
    <context.Provider value={uid}>
      <CompA/>
    </context.Provider>
     

     <Hoc x={Add}/>
     <Hoc x={Del}/>
    </>
  );
}
