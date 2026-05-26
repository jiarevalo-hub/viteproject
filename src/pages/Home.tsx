import "../pages/styles/Home.css"; // Asegúrate de tener este archivo CSS para los estilos
import React from 'react';

// 1. AGREGA ESTA INTERFACE ANTES DEL COMPONENTE
interface HomeProps {
  cambiarPantalla: (pantalla: string) => void;
}

// 2. ASEGÚRATE DE DESTRUCTURAR LA PROP ENTRE LAS LLAVES { cambiarPantalla }
const Home: React.FC<HomeProps> = ({ cambiarPantalla }) => {


  return (

    <>
    <div className="home-container">
      {/* Tu código del menú y botones que usan cambiarPantalla('tareas') */}
    </div>

      <div className="home-container">
      {/* Menú de Navegación */}
      <nav className="home-nav">
        <div className="nav-logo">TaskApp</div>
        <ul className="nav-links">
          <li>
            <button className="nav-btn active" onClick={() => cambiarPantalla('home')}>
              Inicio
            </button>
          </li>
          <li>
            <button className="nav-btn" onClick={() => cambiarPantalla('tareas')}>
              Tareas
            </button>
          </li>
          <li><button className="nav-btn" onClick={() => cambiarPantalla('estadisticas')}><span>Estadísticas</span></button></li>
        </ul>
      </nav>

      <main className="home-main">
        <header className="home-header">
          <h1 className="home-title">Gestor de Tareas Pro</h1>
          <p className="home-welcome">¡Hola de nuevo! Organiza tu día de forma Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo aperiam nihil esse porro at ducimus, officia ipsam quisquam cum aut, dolore error quae itaque, recusandae voluptate atque tenetur earum facere. eficiente Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minus eius explicabo nobis dicta excepturi rem laboriosam in sequi provident placeat suscipit velit dolorum, voluptatum doloremque quae tenetur autem quis ab..</p>
        </header>

        {/* Sección de Botones Obligatorios */}
        <section className="home-actions">
          <button className="btn btn-primary" onClick={() => cambiarPantalla('tareas')}>
            <span className="btn-icon">📋</span> Ir a tareas
          </button>
          
          <button className="btn btn-secondary" onClick={() => cambiarPantalla('estadisticas')}>
            <span className="btn-icon">📊</span> Ir a estadísticas
          </button>
        </section>
      </main>
    </div>

    </>

  );

  
};

export default Home;