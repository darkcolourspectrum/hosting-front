import React from "react";
import { Link } from 'react-router-dom';
import Login from "./components/Login";
import Register from "./components/Register/";
import { Router } from "express";
import './components/Login/login.css'



const Main = () => {
  return (
    <div> 
      <Login /> 
    </div>
  );
};


export default Main;