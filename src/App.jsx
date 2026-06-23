import { Routes, Route } from "react-router-dom";

import { UsuarioProvider } from "./context/UsuarioContext";
import NavBar from "./components/NavBar";
import Home from "./pages/Home";
import Cadastro from "./pages/Cadastro";
import Listagem from "./pages/Listagem";
import "./styles/global.css";

function App() {
  return (
    <UsuarioProvider>
      <NavBar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cadastro" element={<Cadastro />} />
        <Route path="/listagem" element={<Listagem />} />
      </Routes>
    </UsuarioProvider>
  );
}

export default App;