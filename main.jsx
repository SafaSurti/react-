import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
import React from "react";
import ReactDom from "react-dom/client";
const rootDiv = document.getElementById("root")
ReactDom.createRoot(rootDiv).render(
  <div>
    <h1>hello react</h1>
    <h1>hello world</h1>
    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odit animi itaque consectetur est quam voluptas sunt doloribus, quis alias velit cum quas deserunt. Cumque impedit ut optio exercitationem itaque excepturi.</p>
    <img src="/public/vite.svg" alt="" />
  </div>
)


