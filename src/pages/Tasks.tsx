import type { Task } from "../types/Task";
import TaskForm from "../components/TaskForm";
import TaskList from "../components/TaskList";

interface TasksProps {
  tasks: Task[];
  onAdd: (task: Omit<Task, "id" | "completed">) => void;
  onToggle: (id: number) => void;
  onDelete: (id: number) => void;
}

export default function Tasks({ tasks, onAdd, onToggle, onDelete }: TasksProps) {
  const done = tasks.filter((t) => t.completed).length;

  return (
    <div className="tasks">
      <div className="page-header">
        <h2 className="page-title">Tareas</h2>
        <span className="task-count">
          {done}/{tasks.length} completadas
        </span>
      </div>
      <TaskForm onAdd={onAdd} />
      <TaskList tasks={tasks} onToggle={onToggle} onDelete={onDelete} />
    </div>
  );
}