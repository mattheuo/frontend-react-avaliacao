import { useState } from "react";
import { criarUsuario } from "../services/usuarioSerive";

function Cadastro() {
  const [form, setForm] = useState({
    nome: "",
    email: "",
    usuario: "",
    telefone: "",
    senha: "",
  });

  const [mensagem, setMensagem] = useState("");
  const [erro, setErro] = useState("");
  const [loading, setLoading] = useState(false);

  function handleChange(e) {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setErro("");
    setMensagem("");
    setLoading(true);
    try {
      await criarUsuario(form);
      setMensagem("Cadastro realizado com sucesso!");
      setForm({ nome: "", email: "", usuario: "", telefone: "", senha: "" });
    } catch {
      setErro("Erro ao realizar cadastro. Verifique se a API está rodando.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="container">
      <h1>Cadastro de Usuário</h1>

      {mensagem && <p className="mensagem-sucesso">{mensagem}</p>}
      {erro && <p className="mensagem-erro">{erro}</p>}

      <form className="form-cadastro" onSubmit={handleSubmit}>
        <div className="campo">
          <label htmlFor="nome">Nome completo</label>
          <input
            type="text"
            id="nome"
            name="nome"
            placeholder="Digite seu nome"
            value={form.nome}
            onChange={handleChange}
            required
          />
        </div>

        <div className="campo">
          <label htmlFor="email">E-mail</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Digite seu e-mail"
            value={form.email}
            onChange={handleChange}
            required
          />
        </div>

        <div className="campo">
          <label htmlFor="usuario">Nome de usuário</label>
          <input
            type="text"
            id="usuario"
            name="usuario"
            placeholder="Escolha um nome de usuário"
            value={form.usuario}
            onChange={handleChange}
            required
          />
        </div>

        <div className="campo">
          <label htmlFor="telefone">Telefone</label>
          <input
            type="tel"
            id="telefone"
            name="telefone"
            placeholder="Digite seu telefone"
            value={form.telefone}
            onChange={handleChange}
          />
        </div>

        <div className="campo">
          <label htmlFor="senha">Senha</label>
          <input
            type="password"
            id="senha"
            name="senha"
            placeholder="Crie uma senha"
            value={form.senha}
            onChange={handleChange}
            required
          />
        </div>

        <button type="submit" className="btn-cadastro" disabled={loading}>
          {loading ? "Cadastrando..." : "Cadastrar"}
        </button>
      </form>
    </div>
  );
}

export default Cadastro;
