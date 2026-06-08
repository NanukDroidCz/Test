import { Link } from 'react-router-dom'
import { Home, Database, Package, Wand2 } from 'lucide-react'
import './Navigation.css'

function Navigation() {
  return (
    <nav className="navigation">
      <div className="nav-header">
        <h1>🎮 DayZ Studio</h1>
      </div>
      <ul className="nav-menu">
        <li><Link to="/"><Home size={20} /> Domů</Link></li>
        <li><Link to="/items"><Database size={20} /> Itemy</Link></li>
        <li><Link to="/mods"><Package size={20} /> Mody</Link></li>
        <li><Link to="/ai-builder"><Wand2 size={20} /> AI Builder</Link></li>
      </ul>
    </nav>
  )
}

export default Navigation
