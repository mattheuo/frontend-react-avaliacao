import { Routes, Route } from "react-router-dom";

import NavBar from "./components/NavBar";
import Home from "./pages/Home";
import Listagem from "./pages/Listagem";
import "./styles/global.css";

function App() {
  return (
    <>
      <NavBar />

      <Routes>
        <Route path="/" element={<Home />} />

        <Route
          path="/cadastro"
          element={<h1>Página de Cadastro</h1>}
        />

        <Route path="/listagem" element={<Listagem />} />
      </Routes>
    </>
  );
}

export default App;