import { Link } from "react-router-dom";

function NavBar() {
  return (
    <nav>
      <Link to="/">Início</Link> |{" "}
      <Link to="/cadastro">Cadastro</Link> |{" "}
      <Link to="/listagem">Listagem</Link>
    </nav>
  );
}

export default NavBar;