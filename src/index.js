import React from "react"; 
import ReactDOM from "react-dom/client";
import App from './App.js'; 


/**
 * define the variable 'content' here and fill it with the
 * needed code to render the bootstrap card
 **/

const container = document.getElementById("root");

// create a root
const root = ReactDOM.createRoot(container);

//render app to root
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
