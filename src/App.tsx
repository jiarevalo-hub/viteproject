import React, { useState } from 'react';
import Home from './pages/Home';
import Tareas from './pages/tareas';
import Estadisticas from './pages/estadisticas'; // <-- Importamos la nueva página

interface Tarea {
  id: number;
  nombre: string;
  prioridad: 'Alta' | 'Media' | 'Baja';
  completada: boolean;
}

const App: React.FC = () => {
  const [pantalla, setPantalla] = useState<string>('home');
  
  // El estado de las tareas ahora vive aquí para compartirse globalmente
  const [listaTareas, setListaTareas] = useState<Tarea[]>([
    { id: 1, nombre: 'Estudiar React', prioridad: 'Alta', completada: true },
    { id: 2, nombre: 'Diseñar la base de datos', prioridad: 'Media', completada: false },
    { id: 3, nombre: 'Configurar estilos CSS', prioridad: 'Baja', completada: false },
  ]);

  const renderPantalla = () => {
    switch (pantalla) {
      case 'home':
        return <Home cambiarPantalla={setPantalla} />;
      case 'tareas':
        return (
          <Tareas 
            cambiarPantalla={setPantalla} 
            listaTareas={listaTareas} 
            setListaTareas={setListaTareas} 
          />
        );
      case 'estadisticas':
        return (
          <Estadisticas 
            cambiarPantalla={setPantalla} 
            listaTareas={listaTareas} 
          />
        );
      default:
        return <Home cambiarPantalla={setPantalla} />;
    }
  };

  return <div className="app-container">{renderPantalla()}</div>;
};

export default App;