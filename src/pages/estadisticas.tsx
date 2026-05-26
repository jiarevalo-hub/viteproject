import React from 'react';
import Navbar from '../componentes/Navbar';
import type { Task } from '../App';
import './styles/Estadisticas.css';

interface EstadisticasProps {
  tasks: Task[];
}

const Estadisticas: React.FC<EstadisticasProps> = ({ tasks }) => {
  // Cálculos automáticos obligatorios adaptados al modelo oficial en inglés
  const totalTareas = tasks.length;
  const completadas = tasks.filter(task => task.completed).length;
  const pendientes = tasks.filter(task => !task.completed).length;

  const porcentajeProgreso = totalTareas > 0 ? Math.round((completadas / totalTareas) * 100) : 0;

  return (
    <div className="home-container">
      <Navbar />

      <main className="home-main estadisticas-main-layout">
        <header className="home-header">
          <h1 className="home-title">Estadísticas de Rendimiento</h1>
          <p className="home-welcome">Un vistazo general de tu productividad y objetivos alcanzados.</p>
        </header>

        {/* Indicadores explícitamente requeridos por la rúbrica (image_db6f86.png) */}
        <div className="stats-grid">
          <div className="stat-card total">
            <div className="stat-icon">📊</div>
            <div className="stat-info">
              <h4>Total de tareas</h4>
              <p className="stat-number">{totalTareas}</p>
            </div>
          </div>

          <div className="stat-card completadas">
            <div className="stat-icon">✅</div>
            <div className="stat-info">
              <h4>Tareas completadas</h4>
              <p className="stat-number">{completadas}</p>
            </div>
          </div>

          <div className="stat-card pendientes">
            <div className="stat-icon">⏳</div>
            <div className="stat-info">
              <h4>Tareas pendientes</h4>
              <p className="stat-number">{pendientes}</p>
            </div>
          </div>
        </div>

        <div className="progress-section">
          <div className="progress-labels">
            <span>Progreso General</span>
            <span>{porcentajeProgreso}%</span>
          </div>
          <div className="progress-bar-bg">
            <div className="progress-bar-fill" style={{ width: `${porcentajeProgreso}%` }}></div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Estadisticas;