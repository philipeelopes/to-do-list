import { useState, useEffect, use } from "react";

import Header from "./components/Header";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";

import "./App.css";

export default function App(){
    const [todos, setTodos] = useState(() => {
      // Carrega tarefas salvas no navegador
      const salva = localStorage.getItem("todos");
      return salva ? JSON.parse(salva) : [];
  });

     // Salva as tarefas sempre que mudarem
     useEffect(() => {
      localStorage.setItem("todos", JSON.stringify(todos));
     }) [todos];

    function adicionarTarefa(texto){
        const nova = {
            id: Date.now(),
            texto,
            completa: false,
        };
        setTodos ([nova, ...todos]);
      };

      const alterarTarefa = (id) =>{
        const atualizado = todos.map((t) => 
          t.id === id ? {...t, completa: !t.completa} : t
        );
        setTodos(atualizado);
      }

      const deletarTarefa = (id) => {
        const filtrado = todos.filter((t) => t.id !== id); 
        setTodos(filtrado);
      };

      return(
        <div className="container">
          <header/>

          <TodoForm onAdd={adicionarTarefa}/>

          <TodoList
          todos={todos}
          onToggle={alterarTarefa}
          onDelete={deletarTarefa}
          />
        </div>
      )




}