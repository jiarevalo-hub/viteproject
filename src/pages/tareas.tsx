import React from 'react';
import Navbar from '../componentes/Navbar';
import TaskForm from '../componentes/TaskForm';
import TaskList from "../componentes/TaskList";
import './styles/tareas.css';
import type { Task } from '../App';


interface TareasProps {
  
  tasks: Task[];
  setTasks: React.Dispatch<React.SetStateAction<Task[]>>;
}

const Tareas: React.FC<TareasProps> = ({ tasks, setTasks }) => {
  
  const handleAgregar = (title: string, priority: string) => {
    const nueva: Task = { id: Date.now(), title, priority, completed: false };
    setTasks([...tasks, nueva]);
  };

  const handleToggle = (id: number) => {
    setTasks(tasks.map(t => t.id === id ? { ...t, completed: !t.completed } : t));
  };

  const handleEliminar = (id: number) => {
    setTasks(tasks.filter(t => t.id !== id));
  };

  return (
    <div className="home-container">
      <Navbar />
      
      <main className="home-main tareas-main-layout">
        <header className="home-header">
          <h1 className="home-title">Gestión de Tareas</h1>
          <p className="home-welcome">Crea, organiza y marca tus pendientes diarios.</p>
        </header>

        <div className="tareas-grid">
          <TaskForm onAddTask={handleAgregar} />
          <TaskList 
            tasks={tasks} 
            onToggle={handleToggle} 
            onDelete={handleEliminar} 
          />
        </div>
      </main>
    </div>
  );
};

export default Tareas;