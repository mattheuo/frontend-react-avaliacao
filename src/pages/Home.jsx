function Home() {
  return (
    <div className="container">
      <section className="hero-home">
        <p className="eyebrow">Projeto React + API REST</p>
        <h1>Sistema de Gerenciamento de Usuários</h1>
        <p className="lead">
          Aplicação com navegação por rotas, formulário validado, listagem dinâmica
          e estado compartilhado para simular um fluxo real de frontend.
        </p>
      </section>

      <section className="cards-grid">
        <article className="info-card">
          <h2>Navegação</h2>
          <p>3 páginas principais com roteamento entre Início, Cadastro e Listagem.</p>
        </article>

        <article className="info-card">
          <h2>Formulário</h2>
          <p>Campos controlados com validação e feedback visual de erro/sucesso.</p>
        </article>

        <article className="info-card">
          <h2>Estado Compartilhado</h2>
          <p>Dados criados no cadastro aparecem imediatamente na listagem.</p>
        </article>

        <article className="info-card">
          <h2>Integração REST</h2>
          <p>Consumo de API externa e API local mock para compor os dados.</p>
        </article>
      </section>
    </div>
  );
}

export default Home;