import React from 'react';
import { Link } from 'react-router-dom';
import './styles/Home.css';
import Navbar from '../componentes/Navbar';
import './styles/Home.css';

const Home: React.FC = () => {
  return (
    <div className="home-container">
      {/* Componente Obligatorio de Navegación */}
      <Navbar />

      {/* Contenido Principal de la Pantalla de Inicio */}
      <main className="home-main">
        <header className="home-header">
          <h1 className="home-title">Gestor de Tareas Pro</h1>
          <p className="home-welcome">¡Hola de nuevo! Organiza tu día de forma eficiente.</p>
        </header>

        {/* Accesos directos obligatorios usando rutas de React Router */}
        <section className="home-actions">
          <Link to="/tasks" className="btn btn-primary">
            📋 Ir a tareas
          </Link>
          <Link to="/stats" className="btn btn-secondary">
            📊 Ir a estadísticas
          </Link>
        </section>
      </main>
    </div>
  );
};

export default Home;