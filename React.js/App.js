import React from 'react'
import Login_form from './DRF/Login_form'
import Register_form from './DRF/Register_form'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'
import Dashboard_form from './DRF/Dashboard_form'
const App = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Login_form />} />
        <Route path='/register' element={<Register_form />} />
        <Route path='/dashboard' element={<Dashboard_form />} />
      </Routes>
    </Router>
  )
}

export default App
