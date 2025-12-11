import { useState, useEffect } from "react";
import TodoList from "../components/todoList/TodoList";
import BotaoExcluirTudo from "../components/botaoExcluirTudo/BotaoExcluirTudo";



export default function Tarefas() {
    const [todos, setTodos] = useState(() => {
      // Carrega tarefas salvas no navegador
      const salva = localStorage.getItem("todos");
      return salva ? JSON.parse(salva) : [];
  });

     // Salva as tarefas sempre que mudarem
     useEffect(() => {
      localStorage.setItem("todos", JSON.stringify(todos));
     }, [todos]);

     
      function alterarTarefa  (id){
        const atualizado = todos.map((t) => 
          t.id === id ? {...t, completa: !t.completa} : t
        ); //altera o status da tarefa
        setTodos(atualizado);
      }

      function deletarTarefa (id) {
        const filtrado = todos.filter((t) => t.id !== id); 
        setTodos(filtrado); //remove a tarefa com o id correspondente
      };

       function limparTudo(){
        setTodos([]); //remove todas as tarefas
      }

      

      return(
        <div className="container">
            <TodoList todos={todos} onDelete={deletarTarefa} onToggle={alterarTarefa} />

             <BotaoExcluirTudo onClear={limparTudo} disabled={todos.length === 0} />
        </div>
      )




}