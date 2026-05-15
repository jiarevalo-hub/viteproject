import type { Task } from "../types/Task";

interface TaskItemProps {
  task: Task;
  onToggle: (id: number) => void;
  onDelete: (id: number) => void;
}

const PRIORITY_COLOR: Record<
  Task["priority"],
  { bg: string; border: string; text: string }
> = {
  Alta:  { bg: "#ff4d6d22", border: "#ff4d6d", text: "#ff4d6d" },
  Media: { bg: "#ffd16622", border: "#ffd166", text: "#c9a227" },
  Baja:  { bg: "#06d6a022", border: "#06d6a0", text: "#06d6a0" },
};

export default function TaskItem({ task, onToggle, onDelete }: TaskItemProps) {
  const colors = PRIORITY_COLOR[task.priority];

  return (
    <div className={`task-item ${task.completed ? "completed" : ""}`}>
      <button
        className={`task-check ${task.completed ? "done" : ""}`}
        onClick={() => onToggle(task.id)}
        title="Completar"
      >
        {task.completed ? "✓" : ""}
      </button>

      <div className="task-body">
        <div className={`task-title ${task.completed ? "done" : ""}`}>
          {task.title}
        </div>
        <span
          className="task-badge"
          style={{
            color: colors.text,
            background: colors.bg,
            borderColor: colors.border,
          }}
        >
          {task.priority}
        </span>
      </div>

      <button
        className="task-delete"
        onClick={() => onDelete(task.id)}
        title="Eliminar"
      >
        ✕
      </button>
    </div>
  );
}