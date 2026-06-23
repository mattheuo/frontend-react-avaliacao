function UserCard({ usuario }) {
  return (
    <div>
      <h3>{usuario.name}</h3>

      <p>
        <strong>Email:</strong> {usuario.email}
      </p>

      <p>
        <strong>Cidade:</strong> {usuario.address.city}
      </p>
    </div>
  );
}

export default UserCard;