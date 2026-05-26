import React from 'react';
import type { Task } from '../App';

interface TaskItemProps {
  task: Task;
  onToggle: (id: number) => void;
  onDelete: (id: number) => void;
}

const TaskItem: React.FC<TaskItemProps> = ({ task, onToggle, onDelete }) => {
  return (
    <li className={`tarea-item ${task.completed ? 'completada' : ''}`}>
      <button className="btn-status" onClick={() => onToggle(task.id)}>
        {task.completed ? '✔' : '⏳'}
      </button>
      <div className="tarea-info">
        <span className="tarea-nombre">{task.title}</span>
        <span className={`badge-prioridad ${task.priority.toLowerCase()}`}>
          {task.priority}
        </span>
      </div>
      <button className="btn-eliminar" onClick={() => onDelete(task.id)} title="Eliminar tarea">
        🗑️
      </button>
    </li>
  );
};

export default TaskItem;