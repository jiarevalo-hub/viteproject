interface NavbarProps {
  page: string;
  setPage: (page: string) => void;
}

export default function Navbar({ page, setPage }: NavbarProps) {
  return (
    <nav className="navbar">
      <div className="navbar__logo">taskflow.</div>
      <div className="navbar__nav">
        <button
          className={`nav-btn ${page === "home" ? "active" : ""}`}
          onClick={() => setPage("home")}
        >
          home
        </button>
        <button
          className={`nav-btn ${page === "tasks" ? "active" : ""}`}
          onClick={() => setPage("tasks")}
        >
          /tasks
        </button>
        <button
          className={`nav-btn ${page === "stats" ? "active" : ""}`}
          onClick={() => setPage("stats")}
        >
          /stats
        </button>
      </div>
    </nav>
  );
}
