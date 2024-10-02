import React from 'react'
import "./App.css"
import { Route, Routes } from 'react-router-dom'
import Home from './Routes/Home'
import { MiceService, SelfDrive, Sightseeing, Attractions, ServicesPage, Navbar, Contact, AboutGallery, About, AboutUAE, TourExcursionsPage } from './Components/'

const App = () => {
  return (
    <div className='app'>
      <br />
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        {/* About Pages */}
        <Route path='/about' element={<About />} />
        <Route path='/aboutUae' element={<AboutUAE />} />
        <Route path='/aboutGallery' element={<AboutGallery />} />
        {/* Services Pages */}
        <Route path='/services' element={<ServicesPage />} />
        {/* tourExcursions Pages */}
        <Route path='/tourExcursions' element={<TourExcursionsPage />} />
        <Route path='/attractions' element={<Attractions />} />
        <Route path='/sightseeing' element={<Sightseeing />} />
        <Route path='/selfDrive' element={<SelfDrive />} />
        {/* miceService Pages */}
        <Route path='/miceService' element={<MiceService />} />
        {/* Contact Pages */}
        <Route path='/contact' element={<Contact />} />
      </Routes>
    </div>
  )
}

export default App