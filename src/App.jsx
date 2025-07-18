import React from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './pages/Home/Home'
import Navbar from './Components/Navbar/Navbar'
import MenuComponent from './Components/Menu/MenuComponent.jsx'


function App() {
  return (
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/menu' element={<MenuComponent />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
