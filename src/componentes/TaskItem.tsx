import React from 'react';

interface Tarea {
  id: number;
  nombre: string;
  prioridad: 'Alta' | 'Media' | 'Baja';
  completada: boolean;
}

interface TaskItemProps {
  tarea: Tarea;
  onToggle: (id: number) => void;
  onDelete: (id: number) => void;
}

const TaskItem: React.FC<TaskItemProps> = ({ tarea, onToggle, onDelete }) => {
  return (
    <li className={`tarea-item ${tarea.completada ? 'completada' : ''}`}>
      <button className="btn-status" onClick={() => onToggle(tarea.id)}>
        {tarea.completada ? '✔' : '⏳'}
      </button>
      <div className="tarea-info">
        <span className="tarea-nombre">{tarea.nombre}</span>
        <span className={`badge-prioridad ${tarea.prioridad.toLowerCase()}`}>
          {tarea.prioridad}
        </span>
      </div>
      <button className="btn-eliminar" onClick={() => onDelete(tarea.id)} title="Eliminar tarea">
        🗑️
      </button>
    </li>
  );
};

export default TaskItem;