import React from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import {resta, sumar } from './math.js' 
createRoot(document.getElementById('root')).render(
  <App />
)