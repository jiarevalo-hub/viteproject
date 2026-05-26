import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './styles/tareas.css';

// 1. Definimos la estructura idéntica de la tarea
interface Tarea {
  id: number;
  nombre: string;
  prioridad: 'Alta' | 'Media' | 'Baja';
  completada: boolean;
}

// 2. Props que vienen desde App.tsx mediante React Router
interface TareasProps {
  listaTareas: Tarea[];
  setListaTareas: React.Dispatch<React.SetStateAction<Tarea[]>>;
}

const Tareas: React.FC<TareasProps> = ({ listaTareas, setListaTareas }) => {
  // 3. Estados locales para capturar los datos del formulario (onChange)
  const [nombre, setNombre] = useState<string>('');
  const [prioridad, setPrioridad] = useState<'Alta' | 'Media' | 'Baja'>('Media');

  // 4. Manejador para agregar una nueva tarea (onSubmit)
  const handleAgregarTarea = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault(); // Evita que la página se recargue

    if (nombre.trim() === '') {
      alert('Por favor, ingresa el nombre de la tarea.');
      return;
    }

    const nuevaTarea: Tarea = {
      id: Date.now(), // ID único basado en milisegundos
      nombre: nombre,
      prioridad: prioridad,
      completada: false, // Inicia pendiente por defecto
    };

    setListaTareas([...listaTareas, nuevaTarea]); // Agrega la tarea a la lista global
    setNombre(''); // Limpia el input de texto
    setPrioridad('Media'); // Resetea el select a Media
  };

  // 5. Manejador para alternar el estado de completado (onClick)
  const toggleCompletar = (id: number) => {
    setListaTareas(
      listaTareas.map((t) => (t.id === id ? { ...t, completada: !t.completada } : t))
    );
  };

  // 6. Manejador para eliminar una tarea (onClick)
  const handleEliminarTarea = (id: number) => {
    setListaTareas(listaTareas.filter((tarea) => tarea.id !== id));
  };

  return (
    <div className="home-container">
      {/* Barra de Navegación Premium Unificada con Enlaces Reales */}
      <nav className="home-nav">
        <div className="nav-logo">
          <span className="logo-icon">⚡</span>TaskApp
        </div>
        <ul className="nav-links">
          <li>
            <Link to="/" className="nav-link-item">
              <span>Inicio</span>
            </Link>
          </li>
          <li>
            <Link to="/tasks" className="nav-link-item active">
              <span>Tareas</span>
            </Link>
          </li>
          <li>
            <Link to="/stats" className="nav-link-item">
              <span>Estadísticas</span>
            </Link>
          </li>
        </ul>
      </nav>

      {/* Contenido Principal */}
      <main className="home-main tareas-main-layout">
        <header className="home-header">
          <h1 className="home-title">Gestión de Tareas</h1>
          <p className="home-welcome">Crea, organiza y marca tus pendientes diarios.</p>
        </header>

        {/* Rejilla de Trabajo de Tareas */}
        <div className="tareas-grid">
          
          {/* Sección del Formulario (Inputs, Select y Botón) */}
          <section className="form-seccion">
            <h3>Nueva Tarea</h3>
            <form onSubmit={handleAgregarTarea} className="tarea-form">
              
              <div className="form-group">
                <label htmlFor="nombre-tarea">Tarea:</label>
                <input
                  id="nombre-tarea"
                  type="text"
                  placeholder="Ej. Estudiar TypeScript..."
                  value={nombre}
                  onChange={(e) => setNombre(e.target.value)} // <-- onChange
                  className="task-input"
                />
              </div>

              <div className="form-group">
                <label htmlFor="prioridad-tarea">Prioridad:</label>
                <select
                  id="prioridad-tarea"
                  value={prioridad}
                  onChange={(e) => setPrioridad(e.target.value as 'Alta' | 'Media' | 'Baja')} // <-- onChange
                  className="select-prioridad"
                >
                  <option value="Alta">Alta 🔥</option>
                  <option value="Media">Media ⚡</option>
                  <option value="Baja">Baja 🟢</option>
                </select>
              </div>

              <button type="submit" className="btn btn-primary btn-full">
                Agregar tarea
              </button>
            </form>
          </section>

          {/* Sección de la Lista de Tareas */}
          <section className="lista-seccion">
            <h3>Lista de Tareas ({listaTareas.length})</h3>
            
            {listaTareas.length === 0 ? (
              <p className="lista-vacia">No hay tareas pendientes. ¡Buen trabajo!</p>
            ) : (
              <ul className="lista-tareas">
                {listaTareas.map((tarea) => (
                  <li 
                    key={tarea.id} 
                    className={`tarea-item ${tarea.completada ? 'completada' : ''}`}
                  >
                    {/* Botón de Estado Interactivo (onClick) */}
                    <button className="btn-status" onClick={() => toggleCompletar(tarea.id)}>
                      {tarea.completada ? '✔' : '⏳'}
                    </button>
                    
                    {/* Información Básica Obligatoria */}
                    <div className="tarea-info">
                      <span className="tarea-nombre">{tarea.nombre}</span>
                      <span className={`badge-prioridad ${tarea.prioridad.toLowerCase()}`}>
                        {tarea.prioridad}
                      </span>
                    </div>

                    {/* Botón para Eliminar Tarea (onClick) */}
                    <button 
                      className="btn-eliminar" 
                      onClick={() => handleEliminarTarea(tarea.id)}
                      title="Eliminar tarea"
                    >
                      🗑️
                    </button>
                  </li>
                ))}
              </ul>
            )}
          </section>

        </div>
      </main>
    </div>
  );
};

export default Tareas;