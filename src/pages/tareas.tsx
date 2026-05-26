import React from 'react';
import Navbar from '../componentes/Navbar';
import TaskForm from '../componentes/TaskForm';
import TaskList from "../componentes/TaskList";
import './styles/tareas.css';

interface Tarea {
  id: number;
  nombre: string;
  prioridad: 'Alta' | 'Media' | 'Baja';
  completada: boolean;
}

interface TareasProps {
  listaTareas: Tarea[];
  setListaTareas: React.Dispatch<React.SetStateAction<Tarea[]>>;
}

const Tareas: React.FC<TareasProps> = ({ listaTareas, setListaTareas }) => {
  
  const handleAgregar = (nombre: string, prioridad: 'Alta' | 'Media' | 'Baja') => {
    const nueva = { id: Date.now(), nombre, prioridad, completada: false };
    setListaTareas([...listaTareas, nueva]);
  };

  const handleToggle = (id: number) => {
    setListaTareas(listaTareas.map(t => t.id === id ? { ...t, completada: !t.completada } : t));
  };

  const handleEliminar = (id: number) => {
    setListaTareas(listaTareas.filter(t => t.id !== id));
  };

  return (
    <div className="home-container">
      <Navbar /> {/* Componente Obligatorio 1 */}
      
      <main className="home-main tareas-main-layout">
        <header className="home-header">
          <h1 className="home-title">Gestión de Tareas</h1>
          <p className="home-welcome">Crea, organiza y marca tus pendientes diarios.</p>
        </header>

        <div className="tareas-grid">
          <TaskForm onAddTask={handleAgregar} />   {/* Componente Obligatorio 2 */}
          <TaskList 
            tareas={listaTareas} 
            onToggle={handleToggle} 
            onDelete={handleEliminar} 
          /> {/* Componentes Obligatorios 3 y 4 internos */}
        </div>
      </main>
    </div>
  );
};

export default Tareas;