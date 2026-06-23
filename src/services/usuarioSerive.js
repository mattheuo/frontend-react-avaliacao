const BASE_URL = "http://localhost:3001/usuarios";

export async function buscarUsuarios() {
  const response = await fetch(BASE_URL);
  if (!response.ok) throw new Error("Erro ao buscar usuários");
  return response.json();
}

export async function buscarUsuarioPorId(id) {
  const response = await fetch(`${BASE_URL}/${id}`);
  if (!response.ok) throw new Error("Erro ao buscar usuário");
  return response.json();
}

export async function criarUsuario(usuario) {
  const response = await fetch(BASE_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(usuario),
  });
  if (!response.ok) throw new Error("Erro ao criar usuário");
  return response.json();
}

export async function atualizarUsuario(id, usuario) {
  const response = await fetch(`${BASE_URL}/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(usuario),
  });
  if (!response.ok) throw new Error("Erro ao atualizar usuário");
  return response.json();
}

export async function deletarUsuario(id) {
  const response = await fetch(`${BASE_URL}/${id}`, {
    method: "DELETE",
  });
  if (!response.ok) throw new Error("Erro ao deletar usuário");
}
