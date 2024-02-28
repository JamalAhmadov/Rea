import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Community } from './Pages/Community'
import { Home } from './Pages/Home'
import { Features } from './Pages/Features'
import { Header } from './Components/Header'

const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/features' element={<Features />} />
        <Route path='/community' element={<Community />} />
      </Routes>
    </>

  )
}

export default App
