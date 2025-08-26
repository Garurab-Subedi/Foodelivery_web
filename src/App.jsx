import React from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './pages/Home/Home'
import Navbar from './Components/Navbar/Navbar'
import MenuComponent from './Components/Menu/MenuComponent.jsx'
import Food from './pages/Food.jsx'
import Footer from './Components/Footer/Footer.jsx'
import Menu from './pages/Menu/Menu.jsx'


function App() {
  return (
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/menu' element={<Menu  />} />
        <Route path='/food/:id' element={<Food />} />
      </Routes>
      <Footer/>
    </BrowserRouter>
  )
}

export default App
