function UserCard({ usuario }) {
  return (
    <div className="user-card">
      <h3>{usuario.nome}</h3>

      <p>
        <strong>Email:</strong> {usuario.email}
      </p>

      {usuario.telefone && (
        <p>
          <strong>Telefone:</strong> {usuario.telefone}
        </p>
      )}
    </div>
  );
}

export default UserCard;