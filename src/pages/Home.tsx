import React from 'react';
import { Link } from 'react-router-dom';
import './styles/Home.css';

const Home: React.FC = () => {
  return (
    <div className="home-container">
      <nav className="home-nav">
        <div className="nav-logo"><span className="logo-icon">⚡</span>TaskApp</div>
        <ul className="nav-links">
          <li><Link to="/" className="nav-link-item active"><span>Inicio</span></Link></li>
          <li><Link to="/tasks" className="nav-link-item"><span>Tareas</span></Link></li>
          <li><Link to="/stats" className="nav-link-item"><span>Estadísticas</span></Link></li>
        </ul>
      </nav>

      <main className="home-main">
        <header className="home-header">
          <h1 className="home-title">Gestor de Tareas Pro</h1>
          <p className="home-welcome">¡Hola de nuevo! Organiza tu día de forma eficiente.</p>
        </header>

        <section className="home-actions">
          <Link to="/tasks" className="btn btn-primary">📋 Ir a tareas</Link>
          <Link to="/stats" className="btn btn-secondary">📊 Ir a estadísticas</Link>
        </section>
      </main>
    </div>
  );
};

export default Home;