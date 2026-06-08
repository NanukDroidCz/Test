import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navigation from './components/Navigation'
import Home from './pages/Home'
import Items from './pages/Items'
import Mods from './pages/Mods'
import AIBuilder from './pages/AIBuilder'
import './App.css'

function App() {
  return (
    <Router>
      <div className="app">
        <Navigation />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/items" element={<Items />} />
            <Route path="/mods" element={<Mods />} />
            <Route path="/ai-builder" element={<AIBuilder />} />
          </Routes>
        </main>
      </div>
    </Router>
  )
}

export default App
