import type { Task } from "../types/Task";

interface HomeProps {
  setPage: (page: string) => void;
  tasks: Task[];
}

export default function Home({ setPage, tasks }: HomeProps) {
  const done = tasks.filter((t) => t.completed).length;
  const pending = tasks.filter((t) => !t.completed).length;

  return (
    <div className="home">
      <p className="home__eyebrow">// sistema de gestión de tareas</p>
      <h1 className="home__title">
        Organiza tu<br />
        <span>flujo de trabajo</span>
        <br />
        sin fricción.
      </h1>
      <p className="home__desc">
        Una SPA interactiva para gestionar tus tareas personales. Agrega,
        completa y analiza tu productividad en tiempo real.
      </p>
      <div className="home__actions">
        <button className="btn-primary" onClick={() => setPage("tasks")}>
          → Ir a tareas
        </button>
        <button className="btn-secondary" onClick={() => setPage("stats")}>
          Ver estadísticas
        </button>
      </div>
      <div className="home__decoration">
        <div className="deco-card">
          <div className="deco-card__num">{tasks.length}</div>
          <div className="deco-card__label">total tareas</div>
        </div>
        <div className="deco-card">
          <div className="deco-card__num">{done}</div>
          <div className="deco-card__label">completadas</div>
        </div>
        <div className="deco-card">
          <div className="deco-card__num">{pending}</div>
          <div className="deco-card__label">pendientes</div>
        </div>
      </div>
    </div>
  );
}