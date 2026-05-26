import React, { useState } from 'react'; // El useState se queda solo para el "nombre" y "prioridad" del formulario
import './styles/tareas.css';

// 1. DEFINIMOS LA ESTRUCTURA DE LA TAREA (Igual que antes)
interface Tarea {
  id: number;
  nombre: string;
  prioridad: 'Alta' | 'Media' | 'Baja';
  completada: boolean;
}

// 2. ACTUALIZAMOS LAS PROPS PARA RECIBIR LA LISTA Y SU SETTER
interface TareasProps {
  cambiarPantalla: (pantalla: string) => void;
  listaTareas: Tarea[];                                       // <-- Nueva Prop: Recibe el arreglo de tareas
  setListaTareas: React.Dispatch<React.SetStateAction<Tarea[]>>; // <-- Nueva Prop: Recibe la función para modificarlas
}

// 3. RECIBIMOS LAS NUEVAS PROPS EN LOS PARÉNTESIS DEL COMPONENTE
const Tareas: React.FC<TareasProps> = ({ cambiarPantalla, listaTareas, setListaTareas }) => {
  
  // 4. ESTADOS PARA EL FORMULARIO (Se quedan exactamente igual)
  const [nombre, setNombre] = useState<string>('');
  const [prioridad, setPrioridad] = useState<'Alta' | 'Media' | 'Baja'>('Media');

  // ❌ AQUÍ BORRASTE LA LÍNEA: const [listaTareas, setListaTareas] = useState<Tarea[]>([...])
  // Ya no la necesitas porque las variables "listaTareas" y "setListaTareas" ahora entran por las props de arriba.

  const handleAgregarTarea = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (nombre.trim() === '') {
      alert('Por favor, ingresa el nombre de la tarea.');
      return;
    }
    const nuevaTarea: Tarea = {
      id: Date.now(),
      nombre: nombre,
      prioridad: prioridad,
      completada: false,
    };
    
    // Esto seguirá funcionando idéntico porque la prop se llama igual que tu estado anterior
    setListaTareas([...listaTareas, nuevaTarea]); 
    setNombre('');
    setPrioridad('Media');
  };

  const toggleCompletar = (id: number) => {
    // Esto también seguirá funcionando sin tocar nada
    setListaTareas(listaTareas.map(t => t.id === id ? { ...t, completada: !t.completada } : t));
  };

  const handleEliminarTarea = (id: number) => {
    // Esto también funciona directo
    setListaTareas(listaTareas.filter(tarea => tarea.id !== id));
  };

  return (
    <div className="home-container">
      {/* Menú de Navegación */}
      <nav className="home-nav">
        <div className="nav-logo"><span className="logo-icon"></span>TaskApp</div>
        <ul className="nav-links">
          <li><button className="nav-btn" onClick={() => cambiarPantalla('home')}><span>Inicio</span></button></li>
          <li><button className="nav-btn active" onClick={() => cambiarPantalla('tareas')}><span>Tareas</span></button></li>
           <li><button className="nav-btn" onClick={() => cambiarPantalla('estadisticas')}><span>Estadísticas</span></button></li>
        </ul>
      </nav>

      {/* Contenido Principal */}
      <main className="home-main tareas-main-layout">
        <header className="home-header">
          <h1 className="home-title">Gestión de Tareas</h1>
          <p className="home-welcome">Crea, organiza y marca tus pendientes diarios.</p>
        </header>

        <div className="tareas-grid">
          {/* Formulario */}
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
                  onChange={(e) => setNombre(e.target.value)}
                  className="task-input"
                />
              </div>

              <div className="form-group">
                <label htmlFor="prioridad-tarea">Prioridad:</label>
                <select
                  id="prioridad-tarea"
                  value={prioridad}
                  onChange={(e) => setPrioridad(e.target.value as 'Alta' | 'Media' | 'Baja')}
                  className="select-prioridad"
                >
                  <option value="Alta">Alta</option>
                  <option value="Media">Media</option>
                  <option value="Baja">Baja</option>
                </select>
              </div>

              <button type="submit" className="btn btn-primary btn-full">
                Agregar tarea
              </button>
            </form>
          </section>

          {/* Lista de Tareas */}
          <section className="lista-seccion">
            <h3>Lista de Tareas ({listaTareas.length})</h3>
            {listaTareas.length === 0 ? (
              <p className="lista-vacia">No hay tareas pendientes. ¡Buen trabajo!</p>
            ) : (
              <ul className="lista-tareas">
                {listaTareas.map((tarea) => (
                  <li key={tarea.id} className={`tarea-item ${tarea.completada ? 'completada' : ''}`}>
                    <button className="btn-status" onClick={() => toggleCompletar(tarea.id)}>
                      {tarea.completada ? '✔' : '⏳'}
                    </button>
                    
                    <div className="tarea-info">
                      <span className="tarea-nombre">{tarea.nombre}</span>
                      <span className={`badge-prioridad ${tarea.prioridad.toLowerCase()}`}>
                        {tarea.prioridad}
                      </span>
                    </div>

                    {/* ==========================================
                       NUEVO BOTÓN: ELIMINAR CON EVENTO ONCLICK
                       ========================================== */}
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