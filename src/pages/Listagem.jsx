import { useContext, useState } from "react";
import { UsuarioContext } from "../context/usuario-context";
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
      <section className="section-header">
        <h1>Lista de Usuários</h1>
      </section>

      <input
        type="text"
        placeholder="Pesquisar usuário..."
        value={busca}
        onChange={(e) => setBusca(e.target.value)}
        className="campo-busca"
      />

      <section className="list-grid">
        {usuariosFiltrados.map((usuario) => (
          <UserCard key={usuario.id} usuario={usuario} />
        ))}
      </section>

      {usuariosFiltrados.length === 0 && (
        <p className="mensagem-erro">Nenhum usuário encontrado para essa busca.</p>
      )}
    </div>
  );
}

export default Listagem;