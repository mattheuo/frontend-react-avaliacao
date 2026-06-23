import { Routes, Route } from "react-router-dom";

import NavBar from "./components/NavBar";
import Home from "./pages/Home";
import Cadastro from "./pages/Cadastro";
import Listagem from "./pages/Listagem";
import "./styles/global.css";

function App() {
  return (
    <>
      <NavBar />

      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/cadastro" element={<Cadastro />} />

        <Route path="/listagem" element={<Listagem />} />
      </Routes>
    </>
  );
}

export default App;