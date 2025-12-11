import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Menu from "./components/Menu/Menu";
import "./App.css";

import Home from "./pages/Home";
import Tarefas from "./pages/Tarefas";
import NovaTarefa from "./pages/NovaTarefa";

export default function App() {
  return (
    <Router>
      <Menu />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/tarefas" element={<Tarefas />} />
        <Route path="/nova-tarefa" element={<NovaTarefa />} />
      </Routes>
    </Router>
  );
}
