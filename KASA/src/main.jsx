import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from "react-router-dom"

// Provider
import {DataProvider} from './provider/DataProvider'

// PAGES
import Home from "./pages/Home/Home"
import Housing from "./pages/Housing/Housing"
import About from "./pages/About/About"
import Error from "./pages/Error/Error"

// STYLE
import './style/global.scss'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <DataProvider>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/housing/:houseId' element={<Housing />} />
          <Route path='/a-propos' element={<About />} />
          <Route path='*' element={<Error />} />
        </Routes>
      </BrowserRouter>
    </DataProvider>
  </React.StrictMode>,
)
