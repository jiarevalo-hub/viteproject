import React, { useState } from 'react';

interface TaskFormProps {
  onAddTask: (title: string, priority: string) => void;
}

const TaskForm: React.FC<TaskFormProps> = ({ onAddTask }) => {
  const [title, setTitle] = useState<string>('');
  const [priority, setPriority] = useState<string>('Media');

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (title.trim() === '') return;
    onAddTask(title, priority);
    setTitle('');
    setPriority('Media');
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
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="task-input"
          />
        </div>
        <div className="form-group">
          <label htmlFor="prioridad-tarea">Prioridad:</label>
          <select
            id="prioridad-tarea"
            value={priority}
            onChange={(e) => setPriority(e.target.value)}
            className="select-prioridad"
          >
            <option value="Alta">Alta</option>
            <option value="Media">Media</option>
            <option value="Baja">Baja</option>
          </select>
        </div>
        <button type="submit" className="btn btn-primary btn-full">Agregar tarea</button>
      </form>
    </section>
  );
};

export default TaskForm;