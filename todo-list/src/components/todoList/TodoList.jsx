import Styles from "./TodoList.module.css";

import TodoItem from "../todoItem/TodoItem";

export default function TodoList({ todos, onToggle, onDelete }) {
    return(
        <ul className={Styles.todoList}>
            {todos.length === 0 && <p className={Styles.vazio}>Nenhuma tarefa adicionada</p>}

            {todos.map((todo) =>(
                <TodoItem
                key={todo.id}
                todo={todo}
                onToggle={onToggle}
                onDelete={onDelete}
                /> 
            ))}

        </ul>
    );
}