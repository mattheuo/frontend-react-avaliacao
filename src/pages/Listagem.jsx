import { useEffect, useState } from "react";
import { buscarUsuarios } from "../services/api";

function Listagem() {
  const [usuarios, setUsuarios] = useState([]);
  const [loading, setLoading] = useState(true);

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

  if (loading) {
    return <h2>Carregando...</h2>;
  }

  return (
    <div>
      <h1>Lista de Usuários</h1>

      {usuarios.map((usuario) => (
        <div key={usuario.id}>
          <h3>{usuario.name}</h3>
          <p>Email: {usuario.email}</p>
          <p>Cidade: {usuario.address.city}</p>
        </div>
      ))}
    </div>
  );
}

export default Listagem;