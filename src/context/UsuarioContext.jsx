import { createContext, useState, useEffect } from "react";
import { buscarUsuarios as buscarUsuariosLocal } from "../services/usuarioSerive";
import { buscarUsuarios as buscarUsuariosApi } from "../services/api";

export const UsuarioContext = createContext();

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

        setUsuarios([...usuariosApi, ...usuariosLocal]);
      } catch (erro) {
        console.error("Erro ao carregar usuários:", erro);
      } finally {
        setLoading(false);
      }
    }

    carregarUsuarios();
  }, []);

  function adicionarUsuario(novoUsuario) {
    setUsuarios((prev) => [...prev, novoUsuario]);
  }

  return (
    <UsuarioContext.Provider value={{ usuarios, loading, adicionarUsuario }}>
      {children}
    </UsuarioContext.Provider>
  );
}
