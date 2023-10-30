// eslint-disable-next-line no-unused-vars
import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import Apresentation from '../pages/Apresentation';
import Authentication from '../pages/Authentication';
import Code from "../pages/Code";
// import Login from '../pages/Authentication/login';
// import Register from '../pages/Authentication/register';

const RoutesApp = () => {
  return (
     <Routes>
       <Route path='/' element={<Navigate to="/overview" />}/>
       <Route path='/login' element={<Authentication />}/>
       {/* <Route path='/auth' element={<Login />}/>
       <Route path='/register' element={<Register />}/> */}
       <Route path='/overview' element={<Apresentation />}/>
       <Route path='/code' element={<Code />}/>
     </Routes>
  )
}

export default RoutesApp;