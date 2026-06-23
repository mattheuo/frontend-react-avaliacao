import { Link } from "react-router-dom";

function NavBar() {
  return (
    <nav className="site-nav">
      <div className="nav-shell">
        <Link to="/" className="brand-link">
          <span className="brand-dot" aria-hidden="true"></span>
          UserFlow
        </Link>

        <div className="nav-links" aria-label="Menu principal">
          <Link to="/">Início</Link>
          <Link to="/cadastro">Cadastro</Link>
          <Link to="/listagem">Listagem</Link>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;