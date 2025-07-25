import React from 'react'
import LandingPage from './pages/LandingPage.jsx'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import LoginPage from './pages/LoginPage.jsx'
import SignupPage from './pages/SignupPage.jsx'
import MenuPage from './pages/MenuPage.jsx'
import CheckoutPage from './pages/CheckoutPage.jsx'
import Navbar from './components/Navbar.jsx'

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/'element = { <LandingPage />} />
          <Route path='/login' element = { <LoginPage />} />
          <Route path='/signup'element = { <SignupPage />} />
          <Route path='/menu' element = { <MenuPage /> } />
          <Route path='/checkout' element = { <CheckoutPage /> } />
        </Routes>
      </Router>
    </>
  )
}

export default App