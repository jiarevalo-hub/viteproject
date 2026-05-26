import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Tareas from './pages/tareas';
import Estadisticas from './pages/estadisticas';

interface Tarea {
  id: number;
  nombre: string;
  prioridad: 'Alta' | 'Media' | 'Baja';
  completada: boolean;
}

const App: React.FC = () => {
  const [listaTareas, setListaTareas] = useState<Tarea[]>([
    { id: 1, nombre: 'Estudiar React con Vite', prioridad: 'Alta', completada: true },
    { id: 2, nombre: 'Configurar React Router', prioridad: 'Media', completada: false },
  ]);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route 
          path="/tasks" 
          element={<Tareas listaTareas={listaTareas} setListaTareas={setListaTareas} />} 
        />
        <Route 
          path="/stats" 
          element={<Estadisticas listaTareas={listaTareas} />} 
        />
      </Routes>
    </BrowserRouter>
  );
};

export default App;