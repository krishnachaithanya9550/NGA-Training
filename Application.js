import React from 'react';
import { Routes, Route } from 'react-router-dom';
import {useSelector} from 'react-redux';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import Profile from './pages/Profile';
import ProtectedRoute from './components/ProtectedRoute';
import About from './About';
import { useState } from 'react';

// const Application = () => {
//   const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
const Application=()=>{
  const [isuserAuthenticated,setisAuthenticated]=useState(false);
  const doLogin=()=>{
    setisAuthenticated(true);
  }
  const Logout=(isuserAuthenticated)=>{
    setisAuthenticated(false);
  }


  return (
    <div>
        {isuserAuthenticated && (
          <>
          <Navbar/>
          </>
        )}


      <Routes>
        <Route element={<ProtectedRoute isAuthenticated={isuserAuthenticated}/>}>
        <Route path="/Home" Component={Home} />     
        <Route path="/About" Component={About}/>
        <Route path="/dashboard" Component={Dashboard}/>
        <Route path="/profile" Component={Profile} />
        </Route>
        <Route path="/" element={<Login data={doLogin}/>}/>
      </Routes>
      

    </div>
  );
};

export default Application;
