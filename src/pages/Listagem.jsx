import { useEffect, useState } from "react";
import { buscarUsuarios } from "../services/api";
import UserCard from "../components/UserCard";

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
                <UserCard
                    key={usuario.id}
                    usuario={usuario}
                />
            ))}
        </div>
    );
}

export default Listagem;