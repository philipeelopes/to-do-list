import { useState, useEffect } from "react";
import TodoForm from "../components/todoForm/TodoForm";

export default function NovaTarefa() {
  const [todos, setTodos] = useState(() => {
    const salva = localStorage.getItem("todos");
    return salva ? JSON.parse(salva) : [];
  });

  function adicionarTarefa(texto) {
    const nova = {
      id: Date.now(),
      texto,
      completa: false
    };

    const atualizado = [nova, ...todos];
    setTodos(atualizado);

    localStorage.setItem("todos", JSON.stringify(atualizado));
  }

  return (
    <div className="container">
      <TodoForm onAdd={adicionarTarefa} />
    </div>
  );
}
