import React from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './pages/Home/Home'
import Navbar from './Components/Navbar/Navbar'
import MenuComponent from './Components/Menu/MenuComponent.jsx'
import Food from './pages/Food.jsx'


function App() {
  return (
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/menu' element={<MenuComponent />} />
        <Route path='/food/:id' element={<Food />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
