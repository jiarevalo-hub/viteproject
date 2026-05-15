import { useState } from "react";
import type { Task } from "./types/Task";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Tasks from "./pages/Tasks";
import Stats from "./pages/Stats";
import "./index.css";

export default function App() {
  const [page, setPage] = useState<string>("home");
  const [tasks, setTasks] = useState<Task[]>([
    { id: 1, title: "Estudiar React con TypeScript", priority: "Alta",  completed: false },
    { id: 2, title: "Revisar conceptos de hooks",    priority: "Media", completed: true  },
    { id: 3, title: "Completar actividad integradora", priority: "Alta", completed: false },
  ]);

  function handleAdd(newTask: Omit<Task, "id" | "completed">): void {
    setTasks((prev) => [
      ...prev,
      { id: Date.now(), ...newTask, completed: false },
    ]);
  }

  function handleToggle(id: number): void {
    setTasks((prev) =>
      prev.map((t) => (t.id === id ? { ...t, completed: !t.completed } : t))
    );
  }

  function handleDelete(id: number): void {
    setTasks((prev) => prev.filter((t) => t.id !== id));
  }

  return (
    <div className="app">
      <Navbar page={page} setPage={setPage} />

      {page === "home"  && <Home  setPage={setPage} tasks={tasks} />}
      {page === "tasks" && (
        <Tasks
          tasks={tasks}
          onAdd={handleAdd}
          onToggle={handleToggle}
          onDelete={handleDelete}
        />
      )}
      {page === "stats" && <Stats tasks={tasks} />}
    </div>
  );
}