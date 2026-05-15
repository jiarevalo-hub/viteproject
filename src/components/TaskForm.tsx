import { useState } from "react";
import type { Task } from "../types/Task";

interface TaskFormProps {
  onAdd: (task: Omit<Task, "id" | "completed">) => void;
}

const PRIORITIES: Task["priority"][] = ["Alta", "Media", "Baja"];

export default function TaskForm({ onAdd }: TaskFormProps) {
  const [title, setTitle] = useState<string>("");
  const [priority, setPriority] = useState<Task["priority"]>("Alta");

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!title.trim()) return;
    onAdd({ title: title.trim(), priority });
    setTitle("");
  }

  return (
    <form className="task-form" onSubmit={handleSubmit}>
      <div className="form-row">
        <div className="form-group">
          <label className="form-label">Tarea</label>
          <input
            className="form-input"
            placeholder="Nombre de la tarea..."
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className="form-group" style={{ maxWidth: 140 }}>
          <label className="form-label">Prioridad</label>
          <select
            className="form-select"
            value={priority}
            onChange={(e) => setPriority(e.target.value as Task["priority"])}
          >
            {PRIORITIES.map((p) => (
              <option key={p}>{p}</option>
            ))}
          </select>
        </div>
        <button className="btn-add" type="submit" disabled={!title.trim()}>
          + Agregar tarea
        </button>
      </div>
    </form>
  );
}