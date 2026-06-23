import { useState, useEffect } from "react";
import { buscarUsuarios as buscarUsuariosLocal } from "../services/usuarioSerive";
import { buscarUsuarios as buscarUsuariosApi } from "../services/api";
import { UsuarioContext } from "./usuario-context";

export function UsuarioProvider({ children }) {
  const [usuarios, setUsuarios] = useState([]);
  const [loading, setLoading] = useState(true);

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

        setUsuarios([...usuariosLocal, ...usuariosApi]);
      } catch (erro) {
        console.error("Erro ao carregar usuários:", erro);
      } finally {
        setLoading(false);
      }
    }

    carregarUsuarios();
  }, []);

  function adicionarUsuario(novoUsuario) {
    setUsuarios((prev) => [novoUsuario, ...prev]);
  }

  return (
    <UsuarioContext.Provider value={{ usuarios, loading, adicionarUsuario }}>
      {children}
    </UsuarioContext.Provider>
  );
}
