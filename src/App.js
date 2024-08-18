import React from 'react'
import "./App.scss"
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Landing from './pages/Landing/Landing';
import Team from './pages/Team/Team';
import Speaker from './pages/Speaker/Speaker';
import Swag from './pages/Swag/Swag'

const App = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/team" element={<Team />} />
          <Route path="/workshops" element={<Speaker/>}/>
          <Route path="/swags" element={<Swag/>}/>
          </Routes>
        </Router>
    </div>
  )
}

export default App
