import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from "./pages/Dashboard";
import Main from "./pages/Main";
import Register from './pages/Main/components/Register';


function App() {
  return <Router>
    <Routes>
      <Route path="/" element = {<Main />} />
      <Route path="/register" element = {<Register />} />
      <Route path="/dashboard" element = {<Dashboard />} />
    </Routes>
  </Router> 
}

export default App;
