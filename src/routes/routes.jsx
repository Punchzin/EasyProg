// eslint-disable-next-line no-unused-vars
import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import Apresentation from '../pages/Apresentation';
import Authentication from '../pages/Authentication';
import Code from "../pages/Code";

const RoutesApp = () => {
  return (
     <Routes>
              {/* <Style.AsideAction isSelected={actionIsSelected} title={actionTitle} onClick={onClick}>
        <i className={actionIcon}></i>
        </Style.AsideAction> */}
       <Route path='/' element={<Navigate to="/overview" />}/>
       <Route path='/login' element={<Authentication />}/>
       <Route path='/overview' element={<Apresentation />}/>
       <Route path='/code' element={<Code />}/>
     </Routes>
  )
}

export default RoutesApp;