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

  const [erros, setErros] = useState({});
  const [mensagem, setMensagem] = useState("");
  const [erro, setErro] = useState("");
  const [loading, setLoading] = useState(false);

  function handleChange(e) {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (erros[name]) {
      setErros((prev) => ({ ...prev, [name]: "" }));
    }
  }

  function validarFormulario() {
    const novoErros = {};

    if (!form.nome || form.nome.trim().length < 3) {
      novoErros.nome = "Nome deve ter no mínimo 3 caracteres";
    }

    if (!form.email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      novoErros.email = "Email inválido";
    }

    if (!form.usuario || form.usuario.trim().length < 3) {
      novoErros.usuario = "Nome de usuário deve ter no mínimo 3 caracteres";
    }

    if (!form.senha || form.senha.length < 6) {
      novoErros.senha = "Senha deve ter no mínimo 6 caracteres";
    }

    return novoErros;
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setErro("");
    setMensagem("");

    const novoErros = validarFormulario();
    if (Object.keys(novoErros).length > 0) {
      setErros(novoErros);
      return;
    }

    setErros({});
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
            className={erros.nome ? "input-erro" : ""}
          />
          {erros.nome && <span className="mensagem-campo-erro">{erros.nome}</span>}
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
            className={erros.email ? "input-erro" : ""}
          />
          {erros.email && <span className="mensagem-campo-erro">{erros.email}</span>}
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
            className={erros.usuario ? "input-erro" : ""}
          />
          {erros.usuario && <span className="mensagem-campo-erro">{erros.usuario}</span>}
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
            className={erros.senha ? "input-erro" : ""}
          />
          {erros.senha && <span className="mensagem-campo-erro">{erros.senha}</span>}
        </div>

        <button type="submit" className="btn-cadastro" disabled={loading}>
          {loading ? "Cadastrando..." : "Cadastrar"}
        </button>
      </form>
    </div>
  );
}

export default Cadastro;
