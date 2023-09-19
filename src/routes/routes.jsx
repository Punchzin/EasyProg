// eslint-disable-next-line no-unused-vars
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Apresentation from '../pages/Apresentation';
import Authentication from '../pages/Authentication/Authentication';

const RoutesApp = () => {
  return (
    <Routes>
      <Route path='/login' element={<Authentication />}/>
      <Route path='/overview' element={<Apresentation />}/>
    </Routes>
  )
}

export default RoutesApp;