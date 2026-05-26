import React from 'react';
import TaskItem from './TaskItem';
import type { Task } from '../App';

interface TaskListProps {
  tasks: Task[];
  onToggle: (id: number) => void;
  onDelete: (id: number) => void;
}

const TaskList: React.FC<TaskListProps> = ({ tasks, onToggle, onDelete }) => {
  return (
    <section className="lista-seccion">
      <h3>Lista de Tareas ({tasks.length})</h3>
      {tasks.length === 0 ? (
        <p className="lista-vacia">No hay tareas pendientes. ¡Buen trabajo!</p>
      ) : (
        <ul className="lista-tareas">
          {tasks.map((task) => (
            <TaskItem 
              key={task.id} 
              task={task} 
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