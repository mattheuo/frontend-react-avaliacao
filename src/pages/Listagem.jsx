import { useEffect, useState } from "react";
import { buscarUsuarios as buscarUsuariosLocal } from "../services/usuarioSerive";
import { buscarUsuarios as buscarUsuariosApi } from "../services/api";
import UserCard from "../components/UserCard";

function Listagem() {
  const [usuarios, setUsuarios] = useState([]);
  const [loading, setLoading] = useState(true);
  const [busca, setBusca] = useState("");

  useEffect(() => {
    async function carregarUsuarios() {
      try {
        const [dadosApi, dadosLocal] = await Promise.allSettled([
          buscarUsuariosApi(),
          buscarUsuariosLocal(),
        ]);

        const usuariosApi =
          dadosApi.status === "fulfilled"
            ? dadosApi.value.map((u) => ({ ...u, nome: u.name }))
            : [];

        const usuariosLocal =
          dadosLocal.status === "fulfilled" ? dadosLocal.value : [];

        setUsuarios([...usuariosApi, ...usuariosLocal]);
      } catch (erro) {
        console.error("Erro:", erro);
      } finally {
        setLoading(false);
      }
    }

    carregarUsuarios();
  }, []);

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