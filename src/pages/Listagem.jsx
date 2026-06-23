import { useEffect, useState } from "react";
import { buscarUsuarios } from "../services/api";
import UserCard from "../components/UserCard";

function Listagem() {
  const [usuarios, setUsuarios] = useState([]);
  const [loading, setLoading] = useState(true);
  const [busca, setBusca] = useState("");

  useEffect(() => {
    async function carregarUsuarios() {
      try {
        const dados = await buscarUsuarios();
        setUsuarios(dados);
      } catch (erro) {
        console.error("Erro:", erro);
      } finally {
        setLoading(false);
      }
    }

    carregarUsuarios();
  }, []);

  const usuariosFiltrados = usuarios.filter((usuario) =>
    usuario.name.toLowerCase().includes(busca.toLowerCase())
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