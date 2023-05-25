import React, { createContext } from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import UserStore from './store/UserStore';
import DeviceStore from './store/DeviceStore';
import UserContext from './context';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <UserContext>
    {/* <React.StrictMode> */}
    < App />
    {/* </React.StrictMode> */}
  </UserContext>
);
