import React from 'react';
import Navbar from '../componentes/Navbar';
import './styles/Estadisticas.css';

interface Tarea {
  id: number;
  nombre: string;
  prioridad: 'Alta' | 'Media' | 'Baja';
  completada: boolean;
}

interface EstadisticasProps {
  listaTareas: Tarea[];
}

const Estadisticas: React.FC<EstadisticasProps> = ({ listaTareas }) => {
  // Cálculos automáticos basados en los datos compartidos de App.tsx
  const totalTareas = listaTareas.length;
  const completadas = listaTareas.filter(tarea => tarea.completada).length;
  const pendientes = listaTareas.filter(tarea => !tarea.completada).length;

  // Cálculo del porcentaje de progreso para la barra visual
  const porcentajeProgreso = totalTareas > 0 ? Math.round((completadas / totalTareas) * 100) : 0;

  return (
    <div className="home-container">
      {/* Componente Obligatorio de Navegación */}
      <Navbar />

      {/* Panel de Estadísticas (Stats) */}
      <main className="home-main estadisticas-main-layout">
        <header className="home-header">
          <h1 className="home-title">Estadísticas de Rendimiento</h1>
          <p className="home-welcome">Un vistazo general de tu productividad y objetivos alcanzados.</p>
        </header>

        {/* Cuadrícula de Indicadores Mínimos Requeridos */}
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

        {/* Barra de Progreso Visual */}
        <div className="progress-section">
          <div className="progress-labels">
            <span>Progreso General</span>
            <span>{porcentajeProgreso}%</span>
          </div>
          <div className="progress-bar-bg">
            <div 
              className="progress-bar-fill" 
              style={{ width: `${porcentajeProgreso}%` }}
            ></div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Estadisticas;