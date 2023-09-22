// eslint-disable-next-line no-unused-vars
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Apresentation from '../pages/Apresentation';
import Authentication from '../pages/Authentication/Authentication';
import Code from "../pages/Code/Code"

const RoutesApp = () => {
  return (
     <Routes>
       <Route path='/login' element={<Authentication />}/>
       <Route path='/apresentation' element={<Apresentation />}/>
       <Route path='/overview' element={<Code />}/>
     </Routes>
  )
}

export default RoutesApp;