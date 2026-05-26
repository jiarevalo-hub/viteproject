import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Tareas from './pages/tareas';
import Estadisticas from './pages/estadisticas';
import './App.css';

export interface Task {
  id: number;
  title: string;
  priority: string;
  completed: boolean;
}

const App: React.FC = () => {
  // 1. Al iniciar, el estado busca si ya hay tareas guardadas en localStorage.
  // Si existen, las carga; si no, inicia con el arreglo por defecto.
  const [tasks, setTasks] = useState<Task[]>(() => {
    const savedTasks = localStorage.getItem('mis_tareas_app');
    return savedTasks ? JSON.parse(savedTasks) : [
      { id: 1, title: 'Estudiar React con Vite', priority: 'Alta', completed: true },
      { id: 2, title: 'Configurar React Router', priority: 'Media', completed: false },
    ];
  });

  // 2. Este useEffect se activa AUTOMÁTICAMENTE cada vez que agregas, 
  // eliminas o marcas como completada una tarea, y la guarda en el disco duro del navegador.
  useEffect(() => {
    localStorage.setItem('mis_tareas_app', JSON.stringify(tasks));
  }, [tasks]);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route 
          path="/tasks" 
          element={<Tareas tasks={tasks} setTasks={setTasks} />} 
        />
        <Route 
          path="/stats" 
          element={<Estadisticas tasks={tasks} />} 
        />
      </Routes>
    </BrowserRouter>
  );
};

export default App;