import { useState } from "react";

export default function TodoForm( {onAdd}){
    const [text, setText] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();

        if (text.trim() === "") return;

        onAdd(text);
        setText("");
    };

    return(
        <form className="todo-form" onSubmit={handleSubmit}>
            <input type="text"
            placeholder="Digite uma tarefa..."
            value={text}
            onChange={(e) => setText(e.target.value)} />
            <button type="submit">Adicionar</button>
        </form>

    );
}