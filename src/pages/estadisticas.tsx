import React from 'react';
import './styles/Estadisticas.css';

interface Tarea {
  id: number;
  nombre: string;
  prioridad: 'Alta' | 'Media' | 'Baja';
  completada: boolean;
}

interface EstadisticasProps {
  cambiarPantalla: (pantalla: string) => void;
  listaTareas: Tarea[];
}

const Estadisticas: React.FC<EstadisticasProps> = ({ cambiarPantalla, listaTareas }) => {
  // Cálculos matemáticos de las tareas
  const totalTareas = listaTareas.length;
  const completadas = listaTareas.filter(tarea => tarea.completada).length;
  const pendientes = listaTareas.filter(tarea => !tarea.completada).length;

  // Cálculo del porcentaje de progreso
  const porcentajeProgreso = totalTareas > 0 ? Math.round((completadas / totalTareas) * 100) : 0;

  return (
    <div className="home-container">
      {/* Menú de Navegación Unificado */}
      <nav className="home-nav">
        <div className="nav-logo"><span className="logo-icon"></span>TaskApp</div>
        <ul className="nav-links">
          <li><button className="nav-btn" onClick={() => cambiarPantalla('home')}><span>Inicio</span></button></li>
          <li><button className="nav-btn" onClick={() => cambiarPantalla('tareas')}><span>Tareas</span></button></li>
          <li><button className="nav-btn active" onClick={() => cambiarPantalla('estadisticas')}><span>Estadísticas</span></button></li>
        </ul>
      </nav>

      {/* Contenido Principal */}
      <main className="home-main estadisticas-main-layout">
        <header className="home-header">
          <h1 className="home-title">Estadísticas de Rendimiento</h1>
          <p className="home-welcome">Un vistazo general de tu productividad y objetivos alcanzados.</p>
        </header>

        {/* Panel de Tarjetas de Indicadores */}
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
              <h4>Completadas</h4>
              <p className="stat-number">{completadas}</p>
            </div>
          </div>

          <div className="stat-card pendientes">
            <div className="stat-icon">⏳</div>
            <div className="stat-info">
              <h4>Pendientes</h4>
              <p className="stat-number">{pendientes}</p>
            </div>
          </div>

        </div>

        {/* Barra de Progreso Visual Extra */}
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