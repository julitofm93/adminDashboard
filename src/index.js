import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Footer from './components/footer/Footer';
import { DarkModeContextProvider } from './context/darkModeContext';

ReactDOM.render(
  <React.StrictMode>
    <DarkModeContextProvider>
      <App />
      <Footer/>
    </DarkModeContextProvider>
  </React.StrictMode>,
  document.getElementById('root')
);