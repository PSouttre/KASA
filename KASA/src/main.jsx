import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from "react-router-dom"

// PAGES
import Home from "./pages/Home/Home"
import About from "./pages/About/About"
import Error from "./pages/Error/Error"

// STYLE
import './style/global.scss'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <div className='main'>
      <h1>HEADER</h1>

      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/a-propos' element={<About />} />
          <Route path='*' element={<Error />} />
        </Routes>
      </BrowserRouter>

      <h1>FOOTER</h1>
    </div>
  </React.StrictMode>,
)
