import { useState, useEffect } from "react";
import TodoForm from "../components/todoForm/TodoForm";

export default function NovaTarefa() {
    const [todos, setTodos] = useState(() => {
        const salva = localStorage.getItem("todos");
        return salva ? JSON.parse(salva) : [];
    });

    function adicionarTarefa(titulo){
        const nova = {
            id: Date.now(),
            texto,
            completa: false
        };
        setTodos ([nova, ...todos]);
        localStorage.setItem("todos", JSON.stringify([nova, ...todos]))
        };

        return(
        <div className="container">
            <TodoForm onAdd={adicionarTarefa} />
        </div>
        )
    


}