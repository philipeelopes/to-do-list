import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";

import Menu from "./components/Menu/Menu";
import Home from "./pages/Home";
import Tarefas from "./pages/Tarefas";
import NovaTarefa from "./pages/NovaTarefa";

export default function App() {
  const [dark, setDark] = useState(false);
  return (
    <Router>

      <div className={`appContainer ${dark ? "dark" : ""}`}>
        <Menu dark={dark} setDark={setDark} />

        <main className="pageContainer">
          <Routes >
            <Route path="/" element={<Home />} />
            <Route path="/tarefas" element={<Tarefas />} />
            <Route path="/nova-tarefa" element={<NovaTarefa />} />
          </Routes>

        </main>

      </div>

    </Router>
  );
}
