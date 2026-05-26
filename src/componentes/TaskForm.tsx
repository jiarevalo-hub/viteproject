import React, { useState } from 'react';

interface TaskFormProps {
  onAddTask: (nombre: string, prioridad: 'Alta' | 'Media' | 'Baja') => void;
}

const TaskForm: React.FC<TaskFormProps> = ({ onAddTask }) => {
  const [nombre, setNombre] = useState<string>('');
  const [prioridad, setPrioridad] = useState<'Alta' | 'Media' | 'Baja'>('Media');

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (nombre.trim() === '') return;
    onAddTask(nombre, prioridad);
    setNombre('');
    setPrioridad('Media');
  };

  return (
    <section className="form-seccion">
      <h3>Nueva Tarea</h3>
      <form onSubmit={handleSubmit} className="tarea-form">
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
            <option value="Alta">Alta 🔥</option>
            <option value="Media">Media ⚡</option>
            <option value="Baja">Baja 🟢</option>
          </select>
        </div>
        <button type="submit" className="btn btn-primary btn-full">Agregar tarea</button>
      </form>
    </section>
  );
};

export default TaskForm;