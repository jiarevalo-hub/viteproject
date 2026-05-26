import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar: React.FC = () => {
  const location = useLocation(); // Nos dice en qué URL estamos para poner la clase 'active'

  return (
    <nav className="home-nav">
      <div className="nav-logo"><span className="logo-icon">⚡</span>TaskApp</div>
      <ul className="nav-links">
        <li>
          <Link to="/" className={`nav-link-item ${location.pathname === '/' ? 'active' : ''}`}>
            <span>Inicio</span>
          </Link>
        </li>
        <li>
          <Link to="/tasks" className={`nav-link-item ${location.pathname === '/tasks' ? 'active' : ''}`}>
            <span>Tareas</span>
          </Link>
        </li>
        <li>
          <Link to="/stats" className={`nav-link-item ${location.pathname === '/stats' ? 'active' : ''}`}>
            <span>Estadísticas</span>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;