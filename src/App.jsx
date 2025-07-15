import { Routes, Route, Link } from 'react-router-dom'
import Home from './components/Home'
import About from './components/About'
import './App.css'
import HeartBeat from './components/HeartBeat'
import PhraseClicker from './components/PhraseClicker'

function App() {
  return (
    <>

      <Routes>
        <Route path="/" element={<PhraseClicker />} />
        <Route path="/about" element={<HeartBeat />} />
      </Routes>
    </>
  )
}

export default App
