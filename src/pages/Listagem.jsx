import { useContext, useState } from "react";
import { UsuarioContext } from "../context/UsuarioContext";
import UserCard from "../components/UserCard";

function Listagem() {
  const { usuarios, loading } = useContext(UsuarioContext);
  const [busca, setBusca] = useState("");

  const usuariosFiltrados = usuarios.filter((usuario) =>
    usuario.nome?.toLowerCase().includes(busca.toLowerCase())
  );

  if (loading) {
    return <h2>Carregando...</h2>;
  }

  return (
    <div className="container">
      <h1>Lista de Usuários</h1>

      <input
        type="text"
        placeholder="Pesquisar usuário..."
        value={busca}
        onChange={(e) => setBusca(e.target.value)}
        className="campo-busca"
      />

      {usuariosFiltrados.map((usuario) => (
        <UserCard
          key={usuario.id}
          usuario={usuario}
        />
      ))}
    </div>
  );
}

export default Listagem;