import React from 'react';
import { Link } from 'react-router-dom';
import './styles/Home.css';
import Navbar from '../componentes/Navbar';

const Home: React.FC = () => {
  return (
    <div className="home-container">
      {/* Componente Obligatorio de Navegación */}
      <Navbar />

      {/* Contenido Principal de la Pantalla de Inicio */}
      <main className="home-main">
        <header className="home-header">
          <h1 className="home-title">Transformando tu Productividad Diaria: Bienvenidos a TaskApp Pro</h1>
          <p className="home-welcome">Nuestra misión principal es mitigar la sobrecarga cognitiva y el estrés 
            derivado de la acumulación de pendientes. Al estructurar tus actividades mediante métricas inteligentes y jerarquías de prioridad dinámicas, 
            transformamos el caos de la rutina diaria en un flujo de trabajo predecible, eficiente y orientado a resultados tangibles.</p>
        </header>

        {/* Accesos directos obligatorios usando rutas de React Router */}
        <section className="home-actions">
          <Link to="/tasks" className="btn btn-primary">Ir a tareas
          </Link>
          <Link to="/stats" className="btn btn-secondary">Ir a estadísticas
          </Link>
        </section>
      </main>
    </div>
  );
};

export default Home;