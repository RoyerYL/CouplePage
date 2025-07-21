import { Routes, Route, Link } from 'react-router-dom'
import Home from './components/Home'
import About from './components/About'
import './App.css'
import HeartBeat from './components/HeartBeat'
import PhraseClicker from './components/PhraseClicker'
import LandingPage from './components/LandingPage'

function App() {
  return (
    <>

      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/about" element={<HeartBeat />} />
      </Routes>
    </>
  )
}

export default App
