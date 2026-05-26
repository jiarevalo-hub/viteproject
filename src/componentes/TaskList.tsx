import React from 'react';
import TaskItem from './TaskItem';

interface Tarea {
  id: number;
  nombre: string;
  prioridad: 'Alta' | 'Media' | 'Baja';
  completada: boolean;
}

interface TaskListProps {
  tareas: Tarea[];
  onToggle: (id: number) => void;
  onDelete: (id: number) => void;
}

const TaskList: React.FC<TaskListProps> = ({ tareas, onToggle, onDelete }) => {
  return (
    <section className="lista-seccion">
      <h3>Lista de Tareas ({tareas.length})</h3>
      {tareas.length === 0 ? (
        <p className="lista-vacia">No hay tareas pendientes. ¡Buen trabajo!</p>
      ) : (
        <ul className="lista-tareas">
          {tareas.map((tarea) => (
            <TaskItem 
              key={tarea.id} 
              tarea={tarea} 
              onToggle={onToggle} 
              onDelete={onDelete} 
            />
          ))}
        </ul>
      )}
    </section>
  );
};

export default TaskList;