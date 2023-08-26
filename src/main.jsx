import React from 'react';
import ReactDOM from 'react-dom/client';
import './global/styles.global.css';
import 'remixicon/fonts/remixicon.css';
import Authentication from './pages/Authentication/Authentication';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Authentication />
  </React.StrictMode>,
)
