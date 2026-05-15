import type { Task } from "../types/Task";

interface StatsProps {
  tasks: Task[];
}

const PRIORITIES: Task["priority"][] = ["Alta", "Media", "Baja"];
const PRIORITY_COLOR: Record<Task["priority"], string> = {
  Alta:  "#ff4d6d",
  Media: "#ffd166",
  Baja:  "#06d6a0",
};

export default function Stats({ tasks }: StatsProps) {
  const total = tasks.length;
  const done = tasks.filter((t) => t.completed).length;
  const pending = total - done;
  const pct = total === 0 ? 0 : Math.round((done / total) * 100);

  const byPriority = PRIORITIES.map((p) => ({
    label: p,
    count: tasks.filter((t) => t.priority === p).length,
    color: PRIORITY_COLOR[p],
  }));
  const maxCount = Math.max(...byPriority.map((p) => p.count), 1);

  return (
    <div className="stats">
      <div className="page-header">
        <h2 className="page-title">Estadísticas</h2>
      </div>

      <div className="stats-grid">
        <div className="stat-card">
          <div className="stat-card__num">{total}</div>
          <div className="stat-card__label">total</div>
        </div>
        <div className="stat-card">
          <div className="stat-card__num">{done}</div>
          <div className="stat-card__label">completadas</div>
        </div>
        <div className="stat-card">
          <div className="stat-card__num">{pending}</div>
          <div className="stat-card__label">pendientes</div>
        </div>
      </div>

      <div className="progress-section">
        <div className="progress-label">
          <span>progreso general</span>
          <span>{pct}%</span>
        </div>
        <div className="progress-bar">
          <div className="progress-fill" style={{ width: `${pct}%` }} />
        </div>

        <div className="priority-breakdown">
          {byPriority.map(({ label, count, color }) => (
            <div className="pb-row" key={label}>
              <span className="pb-label" style={{ color }}>{label}</span>
              <div className="pb-track">
                <div
                  className="pb-fill"
                  style={{
                    width: `${(count / maxCount) * 100}%`,
                    background: color,
                  }}
                />
              </div>
              <span className="pb-count">{count}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}