import React from 'react'
import "./App.css"
import { Route, Routes } from 'react-router-dom'
import Home from './Routes/Home'
import { Navbar } from './Components/'

const App = () => {
  return (
    <div className='app'>
      {/* <Navbar /> */}
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
      </Routes>
      {/* <Footer /> */}
    </div>
  )
}

export default App