# Sistema de Gerenciamento de Usuários - React

Uma aplicação web desenvolvida em React que implementa navegação, formulário com validação, listagem de dados e gerenciamento de estado compartilhado.

---

## 📚 Informações da Disciplina

**Disciplina:** Front-End Web  
**Professor:** José Reginaldo  
**Instituição:** IESB (Instituto de Educação Superior de Brasília)

---

## 👥 Integrantes

- **Mattheus Patricio Matos** — RA: 2314291039
- **Mariana Rinaldi de Souza** — RA: 2524290016

---

## 📋 Requisitos Funcionais

✅ Menu navegável com 3 páginas (Início, Cadastro, Listagem)  
✅ Formulário com validação em tempo real  
✅ Listagem dinâmica com filtro de busca  
✅ Gerenciamento de estado com Context API  
✅ Integração com API REST (json-server + JSONPlaceholder)  
✅ Estilização responsiva com CSS

---

## 🛠️ Tecnologias Utilizadas

| Tecnologia | Versão | Descrição |
|---|---|---|
| React | ^19.2.6 | Biblioteca UI |
| React Router | ^7.18.0 | Roteamento |
| Vite | ^8.0.12 | Build tool |
| json-server | ^1.0.0+ | API mock com persistência |
| ESLint | ^10.3.0 | Linter |

---

## 📂 Estrutura do Projeto

```
src/
├── components/
│   ├── NavBar.jsx           # Menu de navegação
│   └── UserCard.jsx         # Card para exibir usuário
├── context/
│   └── UsuarioContext.jsx   # Context API para estado compartilhado
├── pages/
│   ├── Home.jsx             # Página inicial
│   ├── Cadastro.jsx         # Formulário de cadastro
│   └── Listagem.jsx         # Lista de usuários
├── services/
│   ├── api.js               # API JSONPlaceholder
│   └── usuarioSerive.js     # API local (json-server)
├── styles/
│   └── global.css           # Estilos globais
└── App.jsx                  # Componente raiz

db.json                       # Base de dados (json-server)
docker-compose.yml            # Config Docker Compose
Dockerfile                     # Imagem Docker produção
```

---

## 🚀 Como Rodar

### Instalação

```bash
git clone <url-do-repositorio>
cd frontend-react-avaliacao
npm install
```

### Execução (2 terminais)

**Terminal 1 — API local:**
```bash
npm run api
```
Disponível em `http://localhost:3001`

**Terminal 2 — Aplicação:**
```bash
npm run dev
```
Disponível em `http://localhost:5173`

---

## 🐳 Docker

### Opção 1: Docker Compose (Dev)

```bash
docker-compose up
docker-compose exec app npm run api  # Terminal 1
docker-compose exec app npm run dev  # Terminal 2
```

### Opção 2: Dockerfile (Produção)

```bash
docker build -t frontend-react-avaliacao .
docker run -p 80:80 frontend-react-avaliacao
```

| Método | Pré-requisitos | Tempo | Ideal Para |
|--------|---|---|---|
| **npm** | Node.js | 2 min | Dev local |
| **Docker Compose** | Docker | 3 min | Dev sem Node |
| **Docker** | Docker | 5 min | Produção |

---

## ✨ Features Implementadas

✅ Formulário com 5 campos controlados  
✅ Validação: Nome (3+ chars), Email (regex), Usuário (3+ chars), Senha (6+ chars)  
✅ Mensagens de erro em tempo real com clear automático ao digitar  
✅ Context API para estado global  
✅ Dados compartilhados entre Cadastro e Listagem  
✅ Novo usuário aparece instantaneamente na listagem  
✅ Integração com 2 APIs: local (json-server) + pública (JSONPlaceholder)  
✅ Busca/filtro por nome na listagem  
✅ Feedback visual: loading, sucesso, erro  
✅ Responsivo para mobile e desktop

---

## 📝 Validações

| Campo | Validação | Mensagem |
|-------|-----------|----------|
| Nome | 3+ caracteres | "Nome deve ter no mínimo 3 caracteres" |
| Email | Formato válido | "Email inválido" |
| Usuário | 3+ caracteres | "Nome de usuário deve ter no mínimo 3 caracteres" |
| Telefone | Opcional | - |
| Senha | 6+ caracteres | "Senha deve ter no mínimo 6 caracteres" |

---

## 📡 API Endpoints

| Método | Endpoint | Descrição |
|--------|----------|-----------|
| GET | `/usuarios` | Lista todos |
| GET | `/usuarios/:id` | Busca um |
| POST | `/usuarios` | Cria novo |
| PUT | `/usuarios/:id` | Atualiza |
| DELETE | `/usuarios/:id` | Remove |

---

## 🔧 Troubleshooting

**Erro: "Cannot find module 'react'"**
```bash
npm install
```

**Porta 5173 em uso (Linux/Mac):**
```bash
lsof -ti:5173 | xargs kill -9
```

**Porta 5173 em uso (Windows):**
```bash
netstat -ano | findstr :5173
taskkill /PID <PID> /F
```

**Erro: "Cannot GET /usuarios"**
```bash
# Certifique-se que json-server está rodando
npm run api
```

**Docker não inicia:**
```bash
docker logs <container-id>
docker build --no-cache -t frontend-react-avaliacao .
```

---
