import Styles from "./TodoItem.module.css";

export default function TodoItem({ todo, onToggle, onDelete }) {
 return (
    <li className={Styles.todoItem}>
        <label>
            <input type="checkbox"
            checked={todo.completa}
            onChange={() => onToggle(todo.id)} 
            />
            <span className={todo.completa ? Styles.feito : ""}>{todo.texto}</span>
        </label>

        <button className={Styles.btnDelete} onClick={() => onDelete(todo.id)}>Excluir</button>
    </li>
 )

}