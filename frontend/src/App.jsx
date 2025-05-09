import React from 'react'
import LandingPage from './pages/LandingPage.jsx'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import LoginPage from './pages/LoginPage.jsx'
import SignupPage from './pages/SignupPage.jsx'

function App() {
  return (
      <Router>
        <Routes>
          <Route path='/'element = { <LandingPage />} />
          <Route path='/login' element = { <LoginPage />} />
          <Route path='/signup'element = { <SignupPage />} />
        </Routes>
        
      </Router>
  )
}

export default App