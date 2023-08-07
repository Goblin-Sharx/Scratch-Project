import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';//makes the Redux store available
import App from './App.jsx';
import "./styles.css";
// import store from './store.js';


const root = createRoot(document.querySelector('#root'));
root.render(
    <App />
)