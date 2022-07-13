import React from "react";
import { Routes, Route } from 'react-router-dom';

import Home from "./Home/Home";
import Login from "./Login/Login";
import Register from "./Register/Register";
import Products from "./Products/Products";
import Add from "./Products/Add/Add";

function Main () {
  return (
    <main className="main">
      <Routes>
        <Route element={<Home/>} path='/'/>
        <Route element={<Login/>} path='/Login/'/>
        <Route element={<Register/>} path='/register'/>
        <Route element={<Products/>} path='/Products'/>
        <Route element={<Add/>} path='/Add'/>
      </Routes>
    </main>
  )
}

export default Main;
